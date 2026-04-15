# ERTY Concern Product Map

## 목적

이 문서는 현재 source에서 반복적으로 확인되는 피부 고민 표현을 canonical concern map으로 정리한 문서다.
`/skin-concerns` 설계와 제품 연결 기준으로 사용한다.

이 concern taxonomy는 현재까지 확인된 source를 기준으로 정리한 working canonical map이다.
추후 브랜드 자료가 더 들어오면 조정될 수 있다.

## source basis

- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `private/product-docs/korean/products/*.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/products/PRODUCT_PAGE_SOURCE.md`
- `docs/products/ROUTINE_MATRIX.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## concern taxonomy

| concern_id | canonical concern label | source basis |
| --- | --- | --- |
| `texture-keratin` | 각질·피부결 정돈 | `01`, `03`, `protocol-step` |
| `sebum-trouble` | 피지·트러블·유수분 불균형 | `11`, `13`, `15`, balancing line |
| `pore-clarity` | 모공·정화 케어 | `13`, `15` |
| `dehydration` | 건조·수분 부족 | `21`, `23`, `25`, `27` |
| `barrier-sensitive` | 약해진 장벽·민감 컨디션 | `21`, `27`, `37` |
| `revitalizing-firmness` | 재생·탄력 회복 | `35`, `37` |
| `brightening-tone` | 칙칙함·불균일한 톤 | `02`, `55`, `57` |
| `uv-protection` | 자외선 보호 | `50` |

## concern to product matrix

| concern_id | primary products | secondary products | related routines | related offers |
| --- | --- | --- | --- | --- |
| `texture-keratin` | `01`, `03` | `02`, `37` | `er-perfection-toning-treatment`, `spicule-care-flow` | `er-toning-treatment-kit` |
| `sebum-trouble` | `11`, `13`, `15` | `35`, `37` | `balancing-core-routine`, `pore-control-flow` | none |
| `pore-clarity` | `13`, `15` | `11` | `balancing-core-routine`, `pore-control-flow` | none |
| `dehydration` | `21`, `23`, `25`, `27` | `37` | `hydrating-core-routine`, `hydration-pair`, `hydration-to-repair` | `hydrating-series-set`, `hydration-25-27-set` |
| `barrier-sensitive` | `27`, `37` | `21`, `25`, `35` | `hydrating-core-routine`, `revitalizing-core-routine`, `reset-and-repair` | `revival-35-37-set`, `37-duo-set` |
| `revitalizing-firmness` | `35`, `37` | `25`, `57` | `revitalizing-core-routine`, `revitalizing-to-brightening` | `revival-35-37-set`, `37-duo-set` |
| `brightening-tone` | `02`, `55`, `57` | `03`, `25`, `50` | `brightening-finish-routine`, `balance-to-brightening`, `revitalizing-to-brightening` | `multi-booster-130`, `er-toning-treatment-kit` |
| `uv-protection` | `50` | `55`, `57`, `37` | `sun-protection-finish`, `brightening-finish-routine` | none |

## routing notes for `/skin-concerns`

1. concern page는 concern 설명 -> primary products -> related routine -> related offers 순서가 자연스럽다.
2. concern page에서 offer는 보조 카드로만 다루고, core product보다 먼저 오지 않는다.
3. `texture-keratin`과 `brightening-tone`은 protocol-step 제품과 strongly connected 된다.
4. `dehydration`과 `barrier-sensitive`는 hydrating line과 revitalizing line이 겹친다.

## current limitations

1. concern별 우선순위는 현재 `primary / secondary` 수준까지만 고정한다.
2. severity, 피부 타입, 주야간 루틴 같은 세부 segmentation은 아직 정의되지 않았다.
3. `RE'Set`은 구성 미확정이라 concern map에 포함하지 않는다.
