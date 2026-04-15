# ERTY Agent Injection Map

## 목적

이 문서는 ERTY 멀티에이전트별 canonical input 주입 규칙을 고정한다.
세부 reading allocation은 `AGENT_READING_ALLOCATION.md`를 함께 본다.

## canonical input path

- `docs/canonical`

## injection rules

| agent | direct injection files |
| --- | --- |
| `ERTY서연` | `00_BRAND_CORE`, `02_PRODUCT_NUMBERING_SYSTEM`, `03_PRODUCT_LINE_MASTER`, `04_TREATMENT_PROTOCOL_MASTER` |
| `ERTY지안` | `00_BRAND_CORE`, `01_BRAND_LANGUAGE_RULES`, `03_PRODUCT_LINE_MASTER` |
| `ERTY나연` | `02_PRODUCT_NUMBERING_SYSTEM`, `03_PRODUCT_LINE_MASTER`, `04_TREATMENT_PROTOCOL_MASTER` |
| `ERTY소윤` | `00_BRAND_CORE`, `02_PRODUCT_NUMBERING_SYSTEM`, `03_PRODUCT_LINE_MASTER`, `06_MULTILINGUAL_GLOSSARY` |
| `ERTY예린` | `05_EVIDENCE_CLAIM_BANK` |
| `ERTY민지` | `03_PRODUCT_LINE_MASTER`, `04_TREATMENT_PROTOCOL_MASTER`, `05_EVIDENCE_CLAIM_BANK` |
| `ERTY유진` | `02_PRODUCT_NUMBERING_SYSTEM`, `07_VISUAL_SYSTEM_NOTES` |
| `ERTY수민` | canonical 결과물만 전달, raw PDF / raw image / `private/*` 직접 주입 금지 |
| `ERTY하린` | `08_PRODUCT_ID_MAP`, `09_PRODUCT_SLUG_MAP`, `10_LOCALE_MAP` |

## hard rules

1. `ERTY수민`에게 raw PDF를 직접 먹이지 않는다.
2. `ERTY수민`에게 raw 상세페이지 이미지, raw 누끼컷을 직접 먹이지 않는다.
3. `ERTY하린`은 id / slug / locale map만 입력으로 받고, 카피 raw는 받지 않는다.
4. raw source 검증이 필요하면 해당 전문 에이전트가 먼저 정제 문서로 승격한 뒤 handoff 한다.

## related document

- [Agent Reading Allocation](./AGENT_READING_ALLOCATION.md)
