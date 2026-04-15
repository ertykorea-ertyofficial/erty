# HOME V6 Review

## 범위

- 페이지: `/`
- 기준 구현:
  - `index.html`
  - `assets/css/components.css`
  - `assets/js/main.js`
  - `components/footer.html`
- 기준 문서:
  - `docs/pages/home/HOME_COPY_REWRITE_MATRIX.md`
  - `docs/pages/home/HOME_V6_ASSET_MAP.md`
- preview 캡처:
  - `output/playwright/home-v6-desktop-full.png`
  - `output/playwright/home-v6-mobile-full.png`

## 반영한 핵심

1. Hero를 `scene-first`로 재설계하고, `27 / 37 / 55`를 still-life 오브제로 재배치
2. `스킨텍스처.jpg`를 hero atmosphere layer와 evidence artifact에만 사용
3. `에르띠 모델.jpg`를 footer-adjacent editorial crop로만 사용
4. 전체 카피를 브랜드 프론트용 한국어로 전면 리라이팅
5. Featured SKU를 `1 featured + 3 support` 구조로 유지하되 support weight를 분리
6. Evidence Snapshot을 `27 / 37 / 55 / 57` 4-tile proof ledger로 강화
7. System Map을 spreadsheet에서 refined ledger로 정리
8. FAQ와 footer를 더 조용한 brand asset 문법으로 낮춤

## 최종 멀티 에이전트 결과

- ERTY유진: PASS
- ERTY나연 역할 구조 검토: PASS
- ERTY지안: PASS
- ERTY수민: PASS
- ERTY소윤: PASS
- ERTY민지: PASS

## 검증 결과

- local `/` 응답: `200`
- local browser console: `0 errors`
- `h1` count: `1`
- preview 기준 mobile order:
  - `Hero → Featured SKU → Evidence Snapshot → Operating System → System Map → Next Layers → Footer`

## 비고

- `제품 종합컷.png`는 HOME에서 사용하지 않음
- 구매 CTA는 여전히 비활성 상태
- production 변경은 없음
