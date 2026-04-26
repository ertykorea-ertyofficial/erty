import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 21 Cleansing Milk for Skin Hydrating
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const cleansingMilkSkinHydrating21SourceAudit = {
  slug: "cleansing-milk-skin-hydrating-21",
  productEntity:
    "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 | 21 Cleansing Milk for Skin Hydrating",
  sourceFiles: [
    {
      fileName: "21 Cleansing Milk for skin Hydrating.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming",
        "capacity 150ml / 480ml",
        "CICA-BIOME positioning",
        "HyalOcta Complex positioning",
        "Postbiotic Vitamin B positioning",
        "Niacinamide positioning",
        "formula feature axes",
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
        "Hydrating line structure",
        "21 Cleansing Milk line position",
        "150ml / 480ml configuration",
        "lotion-type cleanser positioning",
        "CICA-BIOME, 8 hyaluronic acids, niacinamide, panthenol summary",
        "recommended skin types",
        "moisturizing-care treatment manual links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "21(150ml)_*.png / 21(480ml)_*.jpg/png",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "hydrating cleansing milk positioning",
        "botanical calming extract context",
        "CICA-BIOME and HyalOcta detail context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 / 21 Cleansing Milk for Skin Hydrating으로 공개 PDP에서 정규화한다.",
    "Hydrating Line의 21번 로션 타입 클렌저 제품이다.",
    "용량은 150ml와 480ml 두 가지 구성이 제시되어 있다.",
    "전제품 소개서 기준 한 번의 세안으로 피부를 깨끗하게 해주고 세안 후에도 당김 없이 촉촉함을 유지해 주는 로션 타입 클렌저로 소개된다.",
    "전제품 소개서 기준 주요 성분은 CICA-BIOME, 8종 히알루론산, 나이아신아마이드, 판테놀이다.",
    "기술 소개서 기준 주요 성분축은 CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B, Niacinamide이다.",
    "제품 특장점은 수분/보습, 진정/보호, 항산화·항염, 피부 장벽 케어로 구성된다.",
    "브랜드 자료 기준 사용 임상 후기에는 수분 부족 피부와 피부결 손상 케이스가 제시되며, 수분감 향상·정돈된 피부결·탄력 개선 문맥이 포함되어 있다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "전제품 소개서 기준 추천 피부 타입은 예민 피부, 노화 피부를 포함한 모든 피부, 극예민·극건성·악건성 피부로 제시된다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "기술 소개서 1페이지의 사용법은 leave-on 제품처럼 보이는 문장이 포함되어 있으나, 공개 PDP에서는 클렌징 밀크의 제품 분류와 상세페이지·트리트먼트 매뉴얼 문맥에 맞춰 세정 후 헹굼 또는 닦아냄 방식으로 정리한다.",
    "기술 소개서에는 항염, 사이토카인 억제, 피부 장벽 강화, 침투력 향상, TEWL 감소 등 강한 표현이 있으나 공개 PDP에서는 화장품 안전 표현으로 조정한다.",
    "나이아신아마이드와 CICA-BIOME 관련 미백·피부장벽 강화 표현은 클렌저 제품의 leave-on 효능으로 오인되지 않도록 보조 성분과 세안 후 컨디션 문맥으로 제한한다.",
    "사용 임상 후기와 B&A 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다.",
    "극예민 피부 추천 문맥은 존재하나 모든 극예민 피부에 무조건 적합하다고 단정하지 않는다."
  ]
} as const;

export const cleansingMilkSkinHydrating21ImageAlt = [
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-product.png",
    alt: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 150ml 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-detail-1.png",
    alt: "촉촉한 약산성 식물성 유산균 클렌저 에르띠 21 클렌징 밀크 150ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-detail-2.png",
    alt: "CICA-BIOME 6가지 식물 추출물과 히알옥타 콤플렉스를 설명하는 에르띠 21 클렌징 밀크 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-detail-3.png",
    alt: "에르띠 21 클렌징 밀크 사용법과 FAQ 및 제품 가이드 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-product.png",
    alt: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 480ml 대용량 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-detail-1.jpg",
    alt: "에르띠 21 클렌징 밀크 480ml 하이드레이팅 클렌저 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-detail-2.jpg",
    alt: "세안 후에도 촉촉함을 남기는 에르띠 21 클렌징 밀크 480ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-detail-3.png",
    alt: "에르띠 21 클렌징 밀크 480ml 사용법 정보와 제품 사양 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const cleansingMilkSkinHydrating21ClaimRiskClassification = {
  safeClaims: [
    "150ml / 480ml 클렌징 밀크",
    "Hydrating Line 21번 로션 타입 클렌저",
    "세안 후에도 당김 부담을 낮춘 촉촉한 클렌징 밀크",
    "CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B, Niacinamide 소구",
    "예민하고 건조한 피부를 위한 부드러운 세정 루틴",
    "피부 노폐물과 메이크업 잔여물을 부드럽게 세정하는 데 도움",
    "수분감 있는 마무리와 피부 컨디션 케어에 도움",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "피부 깊숙한 곳부터 표면까지 수분을 공급",
      adjusted: "세안 중 피부 표면의 건조 부담을 낮추고 촉촉한 사용감을 보조"
    },
    {
      original: "피부 장벽을 강화하고 피부 컨디션을 안정시켜줍니다",
      adjusted: "피부 장벽 컨디션과 편안한 세안 후 피부 상태를 보조"
    },
    {
      original: "항염·진정 작용 / 염증성 사이토카인 억제",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 마이크로바이옴 환경을 최적화",
      adjusted: "마이크로바이옴을 고려한 발효 유래 성분축으로 건강한 피부 컨디션 유지에 도움"
    },
    {
      original: "피부 깊숙한 곳까지 수분 전달",
      adjusted: "다양한 히알루론산 성분축이 세안 후 촉촉한 사용감과 수분감 있는 마무리를 보조"
    },
    {
      original: "미백, 피부 장벽 강화",
      adjusted: "피부 톤과 장벽 컨디션을 고려한 보조 성분으로 배합"
    },
    {
      original: "극예민, 극건성, 악건성 피부 추천",
      adjusted: "건조하고 예민한 피부도 고려한 부드러운 세정 루틴. 단, 극예민 피부는 패치 테스트와 사용감 확인 권장"
    },
    {
      original: "한 번의 세안으로 완벽 세정",
      adjusted: "한 번의 세안으로 피부 노폐물과 가벼운 메이크업 잔여물을 부드럽게 세정하는 데 도움"
    }
  ],
  prohibitedClaims: [
    "피부 질환 치료",
    "아토피 치료",
    "염증 치료",
    "항염 치료",
    "피부 장벽 완전 회복",
    "피부 마이크로바이옴 최적화 보장",
    "수분 깊숙이 침투 보장",
    "완벽한 메이크업 제거 보장",
    "모든 극예민 피부에 무조건 안전",
    "무조건 무자극",
    "미백 치료",
    "주름 개선 기능성 클렌저로 오인될 수 있는 표현",
    "100% 개선"
  ]
} as const;

export const cleansingMilkSkinHydrating21: ProductPdpData = {
  slug: "cleansing-milk-skin-hydrating-21",

  identity: {
    productNumber: "21",
    line: "Hydrating",
    lineKo: "하이드레이팅",
    nameKo: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅",
    nameEn: "21 Cleansing Milk for Skin Hydrating",
    canonicalName:
      "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 | 21 Cleansing Milk for Skin Hydrating",
    category: "Hydrating Cleansing Milk",
    routineStep: "Cleansing Step",
    shortDefinition:
      "CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B, 나이아신아마이드를 중심으로 세안 후 당김 부담을 낮추고 촉촉한 마무리감을 남기도록 설계된 Hydrating Line 21번 로션 타입 클렌저입니다."
  },

  variants: [
    {
      sku: "ERTY-CMSH21-150ML",
      volume: "150ml",
      image:
        "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-product.png"
    },
    {
      sku: "ERTY-CMSH21-480ML",
      volume: "480ml",
      image:
        "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 | 촉촉한 로션 타입 클렌저",
    description:
      "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅은 CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B, 나이아신아마이드 성분축을 담은 촉촉한 로션 타입 클렌저입니다. 건조하고 예민한 피부의 세안 후 당김 부담을 낮추고, 부드러운 세정감과 수분감 있는 마무리를 원하는 피부에 적합한 Hydrating Line 21번 클렌징 밀크입니다.",
    keywords: [
      "에르띠 21 클렌징 밀크",
      "21 Cleansing Milk for Skin Hydrating",
      "클렌징 밀크 포 스킨 하이드레이팅",
      "에르띠 하이드레이팅 클렌저",
      "촉촉한 클렌징 밀크",
      "약산성 클렌저",
      "로션 타입 클렌저",
      "건성 피부 클렌저",
      "민감 피부 클렌저",
      "극건성 클렌저",
      "당김 없는 클렌저",
      "유산균 클렌저",
      "CICA BIOME 클렌저",
      "HyalOcta Complex",
      "Postbiotic Vitamin B",
      "Hydrating Line 21"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/`,
    ogImage:
      "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-og.jpg"
  },

  hero: {
    eyebrow: "Hydrating Line 21 · Lotion-Type Cleansing Milk",
    headline: "세안 후에도 당김 부담을 낮춘 촉촉한 클렌징 밀크",
    subheadline:
      "CICA-BIOME과 HyalOcta Complex, Postbiotic Vitamin B를 결합해 건조하고 예민한 피부도 편안하게 세정하는 하이드레이팅 클렌저",
    benefitChips: [
      "촉촉한 세정",
      "로션 타입 클렌저",
      "건조 부담 완화",
      "진정 보조",
      "수분 컨디셔닝",
      "150ml / 480ml"
    ],
    primaryImage:
      "/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅은 건조하고 예민한 피부를 고려해 세안 후 당김 부담을 낮추도록 설계된 Hydrating Line 로션 타입 클렌저입니다.",
    paragraph:
      "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅은 CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B, 나이아신아마이드 성분축을 중심으로 피부 노폐물과 가벼운 메이크업 잔여물을 부드럽게 세정하면서, 세안 후에도 촉촉하고 편안한 피부 컨디션을 남기도록 설계된 Hydrating Line 21번 클렌저입니다. 브랜드 자료 기준 150ml와 480ml 용량이 제시되며, 인체적용시험 자극지수 0.00 자료가 포함되어 있습니다.",
    keyFacts: [
      "Hydrating Line 21번 클렌징 밀크",
      "150ml / 480ml 구성",
      "로션 타입 클렌저",
      "CICA-BIOME 기반 진정·보호 성분축",
      "HyalOcta Complex 기반 8종 히알루론산 수분 성분축",
      "Postbiotic Vitamin B 기반 발효 유래 컨디셔닝 성분축",
      "나이아신아마이드와 판테놀 배합",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "세안 후 피부가 쉽게 당기고 건조해지는 피부",
      "강한 세정제 사용 후 피부가 예민해지는 피부",
      "건성·극건성·악건성으로 부드러운 클렌저가 필요한 피부",
      "예민 피부도 사용할 수 있는 촉촉한 로션 타입 클렌저를 찾는 경우",
      "가벼운 메이크업과 피부 노폐물을 부드럽게 정돈하고 싶은 피부",
      "세안 단계부터 수분감과 편안한 사용감을 중시하는 피부"
    ],
    productApproach: [
      "로션 타입 클렌징 밀크 제형이 피부 노폐물과 가벼운 메이크업 잔여물을 부드럽게 감싸 세정하도록 돕습니다.",
      "CICA-BIOME과 6종 보태니컬 카밍 추출물 축이 외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움을 줍니다.",
      "HyalOcta Complex의 8종 히알루론산 성분축이 세안 후 촉촉한 사용감과 수분감 있는 마무리를 보조합니다.",
      "Postbiotic Vitamin B와 나이아신아마이드, 판테놀이 세안 후 피부 장벽 컨디션과 편안한 피부 상태를 보조합니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 강한 탈지 세정이 아니라, 로션 타입 클렌징 밀크의 부드러운 세정 축에 CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B를 결합해 세안 후 건조 부담까지 고려한 하이드레이팅 클렌징 포뮬러입니다.",
    axes: [
      {
        title: "Gentle Cleansing Milk Axis",
        role: "피부 노폐물과 가벼운 메이크업 잔여물의 부드러운 세정",
        ingredients: ["Lotion-Type Cleansing Milk Base"],
        explanation:
          "로션 타입 제형이 피부를 거칠게 문지르지 않고 부드럽게 마사지되도록 설계되어 세안 후 당김 부담을 낮추는 사용감을 제공합니다."
      },
      {
        title: "CICA-BIOME Calming Axis",
        role: "외부 자극으로 예민해진 피부 컨디션 보조",
        ingredients: ["CICA-BIOME", "Centella Asiatica Extract", "Beta-Glucan", "Botanical Calming Complex"],
        explanation:
          "CICA-BIOME과 식물 유래 카밍 성분축이 세안 중 예민해질 수 있는 피부를 편안하게 정돈하고 건강한 피부 컨디션 유지에 도움을 줍니다."
      },
      {
        title: "HyalOcta Moisture Axis",
        role: "세안 후 촉촉한 사용감과 수분 컨디셔닝",
        ingredients: ["HyalOcta Complex", "8 Hyaluronic Acids"],
        explanation:
          "저분자와 고분자를 포함한 히알루론산 성분축이 세안 후 피부 표면의 건조 부담을 낮추고 촉촉한 마무리감을 보조합니다."
      },
      {
        title: "Postbiotic Barrier-Conditioning Axis",
        role: "마이크로바이옴을 고려한 장벽 컨디션 보조",
        ingredients: ["Postbiotic Vitamin B", "Niacinamide", "Panthenol"],
        explanation:
          "발효 유래 성분과 비타민 B 계열 성분이 세안 후 편안한 피부 컨디션과 장벽 컨디션 케어를 보조합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "시카-바이옴",
      nameEn: "CICA-BIOME",
      inci: "CICA-BIOME Complex",
      role: "진정·보호 성분축",
      consumerBenefit:
        "외부 자극으로 예민해진 피부를 편안하게 정돈하고 건강한 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["예민 피부", "외부 자극", "세안 후 불편감", "피부 컨디션 저하"]
    },
    {
      nameKo: "히알옥타 콤플렉스",
      nameEn: "HyalOcta Complex",
      inci: "8 Hyaluronic Acid Complex",
      role: "8종 히알루론산 기반 수분 컨디셔닝",
      consumerBenefit:
        "세안 후 피부 표면의 건조 부담을 낮추고 촉촉한 마무리감을 보조합니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "푸석한 피부"]
    },
    {
      nameKo: "포스트바이오틱스 비타민 B",
      nameEn: "Postbiotic Vitamin B",
      inci: "Postbiotic Vitamin B Complex",
      role: "발효 유래 컨디셔닝 성분축",
      consumerBenefit:
        "마이크로바이옴을 고려한 발효 유래 성분축으로 세안 후 편안한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["장벽 컨디션", "민감함", "세안 후 당김", "피부 균형"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      role: "피부 톤과 장벽 컨디션 보조 성분",
      consumerBenefit:
        "세안 후 피부가 맑고 균일해 보이는 컨디션을 유지하도록 보조하고 장벽 컨디션 케어에 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "피부 톤", "장벽 컨디션", "건조함"]
    },
    {
      nameKo: "판테놀",
      nameEn: "Panthenol",
      inci: "Panthenol",
      role: "수분 유지와 편안한 사용감 보조",
      consumerBenefit:
        "세안 후 당김 부담을 낮추고 촉촉하고 편안한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["건조", "당김", "민감함", "피부 컨디셔닝"]
    },
    {
      nameKo: "병풀추출물",
      nameEn: "Centella Asiatica Extract",
      inci: "Centella Asiatica Extract",
      role: "예민 피부 컨디션 케어",
      consumerBenefit:
        "외부 자극으로 예민해진 피부를 편안하게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["예민함", "붉어 보이는 피부", "피부 피로", "진정 케어"]
    },
    {
      nameKo: "베타글루칸",
      nameEn: "Beta-Glucan",
      inci: "Beta-Glucan",
      role: "보습 및 피부 컨디션 보조",
      consumerBenefit:
        "피부에 부드러운 보습감을 더하고 세안 후 편안한 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["건조", "민감 피부", "수분 부족", "장벽 컨디션"]
    },
    {
      nameKo: "6종 보태니컬 카밍 추출물",
      nameEn: "Botanical Calming Complex",
      inci:
        "Borago Officinalis Extract, Centaurea Cyanus Flower Extract, Lavandula Angustifolia Extract, Chamomilla Recutita Flower Extract, Salvia Sclarea Extract, Hyacinthus Orientalis Extract",
      role: "식물 유래 카밍 성분축",
      consumerBenefit:
        "세안 중 예민해질 수 있는 피부를 부드럽고 편안하게 관리하는 보태니컬 카밍 케어를 보조합니다.",
      relatedConcerns: ["예민 피부", "외부 자극", "세안 후 불편감", "피부 컨디션 저하"]
    }
  ],

  texture: {
    type: "부드러운 로션 타입 클렌징 밀크",
    finish: "세안 후 당김 부담을 낮춘 촉촉하고 편안한 마무리",
    absorption: "피부에 부드럽게 마사지한 뒤 미온수로 헹구거나 필요 시 부드럽게 닦아냄",
    sensoryCopy:
      "거품과 탈지감이 강한 클렌저보다 피부를 부드럽게 감싸는 로션 타입 사용감이 특징이며, 세안 후에도 피부가 버석하게 당기지 않는 촉촉한 클렌징 경험을 지향합니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 저자극 클렌징 밀크입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
      image:
        "/images/products/cleansing-milk-skin-hydrating-21/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "beforeAfter",
      title: "수분 부족·피부결 손상 케이스 자료",
      summary:
        "브랜드 제공 사내 자체 사용 예시에서 수분감 향상, 정돈된 피부결, 탄력 개선 문맥이 제시되어 있습니다. 해당 자료는 제품 사용에 따른 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 사내 자체 임상/사용 예시 기준",
      image:
        "/images/products/cleansing-milk-skin-hydrating-21/evidence-inhouse-case.jpg"
    },
    {
      type: "brandData",
      title: "Hydrating Line 21번 로션 타입 클렌저",
      summary:
        "전제품 소개서 기준, 21 클렌징 밀크는 세안 후에도 당김 없이 촉촉함을 유지하는 로션 타입 클렌저로 소개됩니다.",
      sourceNote: "ERTY KOREA Product Guide 기준"
    }
  ],

  howToUse: {
    steps: [
      "손과 얼굴을 가볍게 적신 뒤 적당량을 덜어냅니다.",
      "얼굴 전체에 부드럽게 펴 바르고 원을 그리듯 마사지해 노폐물과 메이크업 잔여물을 녹여냅니다.",
      "미온수로 충분히 헹구거나, 피부 상태에 따라 젖은 코튼 또는 해면으로 부드럽게 닦아냅니다.",
      "메이크업이나 선크림 사용량이 많은 날에는 1회 더 반복하거나 2차 세안 루틴으로 연결할 수 있습니다.",
      "세안 후 23 토닉 로션 또는 피부 상태에 맞는 토너로 수분 루틴을 이어갑니다."
    ],
    frequency:
      "아침·저녁 데일리 세안 단계에서 사용할 수 있으며, 극예민 피부는 적은 양으로 사용감 확인 후 빈도를 조절하는 것을 권장합니다.",
    cautions: [
      "눈에 들어가지 않도록 주의하고, 눈에 들어갔을 경우 즉시 깨끗한 물로 씻어내십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "클렌저 제품이므로 흡수시키는 leave-on 제품처럼 사용하지 말고 세안 후 헹구거나 닦아내십시오.",
      "극예민 피부는 얼굴 전체 사용 전 국소 부위에서 사용감을 확인하는 것을 권장합니다."
    ]
  },

  routines: [
    {
      title: "21 클렌징 밀크 + 15 앰플",
      products: [
        "cleansing-milk-skin-hydrating-21",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "저자극 진정 & 밸런스 루틴",
      recommendedFor: [
        "외부 자극으로 피부가 예민하고 붉어 보일 때",
        "피부 밸런스 불균형이 반복되는 피부",
        "세안 단계부터 산뜻한 진정 루틴을 시작하고 싶을 때"
      ]
    },
    {
      title: "21 클렌징 밀크 + 25 앰플",
      products: [
        "cleansing-milk-skin-hydrating-21",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "수분 밀도 강화 루틴",
      recommendedFor: [
        "속건조로 피부가 푸석하고 생기가 떨어져 보일 때",
        "보습은 필요하지만 무겁지 않은 수분 루틴을 원할 때",
        "수분이 금방 날아가 메이크업이 들뜨는 피부"
      ]
    },
    {
      title: "21 클렌징 밀크 + 35 앰플",
      products: [
        "cleansing-milk-skin-hydrating-21",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "장벽 리페어 & 컨디션 리커버리 루틴",
      recommendedFor: [
        "피부 본연의 회복력 개선이 필요한 것처럼 느껴질 때",
        "피부가 쉽게 무너지고 자극에 취약하게 느껴질 때",
        "세안 후 피부 컨디션을 편안하게 이어가고 싶을 때"
      ]
    },
    {
      title: "21 클렌징 밀크 + 37 크림",
      products: [
        "cleansing-milk-skin-hydrating-21",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "톤 리커버리 & 장벽 마무리 루틴",
      recommendedFor: [
        "피부가 칙칙하고 즉각적인 보정감이 필요할 때",
        "장벽 케어와 생기 있는 피부 표현을 함께 원할 때",
        "스킨케어와 동시에 자연스러운 피부 표현을 원할 때"
      ]
    },
    {
      title: "21 클렌징 밀크 + 23 토닉 로션 + 25 앰플",
      products: [
        "cleansing-milk-skin-hydrating-21",
        "tonic-lotion-skin-hydrating-23",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "Hydrating Line 기본 수분 루틴",
      recommendedFor: [
        "클렌징 이후 토너와 앰플까지 수분 루틴을 연결하고 싶은 피부",
        "세안 후 당김과 속건조가 반복되는 피부",
        "하이드레이팅 라인 전체 사용감을 경험하고 싶은 경우"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 21 클렌징 밀크는 어떤 제품인가요?",
      answer:
        "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅은 피부 노폐물과 가벼운 메이크업 잔여물을 부드럽게 세정하면서 세안 후 당김 부담을 낮추도록 설계된 Hydrating Line의 로션 타입 클렌저입니다."
    },
    {
      question: "어떤 피부에 가장 잘 맞나요?",
      answer:
        "건조함과 당김이 쉽게 느껴지는 피부, 예민 피부, 극건성·악건성 피부, 강한 세정제 사용 후 불편감을 느끼는 피부에 적합합니다. 다만 극예민 피부는 얼굴 전체 사용 전 국소 부위에서 사용감을 확인하는 것이 좋습니다."
    },
    {
      question: "이 제품은 폼클렌저처럼 거품이 많이 나는 제품인가요?",
      answer:
        "거품으로 강하게 씻어내는 폼클렌저라기보다 피부를 부드럽게 감싸는 로션 타입 클렌징 밀크에 가깝습니다. 세정 후 촉촉하고 편안한 마무리를 원하는 피부에 적합합니다."
    },
    {
      question: "메이크업도 지워지나요?",
      answer:
        "가벼운 메이크업과 선크림, 피부 노폐물 세정에 사용할 수 있습니다. 워터프루프 메이크업이나 진한 색조 메이크업은 전용 리무버 또는 2차 세안을 병행하는 것이 좋습니다."
    },
    {
      question: "사용 후 물로 씻어내야 하나요?",
      answer:
        "네. 클렌저 제품이므로 피부에 마사지한 뒤 미온수로 충분히 헹구거나, 젖은 코튼 또는 해면으로 부드럽게 닦아내는 방식이 적합합니다. 흡수시키는 leave-on 제품처럼 사용하지 않는 것이 좋습니다."
    },
    {
      question: "세안 후 당김이 심한 피부도 사용할 수 있나요?",
      answer:
        "이 제품은 세안 후 당김 부담을 낮추고 촉촉한 마무리감을 남기는 방향으로 설계된 클렌징 밀크입니다. 건조함이 심한 피부는 세안 후 23 토닉 로션, 25 앰플, 27 크림 등 하이드레이팅 루틴으로 이어가는 것이 좋습니다."
    },
    {
      question: "21 클렌징 밀크와 11 클렌징 젤은 어떻게 다른가요?",
      answer:
        "11 클렌징 젤은 지성·피지·트러블성 고민 피부의 산뜻한 세정에 초점을 둔 젤 클렌저이고, 21 클렌징 밀크는 건조하고 예민한 피부의 당김 부담을 낮추는 촉촉한 로션 타입 클렌저입니다."
    },
    {
      question: "이 제품은 피부 장벽을 치료하는 제품인가요?",
      answer:
        "아닙니다. 본 제품은 화장품 클렌저이며 피부 질환이나 장벽 손상을 치료하는 제품이 아닙니다. 세안 후 피부가 편안하게 느껴지도록 돕고, 피부 장벽 컨디션을 고려한 성분축을 포함한 클렌징 제품으로 이해하는 것이 적절합니다."
    }
  ],

  relatedProducts: [
    "tonic-lotion-skin-hydrating-23",
    "concentrated-booster-skin-hydrating-25",
    "derma-hydro-aquax-cream-27",
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37",
    "cleansing-gel-skin-balancing-11"
  ],

  claims: {
    allowed: [
      "피부 노폐물과 가벼운 메이크업 잔여물 세정에 도움",
      "세안 후 당김 부담을 낮춘 촉촉한 사용감",
      "건조하고 예민한 피부를 고려한 로션 타입 클렌저",
      "피부를 편안하게 정돈하는 데 도움",
      "피부 장벽 컨디션 케어에 도움",
      "수분감 있는 세안 마무리에 도움",
      "Hydrating Line 21번 클렌징 밀크",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "피부 질환 치료",
      "아토피 치료",
      "염증 치료",
      "항염 치료",
      "피부 장벽 완전 회복",
      "미백 치료",
      "모든 메이크업 완벽 제거 보장",
      "극예민 피부에 무조건 안전",
      "무조건 무자극",
      "수분 깊숙이 침투 보장",
      "100% 개선"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 사내 자체 임상 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const cleansingMilkSkinHydrating21SchemaHints = {
  canonicalDomain: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/`,
  recommendedJsonLdTypes: ["ProductGroup", "Product", "Offer", "BreadcrumbList", "FAQPage"],
  productGroup: {
    "@type": "ProductGroup",
    productGroupID: "cleansing-milk-skin-hydrating-21",
    variesBy: ["https://schema.org/size"],
    variantStrategy:
      "Represent 150ml and 480ml as variants under one canonical PDP. Do not create separate canonical PDPs for each capacity unless commerce strategy requires it."
  },
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "21 Cleansing Milk for Skin Hydrating",
      item: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/`
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

export const cleansingMilkSkinHydrating21MerchantFeedDraft = {
  itemGroupId: "cleansing-milk-skin-hydrating-21",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Cleanser > Cleansing Milk",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care > Facial Cleansers",
  condition: "new",
  variants: [
    {
      id: "ERTY-CMSH21-150ML",
      title: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 150ml",
      description:
        "CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B 성분축으로 세안 후 당김 부담을 낮추고 촉촉한 마무리감을 남기는 Hydrating Line 21번 클렌징 밀크.",
      link: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/?variant=150ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-150ml-product.png`,
      size: "150ml",
      price: undefined,
      availability: undefined
    },
    {
      id: "ERTY-CMSH21-480ML",
      title: "에르띠 21 클렌징 밀크 포 스킨 하이드레이팅 480ml",
      description:
        "CICA-BIOME, HyalOcta Complex, Postbiotic Vitamin B 성분축으로 세안 후 당김 부담을 낮추고 촉촉한 마무리감을 남기는 Hydrating Line 21번 클렌징 밀크 대용량.",
      link: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/?variant=480ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/cleansing-milk-skin-hydrating-21/cleansing-milk-skin-hydrating-21-480ml-product.png`,
      size: "480ml",
      price: undefined,
      availability: undefined
    }
  ],
  feedSafetyNotes: [
    "Do not include medical, atopic-dermatitis, anti-inflammatory treatment, barrier-recovery guarantee, or whitening treatment claims in feed descriptions.",
    "Use https://ertyofficial.com as the only canonical and merchant-feed base domain.",
    "Keep price and availability synchronized with commerce source before publishing feed."
  ]
} as const;

export const cleansingMilkSkinHydrating21CodexHandoff = {
  targetFile: "src/data/products/cleansing-milk-skin-hydrating-21.ts",
  route: "/products/cleansing-milk-skin-hydrating-21/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/cleansing-milk-skin-hydrating-21/`,
  exportName: "cleansingMilkSkinHydrating21",
  registerInIndex: true,
  implementationChecklist: [
    "Register cleansingMilkSkinHydrating21 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 21 클렌징 밀크 포 스킨 하이드레이팅.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 150ml and 480ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from cleansingMilkSkinHydrating21ImageAlt.",
    "Show a visible cleanser-specific usage note: massage and rinse or wipe off; do not treat as leave-on skincare.",
    "Keep microbiome, anti-inflammatory, barrier, hydration, whitening, and sensitive-skin claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain.",
    "Place ClaimDisclaimer near the bottom of the PDP.",
    "Keep all key product information visible in server-rendered HTML."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com.",
    "H1 is visible in SSR HTML.",
    "150ml and 480ml variants render correctly.",
    "No price or availability is hardcoded.",
    "FAQ is visible and JSON-LD is generated from the same FAQ data.",
    "ProductGroup JSON-LD uses productGroupID cleansing-milk-skin-hydrating-21.",
    "Usage section clearly identifies this as a cleanser that should be rinsed or wiped off.",
    "All microbiome/barrier/anti-inflammatory/whitening claims have been safety-adjusted.",
    "Before-after/use-case sections include individual-results disclaimer if rendered."
  ]
} as const;

export default cleansingMilkSkinHydrating21;
