# Chrome Web Store 掲載用テキスト

コピー＆ペーストしてご利用ください。

---

## 名前(Name)

```
Enterlude - AI誤送信防止
```

英語版・韓国語版のストア掲載を別途用意する場合は、こちらを使ってください。

```
English:  Enterlude - Prevent Accidental AI Chat Sends
한국어:   Enterlude - AI 채팅 오발송 방지
```

---

## 短い説明（132文字以内）

```
AIチャット(Claude/ChatGPT/Gemini)の誤送信を防ぐ拡張機能。Enterは常に改行になり、送信は明示的に解除した時だけ。うっかり送信の事故を防ぎます。
```

---

## 詳しい説明

```
AIチャット(Claude / ChatGPT / Gemini)で、書きかけのメッセージをうっかり送信してしまう事故を防ぐ拡張機能です。

■ できること
・Enterキーは常に改行だけになり、誤って送信されることがありません
・送信したい時だけ、右下の🔒アイコンをクリック(またはCtrl+Shift+U)でロックを解除
・解除は次の1回だけ有効。送信すると自動でまたロックがかかります
・Escキーでロック解除をキャンセルできます
・送信ボタン・再試行ボタンの誤クリックも同様にブロックします
・(任意)送信後に一言コメントを表示する、ちょっとしたお楽しみ機能つき(初期状態はOFF)

■ 対応サービス
Claude(claude.ai) / ChatGPT(chatgpt.com) / Gemini(gemini.google.com)
※ Chromeの「Geminiサイドパネル」機能には対応していません

■ 料金について
広告表示・有料機能・サブスクリプションは一切ありません。すべての機能を無料でご利用いただけます。

■ プライバシーについて
外部サーバーへの通信は一切ありません。入力内容や会話内容を収集・送信することもありません。
詳細はプライバシーポリシーをご覧ください。
https://maximiliana65.github.io/enterlude/privacy.html

■ 制限事項
本拡張機能は誤送信を減らすための補助ツールであり、すべての状況で誤送信を完全に防止することを保証するものではありません。対応サービス側の画面更新により、一時的に動作しなくなる場合があります。重要な内容を送信する前は、あらためてご確認ください。

■ オープンソース
ソースコードはGitHubで公開しています。
https://github.com/Maximiliana65/enterlude
```

---

## カテゴリ

「ワークフローと計画」(Workflow & Planning) を推奨します。無ければ次点で「機能とUI」(Functionality & UI)。
「ユーザー補助機能」(Accessibility) は視覚・聴覚等の障がい支援ツール向けのカテゴリなので対象外です。

## プライバシーポリシーURL

ストアの申請画面にある「Privacy policy URL」欄には、以下を入力してください
(GitHub Pagesを有効にした後にアクセスできるようになります。有効化の手順は別途案内します)。

```
https://maximiliana65.github.io/enterlude/privacy.html
```

## プライバシー関連の申告(Privacyタブ)

ストアの「Privacy practices」タブで聞かれる項目には、以下のように答えれば問題ありません。

- ユーザーデータの収集: なし
- 単一目的(Single purpose)の説明例:
  ```
  AIチャットサービスでのEnterキー・送信ボタンによる誤送信を防止する
  ```
- 権限の説明(Permission justification):
  - `storage`: お楽しみ機能のON/OFF設定・言語設定を保存するために使用します
  - host_permissions(claude.ai, chatgpt.com, gemini.google.com): これらのサイトの入力欄・送信ボタンを検知し、誤送信を防止するために使用します
- 広告・課金・サブスクリプション: なし
