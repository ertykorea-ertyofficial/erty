# HOME V13 Review

## Scope
- page: `/`
- mode: preview/local only
- production: unchanged

## Implemented
- SKU Explorer를 `selected panel + grouped explorer matrix + integrated protocol band`로 고도화
- `activeSkuId / previewSkuId / openFaqId` 기반 상태 문법 유지
- `01 / 02 / 03`을 same selection engine 안의 `Professional / Protocol` 레이어로 유지
- selection-agnostic copy와 SKU-specific copy 분리
- Evidence를 `37 primary + 27/55/57 secondary` 위계로 유지하고 secondary 반복 패턴 축소
- Hero strip를 `protocol / line family / index cue` 3층 구조로 정리
- Footer를 narrower info structure와 stronger brand definition으로 보정

## Authoritative Files
- `C:\Users\ERTY OFFICIAL PROJECT\index.html`
- `C:\Users\ERTY OFFICIAL PROJECT\assets\css\components.css`
- `C:\Users\ERTY OFFICIAL PROJECT\assets\js\main.js`
- `C:\Users\ERTY OFFICIAL PROJECT\assets\js\home-data.js`
- `C:\Users\ERTY OFFICIAL PROJECT\components\footer.html`

## Preview Verification
- `/` HTTP status: `200`
- `h1` count: `1`
- browser console errors: `0`

## Interaction Revalidation
- core SKU click commit:
  - `23` click -> selected panel, explorer selected row, proof status sync confirmed
- protocol click commit:
  - `02` click -> panel/route/protocol state update confirmed
  - core primary proof forced highlight not applied
- numbering row click commit:
  - `Brightening` row click -> `55` selection commit confirmed
- mobile true-entry path:
  - `resize -> goto` path used
  - protocol band default collapsed confirmed

## Screenshots
- desktop: `C:\Users\ERTY OFFICIAL PROJECT\output\playwright\home-v13-desktop-final2.png`
- tablet: `C:\Users\ERTY OFFICIAL PROJECT\output\playwright\home-v13-tablet-final2.png`
- mobile: `C:\Users\ERTY OFFICIAL PROJECT\output\playwright\home-v13-mobile-final.png`

## Notes
- preview/local only
- no production verification in this round
- no commit / push / deploy
