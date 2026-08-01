# Chrome Web Store 掲載用テキスト

コピー＆ペーストしてご利用ください。
「実際に提出した文言」は2026-07-27の再申請時のものを反映しています。

---

## 名前(Name)

```
Enterlude - AI誤送信防止
```

英語版・韓国語版・繁体字中国語版のストア掲載を別途用意する場合は、こちらを使ってください。

```
English:     Enterlude - Prevent Accidental AI Chat Sends
한국어:      Enterlude - AI 채팅 오발송 방지
繁體中文:    Enterlude - 防止 AI 聊天誤傳訊息
```

---

## 短い説明（132文字以内）

```
AIチャット(Claude/ChatGPT/Gemini)の誤送信を防ぐ拡張機能。Enterは常に改行になり、送信は明示的に解除した時だけ。うっかり送信の事故を防ぎます。
```

---

## 詳しい説明

```
AIチャット（Claude / ChatGPT / Gemini）で、Enterキーや送信ボタンの誤操作による書きかけメッセージの誤送信を防ぐ拡張機能です。

■ できること
・ロック中はEnterキーでは送信されず、改行のみになります
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

ストアの申請画面にある「Privacy policy URL」欄には、以下を入力してください。

```
https://maximiliana65.github.io/enterlude/privacy.html
```

## プライバシー関連の申告(Privacyタブ) — 実際に提出した文言

- ユーザーデータの収集: なし
- 単一目的(Single purpose)の説明:
  ```
  AIチャットサービスでのEnterキーや送信ボタンによる誤送信を防止します。
  ```
- `storage`が必要な理由:
  ```
  拡張機能の設定（お楽しみ機能のON/OFF、コメント表示言語）をブラウザ内に保存するために使用します。
  ```
- ホスト権限が必要な理由:
  ```
  host_permissions(claude.ai, chatgpt.com / chat.openai.com, gemini.google.com): 対応しているAIチャットサービス（Claude、ChatGPT、Gemini）のページ上で入力欄や送信ボタンを検出し、誤送信防止機能を提供するために使用します。
  ```
- 広告・課金・サブスクリプション: なし
