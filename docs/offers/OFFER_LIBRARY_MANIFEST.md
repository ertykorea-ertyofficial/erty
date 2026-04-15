# ERTY Offer Library Manifest

## 목적

이 문서는 키트상품 / 기획상품을 logical id 기준으로 정리한 1차 manifest다.
구현용 JSON은 아니지만, 이후 route / slug / shop URL / 카드 설계를 위한 canonical registry 초안으로 사용한다.

## 분류 기준

- `professional_kit`: 단계형 프로토콜 키트
- `promotional_set`: 특정 SKU 2개 이상을 묶은 판매형 세트
- `line_bundle`: 특정 라인 전체를 묶은 세트
- `cross_line_bundle`: 여러 라인의 공통 카테고리만 모은 세트
- `pending_mapping`: source는 있으나 구성 관계가 아직 확정되지 않은 항목

## 현재 manifest

| logical_id | display_name | category | source status | relation to core products | route recommendation |
| --- | --- | --- | --- | --- | --- |
| `er-toning-treatment-kit` | `ER Toning Treatment KIT` | `professional_kit` | detail + cutout | `01 + 02 + 03` 프로토콜 키트 | `/offers/[slug]` |
| `hydration-25-27-set` | `25+27 수분세트` | `promotional_set` | detail + cutout | `25 + 27` 세트 | `/offers/[slug]` |
| `revival-35-37-set` | `35+37 환생세트` | `promotional_set` | detail + cutout | `35 + 37` 세트 | `/offers/[slug]` |
| `37-duo-set` | `37 Duo Set` | `promotional_set` | detail + cutout | `37 x 2ea` | `/offers/[slug]` |
| `hydrating-series-set` | `Hydrating Series` | `line_bundle` | detail + cutout | `21 + 23 + 25 + 27` | `/offers/[slug]` |
| `multi-booster-130` | `Multi Booster 130` | `cross_line_bundle` | detail + cutout | `15 + 25 + 35 + 55` | `/offers/[slug]` |
| `reset-set` | `RE'Set` | `pending_mapping` | cutout only | 구성 미확정 | `/offers/[slug]` 보류 |

## 확인된 리스크

1. `25+27 수분세트` cutout 시각 검사에서는 함께 보이는 booster 라벨이 `25`가 아니라 `24`처럼 읽힌다.
2. `35+37 환생세트` cutout 시각 검사에서는 booster 라벨이 `35`가 아니라 `34`처럼 읽힌다.
3. 따라서 set artwork에는 legacy numbering 또는 alias risk가 있을 수 있다.
4. set naming과 core product numbering의 canonical alias 규칙을 후속 문서에서 정리해야 한다.

## 현재 권장 route 정책

1. 단일 SKU만 `/products/[slug]`로 보낸다.
2. 키트 / 번들 / 기획상품은 `/offers/[slug]` 같은 별도 계층으로 보낸다.
3. `/routine` 또는 `/skin-concerns`는 단일 SKU와 offer를 모두 연결할 수 있지만, offer 자체를 core product로 취급하지 않는다.
