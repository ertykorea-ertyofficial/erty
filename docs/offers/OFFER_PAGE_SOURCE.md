# ERTY Offer Page Source

## 목적

이 문서는 키트상품 / 기획상품 상세페이지 raw source를 route 설계와 상세 레이아웃 관점에서 정리한 문서다.
`/offers/[slug]` 페이지의 섹션 구조, 이미지 슬롯, 예외 항목을 고정하는 source note로 사용한다.

이 문서는 실제 이미지 안의 카피를 전수 전사한 문서가 아니다.
현재는 폴더 구조, 파일 패턴, 파일 수, 예외 파일명을 근거로 page source를 정리한다.

## source basis

- `private/offers-kits/detail-pages`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`
- `docs/offers/OFFER_SOURCE_MAP.md`

## common file pattern

현재 확인된 offer detail raw source는 대체로 아래 패턴 중 하나를 따른다.

1. `intro` 1장 + `thumbnail` 다수
2. long-form detail 본문 2장 + `thumbnail` 2장
3. `intro` 1장 + `thumbnail` 다수 + notice 1장

### common section inference

| source pattern | likely page role | evidence |
| --- | --- | --- |
| `*_intro.*` | 상단 hero / summary strip | 파일명 `intro` 반복 |
| `#썸네일` 또는 `썸네일` 하위 폴더 | 카드 / gallery / option preview | 하위 폴더명 반복 |
| `숫자변경 안내.png` | numbering / alias notice block | 파일명 직접 확인 |
| long-form JPG 2장 | 세로형 상세 본문 블록 | `ER Toning Treatment KIT_1/2.jpg`의 긴 비율 확인 |

## offer-by-offer source map

### `er-toning-treatment-kit` ER Toning Treatment KIT

- category: `professional_kit`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/ER Toning Treatment KIT`
- file pattern:
  - long-form body: `ER Toning Treatment KIT_1.jpg`, `ER Toning Treatment KIT_2.jpg`
  - thumbnail set: `썸네일/1.jpg`, `썸네일/2.jpg`
- observed structure:
  - square thumbnail 2장 + 세로형 상세 본문 2장
  - 기존 `private/product-detail-pages/ER Toning Treatment KIT`와 hash-identical duplicate
- layout note:
  - `/offers/[slug]`에서는 protocol identity, step sequence, kit packaging을 먼저 보여주는 구성이 자연스럽다.

### `hydration-25-27-set` 25+27 수분세트

- category: `promotional_set`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/기획상품) 25+27 수분세트`
- file pattern:
  - intro: `수분세트_intro.jpg`
  - thumbnail/gallery: `#썸네일/수분세트(1).jpg` ~ `수분세트(F).jpg`
- file count:
  - intro 1장
  - thumbnail 9장
- observed structure:
  - hero용 intro 1장 뒤에 다수의 정사각형 설명/썸네일 블록이 이어지는 구성
- caution note:
  - cutout 시각 검사에서는 booster numbering이 `25`가 아닌 다른 숫자처럼 보이는 legacy risk가 있어 alias note를 남겨야 한다.

### `revival-35-37-set` 35+37 환생세트

- category: `promotional_set`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/기획상품) 35+37 환생세트`
- file pattern:
  - intro: `환생세트_intro.jpg`
  - thumbnail/gallery: `#썸네일/환생세트(1).jpg` ~ `환생세트(F).jpg`
- file count:
  - intro 1장
  - thumbnail 9장
- observed structure:
  - `25+27 수분세트`와 거의 같은 상세 구조
- caution note:
  - cutout 시각 검사에서는 booster numbering이 `35`가 아닌 다른 숫자처럼 보이는 legacy risk가 있어 alias note를 남겨야 한다.

### `37-duo-set` 37 Duo Set

- category: `promotional_set`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/기획상품) 37 Duo Set`
- file pattern:
  - intro: `37 DOU SET_intro.jpg`
  - thumbnail/gallery: `#썸네일/1.jpg`, `2.png`, `3.png`
- file count:
  - intro 1장
  - thumbnail 3장
- observed structure:
  - 비교적 짧은 상세 구성
  - 파일명에 `DOU` 오탈자가 있으므로 tracked 문서에서만 표준명 `37 Duo Set`을 유지한다.

### `hydrating-series-set` Hydrating Series

- category: `line_bundle`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/기획상품) Hydrating Series`
- file pattern:
  - intro: `Hydrating Series_Intro.png`
  - thumbnail/gallery: `썸네일/1.png`, `2.png`, `3.png`, `4.png`, `6.png`
- file count:
  - intro 1장
  - thumbnail 5장
- observed structure:
  - PNG 기반 구성
  - 썸네일 index가 `5` 없이 `6`까지 가므로 원본 누락 또는 naming gap 가능성은 있으나, 현재는 source 그대로 유지한다.

### `multi-booster-130` Multi Booster 130

- category: `cross_line_bundle`
- detail source status: `confirmed`
- source folder: `private/offers-kits/detail-pages/기획상품) Multi Booster 130`
- file pattern:
  - intro: `멀티부스터130_intro.jpg`
  - notice: `숫자변경 안내.png`
  - thumbnail/gallery: `#썸네일/썸네일1.jpg` ~ `썸네일7.jpg`
- file count:
  - intro 1장
  - notice 1장
  - thumbnail 7장
- observed structure:
  - 상세페이지 안에 별도 numbering / alias notice 자산이 존재한다.
- layout note:
  - 이 offer는 `/offers/[slug]`에서 line-crossing bundle 설명과 numbering change notice를 분리 노출하는 것이 안전하다.

### `reset-set` RE'Set

- category: `pending_mapping`
- detail source status: `missing`
- observed structure:
  - cutout만 있고 대응 상세페이지 raw source는 확인되지 않았다.
- rule:
  - `/offers/[slug]` 상세 구현 대상에서 우선 제외한다.

## route design implication

1. `ER Toning Treatment KIT`는 protocol kit형 상세 템플릿이 필요하다.
2. `25+27`, `35+37`, `37 Duo Set`은 pair / duo형 상세 템플릿으로 묶을 수 있다.
3. `Hydrating Series`는 line-bundle형 상세 템플릿이 필요하다.
4. `Multi Booster 130`은 cross-line bundle형 상세 템플릿이 필요하다.
5. `RE'Set`은 source 부족으로 route 고정 보류 상태다.

## current limitations

1. 본 문서는 raw image 내용을 전수 판독한 카피 문서가 아니다.
2. 실제 섹션 카피, claim, FAQ, evidence는 후속 visual read 또는 별도 정리 문서가 필요하다.
3. 따라서 현재 단계에서는 file-structure-backed layout source로만 사용한다.
