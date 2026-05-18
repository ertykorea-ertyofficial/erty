# ERTY Session Handoff

## 2026-05-15 현재 재개 기준

이 섹션은 2026-05-15 `erty` 재개 시점에 실제 git 상태와 로컬 산출물을 확인해 갱신한 최신 기준이다.

### 현재 브랜치 / 커밋 / 워크트리

- 현재 브랜치: `codex/archive-home-v15-20260415`
- 원격 추적 브랜치: `origin/codex/archive-home-v15-20260415`
- 최근 커밋: `6eff438 Optimize static asset loading and footer polish`
- `2026-05-15` 재개 확인 직전 워크트리: clean
- 최근 커밋 흐름:
  - `6eff438 Optimize static asset loading and footer polish`
  - `cfcd252 Checkpoint current site updates`
  - `52c819c Update archive social wall embeds`
  - `bb74c23 chore: tidy SEO domain signals and handoff notes`
  - `35af31c chore: finalize archive page micro copy and spacing polish`

### 2026-05-02 이후 확인된 완료 범위

- SEO 도메인 신호 정리:
  - sitemap-listed 페이지 canonical/metadata 보완
  - canonical base drift 리스크 정리
- Archive 페이지 EmbedSocial 연동:
  - Social Media Wall
  - Instagram Reels
  - TikTok Video
  - YouTube Shorts
  - Archive EmbedSocial lazy-load 구조 적용
- Archive 페이지 정리:
  - YouTube subscribe CTA 연결
  - Social Media Wall / Buyer Signal 모바일 문구 줄바꿈 및 간격 보정
  - 기존 임시 live-proof 섹션 제거
- 공통 UI 정리:
  - 로고 교체 및 헤더 정렬 보정
  - 모바일 메뉴 열림 시 레이아웃 밀림 보정
  - footer locale marker 비노출
  - footer 스크롤 효과 제거
  - CTA 페이지 전환 효과를 더 가벼운 전환 방식으로 정리
- Renewal 상태 페이지:
  - `/insight/` 진입 시 본문 블러 처리 및 리뉴얼 안내 팝업 표시
  - `/brand/` 진입 시 본문 블러 처리 및 리뉴얼 안내 팝업 표시
  - 상단 네비게이션은 유지
- 성능 최적화:
  - By Concern 이미지 preload 축소
  - Products poster/stage 초기 로딩 제한
  - 이미지 파생 포맷 적용
  - OTF -> WOFF2 적용
  - `components.css` 분리
  - Archive 외부 EmbedSocial 로딩 지연 강화
- 공유/회의용 구조 산출물 생성:
  - `output/site-flow/erty-site-flow.pdf`
  - `output/site-flow/erty-site-flow-overview.png`
  - `output/site-flow/erty-structure-flow-map-ko.pdf`
  - `output/site-flow/erty-structure-flow-map-ko.png`

### 현재 남은 보안/운영 보완

- 2026-05-18 Cloudflare 작업 계정은 아래 값으로 재정렬했다.
  - account id: `6d9acff65b1b117a722367436b05b839`
  - zone id: `2d542af3ae5d7aab719a6ae171a41be4`
  - zone: `ertyofficial.com`
  - Pages project: `ertyofficial-preview`
  - token 값은 tracked 문서에 기록하지 않는다.
- Cloudflare token은 Windows User environment와 ignored file `private/secrets/cloudflare/cloudflare-token.env`에 보관했다.
- 현재 실행 중인 Codex 프로세스는 오래된 process env를 들고 있을 수 있으므로, 이 스레드에서 Wrangler를 실행할 때는 먼저 `private/secrets/cloudflare/cloudflare-token.env`를 로드한다.
- 레포에서 `Content-Security-Policy`, `Referrer-Policy`, `Permissions-Policy` 적용 파일은 아직 확인되지 않았다.
- `innerHTML` 사용 구간이 아직 남아 있다:
  - `assets/js/by-concern-selector.js`
  - `assets/js/by-concern.js`
  - `assets/js/main.js`
  - `assets/js/products-catalog.js`
  - `assets/js/pdp/product-pdp-engine.js`
- 단, 대부분은 로컬 정적 데이터 렌더링에 쓰이는 구간이므로, 우선순위는 URL/query/외부 입력과 결합되는 경로부터 검토한다.

### 다음 우선 작업 후보

1. 보안 헤더 적용 방식 확정:
   - Cloudflare Pages `_headers` 또는 현재 배포 경로에 맞는 헤더 파일 추가
   - CSP는 EmbedSocial, YouTube, 이미지/폰트 경로를 고려해 preview에서 먼저 검증
2. `innerHTML` 잔여 사용 구간 중 외부 입력/URL/query 결합 가능 경로 정리
3. `/insight/` 본 구축
4. `/brand/` 본 구축
5. `ertyofficial.shop` Cafe24 메인 쇼핑 도메인 연결 상태 확정 및 문서화

### preview / production 구분

- `2026-05-15` 재개 시점에는 로컬 git 상태만 확인했다.
- production 반영 상태는 이 문서 갱신 과정에서 새로 검증하지 않았다.
- Cloudflare preview URL 역시 이 재개 라운드에서 새로 조회하지 않았다.

## 2026-05-02 현재 재개 기준

이 문서는 긴 Codex 스레드를 새 스레드로 분리해도 `ERTY` 한 단어로 같은 프로젝트 상태를 복구하기 위한 기준 문서다.

### 현재 브랜치 / 배포 상태

- 현재 브랜치: `codex/archive-home-v15-20260415`
- 최근 커밋: `35af31c chore: finalize archive page micro copy and spacing polish`
- 현재 로컬 변경:
  - `archive/index.html`: 보안 검토 중 YouTube iframe에 `sandbox` 속성 추가
- 현재 주요 preview 대상:
  - Home: `http://127.0.0.1:4173/`
  - By Concern: `http://127.0.0.1:4173/by-concern/`
  - Products: `http://127.0.0.1:4173/products/`
  - Archive: `http://127.0.0.1:4173/archive/`

### 현재 완료된 큰 범위

- Home / By Concern / Products 페이지 주요 UI 라운드 완료
- Products Product Explorer / All Products Grid / PDP 링크 흐름 구축 완료
- 전제품 PDP 데이터 및 공통 PDP 렌더링 엔진 구축 완료
- 01, 02, 03, 11, 13, 15, 21, 23, 25, 27, 35, 37, 50, 55, 57 PDP 시각 위계 정리 완료
- Global Nav rename 완료:
  - `GUIDE` -> `INSIGHT`
  - `RESULTS` -> `ARCHIVE`
- Archive v1 구축 완료:
  - Hero
  - YouTube official video iframe
  - Social Media Wall
  - Buyer Signal
  - B2B CTA
  - footer 비노출
- 최근 보안 검토 1차 완료:
  - 로컬 Cloudflare 토큰 파일 탐지: `private/secrets/cloudflare/cloudflare-token.env`
  - CSP/보안 헤더 미설정 리스크 식별
  - `archive/index.html` iframe sandbox 조치
  - `innerHTML` 사용 구간 저감 필요성 식별

### Codex 앱 응답 없음 진단

- Windows 이벤트 로그에 `Codex.exe` `Application Hang`가 실제 기록됨.
- Codex 로그에서 현재 거대 스레드 재개 비용 확인:
  - `thread/resume durationMs=83957`
  - `turnCount=487`
  - `item_count_total_loaded=17633`
  - `renderer_process_working_set_kb=648124`
- 따라서 반복적인 `응답 없음`의 직접 원인은 현재 장기 스레드의 재개/렌더링 부담이다.
- 새 작업 라운드는 새 Codex 스레드에서 시작하고, 첫 메시지로 `ERTY`를 보내 이 문서 기준으로 복구한다.

### 다음 우선 작업

1. 현재 남은 보안 보완:
   - Cloudflare 토큰 회수/재발급
   - Pages/Worker 레벨 CSP, Referrer-Policy, Permissions-Policy 헤더 적용
   - `innerHTML` 사용 구간 중 URL/query 결합 가능 경로 우선 정리
2. Archive 이후 페이지별 라운드:
   - Insight 페이지 본 구축
   - Brand 페이지 본 구축
3. 작업 흐름:
   - 한 요청/한 페이지/한 라운드 단위로 진행
   - 장기 스레드가 다시 100턴 이상 커지기 전에 새 스레드로 분리

---

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
5. Home 주요 section-by-section 고도화는 현재 체크포인트 기준 보관 완료
6. 현재 다음 착수 대상은 `/by-concern` 단일 페이지다
7. `/by-concern`은 `Hero -> Concern Selector -> Active Concern Board -> Proof Snapshot -> Guide Cluster -> FAQ -> Shop Bridge` 순서로 section-by-section 구현한다
8. 다음 1순위 활성 작업은 사용자가 별도 지시하지 않는 한 `/by-concern`의 다음 섹션 설계/구현이다

## 2026-04-18 By Concern 체크포인트

- 현재 브랜치: `codex/archive-home-v15-20260415`
- 현재 로컬 preview:
  - Home: `http://127.0.0.1:4173/`
  - By Concern: `http://127.0.0.1:4173/by-concern/`
- production 변경: 없음
- `/by-concern` 관련 문서 추가 완료:
  - `docs/by-concern/BY_CONCERN_MASTER_SPEC.md`
  - `docs/by-concern/BY_CONCERN_IMPLEMENTATION_SPEC.md`
  - `docs/by-concern/BY_CONCERN_DATA_CONTRACT.md`
  - `docs/by-concern/BY_CONCERN_COPY_DECK.md`
  - `docs/by-concern/BY_CONCERN_QA_CHECKLIST.md`
- `/by-concern` 초기 구현 완료 범위:
  - Hero
  - Concern Selector
  - Hero -> Selector 연결 흐름
  - header navigation label/slug update: `Home / Brand / Products / Results / Guide / By Concern`
  - `assets/js/by-concern-data.js` source-of-truth 데이터 추가
  - `assets/js/by-concern.js` selector state engine 추가
  - AI-generated hero poster/video 및 6개 concern cue asset 적용
- 현재 검증된 local 상태:
  - `/by-concern/` 응답 `200`
  - `h1` 1개 유지
  - browser console error `0`
  - Hero CTA `피부 신호 고르기` 클릭 시 `#concern-selector`로 이동
  - CTA 이동 후 active tab focus: `concern-tab-barrier-redness`
  - 기본 selected route: `37 -> 35`
- 중요 판단:
  - 사용자가 현재 By Concern 이미지 생성 품질은 불만족이나 우선 넘어가기로 결정
  - 다음 라운드에서 이미지 교체가 요청되기 전까지 현재 asset을 유지
  - 구현은 계속 `Hero + Selector` 이후 섹션별로 잠그는 방식 유지
- 다음 세션 기본 재개 작업:
  - 사용자가 줄 다음 `/by-concern` 섹션별 프롬프트를 우선한다
  - 명시 지시가 없으면 `Active Concern Board` 상세 구현 준비부터 시작한다

## 2026-04-15 Home V16 체크포인트

- 현재 브랜치: `codex/archive-home-v15-20260415`
- 현재 로컬 preview: `http://127.0.0.1:4173/`
- 로컬 `/` 응답: `200`
- production 변경: 없음
- 오늘 커밋 대상 HOME 범위:
  - Hero polish / background image update / metadata strip 정리
  - SKU Explorer system board refinement / transparent SKU preview image replacement / SKU copy and CTA normalization
  - Brand Principle copy and rule-row refinement
  - Evidence primary/secondary proof architecture / CTA `근거 보기` 통일
  - Numbering System left rail / route copy / Professional row polish
  - Next Layers + FAQ copy and state polish
- 현재 authoritative 작업 상태:
  - `HOME V16 section-by-section refinement in progress`
- 다음 세션 기본 재개 작업:
  - `Footer 전용 polish`
  - 단, 사용자가 다른 section-by-section 프롬프트를 주면 그 섹션을 우선한다

## 다음 세션에서 가장 먼저 확인할 것

1. 현재 git status와 브랜치 `codex/archive-home-v15-20260415`
2. 로컬 preview `http://127.0.0.1:4173/` 응답 상태
3. 사용자가 다음에 지시할 section-by-section 수정 대상
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
- `HOME V16` section-by-section refinement 체크포인트 완료:
  - Hero: lock-up / metadata / CTA / background polish 진행
  - SKU Explorer: selected panel / grouped explorer / protocol band / transparent preview images / state color sync 보정
  - Brand Principle: operating rule copy and row polish 진행
  - Evidence: `37 primary + 27/55/57 secondary` proof architecture 보정
  - Numbering System: left rail / route copy / Professional row polish 진행
  - Next Layers + FAQ: result-first copy / accordion state polish 진행
- 다음 기본 활성 섹션:
  - `Footer`
- 현재 local preview 기준:
  - `/` 응답 `200`
  - `h1` 1개 유지
  - production 변경 없음

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
