// adapters/gemini.js
// Gemini (https://gemini.google.com) 専用のアダプター。
//
// ⚠️ このファイルの isComposerElement / isSendButton / isRetryButton は、
// 現状 Gemini では一度も呼び出されない(usesMainWorldGuard: trueのため、
// core/content-main.js側で早期returnされる)。実際に効いている判定ロジックは
// core/gemini-page-guard.js にある。ここに残しているのは、将来MAIN world
// ガードをやめてISOLATED world側だけで完結させたくなった場合に、すぐ使える
// 形にしておくため。
//
// セレクタの実体は core/gemini-selectors.js に一本化してあるので、
// 画面デザインが変わって調整が必要な場合は、そちらだけを直せば
// (このファイルとcore/gemini-page-guard.jsの)両方に反映される。

window.Enterlude = window.Enterlude || {};

(function () {
  const { matchesAny } = window.Enterlude.domUtils;
  // 通常はmanifestで gemini-selectors.js が先に読み込まれる。念のため、拡張機能の
  // 初期化順が前後してもUI・ロック状態の同期まで止まらないよう予備定義を使う。
  const selectors = window.EnterludeGeminiSelectors || {
    COMPOSER_SELECTOR: 'rich-textarea .ql-editor[contenteditable="true"], rich-textarea [contenteditable="true"]',
    SEND_SELECTOR: [
      'button[aria-label*="Send" i]',
      'button[aria-label*="送信" i]',
      'button[aria-label*="Submit" i]'
    ].join(','),
    RETRY_SELECTOR: [
      'button[aria-label*="Regenerate" i]',
      'button[aria-label*="Retry" i]',
      'button[aria-label*="再生成" i]',
      'button[aria-label*="Try again" i]',
      'button[aria-label*="再試行" i]',
      'button[aria-label*="やり直" i]',
      'button[mattooltip*="やり直" i]',
      'button[data-tooltip*="やり直" i]',
      'button[title*="やり直" i]'
    ].join(',')
  };
  const { COMPOSER_SELECTOR, SEND_SELECTOR, RETRY_SELECTOR } = selectors;

  window.Enterlude.adapter = {
    // CSS側でサイトごとに見た目を微調整するための識別名(core/lock-ui.css参照)
    siteId: 'gemini',
    // Geminiは入力欄を動的に作り直すため、送信判定をMAIN worldの専用ガードで行う。
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
