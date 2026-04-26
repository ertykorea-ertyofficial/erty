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
| `01` | `perfect-soothing-solution-1` | `/products/perfect-soothing-solution-1` |
| `02` | `perfect-n-cell-ampoule-2` | `/products/perfect-n-cell-ampoule-2` |
| `03` | `perfect-spicule-formulation-3` | `/products/perfect-spicule-formulation-3` |
| `11` | `cleansing-gel-skin-balancing-11` | `/products/cleansing-gel-skin-balancing-11` |
| `13` | `purifying-toner-skin-balancing-13` | `/products/purifying-toner-skin-balancing-13` |
| `15` | `concentrated-booster-skin-balancing-15` | `/products/concentrated-booster-skin-balancing-15` |
| `21` | `cleansing-milk-skin-hydrating-21` | `/products/cleansing-milk-skin-hydrating-21` |
| `23` | `tonic-lotion-skin-hydrating-23` | `/products/tonic-lotion-skin-hydrating-23` |
| `25` | `concentrated-booster-skin-hydrating-25` | `/products/concentrated-booster-skin-hydrating-25` |
| `27` | `derma-hydro-aquax-cream-27` | `/products/derma-hydro-aquax-cream-27` |
| `35` | `concentrated-booster-skin-revitalizing-35` | `/products/concentrated-booster-skin-revitalizing-35` |
| `37` | `intensive-cellular-er-cream-37` | `/products/intensive-cellular-er-cream-37` |
| `50` | `sun-cream-50` | `/products/sun-cream-50` |
| `55` | `concentrated-booster-skin-brightening-55` | `/products/concentrated-booster-skin-brightening-55` |
| `57` | `melaway-brightening-cream-57` | `/products/melaway-brightening-cream-57` |

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
