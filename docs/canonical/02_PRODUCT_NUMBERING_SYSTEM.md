# 02_PRODUCT_NUMBERING_SYSTEM

## 목적

이 문서는 ERTY 제품 번호 체계를 라우팅, IA, UI, 카피, SEO가 공통으로 참조할 수 있도록 정리한 canonical input이다.

## source basis

- `docs/brand/BRAND_POSITIONING.md`
- `docs/products/VISUAL_ASSET_MAP.md`
- `docs/products/IMAGE_USAGE_GUIDE.md`
- `private/product-docs/korean/products/*.md`

## 번호 체계의 두 축

### 1. protocol step axis

- `01`: Perfect Soothing Solution
- `02`: Perfect N.Cell Ampoule
- `03`: Perfect Spicule Formulation

위 세 제품은 `Step 1 -> Step 2 -> Step 3` 구조의 프로토콜 축으로 읽는다.

### 2. family + type axis

- 첫 자리 수: 라인 패밀리
- 두 번째 자리 수: 제품 타입

## 첫 자리 수 규칙

| first digit | family | interpretation |
| --- | --- | --- |
| `1x` | balancing | 진정, 유수분 밸런스, 트러블 케어 |
| `2x` | hydrating | 수분, 장벽, 보습 지속 |
| `3x` | revitalizing | 재생, 탄력, 장벽 회복 |
| `5x` | brightening / sun care | 미백, 안색, 광채, 자외선 차단 |

## 두 번째 자리 수 규칙

| second digit | product type |
| --- | --- |
| `1` | cleanser |
| `3` | toner / tonic / lotion |
| `5` | concentrated booster |
| `7` | cream |
| `0` | sun care |

## 현재 core product mapping

| id | display_name | family | type |
| --- | --- | --- | --- |
| `01` | Perfect Soothing Solution 1 | protocol-step | step-1 solution |
| `02` | Perfect N.Cell Ampoule | protocol-step | step-2 ampoule |
| `03` | Perfect Spicule Formulation | protocol-step | step-3 formulation |
| `11` | Cleansing Gel for Skin Balancing | balancing | cleanser |
| `13` | Purifying for Skin Balancing | balancing | toner |
| `15` | Concentraed Booster for Skin Balancing | balancing | booster |
| `21` | Cleansing Milk for Skin Hydrating | hydrating | cleanser |
| `23` | Tonic Lotion for Skin Hydrating | hydrating | toner |
| `25` | Concentraed Booster for Skin Hydrating | hydrating | booster |
| `27` | Derma Hydro-AQUAX Cream | hydrating | cream |
| `35` | Concentraed Booster for Skin Revitalizing | revitalizing | booster |
| `37` | Intensive Cellular ER Cream | revitalizing | cream |
| `50` | Sun Cream | brightening / sun care | sun care |
| `55` | Concentraed Booster for Skin Brightening | brightening | booster |
| `57` | Melaway Brightening Cream | brightening | cream |

## 운영 메모

1. `/products` 허브에서는 번호를 제품명보다 먼저 인식되는 시각 키로 다룬다.
2. line grouping은 first digit 기준으로 한다.
3. product type grouping은 second digit 기준으로 한다.
4. single digit `01/02/03`은 일반 family grid보다 protocol flow에서 우선 다룬다.

## 현재 확인된 리스크

1. 일부 기획세트 artwork에서 `25`가 `24`, `35`가 `34`처럼 읽히는 legacy numbering risk가 있다.
2. 따라서 offer artwork의 숫자는 core product canonical id보다 낮은 신뢰도로 본다.
3. core canonical id는 본 문서와 `08_PRODUCT_ID_MAP.md`를 기준으로 유지한다.
