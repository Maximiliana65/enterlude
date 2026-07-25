// core/settings-store.js
// 設定の保存・読み込みだけを担当するモジュール。
// 他のファイルはこの窓口を通してだけ設定を読み書きする(直接 chrome.storage を触らない)。
// こうしておくと、将来「設定項目を増やす」「保存先を変える」といった変更が
// このファイルだけで完結する。

window.SendGuard = window.SendGuard || {};

const SG_DEFAULT_SETTINGS = {
  funEnabled: false
};

window.SendGuard.settingsStore = {
  /**
   * 設定値を取得する
   * @param {string[]} keys 取得したい設定のキー一覧
   * @param {(values: object) => void} callback
   */
  get(keys, callback) {
    try {
      chrome.storage.sync.get(SG_DEFAULT_SETTINGS, (result) => {
        const picked = {};
        keys.forEach((key) => {
          picked[key] = (result || {})[key];
        });
        callback(picked);
      });
    } catch (e) {
      // 拡張機能のコンテキストが無効化されている場合(タブの再読み込みが必要な状態)は、
      // エラーで処理全体を止めず、既定値で応答する
      const picked = {};
      keys.forEach((key) => {
        picked[key] = SG_DEFAULT_SETTINGS[key];
      });
      callback(picked);
    }
  },

  /**
   * 設定値を保存する
   * @param {object} values 保存したい値 (例: { funEnabled: true })
   * @param {() => void} [callback]
   */
  set(values, callback) {
    try {
      chrome.storage.sync.set(values, () => {
        if (callback) callback();
      });
    } catch (e) {
      if (callback) callback();
    }
  }
};
