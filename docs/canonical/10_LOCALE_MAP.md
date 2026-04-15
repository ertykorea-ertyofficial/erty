# 10_LOCALE_MAP

## 목적

이 문서는 현재 프로젝트의 locale 계층을 evidence-based로 고정한다.

## source basis

- `docs/PROJECT_BRIEF.md`
- `docs/brand/BRAND_LANGUAGE_RULE.md`
- `private/product-docs/korean/PRODUCT_CLAIM_RULE.md`

## current locale status

| locale_id | role | status | note |
| --- | --- | --- | --- |
| `ko-KR` | canonical authoring locale | active | 모든 브랜드 / 제품 / claim source의 기준 언어 |
| `en` | reference translation locale | reference only | 제품명과 일부 자료에서 영어 표현이 존재하지만, public route locale로 확정되지 않음 |

## locale policy

1. 한국어가 정본이다.
2. 영어는 glossary / translation reference로만 본다.
3. 추가 locale route는 아직 정의되지 않았다.
4. `/global`은 향후 확장용 페이지지만, locale route schema를 이미 뜻하지는 않는다.

## implementation caution

1. `ERTY하린`은 locale-prefixed route를 임의로 만들지 않는다.
2. `ERTY수민`은 locale switcher를 먼저 구현하지 않는다.
3. `ERTY소윤`은 ko-KR 기준 구조를 먼저 설계하고, 영어는 metadata / glossary 지원 수준으로 본다.
