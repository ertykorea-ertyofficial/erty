# ERTY Product Template Contract

## 목적

이 문서는 `/products/[slug]` 단일 SKU 상세 페이지의 canonical template contract다.
화면 템플릿, 데이터 입력, 섹션 가변성, 신뢰 블록 노출 규칙을 한 곳에 고정한다.

이 문서는 core SKU 전용이다.
키트 / 세트 / 번들은 `docs/offers` 레이어와 별도 route를 사용한다.

## source basis

- `docs/PAGE_DESIGN.md`
- `docs/products/PRODUCT_SYSTEM_AUDIT.md`
- `docs/products/PRODUCT_PAGE_SOURCE.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/products/EVIDENCE_SOURCE.md`
- `docs/products/CTA_SOURCE.md`
- `docs/products/VISUAL_ASSET_MAP.md`
- `docs/products/IMAGE_USAGE_GUIDE.md`
- `private/product-docs/korean/products/*.md`

## route scope

- route: `/products/[slug]`
- 대상: `PRODUCT_LIBRARY_MANIFEST.md`에 있는 `sku`만

## required input set

### canonical input

- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/canonical/08_PRODUCT_ID_MAP.md`
- `docs/canonical/09_PRODUCT_SLUG_MAP.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`

### product source input

- 해당 제품 md 1개
- `PRODUCT_PAGE_SOURCE.md`
- `VISUAL_ASSET_MAP.md`
- `IMAGE_USAGE_GUIDE.md`

## supporting input set

- `FAQ_SOURCE.md`
- `EVIDENCE_SOURCE.md`
- `CTA_SOURCE.md`
- `docs/canonical/05_EVIDENCE_CLAIM_BANK.md`
- 해당 제품 기술 PDF

## content contract

### required data fields

| field | rule |
| --- | --- |
| `product_id` | required |
| `slug` | required |
| `display_name` | required |
| `line_id` | required |
| `type_id` | required |
| `product_definition` | required |
| `problem_bullets` | required, 1개 이상 |
| `mechanism_items` | required, 1개 이상 |
| `routine_items` | required, 1개 이상 |
| `primary_visual` | required |
| `shop_url_status` | required |

### optional data fields

| field | rule |
| --- | --- |
| `faq_items` | optional |
| `evidence_items` | optional |
| `notice_items` | optional |
| `secondary_visuals` | optional |
| `related_offers` | optional |

## section contract

### 1. Identity / Hero

- status: required
- source:
  - product md `제품 정의`
  - visual asset map
- required elements:
  - 제품 번호
  - 제품명
  - line label
  - 대표 비주얼
  - 한 줄 정의

### 2. Problem Context

- status: required
- source:
  - product md `해결하는 문제`
- required elements:
  - 문제 bullet
  - 대상 피부 / 컨디션

### 3. Mechanism / Ingredient Logic

- status: required
- source:
  - product md `핵심 성분과 메커니즘`
  - product page source
- required elements:
  - 핵심 성분
  - 작동 원리
- variation rule:
  - 성분 개수는 고정하지 않는다
  - 카드/아이콘 수는 제품별 3~6개 가변을 허용한다

### 4. Texture / Use / Routine

- status: required
- source:
  - product md `사용 시나리오/추천 루틴`
  - product page source
- required elements:
  - 사용 단계
  - 루틴 연결
- variation rule:
  - 루틴 개수는 2~3개 가변을 허용한다

### 5. Trust / Evidence

- status: required slot
- source:
  - evidence source
  - evidence claim bank
- rendering modes:
  - `proof-numeric`: class A 제품
  - `review-proof`: class B 제품
  - `mechanism-trust`: class C 제품
- rule:
  - evidence slot 자체는 유지하되, evidence strength에 따라 내용 밀도만 조절한다

### 6. FAQ / Notice

- status: recommended
- source:
  - FAQ source
  - product page source
- rule:
  - source-backed FAQ가 있으면 노출
  - `hidden tag`, 흔들어 사용, 알갱이 공지 같은 notice는 FAQ 또는 aside block으로 허용

### 7. Purchase CTA

- status: required slot
- source:
  - CTA source
  - product manifest
- rule:
  - CTA block은 항상 둔다
  - 실제 shop URL이 없으면 `pending_url` 상태로만 유지하고, 완료로 말하지 않는다

## visual contract

### required slots

- `hero_primary`
- `card_primary`

### optional slots

- `hero_support`
- `detail_support`
- `package_support`

### visual rules

1. `card_primary`는 `product-only`를 우선한다.
2. `hero_primary`는 `combo` 또는 `product + box` 조합을 우선한다.
3. 숫자, 로고, cap, base를 자르지 않는다.
4. square crop 강제 금지다.

## template state rules

| state | meaning |
| --- | --- |
| `ready_for_layout` | 카피, 비주얼, FAQ, trust slot까지 채울 수 있음 |
| `ready_without_url` | CTA URL만 비어 있음 |
| `needs_manifest_patch` | id / slug / asset key 불일치 |
| `needs_evidence_crosscheck` | 수치형 evidence가 있으나 PDF 교차검토 필요 |

## current system note

현재 15개 제품 md는 같은 5개 H2 구조를 공유하지만,
front matter나 strict field schema는 없다.
따라서 구현은 “헤딩 기반 + 가변 길이 콘텐츠”를 전제로 해야 한다.
