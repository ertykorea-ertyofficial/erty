# Round 1 Multi-Agent Redesign Brief

## 목적

라운드 1 shell 결과물이 내부 설계 노트처럼 보인다는 피드백을 바탕으로,
역할별 에이전트 리뷰를 다시 수집하고 공통 결론만 구현에 반영한 기록이다.

## 공통 문제

- visible copy에 `preview`, `shell`, `slot`, `pending` 같은 내부 메타 문구가 과도하게 노출됨
- hero와 section rhythm이 너무 비고 반복적이라 clinical index보다 generic prototype처럼 보임
- `/products` 허브의 제품 링크가 canonical route와 맞지 않음
- purchase 상태가 너무 앞에 나와 explore / bridge / purchase 구분이 흐려짐
- shell contract와 구현 contract가 부분적으로 어긋남

## 역할별 핵심 피드백

### ERTY유진

- clinical premium mood보다 internal prototype mood가 강함
- hero를 비우지 말고 한 개의 강한 구조적 anchor를 둬야 함
- line color는 surface flood가 아니라 signal로만 써야 함

### ERTY나연

- 라운드 1 shell인데 일부 페이지가 이미 Round 2/3 수준 placeholder content를 많이 노출함
- `/products` 허브는 대표 상세 하나만 명확히 두고 나머지는 shell 상태로 남기는 편이 맞음
- nav와 route contract는 canonical path 기준으로 단순화해야 함

### ERTY지안

- public-facing copy가 브랜드 문장보다 내부 메모처럼 보임
- shell이라도 한국어 정본 기준의 단정적 문장으로 읽혀야 함
- 제작 상태 설명은 고객 노출 카피에서 빼야 함

### ERTY수민

- shell wrapper contract가 분산돼 있었고 dead class가 존재함
- 모바일 nav close path가 부족함
- 제품 허브의 01 -> 37 mislink는 authoritative path를 깨는 오류

### ERTY소윤

- staging 언어가 visible heading과 meta description에 남아 있었음
- `/evidence`, `/journal`, `/skin-concerns`는 route role이 먼저 읽혀야 함
- indexable text처럼 보이는 문장은 shell 단계에서도 최소 의미를 갖춰야 함

### ERTY민지

- purchase pending이 hero와 global shell에서 너무 강하게 보였음
- Round 1에서는 explore CTA가 우선, purchase는 tertiary state로 내려야 함
- offer는 core SKU와 다른 문법으로 읽혀야 함

## 이번 반영 원칙

- 메인 화면에서 내부 메타 문구 제거
- header / footer에서 commerce 상태 과노출 제거
- `page-main` 단일 shell wrapper 사용
- 제품 허브의 대표 상세 링크를 `37` 하나로 정리
- 구매 상태는 secondary note 또는 disabled state로만 노출
- `/evidence`, `/journal`, `/skin-concerns`, `/offers/[slug]`는 route role 중심 shell로 재작성

## 라운드 1 합격 조건

- visible copy가 내부 제작 메모처럼 보이지 않을 것
- hero와 section rhythm이 더 조밀하고 명확해질 것
- `/products`의 대표 링크가 canonical path와 일치할 것
- purchase 상태가 explore보다 앞에 보이지 않을 것
- local preview를 다시 생성하고 역할별 에이전트 재검토를 통과할 것
