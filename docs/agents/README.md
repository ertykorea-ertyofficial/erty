# ERTY Agent System

## 목적

이 경로는 ERTY 프로젝트용 멀티에이전트 운영 문서를 보관하는 authoritative path다.
사용자가 외부 경로에서 전달한 오케스트레이션 규칙과 에이전트 역할 문서를 이 경로에 고정한다.

## 구성

- `erty_orchestrator.md`
- `ERTY서연.md`
- `ERTY나연.md`
- `ERTY지안.md`
- `ERTY유진.md`
- `ERTY소윤.md`
- `ERTY수민.md`
- `ERTY예린.md`
- `ERTY민지.md`
- `ERTY하린.md`
- `AGENT_INJECTION_MAP.md`
- `AGENT_READING_ALLOCATION.md`

## canonical input path

에이전트 직접 주입용 정제 문서는 아래 경로를 기준으로 한다.

- `docs/canonical`

세부 주입 규칙은 아래 문서를 본다.

- [Agent Injection Map](./AGENT_INJECTION_MAP.md)
- [Agent Reading Allocation](./AGENT_READING_ALLOCATION.md)

## 역할 요약

- `ERTY서연`: 마스터 오케스트레이터, 최종 판단
- `ERTY나연`: IA / UX 구조 설계
- `ERTY지안`: 브랜드 내러티브 및 포지셔닝
- `ERTY유진`: UI / 비주얼 시스템
- `ERTY소윤`: SEO / GEO 구조
- `ERTY수민`: 프론트엔드 시스템 및 UI/코드 검증 리드
- `ERTY예린`: 근거 / 후기 자산 구조화 및 근거 검증 리드
- `ERTY민지`: CTA 및 커머스 연결
- `ERTY하린`: 인프라 및 DNS / GitHub / 인프라 검증 리드

## 운영 보완 사항

- Validation Lead 개념을 도입해 검증 책임을 명확히 분리했다
- 단순하고 결정적인 작업은 단일 에이전트 실행을 허용한다
- 모든 에이전트 출력은 근거, 변경 대상, 검증 결과, 열린 쟁점을 포함해야 한다
- 민감정보는 저장소나 문서에 남기지 않는 규칙을 추가했다
- preview / production 분리 보고와 persisted state 검증을 기본 규칙으로 추가했다

## 검토 메모

현재 문서 기준 강점은 다음과 같다.

- 구조 우선 원칙이 명확함
- 오케스트레이터 검수와 사용자 최종 승인 규칙이 명시됨
- 브랜드, SEO, UX, 커머스, 프론트, 인프라 역할이 분리됨
- 검증 책임과 산출물 계약이 명확해짐

현재 문서 기준 확인된 운영 포인트는 다음과 같다.

- 오케스트레이터 규칙은 `구조 -> 카피 -> SEO -> 구현` 순서를 요구함
- 단일 에이전트는 예외 조건에서만 허용됨
- 사용자 최종 승인 전 확정 금지 규칙이 있음
- production 영향 작업은 검증 없이 완료 처리할 수 없음

이 문서들은 프로젝트 설계 참고 자료로 보관하며, 실제 실행 시에는 현재 Codex 환경의 시스템 규칙과 함께 해석한다.
