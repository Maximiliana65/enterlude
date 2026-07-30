// adapters/chatgpt.js
// ChatGPT (https://chatgpt.com) 専用のアダプター。
//
// ⚠️ このファイルの isComposerElement / isSendButton / isRetryButton は、
// 現状 ChatGPT では一度も呼び出されない(usesMainWorldGuard: trueのため、
// core/content-main.js側で早期returnされる)。実際に効いている判定ロジックは
// core/chatgpt-page-guard.js にある。ここに残しているのは、将来MAIN world
// ガードをやめてISOLATED world側だけで完結させたくなった場合に、すぐ使える
// 形にしておくため。
//
// セレクタの実体は core/chatgpt-selectors.js に一本化してあるので、
// 画面デザインが変わって調整が必要な場合は、そちらだけを直せば
// (このファイルとcore/chatgpt-page-guard.jsの)両方に反映される。

window.Enterlude = window.Enterlude || {};

(function () {
  const { matchesAny } = window.Enterlude.domUtils;
  // 通常はmanifestで chatgpt-selectors.js が先に読み込まれる。念のため、拡張機能の
  // 初期化順が前後してもUI・ロック状態の同期まで止まらないよう予備定義を使う。
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

  window.Enterlude.adapter = {
    // CSS側でサイトごとに見た目を微調整するための識別名(core/lock-ui.css参照)
    siteId: 'chatgpt',
    // Enter は ChatGPT のページ本体と同じ実行コンテキストで先に止める。
    // UI とロック状態は content-main.js 側で引き続き管理する。
    usesMainWorldGuard: true,
    isComposerElement(el) {
      return matchesAny(el, [COMPOSER_SELECTOR]);
    },
    isSendButton(el) {
      return matchesAny(el, [SEND_SELECTOR]);
    },
    isRetryButton(el) {
      return matchesAny(el, [RETRY_SELECTOR]);
    }
  };
})();
