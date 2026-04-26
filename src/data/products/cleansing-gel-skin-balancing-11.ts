import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 11 Cleansing Gel for Skin Balancing
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const cleansingGelSkinBalancing11SourceAudit = {
  slug: "cleansing-gel-skin-balancing-11",
  productEntity: "에르띠 11 클렌징 젤 포 스킨 밸런싱 | 11 Cleansing Gel for Skin Balancing",
  sourceFiles: [
    {
      fileName: "11 Cleansing gel for skin balancing.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name",
        "capacity 150ml / 480ml",
        "Greenol H positioning",
        "Herb Complex 8 positioning",
        "HyalOcta Complex positioning",
        "TECA-Biome positioning",
        "product feature axes",
        "fine-dust residual confirmation experiment",
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
        "11 Cleansing Gel line position",
        "150ml / 480ml configuration",
        "Greenol, Xylitol, Herb Complex 8 summary",
        "recommended skin types",
        "treatment manual usage context",
        "trouble-care routine links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "11(150ml)_*.png / 11(480ml)_*.jpg / product PNG",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "xylitol cleanser positioning",
        "bubble texture and product sensorial cues",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 11 클렌징 젤 포 스킨 밸런싱 / 11 Cleansing Gel for Skin Balancing이다.",
    "Balancing Line의 11번 클렌저 제품이다.",
    "용량은 150ml와 480ml 두 가지 구성이 제시되어 있다.",
    "제품은 풍부한 거품과 순한 성분으로 피부 속 노폐물을 부드럽게 세정하고 보송하고 개운한 사용감을 주는 젤 타입 클렌저로 소개된다.",
    "브랜드 자료 기준 특허/소구 성분으로 Greenol 또는 Greenol H가 제시된다.",
    "전제품 소개서 기준 주요 성분은 Xylitol과 Herb Complex 8이다.",
    "제품 기술 소개서 기준 Greenol H, Herb Complex 8, HyalOcta Complex, TECA-Biome가 주요 소구 축으로 제시된다.",
    "추천 피부 타입은 지성 피부, 여드름성 고민 피부, 트러블성 피부, 과잉 피지, 수부지 피부, 모공 고민 피부 등으로 제시된다.",
    "브랜드 제공 자료 기준 그리놀 미세먼지 잔존량 확인 실험 자료가 제시되어 있다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "트러블·과잉 피지 피부에 대한 사용 반응 예시가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "제품 기술 소개서의 사용법 일부는 leave-on 제품처럼 보이는 문장이 있어, 공개 PDP에서는 클렌저 상세페이지와 트리트먼트 매뉴얼에 맞춰 물과 함께 거품을 내어 세정 후 헹구는 방식으로 정리한다.",
    "항염·항균·여드름 개선·트러블 완화 표현은 화장품 클레임 리스크가 있으므로 공개 PDP에서는 '트러블성 피부 환경을 편안하게 정돈', '피지와 노폐물 세정', '피부 컨디션 케어' 중심으로 조정한다.",
    "미세먼지 관련 자료는 실험 조건의 세정 확인 자료로만 사용하며, 대기오염물질 완전 제거 또는 모든 환경에서 동일 효과를 보장하는 문장으로 확장하지 않는다.",
    "B&A 이미지는 사내 자체 사용 후기 또는 반응 예시로만 다루며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const cleansingGelSkinBalancing11ImageAlt = [
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-product.png",
    alt: "에르띠 11 클렌징 젤 포 스킨 밸런싱 150ml 제품과 단상자 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-detail-1.png",
    alt: "피부 진정과 유수분 밸런스를 위한 에르띠 11 클렌징 젤 150ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-ingredients.png",
    alt: "그리놀 허브 콤플렉스 8 자일리톨 성분을 설명하는 에르띠 11 클렌징 젤 150ml 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-how-to-use.png",
    alt: "에르띠 11 클렌징 젤 150ml 사용법과 FAQ 안내 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-product.png",
    alt: "에르띠 11 클렌징 젤 포 스킨 밸런싱 480ml 대용량 펌프형 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-detail-1.jpg",
    alt: "풍부한 거품과 순한 세정을 강조한 에르띠 11 클렌징 젤 480ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-ingredients.png",
    alt: "에르띠 11 클렌징 젤 480ml의 그리놀 허브 콤플렉스 자일리톨 클렌징 젤 성분 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const cleansingGelSkinBalancing11ClaimRiskClassification = {
  safeClaims: [
    "150ml / 480ml 젤 타입 클렌저",
    "Balancing Line 11번 클렌저",
    "풍부하고 크리미한 거품으로 피부 노폐물과 피지 세정에 도움",
    "지성 피부와 과잉 피지 고민 피부를 위한 클렌징 젤",
    "Greenol H, Herb Complex 8, Xylitol, HyalOcta Complex, TECA-Biome 소구",
    "세안 후 산뜻하고 보송한 사용감",
    "피부 유수분 밸런스 유지에 도움",
    "브랜드 제공 자료 기준 미세먼지 잔존량 확인 실험 자료 보유",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "여드름 피부 개선",
      adjusted: "여드름성 고민 피부의 피지와 노폐물 세정에 도움"
    },
    {
      original: "트러블 감소",
      adjusted: "트러블성 피부 환경을 편안하게 정돈하는 데 도움"
    },
    {
      original: "항염·항균 작용",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 케어하는 식물 유래 성분 조합"
    },
    {
      original: "피지 개선",
      adjusted: "과잉 피지로 번들거리는 피부를 산뜻하게 세정하는 데 도움"
    },
    {
      original: "모공 속 노폐물을 완벽 제거",
      adjusted: "모공 주변 노폐물과 피지를 부드럽게 세정하는 데 도움"
    },
    {
      original: "미세먼지 제거",
      adjusted: "브랜드 제공 실험 조건에서 미세먼지 모사체 세정 확인 자료 보유"
    },
    {
      original: "저자극 클렌저",
      adjusted: "자극 부담을 낮추도록 설계된 젤 클렌저"
    },
    {
      original: "피부 장벽 보호",
      adjusted: "세안 후 수분 장벽 컨디션 유지에 도움"
    }
  ],
  prohibitedClaims: [
    "여드름 치료",
    "트러블 치료",
    "염증 제거",
    "항균 치료",
    "피지 분비 완전 억제",
    "모공 축소 보장",
    "블랙헤드 제거 보장",
    "미세먼지 100% 제거",
    "세균 제거 보장",
    "모든 피부에 무조건 무자극",
    "피부 질환 개선",
    "완치"
  ]
} as const;

export const cleansingGelSkinBalancing11: ProductPdpData = {
  slug: "cleansing-gel-skin-balancing-11",

  identity: {
    productNumber: "11",
    line: "Balancing",
    lineKo: "밸런싱",
    nameKo: "에르띠 11 클렌징 젤 포 스킨 밸런싱",
    nameEn: "11 Cleansing Gel for Skin Balancing",
    canonicalName: "에르띠 11 클렌징 젤 포 스킨 밸런싱 | 11 Cleansing Gel for Skin Balancing",
    category: "Balancing Gel Cleanser",
    routineStep: "Cleansing Step",
    shortDefinition:
      "풍부하고 크리미한 거품으로 피지와 노폐물을 부드럽게 세정하고, Greenol H·Herb Complex 8·Xylitol·HyalOcta Complex·TECA-Biome 성분축으로 지성·수부지·트러블성 고민 피부의 유수분 밸런스를 산뜻하게 정돈하는 Balancing Line 11번 젤 클렌저입니다."
  },

  variants: [
    {
      sku: "ERTY-CGSB11-150ML",
      volume: "150ml",
      image: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-product.png"
    },
    {
      sku: "ERTY-CGSB11-480ML",
      volume: "480ml",
      image: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 11 클렌징 젤 포 스킨 밸런싱 | 지성·수부지 밸런싱 젤 클렌저",
    description:
      "에르띠 11 클렌징 젤 포 스킨 밸런싱은 Greenol H, Herb Complex 8, Xylitol, HyalOcta Complex, TECA-Biome 성분축으로 피지와 노폐물을 부드럽게 세정하고 세안 후 산뜻한 유수분 밸런스를 돕는 젤 타입 클렌저입니다. 지성 피부, 수부지 피부, 과잉 피지와 모공 고민 피부를 위한 ERTY Balancing Line 11번 클렌저.",
    keywords: [
      "에르띠 11 클렌징 젤",
      "11 Cleansing Gel for Skin Balancing",
      "클렌징 젤 포 스킨 밸런싱",
      "에르띠 클렌징 젤",
      "지성 피부 클렌저",
      "수부지 클렌저",
      "피지 클렌저",
      "모공 클렌저",
      "저자극 젤 클렌저",
      "자일리톨 클렌저",
      "그리놀 클렌저",
      "허브 콤플렉스 8",
      "HyalOcta Complex",
      "TECA-Biome",
      "풍부한 거품 클렌저",
      "밸런싱 클렌저",
      "에스테틱 젤 클렌저",
      "Balancing Line 11"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/`,
    ogImage: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-og.jpg"
  },

  hero: {
    eyebrow: "Balancing Line 11 · Xylitol Gel Cleanser",
    headline: "피지는 산뜻하게 비우고, 세안 후 밸런스는 편안하게 남기는 클렌징 젤",
    subheadline:
      "Greenol H와 허브 콤플렉스, 자일리톨 수분 케어를 결합해 지성·수부지·트러블성 고민 피부를 위한 산뜻한 세안 루틴을 설계한 Balancing 젤 클렌저",
    benefitChips: [
      "Balancing Line",
      "풍부한 거품",
      "피지·노폐물 세정",
      "유수분 밸런스",
      "Greenol H",
      "Xylitol",
      "Herb Complex 8",
      "자극지수 0.00 자료"
    ],
    primaryImage: "/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 11 클렌징 젤 포 스킨 밸런싱은 피지와 노폐물을 부드럽게 세정하고 세안 후 산뜻한 유수분 밸런스를 돕는 지성·수부지 피부용 젤 클렌저입니다.",
    paragraph:
      "에르띠 11 클렌징 젤 포 스킨 밸런싱은 ERTY Balancing Line의 첫 단계 클렌저로, 풍부하고 크리미한 거품이 모공 주변 노폐물과 과잉 피지를 부드럽게 세정하도록 설계된 젤 타입 클렌저입니다. 브랜드 자료 기준 Greenol H, Herb Complex 8, Xylitol, HyalOcta Complex, TECA-Biome 성분축을 통해 외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하고 세안 후 수분 밸런스 유지에 도움을 주는 방향으로 소개됩니다. 지성 피부, 수부지 피부, 과잉 피지와 모공 고민 피부에 적합하며, 브랜드 제공 자료 기준 미세먼지 잔존량 확인 실험과 인체적용시험 자극지수 0.00 자료가 제시되어 있습니다.",
    keyFacts: [
      "Balancing Line 11번 클렌저",
      "150ml / 480ml 구성",
      "젤 타입 클렌저와 풍부한 거품 사용감",
      "Greenol H와 Herb Complex 8 소구",
      "Xylitol 기반 산뜻한 수분 밸런스 케어",
      "HyalOcta Complex와 TECA-Biome 성분축",
      "지성·수부지·과잉 피지·모공 고민 피부에 적합",
      "브랜드 제공 자료 기준 미세먼지 잔존량 확인 실험 자료 보유",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "세안 후에도 피지와 번들거림이 남는 지성 피부",
      "속은 건조하지만 겉은 쉽게 번들거리는 수부지 피부",
      "모공 주변 노폐물과 과잉 피지가 고민인 피부",
      "트러블성 피부 환경을 산뜻하게 정돈하고 싶은 경우",
      "강한 세안 후 당김이 부담스러운 피부",
      "세안 단계부터 유수분 밸런스를 정리하고 싶은 피부",
      "에스테틱 트러블 케어 루틴의 첫 클렌징 단계를 구축하려는 경우"
    ],
    productApproach: [
      "젤 타입 포뮬러가 물과 만나 풍부하고 크리미한 거품을 형성해 피부 표면과 모공 주변 노폐물을 부드럽게 세정합니다.",
      "Greenol H와 Herb Complex 8 성분축이 외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움을 줍니다.",
      "Xylitol과 HyalOcta Complex가 세안 후 건조하게 당기는 느낌을 줄이고 수분 밸런스 유지에 도움을 줍니다.",
      "TECA-Biome 성분축이 트러블성 고민 피부의 컨디션을 안정적으로 관리하는 데 도움을 주는 더마 밸런싱 케어를 보조합니다.",
      "150ml 홈케어 용량과 480ml 대용량 구성으로 데일리 루틴과 프로페셔널 관리 환경에 모두 연결할 수 있습니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 강한 탈지형 세정제가 아니라, 피지와 노폐물을 산뜻하게 비우면서 세안 후 수분 밸런스와 진정 컨디션을 함께 고려한 Balancing Line 첫 단계 클렌징 포뮬러입니다.",
    axes: [
      {
        title: "Cleansing Balance Axis",
        role: "피지와 노폐물의 부드러운 세정",
        ingredients: ["Gel Cleanser Base", "Xylitol", "Xylitylglucoside", "Anhydroxylitol"],
        explanation:
          "풍부하고 크리미한 거품이 피부 표면과 모공 주변의 피지·노폐물을 부드럽게 세정하면서, 자일리톨 계열 보습 성분이 세안 후 산뜻한 사용감을 보조합니다."
      },
      {
        title: "Botanical Calming Axis",
        role: "외부 자극으로 예민해진 피부 컨디션 정돈",
        ingredients: ["Greenol H", "Herb Complex 8"],
        explanation:
          "Greenol H와 Herb Complex 8은 식물 유래 성분 조합을 통해 예민해진 피부를 편안하게 정돈하고 세안 후 피부 컨디션을 안정적으로 유지하는 데 도움을 주는 보타니컬 케어 축입니다."
      },
      {
        title: "Moisture Retention Axis",
        role: "세안 후 수분 밸런스 유지",
        ingredients: ["HyalOcta Complex", "Xylitol"],
        explanation:
          "저분자·고분자 히알루론산을 포함한 복합 보습 축과 자일리톨이 세안 후 빠르게 건조해지는 피부에 촉촉한 마무리감을 보조합니다."
      },
      {
        title: "Derma Rebalancing Axis",
        role: "트러블성 고민 피부의 밸런스 케어",
        ingredients: ["TECA-Biome", "Greenol H"],
        explanation:
          "TECA-Biome과 Greenol H는 트러블성 고민 피부가 세안 단계에서 과도하게 자극받지 않도록 피부 컨디션을 편안하게 조절하는 데 도움을 줍니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "그리놀 에이치",
      nameEn: "Greenol H",
      role: "허브 유래 진정·보호 컴플렉스",
      consumerBenefit:
        "외부 자극으로 예민해진 피부를 편안하게 정돈하고 세안 후 건강한 피부 컨디션을 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["예민한 피부", "피부 컨디션 저하", "외부 자극", "피지 밸런스"]
    },
    {
      nameKo: "허브 콤플렉스 8",
      nameEn: "Herb Complex 8",
      role: "식물 유래 피부 컨디셔닝 성분 조합",
      consumerBenefit:
        "8가지 식물 유래 성분 조합이 세안 후 피부를 편안하게 정돈하고 산뜻한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["트러블성 피부 환경", "피부 진정", "피부 보호", "번들거림"]
    },
    {
      nameKo: "자일리톨",
      nameEn: "Xylitol",
      inci: "Xylitol",
      role: "수분 밸런스와 산뜻한 세안감 보조",
      consumerBenefit:
        "세안 후 피부가 과도하게 건조해지는 부담을 줄이고 산뜻하면서도 편안한 마무리감을 돕습니다.",
      relatedConcerns: ["세안 후 당김", "수부지", "건조", "유수분 밸런스"]
    },
    {
      nameKo: "자일리틸글루코사이드",
      nameEn: "Xylitylglucoside",
      inci: "Xylitylglucoside",
      role: "자일리톨 계열 보습 보조 성분",
      consumerBenefit:
        "클렌징 후 수분감이 급격히 떨어지지 않도록 피부 표면의 촉촉한 사용감을 보조합니다.",
      relatedConcerns: ["건조", "당김", "수분 부족"]
    },
    {
      nameKo: "안하이드로자일리톨",
      nameEn: "Anhydroxylitol",
      inci: "Anhydroxylitol",
      role: "자일리톨 계열 보습 보조 성분",
      consumerBenefit:
        "자일리톨과 함께 세안 후 산뜻하면서 편안한 수분 밸런스를 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["수분 밸런스", "세안 후 건조", "수부지"]
    },
    {
      nameKo: "히알옥타 콤플렉스",
      nameEn: "HyalOcta Complex",
      role: "복합 히알루론산 기반 수분 장벽 케어",
      consumerBenefit:
        "다양한 분자 크기의 히알루론산 성분축이 세안 후 피부 수분감을 유지하고 촉촉한 피부 환경을 돕습니다.",
      relatedConcerns: ["수분 부족", "세안 후 당김", "장벽 컨디션", "수분 유지"]
    },
    {
      nameKo: "테카바이옴",
      nameEn: "TECA-Biome",
      role: "병풀 유래 더마 밸런싱 성분축",
      consumerBenefit:
        "병풀 유래 케어와 마이크로바이옴 컨셉의 조합으로 트러블성 고민 피부를 편안하게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["트러블성 피부 환경", "예민함", "장벽 밸런스", "피부 컨디션 저하"]
    }
  ],

  texture: {
    type: "투명한 그린 젤 클렌저",
    finish: "보송하고 개운하지만 당김 부담을 낮춘 산뜻한 마무리",
    absorption: "물과 만나 풍부하고 크리미한 거품을 형성한 뒤 미온수로 헹구는 세정형 제품",
    sensoryCopy:
      "젤 제형이 물과 만나 부드러운 거품으로 전환되며, 과도하게 뽀드득한 탈지감보다 산뜻하고 균형 잡힌 세안 후 피부감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 제품 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 클렌징 젤입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태와 사용 환경에 따라 사용감과 반응은 달라질 수 있습니다.",
      image: "/images/products/cleansing-gel-skin-balancing-11/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "brandData",
      title: "그리놀 미세먼지 잔존량 확인 실험",
      summary:
        "브랜드 제공 자료에는 시료 적용 전, 미세먼지 모사체 도포 후, 시료 적용 및 세정 후 상태를 비교한 미세먼지 잔존량 확인 실험 이미지가 제시되어 있습니다.",
      sourceNote:
        "브랜드 제공 자료 기준의 실험 이미지입니다. 모든 환경과 모든 사용자에게 동일한 세정 결과를 보장하지 않습니다.",
      image: "/images/products/cleansing-gel-skin-balancing-11/evidence-greenol-fine-dust-cleansing.jpg"
    },
    {
      type: "beforeAfter",
      title: "트러블·과잉 피지 피부 사용 반응 예시",
      summary:
        "브랜드 자료에는 트러블·과잉 피지 피부에 대한 사용 전후 예시 이미지가 제시되어 있습니다. 해당 이미지는 제품 사용에 따른 반응 예시이며 결과를 보장하지 않습니다.",
      sourceNote:
        "브랜드 제공 사내 사용 예시 기준. 모든 사용자에게 동일한 결과를 보장하지 않습니다."
    }
  ],

  howToUse: {
    steps: [
      "손과 얼굴을 물로 가볍게 적십니다.",
      "적당량을 손에 덜어 물과 함께 충분히 거품을 냅니다.",
      "거품을 얼굴 전체에 부드럽게 펴고 피부결을 따라 마사지하듯 세정합니다.",
      "피지와 노폐물이 쌓이기 쉬운 T존과 모공 고민 부위는 무리한 마찰 없이 짧게 롤링합니다.",
      "미온수로 잔여감이 남지 않도록 충분히 헹굽니다.",
      "세안 후에는 13 퓨리파잉 토너 또는 피부 상태에 맞는 토너·앰플 루틴으로 이어갑니다."
    ],
    frequency:
      "아침·저녁 데일리 클렌저로 사용할 수 있으며, 피부가 건조하거나 예민한 시기에는 사용량과 세정 시간을 조절하십시오.",
    cautions: [
      "눈에 들어가지 않도록 주의하십시오.",
      "피부를 강하게 문지르지 말고 거품으로 부드럽게 세정하십시오.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "화농성 여드름이나 민감한 피부 상태에서는 과도한 마사지와 온열 관리를 피하십시오.",
      "제품 기술 소개서의 일부 사용 문구는 leave-on 방식처럼 보일 수 있으나, 공개 PDP에서는 클렌저 특성에 맞춰 물로 헹구는 세정법을 기준으로 안내합니다."
    ]
  },

  routines: [
    {
      title: "11 클렌징 젤 + 13 퓨리파잉 토너 + 15 밸런싱 앰플",
      products: [
        "cleansing-gel-skin-balancing-11",
        "purifying-toner-skin-balancing-13",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "Balancing Trouble Care Routine",
      recommendedFor: [
        "지성 및 여드름성 고민 피부",
        "피지와 번들거림이 반복되는 피부",
        "트러블성 피부 환경을 산뜻하게 정돈하고 싶은 경우",
        "세안부터 토너·앰플까지 밸런싱 라인으로 연결하고 싶은 경우"
      ]
    },
    {
      title: "11 클렌징 젤 + 15 앰플",
      products: [
        "cleansing-gel-skin-balancing-11",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "Clear Balance Routine",
      recommendedFor: [
        "외부 자극으로 예민해진 피부",
        "트러블, 붉은기, 열감이 올라온 피부 상태",
        "순하게 진정시키며 피부 컨디션을 되돌리고 싶은 경우"
      ]
    },
    {
      title: "11 클렌징 젤 + 25 앰플",
      products: [
        "cleansing-gel-skin-balancing-11",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "Hydro Retention Routine",
      recommendedFor: [
        "세안 후 빠르게 건조해지는 피부",
        "속은 건조하고 겉은 번들거리는 수부지 피부",
        "클렌징 후 즉각적인 촉촉함이 유지되길 원하는 경우"
      ]
    },
    {
      title: "11 클렌징 젤 + 37 크림",
      products: [
        "cleansing-gel-skin-balancing-11",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "Calming Recovery Routine",
      recommendedFor: [
        "기본적인 장벽 보호를 루틴화하고 싶은 경우",
        "자극받은 피부에 빠른 진정 루틴이 필요한 상태",
        "최소 단계로 피부 컨디션을 빠르게 안정시키고 싶은 경우"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 11 클렌징 젤 포 스킨 밸런싱은 어떤 제품인가요?",
      answer:
        "피지와 노폐물을 부드럽게 세정하고 세안 후 산뜻한 유수분 밸런스를 돕는 Balancing Line 11번 젤 클렌저입니다. Greenol H, Herb Complex 8, Xylitol, HyalOcta Complex, TECA-Biome 성분축을 바탕으로 지성·수부지·과잉 피지 고민 피부를 위한 세안 루틴으로 설계되었습니다."
    },
    {
      question: "어떤 피부 타입에 적합한가요?",
      answer:
        "브랜드 자료 기준 지성 피부, 여드름성 고민 피부, 트러블성 피부 환경, 과잉 피지, 수부지, 모공 고민 피부에 추천됩니다. 특히 세안 후 산뜻함은 원하지만 당김이 부담스러운 피부에 적합한 방향으로 설계된 클렌저입니다."
    },
    {
      question: "여드름 피부에도 사용할 수 있나요?",
      answer:
        "여드름성 고민 피부의 피지와 노폐물 세정에 도움을 줄 수 있는 클렌저로 볼 수 있습니다. 다만 본 제품은 화장품이며 여드름 치료제가 아니므로, 염증성 피부 상태가 심하거나 피부과 치료 중이라면 전문가 상담을 권장합니다."
    },
    {
      question: "세안 후 많이 당기나요?",
      answer:
        "자일리톨 계열 보습 성분과 HyalOcta Complex를 포함한 수분 케어 축이 세안 후 건조하게 당기는 부담을 줄이고 산뜻한 마무리감을 보조하도록 설계되었습니다. 피부 상태에 따라 세정 시간과 사용량을 조절하는 것이 좋습니다."
    },
    {
      question: "150ml와 480ml는 어떻게 선택하면 되나요?",
      answer:
        "150ml는 홈케어 데일리 사용에 적합하고, 480ml는 잦은 사용이나 에스테틱·프로페셔널 환경에서 활용하기 좋은 대용량 구성입니다. 같은 제품 엔터티 안의 용량 variant로 관리하는 것이 적절합니다."
    },
    {
      question: "미세먼지 세정 효과가 있나요?",
      answer:
        "브랜드 제공 자료에는 그리놀 미세먼지 잔존량 확인 실험 이미지가 제시되어 있습니다. 공개 PDP에서는 이를 실험 조건에서의 세정 확인 자료로 안내하며, 모든 환경에서 미세먼지를 100% 제거한다고 표현하지 않습니다."
    },
    {
      question: "어떻게 사용하나요?",
      answer:
        "손과 얼굴을 물로 적신 뒤 적당량을 덜어 충분히 거품을 내고, 얼굴 전체를 부드럽게 마사지하듯 세정한 다음 미온수로 깨끗하게 헹굽니다. 눈가에는 들어가지 않도록 주의하고, 예민한 피부는 마찰을 줄여 사용하십시오."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "피지와 모공 고민이 강하면 13 퓨리파잉 토너와 15 밸런싱 앰플을 함께 사용하는 Balancing 루틴이 적합합니다. 세안 후 건조가 빠르게 느껴지는 수부지 피부는 25 하이드레이팅 앰플, 장벽 컨디션이 약한 피부는 37 크림과 연결하는 루틴이 좋습니다."
    }
  ],

  relatedProducts: [
    "purifying-toner-skin-balancing-13",
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-hydrating-25",
    "intensive-cellular-er-cream-37",
    "perfect-soothing-solution-1"
  ],

  claims: {
    allowed: [
      "피지와 노폐물 세정에 도움",
      "풍부하고 크리미한 거품으로 부드러운 세정",
      "지성·수부지 피부의 산뜻한 세안 루틴에 적합",
      "세안 후 유수분 밸런스 유지에 도움",
      "예민해진 피부 컨디션을 편안하게 정돈하는 데 도움",
      "브랜드 제공 자료 기준 미세먼지 잔존량 확인 실험 자료 보유",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "150ml / 480ml 구성"
    ],
    avoid: [
      "여드름 치료",
      "트러블 치료",
      "염증 제거",
      "항균 치료",
      "피지 분비 완전 억제",
      "모공 축소 보장",
      "미세먼지 100% 제거",
      "모든 피부에 무조건 무자극",
      "세균 제거 보장",
      "피부 질환 개선"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 실험 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const cleansingGelSkinBalancing11SchemaHints = {
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  route: "/products/cleansing-gel-skin-balancing-11/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/`,
  productSchemaType: "ProductGroup",
  productGroupID: "cleansing-gel-skin-balancing-11",
  variesBy: ["https://schema.org/size"],
  variants: [
    {
      sku: "ERTY-CGSB11-150ML",
      name: "에르띠 11 클렌징 젤 포 스킨 밸런싱 150ml",
      size: "150ml",
      url: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/?variant=150ml`
    },
    {
      sku: "ERTY-CGSB11-480ML",
      name: "에르띠 11 클렌징 젤 포 스킨 밸런싱 480ml",
      size: "480ml",
      url: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/?variant=480ml`
    }
  ],
  jsonLdRequired: [
    "ProductGroup",
    "Product",
    "Offer",
    "BreadcrumbList",
    "FAQPage",
    "Organization",
    "WebPage"
  ],
  implementationNotes: [
    "Use ProductGroup because 150ml and 480ml are volume variants of the same product entity.",
    "Do not create separate canonical PDPs for 150ml and 480ml unless commerce strategy explicitly requires separate variant pages.",
    "Do not insert price or availability until commerce data is connected.",
    "FAQPage JSON-LD should only include FAQ content visibly rendered on the PDP.",
    "All canonical, @id, url, breadcrumb, offer, sitemap, and merchant-feed links must use https://ertyofficial.com."
  ]
} as const;

export const cleansingGelSkinBalancing11MerchantFeedDraft = {
  feedStrategy: "variant-feed-from-single-product-group",
  itemGroupId: "cleansing-gel-skin-balancing-11",
  canonicalProductLink: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/`,
  items: [
    {
      id: "ERTY-CGSB11-150ML",
      item_group_id: "cleansing-gel-skin-balancing-11",
      title: "에르띠 11 클렌징 젤 포 스킨 밸런싱 150ml",
      description:
        "피지와 노폐물을 부드럽게 세정하고 세안 후 산뜻한 유수분 밸런스를 돕는 Balancing Line 11번 젤 클렌저입니다.",
      link: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/?variant=150ml`,
      image_link: `${SEO_GEO_BASE_URL}/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-150ml-product.png`,
      brand: "ERTY",
      condition: "new",
      product_type: "Cosmetics > Skincare > Cleansers > Gel Cleanser",
      size: "150ml",
      price: undefined,
      availability: undefined
    },
    {
      id: "ERTY-CGSB11-480ML",
      item_group_id: "cleansing-gel-skin-balancing-11",
      title: "에르띠 11 클렌징 젤 포 스킨 밸런싱 480ml",
      description:
        "피지와 노폐물을 부드럽게 세정하고 세안 후 산뜻한 유수분 밸런스를 돕는 Balancing Line 11번 대용량 젤 클렌저입니다.",
      link: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/?variant=480ml`,
      image_link: `${SEO_GEO_BASE_URL}/images/products/cleansing-gel-skin-balancing-11/cleansing-gel-skin-balancing-11-480ml-product.png`,
      brand: "ERTY",
      condition: "new",
      product_type: "Cosmetics > Skincare > Cleansers > Gel Cleanser",
      size: "480ml",
      price: undefined,
      availability: undefined
    }
  ],
  controlledFields: [
    "price",
    "availability",
    "shipping",
    "return_policy",
    "gtin",
    "mpn"
  ],
  note:
    "Price, availability, GTIN, shipping, and return policy should be connected from the commerce source of truth, not hardcoded in the PDP bundle."
} as const;

export const cleansingGelSkinBalancing11CodexHandoff = {
  targetFile: "src/data/products/cleansing-gel-skin-balancing-11.ts",
  registerIn: "src/data/products/index.ts",
  route: "/products/cleansing-gel-skin-balancing-11/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-gel-skin-balancing-11/`,
  instructions: [
    "Use this single PDP data bundle as the source of truth for the ERTY 11 Cleansing Gel for Skin Balancing PDP.",
    "Copy or move cleansingGelSkinBalancing11 into src/data/products/cleansing-gel-skin-balancing-11.ts.",
    "Register cleansingGelSkinBalancing11 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 11 클렌징 젤 포 스킨 밸런싱.",
    "Render the AI Summary block directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Represent 150ml and 480ml as variants under one ProductGroup.",
    "Do not create separate canonical product pages for each volume unless the commerce strategy explicitly requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants, leaving price and availability undefined or omitted until commerce data is available.",
    "Use image alt mapping from cleansingGelSkinBalancing11ImageAlt.",
    "Use product detail PNG/JPG assets only as supplementary visuals; all core product facts must be rendered as server-rendered HTML text.",
    "Keep acne, antibacterial, anti-inflammatory, and fine-dust cleansing claims cosmetic-safe using the claim controls in this bundle.",
    "Do not use www.ertykorea.com as canonical. All canonical, sitemap, JSON-LD, and merchant links must use https://ertyofficial.com."
  ],
  qaChecklist: [
    "PDP route renders successfully.",
    "H1 is visible and crawlable.",
    "Canonical URL uses https://ertyofficial.com/products/cleansing-gel-skin-balancing-11.",
    "150ml and 480ml variants are selectable or visible in the variant UI.",
    "No price or availability is hardcoded.",
    "FAQ is visible and FAQPage schema is generated.",
    "ProductGroup schema includes both 150ml and 480ml variants.",
    "Image alt text exists for product and detail images.",
    "Claim disclaimer is rendered near the bottom of the PDP.",
    "No prohibited claims are rendered in public PDP copy."
  ]
} as const;

export default cleansingGelSkinBalancing11;
