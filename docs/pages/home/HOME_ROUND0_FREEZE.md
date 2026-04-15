# HOME Round 0 Freeze

## 상태

- 이전 Round 1 preview 결과물은 폐기 대상으로 본다.
- Home은 다른 페이지와 분리된 독립 작업 단위로 다시 시작한다.
- 이 문서는 `HOME` 페이지의 Round 0 freeze 계약이다.

## 멀티 에이전트 입력 기준

- `ERTY유진`: visual direction / logo usage / hero treatment
- `ERTY나연`: page role / section order / route priority
- `ERTY지안`: narrative spine / headline direction / tone rules
- `ERTY수민`: implementation guardrails / acceptance criteria
- `ERTY소윤`: semantic role / heading/meta / internal link priorities
- `ERTY민지`: CTA hierarchy / pending state / promise boundaries

## Home page role

Home은 `ertyofficial.com`의 브랜드 인덱스다.

- ERTY가 어떤 브랜드인지 먼저 설명한다.
- 어떤 피부 문제를 어떤 구조로 해석하는지 먼저 보여준다.
- 철학, 제품 허브, 근거, 저널, 피부 고민 라우트로 사용자를 분기시킨다.
- 제품 상세, 오퍼 상세, 구매 전환을 직접 수행하는 페이지가 아니다.

## Home narrative spine

1. 문제성 피부를 먼저 정의한다.
2. ERTY가 왜 필요한지, 존재 이유를 먼저 제시한다.
3. 번호와 라인으로 제품 구조를 읽게 만든다.
4. 제품은 문제-해결-시너지 구조 안에서 해석한다.
5. 구매는 마지막 단계로 두고, 설명과 근거를 먼저 배치한다.

## Home section order

1. `Hero`
   - 브랜드 정체성과 해석 프레임을 한 화면 안에서 제시한다.
   - 제품 콜라주보다 브랜드 구조가 먼저 읽혀야 한다.
2. `Brand Definition`
   - ERTY가 무엇인지 먼저 정의한다.
3. `Problem Framing`
   - 문제성 피부를 어떤 기준으로 보는지 정리한다.
4. `Route Map / Page Roles`
   - Home이 각 라우트로 어떻게 분기되는지 보여준다.
5. `Core Product Direction`
   - 제품 상세가 아니라 번호 체계와 라인 구조의 입구만 제시한다.
6. `Concern / Evidence / Journal Entry`
   - 고민, 근거, 저널 라우트의 입구를 분리해 둔다.
7. `Final CTA Band`
   - 브랜드 철학, 제품 허브, 근거 구조로 이어지는 다음 단계 CTA만 둔다.

## Home에서 아직 넣지 않을 것

- full product cards
- 제품 상세용 성분/기전 설명
- evidence 수치/후기/panel
- recommendation matrix
- full routine sequence
- offer/kit 설명
- shop-first CTA
- 내부 제작 메타 문구 (`preview`, `shell`, `slot`, `pending`)

## Visual direction

- `clinical`, `modern`, `dense but calm`
- 밝은 `#F7F8F9` base + white surface + neutral border
- line color는 accent signal로만 사용
- glossy beauty landing이나 dreamlike wellness mood 금지
- Home first screen은 product collage보다 brand index처럼 보여야 함

## Logo usage

### header primary

- `private/brand-source/logo/erty logo no slogan_black.png`

이유:

- 가로 비율이 짧아 header/nav에 적합
- light background에서 가장 안정적
- top bar에서 slogan version보다 덜 복잡함

### secondary large-format brand block

- `private/brand-source/logo/erty logo_black.png`

조건:

- hero 또는 footer에서 larger brand anchor가 필요할 때만 사용
- top bar primary mark로는 사용하지 않음

## Hero visual treatment

- split hero를 사용한다
- left: 짧고 단정적인 headline/subheadline
- right: clinical index panel 또는 number-led structure panel
- heavy product collage 금지
- 제품 누끼컷을 쓰더라도 sales banner처럼 보이면 안 된다
- Round 0 기준에서는 logo + number structure + route logic이 먼저다

## Tone rules

- 한국어 정본 우선
- 선언형, 단정형, 결과 지향
- 감성적 수식 최소화
- 문제 -> 해석 -> 구조 -> 연결 순서 유지
- 브랜드는 제품보다 먼저 나온다

## Forbidden copy patterns

- `preview`, `shell`, `slot`, `pending` 같은 메타 노출
- 막연한 감성어, 미사여구
- 근거 없는 즉효 단정
- 제품을 먼저 나열하는 홈 카피
- 의미 없는 장식용 영어 카피

## CTA hierarchy

### primary

- `브랜드 철학`
- `제품 허브`

### secondary

- `근거 레이어`
- `저널`
- `피부 고민 연결`

### tertiary only

- `공식 스토어 연결 준비 중`

규칙:

- Home에서는 purchase CTA를 활성화하지 않는다.
- `구매하기`, `스토어 바로가기`, `장바구니` 문구를 쓰지 않는다.
- pending state는 상태칩이나 보조 문구로만 둔다.

## Internal link priority

1. `/philosophy`
2. `/products`
3. `/skin-concerns`
4. `/evidence`
5. `/journal`

비고:

- `/routine`는 독립 route가 아니므로 Home primary link에서 제외한다.
- `37` 상세는 대표 상세 예시로만 후순위 연결할 수 있다.
- `ertyofficial.shop`은 Home primary CTA에서 제외한다.

## Implementation guardrails

- Home은 판매 페이지가 아니다.
- `h1`은 1개만 사용한다.
- core SKU와 offer grammar를 Home에서 섞지 않는다.
- 공식 로고 자산을 우선 적용한다.
- shared shell contract를 먼저 안정화한다.
- mobile nav close path를 포함한다.
- internal prototype처럼 보이는 문구를 화면에 남기지 않는다.

## Acceptance criteria for HOME Round 1 preview

- header/footer/background/grid가 안정적이어야 한다.
- Home이 브랜드 정의와 구조적 입구로 읽혀야 한다.
- 공식 로고가 적용되어야 한다.
- primary CTA는 philosophy/products 중심이어야 한다.
- purchase state는 tertiary meta여야 한다.
- desktop/mobile 모두에서 first impression이 에스테틱 더마 코스메틱 브랜드처럼 읽혀야 한다.

## 다음 단계

- `HOME Round 1 — Visual Direction & Shell Hi-fi`
- 이 단계에서 logo 적용, hero composition, section rhythm, shell-safe copy를 만든다.
