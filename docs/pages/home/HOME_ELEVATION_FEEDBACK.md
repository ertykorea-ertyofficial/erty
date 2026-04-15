# HOME Elevation Feedback

## 목적

이 문서는 현재 `HOME Round 1` 결과물을 `통과 가능한 수준`에서
`브랜드 첫인상으로서 더 강한 수준`으로 끌어올리기 위해
멀티 에이전트가 제안한 고도화 포인트를 정리한다.

## review basis

- 구현 화면:
  - `output/playwright/home-r1-desktop-full.png`
  - `output/playwright/home-r1-mobile-full.png`
- 구현 파일:
  - `index.html`
  - `components/header.html`
  - `components/footer.html`
  - `assets/css/global.css`
  - `assets/css/layout.css`
  - `assets/css/components.css`
  - `assets/js/main.js`
- 브랜드 / 디자인 기준:
  - `docs/pages/home/HOME_ROUND1_BRIEF.md`
  - `docs/pages/home/HOME_NUMBERING_GUIDE_DECISION.md`
  - `docs/brand/BRAND_CORE.md`
  - `docs/brand/BRAND_LANGUAGE_RULE.md`
  - `docs/brand/BRAND_POSITIONING.md`
  - `DESIGN.md`

## role feedback summary

### ERTY유진

- strongest weakness:
  - 전반적으로 잘 정리됐지만 hero, 카드 그리드, 하단 CTA가 비슷한 볼륨으로 읽혀 감정적 peak가 약하다.
- key point:
  - hero를 더 강한 editorial peak로 만들고, section rhythm을 더 다르게 가져가야 한다.
- image verdict:
  - `conditional`
- image suggestion:
  - `Brand Definition` 또는 hero right panel에 하나의 brand asset plate만 제한적으로 사용

### ERTY나연

- strongest weakness:
  - 중간 구간 카드 밀도가 높아 Home이 `브랜드 인덱스`보다 `설명 카드 모음`처럼 보이는 순간이 있다.
- key point:
  - primary route와 secondary entry의 시각적 우선순위를 더 강하게 나눠야 한다.
- image verdict:
  - `conditional`
- image suggestion:
  - hero right-side index panel 또는 `Core Product Direction`의 구조 cue만 허용

### ERTY지안

- strongest weakness:
  - 구조는 맞지만 브랜드의 기억점과 narrative tension이 아직 약하다.
- key point:
  - 강한 선언 하나와 그 선언을 지지하는 하나의 시각 앵커가 필요하다.
- image verdict:
  - `conditional`
- image suggestion:
  - 브랜드 스토리 시트 또는 번호 체계 시트의 일부를 구조적 artifact로 사용

### ERTY수민

- strongest weakness:
  - 섹션 리듬이 너무 균일해서 branded index보다 잘 만든 system page처럼 읽힌다.
- key point:
  - hero와 첫 두 섹션의 밀도 차이를 더 만들고, 중간 card cluster는 압축하는 것이 구현 대비 효과가 크다.
- image verdict:
  - `conditional`
- image suggestion:
  - product cutout이나 collage 대신, neutral surface 위의 단일 brand asset plate만 허용

### ERTY소윤

- strongest weakness:
  - 모바일에서 카드형 정보가 연속되며 설명 카드 모음처럼 보이는 구간이 있다.
- key point:
  - section intro와 body의 길이를 더 줄여 scan speed를 높여야 한다.
- image verdict:
  - `conditional`
- image suggestion:
  - semantic role이 분명한 index 보조 이미지로만 hero 또는 taxonomy 구간에 사용

### ERTY민지

- strongest weakness:
  - 타이포가 거의 모든 역할을 맡고 있어 CTA hierarchy는 안전하지만 시각적 anchor가 약하다.
- key point:
  - hero CTA pair는 계속 가장 강해야 하고, 이미지가 들어가도 navigation posture를 이기면 안 된다.
- image verdict:
  - `conditional`
- image suggestion:
  - hero right panel 또는 작은 route-adjacent visual만 허용

## consensus

### 1. strongest current weakness

- 현재 Home의 가장 큰 약점은 `틀린 구조`가 아니라 `너무 균일한 구조`다.
- 모든 섹션이 비슷하게 잘 정리돼 있어 명확성은 있지만, 브랜드 첫인상으로서의 peak와 기억점이 약하다.

### 2. typography hierarchy upgrades

1. `H1`의 절대 우위를 더 강하게 만든다.
2. subheadline과 supporting copy의 시각 무게를 더 낮춘다.
3. section title, card title, card body 간 contrast를 더 벌린다.
4. 한국어 선언문이 narrative를 이끌고, 영문 token은 보조로만 남긴다.
5. section intro와 card body는 더 짧고 단정하게 다듬는다.

### 3. readability / rhythm upgrades

1. 중간 섹션의 card density를 줄인다.
2. `Route Map`, `Core Product Direction`, `Next Layers`를 같은 카드 문법으로 보이지 않게 분화한다.
3. hero와 첫 section 사이, 중간 주요 section 사이에 더 큰 breathing zone을 둔다.
4. 모바일에서는 본문 폭을 더 좁히고, line-height와 라벨 간격을 조금 더 벌린다.
5. final CTA band는 hero보다 조용하게 읽히도록 무게를 낮춘다.

### 4. image insertion verdict

- 최종 판단: `conditional`
- 공통 결론:
  - 이미지 자체는 필요할 수 있다.
  - 그러나 `감성 무드 사진`, `제품 콜라주`, `sales banner`, `lifestyle shot`은 금지다.
  - 허용되는 것은 `구조를 강화하는 단일 brand asset plate`뿐이다.

### 5. safest image directions

허용 후보:

1. `에르띠-브랜드 스토리.png`의 일부를 편집한 작은 framed artifact
2. `에르띠-브랜드 아이덴티티 제품 넘버링.png`의 일부를 편집한 번호/라인 체계 artifact
3. `에르띠-제품 넘버링가이드.png`를 직접 배경으로 쓰지 않고 추상화한 rail language

허용 위치:

1. Hero right-side index panel
2. `Brand Definition` aside
3. `Core Product Direction` 안의 하나의 구조 anchor

금지 위치:

1. full-page background
2. hero full-width banner
3. product showcase처럼 보이는 영역
4. CTA band 주 그래픽

## top 3 prioritized upgrades

1. `Hero editorial peak 강화`
   - 더 강한 H1 우위
   - 더 조용한 supporting copy
   - 하나의 분명한 시각 앵커

2. `중간 섹션 card density 및 parity 축소`
   - section마다 카드 문법 차등화
   - route hierarchy를 더 강하게 분리
   - scan speed 향상

3. `단 하나의 brand asset plate 도입`
   - 이미지가 아니라 구조 artifact로 사용
   - clinical surface와 neutral frame 유지
   - CTA보다 강하게 읽히지 않게 제한

## next implementation guidance

- 다음 Home 개선 라운드는 `new visual language`를 많이 추가하는 방식보다,
  아래 3개만 집중하는 방식이 맞다.

1. hero type contrast 조정
2. mid-page density reduction
3. single brand asset plate insertion

- 이 세 가지 외의 변화는 품질 상승 대비 리스크가 크므로 우선순위에서 제외한다.
