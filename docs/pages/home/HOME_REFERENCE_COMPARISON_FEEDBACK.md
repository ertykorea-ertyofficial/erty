# HOME Reference Comparison Feedback

## source

- reference image:
  - `C:\Users\gusru\OneDrive\Desktop\aaaaaaaaaaaaaaaaaaa.webp`
- current preview:
  - `output/playwright/home-v2-desktop-full.png`

## role review summary

### ERTY유진

- 현재 화면은 카드와 설명 블록이 너무 많고, 거의 모든 요소가 같은 border / 같은 정보 밀도로 반복돼 무겁게 보인다.
- 첫 화면 이후에도 텍스트 중심 구조가 계속 이어져 `브랜드 인덱스`보다 `설명 패널 모음`처럼 읽힌다.
- 가져와야 할 원칙:
  1. 한 화면에 하나의 주인공만 둔다.
  2. 이미지는 적게, 크게, 강하게 쓴다.
  3. 큰 장면과 작은 장면의 리듬을 만든다.

### ERTY나연

- 현재는 `큰 시각 앵커 1개 + 짧은 보조 블록`이 아니라, 짧은 설명 카드가 연속되는 구조라 정보 보드처럼 보인다.
- `Brand Definition`과 `Problem Framing`의 경계를 줄여야 한다.
- `Route Map + Core Product Direction`은 하나의 구조 섹션으로 합치는 편이 낫다.
- `Concern / Evidence / Journal`도 하나의 entry strip으로 압축해야 한다.
- Home의 최소 구조:
  1. Hero
  2. Brand Definition
  3. Route / Structure
  4. Final CTA

### ERTY지안

- 레퍼런스는 브랜드가 먼저 보이고 정보는 뒤에 따라오지만, 현재 V2는 구조가 먼저 보인다.
- 현재 화면이 문서처럼 보이는 이유는 제목-설명-카드 리듬이 반복되기 때문이다.
- minimal + researched mood를 살리려면 반복 카드와 보조 설명, 라벨, 숫자 블록을 더 줄여야 한다.

### ERTY수민

- 각 섹션의 테두리와 카드 수를 줄여야 한다.
- 한 섹션당 시각 앵커 1개만 남기고 나머지는 짧은 리스트나 문장으로 흡수하는 편이 낫다.
- 컴포넌트 축소 기준:
  1. 같은 질문에 답하는 카드들은 합친다.
  2. 역할이 겹치는 카드 타입은 1종으로 통일한다.
  3. 새 역할이 없으면 컴포넌트를 추가하지 않는다.
- 레이아웃 재구성 우선순위:
  1. Hero와 첫 인상 정리
  2. 중간 섹션 카드 수 축소
  3. 하단 모듈 단순화

### ERTY소윤

- 텍스트 양 자체보다 `보이는 텍스트 계층 수`가 많아서 무겁게 보인다.
- 같은 폭과 같은 카드 문법이 계속 이어져 눈이 쉬는 구간이 적다.
- 개선 방식:
  1. 섹션 소개문을 1문장으로 고정한다.
  2. 카드 본문은 1줄 설명만 남긴다.
  3. 반복 라벨은 섹션당 1번만 사용한다.

### ERTY민지

- 현재 V2는 CTA가 funnel처럼 반복돼 exploration보다 행동 압력이 커 보인다.
- Hero CTA 2개만 유지하고, 중간 섹션은 버튼보다 제목 클릭이나 상태성 링크로 낮춰야 한다.
- final band에서도 보조 CTA를 최소 1-2개 수준으로 줄이는 편이 맞다.
- Home은 sell page가 아니라 `다음 읽을 거리`를 고르는 입구로 보이게 해야 한다.

## synthesis

현재 HOME V2가 무겁게 보이는 핵심 원인은 아래 셋이다.

1. section 수보다 `텍스트 계층 수`와 `카드 반복 수`가 많다.
2. 중간 구간에 큰 장면과 작은 장면의 리듬 차이가 부족하다.
3. CTA와 route 설명이 여러 섹션에서 반복되며 압력이 누적된다.

## locked guidance for next redesign

1. `Hero + Definition + Structure + Final CTA` 4단 구조를 우선 검토한다.
2. `Problem Framing`, `Core Product Direction`, `Next Layers`는 축약 또는 통합 대상이다.
3. 중간 구간은 card grid를 줄이고, text-led / structure-led / image-led 중 한 문법만 남긴다.
4. hero 이후의 시각 앵커는 최대 1개만 더 허용한다.
5. 중간 구간 CTA는 제거하거나 제목 링크 수준으로 낮춘다.
6. section intro는 1문장, card body는 1줄 설명 원칙으로 줄인다.

## status

- 이번 라운드는 비교 검토와 피드백 수집만 수행
- 구현 변경 없음
- production 영향 없음
