# ERTY Main Domain Page-by-Page Execution Checklist

## 상태

- 이전의 `모든 페이지를 한 번에 묶는 라운드 방식`은 폐기한다.
- 현재 기준 개발 원칙은 `페이지별 라운드 진행 + 멀티 에이전트 병렬 검토 + 사용자 preview 승인 후 다음 단계 진행`이다.
- 어떤 페이지도 사용자 시각 검토와 승인 없이 다음 단계로 넘기지 않는다.

## 운영 원칙

- 각 페이지는 독립된 작업 단위로 진행한다.
- 각 페이지는 `설계 -> hi-fi -> 구현 -> 멀티 에이전트 재검토 -> 사용자 preview -> 승인` 순서로만 진행한다.
- 한 번에 여러 페이지를 동시에 구현하지 않는다.
- 구현 전에 항상 해당 페이지에 필요한 브랜드 자산, 로고, 제품 누끼컷, 근거 source를 먼저 확인한다.
- 사용자 최종 컨펌 전에는 commit, push, deployment를 하지 않는다.
- preview/local 결과와 production 결과는 반드시 분리 보고한다.
- `ertyofficial.shop` URL이 `confirmed`되기 전까지 purchase CTA는 `pending` 상태를 유지한다.

## 멀티 에이전트 게이트

각 페이지 preview를 사용자에게 보여주기 전에 최소 아래 역할의 PASS 또는 HOLD를 받는다.

- `ERTY유진`: visual / shell / background / component grammar
- `ERTY나연`: IA / section order / page role
- `ERTY지안`: brand mood / language / copy tone
- `ERTY수민`: implementation quality / route / responsive / shell contract
- `ERTY소윤`: semantic / SEO / page-role readiness
- `ERTY민지`: CTA hierarchy / bridge / pending state

규칙:

- HOLD가 하나라도 나오면 바로 사용자에게 preview를 넘기지 않는다.
- PASS가 나와도, 남은 수정 제안은 brief에 기록하고 가능한 범위에서 먼저 정리한다.
- 내 역할은 항상 구현자가 아니라 `오케스트레이터`가 우선이다.

## 글로벌 기반 작업

### Foundation 0 — 전역 계약 고정

- [x] 도메인 계약 고정: `ertyofficial.com` / `ertyofficial.shop`
- [x] route canon 고정
- [x] nav canon 고정
- [x] product / offer taxonomy 분리
- [x] CTA 3계층 정의
- [x] `pending_url` 정책 고정
- [x] 시각 토큰 규칙 고정
- [x] `h1` 1개 정책 고정
- [x] locale 정책 고정: `ko-KR` only
- [x] evidence / claim / routine / concern 기본 계약 고정

### Foundation 1 — 글로벌 shell 최소 기반

- [ ] header 최종 shell
- [ ] footer 최종 shell
- [ ] background system 최소 기준
- [ ] grid / spacing 기준
- [ ] logo asset 적용
- [ ] nav active state / mobile nav state 검증
- [ ] 사용자 승인

주의:

- 글로벌 shell도 독립 preview 대상으로 본다.
- shell 단계에서 내부 메타 문구가 고객 노출 카피로 보이면 안 된다.

## 페이지별 실행 순서

1. `/` Home
2. `/philosophy`
3. `/products`
4. `/products/37-intensive-cellular-er-cream`
5. `/evidence`
6. `/journal`
7. `/skin-concerns`
8. `/offers/er-toning-treatment-kit`

## 공통 페이지 체크 사이클

각 페이지는 아래 순서를 그대로 반복한다.

### A. Page Freeze

- [ ] page role 확정
- [ ] required source 문서 확인
- [ ] 사용할 브랜드 자산 / 로고 / 제품 이미지 확인
- [ ] CTA state 확정
- [ ] section order 확정

### B. Hi-fi Design

- [ ] visual direction 확정
- [ ] background / hierarchy / spacing 확정
- [ ] logo / image placement 확정
- [ ] shell-safe copy 확정

### C. Static Implementation

- [ ] semantic HTML 반영
- [ ] CSS 토큰 반영
- [ ] 최소 JS만 사용
- [ ] authoritative path 유지

### D. Multi-Agent Review

- [ ] 유진 PASS
- [ ] 나연 PASS
- [ ] 지안 PASS
- [ ] 수민 PASS
- [ ] 소윤 PASS
- [ ] 민지 PASS

### E. Preview & Approval

- [ ] local preview 생성
- [ ] desktop screenshot 생성
- [ ] mobile screenshot 생성
- [ ] 사용자 시각 검토 완료
- [ ] 다음 페이지로 진행 승인

## Page 1 — Home

### 목표

- 브랜드 첫인상
- 문제 정의 우선
- 메인 도메인 역할 명확화
- 제품 허브 / 철학 / 저널 / 근거 라우트 입구 제공

### source

- `docs/brand/BRAND_CORE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `DESIGN.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/brand/BRAND_SOURCE_MAP.md`

### asset

- [ ] 공식 로고 자산 적용
- [ ] 브랜드 자산 기반 hero treatment 결정
- [ ] text-only placeholder logo 제거

### 진행

- [x] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 2 — Philosophy

### 목표

- 존재 이유
- 해석 프레임
- 브랜드 약속

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 3 — Products Hub

### 목표

- 번호 체계
- 라인 taxonomy
- core SKU 허브
- concern / evidence 연결의 입구

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 4 — Product Detail (`37`)

### 목표

- `identity -> problem -> mechanism -> routine -> proof -> FAQ -> CTA`
- 대표 상세 템플릿 고정

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 5 — Evidence

### 목표

- proof library
- evidence class 구조
- 제품 상세 proof의 canonical hub

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 6 — Journal

### 목표

- 검색 유입 회수
- 브랜드 / 피부 / 루틴 / 인사이트 구조

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 7 — Skin Concerns

### 목표

- concern -> product -> routine -> evidence 구조

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## Page 8 — Offer Detail

### 목표

- core SKU와 다른 bundle grammar
- composition / protocol / bridge CTA

### 진행

- [ ] A. Page Freeze
- [ ] B. Hi-fi Design
- [ ] C. Static Implementation
- [ ] D. Multi-Agent Review
- [ ] E. Preview & Approval

## 최종 QA / 런칭 게이트

- [ ] 모든 route direct-open 확인
- [ ] `h1` 1개 규칙 확인
- [ ] `/products` / `/offers` taxonomy 분리 확인
- [ ] claim / evidence 규칙 확인
- [ ] logo / asset usage 최종 점검
- [ ] production launch readiness 사용자 승인
- [ ] commit 승인
- [ ] push 승인
- [ ] deployment 승인
