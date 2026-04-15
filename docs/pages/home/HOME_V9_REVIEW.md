# HOME V9 Review

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
  - `docs/pages/home/HOME_V9_FEATURED_OPTIONS.md`

## Implemented Changes

- Home 전체 카피를 브랜드 프론트 기준의 더 짧고 더 단정한 한국어 문장으로 다시 정리했다.
- Hero H1을 `문제 피부는 먼저 / 읽어야 합니다`로 고정하고, subcopy와 CTA도 탐색형 구조로 정리했다.
- Featured SKU를 `37 big card + 27 / 55 / 11 small cards`에서 `selected panel + thin index rail` 구조로 전면 재설계했다.
- rail에는 core SKU 전체를 노출하고, `01 / 02 / 03`은 auxiliary protocol strip으로 분리했다.
- selected panel은 `번호 / 라인 / 제품명 / 역할 문장 / proof signal / route`를 함께 갱신하는 시스템 UI로 바꿨다.
- Evidence Snapshot을 `27 / 37 / 55 / 57` 숫자 중심 proof tile로 강화했다.
- 번호 체계와 라인 컬러를 hero micro index, selected state, proof number, FAQ indicator, footer numbering 영역까지 확장했다.
- footer는 stock-like 이미지 없이 로고, 브랜드 정의, route, numbering guide 중심의 brand signature 구조로 유지했다.

## Local Verification

- local preview URL: `http://127.0.0.1:4173/`
- HTTP status: `200`
- browser console errors:
  - desktop: `0`
  - mobile: `0`
- `h1` count: `1`
- desktop preview:
  - `output/playwright/home-v9-desktop-full.png`
- mobile preview:
  - `output/playwright/home-v9-mobile-full.png`
- featured interaction recheck:
  - desktop: `55` click 후 snapshot에서 selected item `55` active 확인
  - mobile: `27` tap 후 snapshot에서 selected item `27` active 확인

## Agent Review

- `ERTY유진`: PASS
  - Hero가 generic 정보 화면보다 브랜드 선언 장면에 가깝게 읽힌다.
  - Featured와 Evidence가 retail 카드보다 시스템 UI로 읽힌다.
- `ERTY지안`: PASS
  - visible copy가 이전보다 덜 설명문 같고, 브랜드 프론트 톤에 더 가까워졌다.
  - rail/evidence의 문구도 내부 문서보다 화면용 문장으로 정리됐다.
- `ERTY나연`: PASS
  - selected panel + thin index rail 구조가 smart SKU system으로 읽힌다.
  - protocol strip은 보조 레이어로 분리돼 featured와 경쟁하지 않는다.
- `ERTY수민`: PASS
  - click / focus / hover / keyboard state가 모두 selected panel과 동기화된다.
  - 모바일 featured rail은 horizontal scroll strip으로 유지되고 card stack으로 무너지지 않는다.
- `ERTY소윤`: PASS
  - evidence 수치와 scope qualifier가 함께 노출돼 trust boundary를 유지한다.
  - numbering과 color는 장식이 아니라 UI grammar로 작동한다.
- `ERTY민지`: PASS
  - CTA는 exploration-first를 유지하고, Featured는 구매 진열이 아니라 route bridge로 읽힌다.

## Production

- production 변경 없음
- commit 없음
- push 없음
- deploy 없음
