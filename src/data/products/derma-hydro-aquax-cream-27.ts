import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 27 Derma Hydro Aquax Cream
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const dermaHydroAquaxCream27SourceAudit = {
  slug: "derma-hydro-aquax-cream-27",
  productEntity:
    "에르띠 27 더마 하이드로 아쿠아엑스 크림 | 27 Derma Hydro Aquax Cream",
  sourceFiles: [
    {
      fileName: "27 Derma Hdro Aquax Cream.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming correction",
        "capacity 50ml / 100ml",
        "AQUAXYL positioning",
        "CICA PDRN positioning",
        "Blue Complex positioning",
        "Sodium Hyaluronate positioning",
        "hydration, soothing, barrier-conditioning, moisture-retention formula axes",
        "brand-provided clinical chart metrics",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product numbering system",
        "Hydrating line structure",
        "27 Derma Hydro Aquax Cream line position",
        "50ml / 100ml configuration",
        "Hydrating line skin concern context",
        "AQUAXYL and CICA-PDRN positioning",
        "recommended skin types: dry, very dry, dehydrated oily, weakened barrier, elasticity concern",
        "botanical soothing ingredient context",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "27Derma-Hdroaquax-Cream(50ml).jpg / 27Derma-Hdroaquax-Cream(100ml).jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "Derma Hydro-AQUAX Cream naming",
        "hydrating barrier cream positioning",
        "brand notice context",
        "cosmetic-safe translation of high-intensity barrier and regeneration claims"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 27 더마 하이드로 아쿠아엑스 크림 / 27 Derma Hydro Aquax Cream으로 공개 PDP에서 정규화한다.",
    "기술 소개서 파일명에는 Hdro 오탈자가 있으나, 공개 PDP 엔터티는 Hydro로 정규화한다.",
    "Hydrating Line의 27번 크림 제품이다.",
    "용량은 50ml와 100ml 두 가지 구성이 제시되어 있다.",
    "제품은 건조감, 약해진 장벽 컨디션, 수분 유지력, 탄력감이 부족해 보이는 피부 컨디션을 주요 방향으로 제시한다.",
    "기술 소개서 기준 주요 성분축은 AQUAXYL, CICA PDRN, Blue Complex, Sodium Hyaluronate이다.",
    "전제품 소개서 기준 주요 성분에는 CICA-PDRN, 소듐하이알루로네이트, 판테놀, 황금추출물 등이 포함되어 있다.",
    "제품 특장점은 수분/보습, 재생/진정, 피부 장벽 강화 축으로 구성된다.",
    "브랜드 제공 기술 소개서에는 모공 탄력 57%, 피부 탄력 23.3%, 피부 진정/붉은기 완화 시험군 99.5% 및 대조군 60.7%, 수분 유지력 81.6% 등의 임상 데이터 차트가 제시되어 있다.",
    "추천 루틴 조합은 27크림 + 25앰플, 27크림 + 35앰플, 27크림 + 55앰플, 27크림 + 37크림으로 제시된다.",
    "브랜드 제공 자료에는 제품 사용에 따른 반응 예시가 있으며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "AQUAXYL의 Aquaporin 활성화, NMF 생성, 세라마이드 장벽 강화, 8시간 후 시각적 개선 표현은 원료/브랜드 제공 소구로 취급하고 제품 단독 보장 효과로 단정하지 않는다.",
    "CICA PDRN의 재생, 손상 개선, 리커버리 표현은 공개 PDP에서 피부 컨디션 회복 보조, 장벽 컨디션 케어, 편안한 진정 보습 사용감으로 조정한다.",
    "Blue Complex의 항산화·항균 작용은 제품 단독 항균 효과처럼 보이지 않도록 보타니컬 컨디셔닝과 외부 환경 스트레스 케어로 조정한다.",
    "소듐하이알루로네이트의 '피부 속 깊숙이' 표현은 각질층 수분감과 피부 표면 보습막 중심으로 조정한다.",
    "임상 데이터 차트의 수치들은 브랜드 제공 자료로만 안내하고, 모든 사용자에게 동일한 수치 개선을 보장하지 않는다.",
    "피부 장벽 강화 표현은 기능성 치료가 아니라 장벽 컨디션 케어 및 건조 완화 보조로 제한한다."
  ]
} as const;

export const dermaHydroAquaxCream27ImageAlt = [
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-50ml-product.jpg",
    alt: "에르띠 27 더마 하이드로 아쿠아엑스 크림 50ml 상세페이지 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-100ml-product.jpg",
    alt: "에르띠 27 더마 하이드로 아쿠아엑스 크림 100ml 상세페이지 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-50ml-product.jpg",
    alt: "에르띠 27 더마 하이드로 아쿠아엑스 크림 50ml 튜브형 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-100ml-product.jpg",
    alt: "에르띠 27 더마 하이드로 아쿠아엑스 크림 100ml 튜브형 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-aquaxyl-cica-pdrn.jpg",
    alt: "AQUAXYL과 CICA-PDRN을 설명하는 에르띠 27 더마 하이드로 아쿠아엑스 크림 성분 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-clinical-data.jpg",
    alt: "에르띠 27 더마 하이드로 아쿠아엑스 크림 브랜드 제공 임상 데이터 차트 이미지",
    role: "evidence-detail-image"
  },
  {
    src: "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const dermaHydroAquaxCream27ClaimRiskClassification = {
  safeClaims: [
    "50ml / 100ml 크림",
    "Hydrating Line 27번 장벽 보습 크림",
    "AQUAXYL, CICA PDRN, Blue Complex, Sodium Hyaluronate 소구",
    "건조하고 민감해진 피부에 촉촉한 보습감을 부여하는 데 도움",
    "피부 장벽 컨디션 케어에 도움",
    "수분감과 보습막을 유지해 편안한 피부 컨디션을 보조",
    "건조로 인한 당김이 느껴지는 피부의 보습 루틴에 적합",
    "피부가 쉽게 예민해지는 시기의 진정 보습 케어에 도움",
    "브랜드 제공 자료 기준 수분 유지력, 피부 진정, 탄력 관련 차트 보유"
  ],
  adjustedClaims: [
    {
      original: "피부 속부터 깊게 차오르는 수분 에너지",
      adjusted: "건조한 피부에 촉촉한 수분감을 채우고 보습감을 오래 유지하도록 돕는 크림"
    },
    {
      original: "피부 배리어 기능 강화",
      adjusted: "피부 장벽 컨디션 케어에 도움"
    },
    {
      original: "Aquaporin 활성화를 통해 피부 깊숙이 수분이 흐르는 환경을 만들어주는 차세대 워터 부스터",
      adjusted: "수분 흐름을 고려한 원료 소구를 바탕으로 건조한 피부에 촉촉한 보습감을 부여하는 성분축"
    },
    {
      original: "히알루론산·NMF 생성 → 수분 순환 → 세라마이드 장벽 강화",
      adjusted: "수분 보유, 보습막, 장벽 컨디션 케어를 함께 고려한 보습 설계"
    },
    {
      original: "진정과 재생을 동시에, 더블 리페어 솔루션",
      adjusted: "예민해진 피부를 편안하게 감싸고 장벽 컨디션을 보조하는 리페어 보습 크림"
    },
    {
      original: "손상된 피부 회복",
      adjusted: "건조와 외부 자극으로 흐트러진 피부 컨디션을 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 재생을 돕는 PDRN",
      adjusted: "피부 컨디션 케어 성분축으로 활용되는 PDRN 소구"
    },
    {
      original: "항산화·항균 작용으로 건강한 피부 환경 유지",
      adjusted: "보타니컬 성분축으로 외부 환경에 노출된 피부 컨디션을 편안하게 유지하는 데 도움"
    },
    {
      original: "피부 속까지 빠르게 흡수되어 즉각적인 수분감 전달",
      adjusted: "가볍게 흡수되는 사용감으로 피부에 촉촉한 수분감을 부여"
    },
    {
      original: "자기 무게의 1,000배 이상 수분을 끌어당김",
      adjusted: "수분을 끌어당기는 보습 성분으로 촉촉한 사용감을 보조"
    }
  ],
  prohibitedClaims: [
    "피부 장벽 손상 치료",
    "재생 치료",
    "피부 질환 회복",
    "손상 피부 복구 보장",
    "피부 속 깊은 진피층 수분 공급",
    "세포 재생",
    "PDRN 피부 재생 치료",
    "항균 치료",
    "염증 치료",
    "아토피 개선",
    "홍조 치료",
    "주름 제거",
    "탄력 회복 보장",
    "100% 수분 개선",
    "모든 피부에 무조건 무자극",
    "8시간 개선 보장"
  ]
} as const;

export const dermaHydroAquaxCream27: ProductPdpData = {
  slug: "derma-hydro-aquax-cream-27",

  identity: {
    productNumber: "27",
    line: "Hydrating",
    lineKo: "하이드레이팅",
    nameKo: "에르띠 27 더마 하이드로 아쿠아엑스 크림",
    nameEn: "27 Derma Hydro Aquax Cream",
    canonicalName:
      "에르띠 27 더마 하이드로 아쿠아엑스 크림 | 27 Derma Hydro Aquax Cream",
    category: "Hydrating Barrier Cream",
    routineStep: "Cream Step",
    shortDefinition:
      "AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 중심으로 건조하고 예민해진 피부에 촉촉한 보습감을 채우고 장벽 컨디션을 보조하는 Hydrating Line 27번 장벽 보습 크림입니다."
  },

  variants: [
    {
      sku: "ERTY-DHAC27-50ML",
      volume: "50ml",
      image:
        "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-50ml-product.jpg"
    },
    {
      sku: "ERTY-DHAC27-100ML",
      volume: "100ml",
      image:
        "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-100ml-product.jpg"
    }
  ],

  seo: {
    title:
      "에르띠 27 더마 하이드로 아쿠아엑스 크림 | AQUAXYL 장벽 보습 크림",
    description:
      "에르띠 27 더마 하이드로 아쿠아엑스 크림은 AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 담은 Hydrating Line 장벽 보습 크림입니다. 건조하고 예민해진 피부에 촉촉한 보습감을 채우고 장벽 컨디션을 편안하게 케어합니다.",
    keywords: [
      "에르띠 27 크림",
      "더마 하이드로 아쿠아엑스 크림",
      "Derma Hydro Aquax Cream",
      "AQUAXYL 크림",
      "CICA PDRN 크림",
      "수분 장벽 크림",
      "장벽 보습 크림",
      "건성 피부 크림",
      "악건성 크림",
      "수부지 수분크림",
      "민감 피부 보습 크림",
      "하이드레이팅 크림",
      "에스테틱 수분크림"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/`,
    ogImage:
      "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-og.jpg"
  },

  hero: {
    eyebrow: "Hydrating Line · Cream Step",
    headline: "건조한 피부를 촉촉하게 잠그는 장벽 보습 크림",
    subheadline:
      "AQUAXYL과 CICA PDRN을 중심으로 수분감, 진정 보습, 장벽 컨디션을 함께 설계한 하이드레이팅 크림",
    benefitChips: [
      "AQUAXYL",
      "CICA PDRN",
      "Blue Complex",
      "Sodium Hyaluronate",
      "수분 보습",
      "장벽 컨디션 케어",
      "진정 보습"
    ],
    primaryImage:
      "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-50ml-product.jpg"
  },

  aiSummary: {
    oneSentence:
      "에르띠 27 더마 하이드로 아쿠아엑스 크림은 AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 중심으로 건조하고 예민해진 피부의 보습감과 장벽 컨디션을 보조하는 Hydrating Line 수분 크림입니다.",
    paragraph:
      "에르띠 27 더마 하이드로 아쿠아엑스 크림은 Hydrating Line의 크림 단계 제품으로, AQUAXYL의 보습 설계와 CICA PDRN의 진정 보습 축, Blue Complex의 보타니컬 컨디셔닝, 소듐하이알루로네이트의 수분 유지감을 결합한 장벽 보습 크림입니다. 건조로 인해 당김이 느껴지는 피부, 장벽이 약해진 듯 쉽게 예민해지는 피부, 수분감과 탄력 컨디션을 함께 관리하고 싶은 피부에 적합한 보습 루틴으로 설계되었습니다.",
    keyFacts: [
      "Hydrating Line 27번 크림",
      "50ml / 100ml 구성",
      "AQUAXYL 기반 보습 성분축",
      "CICA PDRN 기반 진정 보습·리페어 컨디션 성분축",
      "Blue Complex 기반 보타니컬 컨디셔닝 성분축",
      "소듐하이알루로네이트 기반 수분 유지 성분축",
      "전제품 소개서 기준 악건성, 건성, 수부지, 무너진 피부장벽, 탄력 부족 피부 추천",
      "브랜드 제공 자료 기준 수분 유지력, 진정, 탄력 관련 차트 보유"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "세안 후 피부 당김이 심하게 느껴지는 피부",
      "수분감이 부족해 푸석하고 칙칙해 보이는 피부",
      "건조와 예민함이 반복되는 피부",
      "장벽이 약해진 듯 외부 자극에 쉽게 흔들리는 피부",
      "크림을 발라도 보습감이 오래 유지되지 않는 피부",
      "탄력감이 부족하고 피부 컨디션이 떨어져 보이는 피부",
      "촉촉한 보습과 자연스러운 윤기감을 함께 원하는 피부"
    ],
    productApproach: [
      "AQUAXYL 성분축으로 피부에 촉촉한 보습감을 부여하고 수분 유지 루틴을 보조합니다.",
      "CICA PDRN 성분축으로 건조와 외부 자극으로 예민해진 피부 컨디션을 편안하게 관리합니다.",
      "Blue Complex와 식물 유래 성분축이 피부를 부드럽게 감싸는 진정 보습 사용감을 보조합니다.",
      "소듐하이알루로네이트가 피부 표면에 수분감을 부여하고 보습막 형성에 도움을 줍니다.",
      "크림 단계에서 수분 앰플, 리페어 앰플, 브라이트닝 앰플과 결합해 루틴 완성도를 높입니다."
    ]
  },

  formula: {
    thesis:
      "27 더마 하이드로 아쿠아엑스 크림은 단순 수분크림이 아니라, 보습 유지·진정 보습·장벽 컨디션을 한 번에 설계한 Hydrating Line의 크림 마감 포뮬러입니다.",
    axes: [
      {
        title: "Hydration Architecture Axis",
        role: "건조한 피부에 수분감과 보습 유지감 부여",
        ingredients: ["AQUAXYL", "Sodium Hyaluronate"],
        explanation:
          "AQUAXYL과 소듐하이알루로네이트가 건조로 인한 당김이 느껴지는 피부에 촉촉한 수분감을 부여하고 보습막 형성에 도움을 줍니다."
      },
      {
        title: "CICA-PDRN Comfort Axis",
        role: "예민해진 피부의 진정 보습 컨디션 보조",
        ingredients: ["CICA PDRN", "Centella Asiatica Extract", "Madecassoside"],
        explanation:
          "CICA PDRN 성분축과 병풀 유래 성분이 외부 자극과 건조로 예민해진 피부를 편안하게 감싸는 진정 보습 루틴을 보조합니다."
      },
      {
        title: "Blue Botanical Conditioning Axis",
        role: "보타니컬 컨디셔닝과 피부 편안함 보조",
        ingredients: ["Blue Complex", "Borage Extract", "Cornflower Extract", "Lavender Extract", "Chamomile Extract", "Clary Sage Extract", "Hyacinth Extract"],
        explanation:
          "블루 플라워 유래 식물 성분축이 보습 루틴에 부드러운 컨디셔닝감을 더하고 피부를 편안하게 유지하는 데 도움을 줍니다."
      },
      {
        title: "Barrier Conditioning Axis",
        role: "건조로 흐트러진 장벽 컨디션 보조",
        ingredients: ["AQUAXYL", "CICA PDRN", "Blue Complex", "Panthenol"],
        explanation:
          "건조와 외부 환경으로 흐트러진 피부 컨디션을 보조해 크림 단계에서 수분감과 편안함이 오래 머무는 사용감을 설계합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "아쿠아자일",
      nameEn: "AQUAXYL",
      inci: "AQUAXYL",
      role: "수분 보유와 보습 유지 성분축",
      consumerBenefit:
        "건조로 인해 당김이 느껴지는 피부에 촉촉한 보습감을 부여하고 수분 유지 루틴을 보조합니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "보습 지속감"]
    },
    {
      nameKo: "시카 피디알앤",
      nameEn: "CICA PDRN",
      inci: "CICA PDRN",
      role: "진정 보습과 리페어 컨디션 성분축",
      consumerBenefit:
        "건조와 외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하고 장벽 컨디션 케어를 보조합니다.",
      relatedConcerns: ["예민함", "장벽 컨디션", "건조 자극", "피부 컨디션 저하"]
    },
    {
      nameKo: "블루 콤플렉스",
      nameEn: "Blue Complex",
      role: "보타니컬 진정 보습 컨디셔닝",
      consumerBenefit:
        "보리지를 포함한 블루 보타니컬 성분축으로 피부를 부드럽게 감싸고 편안한 보습 사용감을 보조합니다.",
      relatedConcerns: ["피부 편안함", "외부 환경 스트레스", "보습 컨디션", "피부 생기"]
    },
    {
      nameKo: "소듐하이알루로네이트",
      nameEn: "Sodium Hyaluronate",
      inci: "Sodium Hyaluronate",
      role: "수분감 부여와 보습막 형성 보조",
      consumerBenefit:
        "피부 표면에 촉촉한 수분감을 부여하고 보습막을 형성해 당김이 적은 마무리감을 보조합니다.",
      relatedConcerns: ["수분 부족", "건조", "당김", "푸석함"]
    },
    {
      nameKo: "판테놀",
      nameEn: "Panthenol",
      inci: "Panthenol",
      role: "보습과 피부 컨디션 보조",
      consumerBenefit:
        "건조로 민감해진 피부를 촉촉하고 편안하게 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "장벽 컨디션", "예민함", "피부 당김"]
    },
    {
      nameKo: "황금추출물",
      nameEn: "Scutellaria Baicalensis Root Extract",
      inci: "Scutellaria Baicalensis Root Extract",
      role: "식물 유래 피부 컨디셔닝",
      consumerBenefit:
        "외부 환경에 노출된 피부를 편안하게 유지하고 보습 루틴의 컨디셔닝감을 보조합니다.",
      relatedConcerns: ["외부 환경", "피부 편안함", "생기 부족", "예민한 피부"]
    }
  ],

  texture: {
    type: "부드러운 보습 크림",
    finish: "촉촉하고 편안한 보습막 마무리",
    absorption: "얼굴 전체에 펴 바른 뒤 두드려 흡수시키는 크림 단계 사용",
    sensoryCopy:
      "건조한 피부를 무겁게 덮기보다 촉촉한 보습막으로 감싸는 사용감을 목표로 설계된 수분 장벽 크림입니다. 앰플 후 마무리 크림으로 사용하면 수분감과 편안함이 오래 머무는 루틴을 만들 수 있습니다."
  },

  evidence: [
    {
      type: "brandData",
      title: "브랜드 제공 임상 데이터 차트",
      summary:
        "기술 소개서에는 모공 탄력 57%, 피부 탄력 23.3%, 피부 진정/붉은기 완화 시험군 99.5% 및 대조군 60.7%, 수분 유지력 81.6% 수치가 포함된 임상 데이터 차트가 제시되어 있습니다.",
      metric: "Pore elasticity 57% / Skin elasticity 23.3% / Soothing-redness chart 99.5% / Moisture retention 81.6%",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 시험 조건, 대상, 기간, 측정 방식에 따라 해석이 제한될 수 있으며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      image:
        "/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-clinical-data.jpg"
    },
    {
      type: "ingredient",
      title: "AQUAXYL 기반 보습 설계",
      summary:
        "AQUAXYL은 제품의 수분/보습 축을 구성하는 핵심 성분으로, 피부 보습감과 수분 유지 루틴을 보조하는 성분축으로 활용됩니다.",
      sourceNote:
        "브랜드 제공 원료 소구 자료 기준. 원료 소구는 제품 단독 효능 보장으로 해석하지 않습니다."
    },
    {
      type: "ingredient",
      title: "CICA PDRN 기반 리페어 보습 컨디션",
      summary:
        "CICA PDRN 성분축은 예민해진 피부를 편안하게 감싸고 장벽 컨디션을 보조하는 진정 보습 포뮬러 축으로 설계되었습니다.",
      sourceNote: "브랜드 제공 제품 기술 소개서 및 전제품 소개서 기준."
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너와 앰플 단계로 피부를 정돈합니다.",
      "크림 단계에서 적당량을 덜어 얼굴과 목 전체에 부드럽게 펴 바릅니다.",
      "건조함이 쉽게 느껴지는 부위에는 한 번 더 얇게 레이어링합니다.",
      "손바닥으로 가볍게 감싸듯 눌러 흡수시켜 마무리합니다.",
      "아침 루틴에서는 마지막 단계에 자외선 차단제를 함께 사용합니다."
    ],
    frequency:
      "아침과 저녁 크림 단계에서 사용할 수 있으며, 피부가 건조하거나 예민한 시기에는 사용량을 조절해 레이어링할 수 있습니다.",
    cautions: [
      "피부가 극도로 예민한 상태라면 적은 양부터 사용해 피부 반응을 확인하십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "눈가와 입가 등 예민한 부위에는 사용량을 조절하십시오.",
      "임상 데이터와 사용 예시는 개인의 피부 상태에 따라 다르게 나타날 수 있습니다."
    ]
  },

  routines: [
    {
      title: "27 크림 + 25 앰플",
      products: [
        "derma-hydro-aquax-cream-27",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "하이드레이션 부스팅 루틴",
      recommendedFor: [
        "피부 속까지 수분이 부족해 건조함이 느껴지는 피부",
        "세안 후 피부 당김이 심하게 느껴지는 피부",
        "피부에 촉촉한 수분광을 채우고 싶은 피부"
      ]
    },
    {
      title: "27 크림 + 35 앰플",
      products: [
        "derma-hydro-aquax-cream-27",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "배리어 리페어 루틴",
      recommendedFor: [
        "피부 장벽이 약해진 느낌이 드는 피부",
        "탄탄한 피부 컨디션을 유지하고 싶은 피부",
        "피부가 쉽게 건조해지고 예민해지는 피부"
      ]
    },
    {
      title: "27 크림 + 55 앰플",
      products: [
        "derma-hydro-aquax-cream-27",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "래디언스 톤업 루틴",
      recommendedFor: [
        "피부가 칙칙하고 생기가 부족해 보이는 피부",
        "피부 톤을 맑고 균일하게 관리하고 싶은 피부",
        "촉촉한 광채 피부를 연출하고 싶은 피부"
      ]
    },
    {
      title: "27 크림 + 37 크림",
      products: [
        "derma-hydro-aquax-cream-27",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "광채 리페어 레이어링 루틴",
      recommendedFor: [
        "촉촉한 보습과 함께 자연스러운 톤업 효과를 원하는 피부",
        "피부가 건조하고 컨디션이 떨어져 칙칙해 보이는 피부",
        "자연스럽게 밝아 보이는 피부 표현을 원하는 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 27 더마 하이드로 아쿠아엑스 크림은 어떤 제품인가요?",
      answer:
        "AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 중심으로 건조하고 예민해진 피부에 촉촉한 보습감을 채우고 장벽 컨디션을 보조하는 Hydrating Line 27번 장벽 보습 크림입니다."
    },
    {
      question: "어떤 피부에 가장 적합한가요?",
      answer:
        "전제품 소개서 기준 악건성, 건성, 수부지 피부, 무너진 피부장벽이 고민인 피부, 탄력 부족이 느껴지는 피부에 적합한 제품으로 제시됩니다. 공개 PDP에서는 건조와 당김, 장벽 컨디션 저하, 예민함이 반복되는 피부를 위한 보습 크림으로 안내합니다."
    },
    {
      question: "AQUAXYL은 어떤 역할을 하나요?",
      answer:
        "AQUAXYL은 제품의 수분/보습 축을 구성하는 핵심 성분으로, 건조한 피부에 촉촉한 보습감을 부여하고 수분 유지 루틴을 보조하는 성분축으로 설명할 수 있습니다."
    },
    {
      question: "CICA PDRN은 어떤 피부 고민에 도움이 되나요?",
      answer:
        "CICA PDRN은 건조와 외부 자극으로 예민해진 피부를 편안하게 감싸고 장벽 컨디션을 보조하는 진정 보습 성분축으로 설명할 수 있습니다. 치료나 재생 보장을 의미하지는 않습니다."
    },
    {
      question: "27 크림은 25 앰플과 함께 쓰는 것이 좋나요?",
      answer:
        "기술 소개서의 추천 루틴에서는 27 크림과 25 앰플 조합을 하이드레이션 부스팅 루틴으로 제시합니다. 수분감이 부족하고 세안 후 당김이 심하게 느껴지는 피부에 적합한 조합입니다."
    },
    {
      question: "피부 장벽 강화 크림인가요?",
      answer:
        "브랜드 자료에서는 장벽 강화 수분 크림으로 소개되지만, 공개 PDP에서는 치료성 장벽 개선이 아니라 건조와 외부 자극으로 흐트러진 피부 장벽 컨디션을 보조하는 보습 크림으로 안내하는 것이 안전합니다."
    },
    {
      question: "임상 데이터 수치가 모든 사람에게 동일하게 나타나나요?",
      answer:
        "아니요. 브랜드 제공 기술 소개서에는 수분 유지력, 피부 진정, 탄력 관련 차트가 포함되어 있으나, 해당 자료는 시험 조건과 개인 피부 상태에 따라 해석이 달라질 수 있습니다. 모든 사용자에게 동일한 결과를 보장하지 않습니다."
    },
    {
      question: "아침에도 사용할 수 있나요?",
      answer:
        "아침과 저녁 크림 단계 모두 사용할 수 있습니다. 아침에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하는 것을 권장합니다."
    }
  ],

  relatedProducts: [
    "tonic-lotion-skin-hydrating-23",
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-revitalizing-35",
    "concentrated-booster-skin-brightening-55",
    "intensive-cellular-er-cream-37",
    "cleansing-milk-skin-hydrating-21"
  ],

  claims: {
    allowed: [
      "건조한 피부에 촉촉한 보습감을 부여하는 데 도움",
      "피부 장벽 컨디션 케어에 도움",
      "건조와 외부 자극으로 예민해진 피부를 편안하게 유지하는 데 도움",
      "수분감과 보습막을 유지해 당김이 적은 피부 컨디션 보조",
      "AQUAXYL, CICA PDRN, Blue Complex 소구",
      "악건성, 건성, 수부지 피부의 보습 루틴에 적합",
      "브랜드 제공 자료 기준 수분 유지력·피부 진정·탄력 관련 차트 보유"
    ],
    avoid: [
      "피부 장벽 손상 치료",
      "재생 치료",
      "피부 질환 회복",
      "세포 재생",
      "PDRN 피부 재생 치료",
      "항균 치료",
      "염증 치료",
      "홍조 치료",
      "주름 제거",
      "탄력 회복 보장",
      "100% 수분 개선",
      "피부 속 깊은 진피층 수분 공급",
      "8시간 개선 보장",
      "모든 피부에 무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 원료 소구 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const dermaHydroAquaxCream27SchemaHints = {
  schemaType: "ProductGroup",
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/`,
  productGroupID: "derma-hydro-aquax-cream-27",
  variesBy: ["https://schema.org/size"],
  variantStrategy: "Use one canonical PDP with 50ml and 100ml variants under ProductGroup.",
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "27 Derma Hydro Aquax Cream",
      item: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/`
    }
  ],
  faqPage: {
    useVisibleFaqOnly: true,
    source: "dermaHydroAquaxCream27.faq"
  },
  productJsonLd: {
    useProductGroup: true,
    useVariants: true,
    doNotAddPriceUntilCommerceConnected: true,
    doNotAddAvailabilityUntilCommerceConnected: true,
    brandName: "ERTY",
    category: "Skincare > Cream > Hydrating Barrier Cream"
  },
  caution:
    "Clinical chart metrics and raw-material mechanism claims must remain brand-provided evidence context. Do not encode the metrics as guaranteed fixed outcomes in JSON-LD or visible PDP copy."
} as const;

export const dermaHydroAquaxCream27MerchantFeedDraft = {
  itemGroupId: "derma-hydro-aquax-cream-27",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Cream > Hydrating Barrier Cream",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care > Lotion & Moisturizer",
  condition: "new",
  variants: [
    {
      id: "ERTY-DHAC27-50ML",
      title: "에르띠 27 더마 하이드로 아쿠아엑스 크림 50ml",
      description:
        "AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 중심으로 건조하고 예민해진 피부에 촉촉한 보습감을 채우고 장벽 컨디션을 보조하는 하이드레이팅 크림.",
      link: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/?variant=50ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-50ml-product.jpg`,
      size: "50ml"
    },
    {
      id: "ERTY-DHAC27-100ML",
      title: "에르띠 27 더마 하이드로 아쿠아엑스 크림 100ml",
      description:
        "AQUAXYL, CICA PDRN, Blue Complex, 소듐하이알루로네이트를 중심으로 건조하고 예민해진 피부에 촉촉한 보습감을 채우고 장벽 컨디션을 보조하는 하이드레이팅 크림.",
      link: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/?variant=100ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/derma-hydro-aquax-cream-27/derma-hydro-aquax-cream-27-100ml-product.jpg`,
      size: "100ml"
    }
  ],
  omittedUntilCommerceConnected: ["price", "sale_price", "availability", "shipping", "return_policy"]
} as const;

export const dermaHydroAquaxCream27CodexHandoff = {
  targetFile: "src/data/products/derma-hydro-aquax-cream-27.ts",
  route: "/products/derma-hydro-aquax-cream-27/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/derma-hydro-aquax-cream-27/`,
  registerExport: "dermaHydroAquaxCream27",
  tasks: [
    "Move or copy the ProductPdpData export into the target file.",
    "Register dermaHydroAquaxCream27 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 27 더마 하이드로 아쿠아엑스 크림.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 50ml and 100ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from dermaHydroAquaxCream27ImageAlt.",
    "Keep AQUAXYL, CICA PDRN, PDRN, barrier, regeneration, anti-inflammatory, antibacterial, hydration-depth, elasticity, pore, redness, and clinical-metric claims cosmetic-safe.",
    "Do not encode clinical percentages as guaranteed fixed outcomes.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com/products/derma-hydro-aquax-cream-27.",
    "No price or availability appears in JSON-LD until commerce data is connected.",
    "50ml and 100ml variants are visible in PDP and ProductGroup JSON-LD.",
    "The file-name typo Hdro is not used in visible product naming.",
    "AQUAXYL mechanism claims are framed as brand-provided raw-material context, not guaranteed biological activation.",
    "CICA PDRN is not described as medical regeneration or wound healing.",
    "Blue Complex is not described as product-level antibacterial treatment.",
    "Sodium Hyaluronate is not described as dermal-layer deep hydration.",
    "Clinical chart metrics are shown only with source note and non-guarantee disclaimer.",
    "FAQ content is visible on the page before FAQPage schema is generated.",
    "All important product content is rendered as HTML text, not only inside detail-page images."
  ]
} as const;

export default dermaHydroAquaxCream27;
