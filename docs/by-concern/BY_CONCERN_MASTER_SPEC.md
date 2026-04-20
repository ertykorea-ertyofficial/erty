# ERTY BY CONCERN MASTER SPEC

문서 상태: v1.0
문서 역할: `/by-concern` 페이지의 **절대 기준 문서(source of truth)**
언어 기준: 한국어 정본
적용 범위: 브랜드 메인 프론트 `ertyofficial.com` 내 By Concern 허브

---

## 0. 문서 사용 규칙

이 문서는 `/by-concern` 페이지의 방향, IA, UX 원칙, 시각 원칙, 카피 원칙을 정의하는 **최상위 기준 문서**다.

- 구현 전 반드시 본 문서를 먼저 읽는다.
- IA, concern taxonomy, non-negotiables는 임의 변경 금지.
- 구현 중 충돌이 있으면 본 문서를 우선한다.
- 카피는 `BY_CONCERN_COPY_DECK.md`를 정본으로 하되, 문장 역할과 구조는 본 문서를 따른다.

---

## 1. 페이지 역할

`/by-concern`은 단순 카테고리 페이지가 아니다. 이 페이지는 아래 3가지 역할을 동시에 수행한다.

1. 사용자가 자기 피부 고민을 **증상 단위가 아니라 구조 단위로 읽게 만든다**.
2. 각 고민에 대해 **어떤 번호가 먼저 붙는지** 직관적으로 보여준다.
3. 결과적으로 `Results / Guide / Products / Shop`으로 자연스럽게 연결한다.

즉 이 페이지는,

> 문제 피부를 번호 구조로 번역해주는 탐색 페이지

이다.

---

## 2. Non-negotiables

아래 항목은 비협상 조건이다.

- concern taxonomy 6개 고정
- numbering-first 구조 유지
- Home과 동일한 브랜드 무드 유지
- shopping-first UI 금지
- 01 / 02 / 03 protocol layer 반드시 포함
- selected / preview / related 상태 분리
- source-visible metric만 사용
- stock-like beauty image 금지
- full liquid glass 금지
- 과한 motion 금지

---

## 3. UX 원칙

### 3.1 기본 원칙
- 사용자는 제품이 아니라 **고민의 시작점**을 먼저 읽는다.
- 카테고리 탐색보다 **구조 이해**가 먼저 온다.
- 구매는 가능하지만 이 페이지의 1차 목적은 아니다.
- 탐색은 빠르고 조용해야 한다.
- 과장 대신 근거와 다음 행동이 명확해야 한다.

### 3.2 절대 금지
- 쇼핑몰 첫 화면처럼 보이는 제품 진열
- 진단 테스트 같은 가벼운 quiz UX
- 과도한 카드 나열
- 과도한 스크롤 모션
- generic lifestyle beauty 이미지
- 추상어 남용 카피

### 3.3 페이지 톤
- clinical minimalism
- editorial luxury
- premium derma professional
- quiet, precise, structural
- not cute
- not generic beauty mall
- not startup SaaS

---

## 4. Concern Taxonomy

고민 축은 아래 6개로 고정한다.

### 4.1 유분 · 반복 트러블 · 모공
- id: `oil-breakout-pores`
- first numbers: `11 → 13 → 15`
- 핵심 의미: 세정 → 세범·모공 정리 → 밸런스 보정
- line family: Balancing
- 대표 제품 축: 11 / 13 / 15

### 4.2 수분 부족 · 속당김 · 들뜸
- id: `dehydration-tightness`
- first numbers: `23 → 25 → 27`
- 핵심 의미: 수분 통로 정리 → 수분 공급 → 장벽 보습 유지
- line family: Hydrating
- 대표 제품 축: 23 / 25 / 27

### 4.3 장벽 약화 · 예민 · 붉은기
- id: `barrier-redness`
- first numbers: `37 → 35`
- 핵심 의미: 장벽 회복 → 회복 보조
- line family: Revitalizing
- 대표 제품 축: 37 / 35

### 4.4 칙칙함 · 잡티 · 톤 저하
- id: `dullness-dark-spot`
- first numbers: `55 → 57 → 50`
- 핵심 의미: 브라이트닝 시작 → 톤 정리 → UV/장벽 방어
- line family: Brightening
- 대표 제품 축: 55 / 57 / 50

### 4.5 거친 결 · 각질 · 밀림
- id: `texture-flaking`
- first numbers: `01 → 23 → 37`
- 핵심 의미: 리셋 → 수분 통로 정리 → 장벽 안정
- line family: Professional + Hydrating + Revitalizing
- 대표 제품 축: 01 / 23 / 37

### 4.6 회복 저하 · 탄력 저하 · 컨디션 급락
- id: `recovery-firmness`
- first numbers: `35 → 37 → 02`
- 핵심 의미: 회복력 보정 → 장벽 회복 → 톤 리페어·리모델링
- line family: Revitalizing + Professional
- 대표 제품 축: 35 / 37 / 02

---

## 5. URL / IA 구조

### 5.1 이번 라운드 구현 범위
- `/by-concern` 허브 1페이지

### 5.2 후속 확장 구조
- `/by-concern/oil-breakout-pores`
- `/by-concern/dehydration-tightness`
- `/by-concern/barrier-redness`
- `/by-concern/dullness-dark-spot`
- `/by-concern/texture-flaking`
- `/by-concern/recovery-firmness`

### 5.3 IA 원칙
- 이번 라운드는 허브를 먼저 구축한다.
- 하위 페이지 확장을 고려한 구조를 유지한다.
- 허브는 category page가 아니라 **decision hub**처럼 보여야 한다.

---

## 6. 페이지 전체 섹션 구성

By Concern 페이지는 아래 8개 섹션으로 고정한다.

1. Hero
2. Concern Selector
3. Active Concern Board
4. Why It Happens / What Not To Do
5. Proof Snapshot
6. ERTY Guide Cluster
7. Shop Bridge
8. FAQ

---

## 7. 섹션별 역할 정의

### 7.1 Hero
- Home의 약속을 실제 탐색 입구로 전환한다.
- 사용자는 이 페이지가 “고민별 진입 페이지”라는 것을 즉시 이해해야 한다.

### 7.2 Concern Selector
- 사용자가 자기 고민을 빠르게 고르게 만든다.
- 복잡한 self-test가 아니라 빠른 선택 UX여야 한다.

### 7.3 Active Concern Board
- 페이지의 핵심 섹션이다.
- 선택된 고민이 어떤 번호 구조로 번역되는지 보여준다.

### 7.4 Why It Happens / What Not To Do
- 고민이 왜 그렇게 보이는지, 무엇을 먼저 빼야 하는지 짧게 정리한다.

### 7.5 Proof Snapshot
- 왜 이 route가 맞는지 숫자와 결과로 보여준다.

### 7.6 ERTY Guide Cluster
- Results / Guide / Journal로 연결한다.

### 7.7 Shop Bridge
- 공식 스토어 이동을 보조적으로 지원한다.
- 이 페이지의 1차 목적이 되면 안 된다.

### 7.8 FAQ
- 사용자가 마지막에 묻는 질문을 정리한다.

---

## 8. Acceptance Criteria

### 페이지 전체
- 3초 안에 “고민별로 번호를 먼저 읽는 페이지”라는 걸 이해해야 한다.
- shopping page처럼 보이면 실패.
- 진단 툴처럼 보이면 실패.
- Home과 무드가 단절되면 실패.

### UX
- concern 선택 위치가 직관적이어야 한다.
- 선택 시 아래 구조가 함께 변해야 한다.
- 상태가 약해서 무엇이 선택됐는지 모르면 실패.

### 카피
- 추상어만 남고 실제 피부 고민이 안 들리면 실패.
- Home보다 더 실용적이고, Home과 같은 톤이어야 한다.

### 시각
- 카드 과다 사용 금지.
- full glass, flashy motion 금지.
- thin rule, quiet boards, subtle color system 유지.

---

## 9. This Round Scope

이번 구현 라운드는 아래만 우선 구축한다.

### In scope
- Hero
- Concern Selector
- Active Concern Board
- Proof Snapshot
- ERTY Guide Cluster
- FAQ (기본 버전)

### Out of scope
- 하위 concern 상세 페이지
- 복잡한 quiz/self-diagnosis logic
- personalization 저장 기능
- account / session memory
- fancy motion system

---

## 10. 연결 문서

반드시 함께 읽을 문서:

1. `BY_CONCERN_IMPLEMENTATION_SPEC.md`
2. `BY_CONCERN_DATA_CONTRACT.md`
3. `BY_CONCERN_COPY_DECK.md`
4. `BY_CONCERN_QA_CHECKLIST.md`
