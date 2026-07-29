document.addEventListener('DOMContentLoaded', () => {
  // data-i18n がついた要素に、_locales の文言を反映する
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = chrome.i18n.getMessage(key);
    if (text) el.textContent = text;
  });

  // data-i18n-aria がついた要素は、textContent ではなく aria-label に反映する
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    const text = chrome.i18n.getMessage(key);
    if (text) el.setAttribute('aria-label', text);
  });

  document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
  });

  const funToggle = document.getElementById('funToggle');
  const commentLangSelect = document.getElementById('commentLangSelect');

  chrome.storage.sync.get({ funEnabled: false, commentLang: 'auto' }, (result) => {
    funToggle.checked = result.funEnabled;
    commentLangSelect.value = result.commentLang;
  });

  funToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ funEnabled: funToggle.checked });
  });

  commentLangSelect.addEventListener('change', () => {
    chrome.storage.sync.set({ commentLang: commentLangSelect.value });
  });
});
