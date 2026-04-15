# ERTY Main Domain Page Design

## 문서 목적

이 문서는 `ertyofficial.com` 메인 도메인 페이지 설계 기준이다.
각 페이지의 역할, 섹션 구성, CTA 방향, 구현 순서를 정의한다.

## 디자인 레퍼런스

UI / UX 참고용 외부 레퍼런스 저장본은 아래 경로에 보관한다.

- `references/awesome-design-md-main/README.md`
- `references/awesome-design-md-main/design-md/*/DESIGN.md`

이 경로는 구현 시 분위기, 레이아웃, 카피 톤, 인터랙션 방향을 참고하는 용도이며,
ERTY 사이트는 이 레퍼런스를 그대로 복제하지 않고 브랜드 구조에 맞게 재해석한다.

## 공통 설계 원칙

1. 모든 페이지는 브랜드 정의, 문제 정의, 제품 해석, 신뢰, 전환 중 하나 이상의 명확한 임무를 가진다.
2. 페이지는 설명 중심 구조로 설계하고, 구매는 `ertyofficial.shop`으로 넘긴다.
3. semantic HTML을 유지한다.
4. `header`, `main`, `section`, `footer` 구조를 기본으로 한다.
5. 페이지당 `h1`은 1개만 사용한다.
6. CTA는 판매 압박보다 다음 해석 단계나 쇼핑 연결의 문맥을 우선한다.

## 공통 레이아웃

### Header

- 브랜드 워드마크
- 주요 네비게이션
- 핵심 CTA

### Footer

- 브랜드 요약
- 주요 경로 링크
- 연락/정책 링크
- 추후 SNS 또는 채널 링크 자리

## CTA 원칙

- 메인 도메인 CTA는 설명형 문구를 우선한다
- 최종 구매 CTA는 `ertyofficial.shop` 상품 페이지로 연결한다
- CTA 계층은 최대 2단계로 유지한다

## 페이지별 설계

### 1. `/` Home

#### 역할

브랜드 정의와 전체 허브 역할을 동시에 수행한다.

#### 핵심 질문

- ERTY는 어떤 브랜드인가
- 어떤 문제를 어떻게 해석하는가
- 왜 제품을 봐야 하는가

#### 섹션

1. Hero
2. Brand Definition
3. Problem Framing
4. Product Intro
5. Evidence Snapshot
6. Journal Preview
7. CTA

#### CTA

- 브랜드 철학 보기
- 제품 해석 보러가기
- 쇼핑몰 이동

#### 구현 우선순위

1순위

### 2. `/philosophy`

#### 역할

브랜드 존재 이유와 해석 구조를 설명한다.

#### 핵심 질문

- 왜 이 브랜드가 존재하는가
- 피부 문제를 어떤 관점으로 보는가
- 브랜드가 포기하지 않는 기준은 무엇인가

#### 섹션

1. Page Intro
2. Why We Exist
3. Interpretation Framework
4. Brand Principles
5. Brand Promise
6. CTA

#### CTA

- 제품 해석 허브로 이동
- 홈으로 복귀

#### 구현 우선순위

2순위

### 3. `/products`

#### 역할

제품을 단순 진열하지 않고 해석 구조로 묶는 허브다.

#### 핵심 질문

- 어떤 제품이 어떤 맥락에서 필요한가
- 제품 선택 기준은 무엇인가

#### 섹션

1. Products Intro
2. Product Framework
3. Product Card Grid
4. Concern-to-Product Mapping
5. FAQ Preview
6. CTA

#### CTA

- 개별 제품 상세 보기
- 쇼핑몰로 이동

#### 구현 우선순위

3순위

### 4. `/products/[product-slug]`

#### 역할

개별 제품의 존재 이유, 사용 맥락, 신뢰 요소, 구매 연결을 담당한다.

#### 초기 대표 대상

- `37 cream`

#### 핵심 질문

- 이 제품은 왜 존재하는가
- 누구에게 필요한가
- 어떤 사용 맥락에서 고려해야 하는가

#### 섹션

1. Product Summary
2. Problem Context
3. Why This Product Exists
4. Key Benefits
5. Texture / Use / Routine
6. Evidence / Reactions
7. FAQ
8. Purchase CTA

#### CTA

- `ertyofficial.shop` 상품 상세 페이지 이동

#### 구현 우선순위

4순위

### 5. `/evidence`

#### 역할

후기, 반응, 언급, 해석 근거를 브랜드 자산으로 회수한다.

#### 핵심 질문

- 무엇이 신뢰 근거가 되는가
- 어떤 반응이 누적되고 있는가

#### 섹션

1. Evidence Intro
2. Reaction Blocks
3. Trust Categories
4. Featured Quotes or Cases
5. Related Product Links
6. CTA

#### CTA

- 관련 제품 보기
- 브랜드 철학 보기

#### 구현 우선순위

5순위

### 6. `/journal`

#### 역할

브랜드·피부·루틴·인사이트 콘텐츠를 통해 검색 유입을 회수한다.

#### 핵심 질문

- 어떤 주제를 지속적으로 설명할 것인가
- 검색 유입을 어떤 구조로 흡수할 것인가

#### 섹션

1. Journal Intro
2. Featured Article
3. Category Navigation
4. Latest Entries
5. Internal Linking Module
6. CTA

#### 초기 구현 범위

- 최소 3개 아티클 카드 구조

#### CTA

- 피부 고민 페이지 보기
- 제품 허브 보기

#### 구현 우선순위

6순위

### 7. `/skin-concerns`

#### 역할

검색 랜딩용 피부 고민 허브다.

#### 핵심 질문

- 사용자가 어떤 피부 고민 단어로 들어오는가
- 그 고민을 ERTY는 어떻게 재해석하는가

#### 섹션

1. Concerns Intro
2. Concern Category Grid
3. Interpretation Notes
4. Related Product Mapping
5. Journal Links
6. CTA

#### CTA

- 관련 제품 보기
- 저널로 이동

#### 구현 우선순위

7순위

### 8. `/global`

#### 역할

향후 지역, 언어, 확장 계획을 담는 확장용 페이지다.

#### 섹션

1. Global Intro
2. Expansion Status
3. Language / Market Notice
4. Contact or Partnership CTA

#### 구현 우선순위

8순위

## 보류 페이지

### `/brand` 또는 `/about`

- 둘 중 하나를 표준 경로로 확정한 뒤 구현

### `/contact`

- 문의 전용인지 제휴 포함인지 먼저 확정 필요

## 공통 컴포넌트 설계

- Header
- Footer
- Hero
- Section Intro
- Product Card
- Evidence Block
- Journal Card
- Concern Card
- CTA Banner

## 단계별 실행 순서

### Step 1

- 홈 페이지 실제 섹션 마크업
- 공통 Header / Footer 확정

### Step 2

- Philosophy 페이지 구현
- 브랜드 설명 문구 구조 확정

### Step 3

- Products 허브 구현
- Product Card 패턴 확정

### Step 4

- `37 cream` 제품 상세 구현
- shop CTA 연결 포인트 명세

### Step 5

- Evidence 페이지 구현
- 신뢰 자산 블록 패턴 확정

### Step 6

- Journal 허브와 3개 콘텐츠 카드 구조 구현

### Step 7

- Skin Concerns 허브 구현

### Step 8

- Global stub 구현
- 보류 페이지 경로 확정

## 구현 시 확인 항목

1. 실제 텍스트가 판매 문구가 아니라 해석 구조를 담고 있는지
2. 각 페이지 `h1`이 1개인지
3. CTA가 `ertyofficial.shop`으로만 전환되는지
4. 링크 구조가 허브 -> 상세 -> 쇼핑 흐름으로 단순한지
5. 추후 JSON 데이터 분리 구조로 확장 가능한지
