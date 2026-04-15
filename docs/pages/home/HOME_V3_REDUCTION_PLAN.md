# HOME V3 Reduction Plan

## 목적

`HOME V2`가 여전히 무겁게 보이는 문제를 해결하기 위해,
Home을 `감산 설계` 기준으로 다시 줄인다.

이 문서는 구현 전에 잠그는 `구조 축소안`이다.

## source basis

- current preview:
  - `output/playwright/home-v2-desktop-full.png`
  - `output/playwright/home-v2-mobile-full.png`
- reference 1:
  - `C:\Users\gusru\OneDrive\Desktop\aaaaaaaaaaaaaaaaaaa.webp`
- reference 2:
  - `C:\Users\gusru\OneDrive\Desktop\bbbbbbbbbbbbbbbbbbb.webp`
- live reference observation:
  - `https://dribbble.com/shots/27265179-AI-Skincare-Cosmetologist-Landing-Page?...`
- comparison review:
  - `docs/pages/home/HOME_REFERENCE_COMPARISON_FEEDBACK.md`

## why V2 still feels heavy

1. 텍스트 계층 수가 많다.
2. 카드 문법이 여러 섹션에서 반복된다.
3. `Brand Definition`, `Problem Framing`, `Route Map`, `Core Product Direction`, `Next Layers`가 각각 따로 서서
   brand index보다 정보 보드처럼 읽힌다.
4. CTA가 여러 구간에서 반복돼 exploration보다 funnel처럼 보인다.
5. 큰 장면과 작은 장면의 리듬 차가 충분히 크지 않다.

## V3 core rule

`Hero + Core + System + Closing` 4단 이하 구조로 줄인다.

각 섹션은 아래 규칙을 따른다.

- 시각 주인공은 `1개`만 둔다.
- 소개문은 `1문장`으로 제한한다.
- 반복 카드보다 큰 여백과 구조선으로 읽히게 한다.
- CTA는 `hero 2개 + final 1개`까지만 허용한다.

## final structure

### 1. Hero Index

역할:
- ERTY가 `문제성 피부를 먼저 해석하는 브랜드`라는 점을 한 화면에 고정한다.

남길 것:
- `H1`
- short lead
- primary CTA 2개
- official logo
- numbering / line rail language
- 단일 구조 아티팩트 1개

버릴 것:
- 키워드 칩 반복
- hero 내부 다중 설명 카드
- hero 안의 추가 메타 블록
- hero 아래 보조 카드 3열 반복

visual anchor:
- 오른쪽 `clinical index plate` 또는 `numbering artifact` 1개

text budget:
- hero label `2개 이하`
- body sentence `2개 이하`
- support sentence `1개 이하`

CTA budget:
- `브랜드 철학`
- `제품 허브`

### 2. Brand / Problem Core

역할:
- `Brand Definition`과 `Problem Framing`을 합쳐,
  브랜드 존재 이유와 피부 문제 해석 기준만 짧게 제시한다.

남길 것:
- 브랜드 핵심 정의
- 문제성 피부를 읽는 기준
- 핵심 선언 2~3개

버릴 것:
- definition card 3개 반복
- problem card 3개 반복
- 별도의 sequence-like 설명 블록

visual anchor:
- 브랜드 identity sheet 일부 또는
- 극도로 얇은 구조선 / 번호 rail만 허용

text budget:
- intro sentence `1문장`
- 핵심 선언 `2~3개`
- 각 선언 설명 `1줄`

component rule:
- 카드 대신 `ledger` 또는 `stacked statement` 1종만 사용

### 3. System Map

역할:
- 제품 라인/번호 구조와 route 역할을
  하나의 structure section으로 합쳐 보여준다.

합치는 대상:
- `Route Map`
- `Core Product Direction`
- `Concern / Evidence / Journal Entry`

남길 것:
- line taxonomy
- route 역할
- concern / evidence / journal의 입구

버릴 것:
- separate route cards 5종
- separate taxonomy cards 4종
- separate next-layer cards 3종
- 중간 버튼형 CTA

visual anchor:
- 가로형 numbering strip 1개
  또는
- line panel 1개

text budget:
- section intro `1문장`
- route label `최대 5개`
- 각 route 설명 `1줄`

interaction rule:
- 버튼형 CTA 금지
- 제목 또는 텍스트 링크 수준만 허용

### 4. Closing CTA

역할:
- Home을 짧게 닫고,
  사용자를 다음 읽기 경로로만 넘긴다.

남길 것:
- 짧은 마무리 문장
- CTA 1개
- optional secondary text link 1개
- footer brand anchor

버릴 것:
- 추가 설명 카드
- 별도 구매 유도
- repeating route buttons

visual anchor:
- large logo block
  또는
- 매우 조용한 CTA band

CTA rule:
- final CTA `1개` max
- 추천 대상: `피부 고민 연결` 또는 `근거 레이어`
- pending store state는 보조 문구만

## section merge / delete map

### merge

- `Brand Definition` + `Problem Framing`
- `Route Map` + `Core Product Direction` + `Concern / Evidence / Journal Entry`

### delete

- separate definition cards
- separate problem cards
- repeated route card groups
- repeated taxonomy card groups
- separate next-layer card group
- mid-page button CTA

## component budget

`ERTY수민` 기준 제한:

- component kinds: `6개 이하`
  - `header`
  - `hero`
  - `section block`
  - `reusable info card / statement`
  - `CTA band`
  - `footer`
- repeated card families: `3종 이하`
- images: `2개 이하`
- structural artifact: `1개`
- hero 이후 additional visual anchor: `1개 이하`

## text budget

`ERTY소윤` 기준 제한:

- section intro: `1문장`
- card body: `1줄`
- repeated label: `섹션당 1회`
- long paragraph block: `금지`
- same-depth text block 3연속: `금지`

## CTA budget

`ERTY민지` 기준 제한:

- hero CTA: `2개`
- mid-section button CTA: `0개`
- final CTA: `1개`
- store status:
  - 버튼 금지
  - 상태칩 또는 보조문구만 허용

## typography direction

`ERTY지안` / `ERTY유진` 기준:

- hero headline은 지금보다 더 압도적으로 크게
- hero 이후 heading은 전부 한 단계 낮춘다
- 영문 token은 계속 secondary
- 미세 라벨은 줄이고, 큰 선언과 작은 보조문만 남긴다

## implementation order

1. 현재 Home V2에서 `Problem Framing`, `Core Product Direction`, `Next Layers`를 화면에서 제거
2. `Brand Definition + Problem Framing`을 하나의 core block으로 재작성
3. `Route Map + Product Direction + Next Layers`를 하나의 system map으로 재구성
4. hero 내부 보조 정보와 카드 수를 축소
5. final CTA를 1차 경로만 남기고 정리
6. preview 생성
7. 멀티 에이전트 PASS/HOLD 재검토

## success condition

V3는 아래 상태여야 한다.

1. Home이 `브랜드 문서`가 아니라 `브랜드 장면`처럼 보인다.
2. 첫 화면 이후 텍스트 블록 수가 즉시 줄어든다.
3. 중간 섹션이 `하나의 structure map`처럼 읽힌다.
4. CTA 압력이 줄어든다.
5. 레퍼런스처럼 `크게 보이고 적게 읽히는` 상태에 더 가까워진다.

## status

- 이번 라운드는 구조 축소안 작성만 수행
- 구현 변경 없음
- production 영향 없음
