# ERTY AUTO ORCHESTRATOR SYSTEM (FINAL)

## Core Flow

User Request
→ ERTY서연 (Orchestrator 판단)
→ Agent Selection
→ 병렬 또는 단일 실행
→ Agent 간 협업
→ Validation Lead 검증
→ 결과 통합
→ ERTY서연 최종 판단
→ 사용자 최종 컨펌

---

## Orchestrator Logic

### Step 1. Request Analysis
- 요청을 구조 / 카피 / SEO / 개발 / 인프라로 분해
- 작업 유형을 `single-step`, `multi-step`, `production-impact`로 분류

### Step 2. Agent Selection
- 기본은 2~4개 에이전트 자동 선택
- 단순하고 결정적인 작업은 단일 에이전트 실행 허용
- 단일 실행 허용 예시:
  - 단일 문서 수정
  - read-only DNS 확인
  - 기존 카피 경미 수정
  - 단일 페이지 구조 정리

### Step 3. Execution
- Before execution, inject only the mapped canonical docs from `docs/canonical`
- Respect `docs/agents/AGENT_INJECTION_MAP.md`
- Never feed raw PDF or raw visual source directly into `ERTY수민`
- 독립 가능한 작업은 병렬 실행
- 종속성이 있는 작업은 순차 실행
- 구조 → 카피 → SEO → 구현 순서 유지

### Step 4. Collaboration Loop
- 에이전트 간 검토 및 수정
- 충돌 시 ERTY서연이 우선순위 결정

### Step 5. Validation Gate
- 모든 결과는 Validation Lead 검증 후 통합
- Validation Lead 기본 배정:
  - UI / 페이지 / 코드: ERTY수민
  - 인프라 / 배포 / DNS / GitHub: ERTY하린
  - 근거 / 후기 / proof asset: ERTY예린
  - 브랜드 내러티브 / 구조 충돌: ERTY서연
- 검증 항목:
  - 실제 재현 가능 여부
  - 로그 / API / persisted state 확인 여부
  - preview / production 결과 분리 여부
  - 실패 원인 기록 여부
  - 민감 데이터 노출 여부

### Step 6. Integration
- 결과 통합
- unresolved item은 열린 쟁점으로 남긴다

### Step 7. Final Validation (ERTY서연)
- 목적 함수 기준 검수
- 브랜드 권한, SEO/GEO 구조, 전환 구조, 운영 안전성 기준 동시 검토

### Step 8. User Approval (최종)
- 반드시 사용자 승인 후 확정

---

## Agent Collaboration Protocol

Each agent must output:

[Agent Name]
[Goal]
[Inputs Used]
[Output]
[Evidence]
[Files or Artifacts Changed]
[Validation Result]
[Open Questions]
[Next Handoff]
[Feedback to Other Agents]

---

## Safety Rules

1. 반드시 ERTY서연 검수
2. 사용자 최종 승인 필수
3. 구조 → 카피 → SEO → 구현 순서 유지
4. 민감 데이터는 코드, 문서, 커밋, GitHub 이슈/PR에 남기지 않는다
5. production 변경은 증거 기반 검증 후만 수행한다
6. preview와 production 결과를 항상 분리 보고한다
7. persisted state 검증 없이 해결이라고 말하지 않는다

---

## Forbidden

- 근거 없는 production 변경
- 민감정보를 저장소에 기록
- 검증 없이 완료 선언
- 사용자 승인 없는 결과 확정

---

## Summary

이 시스템은 단순 자동화가 아니라
“AI 조직 운영 시스템”이다.
