# HOME V7 Asset Map

## 목적

- HOME V7에서 실제로 사용하는 시각 자산과 제거 대상 자산을 고정한다.
- 브랜드 프론트 기준으로 `owned visual only` 원칙을 유지한다.

## 사용 자산

### Hero Background

- 파일: `assets/images/brand/home/v7/hero-products-background.png`
- 원본: `C:\Users\gusru\OneDrive\Desktop\홈 이미지\제품 종합컷.png`
- 역할: hero background atmosphere layer
- 사용 방식:
  - low-opacity background only
  - grayscale / soften / blur 처리
  - foreground object나 쇼핑 배너처럼 보이면 안 됨

### Featured SKU

- `assets/images/brand/home/products/37-er-cream.png`
- `assets/images/brand/home/products/27-hydro-cream.png`
- `assets/images/brand/home/products/55-brightening-booster.png`
- `assets/images/brand/home/products/11-cleansing-gel.png`
- 역할:
  - 37 = featured hero SKU
  - 27 / 55 = support object card
  - 11 = slim support start point

### Footer Artifact

- 이미지 사용 안 함
- numbering guide close-up은 HTML/CSS artifact로만 구현

## 제거 자산

- `assets/images/brand/home/v6/skin-texture.jpg`
  - HOME V7에서는 사용하지 않음
- `assets/images/brand/home/v6/erty-model-editorial.jpg`
  - HOME V7에서는 사용하지 않음
- model / body crop / stock-like beauty mood asset
  - HOME V7 전체에서 금지

## 원칙

- hero / evidence / footer 모두 product-first commercial image가 아니라 owned atmosphere로 읽혀야 한다.
- 배경 이미지는 구조를 돕는 역할만 하며, H1과 CTA보다 먼저 보이면 실패다.
- line color는 이미지가 아니라 UI 구조 언어로만 강화한다.
