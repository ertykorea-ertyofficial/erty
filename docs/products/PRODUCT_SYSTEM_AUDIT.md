# ERTY Product System Audit

## 목적

이 문서는 현재까지 수집한 제품 자산과 문서를 기준으로,

- 전체 제품 라이브러리
- 제품별 md 데이터셋
- 공통 템플릿
- 제품군별 IA 구조

가 실제로 어느 수준까지 정리되어 있는지 점검한 결과를 고정한다.

이 감사 문서는 이후 `/products`, `/products/[slug]`, `/routine`, `/skin-concerns`, 추천 조합 구조를 설계하기 전에 읽는 기준 문서다.

## 감사 범위

- `private/product-docs/korean/products/*.md`
- `private/product-docs/korean/PRODUCT_MECHANISM.md`
- `private/product-docs/korean/PRODUCT_CLAIM_RULE.md`
- `private/product-docs/technical-pdf`
- `private/product-detail-pages`
- `private/product-cutouts`
- `docs/products/*.md`
- `docs/PAGE_DESIGN.md`
- `docs/brand/BRAND_POSITIONING.md`

## 현재 자산 현황

### 로컬 authoritative source

- 제품별 md 문서: 15개
- 공통 메커니즘 문서: 1개
- 공통 claim 문서: 1개
- 제품 기술 소개서 PDF: 15개
- 제품별 상세페이지 이미지 폴더: 16개
- 제품별 누끼컷 폴더: 15개
- 상세페이지 / CTA / FAQ / Evidence / Visual source 문서: 6개

### 현재 확인된 제품 범위

- 소비자용 제품 15개
  - `01`, `02`, `03`
  - `11`, `13`, `15`
  - `21`, `23`, `25`, `27`
  - `35`, `37`
  - `50`, `55`, `57`
- 프로페셔널 키트 1개
  - `ER Toning Treatment KIT`

## 1. 전체 제품 라이브러리

### 현재 판단

- 상태: `부분 완료`

### 이미 정리된 것

1. 제품 정의 md 15개와 기술 소개서 PDF 15개가 대응된다.
2. 상세페이지 source 문서가 15개 제품 + `ER Toning Treatment KIT`까지 포괄한다.
3. 누끼컷 source 문서가 15개 소비자용 제품의 비주얼 자산을 포괄한다.
4. `README`, `PRODUCT_SOURCE_MAP`, `PRODUCT_PAGE_SOURCE`, `VISUAL_ASSET_MAP` 기준으로 제품 자산 위치 추적은 가능하다.

### 아직 비어 있는 것

1. 소비자용 15개 제품과 프로페셔널 키트를 한 번에 묶는 단일 canonical library 문서는 아직 없다.
2. 제품 ID, slug, 공식 표시명, 라인, 타입, 용량, shop URL을 한 번에 고정한 manifest는 없다.
3. `ER Toning Treatment KIT`은 상세페이지 source에는 있으나 제품 md / 누끼컷 세트에는 포함되지 않는다.

### 구현 영향

- `/products` 허브용 제품 라이브러리로는 이미 상당 부분 사용할 수 있다.
- 다만 실제 구현 데이터 소스로 쓰기에는 `canonical id / slug / shop url` 레이어가 부족하다.
- 현재 tracked 구현 레이어는 아직 비어 있다.
  - `pages/products.html`은 stub 상태다.
  - `pages/product-detail.html`은 stub 상태다.
  - `data/products.json`은 빈 배열이다.
  - `utils/router.js`는 route name만 매핑할 뿐, 실제 제품 데이터 소비 로직은 없다.

## 2. 제품별 md 데이터셋

### 현재 판단

- 상태: `정리 완료`

### 근거

1. `private/product-docs/korean/products` 아래에 제품별 md 15개가 존재한다.
2. 각 문서는 아래 공통 섹션 순서를 유지한다.
   - `제품 정의`
   - `해결하는 문제`
   - `핵심 성분과 메커니즘`
   - `사용 시나리오/추천 루틴`
   - `참고`
3. 제품별 핵심 성분, 문제 정의, 루틴 연결, 주의 메모까지 포함돼 있어 `/products/[slug]`의 카피 초안 데이터로 사용할 수 있다.

### 데이터셋 강점

1. 15개 전 제품이 같은 구조를 공유한다.
2. 루틴 연결 예시가 각 제품 문서에 이미 들어 있다.
3. `PRODUCT_MECHANISM`과 `PRODUCT_CLAIM_RULE`이 공통 기준을 보강한다.

### 데이터셋 리스크

1. front matter가 없고, 전부 markdown heading 기반 자유서술이다.
2. 오탈자가 파일명에 남아 있다.
   - `concentraed` 반복
3. slug 표준은 PDP Data Bundle 기준으로 순차 정규화한다.
   - `01` PDP canonical route는 `perfect-soothing-solution-1`
   - `50-sun-cream.md`와 제목의 `SPF50+ PA++++`

### 구현 영향

- 문서형 source로는 충분하다.
- 하지만 정적 사이트 데이터 소스로 쓰려면 후속적으로 field normalization이 필요하다.

## 3. 공통 템플릿

### 현재 판단

- 상태: `부분 완료`

### 이미 정리된 것

1. 제품 md 15개가 사실상 같은 5개 섹션 템플릿을 공유한다.
2. `VISUAL_ASSET_MAP`과 `IMAGE_USAGE_GUIDE`가 공통 비주얼 레이아웃 규칙을 제공한다.
3. `PRODUCT_PAGE_SOURCE`, `FAQ_SOURCE`, `EVIDENCE_SOURCE`, `CTA_SOURCE`가 상세페이지 섹션 소스 역할을 한다.

### 아직 비어 있는 것

1. `/products/[slug]`용 tracked 공통 템플릿 문서가 아직 없다.
2. 어떤 섹션이 required인지, 어떤 섹션이 optional인지가 명시되지 않았다.
3. CTA / FAQ / Evidence / Routine 블록을 어떤 규칙으로 노출할지 슬롯 계약이 없다.

### 구현 영향

- “공통 템플릿이 없다”가 아니라, “암묵적 템플릿은 있으나 명시적 템플릿 문서가 아직 없다”가 정확하다.
- 따라서 화면 템플릿을 만들 수는 있지만, 이후 제품이 늘어나면 유지보수 기준이 흔들릴 수 있다.
- 구현 단계에서는 md를 직접 파싱할지, 정규화된 manifest를 둘지 먼저 결정해야 한다.

## 4. 제품군별 IA 구조

### 현재 판단

- 상태: `부분 완료`

### 이미 정리된 것

1. `BRAND_POSITIONING`이 라인 체계를 정의한다.
   - balancing
   - hydrating
   - revitalizing
   - brightening
2. `VISUAL_ASSET_MAP`이 첫 자리 수와 두 번째 자리 수를 시각 시스템과 제품 타입으로 정리한다.
3. `IMAGE_USAGE_GUIDE`가 라인/타입별 레이아웃 템플릿을 제안한다.
4. `PRODUCT_MECHANISM`이 전 제품을 7개 작동 원리 범주로 묶는다.

### 아직 비어 있는 것

1. `/skin-concerns`용 canonical concern taxonomy가 없다.
2. concern-to-product 매핑 표가 없다.
3. `/routine` 경로 자체가 아직 기준 문서에 정의되어 있지 않다.
4. 추천 조합은 예시 수준으로 흩어져 있고, canonical recommendation matrix가 없다.
5. `/products/[slug]`의 slug 규칙과 `ertyofficial.shop` URL 매핑이 없다.

### 구현 영향

- `/products`는 라인 기반 1차 IA로 충분히 설계 가능하다.
- `/skin-concerns`, `/routine`, 추천 조합 구조는 아직 page shell 이상으로 확정하기 어렵다.

## 경로별 준비도 판단

| 경로 | 현재 준비도 | 판단 |
| --- | --- | --- |
| `/products` | 높음 | 라인 / 타입 / 비주얼 기준으로 1차 설계 가능 |
| `/products/[slug]` | 중간 | 카피 source는 충분하지만 slug / shop URL / template contract 필요 |
| `/skin-concerns` | 낮음 | concern taxonomy와 concern-product map 필요 |
| `/routine` | 낮음 | route 정의와 routine matrix가 아직 없음 |
| 추천 조합 구조 | 중간 | source 예시는 풍부하지만 canonical recommendation rule이 없음 |

## 현재까지 확인된 추천 조합 source

### 제품 md와 source 문서에서 직접 확인되는 예시

- `1 -> 2 -> 3`
- `15 -> 25 / 35 / 55 / 37`
- `37 -> 15 / 25 / 35 / 55`
- `55 -> 57`
- `25 -> 27`
- `21 -> 23 -> 25 -> 27`

위 조합은 example source로는 충분하지만, 어떤 기준으로 추천 우선순위를 정할지까지는 아직 정의되지 않았다.

## 최종 판단

### 이미 충분히 정리된 것

1. 제품별 md 데이터셋
2. 라인 체계의 기초 분류
3. 제품 비주얼 자산 체계
4. 상세페이지 / FAQ / Evidence / CTA source 레이어

### 아직 더 정리해야 하는 것

1. core product와 분리된 `offers / kits` schema의 page-level source 문서
2. 실제 Cafe24 상품 URL 검증
3. `/products`와 `/offers` 구현용 데이터셋 파생

## offer / kit 레이어 관련 메모

- 새로 수집한 키트상품 / 기획상품 자산은 core product library 자체를 바꾸지는 않는다.
- 다만 `ER Toning Treatment KIT`, `Hydrating Series`, `Multi Booster 130` 같은 composite offer가 실제 source-backed entity라는 점이 확인됐다.
- 따라서 이후 manifest와 route 설계는 `sku`만이 아니라 `professional_kit`, `promotional_set`, `line_bundle`, `cross_line_bundle` 타입까지 포함해야 한다.
- 관련 문서는 `docs/offers/`에서 별도로 관리한다.

## 다음 우선순위 문서

1. `docs/offers/OFFER_PAGE_SOURCE.md`
2. `docs/offers/OFFER_VISUAL_ASSET_MAP.md`
3. 구현용 product / offer data manifest
4. 실제 shop URL 검증 기록 문서
