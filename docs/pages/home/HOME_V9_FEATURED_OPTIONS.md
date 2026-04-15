# HOME V9 Featured SKU Options

## 1. Horizontal Draggable SKU Rail

- 구조: 전체 SKU를 한 줄 rail로 노출하고, 선택된 SKU만 상단 detail panel을 갱신
- 장점: SKU 구조를 넓게 보여주기 쉽다
- 단점: 드래그 중심 UX가 더마 프로페셔널 브랜드의 차분한 index 무드를 깨기 쉽다
- 판단: 이번 라운드에는 과하다

## 2. Pinned Featured SKU + Thin Index Rail

- 구조: 선택된 대표 SKU panel 1개 + 전체 core SKU thin index rail + auxiliary protocol strip
- 장점:
  - 번호, 라인, 순서, route를 하나의 시스템 UI로 묶을 수 있다
  - 카드 진열감이 가장 적다
  - rail을 통해 core SKU 전체를 보여주면서도 대표 SKU의 집중도를 유지한다
  - 현재 정적 HTML/CSS/JS 구조에 가장 자연스럽게 맞는다
- 단점: rail 선택 상태를 위한 최소 JS가 필요하다
- 판단: **채택**

## 3. Role-Based Tab System

- 구조: Balancing / Hydrating / Revitalizing / Brightening / Protocol 탭 전환으로 SKU군 노출
- 장점: 구조 이해는 쉽다
- 단점: 번호 체계보다 역할 탭이 먼저 보여서 ERTY 고유 numbering identity가 약해진다
- 판단: 이번 라운드에는 보류

## 채택안

### Selected Panel

- 기본 선택 SKU: `37`
- 노출 필드:
  - 번호
  - 라인명
  - 제품명
  - 브랜드 문장 1개
  - quantified proof signal 1개
  - 범위 문구 1개
  - 대표 상세 보기 링크 1개

### Thin Index Rail

- core SKU 전체 노출:
  - `11 / 13 / 15`
  - `21 / 23 / 25 / 27`
  - `35 / 37`
  - `50 / 55 / 57`
- 각 항목 기본 필드:
  - 번호
  - 라인명
  - 역할 한 줄
  - 범위 문구

### Auxiliary Protocol Strip

- `01 / 02 / 03`은 core SKU rail과 분리한다
- 이미지가 아니라 텍스트형 slim chip으로 처리한다
- 역할:
  - `01` 진정 프로토콜의 시작
  - `02` 집중 회복 프로토콜
  - `03` 전환 밀도를 높이는 단계

## 컬러 / 모션 / Interaction 원칙

### 컬러

- 큰 색면 사용 금지
- 사용 위치:
  - selected SKU number
  - rail top rule
  - proof signal
  - route accent
  - FAQ open indicator
  - CTA focus ring
  - footer numbering guide

### 모션

- 자동 슬라이드 금지
- drag physics 금지
- carousel 금지
- 허용:
  - hover underline
  - border tint
  - selected badge tint
  - proof signal fade

### Interaction

- 데스크톱: hover / focus / click 모두 selection 상태를 갱신
- 모바일: tap으로 selection 변경
- trust signal은 hover 안에 숨기지 않는다
- selected state는 `번호 / 라인 컬러 / proof badge / scope text`가 동시에 읽혀야 한다
