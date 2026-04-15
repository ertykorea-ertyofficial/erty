# ERTY Offer Visual Asset Map

## 목적

이 문서는 키트상품 / 기획상품의 누끼컷과 상세페이지 시각 자산을 디자인 시스템 관점에서 정리한 문서다.
`/offers` 카드, `/offers/[slug]` hero, gallery, notice block, bundle preview 설계를 위한 visual source note로 사용한다.

## source basis

- `private/offers-kits/cutouts/키트상품 및 기획상품 누끼컷`
- `private/offers-kits/detail-pages`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`
- `docs/offers/OFFER_PAGE_SOURCE.md`

## visual asset classes

| asset_class | meaning | evidence |
| --- | --- | --- |
| `offer-box-only` | 박스 또는 패키지 단독 컷 | `37듀오세트_박스.png`, `하이트레이팅시리즈_박스.png`, `리셋세트_박스.png` |
| `offer-product-packshot` | 실제 구성품이 함께 보이는 hero용 pack shot | `이알 퍼펙션 토닝 트리트먼트 키트_제품.png`, `멀티부스터130_제품+박스.png` |
| `offer-bag-only` | 쇼핑백 또는 패키지백 단독 컷 | `수분세트_쇼핑백.png`, `환생세트_쇼핑백.png` |
| `offer-product-with-bag` | 제품 + 쇼핑백 결합 컷 | `수분세트_제품+쇼핑백.png`, `환생세트_제품+쇼핑백.png` |
| `offer-intro-longform` | 세로형 상세 hero / summary strip | `*_intro.*`, `ER Toning Treatment KIT_1/2.jpg` |
| `offer-thumb-gallery` | 상세 썸네일 / 설명 슬라이드 | `#썸네일`, `썸네일` 하위 폴더 |
| `offer-notice-graphic` | numbering / alias / 운영 공지 시각 자산 | `숫자변경 안내.png` |

## cutout asset map

| logical_id | cutout source status | available cutout classes | primary card visual | support visual | notes |
| --- | --- | --- | --- | --- | --- |
| `er-toning-treatment-kit` | `confirmed` | `offer-box-only`, `offer-product-packshot` | `offer-product-packshot` | `offer-box-only` | 제품 구성과 kit identity를 함께 보여줄 수 있음 |
| `hydration-25-27-set` | `confirmed` | `offer-bag-only`, `offer-product-with-bag` | `offer-product-with-bag` | `offer-bag-only` | pair set형 카드에 적합 |
| `revival-35-37-set` | `confirmed` | `offer-bag-only`, `offer-product-with-bag` | `offer-product-with-bag` | `offer-bag-only` | pair set형 카드에 적합 |
| `37-duo-set` | `confirmed` | `offer-box-only` | `offer-box-only` | none | cutout 기준 제품 개별 실루엣은 없음 |
| `hydrating-series-set` | `confirmed` | `offer-box-only` | `offer-box-only` | none | line bundle identity 중심 |
| `multi-booster-130` | `confirmed` | `offer-product-packshot` | `offer-product-packshot` | none | line-crossing bundle identity가 명확 |
| `reset-set` | `confirmed` | `offer-box-only` | `offer-box-only` | none | detail source 부재 |

## detail asset map

| logical_id | detail pattern | intro asset | gallery count | special asset | visual interpretation |
| --- | --- | --- | --- | --- | --- |
| `er-toning-treatment-kit` | longform body + square thumbnails | `ER Toning Treatment KIT_1/2.jpg` | 2 | none | 세로형 프로토콜 설명 중심 |
| `hydration-25-27-set` | intro + thumbnail gallery | `수분세트_intro.jpg` | 9 | none | pair set 설명형 구성 |
| `revival-35-37-set` | intro + thumbnail gallery | `환생세트_intro.jpg` | 9 | none | pair set 설명형 구성 |
| `37-duo-set` | intro + short gallery | `37 DOU SET_intro.jpg` | 3 | none | compact offer 구성 |
| `hydrating-series-set` | PNG intro + PNG gallery | `Hydrating Series_Intro.png` | 5 | none | line bundle 구성 안내 |
| `multi-booster-130` | intro + gallery + notice | `멀티부스터130_intro.jpg` | 7 | `숫자변경 안내.png` | bundle 설명과 numbering notice 분리 가능 |
| `reset-set` | none | none | 0 | none | detail source 없음 |

## observed dimension notes

현재 직접 확인된 대표 자산 비율은 아래와 같다.

1. cutout hero 계열은 대체로 2000px 이상 원본 PNG가 있다.
   - `이알 퍼펙션 토닝 트리트먼트 키트_제품.png`: `3832 x 3470`
   - `멀티부스터130_제품+박스.png`: `3091 x 2233`
2. bag/box 단독 컷은 세로 비율이 강하다.
   - `수분세트_쇼핑백.png`: `571 x 878`
   - `37듀오세트_박스.png`: `922 x 2375`
   - `리셋세트_박스.png`: `1695 x 2398`
3. detail intro 자산은 주로 `1000 x 5000` longform이다.
   - `수분세트_intro.jpg`
   - `환생세트_intro.jpg`
4. detail thumbnail은 주로 `1000 x 1000` 정사각형이다.
5. `ER Toning Treatment KIT` 본문은 예외적으로 매우 긴 세로형이다.
   - `860 x 14065`
   - `860 x 10293`

## offer layout rules

1. `/offers` 카드의 1순위는 `offer-product-packshot` 또는 `offer-product-with-bag`다.
2. product pack shot이 없는 오퍼는 `offer-box-only`를 대표 카드로 쓴다.
3. `offer-bag-only`는 support visual로만 쓰고, primary card visual로는 후순위다.
4. `ER Toning Treatment KIT`는 product pack shot을 hero primary로 두고 box-only를 support로 둔다.
5. `Multi Booster 130`은 `숫자변경 안내.png`를 hero가 아니라 notice / disclosure block에 둔다.
6. `37 Duo Set`, `Hydrating Series`, `RE'Set`은 cutout 기준 내부 구성 실루엣이 충분하지 않으므로, card와 hero에서 “박스형 오퍼”로 처리하는 편이 안전하다.
7. square crop 강제 금지다. 박스 상단, 번호, 로고, bag handle이 잘리지 않아야 한다.

## implementation notes

1. `/offers` 카드 리스트는 core product card와 다른 비주얼 규칙을 써야 한다.
2. offer card는 단일 제품 중심보다 bundle identity가 먼저 읽혀야 한다.
3. `pair-set`, `line-bundle`, `cross-line-bundle`, `professional-kit`은 서로 다른 hero treatment를 갖는 것이 자연스럽다.
4. `RE'Set`은 cutout만 존재하므로 상세 라우트 진입보다는 placeholder 또는 hidden 상태가 안전하다.

## current limitations

1. 본 문서는 raw visual content를 전수 판독한 art direction 문서는 아니다.
2. 실제 카피 오버레이와 상세 섹션 문장은 후속 visual read 또는 운영자 검수가 필요하다.
3. 현재 단계에서는 “자산 타입과 배치 규칙”을 고정하는 용도로만 사용한다.
