# 04_TREATMENT_PROTOCOL_MASTER

## 목적

이 문서는 source-backed treatment protocol과 조합 예시를 정리한 canonical input이다.
이 문서는 recommendation matrix의 최종본이 아니라, 현재까지 확인된 프로토콜 source만 정리한 master다.

## source basis

- `docs/products/PRODUCT_MECHANISM.md`
- `private/product-docs/korean/products/*.md`
- `docs/products/PRODUCT_PAGE_SOURCE.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## canonical protocol objects

### 1. ER Perfection Toning Treatment

- sequence:
  - `01 Perfect Soothing Solution`
  - `02 Perfect N.Cell Ampoule`
  - `03 Perfect Spicule Formulation`
- object type:
  - protocol-step routine
- related offer:
  - `ER Toning Treatment KIT`

### 2. balancing care flow

- base sequence:
  - `11 -> 13 -> 15`
- extended finish:
  - `35` or `37`
- interpretation:
  - 클렌징 → 정화/피지 케어 → 집중 부스터 → 재생/장벽 보강

### 3. hydrating care flow

- base sequence:
  - `21 -> 23 -> 25 -> 27`
- optional finish:
  - `35` or `37`
- interpretation:
  - 세안 → 수분 정돈 → 수분 부스터 → 수분 크림 → 컨디션 회복

### 4. brightening care flow

- source-backed example:
  - `15 or 25 -> 55 -> 57 -> 50`
- interpretation:
  - 피부 컨디션 정돈 → 브라이트닝 부스터 → 브라이트닝 크림 → UV protection

## cross-product recommendation examples

- `15 -> 25 / 35 / 55 / 37`
- `37 -> 15 / 25 / 35 / 55`
- `25 -> 27`
- `55 -> 57`

위 조합은 product source와 FAQ에서 직접 확인된 example source다.
우선순위 규칙이나 concern별 선택 로직은 아직 별도 matrix가 필요하다.

## offer-linked protocol objects

| offer_id | type | linked core products |
| --- | --- | --- |
| `er-toning-treatment-kit` | professional_kit | `01 + 02 + 03` |
| `hydration-25-27-set` | promotional_set | `25 + 27` |
| `revival-35-37-set` | promotional_set | `35 + 37` |
| `37-duo-set` | promotional_set | `37 x 2` |
| `hydrating-series-set` | line_bundle | `21 + 23 + 25 + 27` |
| `multi-booster-130` | cross_line_bundle | `15 + 25 + 35 + 55` |

## 현재 한계

1. concern별 canonical selection rule은 아직 없다.
2. routine route schema도 아직 없다.
3. 메커니즘 상세는 `docs/products/PRODUCT_MECHANISM.md`를 함께 읽어야 한다.
4. 따라서 이 문서는 “지금 확인된 조합 source”로만 사용한다.
