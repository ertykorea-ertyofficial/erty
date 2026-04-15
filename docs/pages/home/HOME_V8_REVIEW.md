# HOME V8 Review

## Scope

- page: `/`
- public route/interface changes: 없음
- purchase CTA activation: 없음
- authoritative files:
  - `index.html`
  - `assets/css/components.css`
  - `assets/js/main.js`
  - `components/footer.html`
  - `docs/pages/home/HOME_COPY_REWRITE_MATRIX.md`

## Implemented Changes

- Hero 카피를 더 자연스러운 한국어 선언문으로 재작성했다.
- Hero H1을 `문제 피부를 읽는 기준이 / 먼저 달라져야 합니다`로 교체했다.
- Hero subcopy를 브랜드 주어가 살아 있는 짧은 구조 문장으로 수정했다.
- Featured SKU를 `37 featured card + 27 / 55 / 11 support cards`에서 `37 anchor + support rail` 구조로 재설계했다.
- `27 / 55 / 11` support SKU는 `번호 / 라인명 / 1줄 역할 / scope qualifier`를 기본 노출로 유지한다.
- support rail은 데스크톱에서는 가벼운 bridge, 모바일에서는 `scroll-snap` strip로 동작한다.
- evidence, system map, next layers, faq, footer는 기존 위계를 유지하고 Featured가 second hero가 되지 않도록 조정했다.

## Local Verification

- local preview URL: `http://127.0.0.1:4173/`
- HTTP status: `200`
- browser console errors: `0`
- `h1` count: `1`
- desktop preview:
  - `output/playwright/home-v8-desktop-full.png`
- mobile preview:
  - `output/playwright/home-v8-mobile-full.png`

## Agent Review

- `ERTY유진`: PASS
  - Featured SKU가 card catalog보다 index bridge에 가깝게 읽힌다.
  - Hero와 footer의 브랜드 무드가 유지된다.
- `ERTY지안`: PASS
  - 카피가 더 짧고 단정해졌고, 한국어 리듬이 더 자연스럽다.
- `ERTY나연`: PASS
  - IA는 유지되고, Featured가 Hero와 Operating 사이의 bridge로 더 잘 작동한다.
- `ERTY수민`: PASS
  - `h1` singularity 유지, console error 없음, support rail의 desktop/mobile 동작 모두 안전하다.
- `ERTY소윤`: PASS
  - claim boundary 유지, support rail의 trust signal 기본 노출 유지, CTA는 exploration-first 유지.
- `ERTY민지`: PASS
  - route entry 구조가 유지되고 구매 압박 없이 탐색 동선으로 읽힌다.

## Production

- production 변경 없음
- commit 없음
- push 없음
- deploy 없음
