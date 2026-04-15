# ERTY Design System

이 문서는 `ertyofficial.com` 메인 도메인용 ERTY 디자인 시스템의 authoritative path다.
브랜드 문서, 제품 시각 규칙, PDF 재검증 원본을 함께 읽고 정리한 구현 기준 문서다.

이 문서는 두 층으로 읽는다.

- `source-backed rule`: PDF와 내부 제품 source에서 직접 확인된 규칙
- `implementation extension`: 실제 웹 구현을 위해 확장한 운영 규칙

## source basis

- `private/source-pdf-review/markdown-pdf-version/디자인 가이드라인 (design.md).pdf`
- `docs/brand/BRAND_CORE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `docs/canonical/07_VISUAL_SYSTEM_NOTES.md`
- `docs/products/VISUAL_ASSET_MAP.md`
- `docs/products/IMAGE_USAGE_GUIDE.md`
- `docs/products/PRODUCT_TEMPLATE_CONTRACT.md`
- `docs/offers/OFFER_VISUAL_ASSET_MAP.md`

## 1. Brand Tone & Atmosphere

### source-backed rule

- ERTY는 `clinical & modern` 톤으로 읽혀야 한다.
- 친근할 수는 있지만 문장은 단정적이어야 한다.
- 제품 번호와 라인 색은 표준화된 식별 체계다.
- 메인 UI는 색을 과도하게 쓰지 않고 포인트 요소에서만 line color를 사용한다.
- 문제 정의와 구조적 설명이 제품 연출보다 앞에 와야 한다.

### implementation extension

- 메인 도메인은 “soft beauty”보다 “problem-solving dermacosmetic system”처럼 읽혀야 한다.
- 화면 무드는 차갑기보다는 차분하고 정확해야 한다.
- 과도한 luxury gloss, dreamlike beauty mood, SaaS형 네온 포인트는 피한다.
- core product와 offer/kit는 같은 카드 문법으로 취급하지 않는다.

## 2. Color Palette

### PDF-fixed tokens

| role | token | note |
| --- | --- | --- |
| Base Background | `#F7F8F9` | 거의 흰색에 가까운 밝은 회색 |
| Surface White | `#FFFFFF` | 카드, 입력 필드, 이미지 받침 |
| Primary Text | `#1A1A1A` | 기본 제목과 본문 |
| Balancing Line | `#0C6934` | 밸런싱 / 트러블 / 피지 균형 |
| Hydrating Line | `#0E5B8E` | 하이드레이팅 / 수분 |
| Revitalizing Line | `#C52331` | 리바이탈라이징 / 재생 |
| Brightening Line | `#E5B02C` | 브라이트닝 / 톤 케어 |
| Professional / Kit | `#EE6934` | 프로페셔널 / 키트 / 단계형 루틴 |

### derived support tokens

- `Border Neutral`: `#D0D4DA`
- `Disabled Fill`: `#D0D4DA`
- `Secondary Text`: `#52565C`
- `Muted Text`: `#727780`

이 4개는 PDF의 입력 필드, 비활성 버튼, 텍스트 대비 설명을 바탕으로 정리한 구현용 보조 토큰이다.

### color rules

1. line color는 제품 family signal로 사용한다.
2. 메인 배경은 `#F7F8F9`를 기준으로 유지한다.
3. 버튼, 링크, focus, chip은 현재 문맥의 라인 색을 사용할 수 있다.
4. 실제 HEX는 패키징 가이드와 충돌하면 재검토할 수 있지만, 과채도 방향으로 바꾸지 않는다.
5. color alone로 정보 전달을 끝내지 않고 숫자, 라벨, 아이콘을 함께 둔다.

## 3. Typography

### source-backed rule

- 한국어 기본 글꼴: `Pretendard` 또는 `Noto Sans KR`
- 영문 기본 글꼴: `Inter` 또는 `SF Pro`
- 타입 스케일은 `8px` 배수를 기준으로 한다.
- 예시 크기:
  - `H1 32px`
  - `H2 28px`
  - `H3 24px`
  - `Body 16px`
  - `Caption 14px`
- 본문 line-height는 기본 `1.5`
- 한 문단은 `3-5문장` 안쪽으로 유지한다.

### implementation extension

- 제품 번호는 별도 장식 폰트보다 같은 sans family의 더 강한 weight로 처리한다.
- headline은 짧고 선언형으로 유지한다.
- meta 정보와 protocol step은 size를 줄이되 contrast를 잃지 않는다.
- 별도의 display font는 브랜드 무드보드와 추가 시각 자산 검수 전까지 도입하지 않는다.

## 4. Layout & Grid

### source-backed rule

- 데스크톱은 `12-column` grid를 사용한다.
- 모바일은 `4-column` 또는 `6-column` grid로 단순화할 수 있다.
- spacing system은 `4px` 또는 `8px` 단위 기반으로 유지한다.
- 반응형 설계는 모바일 / 태블릿 / 데스크톱 기준으로 조정한다.

### implementation extension

- max content width는 `1240px`를 넘기지 않는다.
- dense copy reading width는 `720px` 안쪽으로 제어한다.
- `/products`는 `3 column desktop / 2 tablet / 1 mobile`을 기준으로 잡는다.
- `/products/[slug]`는 `identity -> problem -> mechanism -> routine -> evidence -> CTA` 순서를 유지한다.

## 5. Components

### Buttons

#### source-backed rule

- 버튼 반경은 `6-8px`
- 기본 버튼은 강조 색 배경 + 흰 텍스트
- 보더 버튼은 투명 배경 + 강조 색 보더/텍스트
- hover 시 밝기 변화는 `10%` 안팎
- 비활성 버튼은 중간 회색을 사용해 상태를 분명히 구분한다

#### implementation extension

- 전역 primary CTA는 neutral dark를 써도 되지만, line context가 명확한 영역에서는 line color variant를 우선한다.
- CTA는 제품 설명과 근거 뒤에 배치한다.
- 확정되지 않은 구매 URL은 active CTA로 가장하지 않는다.

### Product Cards

#### source-backed rule

- 구성: 이미지 영역, 제품 번호/라인 색상, 제품명, 짧은 설명, CTA
- 이미지 영역 비율은 `1:1`
- 제품 라인과 번호는 카드에서 식별 가능해야 한다

#### implementation extension

- core product card는 `product-only` cutout을 기본으로 쓴다.
- hero나 featured tile에서는 `combo` 또는 `product + box`를 허용한다.
- card hover는 미세한 shadow 증가나 border 강조로 끝낸다.

### Logo & Brand Assets

#### source-backed rule

- 공식 로고 자산이 있는 경우 text-only wordmark를 최종안으로 사용하지 않는다.
- 로고는 브랜드 식별자이며 장식이 아니다.
- 제품 시각 자산, 브랜드 자산, 누끼컷은 각 페이지 역할에 맞게 선별적으로 사용해야 한다.

#### implementation extension

- header에는 가능한 한 공식 로고 자산을 우선 적용한다.
- 홈 hero에는 브랜드 자산 또는 브랜드 무드와 맞는 공식 시각 자산을 먼저 검토한다.
- 제품 허브와 상세에서는 제품 누끼컷, 키트 상세에서는 offer visual asset grammar를 따른다.
- 임시 text-only 로고는 초기 scaffolding까지만 허용하고, preview 단계부터는 로고 원본 적용을 우선한다.

### List Cards

- 저널 / 블로그 요약용
- 이미지 + 텍스트 조합
- hover에서 그림자나 라인 색을 아주 작게 강조할 수 있다

### Form Elements

- 입력 필드 radius는 `4px` 또는 `6px`
- 배경은 `#FFFFFF`
- border는 `1px light gray`
- focus는 line color와 shadow로 표시한다

## 6. Product & Offer Image Rules

### source-backed rule

- 제품 이미지는 밝은 배경의 고해상도 누끼컷을 우선한다.
- shadow는 최소화한다.
- alt text를 제공한다.
- 아이콘은 단순한 line style을 기준으로 한다.
- Font Awesome free icon은 필요 시 사용할 수 있다.

### source-backed rule from internal product docs

- core product card image는 `product-only`를 우선한다.
- detail hero는 `combo` 또는 `product + box`를 우선한다.
- `contain`을 우선하고 aggressive crop을 금지한다.
- 숫자, 로고, cap, base는 잘리면 안 된다.
- offer/kit는 bundle composition, bag, box, board 구성을 허용한다.
- offer visual grammar를 core SKU card에 섞지 않는다.

## 7. Motion & Interaction

### source-backed rule

- page transition / modal / reveal은 `150-300ms`
- hover는 `10-15%` 밝기 변화 또는 미세한 shadow 증가
- 과도한 스크롤 애니메이션은 피한다

### implementation extension

- 모션은 정보 전달에 필요할 때만 사용한다.
- protocol step strip이나 evidence rail에서만 수평 이동을 허용한다.
- parallax, glossy blur, floating 3D motion은 사용하지 않는다.

## 8. Accessibility, Localization, Documentation

### source-backed rule

- contrast는 `WCAG AA` 이상을 유지한다.
- 모든 이미지는 alt text를 제공한다.
- 폼과 인터랙티브 요소는 키보드 접근이 가능해야 한다.
- 색상만으로 정보를 전달하지 않는다.
- 한국어를 기본으로 하고 영문/다국어는 line-height와 글꼴 크기를 조정한다.
- 디자인 토큰은 CSS 변수나 JSON 같은 공유 포맷으로 관리한다.

### implementation extension

- 제품 번호, concern, line tag는 색상과 텍스트를 함께 쓴다.
- 다국어 전환 시 숫자 체계와 라인 용어는 원 의미를 유지한다.
- 디자인 규칙이 변경되면 `DESIGN.md`와 구현 CSS 토큰을 함께 갱신한다.

## 9. Do / Don’t

### Do

- 문제를 먼저 보여주고 제품을 뒤에 둔다
- 제품 번호를 식별 구조로 사용한다
- line color를 제한적으로 사용한다
- core product와 offer 시각 문법을 분리한다
- evidence와 routine을 카드/상세 구조 안에 같이 넣는다
- 한국어 본문은 짧고 단정적인 문장으로 유지한다

### Don’t

- generic glossy beauty landing처럼 만들지 않는다
- dreamy wellness copy를 전면에 두지 않는다
- 제품 번호, 로고, cap, base를 crop하지 않는다
- core SKU 카드에 bag/box 중심 offer 비주얼을 섞지 않는다
- neon, purple-heavy, glassmorphism 중심 UI를 쓰지 않는다
- 근거가 없는 강한 claim을 CTA 앞단에 두지 않는다

## 10. Implementation Notes

1. `DESIGN.md`는 source-backed token과 구현 확장을 함께 담은 문서다.
2. PDF의 직접 규칙과 충돌하는 기존 권장값이 있으면 PDF 값을 우선한다.
3. 별도 브랜드 무드보드가 들어오면 색과 타이포 확장은 재검토할 수 있다.
4. `ertyofficial.shop`의 실제 상품 URL이 확정되기 전까지 구매 CTA 상태는 pending으로 관리한다.
