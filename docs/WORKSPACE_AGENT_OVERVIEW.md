# ERTY Workspace And Agent Overview

## 목적

이 문서는 개발 착수 전에 현재 프로젝트 폴더 구조와 멀티에이전트 역할을 한 번에 확인하기 위한 운영 개요 문서다.
새 세션에서 전체 구조를 빠르게 복기할 때 이 문서를 먼저 읽어도 된다.

## 현재 워크스페이스 루트 구조

| path | role |
| --- | --- |
| `assets` | 공통 CSS / JS / 이미지 정적 자산 |
| `components` | 재사용 HTML partial |
| `data` | 구현용 데이터 파일 자리 |
| `docs` | 기준 문서, canonical 입력 문서, 제품/오퍼 문서, 운영 문서 |
| `pages` | 메인 도메인 페이지 스텁 |
| `private` | 원본 브랜드 자산, 원본 제품 문서, 상세페이지 이미지, 누끼컷, 오퍼 raw source |
| `references` | 외부 디자인 레퍼런스 저장본 |
| `tmp` | 임시 작업 디렉터리 |
| `utils` | 구현용 유틸 자리 |
| `index.html` | 메인 도메인 루트 엔트리 스텁 |
| `DESIGN.md` | 디자인 에이전트와 구현 단계가 읽는 메인 디자인 시스템 문서 |
| `README.md` | 전체 기준 문서 진입점 |
| `AGENTS.md` | 재개 규칙과 프로젝트 운영 규칙 |

## `docs` 구조

| path | role |
| --- | --- |
| `docs/PROJECT_BRIEF.md` | 프로젝트 기준 설명문 |
| `docs/PAGE_DESIGN.md` | 메인 도메인 페이지 설계 기준 |
| `docs/SESSION_HANDOFF.md` | 다음 세션 재개 기준 |
| `docs/brand` | 브랜드 정의, 포지셔닝, 언어 규칙, 원본 source map |
| `docs/canonical` | 에이전트 직접 주입용 정제 입력 세트 |
| `docs/products` | core SKU 제품 시스템 문서 |
| `docs/offers` | 키트 / 세트 / 번들 시스템 문서 |
| `docs/agents` | 오케스트레이션 규칙, 에이전트 역할, 주입 맵 |

## `private` 구조

| path | role |
| --- | --- |
| `private/brand-source` | 로고, 브랜드 스토리, 제품 넘버링, 소개서 원본 |
| `private/product-docs/korean` | 제품별 md, mechanism, claim rule 원본 |
| `private/product-docs/technical-pdf` | 제품 기술 소개서 PDF 원본 |
| `private/product-detail-pages` | core product 상세페이지 raw image |
| `private/product-cutouts` | core product 누끼컷 raw image |
| `private/offers-kits/cutouts` | 오퍼 / 키트 누끼컷 raw image |
| `private/offers-kits/detail-pages` | 오퍼 / 키트 상세페이지 raw image |

## core product 문서 상태

- manifest 완료: `PRODUCT_LIBRARY_MANIFEST.md`
- template contract 완료: `PRODUCT_TEMPLATE_CONTRACT.md`
- routine matrix 완료: `ROUTINE_MATRIX.md`
- concern map 완료: `CONCERN_PRODUCT_MAP.md`
- recommendation matrix 완료: `RECOMMENDATION_MATRIX.md`
- slug / URL state map 완료: `PRODUCT_SLUG_URL_MAP.md`

## offers / kits 문서 상태

- source map 완료: `OFFER_SOURCE_MAP.md`
- manifest 완료: `OFFER_LIBRARY_MANIFEST.md`
- system audit 완료: `OFFER_SYSTEM_AUDIT.md`
- page source 완료: `OFFER_PAGE_SOURCE.md`
- visual asset map 완료: `OFFER_VISUAL_ASSET_MAP.md`

## 멀티에이전트 역할 요약

| agent | role | direct input principle |
| --- | --- | --- |
| `ERTY서연` | 마스터 오케스트레이터, 최종 판단, 구조 우선순위 조정 | 브랜드 코어 + 제품 번호 체계 + 라인 마스터 + 프로토콜 마스터 |
| `ERTY지안` | 브랜드 내러티브, 포지셔닝, 문장 톤 정리 | 브랜드 코어 + 언어 규칙 + 라인 마스터 |
| `ERTY나연` | IA, 페이지 구조, 사용자 흐름 설계 | 번호 체계 + 라인 마스터 + 프로토콜 마스터 |
| `ERTY소윤` | SEO / GEO 구조, 용어 계층, 검색 랜딩 구조 | 브랜드 코어 + 번호 체계 + 라인 마스터 + glossary |
| `ERTY예린` | evidence / 후기 / claim bank 구조화, 근거 검증 리드 | evidence claim bank 중심 |
| `ERTY민지` | CTA, shop 연결 구조, 루틴과 커머스 브리지 설계 | 라인 마스터 + 프로토콜 마스터 + evidence claim bank |
| `ERTY유진` | UI / 비주얼 시스템, 번호 체계의 시각 반영 | 번호 체계 + visual system notes |
| `ERTY수민` | 프론트엔드 구현, UI/코드 검증 리드 | canonical 결과물만 입력, raw PDF / raw image 금지 |
| `ERTY하린` | 인프라, route/id/locale, DNS / GitHub / 배포 검증 리드 | id map + slug map + locale map만 입력 |

세부 문서 할당은 [AGENT_READING_ALLOCATION.md](./agents/AGENT_READING_ALLOCATION.md) 기준으로 본다.

## hard operating rules

1. raw source는 직접 구현 에이전트에 넣지 않는다.
2. `ERTY수민`은 `private/*` 직접 입력 금지다.
3. `ERTY하린`은 카피 raw가 아니라 식별자 계층 문서만 받는다.
4. preview와 production 결과는 항상 분리 보고한다.
5. 민감정보는 tracked file이나 GitHub에 남기지 않는다.

## 현재 개발 착수 전 판단

1. 구조 문서와 source map은 충분히 축적됐다.
2. core product와 offers / kits는 분리 체계가 고정됐다.
3. 메인 도메인과 쇼핑 도메인도 정책상 분리됐다.
4. 다만 실제 페이지 구현에 들어가기 전에는 `ertyofficial.shop`의 실제 상품 URL과 운영 상태를 확인해야 한다.
5. 브랜드 무드보드와 추가 비주얼 기준이 들어오면 UI 설계 정확도가 더 올라간다.
