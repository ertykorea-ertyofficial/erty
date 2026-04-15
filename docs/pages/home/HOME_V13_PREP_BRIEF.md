# HOME V13 Prep Brief

## Summary
- V12.1은 구조와 방향은 맞다.
- 다음 라운드의 1순위 병목은 `SKU Explorer의 UI 기능화`다.
- 그 다음은 `카피를 브랜드 문장으로 다시 쓰는 것`, `Evidence / Numbering / Protocol / Route / Color를 같은 상태 문법으로 묶는 것`이다.
- Hero와 Footer는 대수술보다 `마감 수준`을 올리는 쪽이 맞다.

## Global Diagnosis
- `Featured SKU`는 아직도 `탐색되는 시스템 UI`보다 `좋은 시스템 보드`에 가깝다.
- `selected panel / explorer / protocol / proof`가 하나의 connected system board로 완전히 읽히지 않는다.
- 카피는 좋아졌지만 여전히 브랜드가 직접 말하는 문장보다 브랜드를 설명하는 문장에 가깝다.
- Evidence는 숫자를 꺼냈지만 `37 primary + 27/55/57 secondary` 위계가 아직 충분히 강하지 않다.
- 컬러는 보이기 시작했지만 아직 state language까지는 완전히 올라오지 않았다.
- Hero는 안전하지만 기억되는 장면까지는 못 갔다.
- Footer는 정리됐지만 마지막 브랜드 서명으로는 아직 약하다.

## Agent Synthesis

### 1. Copy / Branding
- 가장 먼저 줄여야 할 것은 `구조 / 기준 / 경로 / 순서 / 읽다` 계열의 추상 동사 반복이다.
- 섹션마다 `강한 판정 문장 1개 + 짧은 보조문 1개`만 두는 게 맞다.
- Hero, Featured, Evidence, Footer에서 실제 제품 언어를 더 전면에 올려야 한다.
- 우선 반영 언어:
  - `37`: 피부 지질의 복제, 세컨드 스킨
  - `23`: 피부 수분 통로를 열어 피부 갈증을 해소하는 미네랄 토너
  - `55`: 건조한 미백앰플의 한계를 넘어, 수분과 광채를 동시에 채운
  - `57`: 붉은기·노란기·칙칙함 3중 피부톤 개선
  - `01`: 저자극 필링과 피부결 리셋의 시작
  - `02`: 10% 나이아신아마이드 기반 톤 리페어의 핵심
  - `03`: 턴오버와 재생 리모델링의 마감축
- 섹션 support 카피는 selection-agnostic으로 유지하고, SKU-specific 문장은 selected panel 안에서만 강하게 쓴다.

### 2. SKU Explorer / System UX
- 다음 라운드에서도 구조는 `selected panel + grouped explorer + integrated protocol band`를 유지한다.
- 하지만 지금처럼 세 블록이 나란히 있는 보드처럼 보이면 안 된다.
- 바꿔야 할 것:
  - outer board 1개로 더 강하게 묶기
  - selected panel 폭을 더 줄이고 control panel처럼 밀도 높이기
  - explorer는 table보다 scanable index로 바꾸기
  - protocol band는 하단 strip이 아니라 explorer의 lower operating layer처럼 붙이기
- 반드시 구분해야 할 상태:
  - `selected`
  - `preview`
  - `related`
  - `idle`
- 지금보다 더 즉시 보여야 할 것:
  - 무엇이 선택 상태인지
  - 무엇이 hover 가능한지
  - 어디를 누르면 무엇이 바뀌는지
  - `01 / 02 / 03`이 어느 순간 개입하는지

### 3. Interaction / State Model
- 상태 모델은 다음 문장으로 잠그는 게 맞다.
- `Featured = commit`
- `Evidence / Numbering = preview + related`
- `Protocol = 별도 레지스터`
- `FAQ = 독립 상태`
- commit은 `activeSkuId` 하나만 authoritative state로 둔다.
- hover / focus는 preview만 바꾸고, click / tap / Enter / Space만 commit을 바꾼다.
- Numbering hover와 Evidence hover는 selection을 만들지 않고 related/preview만 보여준다.
- Protocol 선택은 main proof를 강제하지 않고 panel / route / protocol layer만 바뀌게 한다.
- FAQ open state는 SKU state와 직접 연결하지 않는다.

### 4. Evidence / Trust
- Evidence는 `37 primary + 27/55/57 secondary`를 더 강하게 잠가야 한다.
- `37`은 대표 근거, `27/55/57`은 근거의 분기다.
- 숫자는 항상 아래 순서로 읽혀야 한다.
  - `metric`
  - `what changed`
  - `interpretation`
  - `trust qualifier`
  - `next route`
- raw metric는 반드시 조건/범위와 함께 보이게 한다.
- trust qualifier는 안전장치처럼 짧고 표준화된 문구여야 한다.
- secondary는 fully identical card 반복이 아니라 condensed secondary proof 문법으로 바꾸는 게 맞다.

### 5. Art Direction / Rhythm / Footer
- Hero는 구조를 바꾸기보다 마감을 올리는 게 맞다.
- 개선 포인트:
  - background still life silhouette를 더 또렷하게
  - H1과 배경 오브제의 lock-up을 더 단단하게
  - hero 아래 strip을 `protocol cue / line families / index cue` 3층으로 더 명확히
- Featured가 page middle의 가장 강한 board가 되어야 전체 리듬이 살아난다.
- Evidence는 Featured보다 가볍되 더 위계화돼야 한다.
- Footer는 `좋은 sitemap`보다 `브랜드 서명`처럼 읽혀야 한다.
- left logo block은 유지하고, middle routes / right numbering summary 관계를 더 얇고 정교하게 묶는다.

## Next Prompt Locks
- 다음 상세 수정 프롬프트에서 반드시 잠가야 할 항목:
- `SKU Explorer를 한 개의 connected system board로 어떻게 재설계할지`
- `selected / preview / related / idle 상태 문법`
- `01 / 02 / 03 protocol layer의 위상`
- `Evidence primary / secondary 문법`
- `selection-agnostic copy vs SKU-specific copy 구분`
- `Hero strip 단순화`
- `Footer brand signature 문장과 정렬`

## Priority
1. SKU Explorer UI 기능화
2. Home 카피 브랜드 문장화
3. Evidence / Numbering / Protocol / Route / Color 상태 문법 통합
4. Hero micro finishing
5. Footer signature finishing
