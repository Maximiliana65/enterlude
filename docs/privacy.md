# Enterlude プライバシーポリシー

最終更新日: 2026年7月27日

[日本語](./privacy.md) | [English](./privacy.en.md) | [한국어](./privacy.ko.md) | [繁體中文](./privacy.zh-TW.md)

## データの収集について

Enterludeは、個人情報を収集・保存・送信しません。会話の内容や入力中のテキストを読み取ったり、外部に送信したりすることも一切ありません。

## 保存している情報

以下の設定値のみ、Chrome Storage API（`chrome.storage.sync`）を利用してお使いのブラウザの中に保存されます。

- お楽しみ機能のON/OFF
- お楽しみコメントの表示言語設定

これらはお使いの端末・ブラウザの中だけで完結しており、Enterludeの開発者を含め、どこにも送信されません。

## 動作の仕組み

Enterludeは、対応しているAIチャットサービス(Claude / ChatGPT / Gemini)の画面上で、入力欄・送信ボタン・再試行ボタンを検知し、誤送信防止機能を提供します。会話の内容を読み取ったり記録したりする目的ではありません。

## 権限について

Enterludeは、対応するAIチャットページ上で誤送信防止機能を提供するために必要な範囲でのみ動作します。要求している権限は、設定を保存するための`storage`と、対応する3サイトに限定した閲覧権限のみです。

## 外部サービスについて

外部サーバーとの通信、アクセス解析（Google Analyticsなど）、広告表示、トラッキングは一切行っていません。

## 料金について

Enterludeは無料です。広告表示・有料機能・サブスクリプションはありません。

## ソースコード

Enterludeはオープンソースです。実際の動作は、以下で全てのコードを確認できます。

[Enterlude GitHub Repository](https://github.com/Maximiliana65/enterlude)

## ポリシーの変更について

このプライバシーポリシーの内容を変更する場合は、このページを更新してお知らせします。

## お問い合わせ

ご質問・ご不明点は、GitHubのIssueからご連絡ください。

[GitHub Issues](https://github.com/Maximiliana65/enterlude/issues)
