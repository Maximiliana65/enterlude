// core/gemini-selectors.js
// Gemini向けのセレクタ定義を1箇所にまとめたもの。
//
// core/gemini-page-guard.js (MAIN world) と adapters/gemini.js (ISOLATED world) の
// 両方から、このファイルをそのまま読み込んで使う。ふたつのworldは別々のJS実行環境の
// ため変数そのものは共有できないが、同じ内容のファイルをそれぞれに読み込ませることで、
// 「セレクタを直す場所」を実質1箇所にまとめている(ChatGPT側で起きたのと同種のズレの予防)。
//
// COMPOSER_SELECTORは、Geminiの入力欄が rich-textarea 内のQuillエディタ
// (class="ql-editor" の contenteditable)であることを踏まえた、実機確認済みの定義。
(function () {
  window.EnterludeGeminiSelectors = {
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
})();
