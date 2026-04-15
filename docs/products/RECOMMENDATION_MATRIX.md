# ERTY Recommendation Matrix

## 목적

이 문서는 source-backed 추천 조합을 canonical matrix 형태로 고정한 문서다.
`/products`, `/products/[slug]`, `/routine`, `/skin-concerns`에서 어떤 조합을 어떤 맥락으로 노출할지 정리한다.

이 문서는 “자동 추천 알고리즘”이 아니다.
현재 source에서 직접 확인된 line routine, cross-line example, offer bridge만 정리한다.

## source basis

- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`
- `docs/products/ROUTINE_MATRIX.md`
- `docs/products/CONCERN_PRODUCT_MAP.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`
- `docs/products/FAQ_SOURCE.md`

## recommendation reading rule

- `line-core`: 같은 라인 또는 같은 프로토콜 안에서 이어지는 기본 조합
- `previous-step`: 현재 제품 앞단에 놓이는 준비 단계
- `next-step`: 현재 제품 다음에 놓이는 마무리 단계
- `cross-line-example`: source에서 직접 확인된 line-crossing 조합
- `offer-bridge`: 해당 조합을 묶는 kit / set / bundle

## surface rule

1. `/products` 허브는 `line-core` 중심으로만 추천을 노출한다.
2. `/products/[slug]`는 `line-core` 1개, `cross-line-example` 1개, `offer-bridge` 1개까지만 노출하는 것이 안전하다.
3. `/routine`은 단일 상품 추천이 아니라 sequence 전체를 먼저 보여준다.
4. `/skin-concerns`는 `CONCERN_PRODUCT_MAP.md`를 1차 기준으로 보고, 본 문서는 secondary recommendation 용도로만 쓴다.
5. source에 없는 조합은 추가하지 않는다.

## product-to-product recommendation matrix

| base_product | recommended_products | relation_type | recommendation goal | related_offer | source basis |
| --- | --- | --- | --- | --- | --- |
| `01` | `02`, `03` | `line-core`, `next-step` | ER 단계형 프로토콜 연결 | `er-toning-treatment-kit` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `01` | `35`, `37` | `cross-line-example` | 리셋 후 재생·장벽 보강 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `02` | `01`, `03` | `line-core`, `previous-step`, `next-step` | ER 단계형 프로토콜 문맥 유지 | `er-toning-treatment-kit` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `03` | `01`, `02` | `line-core`, `previous-step` | ER 단계형 프로토콜 문맥 유지 | `er-toning-treatment-kit` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `11` | `13`, `15` | `line-core`, `next-step` | balancing 라인 기본 루틴 연결 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `13` | `11`, `15` | `line-core`, `previous-step`, `next-step` | 정화 단계 앞뒤 루틴 연결 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `15` | `11`, `13` | `line-core`, `previous-step` | balancing 라인 기본 문맥 유지 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `15` | `25`, `35`, `55`, `37` | `cross-line-example` | 컨디션 정돈 후 수분·재생·브라이트닝 확장 | `multi-booster-130` | `04_TREATMENT_PROTOCOL_MASTER` |
| `21` | `23`, `25`, `27` | `line-core`, `next-step` | hydrating 라인 기본 루틴 연결 | `hydrating-series-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `23` | `21`, `25`, `27` | `line-core`, `previous-step`, `next-step` | hydrating 라인 기본 문맥 유지 | `hydrating-series-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `23` | `37` | `cross-line-example` | hydration 후 회복 마무리 | none | `ROUTINE_MATRIX` |
| `25` | `21`, `23`, `27` | `line-core`, `previous-step`, `next-step` | hydrating 라인 기본 루틴 연결 | `hydrating-series-set`, `hydration-25-27-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `25` | `35`, `37` | `cross-line-example` | 수분 루틴 뒤 회복 보강 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `25` | `55` | `cross-line-example` | 수분 정돈 후 브라이트닝 확장 | `multi-booster-130` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `27` | `21`, `23`, `25` | `line-core`, `previous-step` | hydrating 라인 풀 루틴 문맥 유지 | `hydrating-series-set`, `hydration-25-27-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `35` | `37` | `line-core`, `next-step` | revitalizing 라인 기본 루틴 연결 | `revival-35-37-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `35` | `55`, `57` | `cross-line-example` | 재생 후 브라이트닝 단계 확장 | `multi-booster-130` | `ROUTINE_MATRIX` |
| `37` | `35` | `line-core`, `previous-step` | revitalizing 라인 기본 문맥 유지 | `revival-35-37-set`, `37-duo-set` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `37` | `15`, `25`, `35`, `55` | `cross-line-example` | 회복 크림 기준 line-crossing 조합 확장 | `revival-35-37-set`, `multi-booster-130` | `04_TREATMENT_PROTOCOL_MASTER` |
| `37` | `50` | `next-step`, `cross-line-example` | 주간 보호 마무리 | none | `ROUTINE_MATRIX` |
| `50` | `37`, `55`, `57` | `previous-step` | 자외선 차단 전 준비 / 브라이트닝 문맥 유지 | none | `ROUTINE_MATRIX` |
| `55` | `57` | `line-core`, `next-step` | brightening 라인 기본 페어 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `55` | `50` | `next-step` | 브라이트닝 후 UV protection 마무리 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `55` | `15`, `25`, `35` | `cross-line-example`, `previous-step` | balancing / hydrating / revitalizing 이후 브라이트닝 확장 | `multi-booster-130` | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |
| `57` | `55`, `50` | `line-core`, `previous-step`, `next-step` | brightening 크림 마무리와 자외선 보호 연결 | none | `04_TREATMENT_PROTOCOL_MASTER`, `ROUTINE_MATRIX` |

## concern-first recommendation notes

| concern_id | primary entry | secondary bridge | commercial bridge |
| --- | --- | --- | --- |
| `texture-keratin` | `01`, `03` | `02`, `37` | `er-toning-treatment-kit` |
| `sebum-trouble` | `11`, `13`, `15` | `35`, `37` | none |
| `pore-clarity` | `13`, `15` | `11` | none |
| `dehydration` | `21`, `23`, `25`, `27` | `37` | `hydrating-series-set`, `hydration-25-27-set` |
| `barrier-sensitive` | `27`, `37` | `21`, `25`, `35` | `revival-35-37-set`, `37-duo-set` |
| `revitalizing-firmness` | `35`, `37` | `25`, `57` | `revival-35-37-set`, `37-duo-set` |
| `brightening-tone` | `02`, `55`, `57` | `03`, `25`, `50` | `multi-booster-130`, `er-toning-treatment-kit` |
| `uv-protection` | `50` | `37`, `55`, `57` | none |

## implementation note

1. recommendation card는 본 문서와 `PRODUCT_LIBRARY_MANIFEST.md`를 함께 읽어야 한다.
2. offer 추천은 `docs/offers/OFFER_LIBRARY_MANIFEST.md`에서 별도 카드 정보를 읽어야 한다.
3. 실제 shop 링크는 `PRODUCT_SLUG_URL_MAP.md`의 `shop_url_status`가 `confirmed`가 되기 전까지 placeholder 상태로만 둔다.

## current limitations

1. 본 문서는 source-backed relation만 정리한다.
2. 피부 타입, 사용 빈도, 계절성, 시간대별 추천 규칙은 아직 고정하지 않는다.
3. `RE'Set`은 구성 미확정이라 recommendation matrix에 포함하지 않는다.
