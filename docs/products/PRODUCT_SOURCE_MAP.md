# ERTY Product Source Map

## 목적

이 문서는 사용자가 전달한 제품 정의 문서의 원본 경로와 프로젝트 내부 보관 경로를 고정한다.

## 외부 전달 경로

- 사용자 전달 폴더:
  `C:\Users\gusru\OneDrive\Desktop\에르띠 프로젝트 코덱스 전달 데이터 md 파일\erty_product_docs_korean`
- 상세페이지 이미지 원본 폴더:
  `C:\Users\gusru\OneDrive\Desktop\ERTY 자사몰 프로젝트\전제품_제품별_상세페이지`
- 누끼컷 이미지 원본 폴더:
  `C:\Users\gusru\OneDrive\Desktop\ERTY 자사몰 프로젝트\전제품_제품별_누끼컷`

## 프로젝트 내부 authoritative local path

- 한국어 제품 문서 패키지:
  `private/product-docs/korean`
- 제품별 문서:
  `private/product-docs/korean/products`
- 메커니즘 문서:
  `private/product-docs/korean/PRODUCT_MECHANISM.md`
- claim 가이드 문서:
  `private/product-docs/korean/PRODUCT_CLAIM_RULE.md`
- 제품별 기술 소개서 PDF:
  `private/product-docs/technical-pdf`
- 링크 재검증용 PDF 번들:
  `private/source-pdf-review/markdown-pdf-version`
- 제품별 상세페이지 이미지:
  `private/product-detail-pages`
- 제품별 누끼컷 이미지:
  `private/product-cutouts`

## 현재 보관 완료 범위

- 제품별 문서 15개
- 제품 메커니즘 문서 1개
- 제품 claim 가이드 문서 1개
- 제품별 기술 소개서 PDF 15개
- 제품별 상세페이지 이미지 폴더 16개
- 제품별 누끼컷 이미지 폴더 15개
- 상세페이지 기반 source 문서 4개
- 이미지 설계용 source 문서 2개

## 기술 소개서 PDF 파일 범위

- `1 Perfect Soothing Solution 1.pdf`
- `2 Perfect N.Cell Ampoule.pdf`
- `3 Perfect Spicule Formulation.pdf`
- `11 Cleansing gel for skin balancing.pdf`
- `13 Purifying for skin balancing.pdf`
- `15 Concentraed Booster for Skin Balancing.pdf`
- `21 Cleansing Milk for skin Hydrating.pdf`
- `23 Tonic Lotion for skin Hydrating.pdf`
- `25 Concentraed Booster for Skin Hydrating.pdf`
- `27 Derma Hdro Aquax Cream.pdf`
- `35 Concentraed Booster for Skin Hydrating.pdf`
- `37 Intensive Cellular ER Cream.pdf`
- `50 Sun Cream.pdf`
- `55 Concentraed Booster for Skin Brightening.pdf`
- `57 Melaway Brightening Cream.pdf`

## 운영 원칙

1. 현재 제품 정의 작업의 authoritative path는 `private/product-docs/korean`이다.
2. 제품별 기술 소개서 PDF의 authoritative path는 `private/product-docs/technical-pdf`다.
3. 두 경로 모두 GitHub에 올리지 않는다.
4. 상세페이지 이미지의 authoritative path는 `private/product-detail-pages`다.
5. 누끼컷 이미지의 authoritative path는 `private/product-cutouts`다.
6. 공개용 구현 문서나 카피 산출물은 위 원본 경로들을 읽고 별도로 파생한다.
7. 마크다운과 PDF 간 불일치가 생기면 PDF를 근거로 검증 후 정정한다.
8. 원본 파일명 오탈자는 제공 원본 기준으로 그대로 보관하고, 정리 문서에서만 표준 명칭을 별도 관리한다.
9. 링크형 자료를 PDF로 재검증한 번들은 `private/source-pdf-review/markdown-pdf-version`을 우선 본다.

## 후속 작업

1. 제품 slug와 실서비스 URL 규칙 정리
2. 제품별 CTA 연결 규칙 정리
3. 공통 claim 문구와 제품별 허용 claim 구분
4. PDF와 제품 마크다운 간 차이 검수
5. 상세페이지 이미지와 제품 기술서 간 차이 검수
6. 누끼컷 기준 대표 카드 이미지 manifest 정리
