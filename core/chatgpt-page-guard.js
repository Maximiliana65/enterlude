// ChatGPT の Enter 送信をページ本体と同じ MAIN world で先回りして止めるガード。
// content script の ISOLATED world では、ページ側の window リスナーより後に
// 呼ばれるブラウザ実装があるため、送信を止める処理だけをここに分離する。
// ロック状態と表示は従来どおり core/content-main.js が担当する。
(function () {
  'use strict';

  if (window.__enterludeChatGPTPageGuardInstalled) return;

  const STATE_ATTRIBUTE = 'data-enterlude-unlocked';
  // manifestでは chatgpt-selectors.js を先に読み込むが、MAIN worldでは
  // ページ遷移直後に定義がまだ見えないことがある。未定義のまま分割代入して
  // ガード全体が止まらないよう、ここにも動作に必要な最小限の予備定義を置く。
  const selectors = window.EnterludeChatGPTSelectors || {
    COMPOSER_SELECTOR: '#prompt-textarea[contenteditable="true"], #prompt-textarea',
    SEND_SELECTOR: [
      'button[data-testid="send-button"]',
      'button[aria-label*="Send" i]',
      'button[aria-label*="送信" i]'
    ].join(','),
    RETRY_SELECTOR: [
      'button[aria-label*="Regenerate" i]',
      'button[aria-label*="再生成" i]',
      'button[aria-label*="Try again" i]',
      'button[aria-label*="再試行" i]'
    ].join(',')
  };
  const { COMPOSER_SELECTOR, SEND_SELECTOR, RETRY_SELECTOR } = selectors;

  window.__enterludeChatGPTPageGuardInstalled = true;

  function isUnlocked() {
    return document.documentElement.getAttribute(STATE_ATTRIBUTE) === 'true';
  }

  function publish(name) {
    window.dispatchEvent(new Event(name));
  }

  function relock() {
    document.documentElement.removeAttribute(STATE_ATTRIBUTE);
    publish('enterlude:state');
  }

  function elementFromEvent(event) {
    const target = event.target;
    return target instanceof Element ? target : null;
  }

  function composerFromEvent(event) {
    const target = elementFromEvent(event);
    return target ? target.closest(COMPOSER_SELECTOR) : null;
  }

  function isProtectedButton(event) {
    const target = elementFromEvent(event);
    return !!target && !!target.closest(`${SEND_SELECTOR}, ${RETRY_SELECTOR}`);
  }

  function insertLineBreak(composer) {
    composer.focus();

    if (composer instanceof HTMLTextAreaElement) {
      const start = composer.selectionStart;
      const end = composer.selectionEnd;
      const nextValue = `${composer.value.slice(0, start)}\n${composer.value.slice(end)}`;
      const descriptor = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
      descriptor.set.call(composer, nextValue);
      composer.selectionStart = composer.selectionEnd = start + 1;
      composer.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }

    // ChatGPT のProseMirrorに直接改行文字を挿入すると、改行ではなく空白文字として
    // 扱われることがある。そのため、ChatGPTが元々サポートしているShift+Enterの
    // キー処理を呼び、サイト自身に正しい改行を作らせる。
    composer.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      shiftKey: true,
      bubbles: true,
      cancelable: true,
      composed: true
    }));
  }

  // ChatGPT公式の設定でEnterが改行になっている場合、解除中のEnterを
  // 通しただけでは送信が成立しない。入力欄が実際に空になった場合だけ
  // 送信成立として再ロックし、コメント通知を発行する。
  function relockAfterActualSend(composer) {
    if (!composer.textContent.trim()) return;

    const observer = new MutationObserver(() => {
      const currentComposer = document.querySelector(COMPOSER_SELECTOR);
      const wasCleared = currentComposer && !currentComposer.textContent.trim();

      if (wasCleared) {
        observer.disconnect();
        if (isUnlocked()) {
          relock();
          publish('enterlude:sent');
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // 送信が成立しなかった場合は解除状態を維持し、Escなどで
    // 利用者が通常どおり取り消せるようにする。
    setTimeout(() => observer.disconnect(), 5000);
  }

  window.addEventListener('keydown', (event) => {
    if (event.isComposing || event.keyCode === 229) return;

    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'u') {
      document.documentElement.setAttribute(STATE_ATTRIBUTE, 'true');
      event.preventDefault();
      event.stopImmediatePropagation();
      publish('enterlude:state');
      return;
    }

    if (event.key === 'Escape' && isUnlocked()) {
      relock();
      return;
    }

    if (event.key !== 'Enter' || event.shiftKey) return;
    const composer = composerFromEvent(event);
    if (!composer) return;

    if (isUnlocked()) {
      relockAfterActualSend(composer);
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    insertLineBreak(composer);
  }, true);

  window.addEventListener('click', (event) => {
    if (!isProtectedButton(event)) return;

    if (isUnlocked()) {
      relock();
      publish('enterlude:sent');
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
})();
