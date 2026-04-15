# ERTY Product Library Manifest

## 목적

이 문서는 core product library의 canonical manifest다.
단일 SKU 15개를 `/products`와 `/products/[slug]` 기준으로 정리한다.

이 문서는 `offers / kits`를 포함하지 않는다.
키트와 기획상품은 `docs/offers/OFFER_LIBRARY_MANIFEST.md`를 별도로 본다.

## source basis

- `docs/canonical/08_PRODUCT_ID_MAP.md`
- `docs/canonical/09_PRODUCT_SLUG_MAP.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/products/PRODUCT_SYSTEM_AUDIT.md`

## field notes

- `product_id`: canonical key
- `slug`: front-end working slug
- `object_type`: 현재는 전부 `sku`
- `line_id`: line grouping key
- `type_id`: cleanser / toner / booster / cream / sun care / step object
- `source_coverage`: `md + pdf + detail + cutout` 기준
- `shop_url_status`: 현재는 전부 `pending`

## core product manifest

| product_id | slug | display_name | object_type | line_id | type_id | primary concern cluster | source_coverage | related_offer_ids | shop_url_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `01` | `01-perfect-soothing-solution-1` | Perfect Soothing Solution 1 | `sku` | `protocol-step` | `step-solution` | 각질·피부결 정돈 | `md + pdf + detail + cutout` | `er-toning-treatment-kit` | `pending` |
| `02` | `02-perfect-ncell-ampoule` | Perfect N.Cell Ampoule | `sku` | `protocol-step` | `step-ampoule` | 톤·컨디션 케어 | `md + pdf + detail + cutout` | `er-toning-treatment-kit` | `pending` |
| `03` | `03-perfect-spicule-formulation` | Perfect Spicule Formulation | `sku` | `protocol-step` | `step-formulation` | 턴오버·탄력·톤 케어 | `md + pdf + detail + cutout` | `er-toning-treatment-kit` | `pending` |
| `11` | `11-cleansing-gel-for-skin-balancing` | Cleansing Gel for Skin Balancing | `sku` | `balancing` | `cleanser` | 피지·유수분 밸런스 | `md + pdf + detail + cutout` | none | `pending` |
| `13` | `13-purifying-for-skin-balancing` | Purifying for Skin Balancing | `sku` | `balancing` | `toner` | 모공·피지 케어 | `md + pdf + detail + cutout` | none | `pending` |
| `15` | `15-concentraed-booster-for-skin-balancing` | Concentraed Booster for Skin Balancing | `sku` | `balancing` | `booster` | 트러블·민감·밸런스 | `md + pdf + detail + cutout` | `multi-booster-130` | `pending` |
| `21` | `21-cleansing-milk-for-skin-hydrating` | Cleansing Milk for Skin Hydrating | `sku` | `hydrating` | `cleanser` | 건조·민감 클렌징 | `md + pdf + detail + cutout` | `hydrating-series-set` | `pending` |
| `23` | `23-tonic-lotion-for-skin-hydrating` | Tonic Lotion for Skin Hydrating | `sku` | `hydrating` | `toner` | 수분 정돈·안티폴루션 | `md + pdf + detail + cutout` | `hydrating-series-set` | `pending` |
| `25` | `25-concentraed-booster-for-skin-hydrating` | Concentraed Booster for Skin Hydrating | `sku` | `hydrating` | `booster` | 수분 충전·보습 유지 | `md + pdf + detail + cutout` | `hydrating-series-set`, `hydration-25-27-set`, `multi-booster-130` | `pending` |
| `27` | `27-derma-hydro-aquax-cream` | Derma Hydro-AQUAX Cream | `sku` | `hydrating` | `cream` | 건조·장벽 약화 | `md + pdf + detail + cutout` | `hydrating-series-set`, `hydration-25-27-set` | `pending` |
| `35` | `35-concentraed-booster-for-skin-revitalizing` | Concentraed Booster for Skin Revitalizing | `sku` | `revitalizing` | `booster` | 재생·탄력 회복 | `md + pdf + detail + cutout` | `revival-35-37-set`, `multi-booster-130` | `pending` |
| `37` | `37-intensive-cellular-er-cream` | Intensive Cellular ER Cream | `sku` | `revitalizing` | `cream` | 장벽 회복·재생·보습 | `md + pdf + detail + cutout` | `revival-35-37-set`, `37-duo-set` | `pending` |
| `50` | `50-sun-cream` | Sun Cream | `sku` | `brightening-suncare` | `sun-care` | 자외선 보호 | `md + pdf + detail + cutout` | none | `pending` |
| `55` | `55-concentraed-booster-for-skin-brightening` | Concentraed Booster for Skin Brightening | `sku` | `brightening` | `booster` | 브라이트닝·안색 개선 | `md + pdf + detail + cutout` | `multi-booster-130` | `pending` |
| `57` | `57-melaway-brightening-cream` | Melaway Brightening Cream | `sku` | `brightening` | `cream` | 브라이트닝·컨디션 케어 | `md + pdf + detail + cutout` | none | `pending` |

## current exclusions

- `ER Toning Treatment KIT`은 `sku`가 아니라 `professional_kit`이므로 본 manifest에 포함하지 않는다.
- `Hydrating Series`, `Multi Booster 130`, `25+27 수분세트`, `35+37 환생세트`, `37 Duo Set`, `RE'Set`도 `offer` 레이어로 분리한다.

## implementation notes

1. `/products`는 본 manifest만 읽는다.
2. `/products/[slug]`는 본 manifest와 `PRODUCT_TEMPLATE_CONTRACT.md`를 함께 읽는다.
3. `shop_url_status`가 `pending`이므로 현재는 CTA URL을 placeholder 상태로 유지해야 한다.
