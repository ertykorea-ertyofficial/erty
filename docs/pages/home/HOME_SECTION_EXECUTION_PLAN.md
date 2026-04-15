# HOME Section Execution Plan

## Purpose

이 문서는 HOME 고도화 작업을 `section by section` 방식으로 고정하기 위한 실행 기준이다.

이제부터 HOME은 한 번에 전체를 건드리지 않는다.
항상 `한 섹션 잠금 -> 그 섹션만 수정 -> 멀티에이전트 검토 -> local preview 검증 -> 다음 섹션 이동` 순서로 진행한다.

## Locked Rule

- 한 라운드에서 동시에 수정할 수 있는 주 대상 섹션은 하나만 둔다.
- 현재 활성 섹션에 직접 영향을 주는 인접 섹션만 보조 수정할 수 있다.
- 전체 카피 전면 수정도 금지한다.
- 카피 수정은 현재 활성 섹션 내부와 그 섹션이 직접 바꾸는 상태 문장까지만 허용한다.
- 공통 상태 로직 수정은 가능하지만, 시각 결과물은 현재 활성 섹션에만 반영한다.
- 섹션 PASS 전에는 다음 섹션으로 넘어가지 않는다.

## Section Order

역할별 에이전트 피드백을 합친 현재 우선순위는 아래와 같다.

1. `Featured SKU`
2. `Evidence`
3. `Hero`
4. `Footer`
5. `Numbering System`
6. `Operating Principle`
7. `Next Layers`

## Why This Order

- `Featured SKU`는 브랜드/UX/interaction/art 전 역할이 공통으로 가장 큰 병목으로 봤다.
- `Evidence`는 현재 Featured와 직접 연결되는 검증 레이어라 두 번째다.
- `Hero`와 `Footer`는 방향은 맞지만 미세 완성도 보정이 필요한 구간이다.
- `Numbering System`, `Operating Principle`, `Next Layers`는 현재 기준으로 구조는 상대적으로 안정적이다.

## Current Active Unit

### Unit 01 — Featured SKU

현재 HOME에서 가장 먼저 잠글 대상은 `Featured SKU`다.

이 섹션이 통과해야 하는 이유:

- 지금 HOME이 여전히 `정리된 구조 화면`처럼 보이는 가장 큰 원인이 여기 있다.
- `selected panel`, `grouped rail`, `protocol 01/02/03`이 아직 완전히 하나의 시스템처럼 읽히지 않는다.
- selection state가 페이지 전체의 구조를 끌고 가야 하는데, 아직 정보 모듈처럼 보이는 부분이 남아 있다.

### Featured SKU Pass Gate

- `selected panel + grouped index rail + protocol band`가 세 블록이 아니라 하나의 system board처럼 보여야 한다.
- `01 / 02 / 03`은 같은 시스템 안의 `Professional / Protocol` 레이어로 읽혀야 한다.
- `activeSkuId` 하나로 panel / rail / route / proof / protocol relevance가 동기화되어야 한다.
- rail은 카드 목록이 아니라 번호 기반 인덱스처럼 보여야 한다.
- dead space가 줄어들고, 정보가 한쪽에 몰리거나 비어 보이는 구간이 없어야 한다.
- 섹션 제목/보조문은 특정 SKU를 고정 설명하지 않는 `selection-agnostic` 문장이어야 한다.
- SKU-specific 카피는 selected panel 안에서만 강하게 노출한다.

## Section Gates

### 1. Featured SKU

- 시스템 UI처럼 읽혀야 한다.
- `activeSkuId` 기반 상태 동기화가 명확해야 한다.
- `01 / 02 / 03`이 보조 주석처럼 보이면 실패다.

### 2. Evidence

- `primary 1 + secondary 3` 위계가 명확해야 한다.
- 숫자는 `source-visible` 근거만 쓰고, `metric + what changed + interpretation + qualifier + route`가 한 세트로 읽혀야 한다.
- Featured의 선택 상태와 연결되는 검증 레이어처럼 보여야 한다.

### 3. Hero

- 구조 변경보다 `still-life depth`, `type lock-up`, `micro label`, `spacing` 보정 위주로 간다.
- 첫 화면이 설명 블록이 아니라 브랜드 장면처럼 남아야 한다.

### 4. Footer

- 정보 정리 영역이 아니라 브랜드 서명처럼 닫혀야 한다.
- 좌측 로고, 가운데 진입, 우측 numbering guide가 하나의 endcap처럼 정렬되어야 한다.

### 5. Numbering System

- 테이블이나 정보표보다 브랜드 구조 artifact처럼 보여야 한다.
- 번호와 컬러는 장식이 아니라 읽는 순서여야 한다.

### 6. Operating Principle

- 설명문이 아니라 작동 원리 선언이어야 한다.
- 문장 수를 늘리는 대신 밀도를 높인다.

### 7. Next Layers

- 다음 진입점만 맡고, 별도 장면을 만들지 않는다.
- CTA 허브처럼 부풀면 실패다.

## Review Loop

각 섹션은 아래 루프를 반드시 거친다.

1. 현재 섹션만 수정한다.
2. local preview로 해당 섹션을 다시 캡처한다.
3. 브랜드 / UX / evidence / interaction / art 에이전트에게 그 섹션만 검토시킨다.
4. `PASS`가 아니면 같은 섹션에서 계속 고친다.
5. 전원 `PASS` 또는 실질적 `PASS with minor polish`일 때만 다음 섹션으로 넘어간다.

## Reporting Rule

- 사용자에게는 전체 HOME이 아니라, 현재 섹션이 충분히 올라왔을 때만 중간 보고한다.
- preview/local 결과만 먼저 말하고, production은 항상 별도로 유지한다.
- commit / push / deploy는 사용자의 최종 승인 전까지 하지 않는다.
