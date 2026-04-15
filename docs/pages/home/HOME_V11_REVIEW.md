# HOME V11 Review

## Scope
- page: `/`
- round: `V11`
- rule: IA 유지, Featured SKU / copy / evidence / state language / footer polish 고도화

## What Changed
- Hero copy를 더 짧고 단단한 브랜드 문장으로 재정리했다.
- Featured SKU를 `selected panel + grouped thin index rail + integrated protocol band` 구조로 유지하되, 외곽 shell을 하나의 시스템처럼 읽히게 재설계했다.
- `01 / 02 / 03`을 footer 보조 주석이 아니라 Featured 내부 `Professional / Protocol` 레이어로 명확히 복귀시켰다.
- `activeSkuId` 하나를 authoritative state로 두고, selected panel / route highlight / proof highlight / protocol relevance를 동기화했다.
- Evidence를 `primary 37 + secondary 27 / 55 / 57` 위계로 재조정했고, tile copy를 `metric + what changed + interpretation + qualifier + route` 문법으로 정리했다.
- line color를 decorative accent가 아니라 `selected / proof / route / protocol / footer` state cue에 더 직접 연결했다.
- footer는 브랜드 정의, 다음 판단, numbering guide의 정렬을 더 얇고 단정하게 조정했다.

## Implemented Details
- Hero
  - lead copy를 `회복은 37에서, 수분은 23에서, 맑기와 톤은 55와 57에서 갈립니다.`로 조정
  - micro line overview에서 `집중 프로토콜` 표기를 유지
- Featured
  - section title/support를 selection-agnostic이면서도 브랜드 문장에 가깝게 재작성
  - selected panel proof cue를 raw metric에서 bridge cue 쪽으로 낮춤
  - explorer rail과 protocol band를 outer shell 안에서 하나의 system board처럼 읽히게 정리
  - hover는 시각 cue 위주로 두고, committed selection은 click/tap/Enter/Space 중심으로 정리
  - focus preview, grouped keyboard navigation, polite live region 추가
- Evidence
  - 37 primary, 27 support-strong, 55/57 secondary 구조
  - 286.29%, 99.5%, 54%, 175% 수치에 더 중립적인 proof noun과 qualifier를 매칭
  - route CTA를 모두 `근거 보기`로 통일
- Numbering / Footer
  - numbering board column label을 한국어로 통일
  - footer 정의문과 nav kicker를 브랜드 종결부 문법에 맞게 축약

## Local Validation
- `GET http://127.0.0.1:4173/` -> `200`
- `h1` count -> `1`
- `node --check assets/js/main.js` -> pass
- fresh screenshots:
  - `output/playwright/home-v11-desktop-full.png`
  - `output/playwright/home-v11-mobile-full.png`
- interactive state checks with Playwright CLI:
  - default -> `activeSku = 37`
  - select `55` -> `activeProof = 55`, `activeRoute = evidence`, protocol relevance -> `02`
  - select `02` -> `activeKind = protocol`, `activeRoute = journal`, core proof highlight cleared

## Multi-Agent Review Loop
- interaction/state reviewer -> pass after grouped navigation and preview/commit split adjustment
- art/color reviewer -> pass after Featured shell / state color refinement
- copy / featured UX / evidence reviewers -> final re-review requested on the latest patched state

## Production
- production changes: none
- commit: none
- push: none
- deploy: none
