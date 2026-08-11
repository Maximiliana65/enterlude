<p align="center">
  <img src="./docs/images/logo.png" alt="Enterlude logo" width="96" />
</p>

# Enterlude

![version](https://img.shields.io/badge/version-1.4.4-blue) ![license](https://img.shields.io/badge/license-MIT-green)

한국어 | [日本語](./README.md) | [English](./README.en.md) | [繁體中文](./README.zh-TW.md)

AI 채팅(Claude / ChatGPT / Gemini)에서 실수로 Enter나 전송 버튼을 눌러, 작성 중이던 메시지가 그대로 전송되는 사고를 막아주는 Chrome/Edge 확장 프로그램입니다.

## 스크린샷

| 잠금 상태 | 잠금 해제 상태 |
|---|---|
| ![잠금 상태 화면](./docs/images/screenshot-locked.png) | ![잠금 해제 화면](./docs/images/screenshot-unlocked.png) |

## 현재 상태

✅ [Chrome 웹 스토어에서 공개 중(v1.4.3, 2026년 8월 7일 업데이트)](https://chromewebstore.google.com/detail/enterlude-ai%E8%AA%A4%E9%80%81%E4%BF%A1%E9%98%B2%E6%AD%A2/efefkammkfpoccefhmeeifidffackpkm)
— [소스 코드는 GitHub에서 공개 중](https://github.com/Maximiliana65/enterlude)

**지원 서비스**
- Claude
- ChatGPT
- Gemini

**지원 브라우저**
- Google Chrome
- Microsoft Edge(Chromium 기반)

**동작 확인 환경**
- OS: Windows 11 Home
- 브라우저: Google Chrome / Microsoft Edge(일반 모드・시크릿 모드 모두 확인 완료)

※위 환경 이외에서는 개발자가 직접 동작을 확인하지 않았습니다.

향후 계획은 [ROADMAP.md](./ROADMAP.md), 변경 이력은 [CHANGELOG.md](./CHANGELOG.md), 개발 과정은 [DEVLOG.md](./DEVLOG.md), 현재 구현과 유지보수 방침은 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)(일본어), 초기 설계 기록은 [docs/DESIGN.md](./docs/DESIGN.md), 개인정보처리방침은 [docs/privacy.ko.md](./docs/privacy.ko.md)를 참고해 주세요.

## 기능

![작동 방식](./docs/images/how-it-works.ko.svg)

- 잠금 중에는 **Enter 키를 눌러도 전송되지 않고 줄바꿈만 됩니다**
- 실제로 전송하고 싶을 때만, 모서리의 🔒 배지를 클릭하거나 `Ctrl+Shift+U`를 눌러 잠금을 해제합니다
  - 잠금 해제는 **다음 전송 동작 한 번**을 위한 상태이며, 그 동작 후 자동으로 다시 잠깁니다
  - `Esc` 키를 누르면 전송하지 않고 잠금 해제를 취소할 수 있습니다
- 지원 서비스에서 Enterlude가 보호 대상으로 인식한 전송 버튼과 "다시 생성/재시도" 버튼의 오클릭을 차단합니다. 서비스에서 추가 선택 메뉴를 표시하는 경우, 마지막 항목을 명시적으로 선택하면 실행할 수 있습니다
- ChatGPT에서는 ChatGPT 자체의 Enter 키 설정을 따릅니다. Enter가 줄바꿈으로 설정된 경우, 잠금 해제 중에 Enter로 줄바꿈해도 잠금 해제 상태가 소모되지 않고 재미 코멘트도 표시되지 않습니다
- (선택 사항) 전송 후 짧은 코멘트가 표시되는 재미 기능도 있습니다 (기본값은 꺼짐)

설정을 열려면 브라우저 툴바의 확장 프로그램(퍼즐 모양) 아이콘을 클릭한 뒤 Enterlude를 선택하세요. 설정에서 재미 코멘트의 켜기/끄기와 표시 언어를 변경할 수 있습니다.

## 설치 방법 (개발자 모드)

**Chrome**
1. 이 폴더를 다운로드하고 압축을 풉니다
2. `chrome://extensions`를 엽니다
3. 오른쪽 상단의 "개발자 모드"를 켭니다
4. "압축해제된 확장 프로그램을 로드합니다"를 클릭하고 이 폴더를 선택합니다
5. `https://claude.ai`를 열어, 오른쪽 하단에 잠금 배지가 보이면 준비 완료입니다

**Edge**
같은 방법으로 `edge://extensions`에서 진행하면 됩니다. Edge도 Chromium 기반이라 동일하게 동작합니다.

## 폴더 구조

```
core/       … 사이트에 의존하지 않는 공통 잠금 로직
            … *-page-guard.js 파일은 페이지 본체와 같은 MAIN world에서 실행됨
              (ChatGPT・Gemini 전용, 자세한 이유는 DEVLOG 참고)
adapters/   … 사이트별 "입력창・전송 버튼 위치" 정의
fun/        … 선택적인 재미 코멘트 기능 (comments.ja.js / comments.en.js / comments.ko.js /
              comments.zh-TW.js를
              브라우저 표시 언어에 따라 자동으로 선택. 설정 화면에서 수동 지정도 가능)
popup/      … 툴바 아이콘에서 여는 설정 화면
_locales/   … 다국어 지원용 UI 문구 (현재 일본어・영어・한국어・번체 중국어)
icons/      … 툴바 아이콘 (작은 크기에서도 잘 보이도록 만든 Enterlude의 틸 색상 브랜드 마크)
docs/       … 설계 자료, 스크린샷, 브랜드 에셋
```

다른 AI 서비스를 지원할 때는 먼저 `adapters/`에 사이트용 파일을 추가하고 `manifest.json`에 해당 사이트를 등록합니다. 사이트의 이벤트 처리와 경쟁하는 경우에는 전용 선택자와 MAIN world 가드도 필요할 수 있습니다. 자세한 내용은 [아키텍처 안내서](./docs/ARCHITECTURE.md)(일본어)를 참고하세요.

## 버전 관리

이 프로젝트는 [시맨틱 버저닝](https://semver.org/)(`MAJOR.MINOR.PATCH`)을 따릅니다. 앞으로의 정식 공개판에는 동작 확인을 마친 공개 커밋에 Git 태그(예: `v1.4.3`)를 붙입니다.

<details>
<summary>유지보수자용 메모: 안전한 릴리스 절차</summary>

- 하위 호환되는 새 기능 추가 → MINOR 증가 (예: `0.1.0` → `0.2.0`)
- 버그 수정만 있는 경우 → PATCH 증가 (예: `0.2.0` → `0.2.1`)
- 사용 방식이 바뀌는 큰 변경 → MAJOR 증가
- 작업 브랜치 → 필요한 동작 확인 → Pull Request → 내용 확인 → Squash merge → `main`에서의 최종 실제 브라우저 확인 → 태그 순으로 진행합니다. `main`에 직접 push하지 않습니다
- 실제로 공개할 `main`의 확인된 커밋에만 태그를 붙이며, 누락된 과거 태그를 추측으로 추가하지 않습니다

GitHub에는 공개 대상 태그만 push합니다:

```
git push origin v1.4.3
```

</details>

## 지원 범위

**지원**
- Claude (웹 / claude.ai)
- ChatGPT (웹 / chatgpt.com)
- Gemini (웹 / gemini.google.com 메인 화면)

**현재 미지원**
- 지원 대상은 각 서비스의 일반 웹페이지(claude.ai / chatgpt.com / gemini.google.com)입니다.
  브라우저 자체의 사이드 패널이나 내장 AI 화면(예: Chrome의 "Gemini 사이드 패널",
  Microsoft Edge의 "Copilot")은 일반 웹페이지와 작동 방식이 근본적으로 다른 브라우저
  네이티브 기능이기 때문에 지원하지 않습니다.

## 제한 사항

- 이 확장 프로그램은 오발송을 줄이기 위한 **보조 도구**입니다. 모든 상황에서 오발송을 완전히 방지하는 것을 보장하지는 않습니다.
- 지원 대상 AI 서비스(Claude / ChatGPT / Gemini)의 화면이 업데이트되면, 일시적으로 정상 동작하지 않을 수 있습니다.
- 중요한 내용을 전송하기 전에는 다시 한 번 확인해 주세요.
- 본 소프트웨어는 [MIT 라이선스](./LICENSE)에 따라 "있는 그대로(AS IS)" 제공되며, 어떠한 보증도 하지 않습니다.

## 라이선스

[MIT 라이선스](./LICENSE) — 수정・재배포・상업적 이용 모두 자유롭습니다. 저작권 표시만 남겨주세요.
