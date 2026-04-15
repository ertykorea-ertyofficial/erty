# 07_VISUAL_SYSTEM_NOTES

## 목적

이 문서는 제품 패키지와 이미지 사용 규칙을 시각 시스템 관점으로 정리한 canonical input이다.
UI / visual system 에이전트는 raw cutout 대신 이 문서를 우선 본다.

## source basis

- `docs/products/VISUAL_ASSET_MAP.md`
- `docs/products/IMAGE_USAGE_GUIDE.md`
- `docs/offers/OFFER_LIBRARY_MANIFEST.md`

## core packaging notes

1. 화이트 베이스 패키지 위에 큰 숫자 타이포가 primary anchor로 작동한다.
2. 제품 번호는 시각 장식이 아니라 제품 식별 체계다.
3. first digit family에 따라 색 포인트가 바뀐다.
4. product-only cutout이 카드 기본 자산이다.

## family color notes

| family | visual cue |
| --- | --- |
| balancing | teal-green |
| hydrating | blue |
| revitalizing | red-burgundy |
| brightening / sun care | orange-gold |

## core asset classes

| class | primary use |
| --- | --- |
| product-only | product cards, grid, comparison |
| box-only | support, package info, comparison |
| combo | detail hero |
| set/unit | ampoule set explanation |
| alternate angle | detail gallery, comparison |

## layout rules

1. 카드에서는 `product-only`를 우선한다.
2. 상세 Hero에서는 `combo` 또는 `product + box` 조합을 우선한다.
3. `contain` 우선, aggressive crop 금지다.
4. 숫자, 로고, cap, base가 잘리면 안 된다.
5. 부스터 4종 `15 / 25 / 35 / 55`는 공통 카드 시스템을 공유할 수 있다.

## product vs offer separation

1. core product visual system과 offer visual system을 섞지 않는다.
2. core product는 단일 SKU 중심 cutout을 쓴다.
3. offer는 shopping bag, set board, bundle composition, protocol kit box처럼 composite visual을 쓴다.

## offer-specific notes

- `ER Toning Treatment KIT`: open kit / protocol presentation
- `25+27`, `35+37`: product + shopping bag composition
- `Hydrating Series`: line bundle board
- `Multi Booster 130`: cross-line bundle board + 4-bottle composition

## design warning

1. offer artwork의 숫자는 일부 legacy alias risk가 있다.
2. 따라서 offer artwork 숫자를 canonical product id source로 쓰지 않는다.
