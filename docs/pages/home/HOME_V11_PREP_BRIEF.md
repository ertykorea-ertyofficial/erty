# HOME V11 Prep Brief

## Purpose

이 문서는 HOME V10에 대한 사용자 총평과 역할별 에이전트 피드백을 합쳐, 다음 상세 수정 프롬프트를 받기 전까지의 수정 축을 잠그기 위한 준비 문서다.

범위는 `/` 단일 페이지다.

현재 유지해야 할 것:

- Home IA
- 번호/라인 기반 taxonomy
- Hero -> Featured SKU -> Operating System -> Evidence Snapshot -> Numbering System -> Next Layers -> Footer 구조
- 미니멀하고 밝은 전체 톤
- 구매 CTA 비활성 원칙

## Shared Diagnosis

모든 역할이 공통으로 동의한 병목은 아래 다섯 가지다.

1. Featured SKU가 아직 `스마트한 구조 인터페이스`보다 `정리된 정보 모듈`에 가깝다.
2. 카피가 좋아졌지만 아직 `브랜드 문장`보다 `전략/설계 문장`의 성격이 남아 있다.
3. Evidence는 숫자를 노출한 판단은 맞지만, 위계와 템포가 평평해서 대표 근거가 먼저 꽂히지 않는다.
4. 라인 컬러와 번호 체계가 보이기 시작했지만, 아직 page-wide state grammar까지는 충분히 확장되지 않았다.
5. Hero와 footer는 무너지지 않지만, 아직 `브랜드 장면`과 `브랜드 서명`으로서의 밀도가 더 필요하다.

## Priority Order

1. Featured SKU 시스템 고도화
2. Home 카피 전면 재정제
3. Evidence 위계 재설계
4. 컬러와 numbering의 state/routing 연결 강화
5. Hero / footer 미세 완성도 보정

## Role Feedback

### 1. Brand / Copy

핵심 진단:

- 현재 문장은 방향은 맞지만, `설명문/설계문` 냄새가 남아 있다.
- `기준`, `구조`, `경로`, `방식`, `순서` 같은 추상어 비중이 높다.
- 제품이 가진 실제 강한 문장보다 시스템 설명이 먼저 보인다.

버려야 할 패턴:

- `읽습니다 / 세웁니다 / 가리킵니다 / 이어집니다` 같은 구조 설명 동사 반복
- `proof / index / layer / system` 같은 내부 문서형 영어 노출
- section support가 선택 상태와 충돌하는 고정 문장
- 한 문장에 역할, 이유, 결과를 모두 넣는 설명형 문장

강하게 끌어와야 할 제품 고유 언어:

- `37`: 피부 지질의 복제, 세컨드 스킨
- `21`: 피부 진정과 유수분 밸런스를 위한 상쾌한 자일리톨 클렌저
- `23`: 피부 수분 통로를 열어 피부 갈증을 해소하는 미네랄 토너
- `55`: 건조한 미백앰플의 한계를 넘어, 수분과 광채를 동시에 채운
- `57`: 붉은기, 노란기, 칙칙함 3중 피부톤 개선
- `01`: 저자극 필링과 피부결 리셋의 시작
- `02`: 10% 나이아신아마이드 기반 톤 리페어의 핵심
- `03`: 턴오버와 재생 리모델링의 마감축

카피 원칙:

- 섹션마다 `규정 문장 1개 + 보조 설명 1개`
- 추상어보다 `문제 / 회복 / 장벽 / 수분 / 톤 / 번호 / 라인 / 근거`를 직접 사용
- 같은 SKU는 panel / rail / evidence에서 같은 핵심어를 공유
- 질문은 자연어로, 답변은 짧은 판정문으로

### 2. Featured SKU / UX Structure

핵심 진단:

- 현재 Featured는 `selected panel + rail + protocol`이지만, 체감은 아직 `세 개의 블록`에 가깝다.
- 선택 상태가 바뀌어도 구조의 긴장감이 바뀌지 않아 정보표처럼 읽힌다.
- dead space의 원인은 단순 여백이 아니라 `비어 보이는 구역`과 `정보가 몰린 구역`이 동시에 존재하는 배치다.

합의된 최적 구조:

- `Sticky detail + active index explorer`
- 좌측 또는 상단: selected SKU detail panel
- 우측 또는 하단: grouped thin index rail
- 같은 시스템 안의 `Professional / Protocol` sublayer

핵심 원칙:

- core SKU와 protocol SKU는 동일 위계는 아니지만 동일 시스템 안에 있어야 한다.
- `01 / 02 / 03`은 보조 주석이 아니라 `Professional / Protocol` 서브레이어로 명확히 살아야 한다.
- rail은 카드가 아니라 index처럼 읽혀야 한다.
- panel은 큰 정보판이 아니라 anchor처럼 읽혀야 한다.
- 모바일에서도 `panel -> rail -> protocol` 관계는 유지되고, 단지 압축만 되어야 한다.

### 3. Interaction / State

핵심 진단:

- 화면은 여전히 `인터페이스`보다 `정적 전시판`처럼 보인다.
- 선택 상태가 데이터만 바꾸고, 시각적인 구조 변화를 충분히 만들지 못한다.

상태 원칙:

- authoritative mutable state는 `activeSkuId` 하나만 둔다.
- 아래 요소는 모두 같은 selection path를 공유해야 한다.
  - selected panel
  - rail item highlight
  - proof highlight
  - route accent
  - protocol accent
  - panel CTA label

상호작용 원칙:

- click/tap은 확정 selection
- focus는 selection과 연결하되, 시각적으로 focus와 selected는 구분
- hover는 preview-only 또는 매우 약한 pre-selection으로 제한
- flashy motion 금지
- 허용 범위는 `border-color`, `selected rule`, `label tint`, `underline`, `badge fade` 정도

### 4. Evidence / Trust

핵심 진단:

- 숫자를 올린 방향은 맞지만, 현재 4개 tile이 같은 템포와 무게로 반복된다.
- 그래서 신뢰가 강해진 대신, 페이지 리듬은 오히려 더 평평해졌다.

합의된 방향:

- `primary proof 1개 + secondary proof 3개`
- 현재 기준으로 primary는 `37 barrier recovery` 축이 가장 적합
- secondary는 `27 hydration`, `55 dark spot`, `57 tone correction`

proof tile 템플릿:

1. `{번호} · {Line}`
2. `{metric}`
3. `{what changed}`
4. `{1-line interpretation}`
5. `{trust qualifier}`
6. `{next route}`

예시 형식:

- `37 · Revitalizing / 286.29 / 장벽 회복 / 회복 축의 핵심 근거 / 제품별 확인 필요 / Evidence 보기`

안전 원칙:

- 숫자는 source-visible 근거만 사용
- 카드 하나에 증거 유형을 섞지 않음
- 해석 문구와 claim 문구를 분리
- protocol은 quantified proof보다 stage signal로 연결
- 홈에서는 구매 CTA처럼 보이는 신뢰 문법 금지

### 5. Art Direction / Color / Rhythm

핵심 진단:

- Hero는 안정됐지만 아직 기억에 남는 장면까지는 아니다.
- Featured, evidence, footer가 모두 비슷한 온도로 이어져 전체 리듬이 지나치게 고르다.
- line color는 보이지만, 구조를 움직이는 state language까지는 못 갔다.

시각 원칙:

- Hero는 `설명형`이 아니라 `장면형`
- Featured는 `카드 묶음`보다 `선택 시스템`
- Color는 `장식`이 아니라 `family code`
- 리듬은 한두 구간에서 더 강한 대비가 필요
- footer는 정보 패널이 아니라 브랜드 서명처럼 보여야 한다

컬러를 더 적극적으로 써야 할 위치:

- selected SKU state
- hover/focus state
- route line
- proof metric number
- protocol active state
- FAQ open state
- footer numbering guide
- micro divider

단, 큰 컬러 블록은 계속 금지한다.

## Consensus Decisions To Lock Before V11

다음 상세 수정 프롬프트를 받을 때 아래 항목을 반드시 잠가야 한다.

1. Featured SKU는 `selected panel + grouped thin index rail + protocol sublayer`를 유지하되, 더 강한 탐색 UI로 고도화한다.
2. `01 / 02 / 03`은 같은 Featured 시스템 안의 `Professional / Protocol` 레이어로 남긴다.
3. Featured section support는 특정 SKU를 고정 서술하지 않는 `selection-agnostic` 문장으로 바꾼다.
4. SKU-specific proposition은 selected panel 안에서만 강하게 노출한다.
5. Evidence는 `primary 1 + secondary 3` 위계로 재설계한다.
6. `activeSkuId` 하나로 panel / proof / route / protocol 상태를 동기화한다.
7. 컬러는 label 장식이 아니라 selected/proof/route/focus/faq/footer 상태에 직접 연결한다.
8. Hero는 대규모 구조 변경보다 still-life 깊이감, micro index, type lock-up 정교화 위주로 만진다.
9. Footer는 정보 기능보다 브랜드 서명 역할을 강화한다.

## Recommended Next-Prompt Axes

다음 상세 수정 프롬프트는 아래 다섯 축을 명시하면 가장 효율적이다.

1. Featured 탐색 구조
2. 프로토콜 01/02/03의 위상과 선택 상태
3. 전체 카피 리라이팅 규칙
4. Evidence 위계와 tile 템플릿
5. 컬러/상태/route 연결 규칙

## Working Interpretation

이제부터 HOME의 승부처는 레이아웃을 더 바꾸는 것이 아니라, 아래 세 가지를 더 정교하게 묶는 데 있다.

- selection state
- brand sentence
- evidence hierarchy

다음 상세 수정 프롬프트는 이 문서를 기반으로 해석한다.
