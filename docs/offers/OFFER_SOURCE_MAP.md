# ERTY Offer Source Map

## 목적

이 문서는 사용자가 전달한 키트상품 / 기획상품 자산의 외부 원본 경로와 프로젝트 내부 보관 경로를 고정한다.

## 외부 전달 경로

- 누끼컷 원본:
  `C:\Users\gusru\OneDrive\Desktop\ERTY 자사몰 프로젝트\키트상품 및 기획상품 누끼컷`
- 상세페이지 원본:
  `C:\Users\gusru\OneDrive\Desktop\ERTY 자사몰 프로젝트\키트상품 및 기획상품 상세페이지`

## 프로젝트 내부 authoritative local path

- 누끼컷 raw root:
  `private/offers-kits/cutouts`
- 실제 누끼컷 소스 루트:
  `private/offers-kits/cutouts/키트상품 및 기획상품 누끼컷`
- 상세페이지 raw root:
  `private/offers-kits/detail-pages`

## 현재 보관 완료 범위

- 누끼컷 항목 7개
- 상세페이지 항목 6개
- cutout 파일:
  - `PNG` 10개
- detail page 파일:
  - `JPG` 34개
  - `PNG` 9개

## 누끼컷 항목 목록

- `기획 상품) Multi Booster 130`
- `기획상품) 25+27 수분세트`
- `기획상품) 35+37 환생세트`
- `기획상품) 37 Duo Set`
- `기획상품) Hydrating Series`
- `기획상품) RE'Set`
- `ER Toning Treatment KIT`

## 상세페이지 항목 목록

- `기획상품) 25+27 수분세트`
- `기획상품) 35+37 환생세트`
- `기획상품) 37 Duo Set`
- `기획상품) Hydrating Series`
- `기획상품) Multi Booster 130`
- `ER Toning Treatment KIT`

## 중복 / 불일치 확인

### `ER Toning Treatment KIT`

- 기존 경로:
  `private/product-detail-pages/ER Toning Treatment KIT`
- 신규 경로:
  `private/offers-kits/detail-pages/ER Toning Treatment KIT`
- 확인 결과:
  - `ER Toning Treatment KIT_1.jpg` SHA256 동일
  - `ER Toning Treatment KIT_2.jpg` SHA256 동일
  - `썸네일/1.jpg` SHA256 동일
  - `썸네일/2.jpg` SHA256 동일

따라서 키트/오퍼 작업에서는 `private/offers-kits/detail-pages/ER Toning Treatment KIT`를 authoritative path로 보고,
기존 `private/product-detail-pages` 쪽은 historical duplicate로 본다.

### `RE'Set`

- 누끼컷은 존재한다.
- 이번 전달 범위에서는 대응 상세페이지가 확인되지 않았다.
- 따라서 현재 status는 `cutout only / pending mapping`이다.

## 운영 원칙

1. 이번 raw source는 `products` 레이어와 섞지 않는다.
2. 단일 SKU가 아닌 composite offer는 `offers/kits` 레이어로 관리한다.
3. 원본 폴더명은 보존하되, tracked 문서에서는 별도 logical id를 쓴다.
4. raw source는 GitHub에 올리지 않는다.
