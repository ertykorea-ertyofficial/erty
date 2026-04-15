# ERTY Session Handoff

## 목적

이 문서는 다음 Codex 세션에서 `ERTY` 한 단어로 재개할 때 읽는 기준 상태 문서다.
현재까지 완료된 작업, 남은 작업, 다음 입력 필요사항을 고정한다.

## 현재 완료된 작업

### 프로젝트 구조

- 정적 프론트 스캐폴드 생성 완료
- 루트 HTML, 페이지 스텁, 공통 CSS / JS, 컴포넌트, 데이터, 유틸 생성 완료
- Git 저장소 초기화 완료
- GitHub 원격 `main` 푸시 완료

### 기준 문서

- `docs/PROJECT_BRIEF.md` 작성 완료
- `docs/PAGE_DESIGN.md` 작성 완료
- 루트 `DESIGN.md` 작성 완료
- `docs/agents/` 멀티에이전트 운영 문서 정리 완료
- `references/awesome-design-md-main` UI/UX 레퍼런스 보관 완료
- `docs/brand/` 1차 브랜드 기준 문서 정리 완료
- `docs/canonical/` 에이전트 직접 주입용 canonical input 세트 작성 완료
- `docs/products/` 제품 문서 인덱스 정리 완료
- `docs/agents/AGENT_INJECTION_MAP.md` 작성 완료
- `docs/agents/AGENT_READING_ALLOCATION.md` 작성 완료
- `private/brand-source/` 원본 브랜드 자산 로컬 보관 완료
- `private/product-docs/korean/` 제품 정의 문서 로컬 보관 완료
- `private/product-docs/technical-pdf/` 제품 기술 소개서 PDF 로컬 보관 완료
- `private/product-detail-pages/` 제품 상세페이지 이미지 로컬 보관 완료
- `private/product-cutouts/` 제품별 누끼컷 로컬 보관 완료
- `private/offers-kits/` 키트 / 기획상품 raw source 로컬 보관 완료
- `docs/products/PRODUCT_PAGE_SOURCE.md` 작성 완료
- `docs/products/PRODUCT_CLAIM_RULE.md` tracked 문서 작성 완료
- `docs/products/PRODUCT_MECHANISM.md` tracked 문서 작성 완료
- `docs/products/CTA_SOURCE.md` 작성 완료
- `docs/products/FAQ_SOURCE.md` 작성 완료
- `docs/products/EVIDENCE_SOURCE.md` 작성 완료
- `docs/products/VISUAL_ASSET_MAP.md` 작성 완료
- `docs/products/IMAGE_USAGE_GUIDE.md` 작성 완료
- `docs/products/PRODUCT_SYSTEM_AUDIT.md` 작성 완료
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md` 작성 완료
- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md` 작성 완료
- `docs/products/ROUTINE_MATRIX.md` 작성 완료
- `docs/products/CONCERN_PRODUCT_MAP.md` 작성 완료
- `docs/products/RECOMMENDATION_MATRIX.md` 작성 완료
- `docs/products/PRODUCT_SLUG_URL_MAP.md` 작성 완료
- `docs/offers/` 키트 / 기획상품 정리 문서 작성 완료
- `docs/offers/OFFER_PAGE_SOURCE.md` 작성 완료
- `docs/offers/OFFER_VISUAL_ASSET_MAP.md` 작성 완료
- `docs/WORKSPACE_AGENT_OVERVIEW.md` 작성 완료
- `docs/PDF_REVIEW_AUDIT.md` 작성 완료

### 인프라

- Cloudflare zone 확인 완료
- 기존 `shop.ertyofficial.com` DNS 실험 이력은 있으나 현재 전략에서 제외
- 현재 쇼핑 도메인 계획은 `ertyofficial.shop`

## 현재 미완료 / 보류 작업

### Cafe24

- Cafe24 내부 정책상 `shop.ertyofficial.com` 방식은 사용하지 않기로 결정
- 쇼핑 도메인은 `ertyofficial.shop`으로 변경
- `ertyofficial.shop` Cafe24 메인 도메인 연결 상태는 별도 확인 필요
- `ertyofficial.com` 메인 브랜드 도메인을 Cafe24 쇼핑 대표 도메인으로 전환하면 안 됨
- 과거 상담 근거 문서: `docs/CAFE24_SUPPORT_BRIEF.md`

### 브랜드 자료

- `BRAND_CORE.md` 정리 완료
- `BRAND_LANGUAGE_RULE.md` 정리 완료
- `BRAND_POSITIONING.md` 정리 완료
- 로고 원본 6개 보관 완료
- 브랜드 스토리 / 제품 넘버링 원본 3개 보관 완료
- 국가별 전제품 소개서 PDF 5개 보관 완료
- 제품별 정의 문서 15개 보관 완료
- `PRODUCT_MECHANISM.md` 보관 완료
- `PRODUCT_CLAIM_RULE.md` 보관 완료
- 제품별 기술 소개서 PDF 15개 보관 완료
- 제품별 상세페이지 이미지 폴더 16개 보관 완료
- 제품별 누끼컷 폴더 15개 보관 완료
- 키트 / 기획상품 누끼컷 항목 7개 보관 완료
- 키트 / 기획상품 상세페이지 항목 6개 보관 완료
- 링크형 자료 재검증용 PDF 번들 보관 완료
- 브랜드 무드보드 미수집
- 추가 제품 상세 자료 미수집

## 현재 운영 판단

1. 기존의 `전역 라운드로 여러 페이지를 한 번에 구현하는 방식`은 폐기한다
2. 앞으로는 `페이지별 라운드`로만 진행한다
3. 각 페이지는 멀티 에이전트 PASS 이후에만 사용자 preview를 제공한다
4. 로고와 브랜드 자산을 실제 화면에 적극 반영해야 한다
5. 현재 다음 착수 대상은 `Home` 단일 페이지다
6. `Home`은 이제 `section-by-section`으로만 고도화한다
7. 현재 1순위 활성 섹션은 `Featured SKU`다

## 다음 세션에서 가장 먼저 확인할 것

1. 사용자가 제공하는 브랜드 자료 경로
2. 사용자가 제공하는 추가 제품 / 무드보드 자료 경로
3. 현재 git status
4. `ertyofficial.shop` DNS / SSL / 대표도메인 상태
5. 추가로 생긴 브랜드 무드보드 / 상세 자료 여부

## 다음 세션 우선순위

### Priority 1

- `ertyofficial.shop` Cafe24 연결 상태 확정
- 쇼핑 엔진 도메인 설정 상태 문서화
- `docs/IMPLEMENTATION_ROUND_CHECKLIST.md` 기준의 page-by-page 실행 유지

### Priority 2

- 추가 브랜드 자료 인벤토리 정리
- 브랜드 / 제품 기준 문서 확장 및 source map 작성
- 제품 마크다운과 PDF 간 차이 검수
- 상세페이지 이미지와 제품 기술서 간 차이 검수
- 제품 시스템 감사 기준으로 slug / routine / concern / recommendation 구조 명문화
- 제품 manifest / template / routine / concern 문서 작성 완료
- recommendation matrix / slug-url map 문서 작성 완료
- offers / kits 레이어를 별도 route / manifest 체계로 정리
- offers page source / visual asset map 문서 작성 완료

### Priority 3

- 자료를 바탕으로 `Foundation 1 -> Home -> Philosophy -> Products -> Product Detail` 순서로 한 페이지씩 구현
- 현재는 `HOME Round 0 Freeze`까지 완료
- `HOME Numbering Guide` 조건부 반영 범위 확정 완료
- `HOME Round 1 — Visual Direction & Shell Hi-fi` 구현 및 멀티 에이전트 PASS 완료
- 추가 고도화용 멀티 에이전트 피드백 정리 완료: `docs/pages/home/HOME_ELEVATION_FEEDBACK.md`
- `HOME Round 1.5b` 구현 및 최종 멀티 에이전트 PASS 완료
- `awesome-design-md-main` 원본 라이브러리 재검토 완료
- Home V2용 reference selection / creative brief 작성 완료
- `HOME V2` 재설계 구현 완료
- `HOME V2` 로컬 preview 생성 완료
- `HOME V2` 멀티 에이전트 최종 PASS 완료
- 현재 authoritative preview는
  - `output/playwright/home-v2-desktop-full.png`
  - `output/playwright/home-v2-mobile-full.png`
- 추가 reference 비교 검토 완료:
  - `C:\Users\gusru\OneDrive\Desktop\aaaaaaaaaaaaaaaaaaa.webp`
  - `C:\Users\gusru\OneDrive\Desktop\bbbbbbbbbbbbbbbbbbb.webp`
  - Dribbble live skincare shot
- `HOME V3` 구조 축소안 작성 완료:
  - `docs/pages/home/HOME_V3_REDUCTION_PLAN.md`
- `HOME V3` 구현 완료
- `HOME V3` 로컬 preview 생성 완료
- `HOME V3` 멀티 에이전트 최종 PASS 완료
- 사용자 prompt 기반 `HOME V4` 재설계 완료
- `HOME V4` 로컬 preview 생성 완료
- `HOME V4` 멀티 에이전트 최종 PASS 완료
- latest HOME V4 hero update 완료
  - hero image source: `assets/images/brand/home/erty-model-37.jpg`
  - H1: `피부 문제의 해석부터 달라져야 합니다`
  - hero caption: `37 / Revitalizing / ER Cream`
- `HOME V8` 리디자인 구현 완료
- `HOME V8` 로컬 preview 생성 완료
- `HOME V8` 멀티 에이전트 최종 PASS 완료
- `HOME V9` 고도화 구현 완료
- `HOME V9` 로컬 preview 생성 완료
- `HOME V9` 멀티 에이전트 최종 PASS 완료
- `HOME V10` / `HOME V11` 후속 고도화로, Featured / Evidence / protocol / state language 병목이 재확인됨
- `HOME`은 이제 `전체 동시 수정`이 아니라 `Featured -> Evidence -> Hero -> Footer -> Numbering System -> Operating Principle -> Next Layers` 순서의 section-by-section 실행으로 고정
- `HOME Featured SKU` section-by-section 고도화 완료
- Featured current validated preview:
  - `output/playwright/home-v11-featured-desktop-pass5.png`
  - `output/playwright/home-v11-featured-mobile-pass5.png`
- 현재 활성 섹션:
  - `Evidence`
- section execution 기준 문서:
  - `docs/pages/home/HOME_SECTION_EXECUTION_PLAN.md`
- current authoritative preview는
  - `output/playwright/home-v11-desktop-full.png`
  - `output/playwright/home-v11-mobile-full.png`
- review 문서:
  - `docs/pages/home/HOME_V11_REVIEW.md`
- supporting docs:
  - `docs/pages/home/HOME_COPY_REWRITE_MATRIX.md`
  - `docs/pages/home/HOME_SECTION_EXECUTION_PLAN.md`
  - `docs/pages/home/HOME_V12_PREP_BRIEF.md`
- 현재 상태는 `HOME section-by-section refinement in progress`다

## `ERTY` 재개 명령 해석 규칙

사용자가 새 세션에서 `ERTY`라고만 입력하면 다음을 수행한다.

1. 이 문서를 읽는다
2. `docs/PROJECT_BRIEF.md`를 읽는다
3. `docs/PAGE_DESIGN.md`를 읽는다
4. `docs/agents/README.md`를 읽는다
5. 현재 워크스페이스 상태를 확인한다
6. 사용자에게 현재 상태와 바로 이어질 다음 작업만 짧게 요약한다

## 주의사항

- 민감 데이터는 저장소에 기록하지 않는다
- production 변경은 검증 전 완료로 말하지 않는다
- preview와 production 결과를 분리해서 보고한다
- 역할별 에이전트 PASS 없이 사용자에게 preview를 바로 보여주지 않는다
- 폐기된 preview 산출물은 다음 라운드 판단 근거로 사용하지 않는다
