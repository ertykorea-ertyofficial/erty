# 03_PRODUCT_LINE_MASTER

## 목적

이 문서는 라인별 제품 구성을 에이전트가 바로 사용할 수 있도록 정리한 canonical master다.

## source basis

- `docs/brand/BRAND_POSITIONING.md`
- `docs/canonical/02_PRODUCT_NUMBERING_SYSTEM.md`
- `private/product-docs/korean/products/*.md`

## line master summary

| line_id | line_name | core role | core products |
| --- | --- | --- | --- |
| `protocol-step` | Perfect Protocol Steps | 단계형 트리트먼트 프로토콜 | `01`, `02`, `03` |
| `balancing` | Skin Balancing | 진정, 피지, 유수분 밸런스 | `11`, `13`, `15` |
| `hydrating` | Skin Hydrating | 수분, 보습, 장벽 유지 | `21`, `23`, `25`, `27` |
| `revitalizing` | Skin Revitalizing | 재생, 탄력, 장벽 회복 | `35`, `37` |
| `brightening` | Skin Brightening / Sun Care | 안색, 미백, 광채, UV 보호 | `50`, `55`, `57` |

## line details

### protocol-step

- 역할:
  - 단계형 프로그램
  - 프로토콜 기반 사용 순서 설명
- 구성:
  - `01 Perfect Soothing Solution 1`
  - `02 Perfect N.Cell Ampoule`
  - `03 Perfect Spicule Formulation`
- 핵심 해석:
  - 단일 라인보다 step logic이 더 중요하다

### balancing

- 역할:
  - 진정
  - 피지 / 각질 / 밸런스 케어
- 구성:
  - `11` cleanser
  - `13` toner
  - `15` booster
- 연결 고민:
  - 트러블
  - 과잉 피지
  - 유수분 불균형

### hydrating

- 역할:
  - 수분 공급
  - 보습 유지
  - 약해진 장벽 보호
- 구성:
  - `21` cleanser
  - `23` tonic lotion
  - `25` booster
  - `27` cream
- 연결 고민:
  - 건조
  - 민감
  - 장벽 약화

### revitalizing

- 역할:
  - 재생
  - 탄력
  - 장벽 회복
- 구성:
  - `35` booster
  - `37` cream
- 연결 고민:
  - 탄력 저하
  - 재생
  - 손상 피부 컨디션 회복

### brightening

- 역할:
  - 안색
  - 미백
  - 광채
  - UV protection
- 구성:
  - `50` sun cream
  - `55` booster
  - `57` cream
- 연결 고민:
  - 칙칙함
  - 불균일한 톤
  - 자외선 방어

## line-to-layout notes

1. `/products`는 line-first 구조가 맞다.
2. protocol-step 제품은 별도 module 또는 treatment entry block으로 다루는 편이 자연스럽다.
3. hydrating / revitalizing / brightening은 line card와 concern mapping 양쪽에 모두 연결 가능하다.
