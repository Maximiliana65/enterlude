# Microsoft Edge Add-ons 掲載情報（次回申請用ドラフト）

> 状態: 未申請。公開者登録の本人確認要件により保留中。最終更新: 2026-08-08
>
> この文書は、Edge Add-onsへの初回申請時に使う掲載情報の下書きです。実際に入力する前に、Partner Centerの設問・プライバシーポリシー・固定した公開ZIPを照合してください。

## 共通情報

- プライバシーポリシー: `https://maximiliana65.github.io/enterlude/privacy.html`
- ソースコード: `https://github.com/Maximiliana65/enterlude`
- 対応サービス: Claude / ChatGPT / Gemini の通常のWebページ
- 非対応: 通常のWebページ以外の、ブラウザに組み込まれたAI画面（AIサイドパネルを含む）

## 言語ごとの名前とロゴ

Edgeの管理画面では、パッケージに含まれる各言語について詳細説明とロゴを登録します。現時点では、同じロゴを4言語すべてに割り当てます。

| 言語 | 拡張機能のロケール | 表示名 | 使用するロゴ | プライバシーページ |
|---|---|---|---|---|
| 日本語 | `ja` | Enterlude - AI誤送信防止 | `docs/images/logo-300.png` | `privacy.html` |
| English | `en` | Enterlude - Prevent Accidental AI Chat Sends | `docs/images/logo-300.png` | `privacy.en.html` |
| 한국어 | `ko` | Enterlude - AI 채팅 오발송 방지 | `docs/images/logo-300.png` | `privacy.ko.html` |
| 繁體中文 | `zh_TW` | Enterlude - 防止 AI 聊天誤傳訊息 | `docs/images/logo-300.png` | `privacy.zh-TW.html` |

提出用ロゴは`docs/images/logo-300.png`（300×300px）を4言語共通で使用します。これは既存の紹介画像で使っているシアンのEnterludeブランドマークです。拡張機能内の鍵アイコン（`icons/icon16.png` / `icon48.png` / `icon128.png`）は変更しません。

## 言語ごとの詳細説明

以下は、各言語欄に入力するための下書きです。プライバシーに関する説明は、現在の実装とプライバシーポリシーに合わせています。

### 日本語

```
Enterludeは、Claude、ChatGPT、Geminiの通常のWebページで、書きかけのメッセージを誤って送信してしまう事故を減らすための拡張機能です。ロック中はEnterキーを送信ではなく改行として扱い、対応サイト上でEnterludeが保護対象として認識した送信・再試行ボタンも保護します。サービス側で追加選択が必要なメニューは、最終項目を明示して選ぶと実行できます。送信したい時だけ右下の鍵バッジまたはCtrl+Shift+Uで一度だけロックを解除でき、送信後は自動で再ロックされます。Escで解除を取り消せます。広告・課金はありません。入力内容や会話内容を開発者へ送信・保存せず、誤送信防止に必要な範囲で入力欄の状態をブラウザ内で一時的に処理します。通常のWebページ以外の、ブラウザに組み込まれたAI画面（AIサイドパネルを含む）には対応していません。
```

### English

```
Enterlude helps prevent accidental sends of unfinished messages on the regular web pages of Claude, ChatGPT, and Gemini. While locked, Enter inserts a line break instead of sending, and Send and Retry buttons that Enterlude recognizes as protected on supported services are protected too. When a service shows an additional-choice menu, explicitly selecting its final option can proceed. When you are ready to send, unlock once with the lock badge or Ctrl+Shift+U; the extension automatically locks again after the next send. Press Esc to cancel an unlock. It is free and has no ads. Enterlude does not send or store your message or conversation content for the developer; it may temporarily process the page's input state locally as needed to prevent accidental sends. Browser-integrated AI surfaces, including AI side panels, are not supported.
```

### 한국어

```
Enterlude는 Claude, ChatGPT, Gemini의 일반 웹페이지에서 작성 중인 메시지가 실수로 전송되는 일을 줄이기 위한 확장 프로그램입니다. 잠금 상태에서는 Enter 키가 전송되지 않고 줄바꿈만 입력되며, 지원 사이트에서 Enterlude가 보호 대상으로 인식한 전송 및 다시 시도 버튼도 보호됩니다. 서비스에서 추가 선택이 필요한 메뉴는 마지막 항목을 명시적으로 선택하면 실행할 수 있습니다. 실제로 보낼 때만 오른쪽 아래의 자물쇠 배지 또는 Ctrl+Shift+U로 한 번 잠금을 해제할 수 있고, 전송 후에는 자동으로 다시 잠깁니다. Esc로 해제를 취소할 수 있습니다. 광고·유료 기능은 없습니다. 메시지나 대화 내용을 개발자에게 전송하거나 저장하지 않으며, 오발송 방지에 필요한 범위에서만 페이지 입력창의 상태를 브라우저 안에서 일시적으로 처리할 수 있습니다. 일반 웹페이지가 아닌, 브라우저에 내장된 AI 화면(AI 사이드 패널 포함)은 지원하지 않습니다.
```

### 繁體中文

```
Enterlude 是一款用於減少 Claude、ChatGPT 與 Gemini 一般網頁中誤傳未完成訊息的擴充功能。鎖定時，按 Enter 只會換行，不會傳送；也會保護在支援服務中由 Enterlude 識別為保護對象的傳送與重新嘗試按鈕。若服務顯示需要額外選擇的選單，明確選取最終項目即可執行。真正要傳送時，可點選右下角的鎖頭徽章或按 Ctrl+Shift+U，暫時解鎖一次；傳送後會自動重新上鎖。按 Esc 可取消解鎖。本擴充功能免費且沒有廣告。不會將訊息或對話內容傳送給開發者或加以保存；為防止誤傳，可能只在瀏覽器內暫時處理網頁輸入欄的狀態。目前不支援一般網頁以外的瀏覽器內建 AI 畫面（包括 AI 側邊欄）。
```

## 申請時の確認事項

- Privacy欄は、入力欄の状態を一時的にローカル処理すること、メッセージ内容を開発者へ記録・保存・送信しないこと、設定がブラウザ同期の対象になり得ることを、実際の設問に沿って正確に申告する
- 対象地域・公開範囲は、申請時に管理者が選択する。ここでは決め打ちしない
- Edge Add-onsへの初回申請には、動作確認済みの固定ZIPだけを使用する
- 提出後の審査結果・指摘・公開日を、実際に起きた事実だけ記録する
