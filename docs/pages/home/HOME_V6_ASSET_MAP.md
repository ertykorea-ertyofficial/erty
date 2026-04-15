# HOME V6 Asset Map

## 원칙

- Hero는 `오브제 우선`
- `에르띠 모델.jpg`는 hero main에 사용하지 않음
- `제품 종합컷.png`는 HOME에서 사용하지 않음
- 모든 이미지는 `브랜드 무드 보강`용이며, 쇼핑몰 배너처럼 보이면 실패

## Authoritative Assets

### Hero atmosphere layer

- source: `C:\Users\ERTY OFFICIAL PROJECT\assets\images\brand\home\v6\skin-texture.jpg`
- role: hero의 low-contrast atmosphere layer
- treatment:
  - desaturate
  - low opacity
  - cropped close-up
  - blur / overlay white veil
- forbidden:
  - full bleed lifestyle image
  - strong skin-photo recognition
  - text readability를 해치는 contrast

### Hero still-life objects

- source:
  - `assets/images/brand/home/products/27-hydro-cream.png`
  - `assets/images/brand/home/products/37-er-cream.png`
  - `assets/images/brand/home/products/55-brightening-booster.png`
- role: hero foreground editorial still life
- hierarchy:
  - `37` main object
  - `27` secondary left object
  - `55` secondary right object
- treatment:
  - no catalog lineup
  - overlap 허용
  - height stagger 허용
  - weak shadow only
  - negative space 확보

### Evidence artifact

- source: `assets/images/brand/home/v6/skin-texture.jpg`
- role: evidence snapshot 옆 또는 아래의 cropped editorial artifact
- treatment:
  - small plate
  - research note처럼 보이게 사용
  - proof strip보다 더 강하게 읽히면 안 됨

### Footer-adjacent editorial crop

- source: `assets/images/brand/home/v6/erty-model-editorial.jpg`
- role: footer 직전 또는 footer 내부의 small editorial crop
- treatment:
  - subtle
  - low-contrast
  - brand asset tone
  - model-led hero처럼 보이면 안 됨

## Rejected for HOME V6

- source: `C:\Users\gusru\OneDrive\Desktop\홈 이미지\제품 종합컷.png`
- reason:
  - offer / kit composite처럼 읽힘
  - HOME를 commerce / bundle page처럼 보이게 만들 위험이 큼
  - brand-first index 무드를 해침

## Color Accent Placement

- allowed:
  - top micro rules
  - section dividers
  - SKU labels
  - system map left rails
  - statistic highlight
  - FAQ dot/icon
  - CTA hover/focus ring
  - footer micro accents
- forbidden:
  - full color background fill
  - large decorative gradient
  - color block hero

## Surface Grammar

- Hero: scene-first editorial frame
- Featured SKU: `1 featured + 3 supporting`
- Evidence Snapshot: proof strip / stat tile rail
- System Map: refined ledger / taxonomy board
- Next Layers: quiet route-entry cards
- FAQ: low-weight accordion
- Footer: brand signature field
