// core/dom-utils.js
// 各サイトアダプター(adapters/*.js)が共通で使う、簡単なDOM判定のヘルパー。
// 「セレクタの配列のどれかに一致するか」を判定するだけの、小さな関数。

window.SendGuard = window.SendGuard || {};

window.SendGuard.domUtils = {
  /**
   * el自身、またはその祖先要素が selectors のどれかに一致すれば true
   * @param {Element} el
   * @param {string[]} selectors CSSセレクタの配列
   */
  matchesAny(el, selectors) {
    if (!el || !el.closest) return false;
    return !!el.closest(selectors.join(','));
  },

  /**
   * chrome.*のAPI呼び出しを安全に行うヘルパー。
   * 拡張機能が更新・再読み込みされた後、開きっぱなしだったタブでは
   * "Extension context invalidated" というエラーが起きることがある。
   * (タブを再読み込みすれば直るが、それまでの間エラーで壊れて見えないようにする)
   * @param {() => any} fn
   * @param {any} fallback fn()が失敗した時に返す値
   */
  safeCall(fn, fallback) {
    try {
      return fn();
    } catch (e) {
      return fallback;
    }
  }
};
