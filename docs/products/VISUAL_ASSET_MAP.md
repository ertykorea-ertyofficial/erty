# ERTY Visual Asset Map

## 목적

이 문서는 전제품 누끼컷 원본을 제품 카드, 제품 허브, 상세 레이아웃 설계용 시각 자산으로 정리한 기준 문서다.
텍스트 학습용 문서가 아니라, 어떤 이미지를 어떤 위치에 우선 배치해야 하는지 판단하기 위한 visual source map이다.

## 원본 경로

### 외부 전달 경로

- `C:\Users\gusru\OneDrive\Desktop\ERTY 자사몰 프로젝트\전제품_제품별_누끼컷`

### 프로젝트 내부 authoritative local path

- `private/product-cutouts`

## 현재 보관 범위

- 제품 폴더 15개
- 이미지 파일 69개
- `PNG` 66개
- `JPG` 3개
- 배경 제거 투명 누끼컷 다수 확인
- 박스 단독 JPG 3개:
  - `15 ... (100ml)_박스.jpg`
  - `25 ... (100ml)_박스.jpg`
  - `35 ... (100ml)_박스.jpg`

## 공통 패키지 시스템 관찰

1. 제품 패키지의 기본 베이스는 흰색이며, 큰 숫자 타이포가 가장 먼저 읽히는 시각 앵커로 작동한다.
2. 제품 번호는 제품명보다 먼저 인식되는 primary identifier로 보이며, 카드와 상세 Hero에서 잘리지 않아야 한다.
3. 첫 자리 수와 라인별 시각 시스템이 연결되어 있다. 관찰 기준으로 `11/13/15`는 teal-green, `21/23/25/27`은 blue, `35/37`은 red-burgundy, `50/55/57`은 orange 계열이다.
4. single digit 제품 `1`, `2`, `3`은 묶음 라인보다는 독립적인 퍼펙트 시리즈로 보이며, `2`는 블루 계열, `1`과 `3`은 상대적으로 모노톤에 가까운 중립 베이스를 가진다.
5. 대부분의 제품 이미지는 세로 비율이 매우 긴 투명 배경 누끼컷이다. 카드와 상세 섹션은 이 세로 비율을 전제로 설계해야 한다.
6. 자산 클래스는 `product-only`, `box-only`, `combo`, `set/unit`, `alternate angle`로 정리할 수 있다.

## 자산 클래스 정의

| 자산 클래스 | 정의 | 우선 사용 위치 |
| --- | --- | --- |
| Product Only | 본품만 보이는 누끼컷 | 제품 카드, 제품 허브, 비교 그리드 |
| Box Only | 박스만 보이는 누끼컷 | 패키지 정보 보조 섹션, 변형/용량 비교 |
| Combo | 본품과 박스를 한 프레임에 함께 보여주는 누끼컷 | 상세 Hero, 첫 인상 비주얼 |
| Set / Unit | 낱개 바이알, 세트 구성 등 spread 성격 컷 | 세트 설명, 구성품 안내, 메커니즘 보조 |
| Alternate Angle | 동일 제품의 다른 각도 / 다른 포즈 / 다른 사이즈 | 상세 갤러리, 비교, 보조 컷 |

## 번호 체계 반영 기준

### 첫 자리 수

- `1x`: balancing 계열로 연결되는 teal-green 시스템
- `2x`: hydrating 계열로 연결되는 blue 시스템
- `3x`: revitalizing 계열로 연결되는 red-burgundy 시스템
- `5x`: brightening / sun care 계열로 연결되는 orange 시스템

### 두 번째 자리 수

- `1`: cleanser 계열
- `3`: tonic / toner / lotion 계열
- `5`: concentrated booster 계열
- `7`: cream 계열
- `0`: sun care 단일 제품

위 분류는 제품명, 패키지 표기, 제품 정의 문서를 함께 대조한 결과이며, 카드와 상세 레이아웃에서 숫자 자체를 제품 식별 키로 적극 활용해야 한다.

## 제품별 자산 맵

### [1] Perfect Soothing Solution

- 파일 범위:
  - `140ml ... _제품1`
  - `140ml ... _제품2`
  - `50ml ... _제품`
- 자산 구성:
  - Product Only 3개
- 권장 대표 자산:
  - 제품 카드: `50ml ... _제품`
  - 상세 / 비교: `140ml ... _제품1`
- 패키지 표기 포인트:
  - 대형 숫자 `1`
  - 퍼펙트 시리즈의 독립형 패키지 시스템
  - 50ml / 140ml 사이즈 구분 가능
- 설계 메모:
  - 박스 자산이 없으므로 카드와 상세 모두 본품 중심으로 설계한다.
  - 140ml 이중 컷은 상세 상단과 사이즈 비교 보조 컷으로 쓰기 좋다.

### [11] Cleansing Gel for Skin Balancing

- 파일 범위:
  - `150ml 박스 / 제품 / 제품2`
  - `480ml 박스 / 제품1 / 제품2`
- 자산 구성:
  - Box Only 2개
  - Product Only 4개
- 권장 대표 자산:
  - 제품 카드: `150ml ... _제품`
  - 상세 Hero: `480ml ... _제품1` + `480ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `11`
  - teal-green balancing 계열 포인트
  - 150ml / 480ml 용량 구분이 패키지 전면에 드러남
- 설계 메모:
  - 카드에서는 150ml 본품을 기본 표준으로 쓰고, 대용량 480ml는 상세 비교용으로 배치한다.

### [13] Purifying for Skin Balancing

- 파일 범위:
  - `140ml 박스 / 제품1 / 제품2`
  - `480ml 박스 / 제품1 / 제품2`
- 자산 구성:
  - Box Only 2개
  - Product Only 4개
- 권장 대표 자산:
  - 제품 카드: `140ml ... _제품1`
  - 상세 Hero: `480ml ... _제품1` + `480ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `13`
  - teal-green balancing 계열 포인트
  - 140ml / 480ml 사이즈 체계
- 설계 메모:
  - 11과 같은 카드 비율을 유지하되, cleanser와 toner가 혼동되지 않도록 제품 타입 텍스트를 함께 고정한다.

### [15] Concentrated Booster for Skin Balancing

- 파일 범위:
  - `30ml 박스 / 제품`
  - `100ml 박스.jpg / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 2개
- 권장 대표 자산:
  - 제품 카드: `30ml ... _제품`
  - 상세 Hero: `100ml ... _제품` + `100ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `15`
  - teal-green balancing booster 계열
  - 30ml / 100ml 이원 구조
- 설계 메모:
  - 100ml 박스는 JPG라서 투명 배경 일관성을 따로 확인한 뒤 사용한다.

### [2] Perfect N.Cell Ampoule

- 파일 범위:
  - `10pcs 박스 / 제품 / 제품낱개1 / 제품낱개2`
  - `5pcs 제품 / 제품낱개1 / 제품낱개2`
- 자산 구성:
  - Box Only 1개
  - Product / Set 2개
  - Set / Unit 4개
- 권장 대표 자산:
  - 제품 카드: `5pcs ... _제품`
  - 상세 Hero: `10pcs ... _제품`
  - 구성 설명: `... _제품낱개1`, `... _제품낱개2`
- 패키지 표기 포인트:
  - 대형 숫자 `2`
  - 퍼펙트 시리즈 중 세트형 구조가 가장 강한 제품
  - 5pcs / 10pcs 구성이 제품 이해에 중요
- 설계 메모:
  - 이 제품은 일반 tube/bottle과 다르게 set / unit 구성이 핵심이다.
  - 카드에서는 5pcs 대표 컷을 고정하고, 상세에서만 vial spread를 확장 사용한다.

### [21] Cleansing Milk for Skin Hydrating

- 파일 범위:
  - `150ml 박스 / 제품1 / 제품2`
  - `480ml 박스 / 제품1 / 제품2 / 제품3`
- 자산 구성:
  - Box Only 2개
  - Product Only 5개
- 권장 대표 자산:
  - 제품 카드: `150ml ... _제품1`
  - 상세 Hero: `480ml ... _제품1` + `480ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `21`
  - blue hydrating 계열 포인트
  - 펌프형 본품 실루엣
- 설계 메모:
  - `480ml`에는 제품 각도 3종이 있어 상세 갤러리 확장이 쉽다.

### [23] Tonic Lotion for Skin Hydrating

- 파일 범위:
  - `140ml 박스 / 제품1 / 제품2`
  - `480ml 박스 / 제품1 / 제품2`
- 자산 구성:
  - Box Only 2개
  - Product Only 4개
- 권장 대표 자산:
  - 제품 카드: `140ml ... _제품1`
  - 상세 Hero: `480ml ... _제품1` + `480ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `23`
  - blue hydrating 계열 포인트
  - tonic / lotion 병형 실루엣
- 설계 메모:
  - 21과 같은 라인 룰을 공유하되, 제품 타입 문구를 반드시 분리 표기한다.

### [25] Concentrated Booster for Skin Hydrating

- 파일 범위:
  - `30ml 박스 / 제품`
  - `100ml 박스.jpg / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 2개
- 권장 대표 자산:
  - 제품 카드: `30ml ... _제품`
  - 상세 Hero: `100ml ... _제품` + `100ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `25`
  - dark navy에 가까운 hydrating booster 포인트
- 설계 메모:
  - 15 / 35 / 55와 동일 부스터 템플릿을 공유할 수 있다.

### [27] Derma Hydro-AQUAX Cream

- 파일 범위:
  - `50ml 박스 / 제품1 / 제품2`
  - `100ml 박스 / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 3개
- 권장 대표 자산:
  - 제품 카드: `50ml ... _제품1`
  - 상세 Hero: `100ml ... _제품` + `100ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `27`
  - blue hydrating cream 계열
  - 50ml / 100ml 확장 구조
- 설계 메모:
  - 카드에서는 50ml 튜브가 가장 균형이 좋다.
  - 100ml는 상세 상단에서 용량 확장 메시지와 함께 쓰기 좋다.

### [3] Perfect Spucule Formulation

- 파일 범위:
  - `20ml 제품`
- 자산 구성:
  - Product Only 1개
- 권장 대표 자산:
  - 제품 카드 / 상세 Hero 공통: `20ml ... _제품`
- 패키지 표기 포인트:
  - 대형 숫자 `3`
  - single digit perfect series의 독립형 패키지
- 설계 메모:
  - 자산이 1개뿐이라 과사용을 피해야 한다.
  - 상세에서는 텍스트, 아이콘, 재질 설명 블록 같은 보조 레이어가 필요하다.

### [35] Concentrated Booster for Skin Revitalizing

- 파일 범위:
  - `30ml 박스 / 제품`
  - `100ml 박스.jpg / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 2개
- 권장 대표 자산:
  - 제품 카드: `30ml ... _제품`
  - 상세 Hero: `100ml ... _제품` + `100ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `35`
  - red-burgundy revitalizing booster 계열
- 설계 메모:
  - 15 / 25 / 55와 동일한 부스터 카드 규격을 공유할 수 있다.

### [37] Intensive Cellular ER Cream

- 파일 범위:
  - `20ml 박스 / 제품1 / 제품2`
  - `45ml 박스 / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 3개
- 권장 대표 자산:
  - 제품 카드: `45ml ... _제품`
  - 상세 Hero: `45ml ... _제품` + `45ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `37`
  - red-burgundy revitalizing cream 계열
  - 20ml / 45ml 두 사이즈를 같이 보여줄 수 있음
- 설계 메모:
  - 45ml 단독 제품 컷이 대표성이 가장 강하다.
  - 20ml는 서브 규격 비교용으로 쓰는 편이 자연스럽다.

### [50] Sun Cream

- 파일 범위:
  - `박스`
  - `제품`
  - `박스+제품`
- 자산 구성:
  - Box Only 1개
  - Product Only 1개
  - Combo 1개
- 권장 대표 자산:
  - 제품 카드: `... _제품`
  - 상세 Hero: `... _박스+제품`
- 패키지 표기 포인트:
  - 대형 숫자 `50`
  - orange brightening / sun care 계열
  - 단일 SKU 구조
- 설계 메모:
  - 이 폴더에서 `박스+제품` 조합이 있는 유일한 제품이다.
  - 상세 첫 화면에서 포장과 본품을 한 번에 보여주기 가장 쉽다.

### [55] Concentrated Booster for Skin Brightening

- 파일 범위:
  - `30ml 박스 / 제품`
  - `100ml 박스 / 제품`
- 자산 구성:
  - Box Only 2개
  - Product Only 2개
- 권장 대표 자산:
  - 제품 카드: `30ml ... _제품`
  - 상세 Hero: `100ml ... _제품` + `100ml ... _박스`
- 패키지 표기 포인트:
  - 대형 숫자 `55`
  - orange brightening booster 계열
- 설계 메모:
  - 15 / 25 / 35와 통합 템플릿을 쓰되, 색 포인트만 차별화한다.

### [57] Melaway Brightening Cream

- 파일 범위:
  - `박스1 / 박스2`
  - `제품1 / 제품2`
- 자산 구성:
  - Box Only 2개
  - Product Only 2개
- 권장 대표 자산:
  - 제품 카드: `... _제품1`
  - 상세 Hero: `... _제품1` + `... _박스1`
- 패키지 표기 포인트:
  - 대형 숫자 `57`
  - orange brightening cream 계열
- 설계 메모:
  - 박스 2종과 제품 2종이 모두 있어 앞면 중심 컷과 각도 컷을 분리 운용할 수 있다.
  - 상세에서는 depth가 필요한 구간에 angled cut을 쓰고, 카드에서는 정면 중심 컷으로 고정한다.

## 설계 상 주의사항

1. 카드용 대표 컷은 한 제품당 하나로 고정한다.
2. 카드에서는 가능하면 `Product Only`만 사용한다.
3. 상세 상단 Hero는 가능하면 `Combo` 또는 `Product Only + Box Only` 조합으로 설계한다.
4. 숫자 타이포와 로고가 잘리지 않도록 aggressive crop을 피한다.
5. 자산이 1개뿐인 제품은 텍스트, 배경 그래픽, 메커니즘 다이어그램 같은 보조 레이어를 별도로 준비한다.
6. booster 4종 `15 / 25 / 35 / 55`는 동일 레이아웃 시스템을 공유하고 색과 텍스트만 차별화하는 방식이 효율적이다.
