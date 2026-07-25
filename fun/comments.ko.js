// fun/comments.ko.js
//
// 韓国語版の一言コメントです。書き方のルールは comments.ja.js / comments.en.js と同じです。
//   { text: "...", emoji: "..." }
//   rare: true          … 出現率がぐっと下がる
//   season: {from, to}  … 指定した期間(月-日)だけ表示される(年またぎ期間にも対応)
//
// どの言語が表示されるかは fun/fun-engine.js が、ブラウザの表示言語をもとに自動選択します。
// 文化的な違いを踏まえて、日本語版の直訳ではなく韓国語らしい表現に調整されています
// (そのため、日本語版・英語版と1対1では対応していません)。

window.SendGuardComments = window.SendGuardComments || {};

window.SendGuardComments.ko = [
  // ===== 일반 =====
  { text: "나이스!", emoji: "🐧" },
  { text: "가자!", emoji: "🐋" },
  { text: "굿!", emoji: "✨" },
  { text: "전송 완료!", emoji: "📮" },
  { text: "최고!", emoji: "👍" },

  { text: "출발!", emoji: "🚀" },
  { text: "가즈아!", emoji: "🔥" },
  { text: "레츠고!", emoji: "🚀" },
  { text: "GO!", emoji: "🏁" },

  { text: "클릭!", emoji: "🖱️" },
  { text: "톡!", emoji: "👇" },

  { text: "좋았어!", emoji: "💪" },
  { text: "오케이!", emoji: "🔥" },

  { text: "와!", emoji: "🐣" },
  { text: "만세!", emoji: "🙌" },
  { text: "전송 성공!", emoji: "🙌" },

  { text: "완벽!", emoji: "👌" },
  { text: "굿!", emoji: "😎" },
  { text: "좋네!", emoji: "🐾" },

  { text: "슥!", emoji: "🦦" },
  { text: "부드럽게!", emoji: "🦭" },

  { text: "슝!", emoji: "💨" },
  { text: "휙!", emoji: "💨" },

  { text: "띵!", emoji: "💡" },
  { text: "방긋!", emoji: "😊" },

  { text: "완료!", emoji: "✅" },
  { text: "성공!", emoji: "🧩" },
  { text: "명중!", emoji: "🎯" },
  { text: "스트라이크!", emoji: "🎳" },

  { text: "수고했어!", emoji: "☕" },
  { text: "잠깐 쉬자!", emoji: "🍵" },

  { text: "딱 좋아!", emoji: "✨" },
  { text: "해냈다!", emoji: "🎈" },
  { text: "성공이다!", emoji: "🎊" },

  { text: "간다!", emoji: "🦊" },
  { text: "얍!", emoji: "🐢" },

  { text: "발사!", emoji: "🏹" },
  { text: "날아간다!", emoji: "🦅" },

  { text: "둥실~", emoji: "🐳" },
  { text: "총총!", emoji: "🐥" },
  { text: "냠냠", emoji: "🐹" },
  { text: "깡충!", emoji: "🐰" },
  { text: "데굴!", emoji: "🦔" },
  { text: "첨벙!", emoji: "🐟" },
  { text: "느릿느릿", emoji: "🐢" },
  { text: "파닥파닥", emoji: "🦆" },
  { text: "팔랑!", emoji: "🦋" },
  { text: "신난다!", emoji: "🐼" },

  { text: "배달 완료!", emoji: "📦" },
  { text: "확인!", emoji: "🫡" },
  { text: "보낼게!", emoji: "🫡" },

  { text: "기다리는 중...", emoji: "⏳" },
  { text: "AI에게!", emoji: "🌐" },
  { text: "바통 터치!", emoji: "🏃" },

  { text: "생각 전송 중...", emoji: "🧠" },
  { text: "다음은?", emoji: "💬" },

  { text: "도착!", emoji: "💌" },
  { text: "간다!", emoji: "💌" },

  { text: "찰칵!", emoji: "📸" },
  { text: "준비!", emoji: "🎬" },

  { text: "펑!", emoji: "💥" },
  { text: "여기요!", emoji: "💁" },

  { text: "오늘도 이상 없음!", emoji: "👷" },
  { text: "임무 완료!", emoji: "🛰️" },

  { text: "세이프!", emoji: "😮‍💨" },
  { text: "점검 OK!", emoji: "🧐" },
  { text: "잠금 해제!", emoji: "🔓" },
  { text: "전송!", emoji: "📨" },
  { text: "봤다!", emoji: "👀" },
  { text: "한 방!", emoji: "🎯" },
  { text: "안전 전송!", emoji: "🛡️" },
  { text: "Enter 잠금 해제!", emoji: "🗝️" },

  // ===== 레어 =====
  { text: "개이득!", emoji: "💎", rare: true },

  { text: "SSR!", emoji: "🌈", rare: true },
  { text: "전설의 전송!", emoji: "🐉", rare: true },
  { text: "전설의 Enter!", emoji: "👑", rare: true },

  { text: "갓플레이!", emoji: "⚡", rare: true },
  { text: "완벽한 타이밍!", emoji: "⚡", rare: true },
  { text: "갓대응!", emoji: "⚡", rare: true },

  { text: "초대박!", emoji: "🌟", rare: true },
  { text: "잭팟!", emoji: "🍀", rare: true },

  { text: "크리티컬!", emoji: "⚔️", rare: true },
  { text: "비밀 기술!", emoji: "🎮", rare: true },

  { text: "우주까지!", emoji: "🌌", rare: true },
  { text: "AI도 놀랐다!", emoji: "🤖", rare: true },

  { text: "퍼펙트!", emoji: "💎", rare: true },
  { text: "대박!", emoji: "🎉", rare: true },
  { text: "기적!", emoji: "🦄", rare: true },
  { text: "보너스!", emoji: "🍰", rare: true },

  { text: "100점!", emoji: "💯", rare: true },

  { text: "오발송 제로!", emoji: "🏆", rare: true },
  { text: "오늘도 무사!", emoji: "🕊️", rare: true },
  { text: "슈퍼 세이프!", emoji: "🛡️", rare: true },
  { text: "콤보 유지!", emoji: "🔥", rare: true },
  { text: "럭키 전송!", emoji: "🎁", rare: true },

  // ===== 시즌 한정 =====
  { text: "메리 크리스마스!", emoji: "🎄", season: { from: "12-20", to: "12-25" } },
  { text: "산타 특급!", emoji: "🎅", season: { from: "12-20", to: "12-25" } },
  { text: "새해 복 많이 받아!", emoji: "🧧", season: { from: "01-01", to: "01-03" } },
  { text: "올해도 잘 부탁해!", emoji: "🌅", season: { from: "01-01", to: "01-03" } },
  { text: "Trick or Treat!", emoji: "🎃", season: { from: "10-25", to: "10-31" } },
  { text: "유령 배송!", emoji: "👻", season: { from: "10-25", to: "10-31" } }
];
