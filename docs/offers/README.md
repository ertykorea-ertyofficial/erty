# ERTY Offers / Kits Documents

## 목적

이 경로는 ERTY의 키트상품, 기획상품, 라인 번들 자산을 정리하는 기준 인덱스다.
단일 SKU 중심의 `docs/products`와 분리하여, composite offer 레이어를 독립적으로 관리한다.

## 분리 원칙

1. `docs/products`는 단일 SKU 중심의 core product library만 다룬다.
2. `docs/offers`는 세트, 번들, 프로토콜 키트, 기획상품을 다룬다.
3. 동일 제품이 offer 안에 포함되더라도, offer 자체는 별도 엔터티로 관리한다.
4. offer는 `/products/[slug]`의 하위 변형이 아니라, 별도 route 정책이 필요한 composite object다.

## 현재 수집 완료 범위

- 키트 / 기획상품 누끼컷 raw source 7개 항목
- 키트 / 기획상품 상세페이지 raw source 6개 항목
- `ER Toning Treatment KIT` 중복 source 확인
- offer / kit 분류 및 보관 전략 정리

## authoritative local path

- cutouts: `private/offers-kits/cutouts`
- detail pages: `private/offers-kits/detail-pages`

## 관련 문서

- [Offer Source Map](./OFFER_SOURCE_MAP.md)
- [Offer Library Manifest](./OFFER_LIBRARY_MANIFEST.md)
- [Offer System Audit](./OFFER_SYSTEM_AUDIT.md)
- [Offer Page Source](./OFFER_PAGE_SOURCE.md)
- [Offer Visual Asset Map](./OFFER_VISUAL_ASSET_MAP.md)
- [Product System Audit](../products/PRODUCT_SYSTEM_AUDIT.md)

## 현재 판단

- 이번 자산은 core product library에 그대로 합치면 안 된다.
- `ER Toning Treatment KIT`는 professional kit다.
- `25+27`, `35+37`, `37 Duo Set`, `Hydrating Series`, `Multi Booster 130`, `RE'Set`은 promotional set 또는 line bundle로 분리하는 것이 맞다.
