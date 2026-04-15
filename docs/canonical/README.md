# ERTY Canonical Injection Set

## 목적

이 경로는 ERTY 멀티에이전트에 직접 주입하는 정제 문서를 보관하는 authoritative path다.
여기 있는 문서는 raw source를 요약 / 정규화한 agent-safe input이다.

## 원칙

1. 에이전트에는 가능하면 이 경로의 문서만 직접 주입한다.
2. raw PDF, raw 상세페이지 이미지, raw 누끼컷은 필요한 검증 단계가 아니면 직접 주입하지 않는다.
3. 특히 `ERTY수민`은 `private/*` raw source와 PDF를 직접 입력으로 받지 않는다.
4. `ERTY하린`은 route / id / locale 계층의 map 문서만 받는다.

## 문서 구성

- `00_BRAND_CORE.md`
- `01_BRAND_LANGUAGE_RULES.md`
- `02_PRODUCT_NUMBERING_SYSTEM.md`
- `03_PRODUCT_LINE_MASTER.md`
- `04_TREATMENT_PROTOCOL_MASTER.md`
- `05_EVIDENCE_CLAIM_BANK.md`
- `06_MULTILINGUAL_GLOSSARY.md`
- `07_VISUAL_SYSTEM_NOTES.md`
- `08_PRODUCT_ID_MAP.md`
- `09_PRODUCT_SLUG_MAP.md`
- `10_LOCALE_MAP.md`

## 관련 문서

- [Agent Injection Map](../agents/AGENT_INJECTION_MAP.md)
- [Brand Document Index](../brand/README.md)
- [Product Document Index](../products/README.md)
- [Offers / Kits Document Index](../offers/README.md)
