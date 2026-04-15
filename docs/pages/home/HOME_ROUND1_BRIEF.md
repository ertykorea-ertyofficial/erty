# HOME Round 1 Brief

## 목적

이 문서는 `HOME` 페이지의 첫 시각 경험을 위한 Round 1 hi-fi / shell 설계 명세다.
브랜드 자산, 로고, 브랜드 스토리, 넘버링 가이드, 멀티 에이전트 피드백을 기준으로 만든다.

## source

- `docs/pages/home/HOME_ROUND0_FREEZE.md`
- `docs/brand/BRAND_CORE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `DESIGN.md`
- `private/brand-source/logo/erty logo no slogan_black.png`
- `private/brand-source/logo/erty logo_black.png`
- `private/brand-source/story-numbering/에르띠-브랜드 스토리.png`
- `private/brand-source/story-numbering/에르띠-브랜드 아이덴티티 제품 넘버링.png`
- `private/brand-source/story-numbering/에르띠-제품 넘버링가이드.png`

## visual direction

- clinical, modern, dense but calm
- glossy beauty landing 금지
- 제품 콜라주보다 `brand index`처럼 보여야 함
- line color는 accent signal로만 사용
- 화면은 밝고 정리돼 있어야 하지만 공백만 많은 미완성 느낌이면 안 됨

## logo usage

### header primary

- `erty logo no slogan_black.png`

### secondary large-format brand block

- `erty logo_black.png`

조건:

- hero 또는 footer에서 larger brand anchor가 필요할 때만 사용
- top bar에는 slogan 버전 사용 금지

## hero composition

- left: 짧고 단정적인 headline / subheadline / supporting sentence / primary CTA 2개
- right: clinical index panel
- hero visual은 product banner가 아니라 `number-led index panel`이어야 함
- 넘버링 가이드의 colored rail motif를 얇은 구조선으로 번역해 사용 가능
- 큰 사진이나 glossy visual 대신 `number / line / route logic`이 first impression을 잡아야 함

## numbering guide motif decision

### decision

- 멀티 에이전트 검토 결과: `CONDITIONAL`
- 반영은 허용하되, `Home`의 주 시각 언어가 아니라 `구조 신호`로만 사용한다.

### rationale

- 넘버링 가이드는 ERTY의 `번호와 라인` 구조를 가장 직접적으로 보여주는 브랜드 자산이다.
- Home에서는 이 구조가 제품 상세보다 먼저 읽혀야 하므로, motif 자체는 브랜드 인덱스 성격을 강화할 수 있다.
- 다만 원본 이미지를 그대로 배경화하거나 반복 패턴으로 쓰면 headline, route, CTA보다 장식이 먼저 읽혀 Home의 역할을 해친다.
- Home의 베이스는 밝은 `#F7F8F9` clinical surface이므로, 검은 배경 reference sheet를 그대로 재현하지 않는다.

### allowed placements

- Hero right-side clinical index panel 안의 `1px-2px` connector rail
- `Core Product Direction` 섹션의 line taxonomy cue
- 필요 시 `Route Map / Page Roles` 섹션의 매우 얕은 구조선
- 최대 `hero + secondary section 1개`까지만 사용

### forbidden placements

- full-page background
- dark canvas 재현
- headline / logo / primary CTA 뒤의 장식 패턴
- 여러 섹션에 반복되는 texture 처리
- product card / offer card / CTA band의 주 그래픽
- collage, poster, illustration처럼 보이는 rail graphic

### implementation note

- 원본 이미지를 배경으로 쓰지 않는다.
- CSS pseudo-element 또는 최소 inline SVG로 rail language만 추상화한다.
- line color는 accent signal로만 쓰고 opacity와 길이를 낮게 유지한다.

## section order

1. Hero
2. Brand Definition
3. Problem Framing
4. Route Map / Page Roles
5. Core Product Direction
6. Concern / Evidence / Journal Entry
7. Final CTA Band

## section spec

### 1. Hero

- 목적: 브랜드 정체성과 해석 프레임을 즉시 제시
- 깊이: headline 1개, subheadline 1개, supporting sentence 1개, primary CTA 2개, right index panel 1개
- CTA: `브랜드 철학`, `제품 허브`

### 2. Brand Definition

- 목적: ERTY가 무엇인지 정의
- 깊이: 짧은 intro + 2~3 definition blocks
- CTA: `브랜드 철학`

### 3. Problem Framing

- 목적: 문제성 피부를 어떤 기준으로 읽는지 정리
- 깊이: intro + 2~4 concise problem-structure points
- CTA: `피부 고민 연결`, `제품 허브`

### 4. Route Map / Page Roles

- 목적: 메인 도메인의 역할을 route card로 분명히 보여줌
- 깊이: intro + 4~5 route cards
- CTA: `브랜드 철학`, `제품 허브`, `피부 고민 연결`

### 5. Core Product Direction

- 목적: full catalog가 아니라 번호/라인 taxonomy 입구 제시
- 깊이: 4 line panels 또는 compact taxonomy grid
- CTA: `제품 허브`

### 6. Concern / Evidence / Journal Entry

- 목적: concern / proof / content layer 입구 분리
- 깊이: compact entry cards 3개
- CTA: `피부 고민 연결`, `근거 레이어`, `저널`

### 7. Final CTA Band

- 목적: 홈을 닫으며 다음 단계로 이동
- 깊이: closing statement + CTA 최대 3개
- CTA: `브랜드 철학`, `제품 허브`, `근거 레이어`

## narrative spine

1. 문제성 피부를 먼저 정의한다.
2. ERTY가 왜 필요한지 말한다.
3. 번호와 라인으로 구조를 읽게 만든다.
4. 제품은 문제-해결-시너지 구조 안에서 위치시킨다.
5. 구매는 마지막 단계로 둔다.

## copy direction

### recommended H1

- `문제성 피부를 먼저 해석하는 공식 구조`

### subheadline directions

- `ERTY는 제품을 앞세우지 않고, 어떤 피부 문제를 어떤 기준으로 읽는지 먼저 보여주는 브랜드입니다.`
- `번호와 라인, 근거와 연결 구조를 먼저 제시해 문제성 피부의 해석 순서를 만듭니다.`

### repeat phrases

- 문제성 피부
- 해석 구조
- 번호와 라인
- 근거 레이어
- 브랜드 인덱스

## section label rules

- 1~3단어 중심
- 명사형 역할 라벨 우선
- 한국어 정본 우선
- 판매어 금지
- 기능보다 역할이 먼저 읽혀야 함

## CTA hierarchy

### primary

- `브랜드 철학`
- `제품 허브`

### secondary

- `근거 레이어`
- `저널`
- `피부 고민 연결`

### tertiary state only

- `공식 스토어 연결 준비 중`

## forbidden

- `preview`, `shell`, `slot`, `pending` 같은 내부 메타 노출
- `구매하기`, `스토어 바로가기`, `장바구니`
- full product cards
- product detail mechanics
- evidence 수치 / 후기 상세
- recommendation matrix
- full routine sequence
- offer / kit 설명
- glossy beauty hero, collage-heavy hero, dreamy mood

## implementation scope

- `index.html`
- `components/header.html`
- `components/footer.html`
- `assets/css/global.css`
- `assets/css/layout.css`
- `assets/css/components.css`
- `assets/js/main.js`

## preview acceptance

- 공식 로고 적용
- desktop / mobile 모두에서 브랜드 인덱스로 읽힘
- Home이 판매 페이지처럼 보이지 않음
- `h1` 1개 유지
- purchase state는 tertiary meta
- primary CTA는 philosophy / products 중심
