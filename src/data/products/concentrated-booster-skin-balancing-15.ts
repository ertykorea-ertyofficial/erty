import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 15 Concentrated Booster for Skin Balancing
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const concentratedBoosterSkinBalancing15SourceAudit = {
  slug: "concentrated-booster-skin-balancing-15",
  productEntity:
    "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 | 15 Concentrated Booster for Skin Balancing",
  sourceFiles: [
    {
      fileName: "15 Concentraed Booster for Skin Balancing.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming correction",
        "capacity 30ml / 100ml",
        "SUSU-10FERM positioning",
        "Greenol H positioning",
        "Lactic Acid positioning",
        "Centella Asiatica Extract positioning",
        "formula feature axes",
        "Greenol fine-dust residual visual test context",
        "in-house usage case positioning",
        "irritation index 0.00",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product numbering system",
        "Balancing line structure",
        "15 Concentrated Booster line position",
        "30ml / 100ml configuration",
        "Balancing line skin concern context",
        "SUSU 10 Ferm and Greenol summary",
        "Lactic Acid and Centella summary",
        "recommended skin types",
        "trouble-care treatment manual links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "15(30ml)_*.jpg/png / 15(100ml)_*.jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "balancing ampoule positioning",
        "real-review detail-page narrative",
        "routine suggestion context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 / 15 Concentrated Booster for Skin Balancing으로 공개 PDP에서 정규화한다.",
    "기술 소개서 파일명과 일부 본문에는 Concentraed로 오탈자가 있으나, 공개 PDP 엔터티는 Concentrated로 정규화한다.",
    "Balancing Line의 15번 앰플 제품이다.",
    "용량은 30ml와 100ml 두 가지 구성이 제시되어 있다.",
    "제품은 피지·수분 밸런스, 피부 진정, 피부 컨디션 정돈, 각질 정돈, 수분 컨디셔닝을 주요 방향으로 제시한다.",
    "기술 소개서 기준 주요 성분축은 SUSU-10FERM, Greenol H, Lactic Acid, Centella Asiatica Extract이다.",
    "제품 특장점은 피부 진정 케어, 피부 밸런스 케어, 각질 정돈 케어, 수분 컨디셔닝 케어로 구성된다.",
    "제품 특장점 조합은 병풀추출물 + SUSU 10Ferm, 그리놀H + 티트리잎오일, 락틱애씨드 + 스타아니스추출물, 글리세린 + 부틸렌글라이콜로 제시된다.",
    "전제품 소개서 기준 추천 피부 타입은 여드름성 고민 피부, 지성 피부, 트러블성 고민 피부, 과잉 피지 피부, 수부지 피부 등으로 제시된다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "브랜드 제공 자료에는 제품 사용에 따른 반응 예시와 사내 자체 임상 후기가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "기술 소개서에는 아토피, 알러지 개선, 여드름 피부, 트러블 완화, 피지 분비 조절 등 강한 표현이 있으나 공개 PDP에서는 화장품 안전 표현으로 조정한다.",
    "Greenol fine-dust residual visual test는 제품 단독 임상으로 단정하지 않고 브랜드 제공 성분/원료 관련 시각 자료로 취급한다.",
    "사내 자체 임상과 리뷰 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다.",
    "디바이스 병행 이미지는 존재하지만 공개 PDP에서는 전문가 관리 또는 보조 루틴 문맥으로 제한한다.",
    "아토피·알러지 개선, 여드름 치료, 피지 분비 억제 등 의학적·기능성 오인 표현은 사용하지 않는다."
  ]
} as const;

export const concentratedBoosterSkinBalancing15ImageAlt = [
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-intro.jpg",
    alt: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 30ml 밸런싱 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-product.png",
    alt: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 30ml 펌프형 앰플 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-detail.png",
    alt: "피지와 수분 밸런스를 찾아주는 에르띠 15 컨센트레이트 부스터 30ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-100ml-intro.jpg",
    alt: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 100ml 인트로 상세 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-100ml-detail-1.jpg",
    alt: "SUSU-10FERM 그리놀H 락틱애씨드 병풀추출물을 설명하는 에르띠 15 밸런싱 앰플 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-100ml-detail-2.jpg",
    alt: "피부 진정과 유수분 밸런스 루틴을 설명하는 에르띠 15 컨센트레이트 부스터 100ml 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const concentratedBoosterSkinBalancing15ClaimRiskClassification = {
  safeClaims: [
    "30ml / 100ml 앰플",
    "Balancing Line 15번 앰플",
    "피지와 수분 밸런스가 고민인 피부를 위한 밸런싱 앰플",
    "SUSU-10FERM, Greenol H, Lactic Acid, Centella Asiatica Extract 소구",
    "민감해진 피부 컨디션을 편안하게 관리하는 데 도움",
    "과잉 유분과 건조함이 동시에 느껴지는 피부의 유수분 밸런스 케어에 도움",
    "묵은 각질을 부드럽게 정돈해 매끄러운 피부결 관리에 도움",
    "글리세린과 부틸렌글라이콜 기반 수분 컨디셔닝 케어",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "문제성 피부, 여드름 피부를 위한 필수 기초 앰플",
      adjusted: "트러블성 고민 피부와 지성·수부지 피부의 유수분 밸런스 케어를 위한 기초 앰플"
    },
    {
      original: "피지는 잡아주고 수분은 꽉 채운",
      adjusted: "과잉 유분은 산뜻하게 정돈하고 부족한 수분감은 보완하는 밸런싱 케어"
    },
    {
      original: "과도한 피지 분비를 조절",
      adjusted: "과도한 유분과 번들거림이 느껴지는 피부를 산뜻하게 정돈하는 데 도움"
    },
    {
      original: "아토피, 알러지 개선 효과",
      adjusted: "민감해진 피부 컨디션을 편안하게 관리하는 식물 발효 성분축"
    },
    {
      original: "트러블 컨디션 케어 / 피부 고민 완화",
      adjusted: "피지와 번들거림으로 인한 트러블성 고민 피부의 컨디션 케어에 도움"
    },
    {
      original: "깨끗한 피부 환경 유지",
      adjusted: "산뜻하고 균형 잡힌 피부 컨디션 유지에 도움"
    },
    {
      original: "붉은기·피부 피로 등으로 컨디션이 떨어졌을 때",
      adjusted: "붉어 보이거나 피로해 보이는 피부 컨디션을 편안하게 정돈하고 싶을 때"
    },
    {
      original: "피부 회복 / 재생 루틴",
      adjusted: "피부 컨디션 회복감을 보조하는 진정·장벽 루틴"
    }
  ],
  prohibitedClaims: [
    "여드름 치료",
    "트러블 치료",
    "아토피 개선",
    "알러지 개선",
    "피지 분비 완전 억제",
    "염증 제거",
    "항염 치료",
    "피부 질환 치료",
    "재생 치료",
    "장벽 손상 치료",
    "100% 개선",
    "모든 피부에 무조건 무자극",
    "즉시 트러블 박멸",
    "피부 회복 보장"
  ]
} as const;

export const concentratedBoosterSkinBalancing15: ProductPdpData = {
  slug: "concentrated-booster-skin-balancing-15",

  identity: {
    productNumber: "15",
    line: "Balancing",
    lineKo: "밸런싱",
    nameKo: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱",
    nameEn: "15 Concentrated Booster for Skin Balancing",
    canonicalName:
      "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 | 15 Concentrated Booster for Skin Balancing",
    category: "Sebum-Moisture Balancing Ampoule",
    routineStep: "Ampoule Step",
    shortDefinition:
      "SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물을 중심으로 과잉 유분은 산뜻하게 정돈하고 부족한 수분감은 보완해 지성·수부지·트러블성 고민 피부의 유수분 밸런스를 관리하는 Balancing Line 15번 앰플입니다."
  },

  variants: [
    {
      sku: "ERTY-CBSB15-30ML",
      volume: "30ml",
      image:
        "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-product.png"
    },
    {
      sku: "ERTY-CBSB15-100ML",
      volume: "100ml",
      image:
        "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-100ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 | 유수분 밸런싱 앰플",
    description:
      "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱은 SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물을 중심으로 과잉 유분과 번들거림은 산뜻하게 정돈하고 부족한 수분감은 보완하는 Balancing Line 15번 앰플입니다. 지성·수부지·트러블성 고민 피부의 유수분 밸런스와 피부 컨디션 케어에 적합합니다.",
    keywords: [
      "에르띠 15 컨센트레이트 부스터",
      "15 Concentrated Booster for Skin Balancing",
      "컨센트레이트 부스터 포 스킨 밸런싱",
      "에르띠 밸런싱 앰플",
      "유수분 밸런스 앰플",
      "피지 컨트롤 앰플",
      "수부지 앰플",
      "지성 피부 앰플",
      "트러블성 피부 앰플",
      "진정 앰플",
      "피부 밸런스 앰플",
      "SUSU 10 Ferm",
      "Greenol H",
      "락틱애씨드 앰플",
      "병풀추출물 앰플",
      "Balancing Line 15"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/`,
    ogImage:
      "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-og.jpg"
  },

  hero: {
    eyebrow: "Balancing Line 15 · Sebum-Moisture Balancing Ampoule",
    headline: "무너진 유수분 밸런스를 다시 맞추는 피부 밸런싱 앰플",
    subheadline:
      "SUSU-10FERM과 Greenol H, 락틱애씨드, 병풀추출물을 결합해 과잉 유분은 산뜻하게 정돈하고 부족한 수분감은 보완하는 밸런싱 부스터",
    benefitChips: [
      "유수분 밸런스",
      "피지 컨디션 케어",
      "진정 보조",
      "각질 정돈",
      "수분 컨디셔닝",
      "30ml / 100ml"
    ],
    primaryImage:
      "/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱은 과잉 유분과 부족한 수분감이 함께 느껴지는 지성·수부지·트러블성 고민 피부를 위한 Balancing Line 앰플입니다.",
    paragraph:
      "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱은 SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물 성분축으로 민감해진 피부를 편안하게 정돈하고, 과잉 유분과 번들거림이 느껴지는 피부를 산뜻하게 관리하며, 묵은 각질과 수분 컨디션까지 함께 고려한 Balancing Line 15번 앰플입니다. 브랜드 자료 기준 30ml와 100ml 용량이 제시되며, 인체적용시험 자극지수 0.00 자료가 포함되어 있습니다.",
    keyFacts: [
      "Balancing Line 15번 앰플",
      "30ml / 100ml 구성",
      "SUSU-10FERM 기반 식물 발효 진정 성분축",
      "Greenol H 기반 피지·피부 밸런스 케어",
      "락틱애씨드 기반 부드러운 각질 정돈 케어",
      "병풀추출물 기반 민감 피부 컨디션 케어",
      "글리세린과 부틸렌글라이콜 기반 수분 컨디셔닝 케어",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "피지는 많은데 속은 건조하게 느껴지는 수부지 피부",
      "과잉 유분과 번들거림으로 피부가 쉽게 답답해지는 피부",
      "트러블성 고민이 반복되어 피부 컨디션이 불안정하게 느껴지는 피부",
      "피부결이 거칠고 묵은 각질로 인해 표면이 고르지 않은 피부",
      "외부 자극으로 민감해져 진정과 보습을 동시에 관리하고 싶은 피부",
      "가볍지만 수분감 있는 앰플을 찾는 지성·복합성 피부"
    ],
    productApproach: [
      "SUSU-10FERM이 민감해진 피부 컨디션을 편안하게 관리하는 식물 발효 진정 축을 형성합니다.",
      "Greenol H와 티트리잎오일이 과잉 유분과 번들거림이 느껴지는 피부를 산뜻하게 정돈하는 데 도움을 줍니다.",
      "락틱애씨드와 스타아니스추출물이 묵은 각질과 거친 피부결을 부드럽게 정돈하는 데 도움을 줍니다.",
      "글리세린과 부틸렌글라이콜이 가볍고 촉촉한 수분 컨디셔닝을 보조합니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 피지를 강하게 말리는 앰플이 아니라, 진정·유분 밸런스·각질 정돈·수분 컨디셔닝을 하나의 구조로 결합해 지성·수부지 피부의 불안정한 컨디션을 산뜻하고 편안하게 정돈하는 밸런싱 포뮬러입니다.",
    axes: [
      {
        title: "Soothing Ferment Axis",
        role: "민감해진 피부 컨디션을 편안하게 관리",
        ingredients: ["SUSU-10FERM", "Centella Asiatica Extract"],
        explanation:
          "식물 발효 진정 성분축과 병풀추출물이 외부 자극으로 예민해진 피부를 편안하게 정돈하고 건강한 피부 컨디션 유지에 도움을 줍니다."
      },
      {
        title: "Sebum Balance Axis",
        role: "과잉 유분과 번들거림의 산뜻한 정돈",
        ingredients: ["Greenol H", "Tea Tree Leaf Oil"],
        explanation:
          "Greenol H와 티트리잎오일이 유분감이 쉽게 올라오는 피부의 산뜻한 밸런스 케어를 보조합니다."
      },
      {
        title: "Texture Refining Axis",
        role: "묵은 각질과 거친 피부결 정돈",
        ingredients: ["Lactic Acid", "Star Anise Extract"],
        explanation:
          "락틱애씨드와 스타아니스추출물이 피부 표면을 부드럽게 정돈해 매끄러운 피부결 관리에 도움을 줍니다."
      },
      {
        title: "Moisture Conditioning Axis",
        role: "가볍고 촉촉한 수분 컨디셔닝",
        ingredients: ["Glycerin", "Butylene Glycol"],
        explanation:
          "글리세린과 부틸렌글라이콜이 지성 피부도 부담 없이 사용할 수 있는 수분감과 컨디셔닝감을 보조합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "SUSU-10FERM",
      nameEn: "SUSU-10FERM",
      inci: "Plant Ferment Complex",
      role: "식물 발효 진정 성분축",
      consumerBenefit:
        "민감해진 피부를 편안하게 정돈하고 건강한 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["민감 피부", "피부 컨디션 저하", "외부 자극", "진정 케어"]
    },
    {
      nameKo: "그리놀 H",
      nameEn: "Greenol H",
      inci: "Greenol H",
      role: "피지·유분 밸런스 케어",
      consumerBenefit:
        "과잉 유분과 번들거림이 느껴지는 피부를 산뜻하게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["과잉 피지", "번들거림", "지성 피부", "트러블성 고민 피부"]
    },
    {
      nameKo: "락틱애씨드",
      nameEn: "Lactic Acid",
      inci: "Lactic Acid",
      role: "부드러운 각질 정돈",
      consumerBenefit:
        "묵은 각질과 거친 피부결을 부드럽게 정돈해 매끄러운 피부결 관리에 도움을 줍니다.",
      relatedConcerns: ["묵은 각질", "거친 피부결", "피부결 불균형", "칙칙함"]
    },
    {
      nameKo: "병풀추출물",
      nameEn: "Centella Asiatica Extract",
      inci: "Centella Asiatica Extract",
      role: "민감 피부 컨디션 케어",
      consumerBenefit:
        "외부 자극으로 민감해진 피부를 편안하게 관리하고 안정적인 피부 환경 유지에 도움을 줍니다.",
      relatedConcerns: ["민감함", "붉어 보이는 피부", "트러블성 고민", "피부 피로감"]
    },
    {
      nameKo: "티트리잎오일",
      nameEn: "Tea Tree Leaf Oil",
      inci: "Melaleuca Alternifolia (Tea Tree) Leaf Oil",
      role: "산뜻한 피부 컨디션 보조",
      consumerBenefit:
        "유분감이 쉽게 올라오는 피부를 산뜻하고 깨끗한 느낌으로 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["유분감", "번들거림", "지성 피부", "트러블성 고민 피부"]
    },
    {
      nameKo: "스타아니스추출물",
      nameEn: "Star Anise Extract",
      inci: "Illicium Verum (Anise) Fruit Extract",
      role: "피부 보호와 표면 컨디션 보조",
      consumerBenefit:
        "피부 표면을 편안하게 정돈하고 건강한 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["피부결", "외부 자극", "민감함", "컨디션 저하"]
    },
    {
      nameKo: "글리세린",
      nameEn: "Glycerin",
      inci: "Glycerin",
      role: "수분 컨디셔닝",
      consumerBenefit:
        "피부에 가벼운 수분감을 더해 당김 없이 촉촉한 컨디션을 보조합니다.",
      relatedConcerns: ["수분 부족", "속건조", "당김", "수부지"]
    },
    {
      nameKo: "부틸렌글라이콜",
      nameEn: "Butylene Glycol",
      inci: "Butylene Glycol",
      role: "수분감과 사용감 보조",
      consumerBenefit:
        "앰플이 피부에 부드럽게 펴지고 산뜻한 수분감을 남기도록 보조합니다.",
      relatedConcerns: ["건조", "수분 부족", "사용감", "피부 컨디셔닝"]
    }
  ],

  texture: {
    type: "가볍고 촉촉한 에센스 앰플",
    finish: "끈적임 부담을 낮춘 산뜻하고 촉촉한 마무리",
    absorption: "세안과 토너 후 얼굴 전체에 펴 바르고 두드려 흡수",
    sensoryCopy:
      "지성·수부지 피부가 부담 없이 사용할 수 있도록 가벼운 에센스 제형으로 설계되었으며, 번들거림을 줄이는 산뜻함과 부족한 수분감을 보완하는 촉촉함을 함께 지향합니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시되었습니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
      image:
        "/images/products/concentrated-booster-skin-balancing-15/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "ingredient",
      title: "SUSU-10FERM 특허 성분축",
      summary:
        "기술 소개서에는 10종 식물 발효 콤플렉스인 SUSU-10FERM이 피부 진정 및 피부 컨디션 관리 성분축으로 제시되어 있습니다.",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 공개 PDP에서는 화장품 안전 표현으로 조정하여 사용합니다."
    },
    {
      type: "ingredient",
      title: "Greenol H 미세먼지 잔존량 확인 실험 자료",
      summary:
        "기술 소개서에는 Greenol H 관련 미세먼지 잔존량 확인 실험 이미지가 제시되어 있으며, 공개 PDP에서는 성분 관련 보조 근거로만 사용합니다.",
      sourceNote:
        "브랜드 제공 성분/원료 관련 시각 자료 기준. 제품 전체 효능을 보장하는 표현으로 사용하지 않습니다."
    },
    {
      type: "beforeAfter",
      title: "15앰플 사용 반응 예시",
      summary:
        "브랜드 제공 자료에는 사내 자체 임상 및 사용 후기 이미지가 포함되어 있습니다. 이는 제품 사용에 따른 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote:
        "브랜드 제공 사내 자체 임상 및 리뷰 자료 기준. 개인차 고지가 필요합니다.",
      image:
        "/images/products/concentrated-booster-skin-balancing-15/evidence-before-after.jpg"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너로 피부결을 정돈합니다.",
      "적당량을 덜어 얼굴 전체 또는 피지와 번들거림이 신경 쓰이는 부위에 펴 바릅니다.",
      "피부결을 따라 부드럽게 도포한 뒤 손바닥으로 가볍게 두드려 흡수시킵니다.",
      "건조함이 함께 느껴지는 부위에는 1회 더 얇게 레이어링할 수 있습니다.",
      "아침 루틴에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "일반적인 데일리 앰플로 사용할 수 있으며, 예민한 피부는 소량부터 시작해 피부 반응에 따라 사용 빈도와 사용량을 조절하는 것을 권장합니다.",
    cautions: [
      "락틱애씨드가 포함되어 있어 예민한 피부는 처음 사용 시 소량 테스트를 권장합니다.",
      "트러블이 심하게 올라온 부위나 손상된 피부에는 사용을 피하십시오.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "AHA/BHA/레티노이드 등 각질 케어 제품과 병행할 경우 피부 상태에 따라 사용 빈도를 조절하십시오."
    ]
  },

  routines: [
    {
      title: "15 앰플 + 25 앰플",
      products: [
        "concentrated-booster-skin-balancing-15",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "피부 진정 & 수분 밸런스 루틴",
      recommendedFor: [
        "외부 자극으로 민감해진 피부",
        "피지는 많지만 수분 부족이 함께 느껴지는 수부지 피부",
        "진정과 보습을 동시에 관리하고 싶은 피부"
      ]
    },
    {
      title: "15 앰플 + 35 앰플",
      products: [
        "concentrated-booster-skin-balancing-15",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "피부 진정 & 컨디션 회복 루틴",
      recommendedFor: [
        "민감해진 피부를 안정적으로 정돈하고 싶은 경우",
        "붉어 보이거나 피로해 보이는 피부 컨디션이 고민인 경우",
        "장벽 약화가 느껴지는 시기"
      ]
    },
    {
      title: "15 앰플 + 55 앰플",
      products: [
        "concentrated-booster-skin-balancing-15",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "피부 진정 & 톤 케어 루틴",
      recommendedFor: [
        "칙칙함과 피부 톤 불균형이 고민인 피부",
        "산뜻한 진정 케어 후 맑은 피부 인상을 만들고 싶은 경우",
        "피부 광채와 톤 케어를 함께 원하는 피부"
      ]
    },
    {
      title: "15 앰플 + 37 크림",
      products: [
        "concentrated-booster-skin-balancing-15",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "피부 진정 + 장벽 동시 케어 루틴",
      recommendedFor: [
        "민감해진 피부를 편안하게 정돈하고 싶은 경우",
        "피부 장벽 컨디션을 함께 관리하고 싶은 경우",
        "진정 후 탄탄한 마무리감이 필요한 피부"
      ]
    },
    {
      title: "13 토너 + 15 앰플",
      products: [
        "purifying-toner-skin-balancing-13",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "피지·유수분 밸런스 집중 루틴",
      recommendedFor: [
        "번들거림과 수분 부족이 동시에 느껴지는 수부지 피부",
        "지성 피부의 산뜻한 토너-앰플 루틴이 필요한 경우",
        "모공 주변 피지와 피부결을 함께 정돈하고 싶은 경우"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱은 어떤 제품인가요?",
      answer:
        "피지와 수분 밸런스가 무너진 지성·수부지·트러블성 고민 피부를 위해 설계된 Balancing Line 15번 앰플입니다. SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물 성분축으로 민감해진 피부를 편안하게 정돈하고 산뜻한 유수분 밸런스 케어를 돕습니다."
    },
    {
      question: "지성 피부와 수부지 피부 모두 사용할 수 있나요?",
      answer:
        "네. 과잉 유분과 번들거림이 고민인 지성 피부는 물론, 피지는 많지만 속건조가 함께 느껴지는 수부지 피부의 유수분 밸런스 케어에 적합합니다."
    },
    {
      question: "트러블성 고민 피부에도 사용할 수 있나요?",
      answer:
        "트러블성 고민 피부의 피지와 피부 컨디션을 산뜻하게 정돈하는 데 도움을 주는 앰플입니다. 다만 여드름이나 염증을 치료하는 제품은 아니며, 피부 상태가 심하게 예민한 경우에는 소량부터 사용을 권장합니다."
    },
    {
      question: "락틱애씨드가 들어 있으면 매일 사용해도 되나요?",
      answer:
        "락틱애씨드는 피부결과 묵은 각질을 부드럽게 정돈하는 데 도움을 주는 성분입니다. 일반 피부는 데일리 앰플로 사용할 수 있으나, 예민 피부는 사용 빈도와 사용량을 조절하며 피부 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "어떤 순서로 사용하면 되나요?",
      answer:
        "세안 후 토너로 피부결을 정돈한 다음, 15 앰플을 얼굴 전체 또는 피지와 번들거림이 신경 쓰이는 부위에 펴 바르고 두드려 흡수시킵니다. 이후 크림으로 마무리합니다."
    },
    {
      question: "13 퓨리파잉 토너와 함께 써도 되나요?",
      answer:
        "네. 13 퓨리파잉 토너로 피지와 모공 주변 컨디션을 산뜻하게 정돈한 뒤 15 앰플로 유수분 밸런스와 진정 케어를 이어가는 루틴이 적합합니다."
    },
    {
      question: "15 앰플과 25 앰플은 어떻게 다르나요?",
      answer:
        "15 앰플은 피지·유수분 밸런스와 트러블성 고민 피부의 산뜻한 컨디션 케어에 초점을 둔 밸런싱 앰플이고, 25 앰플은 수분 공급과 보습 컨디션에 더 초점을 둔 하이드레이팅 앰플입니다."
    },
    {
      question: "이 제품은 여드름 치료 제품인가요?",
      answer:
        "아닙니다. 본 제품은 화장품이며, 여드름이나 염증을 치료하는 제품이 아닙니다. 피지와 번들거림, 수분 밸런스, 피부 컨디션 관리를 돕는 기초 앰플로 사용하는 것이 적합합니다."
    }
  ],

  relatedProducts: [
    "cleansing-gel-skin-balancing-11",
    "purifying-toner-skin-balancing-13",
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-revitalizing-35",
    "concentrated-booster-skin-brightening-55",
    "intensive-cellular-er-cream-37"
  ],

  claims: {
    allowed: [
      "피지와 수분 밸런스 케어에 도움",
      "과잉 유분과 번들거림을 산뜻하게 정돈하는 데 도움",
      "민감해진 피부 컨디션을 편안하게 관리하는 데 도움",
      "묵은 각질과 거친 피부결을 부드럽게 정돈하는 데 도움",
      "수부지 피부의 가벼운 수분 컨디셔닝에 도움",
      "지성·트러블성 고민 피부의 산뜻한 컨디션 케어",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "여드름 치료",
      "트러블 치료",
      "아토피 개선",
      "알러지 개선",
      "피지 분비 완전 억제",
      "염증 제거",
      "항염 치료",
      "재생 치료",
      "피부 질환 치료",
      "장벽 회복 보장",
      "100% 개선",
      "무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 사내 자체 임상, 리뷰 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const concentratedBoosterSkinBalancing15SchemaHints = {
  canonicalDomain: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/`,
  recommendedJsonLdTypes: ["ProductGroup", "Product", "Offer", "BreadcrumbList", "FAQPage"],
  productGroup: {
    "@type": "ProductGroup",
    productGroupID: "concentrated-booster-skin-balancing-15",
    variesBy: ["https://schema.org/size"],
    variantStrategy: "Represent 30ml and 100ml as variants under one canonical PDP. Do not create separate canonical PDPs for each capacity unless commerce strategy requires it."
  },
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "15 Concentrated Booster for Skin Balancing",
      item: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/`
    }
  ],
  faqPage: {
    source: "Use only visible FAQ items rendered on the PDP."
  },
  offerPolicy: {
    price: "Do not hardcode price until commerce data is connected.",
    availability: "Do not hardcode availability until commerce data is connected.",
    url: "Use canonical PDP URL with optional variant query only after commerce variant selection is implemented."
  }
} as const;

export const concentratedBoosterSkinBalancing15MerchantFeedDraft = {
  itemGroupId: "concentrated-booster-skin-balancing-15",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Ampoule",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-CBSB15-30ML",
      title: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 30ml",
      description:
        "SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물 성분축으로 피지와 수분 밸런스를 산뜻하게 관리하는 Balancing Line 15번 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/?variant=30ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-30ml-product.png`,
      size: "30ml",
      price: undefined,
      availability: undefined
    },
    {
      id: "ERTY-CBSB15-100ML",
      title: "에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱 100ml",
      description:
        "SUSU-10FERM, Greenol H, 락틱애씨드, 병풀추출물 성분축으로 피지와 수분 밸런스를 산뜻하게 관리하는 Balancing Line 15번 앰플 대용량.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/?variant=100ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-balancing-15/concentrated-booster-skin-balancing-15-100ml-product.png`,
      size: "100ml",
      price: undefined,
      availability: undefined
    }
  ],
  feedSafetyNotes: [
    "Do not include acne-treatment, atopic-dermatitis, allergy-improvement, anti-inflammatory treatment, or medical claims in feed descriptions.",
    "Use https://ertyofficial.com as the only canonical and merchant-feed base domain.",
    "Keep price and availability synchronized with commerce source before publishing feed."
  ]
} as const;

export const concentratedBoosterSkinBalancing15CodexHandoff = {
  targetFile: "src/data/products/concentrated-booster-skin-balancing-15.ts",
  route: "/products/concentrated-booster-skin-balancing-15/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-balancing-15/`,
  exportName: "concentratedBoosterSkinBalancing15",
  registerInIndex: true,
  implementationChecklist: [
    "Register concentratedBoosterSkinBalancing15 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 15 컨센트레이트 부스터 포 스킨 밸런싱.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 30ml and 100ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from concentratedBoosterSkinBalancing15ImageAlt.",
    "Keep acne, atopic, allergy, anti-inflammatory, sebum-control, and regeneration claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain.",
    "Place ClaimDisclaimer near the bottom of the PDP.",
    "Keep all key product information visible in server-rendered HTML."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com.",
    "H1 is visible in SSR HTML.",
    "30ml and 100ml variants render correctly.",
    "No price or availability is hardcoded.",
    "FAQ is visible and JSON-LD is generated from the same FAQ data.",
    "ProductGroup JSON-LD uses productGroupID concentrated-booster-skin-balancing-15.",
    "All acne/atopic/allergy/anti-inflammatory claims have been safety-adjusted.",
    "Before-after/review sections include individual-results disclaimer if rendered."
  ]
} as const;

export default concentratedBoosterSkinBalancing15;
