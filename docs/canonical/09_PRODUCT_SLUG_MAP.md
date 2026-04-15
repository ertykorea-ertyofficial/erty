# 09_PRODUCT_SLUG_MAP

## 목적

이 문서는 현재 프로젝트에서 사용할 working canonical slug를 고정한다.
이 slug는 front-end route key이며, shop URL과는 다르다.

## source basis

- `private/product-docs/korean/products/*.md` file stem
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## route policy

1. 단일 SKU는 `/products/[slug]`
2. 키트 / 세트 / 번들은 `/offers/[slug]`
3. shop URL은 별도 미확정 항목이다. slug를 shop URL로 사용하면 안 된다.

## product slugs

| product_id | slug | route |
| --- | --- | --- |
| `01` | `01-perfect-soothing-solution-1` | `/products/01-perfect-soothing-solution-1` |
| `02` | `02-perfect-ncell-ampoule` | `/products/02-perfect-ncell-ampoule` |
| `03` | `03-perfect-spicule-formulation` | `/products/03-perfect-spicule-formulation` |
| `11` | `11-cleansing-gel-for-skin-balancing` | `/products/11-cleansing-gel-for-skin-balancing` |
| `13` | `13-purifying-for-skin-balancing` | `/products/13-purifying-for-skin-balancing` |
| `15` | `15-concentraed-booster-for-skin-balancing` | `/products/15-concentraed-booster-for-skin-balancing` |
| `21` | `21-cleansing-milk-for-skin-hydrating` | `/products/21-cleansing-milk-for-skin-hydrating` |
| `23` | `23-tonic-lotion-for-skin-hydrating` | `/products/23-tonic-lotion-for-skin-hydrating` |
| `25` | `25-concentraed-booster-for-skin-hydrating` | `/products/25-concentraed-booster-for-skin-hydrating` |
| `27` | `27-derma-hydro-aquax-cream` | `/products/27-derma-hydro-aquax-cream` |
| `35` | `35-concentraed-booster-for-skin-revitalizing` | `/products/35-concentraed-booster-for-skin-revitalizing` |
| `37` | `37-intensive-cellular-er-cream` | `/products/37-intensive-cellular-er-cream` |
| `50` | `50-sun-cream` | `/products/50-sun-cream` |
| `55` | `55-concentraed-booster-for-skin-brightening` | `/products/55-concentraed-booster-for-skin-brightening` |
| `57` | `57-melaway-brightening-cream` | `/products/57-melaway-brightening-cream` |

## offer slugs

| offer_id | slug | route |
| --- | --- | --- |
| `er-toning-treatment-kit` | `er-toning-treatment-kit` | `/offers/er-toning-treatment-kit` |
| `hydration-25-27-set` | `hydration-25-27-set` | `/offers/hydration-25-27-set` |
| `revival-35-37-set` | `revival-35-37-set` | `/offers/revival-35-37-set` |
| `37-duo-set` | `37-duo-set` | `/offers/37-duo-set` |
| `hydrating-series-set` | `hydrating-series-set` | `/offers/hydrating-series-set` |
| `multi-booster-130` | `multi-booster-130` | `/offers/multi-booster-130` |
| `reset-set` | `reset-set` | `/offers/reset-set` |
