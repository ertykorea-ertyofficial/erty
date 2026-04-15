# ERTY Product Slug URL Map

## 목적

이 문서는 main-site route slug와 shopping target URL 상태를 한 곳에 고정한다.
slug는 `ertyofficial.com`의 정보 구조용 키이며, shop URL은 `ertyofficial.shop`의 실제 구매 경로다.

현재는 product / offer 모두 main-site slug만 확정됐고,
실제 Cafe24 상품 URL은 확인되지 않았다.

## source basis

- `docs/PROJECT_BRIEF.md`
- `docs/canonical/08_PRODUCT_ID_MAP.md`
- `docs/canonical/09_PRODUCT_SLUG_MAP.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`
- `docs/products/CTA_SOURCE.md`

## mapping rules

1. `slug`는 main-site route key다.
2. `slug`를 shop URL slug로 재사용하면 안 된다.
3. 실제 구매 경로는 `ertyofficial.shop`에서 별도 확인 후 고정한다.
4. shop URL 미확정 상태에서는 CTA를 `pending_url` 상태로 유지한다.
5. offer / kit도 route는 별도 slug를 가지지만, shop 상품 URL은 별도 확인이 필요하다.

## domain policy

- main domain: `ertyofficial.com`
- shopping domain: `ertyofficial.shop`
- main-site route layer:
  - `/products/[slug]`
  - `/offers/[slug]`
- shopping target layer:
  - Cafe24 실제 상품 상세 URL

## core product route map

| product_id | slug | main_site_route | shop_domain | shop_url_status | shop_target_url | cta_mode | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `01` | `01-perfect-soothing-solution-1` | `/products/01-perfect-soothing-solution-1` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | ER 프로토콜 step 1 |
| `02` | `02-perfect-ncell-ampoule` | `/products/02-perfect-ncell-ampoule` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | ER 프로토콜 step 2 |
| `03` | `03-perfect-spicule-formulation` | `/products/03-perfect-spicule-formulation` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | ER 프로토콜 step 3 |
| `11` | `11-cleansing-gel-for-skin-balancing` | `/products/11-cleansing-gel-for-skin-balancing` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | balancing cleanser |
| `13` | `13-purifying-for-skin-balancing` | `/products/13-purifying-for-skin-balancing` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | balancing toner |
| `15` | `15-concentraed-booster-for-skin-balancing` | `/products/15-concentraed-booster-for-skin-balancing` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | balancing booster |
| `21` | `21-cleansing-milk-for-skin-hydrating` | `/products/21-cleansing-milk-for-skin-hydrating` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | hydrating cleanser |
| `23` | `23-tonic-lotion-for-skin-hydrating` | `/products/23-tonic-lotion-for-skin-hydrating` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | hydrating toner |
| `25` | `25-concentraed-booster-for-skin-hydrating` | `/products/25-concentraed-booster-for-skin-hydrating` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | hydrating booster |
| `27` | `27-derma-hydro-aquax-cream` | `/products/27-derma-hydro-aquax-cream` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | hydrating cream |
| `35` | `35-concentraed-booster-for-skin-revitalizing` | `/products/35-concentraed-booster-for-skin-revitalizing` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | revitalizing booster |
| `37` | `37-intensive-cellular-er-cream` | `/products/37-intensive-cellular-er-cream` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | revitalizing cream |
| `50` | `50-sun-cream` | `/products/50-sun-cream` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | sun care |
| `55` | `55-concentraed-booster-for-skin-brightening` | `/products/55-concentraed-booster-for-skin-brightening` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | brightening booster |
| `57` | `57-melaway-brightening-cream` | `/products/57-melaway-brightening-cream` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | brightening cream |

## offer / kit route appendix

| object_id | slug | main_site_route | shop_domain | shop_url_status | shop_target_url | cta_mode | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `er-toning-treatment-kit` | `er-toning-treatment-kit` | `/offers/er-toning-treatment-kit` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | professional kit |
| `hydration-25-27-set` | `hydration-25-27-set` | `/offers/hydration-25-27-set` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | promotional set |
| `revival-35-37-set` | `revival-35-37-set` | `/offers/revival-35-37-set` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | promotional set |
| `37-duo-set` | `37-duo-set` | `/offers/37-duo-set` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | promotional set |
| `hydrating-series-set` | `hydrating-series-set` | `/offers/hydrating-series-set` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | line bundle |
| `multi-booster-130` | `multi-booster-130` | `/offers/multi-booster-130` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | cross-line bundle |
| `reset-set` | `reset-set` | `/offers/reset-set` | `ertyofficial.shop` | `pending` | none confirmed | `pending_url` | 구성 미확정 |

## CTA implementation note

1. `CTA_SOURCE.md` 기준으로 메인 도메인은 설명과 신뢰 신호 뒤에 CTA를 배치한다.
2. 하지만 실제 구매 링크는 아직 확인되지 않았으므로,
   구현 시점에는 `pending_url` 상태를 UI와 메타에 같이 남겨야 한다.
3. `confirmed` 상태가 되기 전에는 “구매 가능”이라고 단정하지 않는다.

## verification checklist

실제 Cafe24 상품 URL을 확정할 때는 아래를 같이 확인해야 한다.

1. `ertyofficial.shop` 대표 도메인 설정 상태
2. 상품 상세 URL 패턴
3. 제품 / 세트별 실제 상품 존재 여부
4. 클릭 시 최종 이동 위치와 HTTP 응답
5. preview와 production 결과 분리 기록
