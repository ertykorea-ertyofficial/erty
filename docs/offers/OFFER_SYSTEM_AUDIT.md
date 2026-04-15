# ERTY Offer / Kit System Audit

## 목적

이 문서는 새로 수집한 키트상품 / 기획상품 자산이 기존 제품 시스템에 어떤 영향을 주는지 정리한다.
핵심 질문은 아래 두 가지다.

1. 이 자산을 기존 `core product library`에 합쳐야 하는가
2. 별도 route / manifest / 문서 체계가 필요한가

## 결론

- `core product library`에는 단일 SKU만 유지하는 것이 맞다.
- 이번 자산은 `offers / kits` 레이어로 분리하는 것이 맞다.
- 기존 제품 시스템 감사의 결론 자체는 바뀌지 않는다.
- 다만 이제 manifest와 route 설계는 `sku`뿐 아니라 `professional_kit`, `promotional_set`, `line_bundle`, `cross_line_bundle` 타입까지 다뤄야 한다.

## 근거

### 1. 현재 core product library 정의와 충돌하지 않음

- 기존 제품 시스템 감사는 core를 소비자용 제품 15개로 본다.
- `ER Toning Treatment KIT`은 이미 단일 SKU가 아닌 별도 professional kit로 취급되어 있었다.
- 이번 데이터는 그 분리를 더 명확하게 해줄 뿐, core 15개 정의를 바꾸지는 않는다.

### 2. 실제 자산 구성이 단일 SKU 구조가 아님

- `25+27 수분세트`, `35+37 환생세트`, `37 Duo Set`, `Hydrating Series`, `Multi Booster 130`은 모두 복수 SKU 또는 라인 묶음이다.
- `ER Toning Treatment KIT`는 3단계 프로토콜 키트다.
- `RE'Set`은 cutout만 있고 상세 source가 없어 더더욱 core SKU로 올릴 근거가 부족하다.

### 3. route 관점에서도 별도 계층이 필요함

- 현재 tracked route는 `/products`와 `/products/[product-slug]`만 있다.
- 지금 들어온 데이터는 단일 product detail이 아니라 bundle / kit / set detail에 가깝다.
- 따라서 `/products/[slug]`에 그대로 밀어 넣으면 단일 SKU와 composite offer가 섞이게 된다.

## 항목별 분류

| 항목 | category | 현재 source 상태 | 비고 |
| --- | --- | --- | --- |
| `ER Toning Treatment KIT` | `professional_kit` | detail + cutout | 기존 product-detail-pages와 detail source 중복 존재 |
| `25+27 수분세트` | `promotional_set` | detail + cutout | `25 + 27` 조합으로 읽힘 |
| `35+37 환생세트` | `promotional_set` | detail + cutout | `35 + 37` 조합으로 읽힘 |
| `37 Duo Set` | `promotional_set` | detail + cutout | `37 x 2ea` 구조 |
| `Hydrating Series` | `line_bundle` | detail + cutout | `21 + 23 + 25 + 27` 라인 세트 |
| `Multi Booster 130` | `cross_line_bundle` | detail + cutout | `15 + 25 + 35 + 55` 앰플 세트 |
| `RE'Set` | `pending_mapping` | cutout only | 상세페이지 미확인 |

## 기존 제품 시스템 감사에 추가되는 의미

### 바뀌지 않는 것

1. `/products` 구현 레이어는 여전히 비어 있다.
2. `/products/[slug]`는 여전히 slug / shop URL / template contract가 부족하다.
3. `/routine`, `/skin-concerns`, 추천 조합 구조는 여전히 canonical matrix가 없다.

### 더 명확해진 것

1. canonical manifest는 이제 `sku` 전용 문서로는 부족하다.
2. offer / kit 타입을 분리하는 schema가 추가로 필요하다.
3. route 정책도 `products`와 별도 `offers` 계층이 필요하다.

## 권장 정리 전략

### raw source

- `private/product-*` : 단일 SKU
- `private/offers-kits/*` : 키트 / 세트 / 기획상품

### tracked docs

- `docs/products/*` : core SKU
- `docs/offers/*` : 키트 / 세트 / 번들

### route policy

- `/products` : 단일 SKU 허브
- `/products/[slug]` : 단일 SKU 상세
- `/offers/[slug]` : 키트 / 세트 / 기획상품 상세
- `/routine` / `/skin-concerns` : 단일 SKU와 offer를 연결하는 중간 허브

## 즉시 필요한 후속 문서

1. `PRODUCT_LIBRARY_MANIFEST.md`
2. `PRODUCT_TEMPLATE_CONTRACT.md`
3. `PRODUCT_SLUG_URL_MAP.md`
4. `ROUTINE_MATRIX.md`
5. `RECOMMENDATION_MATRIX.md`
6. `docs/offers/OFFER_PAGE_SOURCE.md`
7. `docs/offers/OFFER_VISUAL_ASSET_MAP.md`
8. `docs/offers/OFFER_ROUTE_POLICY.md`
