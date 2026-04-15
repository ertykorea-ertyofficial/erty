# 08_PRODUCT_ID_MAP

## 목적

이 문서는 product id를 canonical key로 고정하는 map이다.
인프라, slug, data manifest, route 설계의 기본 키로 사용한다.

## source basis

- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `private/product-docs/korean/products/*.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## core product ids

| product_id | object_type | display_name | line | type |
| --- | --- | --- | --- | --- |
| `01` | `sku` | Perfect Soothing Solution 1 | protocol-step | solution |
| `02` | `sku` | Perfect N.Cell Ampoule | protocol-step | ampoule |
| `03` | `sku` | Perfect Spicule Formulation | protocol-step | formulation |
| `11` | `sku` | Cleansing Gel for Skin Balancing | balancing | cleanser |
| `13` | `sku` | Purifying for Skin Balancing | balancing | toner |
| `15` | `sku` | Concentraed Booster for Skin Balancing | balancing | booster |
| `21` | `sku` | Cleansing Milk for Skin Hydrating | hydrating | cleanser |
| `23` | `sku` | Tonic Lotion for Skin Hydrating | hydrating | toner |
| `25` | `sku` | Concentraed Booster for Skin Hydrating | hydrating | booster |
| `27` | `sku` | Derma Hydro-AQUAX Cream | hydrating | cream |
| `35` | `sku` | Concentraed Booster for Skin Revitalizing | revitalizing | booster |
| `37` | `sku` | Intensive Cellular ER Cream | revitalizing | cream |
| `50` | `sku` | Sun Cream | brightening / sun care | sun care |
| `55` | `sku` | Concentraed Booster for Skin Brightening | brightening | booster |
| `57` | `sku` | Melaway Brightening Cream | brightening | cream |

## offer ids appendix

| offer_id | object_type | display_name |
| --- | --- | --- |
| `er-toning-treatment-kit` | `professional_kit` | ER Toning Treatment KIT |
| `hydration-25-27-set` | `promotional_set` | 25+27 수분세트 |
| `revival-35-37-set` | `promotional_set` | 35+37 환생세트 |
| `37-duo-set` | `promotional_set` | 37 Duo Set |
| `hydrating-series-set` | `line_bundle` | Hydrating Series |
| `multi-booster-130` | `cross_line_bundle` | Multi Booster 130 |
| `reset-set` | `pending_mapping` | RE'Set |
