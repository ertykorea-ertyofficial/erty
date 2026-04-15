# HOME Reference Selection

## 목적

이 문서는 `awesome-design-md-main` 레퍼런스 라이브러리에서
ERTY Home에 실제로 가져올 패턴과 버릴 패턴을 정리한다.

## source

- 원본 라이브러리:
  - `C:\Users\gusru\Downloads\awesome-design-md-main\awesome-design-md-main`
- 검토 후보:
  - `design-md/apple/DESIGN.md`
  - `design-md/bmw/DESIGN.md`
  - `design-md/ibm/DESIGN.md`
  - `design-md/stripe/DESIGN.md`
  - `design-md/notion/DESIGN.md`
  - `design-md/sanity/DESIGN.md`

## role consensus

멀티 에이전트 합의는 거의 동일했다.

- 핵심 적합 레퍼런스:
  - `IBM`
  - `Notion`
  - `Apple`
- 보조 참조:
  - `BMW`
- 부분 차용만 허용:
  - `Stripe`
  - `Sanity`

## final selection

### 1. IBM

`ERTY Home`의 기본 구조 레퍼런스로 채택한다.

가져올 것:

- 엄격한 정보 계층 구조
- flat surface 중심의 card / panel 문법
- thin neutral divider
- 명확한 section label / heading / body 분리
- grid discipline

가져오지 않을 것:

- 과도하게 corporate한 차가움
- 너무 utilitarian한 무드
- 지나치게 딱딱한 제품 문서형 인상

### 2. Notion

`ERTY Home`의 표면 감도와 whitespace 레퍼런스로 채택한다.

가져올 것:

- whisper border
- warm white에 가까운 차분한 light surface 운용
- 과하지 않은 카드 그림자
- calm editorial pacing
- 읽기 쉬운 section spacing

가져오지 않을 것:

- 지나치게 workspace-like 한 pill / badge 중심 문법
- 지나친 warm/soft 감성
- casual productivity tool 무드

### 3. Apple

`ERTY Home`의 hero discipline 레퍼런스로 채택한다.

가져올 것:

- 한 화면에 하나의 주 선언
- first screen의 강한 focal hierarchy
- CTA를 과장하지 않는 premium restraint
- hero에서 하나의 오브제만 남기는 compositional discipline

가져오지 않을 것:

- product-as-sculpture hero
- consumer electronics launch page 같은 무드
- black / light gray alternation을 그대로 복제하는 방식

### 4. BMW

보조 참조로만 사용한다.

가져올 것:

- precision-driven composition
- split hero의 기계적 정렬감
- declarative, geometric tension

가져오지 않을 것:

- dark showroom mood
- zero-radius industrial hardness
- full-bleed spectacle

### 5. Stripe

부분 차용만 허용한다.

가져올 것:

- premium restraint
- 과장되지 않은 CTA polish
- headline을 너무 무겁게만 쓰지 않는 감각

가져오지 않을 것:

- purple-led brand mood
- gradient, atmospheric shadow, fintech luxury

### 6. Sanity

부분 차용만 허용한다.

가져올 것:

- section-by-section frame rhythm
- technical label discipline
- index-like composition 감각

가져오지 않을 것:

- dark command-center mood
- neon signal language
- terminal-like 기술 브랜드 인상

## ERTY Home V2 design blend

최종 조합:

- `IBM structure`
- `Notion surface + border restraint`
- `Apple hero peak`
- `BMW precision tension` (보조)

즉, ERTY Home V2는 아래처럼 읽혀야 한다.

1. 첫 화면은 `Apple`처럼 하나의 강한 선언과 오브제만 남긴다.
2. 전체 정보 구조는 `IBM`처럼 명확하게 정리한다.
3. 표면과 카드 경계는 `Notion`처럼 얇고 조용하게 처리한다.
4. 정렬감과 긴장감은 `BMW`처럼 정밀하게 가져가되, 어둡게 만들지 않는다.
5. 여기에 ERTY의 `번호와 라인` 구조를 얇은 rail language로 덧입힌다.

## concrete adoption rules for ERTY

### adopt

1. hero는 `하나의 선언 + 하나의 구조 오브제 + CTA 2개`까지만 유지
2. mid-page는 flat card와 thin border 중심
3. section마다 문법 차등을 둬서 같은 card grid 반복을 줄임
4. accent color는 ERTY line color를 제한적으로만 사용
5. brand asset은 `artifact`처럼 다루고, decorative image처럼 쓰지 않음

### reject

1. glossy luxury mood
2. dark dramatic hero
3. purple / neon / gradient 중심 UI
4. product showcase or lifestyle banner
5. card와 section을 모두 같은 볼륨으로 쌓는 템플릿식 구도

## implementation implication

다음 Home 재설계 라운드에서는
기존 구현을 조금씩 고치는 방식보다 아래 순서로 다시 잡는 편이 맞다.

1. hero composition 재설계
2. section grammar 3종 이하로 축소
3. mid-page density 절반 수준으로 축소
4. brand artifact를 단 하나만 남기기
5. CTA hierarchy는 계속 `explore-first` 유지
