# ERTY BY CONCERN IMPLEMENTATION SPEC

문서 상태: v1.0
문서 역할: `/by-concern` 페이지 구현 명세
이 문서는 레이아웃, 상태 모델, 인터랙션, 반응형, SEO, 성능, 접근성 구현 원칙을 정의한다.

---

## 0. 구현 우선순위

구현 순서는 아래로 고정한다.

1. Hero
2. Concern Selector
3. Active Concern Board
4. Proof Snapshot
5. Guide Cluster
6. FAQ
7. Shop Bridge
8. polish / QA

각 섹션은 `단독 구현 → 로컬 검증 → QA checklist pass` 후 다음 섹션으로 이동한다.

---

## 1. 상태 모델

### 1.1 authoritative state
- `activeConcernId`: committed selection
- `previewConcernId`: hover/focus preview
- `openFaqId`: 현재 열려 있는 FAQ

### 1.2 파생 상태
- `displayConcernId = previewConcernId ?? activeConcernId`
- `activeRouteIds`
- `relatedEvidenceIds`
- `relatedGuideIds`
- `relatedProtocolIds`
- `shopSkuIds`

### 1.3 행동 규칙
- `hover / focus` → preview만 변경
- `click / tap / Enter / Space` → activeConcernId 변경
- activeConcernId 변경 시 아래가 동시 갱신된다.
  - Active Concern Board
  - Proof Snapshot
  - Guide Cluster
  - Shop Bridge
  - route accent
  - protocol relevance cue
- FAQ는 concern state와 직접 결합하지 않는다. layer accent만 공유 가능하다.

---

## 2. 레이아웃 규칙

## 2.1 Hero

### 구조
- eyebrow
- H1
- supporting copy
- CTA row
- metadata strip

### 규칙
- Hero는 Home Hero와 같은 무드를 유지하되 더 실용적이어야 한다.
- background still life는 quiet editorial scene으로 유지한다.
- metadata는 3단 이상으로 늘리지 않는다.
- CTA는 `고민 선택하기`, `번호 구조 먼저 보기` 계열 2개만 허용한다.

### 금지
- stock-like image
- lifestyle beauty hero
- heavy blur
- hero 내 카드 과다 삽입

---

## 2.2 Concern Selector

### 구조
- 6개 concern chips 또는 slim tiles
- 각 항목: title / 2~3 symptom keywords / first number

### 규칙
- max 2 rows
- desktop: horizontal selector
- mobile: chip wrap 또는 2열 compact tiles
- active / preview / default state 차이를 보여야 한다.

### 상태 표현
- active: stronger border + family tint + bold label
- preview: thin hover tint
- default: quiet neutral

### 금지
- large product cards
- long paragraph
- self-test interaction

---

## 2.3 Active Concern Board

### 데스크톱 구조
- 좌측 30~36%: concern summary panel
- 중앙 28~34%: number route
- 우측 30~36%: supporting logic / evidence cue / guide cue

### 모바일 구조
- concern summary panel
- route stack
- supporting logic
- protocol cue

### 좌측 concern summary panel
필수 요소:
- concern label
- first number
- 1문장 정의
- “이럴 때 먼저 본다” 2~3 bullet
- related line label
- core CTA 1개

### 중앙 number route
필수 요소:
- first → second → optional third sequence
- line family cue
- route phrase
- selected visual emphasis

### 우측 supporting logic
필수 요소:
- 왜 이 번호가 먼저인지 2줄
- 관련 근거 지표 1개
- 관련 guide 1개
- protocol relation cue

### 규칙
- 이 보드는 정적 표처럼 보이면 실패다.
- 세 영역이 연결된 decision board처럼 보여야 한다.
- unnecessary empty space 금지.
- hover 시 preview cue, click 시 commit cue를 분명히 보여야 한다.

### recommended interaction
- concern selector 선택 → board 전체 갱신
- route number hover → supporting logic 강조
- protocol hover → route 끝단과 연결 cue 표시

---

## 2.4 Why It Happens / What Not To Do

### 구조
- 2-column
- left = 왜 이렇게 보이나
- right = 먼저 빼야 할 것

### 규칙
- 각 column은 1 headline + 1~2 short blocks
- bullet list처럼 보이면 안 된다.
- editorial info block처럼 보여야 한다.

---

## 2.5 Proof Snapshot

### 구조
- primary proof 1개
- secondary proof 2~3개

### 카드 규칙
각 proof tile 필수 요소:
- line
- metric
- label
- what changed
- one-line interpretation
- trust qualifier
- CTA

### 위계
- primary = bigger, more contrast
- secondary = smaller, faster scan
- fully repeated template 금지

### concern별 proof mapping 예시
- `barrier-redness` → primary 37 / secondary 27, 35
- `dehydration-tightness` → primary 27 / secondary 23, 25
- `dullness-dark-spot` → primary 55 / secondary 57, 50
- `oil-breakout-pores` → primary 13 or 15 / secondary 11, 25
- `texture-flaking` → primary 01 / secondary 23, 37
- `recovery-firmness` → primary 37 / secondary 35, 02 or 03

---

## 2.6 ERTY Guide Cluster

### 구조
- 3개의 slim route cards
  - Results
  - Guide
  - Journal or related content

### 규칙
- card라기보다 slim route bands처럼 보여야 한다.
- 무엇을 보나보다 무엇을 얻나가 읽혀야 한다.

---

## 2.7 Shop Bridge

### 구조
- concern에 맞는 SKU 2~3개
- 작은 tray or strip
- official store CTA

### 규칙
- shopping mall처럼 보이면 실패다.
- 제품 나열이 main content가 되면 실패다.
- 공식 스토어 이동임을 명확히 표시한다.

---

## 2.8 FAQ

### 구조
- 3~5 question rows
- thin divider accordion

### 규칙
- 실제 사용자 질문처럼 보여야 한다.
- active row는 thin divider + active dot + accent rule
- generic help center처럼 보이면 실패다.

---

## 3. 디자인 토큰 제안

### spacing
- section top/bottom gap: 112 / 128 / 144
- card padding: 20 / 24 / 28
- micro gap: 6 / 8 / 12

### type scale
- Hero H1: 56~72px desktop / 36~44px mobile
- Section H2: 36~44px desktop / 28~32px mobile
- panel number: 36~48px
- proof metric: 44~64px primary / 24~36px secondary
- body: 15~17px
- micro labels: 11~13px

### border
- radius: 18~22px
- hairline: 1px
- emphasized border: 1.5px equivalent

### transition
- duration: 120~160ms
- easing: `cubic-bezier(0.22, 1, 0.36, 1)`

---

## 4. 색상 시스템

line mapping 고정:
- Balancing = green
- Hydrating = blue
- Revitalizing = red
- Brightening = yellow/orange
- Professional = charcoal

### 적극 사용 위치
- active concern state
- route line accent
- proof metric number
- protocol relevance cue
- FAQ open dot
- button hover/focus ring
- numbering cue
- micro divider / left rail

### 금지
- 큰 면적 컬러 블록
- full liquid glass
- decorative gradient overuse

컬러는 `decoration`이 아니라 `structural family code`여야 한다.

---

## 5. 표면 / 모션 규칙

### 허용
- subtle frosted micro-label
- active border tint
- hover overlay
- proof badge fade
- route underline accent

### 금지
- autoplay carousel
- marquee
- heavy parallax
- full glass morphism
- blur-heavy transition

### motion 원칙
- quiet
- precise
- state-driven
- never playful

---

## 6. 접근성

- selector / explorer는 `tablist` 또는 `grid` 중 하나로 패턴을 확정한다.
- `aria-selected`, `aria-controls`, `aria-expanded`, `aria-describedby`를 명시적으로 넣는다.
- FAQ는 accordion semantics 준수.
- keyboard only 탐색 가능.
- `prefers-reduced-motion` 대응.
- touch target 최소 44px.
- 색상만으로 상태를 전달하지 않는다.

---

## 7. 반응형 규칙

### desktop
- Hero
- concern selector horizontal
- active board 3분할
- proof snapshot 1+3 구조
- guide cluster 3개
- faq

### tablet
- active board 2열 재구성 가능
- proof snapshot 1+2 or 1+3 스택

### mobile
- selected panel stack
- compact concern chips
- route block vertical
- proof primary first, secondary stack
- faq full width

### mobile에서 금지
- desktop board 축소판 그대로 사용
- 지나치게 촘촘한 typography
- protocol band를 읽기 어려운 micro strip으로 유지

---

## 8. SEO / GEO

- Hero 핵심 문장, default concern, primary proof는 초기 HTML에 렌더링.
- hover에서만 보이는 정보는 보조 정보로 제한.
- FAQ는 crawlable text 유지.
- concern별 subpage 확장을 고려한 heading 구조 유지.
- structured data 후보:
  - Organization
  - Brand
  - FAQPage

---

## 9. 성능

- Hero still life 1장만 preload.
- 나머지 assets lazy load.
- AVIF/WebP 우선.
- blur/filter 최소화.
- opacity/transform 위주의 transition.

### target
- LCP < 2.5s
- CLS < 0.05
- no layout jump on selector change

---

## 10. Analytics

필수 이벤트:
- concern selector hover dwell
- concern selector commit
- route click
- proof CTA click
- guide cluster click
- shop bridge click
- faq open

선택 실험:
- default concern A/B
- primary proof ordering test