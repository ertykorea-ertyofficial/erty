# ERTY Official Project Brief

## 문서 목적

이 문서는 `ertyofficial.com` 프로젝트의 기준 설명문이다.
프로젝트 방향, 도메인 역할, 기술 원칙, 현재 상태를 한 곳에 고정한다.
새로운 의사결정이 생기면 이 문서를 먼저 갱신하고, 다른 문서는 이 문서를 기준으로 따라간다.

## 프로젝트 정의

ERTY 프로젝트는 단순 쇼핑몰 제작이 아니라, 브랜드 해석 구조와 검색 점유 구조를 가진 엔진형 자사몰 구축 프로젝트다.

- 메인 도메인: `ertyofficial.com`
- 쇼핑 도메인: `ertyofficial.shop`
- 메인 프론트 인프라: Cloudflare
- 쇼핑 엔진: Cafe24
- 프론트 기본 스택: HTML, CSS, JavaScript

## 도메인 역할 분리

### `ertyofficial.com`

브랜드·콘텐츠·SEO/GEO 전용 메인 프론트다.

- 브랜드 공식 프론트
- 브랜드 철학 및 해석 구조 제시
- 제품을 브랜드 관점에서 설명하는 콘텐츠 허브
- 검색 및 AI 환경에서 인용 가능한 구조화 정보 축적
- Evidence Layer, Narrative Layer, Journal Layer, Search Landing Layer의 중심축

### `ertyofficial.shop`

쇼핑 엔진 전용 독립 도메인이다.

- 상품 구매
- 장바구니
- 결제
- 주문 및 배송
- 프로모션 처리

## 프로젝트 목적 함수

1. 브랜드 공식 해석 구조 구축
2. 외부 데이터를 브랜드 자산으로 회수
3. SEO/GEO 대응 가능한 정보 구조 설계
4. 메인 도메인에서 신뢰 형성 후 쇼핑 도메인으로 전환 연결
5. 장기적으로 다국어 및 글로벌 확장 가능 구조 확보

## 핵심 원칙

1. 브랜드 사이트와 쇼핑몰의 역할을 분리한다.
2. 제품보다 먼저 해석 구조를 제시한다.
3. 검색과 AI 환경에서 읽히는 구조를 만든다.
4. HTML 구조와 정보 구조를 가볍고 명확하게 유지한다.
5. 모든 페이지는 역할이 명확해야 한다.

## 개발 원칙

### 프레임워크

- 초기 단계는 HTML / CSS / JS 기반
- React 등 무거운 프레임워크는 초기 도입 금지
- SPA 구조로 복잡화하지 않음

### SEO / 구조

- semantic HTML 필수
- 페이지당 `h1` 1개 유지
- 텍스트 중심 구조
- 섹션 단위 컴포넌트화
- 재사용 가능한 구조 우선

### 성능

- 불필요한 JS 금지
- 이미지 lazy load
- 속도, 명확성, 유지보수성 우선

### 코드 원칙

- authoritative path는 하나만 유지
- fallback은 최소 1계층만 유지
- 실패 이유는 사람이 읽을 수 있게 정확히 남긴다
- 민감 데이터는 GitHub에 올리지 않는다

## 메인 도메인 IA

### 확정된 주요 경로

- `/`
- `/philosophy`
- `/products`
- `/products/[product-slug]`
- `/evidence`
- `/journal`
- `/skin-concerns`
- `/global`

### 추가 후보 경로

- `/brand` 또는 `/about`
- `/contact`

## 페이지 역할

- `/`: 브랜드 정의와 전체 허브
- `/philosophy`: 브랜드 철학과 세계관
- `/products`: 제품 해석 허브
- `/products/[product-slug]`: 제품 설명, 신뢰 형성, 구매 연결
- `/evidence`: 후기, 반응, 언급, 신뢰 자산 회수
- `/journal`: SEO/GEO 중심 콘텐츠 허브
- `/skin-concerns`: 검색 랜딩용 피부 고민 허브
- `/global`: 향후 확장용 정보 허브

## 초기 범위

- 메인 프론트 폴더 구조 생성
- 정적 프론트 스캐폴드 생성
- 홈 페이지 설계
- 철학 페이지 설계
- 제품 허브 및 제품 상세 설계
- 저널 및 피부 고민 페이지 설계

## 현재 구현 상태

### 완료

- 정적 프론트 기본 스캐폴드 생성 완료
- Git 저장소 초기화 및 원격 반영 완료
- 기존 `shop.ertyofficial.com` 실험 이력 정리
- 1차 브랜드 기준 문서 수집 완료:
  - `BRAND_CORE`
  - `BRAND_LANGUAGE_RULE`
  - `BRAND_POSITIONING`
- 원본 브랜드 자산 로컬 보관 완료:
  - 로고 원본 6개
  - 브랜드 스토리 / 제품 넘버링 원본 3개
  - 국가별 전제품 소개서 PDF 5개
- 제품 정의 문서 로컬 보관 완료:
  - 제품별 정의 문서 15개
  - `PRODUCT_MECHANISM`
  - `PRODUCT_CLAIM_RULE`
- 제품별 기술 소개서 PDF 로컬 보관 완료:
  - PDF 15개
- 제품별 상세페이지 이미지 로컬 보관 완료:
  - 폴더 16개
- 상세페이지 기반 source 문서 작성 완료:
  - `PRODUCT_PAGE_SOURCE`
  - `CTA_SOURCE`
  - `FAQ_SOURCE`
  - `EVIDENCE_SOURCE`
- 제품별 누끼컷 로컬 보관 완료:
  - 폴더 15개
- 누끼컷 기반 시각 자산 문서 작성 완료:
  - `VISUAL_ASSET_MAP`
  - `IMAGE_USAGE_GUIDE`
- 키트 / 기획상품 누끼컷 로컬 보관 완료:
  - 항목 7개
- 키트 / 기획상품 상세페이지 로컬 보관 완료:
  - 항목 6개
- 키트 / 기획상품 정리 문서 작성 완료:
  - `docs/offers/README`
  - `OFFER_SOURCE_MAP`
  - `OFFER_LIBRARY_MANIFEST`
  - `OFFER_SYSTEM_AUDIT`

### 진행 보류

- Cafe24 내부 정책상 `shop.ertyofficial.com` 방식은 사용하지 않기로 결정
- 쇼핑 도메인은 `ertyofficial.shop`으로 변경
- `ertyofficial.shop`을 Cafe24 메인 쇼핑 도메인으로 치환 / 연결하는 작업이 남아 있음
- 브랜드 무드보드와 추가 제품 상세 원본 자료는 아직 미수집

## 현재 확인된 인프라 상태

### Cloudflare

- zone: `ertyofficial.com`
- authoritative NS: `mina.ns.cloudflare.com`, `tony.ns.cloudflare.com`
- `ertyofficial.com`은 메인 브랜드 프론트용으로 유지
- 쇼핑 엔진은 별도 도메인 `ertyofficial.shop` 전략으로 분리

### Cafe24

- `ertyofficial.com`을 Cafe24 대표 쇼핑 도메인으로 전환하지 않음
- Cafe24 쇼핑 엔진 도메인은 `ertyofficial.shop`으로 운영
- `ertyofficial.shop` 연결 상태 및 설정 여부는 별도 확인 필요

## 지금 시점의 운영 판단

1. `ertyofficial.com`을 Cafe24 대표 도메인으로 전환하지 않는다.
2. `ertyofficial.com`은 메인 브랜드 프론트 용도로 유지한다.
3. 쇼핑 엔진은 `ertyofficial.shop`으로 분리 운영한다.
4. `ertyofficial.shop`의 Cafe24 연결 상태를 별도로 관리한다.

## 미확정 항목

- `/brand`와 `/about` 중 표준 경로
- `/contact`의 구체적 역할 범위
- 제품 slug 규칙
- `/global`의 실제 콘텐츠 범위
- `ertyofficial.shop`의 실제 Cafe24 연결 / 대표도메인 설정 상태
- `ertyofficial.shop`의 DNS / SSL / 운영 반영 상태

## 다음 작업

1. 프로젝트 설명문 고정
2. 메인 도메인 단계별 페이지 설계
3. 홈 페이지부터 실제 마크업 구현
4. `ertyofficial.shop` Cafe24 연결 상태 확인 및 고정
