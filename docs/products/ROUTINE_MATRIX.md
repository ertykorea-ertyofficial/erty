# ERTY Routine Matrix

## 목적

이 문서는 source-backed routine을 canonical matrix 형태로 정리한 문서다.
이 문서의 목적은 `/routine` 설계와 제품 상세 내 routine block 연결 기준을 만드는 것이다.

이 문서는 “최종 추천 알고리즘”이 아니라,
현재 확인된 routine source를 line routine과 cross-line example로 정리한 것이다.

## source basis

- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`
- `private/product-docs/korean/products/*.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/products/PRODUCT_PAGE_SOURCE.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## matrix reading rule

- `routine_type = canonical`: 라인 또는 프로토콜 단위로 반복성이 높은 루틴
- `routine_type = source_example`: 개별 제품 문서에 직접 나온 조합 예시

## canonical routines

| routine_id | routine_name | routine_type | sequence | primary goal | related concerns | related offers |
| --- | --- | --- | --- | --- | --- | --- |
| `er-perfection-toning-treatment` | ER Perfection Toning Treatment | `canonical` | `01 -> 02 -> 03` | 각질 정돈, 톤 케어, step protocol | 각질·피부결, 톤 케어 | `er-toning-treatment-kit` |
| `balancing-core-routine` | Balancing Core Routine | `canonical` | `11 -> 13 -> 15` | 피지, 모공, 유수분 밸런스 | 피지·트러블, 모공·피지 | none |
| `hydrating-core-routine` | Hydrating Core Routine | `canonical` | `21 -> 23 -> 25 -> 27` | 수분 공급, 보습 유지, 장벽 보호 | 건조·수분 부족, 장벽 약화 | `hydrating-series-set`, `hydration-25-27-set` |
| `revitalizing-core-routine` | Revitalizing Core Routine | `canonical` | `35 -> 37` | 재생, 탄력, 장벽 회복 | 탄력 저하, 재생 필요 | `revival-35-37-set`, `37-duo-set` |
| `brightening-finish-routine` | Brightening Finish Routine | `canonical` | `15 or 25 -> 55 -> 57 -> 50` | 안색 정돈, 브라이트닝, UV protection | 칙칙함·불균일한 톤, 자외선 보호 | `multi-booster-130` |

## source-backed example routines

| routine_id | source product | sequence | interpretation |
| --- | --- | --- | --- |
| `reset-and-repair` | `01` | `01 -> 35 -> 37` | 피부결 리셋 후 재생·장벽 보강 |
| `spicule-care-flow` | `01`, `02`, `03` | `01 -> 02 -> 03` | 각질 정돈 + 톤 케어 + 스피큘 단계 |
| `pore-control-flow` | `13`, `15` | `13 -> 15` | 모공·피지 정돈 후 집중 부스터 |
| `balance-to-brightening` | `15`, `55` | `15 -> 55` | 컨디션 정돈 후 브라이트닝 |
| `hydration-pair` | `25`, `27` | `25 -> 27` | 수분 부스터 후 수분 크림 고정 |
| `hydration-to-repair` | `23`, `25`, `37` | `23 -> 25 -> 37` | 수분 정돈 후 회복 마무리 |
| `revitalizing-to-brightening` | `35`, `55`, `57` | `35 -> 55 -> 57` | 재생·탄력 후 안색 케어 |
| `sun-protection-finish` | `37`, `50` | `37 -> 50` | 장벽 크림 후 주간 UV 보호 |

## offer-linked routines

| offer_id | implied sequence | interpretation |
| --- | --- | --- |
| `er-toning-treatment-kit` | `01 -> 02 -> 03` | 단계형 프로토콜 |
| `hydration-25-27-set` | `25 -> 27` | 수분 부스터 + 크림 페어 |
| `revival-35-37-set` | `35 -> 37` | 재생 부스터 + 크림 페어 |
| `37-duo-set` | `37 + 37` | 동일 SKU 집중 사용 |
| `hydrating-series-set` | `21 -> 23 -> 25 -> 27` | 하이드레이팅 라인 루틴 |
| `multi-booster-130` | `15 + 25 + 35 + 55` | line-crossing booster 선택 세트 |

## current limitations

1. concern별 진입 규칙은 아직 `CONCERN_PRODUCT_MAP.md`와 함께 봐야 한다.
2. 각 routine의 아침 / 저녁 / 주기 규칙은 source에서 완전히 고정되지 않았다.
3. 따라서 `/routine` 구현 시에는 “루틴 구조”는 고정하되, 사용 빈도와 강도는 별도 note로 분리하는 편이 안전하다.
