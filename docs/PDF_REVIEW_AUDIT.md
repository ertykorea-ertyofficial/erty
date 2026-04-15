# PDF Review Audit

## 목적

이 문서는 링크형 자료를 PDF로 재검증한 뒤, 어떤 tracked 문서에 무엇을 반영했는지 기록하는 감사 문서다.
다음 세션에서 “링크 기반 자료가 실제로 어디까지 적용됐는가”를 추측하지 않도록 하기 위해 작성한다.

## authoritative source

- `private/source-pdf-review/markdown-pdf-version/BRAND_CORE.md (한국어 버전).pdf`
- `private/source-pdf-review/markdown-pdf-version/BRAND_LANGUAGE_RULE.md (한국어 버전).pdf`
- `private/source-pdf-review/markdown-pdf-version/BRAND_POSITIONING.md (한국어 버전).pdf`
- `private/source-pdf-review/markdown-pdf-version/PRODUCT_CLAIM_RULE.md (한국어 버전).pdf`
- `private/source-pdf-review/markdown-pdf-version/PRODUCT_MECHANISM.md (한국어 버전).pdf`
- `private/source-pdf-review/markdown-pdf-version/디자인 가이드라인 (design.md).pdf`

## review method

1. PDF 본문 텍스트 추출
2. 디자인 가이드 PDF 3개 페이지 이미지 렌더 후 시각 검토
3. 현재 tracked 문서와 대조
4. source-backed 내용만 반영
5. 파생 권장안은 `implementation extension`으로만 표기

## applied targets

### brand docs

- `docs/brand/BRAND_CORE.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `docs/brand/BRAND_POSITIONING.md`
- `docs/brand/BRAND_SOURCE_MAP.md`
- `docs/brand/README.md`

### product docs

- `docs/products/PRODUCT_CLAIM_RULE.md` 신규 생성
- `docs/products/PRODUCT_MECHANISM.md` 신규 생성
- `docs/products/PRODUCT_SOURCE_MAP.md`
- `docs/products/README.md`

### canonical docs

- `docs/canonical/05_EVIDENCE_CLAIM_BANK.md`
- `docs/canonical/04_TREATMENT_PROTOCOL_MASTER.md`

### root docs

- `DESIGN.md`
- `README.md`
- `docs/SESSION_HANDOFF.md`

## key corrections applied

### 1. brand docs source correction

- 이전 링크 기반 source 표기를 로컬 PDF authoritative source로 교체했다.
- 브랜드 정의, 언어 규칙, 포지셔닝 문서는 PDF에서 직접 확인된 표현으로 정리했다.

### 2. claim rule tracked layer added

- 기존에는 claim rule이 raw/private 기준에만 있었다.
- 이제 `docs/products/PRODUCT_CLAIM_RULE.md`가 tracked 문서로 존재한다.
- 즉효/보장 표현 금지, 임상 조건 명시, 기능성 화장품 표기 규칙, 프로토콜 시너지, 안전 문구 규칙을 반영했다.

### 3. mechanism tracked layer added

- 기존에는 메커니즘 문서가 raw/private 기준에 더 가까웠다.
- 이제 `docs/products/PRODUCT_MECHANISM.md`가 tracked 문서로 존재한다.
- 7개 메커니즘 범주와 주요 성분-제품 매핑, 프로토콜 예시를 반영했다.

### 4. evidence/claim guardrail strengthened

- `즉시 효과`, `완벽한 개선`처럼 결과를 단정하는 문장을 blocked list에 추가했다.
- 임상/시험 조건 누락, 후기/수치 혼용, 기능성 표기 확장 금지 규칙을 canonical 레이어에 반영했다.

### 5. design tokens corrected

- 기존 `DESIGN.md`의 색상/타이포/반경 중 PDF와 어긋나던 값들을 재정렬했다.
- background는 `#F7F8F9`, primary text는 `#1A1A1A`, 라인 색상은 PDF 값으로 교체했다.
- 버튼 반경은 `6-8px`, input 반경은 `4-6px`, 제품 카드 이미지는 `1:1` 기준으로 정리했다.
- 별도 display font 도입은 무드보드 검수 전까지 보류하도록 정리했다.

## not fully applied on purpose

1. 무드보드가 없는 상태에서 추가 display font를 확정하지 않았다.
2. 패키징 가이드 원본이 더 들어오면 색상 HEX는 한 번 더 교차검토할 수 있다.
3. PDF가 제시한 일반 버튼/카드 규칙 외의 세부 토큰은 구현 확장으로만 남겼다.

## current conclusion

- 링크 기반 자료는 더 이상 “미검증 source”가 아니다.
- 동일 내용을 PDF로 재검증했고, tracked 문서에 반영했다.
- 이후 동일 주제는 `private/source-pdf-review/markdown-pdf-version`과 이 문서를 함께 기준으로 삼는다.
