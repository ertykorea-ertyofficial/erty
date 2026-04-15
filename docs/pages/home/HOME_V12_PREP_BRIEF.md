# HOME V12 Prep Brief

## Purpose

이 문서는 사용자가 전달한 최신 총평과 역할별 에이전트 피드백을 합쳐,
다음 상세 수정 프롬프트를 받기 전에 수정 축을 잠그기 위한 준비 문서다.

범위는 `/` 단일 페이지다.
현재 운영 원칙은 계속 `section-by-section`이며, 지금 기준 활성 섹션은 `Evidence`다.

## Shared Reading Of The User's Critique

모든 역할이 공통으로 동의한 해석은 아래와 같다.

1. 구조 방향은 맞다.
2. 하지만 여전히 `브랜드 프론트`보다 `잘 정리된 구조 화면`에 더 가깝다.
3. 현재 병목은 레이아웃 전체가 아니라 아래 다섯 축이다.
   - 카피
   - Featured SKU의 UI 기능성
   - Evidence 위계
   - 상태와 컬러의 구조 언어화
   - Hero / Footer의 장면 밀도

## What Must Stay Locked

- 현재 전체 IA
- `Hero -> Featured SKU -> Operating Principle -> Evidence -> Numbering System -> Next Layers -> Footer`
- white / light grey 기반의 미니멀 톤
- numbering system 중심 사고
- product-first가 아니라 structure-first 방향
- 큰 면적 컬러 금지
- autoplay carousel / flashy motion / trend-first glass UI 금지

## Cross-Agent Consensus

### 1. Featured SKU는 여전히 1순위 병목이다

- `selected panel + grouped rail + protocol band` 방향 자체는 맞다.
- 하지만 아직 `탐색되는 시스템 UI`보다 `정리된 정보판`의 성격이 남아 있다.
- `01 / 02 / 03`은 복귀했지만, 다음 라운드에서는 더 명확한 `Professional / Protocol layer`로 잠가야 한다.

### 2. 카피는 “다듬기”보다 “문장 체계 교체”가 필요하다

- 지금 문장은 방향은 맞지만, 여전히 설명문 / 전략문 / 설계문 톤이 남아 있다.
- 다음 라운드에서는 `브랜드 선언문 + 짧은 보조 설명` 구조를 강제로 잠가야 한다.
- 추상어는 줄이고 실제 제품 언어를 더 적극적으로 끌어와야 한다.

### 3. Evidence는 숫자를 꺼낸 것만으로는 부족하다

- `37 primary + 27/55/57 secondary` 방향은 맞다.
- 하지만 아직 “강한 근거 1개 + 보조 근거 3개”보다 “근거 카드 4장”으로 읽힌다.
- 다음 라운드에서는 숫자와 의미가 즉시 결합되도록 템플릿을 더 고정해야 한다.

### 4. 컬러는 더 많이 쓰는 게 아니라 더 구조적으로 써야 한다

- line color는 이미 보이기 시작했다.
- 하지만 아직 장식이나 분류 색에 가까운 구간이 남아 있다.
- 다음 라운드에서는 `selected / route / proof / protocol / faq / footer` 상태에 더 직접 연결해야 한다.

### 5. 전체 리듬은 아직 너무 고르게 조용하다

- Hero가 안정적이긴 하지만 장면성이 약하다.
- Hero 아래 번호 라인은 디테일이 아니라 노이즈가 되는 구간이 있다.
- Featured, Evidence, Footer가 각각 다른 온도를 가져야 한다.

## Role-Specific Must-Lock Principles

### Brand / Copy

다음 프롬프트에서 반드시 잠가야 할 원칙:

1. Hero는 설명이 아니라 선언으로 시작한다.
2. Featured title/support는 selection-agnostic 문장으로 유지한다.
3. SKU-specific proposition은 selected panel 안에서만 강하게 쓴다.
4. Evidence는 설명문이 아니라 `수치 -> SKU -> 한 단어 판정`으로 압축한다.
5. 실제 제품 언어를 더 직접 반영한다.

브랜드 카피에 더 강하게 반영할 실제 자산:

- `37`: 피부 지질의 복제, 세컨드 스킨
- `21`: 피부 진정과 유수분 밸런스를 위한 상쾌한 자일리톨 클렌저
- `23`: 피부 수분 통로를 열어 피부 갈증을 해소하는 미네랄 토너
- `55`: 건조한 미백앰플의 한계를 넘어, 수분과 광채를 동시에 채운
- `57`: 붉은기, 노란기, 칙칙함 3중 피부톤 개선
- `01`: 저자극 필링과 피부결 리셋의 시작
- `02`: 10% 나이아신아마이드 기반 톤 리페어의 핵심
- `03`: 턴오버와 재생 리모델링의 마감축

### UX / System

다음 프롬프트에서 반드시 잠가야 할 원칙:

1. Featured는 카드 집합이 아니라 선택 시스템이어야 한다.
2. 우측 인덱스는 더 얇고 더 스캔 가능해야 한다.
3. 상태 변화는 내용 변경이 아니라 구조 재강조여야 한다.
4. `01 / 02 / 03`은 독립 strip가 아니라 시스템 하위 레이어여야 한다.
5. Featured와 Evidence는 같은 선택 상태를 공유해야 한다.

### Interaction / State

다음 프롬프트에서 반드시 잠가야 할 원칙:

1. authoritative mutable state는 `activeSkuId` 하나만 둔다.
2. hover/focus는 preview, click/tap/Enter/Space만 commit이다.
3. `selected / preview / related`는 시각적으로 분리한다.
4. `SKU -> route -> proof -> protocol`이 같은 selection path를 공유해야 한다.
5. FAQ는 active line accent만 공유하고 SKU 상태와는 직접 결합하지 않는다.

### Evidence / Trust

다음 프롬프트에서 반드시 잠가야 할 원칙:

1. `37`은 primary proof로 유지한다.
2. `27 / 55 / 57`은 secondary proof로 유지한다.
3. 모든 proof는 아래 템플릿을 고정한다.
   - line
   - metric
   - what changed
   - one-line interpretation
   - trust qualifier
   - next route
4. 숫자는 source-visible 조건과 함께 노출한다.
5. protocol `01 / 02 / 03`은 quantified proof보다 stage signal로 유지한다.

### Art / Rhythm / Color

다음 프롬프트에서 반드시 잠가야 할 원칙:

1. Hero는 구조보다 장면 밀도를 먼저 올린다.
2. Hero 아래 번호 라인은 축약형만 남긴다.
3. Featured / Evidence / Footer는 서로 다른 리듬 레이어여야 한다.
4. 컬러는 상태 언어로만 강하게 쓴다.
5. 페이지 전체는 “한 번 강하고 나머지는 더 조용한” 대비를 만든다.

## Priorities Merged Across Roles

역할별 우선순위를 합치면 다음 순서가 가장 합리적이다.

1. Featured SKU
2. Evidence
3. Hero
4. Footer
5. Next Layers / FAQ
6. Numbering System
7. Operating Principle

주의:

- copy 역할은 Hero를 더 높게 봤다.
- trust 역할은 Evidence를 더 높게 봤다.
- UX 역할은 Featured를 절대 1순위로 봤다.

현재 section-by-section 운영 기준에서는 아래처럼 해석한다.

- `Featured`와 `Evidence`를 묶어 현재 가장 강하게 잠근다.
- 그 다음 `Hero`와 `Footer`로 장면성과 종결부를 보정한다.
- 나머지 섹션은 subordinate polishing으로 처리한다.

## What The Next Detailed Prompt Should Explicitly Lock

다음 상세 수정 프롬프트는 가능하면 아래 항목을 직접 명시해야 한다.

1. Featured를 어떻게 더 interactive system explorer로 바꿀지
2. `01 / 02 / 03` protocol layer를 어디까지 같은 시스템 안에 붙일지
3. Featured / Evidence / route / protocol을 연결하는 selection-state 범위
4. Home 카피를 어떤 문장 체계로 다시 쓸지
5. Evidence의 primary/secondary 위계와 tile 템플릿
6. Hero 아래 번호 라인을 축약할지, 위계를 재조정할지
7. 컬러를 어떤 상태에만 더 직접 연결할지
8. Footer를 브랜드 서명처럼 보이게 할 최종 정렬 기준

## Immediate Working Interpretation

다음 라운드의 승부처는 레이아웃 대수술이 아니다.
핵심은 아래 세 가지를 더 정확히 묶는 것이다.

- brand sentence
- interactive state
- proof hierarchy

즉, 다음 상세 수정 프롬프트는
`Featured / Evidence / Hero beneath-number-strip / Footer`
네 축에 집중할수록 가장 효율적으로 작동한다.
