# ERTY BY CONCERN DATA CONTRACT

문서 상태: v1.0
문서 역할: `/by-concern` 페이지용 데이터 구조 정의
구현 규칙: 하드코딩 금지. UI는 아래 계약을 단일 source-of-truth로 사용한다.

---

## 1. ConcernNode

```ts
export type ConcernId =
  | 'oil-breakout-pores'
  | 'dehydration-tightness'
  | 'barrier-redness'
  | 'dullness-dark-spot'
  | 'texture-flaking'
  | 'recovery-firmness';

export type FamilyId =
  | 'balancing'
  | 'hydrating'
  | 'revitalizing'
  | 'brightening'
  | 'professional';

export interface ConcernNode {
  id: ConcernId;
  slug: string;
  displayName: string;
  symptomKeywords: string[];
  concernStatement: string;
  whyItHappens: string;
  avoidFirst: string;
  firstSkuIds: string[];
  optionalSkuIds: string[];
  lineFamilies: FamilyId[];
  routeLabel: string;
  relatedEvidenceIds: string[];
  relatedGuideIds: string[];
  relatedProtocolIds: string[];
  shopSkuIds: string[];
}
```

---

## 2. SkuNode

```ts
export interface SkuNode {
  id: string; // '11', '23', '37', '01' ...
  displayName: string;
  family: FamilyId;
  kind: 'core' | 'protocol';
  order: number;
  roleLabel: string;
  oneLiner: string;
  proofMetric?: string;
  proofLabel?: string;
  routeLabel: string;
  relatedEvidenceIds: string[];
  relatedProtocolIds: string[];
  imageKey: string;
  shopUrl?: string;
}
```

---

## 3. EvidenceNode

```ts
export type EvidenceType =
  | 'clinical_metric'
  | 'before_after'
  | 'in_house_test'
  | 'ingredient_claim'
  | 'protocol_outcome';

export interface EvidenceNode {
  id: string;
  skuId: string;
  family: FamilyId;
  metric: string;
  label: string;
  whatChanged: string;
  interpretation: string;
  trustQualifier: string;
  evidenceType: EvidenceType;
  ctaLabel: string;
  targetHref: string;
}
```

---

## 4. GuideNode

```ts
export interface GuideNode {
  id: string;
  type: 'results' | 'guide' | 'journal';
  title: string;
  summary: string;
  targetHref: string;
  relatedConcernIds: ConcernId[];
}
```

---

## 5. FAQNode

```ts
export interface FAQNode {
  id: string;
  question: string;
  answer: string;
  relatedConcernIds: ConcernId[];
}
```

---

## 6. 기본 concern 매핑

## 6.1 유분 · 반복 트러블 · 모공
```json
{
  "id": "oil-breakout-pores",
  "slug": "oil-breakout-pores",
  "displayName": "유분 · 반복 트러블 · 모공",
  "symptomKeywords": ["번들거림", "모공 막힘", "반복 트러블"],
  "concernStatement": "피지와 모공 문제는 먼저 정리와 균형의 순서로 읽습니다.",
  "whyItHappens": "과도한 세정, 피지 산화, 반복 자극이 겹치면 트러블은 계속 같은 자리에서 반복됩니다.",
  "avoidFirst": "강한 각질 제거, 잦은 제품 교체, 과도한 진정 레이어링부터 빼야 합니다.",
  "firstSkuIds": ["11", "13", "15"],
  "optionalSkuIds": ["25", "37"],
  "lineFamilies": ["balancing"],
  "routeLabel": "세정 → 정리 → 리셋",
  "relatedEvidenceIds": ["e13", "e15", "e11"],
  "relatedGuideIds": ["g-results-oil", "g-guide-oil", "g-journal-oil"],
  "relatedProtocolIds": [],
  "shopSkuIds": ["11", "13", "15"]
}
```

## 6.2 수분 부족 · 속당김 · 들뜸
```json
{
  "id": "dehydration-tightness",
  "slug": "dehydration-tightness",
  "displayName": "수분 부족 · 속당김 · 들뜸",
  "symptomKeywords": ["속당김", "메이크업 들뜸", "건조"],
  "concernStatement": "수분 부족은 공급보다 먼저 통로와 유지 방식부터 읽습니다.",
  "whyItHappens": "수분이 부족한 피부는 단순히 바르는 양보다 수분 통로와 장벽 유지가 먼저 무너집니다.",
  "avoidFirst": "무거운 유분 레이어링, 순간적인 보습감만 쫓는 선택부터 줄여야 합니다.",
  "firstSkuIds": ["23", "25", "27"],
  "optionalSkuIds": ["37"],
  "lineFamilies": ["hydrating"],
  "routeLabel": "수분 통로 → 공급 → 유지",
  "relatedEvidenceIds": ["e27", "e25", "e23"],
  "relatedGuideIds": ["g-results-hydra", "g-guide-hydra", "g-journal-hydra"],
  "relatedProtocolIds": [],
  "shopSkuIds": ["23", "25", "27"]
}
```

## 6.3 장벽 약화 · 예민 · 붉은기
```json
{
  "id": "barrier-redness",
  "slug": "barrier-redness",
  "displayName": "장벽 약화 · 예민 · 붉은기",
  "symptomKeywords": ["예민", "붉은기", "장벽 약화"],
  "concernStatement": "회복은 장벽을 먼저 세우는 번호에서 시작합니다.",
  "whyItHappens": "반복 자극, 세정 과다, 회복력 저하가 겹치면 장벽은 얇아지고 붉은기는 오래 남습니다.",
  "avoidFirst": "산이 강한 제품, 과도한 레이어링, 즉시 톤업 보정부터 줄여야 합니다.",
  "firstSkuIds": ["37", "35"],
  "optionalSkuIds": ["27"],
  "lineFamilies": ["revitalizing"],
  "routeLabel": "회복 → 보완",
  "relatedEvidenceIds": ["e37", "e27", "e35"],
  "relatedGuideIds": ["g-results-barrier", "g-guide-barrier", "g-journal-barrier"],
  "relatedProtocolIds": ["01", "02", "03"],
  "shopSkuIds": ["37", "35", "27"]
}
```

## 6.4 칙칙함 · 잡티 · 톤 저하
```json
{
  "id": "dullness-dark-spot",
  "slug": "dullness-dark-spot",
  "displayName": "칙칙함 · 잡티 · 톤 저하",
  "symptomKeywords": ["칙칙함", "잡티", "톤 저하"],
  "concernStatement": "밝기는 한 번에 올리지 않고, 먼저 잡티와 톤의 순서를 읽습니다.",
  "whyItHappens": "수분 저하, 자외선 노출, 회복 지연이 겹치면 톤은 어두워지고 다크스팟이 오래 남습니다.",
  "avoidFirst": "강한 톤업 제품 의존, 자극적인 각질 제거, 무리한 레이어링부터 줄여야 합니다.",
  "firstSkuIds": ["55", "57", "50"],
  "optionalSkuIds": ["37"],
  "lineFamilies": ["brightening"],
  "routeLabel": "톤 시작 → 정리 → UV 방어",
  "relatedEvidenceIds": ["e55", "e57", "e50"],
  "relatedGuideIds": ["g-results-bright", "g-guide-bright", "g-journal-bright"],
  "relatedProtocolIds": ["02"],
  "shopSkuIds": ["55", "57", "50"]
}
```

## 6.5 거친 결 · 각질 · 밀림
```json
{
  "id": "texture-flaking",
  "slug": "texture-flaking",
  "displayName": "거친 결 · 각질 · 밀림",
  "symptomKeywords": ["거친 결", "각질", "밀림"],
  "concernStatement": "거친 결은 먼저 리셋하고, 그 다음 수분과 장벽을 붙입니다.",
  "whyItHappens": "정돈되지 않은 각질과 건조가 겹치면 결이 거칠어지고 제품 밀림이 생깁니다.",
  "avoidFirst": "강한 스크럽, 잦은 필링, 즉시 커버를 위한 과한 베이스부터 빼야 합니다.",
  "firstSkuIds": ["01", "23", "37"],
  "optionalSkuIds": ["02", "03"],
  "lineFamilies": ["professional", "hydrating", "revitalizing"],
  "routeLabel": "리셋 → 통로 → 안정",
  "relatedEvidenceIds": ["e01", "e23", "e37"],
  "relatedGuideIds": ["g-results-texture", "g-guide-texture", "g-journal-texture"],
  "relatedProtocolIds": ["01", "02", "03"],
  "shopSkuIds": ["01", "23", "37"]
}
```

## 6.6 회복 저하 · 탄력 저하 · 컨디션 급락
```json
{
  "id": "recovery-firmness",
  "slug": "recovery-firmness",
  "displayName": "회복 저하 · 탄력 저하 · 컨디션 급락",
  "symptomKeywords": ["회복 저하", "탄력 저하", "컨디션 급락"],
  "concernStatement": "회복력은 먼저 보완하고, 그 다음 밀도를 올립니다.",
  "whyItHappens": "장벽 약화와 회복 지연이 겹치면 피부는 쉽게 처지고 쉽게 무너집니다.",
  "avoidFirst": "즉각적인 광채 보정, 자극성 기능 제품 중첩부터 줄여야 합니다.",
  "firstSkuIds": ["35", "37"],
  "optionalSkuIds": ["02", "03"],
  "lineFamilies": ["revitalizing", "professional"],
  "routeLabel": "보완 → 회복 → 리모델링",
  "relatedEvidenceIds": ["e35", "e37", "e03"],
  "relatedGuideIds": ["g-results-recovery", "g-guide-recovery", "g-journal-recovery"],
  "relatedProtocolIds": ["02", "03"],
  "shopSkuIds": ["35", "37"]
}
```

---

## 7. 예시 SKUNode

```json
{
  "id": "37",
  "displayName": "Intensive Cellular ER Cream",
  "family": "revitalizing",
  "kind": "core",
  "order": 37,
  "roleLabel": "장벽 회복",
  "oneLiner": "피부 지질의 복제, 세컨드 스킨",
  "proofMetric": "286.29%",
  "proofLabel": "장벽 회복",
  "routeLabel": "회복 → 보완",
  "relatedEvidenceIds": ["e37"],
  "relatedProtocolIds": ["01", "02", "03"],
  "imageKey": "sku-37-packshot"
}
```

---

## 8. 예시 EvidenceNode

```json
{
  "id": "e37",
  "skuId": "37",
  "family": "revitalizing",
  "metric": "286.29%",
  "label": "장벽 회복",
  "whatChanged": "물리적 자극 이후 장벽 회복 개선",
  "interpretation": "무너진 장벽이 회복 축으로 돌아오는 핵심 시그널입니다.",
  "trustQualifier": "제품 가이드 기준",
  "evidenceType": "clinical_metric",
  "ctaLabel": "37 결과 먼저 보기",
  "targetHref": "/results#37"
}
```

---

## 9. 데이터 계약 원칙

- selection-agnostic copy와 SKU-specific copy를 분리한다.
- 같은 concern은 Hero / Board / Proof / Guide / Shop에서 같은 어휘를 공유한다.
- metric은 source-visible 값만 사용한다.
- 서로 다른 의미의 수치를 직접 비교하는 문장 금지.
- UI 안의 숫자/근거/프로토콜은 모두 이 데이터 계약에서 나온다.