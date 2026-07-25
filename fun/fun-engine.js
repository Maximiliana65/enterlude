// fun/fun-engine.js
// fun/comments.ja.js, comments.en.js のデータを使って、実際に画面に一言コメントを
// 表示する役割。「何を表示するか(comments.*.js)」と「どう表示するか(このファイル)」を
// 分けているので、表示の演出だけ後から変えたい時もここだけ触ればいい。

window.SendGuard = window.SendGuard || {};

window.SendGuard.funEngine = {
  showRandomComment() {
    const list = this._pickCommentsList();
    if (list.length === 0) return;

    // season が指定されているコメントは、その期間の外では候補から完全に除外する
    const available = list.filter((item) => this._isInSeason(item));
    if (available.length === 0) return;

    // rare なコメントほど出現率を下げるための重み付け抽選
    const pool = [];
    available.forEach((item) => {
      const weight = item.rare ? 1 : 6;
      for (let i = 0; i < weight; i++) pool.push(item);
    });

    const picked = pool[Math.floor(Math.random() * pool.length)];
    this._showToast(picked);
  },

  // ブラウザの表示言語に応じて、日本語版/英語版/韓国語版のどれを使うか選ぶ。
  // 該当する言語が無い場合は日本語→英語の順にフォールバックする。
  _pickCommentsList() {
    const sets = window.SendGuardComments || {};
    const lang = (chrome.i18n.getUILanguage() || 'ja').toLowerCase();
    let preferred;
    if (lang.startsWith('ja')) preferred = sets.ja;
    else if (lang.startsWith('ko')) preferred = sets.ko;
    else preferred = sets.en;
    return preferred || sets.ja || sets.en || sets.ko || [];
  },

  // 今日の日付が、コメントの season(期間指定)に当てはまるか判定する
  _isInSeason(item) {
    if (!item.season) return true; // 季節限定でなければ常に対象

    const { from, to } = item.season;
    const today = this._todayKey();

    if (from <= to) {
      // 通常の期間(例: 10-25 〜 10-31)
      return today >= from && today <= to;
    }
    // 年をまたぐ期間(例: 12-28 〜 01-03)
    return today >= from || today <= to;
  },

  // 今日の日付を "MM-DD" 形式の文字列にする(例: "07-19")
  _todayKey() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${mm}-${dd}`;
  },

  _showToast(item) {
    const el = document.createElement('div');
    el.className = 'sg-toast';
    el.textContent = `${item.emoji ? item.emoji + ' ' : ''}${item.text}`;
    document.body.appendChild(el);

    // 少し遅らせてからフェードイン(要素が確実にDOMに載ってから)
    requestAnimationFrame(() => el.classList.add('sg-toast-show'));

    setTimeout(() => {
      el.classList.remove('sg-toast-show');
      setTimeout(() => el.remove(), 300);
    }, 1400);
  }
};
