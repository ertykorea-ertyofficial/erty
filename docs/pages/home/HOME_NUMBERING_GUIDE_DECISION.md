# HOME Numbering Guide Decision

## 목적

이 문서는 `에르띠-제품 넘버링가이드.png`를 `HOME` 페이지 시각 언어에 반영할지 여부를
멀티 에이전트 관점으로 검토한 결과를 고정한다.

## source

- `private/brand-source/story-numbering/에르띠-제품 넘버링가이드.png`
- `docs/pages/home/HOME_ROUND0_FREEZE.md`
- `docs/pages/home/HOME_ROUND1_BRIEF.md`
- `DESIGN.md`
- `docs/canonical/07_VISUAL_SYSTEM_NOTES.md`

## role review summary

### ERTY유진

- decision: `CONDITIONAL`
- 요지: hero index panel과 taxonomy section의 얇은 구조선으로는 적절하지만, 전체 배경이나 반복 texture로 쓰면 안 된다.

### ERTY나연

- decision: `CONDITIONAL`
- 요지: Home이 route clarity를 유지하려면 structural accent까지만 허용된다. full background나 카드 내부 장식은 금지다.

### ERTY지안

- decision: `CONDITIONAL`
- 요지: 브랜드의 번호 체계와 `emergency room + beauty` 정밀성을 드러내는 데 유효하지만, 장식처럼 보이면 narrative가 약해진다.

### ERTY수민

- decision: `CONDITIONAL`
- 요지: 구현은 CSS rail 또는 최소 inline SVG 수준으로만 안전하다. full background image나 반복 패턴은 리스크가 크다.

### ERTY소윤

- decision: `CONDITIONAL`
- 요지: semantic center는 text-led여야 하므로, motif는 taxonomy cue 정도로만 써야 한다.

### ERTY민지

- decision: `CONDITIONAL`
- 요지: CTA hierarchy를 해치지 않는 선에서만 허용된다. purchase 또는 conversion signal처럼 읽히면 안 된다.

## final decision

- 최종 판단: `반영 가능, 단 구조선 수준으로만 제한`
- Home에서는 넘버링 가이드를 `브랜드 인덱스 구조`를 보조하는 시각 규칙으로 본다.
- `주인공 이미지`로 쓰지 않는다.

## allowed usage

1. Hero right-side clinical index panel의 얇은 rail
2. `Core Product Direction`의 numbering / line taxonomy cue
3. 필요 시 `Route Map / Page Roles`의 매우 약한 구조선

## forbidden usage

1. full-page background
2. dark background reference를 그대로 재현하는 것
3. headline / logo / primary CTA 뒤의 대형 장식 그래픽
4. 여러 섹션에 반복되는 motif texture
5. product / offer card의 주 그래픽으로 전환하는 것

## implementation rule

- 원본 이미지를 CSS background-image로 직접 쓰지 않는다.
- rail language만 추상화해서 사용한다.
- `hero + secondary section 1개`를 넘기지 않는다.
- line color는 accent signal이며, 텍스트와 CTA가 항상 먼저 읽혀야 한다.
