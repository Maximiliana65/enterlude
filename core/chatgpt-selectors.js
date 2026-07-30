// core/chatgpt-selectors.js
// ChatGPT向けのセレクタ定義を1箇所にまとめたもの。
//
// core/chatgpt-page-guard.js (MAIN world) と adapters/chatgpt.js (ISOLATED world) の
// 両方から、このファイルをそのまま読み込んで使う。ふたつのworldは別々のJS実行環境の
// ため変数そのものは共有できないが、同じ内容のファイルをそれぞれに読み込ませることで、
// 「セレクタを直す場所」を実質1箇所にまとめている(2箇所を直し忘れて起きた不具合の再発防止)。
//
// COMPOSER_SELECTORは、2026-07-18に実機のF12調査で特定した
// `#prompt-textarea`(contenteditable="true", role="textbox")を正としている。
(function () {
  window.EnterludeChatGPTSelectors = {
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
})();
