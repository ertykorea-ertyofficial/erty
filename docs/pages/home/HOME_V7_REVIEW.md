# HOME V7 Review

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
  - `docs/pages/home/HOME_V7_ASSET_MAP.md`

## Implemented Changes

- hero를 중앙 정렬 단일 장면으로 재설계했다.
- 우측 hero 이미지 카드와 개별 제품 레전드를 제거했다.
- `제품 종합컷.png`를 저불투명도 background layer로만 사용했다.
- H1을 더 작은 2줄 lock-up으로 조정했다.
- hero 서브카피를 더 짧은 브랜드 문장으로 압축했다.
- featured SKU는 `37`을 주인공으로 유지하고 `27 / 55 / 11`의 시각 위계를 유지했다.
- evidence는 `27 / 37 / 55 / 57` proof-first tile 구조와 trust qualifier/meta를 포함하도록 정리했다.
- footer는 로고, 핵심 진입, numbering guide artifact 중심으로 정리했고 stock-like 이미지 사용을 제거했다.

## Local Verification

- local preview URL: `http://127.0.0.1:4173/`
- HTTP status: `200`
- browser console errors: `0`
- `h1` count: `1`
- desktop preview:
  - `output/playwright/home-v7-desktop-full.png`
- mobile preview:
  - `output/playwright/home-v7-mobile-full.png`

## Agent Review

- `ERTY유진`: PASS
  - 중앙 정렬 hero와 low-opacity background layer가 product-first hero가 아니라 브랜드 front로 읽힌다.
  - H1 2줄 scale과 비중이 적절하고, featured/evidence/footer가 owned asset 기반 화면으로 읽힌다.
- `ERTY지안`: PASS
  - 카피가 브랜드 프론트용 한국어 문장으로 정리됐고, translation/presentation tone이 제거됐다.
- `ERTY나연`: PASS
  - IA가 유지되고, featured/evidence가 강하게 보이며 FAQ/footer는 보조 블록으로 내려갔다.
- `ERTY수민`: PASS
  - `h1` singularity, centered hero implementation, responsive behavior, FAQ JS 범위가 모두 안전하다.
- `ERTY소윤`: PASS
  - evidence가 explanation-first가 아니라 proof-first로 읽히고, claim boundary와 trust qualifier가 유지된다.
- `ERTY민지`: PASS
  - CTA는 exploration-first를 유지하고, 구매 전환 압박 없이 route entry 구조를 지킨다.

## Production

- production 변경 없음
- commit 없음
- push 없음
- deploy 없음
