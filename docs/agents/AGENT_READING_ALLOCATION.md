# ERTY Agent Reading Allocation

## 목적

이 문서는 각 프로젝트 에이전트가 실제 작업에 들어가기 전에 어떤 문서를 읽고 참고해야 하는지 고정한다.
`AGENT_INJECTION_MAP.md`가 direct injection 규칙이라면, 이 문서는 작업 전 참고 범위까지 포함한 운영 할당표다.

## reading class

- `direct injection`: 프롬프트에 직접 넣어도 되는 canonical / tracked 문서
- `always read`: 해당 역할이 작업 시작 전에 우선 읽어야 하는 기준 문서
- `conditional reference`: 특정 작업에서만 추가로 읽는 문서
- `forbidden`: 직접 입력으로 넣지 않는 source

## 1. ERTY서연

### direct injection

- `docs/canonical/00_BRAND_CORE.md`
- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`

### always read

- `docs/PROJECT_BRIEF.md`
- `docs/PAGE_DESIGN.md`
- `DESIGN.md`
- `docs/PDF_REVIEW_AUDIT.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

### conditional reference

- `docs/products/ROUTINE_MATRIX.md`
- `docs/products/CONCERN_PRODUCT_MAP.md`
- `docs/products/RECOMMENDATION_MATRIX.md`
- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md`

### forbidden

- `private/*` raw source 직접 주입 금지

## 2. ERTY지안

### direct injection

- `docs/canonical/00_BRAND_CORE.md`
- `docs/canonical/01_BRAND_LANGUAGE_RULES.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`

### always read

- `docs/brand/BRAND_CORE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `docs/products/PRODUCT_CLAIM_RULE.md`
- `docs/PDF_REVIEW_AUDIT.md`

### conditional reference

- `docs/products/PRODUCT_MECHANISM.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/products/EVIDENCE_SOURCE.md`

### forbidden

- 제품 상세 raw image, 누끼컷, raw PDF 직접 주입 금지

## 3. ERTY나연

### direct injection

- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`

### always read

- `docs/PAGE_DESIGN.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md`
- `docs/products/ROUTINE_MATRIX.md`
- `docs/products/CONCERN_PRODUCT_MAP.md`
- `docs/products/RECOMMENDATION_MATRIX.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

### conditional reference

- `docs/products/PRODUCT_SLUG_URL_MAP.md`
- `docs/offers/OFFER_PAGE_SOURCE.md`
- `docs/products/PRODUCT_MECHANISM.md`

### forbidden

- raw PDF / raw image 직접 주입 금지

## 4. ERTY소윤

### direct injection

- `docs/canonical/00_BRAND_CORE.md`
- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/canonical/06_MULTILINGUAL_GLOSSARY.md`

### always read

- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `docs/products/CONCERN_PRODUCT_MAP.md`
- `docs/products/ROUTINE_MATRIX.md`
- `docs/products/PRODUCT_CLAIM_RULE.md`

### conditional reference

- `docs/products/FAQ_SOURCE.md`
- `docs/products/EVIDENCE_SOURCE.md`
- `docs/products/PRODUCT_SLUG_URL_MAP.md`

### forbidden

- raw 제품 소개서 PDF, raw 상세페이지 이미지 직접 주입 금지

## 5. ERTY예린

### direct injection

- `docs/canonical/05_EVIDENCE_CLAIM_BANK.md`

### always read

- `docs/products/EVIDENCE_SOURCE.md`
- `docs/products/FAQ_SOURCE.md`
- `docs/products/PRODUCT_CLAIM_RULE.md`
- `docs/PDF_REVIEW_AUDIT.md`

### conditional reference

- `docs/products/PRODUCT_MECHANISM.md`
- `docs/products/PRODUCT_PAGE_SOURCE.md`
- `docs/offers/OFFER_PAGE_SOURCE.md`

### forbidden

- raw 후기 이미지, raw before-after source 직접 주입 금지

## 6. ERTY민지

### direct injection

- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`
- `docs/canonical/05_EVIDENCE_CLAIM_BANK.md`

### always read

- `docs/products/PRODUCT_CLAIM_RULE.md`
- `docs/products/RECOMMENDATION_MATRIX.md`
- `docs/products/PRODUCT_SLUG_URL_MAP.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

### conditional reference

- `docs/products/CTA_SOURCE.md`
- `docs/offers/OFFER_PAGE_SOURCE.md`
- `docs/products/ROUTINE_MATRIX.md`

### forbidden

- 미확정 shop URL을 확정된 구매 경로처럼 다루는 입력 금지
- raw image 직접 주입 금지

## 7. ERTY유진

### direct injection

- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/07_VISUAL_SYSTEM_NOTES.md`

### always read

- `DESIGN.md`
- `docs/products/VISUAL_ASSET_MAP.md`
- `docs/products/IMAGE_USAGE_GUIDE.md`
- `docs/offers/OFFER_VISUAL_ASSET_MAP.md`
- `docs/PDF_REVIEW_AUDIT.md`

### conditional reference

- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md`
- `docs/offers/OFFER_PAGE_SOURCE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`

### forbidden

- raw 누끼컷 폴더 전체를 프롬프트로 직접 주입 금지
- raw 디자인 레퍼런스 전체 bulk 주입 금지

## 8. ERTY수민

### direct injection

- `docs/canonical/00_BRAND_CORE.md`
- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/03_PRODUCT_LINE_MASTER.md`
- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`
- `docs/canonical/05_EVIDENCE_CLAIM_BANK.md`
- `docs/canonical/07_VISUAL_SYSTEM_NOTES.md`
- `docs/canonical/08_PRODUCT_ID_MAP.md`
- `docs/canonical/09_PRODUCT_SLUG_MAP.md`
- `docs/canonical/10_LOCALE_MAP.md`

### always read

- `DESIGN.md`
- `docs/PAGE_DESIGN.md`
- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/products/PRODUCT_SLUG_URL_MAP.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

### conditional reference

- `docs/products/ROUTINE_MATRIX.md`
- `docs/products/CONCERN_PRODUCT_MAP.md`
- `docs/products/RECOMMENDATION_MATRIX.md`

### forbidden

- `private/*`
- raw PDF
- raw 상세페이지 이미지
- raw 누끼컷

## 9. ERTY하린

### direct injection

- `docs/canonical/08_PRODUCT_ID_MAP.md`
- `docs/canonical/09_PRODUCT_SLUG_MAP.md`
- `docs/canonical/10_LOCALE_MAP.md`

### always read

- `docs/PROJECT_BRIEF.md`
- `docs/products/PRODUCT_SLUG_URL_MAP.md`
- `docs/products/PRODUCT_LIBRARY_MANIFEST.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

### conditional reference

- `docs/PAGE_DESIGN.md`
- `docs/SESSION_HANDOFF.md`

### forbidden

- 브랜드 카피 raw
- 제품 설명 raw
- raw image / raw PDF 직접 주입 금지

## 운영 원칙

1. direct injection은 prompt에 직접 넣어도 되는 최소 세트다.
2. always read는 에이전트가 역할 수행 전에 반드시 복기해야 하는 문서다.
3. conditional reference는 task scope가 맞을 때만 추가한다.
4. `ERTY수민`, `ERTY하린`은 정제 문서만 읽고 raw source를 직접 받지 않는다.
5. tracked 문서와 raw source가 충돌하면 raw를 바로 넘기지 말고, 먼저 tracked/canonical 문서를 갱신한 뒤 handoff 한다.
