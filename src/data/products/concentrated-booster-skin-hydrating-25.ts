import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 25 Concentrated Booster for Skin Hydrating
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const concentratedBoosterSkinHydrating25SourceAudit = {
  slug: "concentrated-booster-skin-hydrating-25",
  productEntity:
    "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 | 25 Concentrated Booster for Skin Hydrating",
  sourceFiles: [
    {
      fileName: "25 Concentraed Booster for Skin Hydrating.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming correction",
        "capacity 30ml / 100ml",
        "Oligo-HA positioning",
        "Hydrolyzed Vegetable Protein positioning",
        "9 Peptide Complex positioning",
        "8 Hyaluronic Acid Complex positioning",
        "Anthemis Nobilis Flower Water and Honey Extract positioning",
        "hydration, moisture-retention, elasticity, and conditioning formula axes",
        "Oligo-HA patent/absorption comparison context",
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
        "25 Concentrated Booster line position",
        "30ml / 100ml configuration",
        "Hydrating line skin concern context",
        "48-hour moisture lock tagline context",
        "8 types of hyaluronic acid and peptide positioning",
        "recommended skin types",
        "moisturizing-care treatment manual links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "25(30ml)_*.jpg / 25(100ml)_*.jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "24-hour moisture lock detail-page narrative",
        "hydrating ampoule positioning",
        "real-review detail-page narrative",
        "routine suggestion context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 / 25 Concentrated Booster for Skin Hydrating으로 공개 PDP에서 정규화한다.",
    "기술 소개서 파일명과 일부 본문에는 Concentraed로 오탈자가 있으나, 공개 PDP 엔터티는 Concentrated로 정규화한다.",
    "Hydrating Line의 25번 앰플 제품이다.",
    "용량은 30ml와 100ml 두 가지 구성이 제시되어 있다.",
    "제품은 수분 공급, 수분 유지, 탄력 케어, 피부 컨디셔닝을 주요 방향으로 제시한다.",
    "기술 소개서 기준 주요 성분축은 Oligo-HA, Hydrolyzed Vegetable Protein, 9 Peptide Complex, 8 Hyaluronic Acid Complex, Anthemis Nobilis Flower Water, Honey Extract이다.",
    "제품 특장점은 수분 공급 케어, 수분 유지 케어, 탄력 케어, 피부 컨디셔닝으로 구성된다.",
    "제품 특장점 조합은 소듐하이알루로네이트 + 하이드롤라이즈드하이알루로닉애씨드, 소듐하이알루로네이트크로스폴리머 + 포타슘하이알루로네이트, 팔미토일펜타펩타이드-4 + 카퍼트라이펩타이드-1, 캐모마일꽃수 + 꿀추출물로 제시된다.",
    "전제품 소개서 기준 추천 피부 타입은 악건성 피부, 건성 피부, 수부지 피부로 제시된다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "브랜드 제공 자료에는 제품 사용에 따른 반응 예시와 사내 자체 임상 후기가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "전제품 소개서는 48시간 수분 자물쇠 앰플로, 상세페이지 이미지는 24시간 수분 잠금으로 표현한다. 공개 PDP에서는 기간 수치를 확정 claim으로 고정하지 않고 '수분 잠금' 또는 '오래 지속되는 보습감'으로 조정한다.",
    "Oligo-HA의 일반 HA 대비 흡수율 비교는 원료/브랜드 제공 자료로 취급하고 제품 단독 임상효과로 단정하지 않는다.",
    "하이드롤라이즈드식물성단백질 관련 '줄기세포 활성화' 표현은 공개 PDP에서 사용하지 않는다.",
    "9종 펩타이드 관련 '주름개선' 표현은 화장품 기능성 오인 가능성이 있어 '탄력 컨디션 케어'로 조정한다.",
    "'피부 속 깊이 수분 공급', '악건성에서 벗어나기', '건조함 해결' 등 강한 표현은 피부 표면 보습·수분감·컨디션 케어 중심으로 조정한다.",
    "사내 자체 임상과 리뷰 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const concentratedBoosterSkinHydrating25ImageAlt = [
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-product.webp",
    alt: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 30ml 수분 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-detail-1.jpg",
    alt: "Oligo-HA와 8종 히알루론산을 설명하는 에르띠 25 수분 앰플 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-detail-2.jpg",
    alt: "피부 수분감과 탄력 컨디션 케어를 설명하는 에르띠 25 컨센트레이트 부스터 30ml 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-100ml-product.webp",
    alt: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 100ml 수분 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-100ml-detail-1.jpg",
    alt: "고농축 보습 앰플 에르띠 25 컨센트레이트 부스터 100ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-100ml-detail-2.jpg",
    alt: "에르띠 25 컨센트레이트 부스터 사용 후기와 수분 루틴 추천 상세 이미지",
    role: "review-and-routine-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const concentratedBoosterSkinHydrating25ClaimRiskClassification = {
  safeClaims: [
    "30ml / 100ml 앰플",
    "Hydrating Line 25번 앰플",
    "피부 수분감과 탄력 컨디션이 고민인 피부를 위한 하이드레이팅 앰플",
    "Oligo-HA, Hydrolyzed Vegetable Protein, 9 Peptide Complex, 8 Hyaluronic Acid Complex 소구",
    "피부에 촉촉한 보습감을 부여하는 데 도움",
    "건조로 인해 당김이 느껴지는 피부의 수분 컨디션 케어에 도움",
    "피부 표면에 보습막을 형성해 촉촉한 피부 컨디션 유지에 도움",
    "펩타이드 성분축으로 탄력감이 부족해 보이는 피부 컨디션 케어에 도움",
    "캐모마일꽃수와 꿀추출물 기반 보타니컬 진정·보습 케어",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "24시간 수분 잠금 / 48시간 수분 자물쇠 앰플",
      adjusted: "수분감을 오래 유지하도록 설계한 보습 잠금 앰플"
    },
    {
      original: "피부 속까지 수분을 채우는",
      adjusted: "피부에 수분감을 채우고 촉촉한 컨디션을 유지하는 데 도움"
    },
    {
      original: "피부 깊이 수분 공급",
      adjusted: "다층 보습 성분축으로 피부 표면과 각질층에 수분감을 부여하는 데 도움"
    },
    {
      original: "악건성에서 벗어나기 위한 앰플",
      adjusted: "심한 건조감과 당김이 고민인 피부를 위한 고보습 앰플"
    },
    {
      original: "줄기세포 활성화",
      adjusted: "피부 컨디션 유지에 도움을 주는 보습 성분축"
    },
    {
      original: "주름개선, 탄력 증진",
      adjusted: "탄력감이 부족해 보이는 피부 컨디션을 매끄럽게 관리하는 데 도움"
    },
    {
      original: "재생 크림과 함께 피부 장벽 보호 및 피부 안정 케어",
      adjusted: "크림과 함께 사용해 건조한 피부의 장벽 컨디션을 보조하는 루틴"
    },
    {
      original: "건조한 피부에 스트레스 완화",
      adjusted: "건조로 인한 불편감을 줄이고 편안한 피부 컨디션을 유지하는 데 도움"
    }
  ],
  prohibitedClaims: [
    "건조증 치료",
    "피부 질환 치료",
    "피부 속 깊은 진피층 수분 공급",
    "줄기세포 활성화",
    "주름 제거",
    "탄력 회복 보장",
    "악건성 완치",
    "장벽 손상 치료",
    "재생 치료",
    "24시간 보습 보장",
    "48시간 보습 보장",
    "100% 수분 개선",
    "모든 피부에 무조건 무자극",
    "피부 속부터 치료"
  ]
} as const;

export const concentratedBoosterSkinHydrating25: ProductPdpData = {
  slug: "concentrated-booster-skin-hydrating-25",

  identity: {
    productNumber: "25",
    line: "Hydrating",
    lineKo: "하이드레이팅",
    nameKo: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅",
    nameEn: "25 Concentrated Booster for Skin Hydrating",
    canonicalName:
      "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 | 25 Concentrated Booster for Skin Hydrating",
    category: "Multi-Hyaluronic Hydrating Ampoule",
    routineStep: "Ampoule Step",
    shortDefinition:
      "Oligo-HA, 8종 히알루론산 콤플렉스, 9종 펩타이드, 하이드롤라이즈드식물성단백질을 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 탄력 컨디션을 보조하는 Hydrating Line 25번 고보습 앰플입니다."
  },

  variants: [
    {
      sku: "ERTY-CBSH25-30ML",
      volume: "30ml",
      image:
        "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-product.webp"
    },
    {
      sku: "ERTY-CBSH25-100ML",
      volume: "100ml",
      image:
        "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-100ml-product.webp"
    }
  ],

  seo: {
    title: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 | 수분 잠금 앰플",
    description:
      "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅은 Oligo-HA, 8종 히알루론산 콤플렉스, 9종 펩타이드, 하이드롤라이즈드식물성단백질을 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 탄력 컨디션을 보조하는 Hydrating Line 25번 고보습 앰플입니다.",
    keywords: [
      "에르띠 25 컨센트레이트 부스터",
      "25 Concentrated Booster for Skin Hydrating",
      "컨센트레이트 부스터 포 스킨 하이드레이팅",
      "에르띠 하이드레이팅 앰플",
      "수분 앰플",
      "수분 잠금 앰플",
      "히알루론산 앰플",
      "Oligo HA 앰플",
      "올리고하 앰플",
      "8종 히알루론산 앰플",
      "펩타이드 앰플",
      "건성 피부 앰플",
      "수부지 앰플",
      "악건성 피부 앰플",
      "탄력 보습 앰플",
      "하이드레이팅 부스터"
    ],
    canonicalUrl:
      "https://ertyofficial.com/products/concentrated-booster-skin-hydrating-25/",
    ogImage:
      "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-og.jpg"
  },

  hero: {
    eyebrow: "Hydrating Line · Ampoule Step",
    headline: "건조함이 남는 피부에, 수분감을 잠그는 하이드레이팅 앰플",
    subheadline:
      "Oligo-HA와 8종 히알루론산, 9종 펩타이드로 수분감·탄력 컨디션·피부결을 함께 관리하는 고보습 부스터",
    benefitChips: [
      "Oligo-HA",
      "8종 히알루론산",
      "9종 펩타이드",
      "수분 공급",
      "수분 유지",
      "탄력 컨디션",
      "피부 컨디셔닝"
    ],
    primaryImage:
      "/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-product.webp"
  },

  aiSummary: {
    oneSentence:
      "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅은 Oligo-HA와 8종 히알루론산, 9종 펩타이드를 중심으로 수분감과 탄력 컨디션을 함께 관리하는 고보습 앰플입니다.",
    paragraph:
      "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅은 Hydrating Line의 25번 앰플로, Oligo-HA와 8종 히알루론산 콤플렉스가 건조하고 당김이 느껴지는 피부에 촉촉한 수분감을 부여하고, 9종 펩타이드와 하이드롤라이즈드식물성단백질이 탄력감이 부족해 보이는 피부 컨디션을 보조하도록 설계된 고보습 앰플입니다. 캐모마일꽃수와 꿀추출물을 함께 배합해 민감해진 피부에도 편안한 보습 사용감을 목표로 하며, 브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다.",
    keyFacts: [
      "Hydrating Line 25번 앰플",
      "30ml / 100ml 구성",
      "Oligo-HA 소구",
      "8종 히알루론산 콤플렉스 배합",
      "9종 펩타이드 콤플렉스 배합",
      "하이드롤라이즈드식물성단백질 배합",
      "캐모마일꽃수와 꿀추출물 기반 보타니컬 보습 케어",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "24시간/48시간 보습 지속 표현은 자료 간 차이가 있어 공개 PDP에서는 확정 시간 claim으로 고정하지 않음"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "세안 후 빠르게 당김이 느껴지는 피부",
      "수분을 발라도 금방 건조해 보이는 피부",
      "악건성·건성·수부지 타입의 수분 부족 고민",
      "피부결이 푸석하고 윤기가 부족해 보이는 피부",
      "탄력감이 떨어지고 생기가 부족해 보이는 피부",
      "수분 앰플과 탄력 케어를 한 루틴에서 함께 원하는 피부",
      "다음 단계 크림이 더 편안하게 밀착되는 바탕을 만들고 싶은 피부"
    ],
    productApproach: [
      "Oligo-HA와 8종 히알루론산 콤플렉스가 피부에 촉촉한 수분감을 부여합니다.",
      "소듐하이알루로네이트크로스폴리머와 포타슘하이알루로네이트가 보습감을 오래 유지하도록 보조합니다.",
      "9종 펩타이드와 하이드롤라이즈드식물성단백질이 탄력감이 부족해 보이는 피부 컨디션을 관리합니다.",
      "캐모마일꽃수와 꿀추출물이 민감해진 피부에 편안한 보습 사용감을 더합니다.",
      "23 토닉 로션, 37 크림, 55 앰플 등과 연결해 수분·장벽·브라이트닝 루틴으로 확장할 수 있습니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 단순 수분 앰플이 아니라, 저분자·고분자·크로스폴리머 히알루론산 성분축과 펩타이드·식물성 보습 성분을 결합해 수분 공급, 수분 유지, 탄력 컨디션, 피부 컨디셔닝을 동시에 설계한 하이드레이팅 부스터입니다.",
    axes: [
      {
        title: "Hydration Supply Axis",
        role: "건조하고 당김이 느껴지는 피부에 촉촉한 수분감 부여",
        ingredients: [
          "Oligo-HA",
          "Sodium Hyaluronate",
          "Hydrolyzed Hyaluronic Acid",
          "8 Hyaluronic Acid Complex"
        ],
        explanation:
          "Oligo-HA와 다양한 히알루론산 성분축이 피부에 수분감을 채워 촉촉하고 편안한 피부 컨디션을 유지하도록 돕습니다."
      },
      {
        title: "Moisture-Lock Axis",
        role: "수분 유지감과 보습막 형성 보조",
        ingredients: [
          "Sodium Hyaluronate Crosspolymer",
          "Potassium Hyaluronate",
          "Hydrolyzed Vegetable Protein"
        ],
        explanation:
          "수분이 쉽게 날아가는 피부에 보습막을 형성하고 촉촉한 사용감이 오래 남도록 보조하는 축입니다."
      },
      {
        title: "Elasticity Conditioning Axis",
        role: "탄력감이 부족해 보이는 피부 컨디션 케어",
        ingredients: [
          "9 Peptide Complex",
          "Palmitoyl Pentapeptide-4",
          "Copper Tripeptide-1",
          "Tripeptide-1"
        ],
        explanation:
          "펩타이드 성분축이 푸석하고 힘이 부족해 보이는 피부를 매끄럽고 탄탄해 보이는 컨디션으로 관리하는 데 도움을 줍니다."
      },
      {
        title: "Botanical Comfort Axis",
        role: "민감해진 피부의 편안한 보습 컨디셔닝",
        ingredients: ["Anthemis Nobilis Flower Water", "Honey Extract"],
        explanation:
          "캐모마일꽃수와 꿀추출물이 건조로 민감해진 피부에 편안한 보습 사용감을 더하고 피부 컨디션을 부드럽게 정돈합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "올리고-하",
      nameEn: "Oligo-HA",
      inci: "Hydrolyzed Hyaluronic Acid",
      role: "저분자 수분 공급 성분축",
      consumerBenefit:
        "건조하고 당김이 느껴지는 피부에 촉촉한 수분감을 부여하는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "푸석한 피부"]
    },
    {
      nameKo: "8종 히알루론산 콤플렉스",
      nameEn: "8 Hyaluronic Acid Complex",
      role: "멀티 하이드레이션 케어",
      consumerBenefit:
        "다양한 히알루론산 성분축이 피부에 수분감을 채우고 촉촉한 피부 상태 유지에 도움을 줍니다.",
      relatedConcerns: ["수분 부족", "건성 피부", "수부지 피부", "메이크업 들뜸"]
    },
    {
      nameKo: "소듐하이알루로네이트크로스폴리머",
      nameEn: "Sodium Hyaluronate Crosspolymer",
      role: "수분 유지와 보습막 형성 보조",
      consumerBenefit:
        "피부 표면에 촉촉한 보습감을 남겨 수분이 쉽게 날아가는 피부를 편안하게 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["수분 유지", "건조", "당김", "보습막"]
    },
    {
      nameKo: "하이드롤라이즈드식물성단백질",
      nameEn: "Hydrolyzed Vegetable Protein",
      role: "보습 보호막과 피부 컨디셔닝 보조",
      consumerBenefit:
        "피부 표면에 부드러운 보습감을 더해 건강하고 촉촉한 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["보습", "피부 컨디셔닝", "푸석함", "윤기 부족"]
    },
    {
      nameKo: "9종 펩타이드 콤플렉스",
      nameEn: "9 Peptide Complex",
      role: "탄력 컨디션 케어",
      consumerBenefit:
        "힘이 부족해 보이는 피부를 매끄럽고 탄탄해 보이는 컨디션으로 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["탄력 저하", "푸석함", "피부 활력", "노화 고민"]
    },
    {
      nameKo: "팔미토일펜타펩타이드-4",
      nameEn: "Palmitoyl Pentapeptide-4",
      role: "탄력감 보조 펩타이드",
      consumerBenefit:
        "건조로 인해 힘이 없어 보이는 피부의 탄력 컨디션을 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["탄력감", "피부 컨디션", "푸석함"]
    },
    {
      nameKo: "카퍼트라이펩타이드-1",
      nameEn: "Copper Tripeptide-1",
      role: "피부 컨디셔닝 펩타이드",
      consumerBenefit:
        "피부를 매끄럽고 건강해 보이는 컨디션으로 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["피부결", "탄력감", "컨디션 저하"]
    },
    {
      nameKo: "캐모마일꽃수",
      nameEn: "Anthemis Nobilis Flower Water",
      role: "식물 유래 진정·보습 케어",
      consumerBenefit:
        "건조로 민감해진 피부에 편안한 보습감을 더해 부드러운 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["민감함", "건조", "피부 불편감", "보습"]
    },
    {
      nameKo: "꿀추출물",
      nameEn: "Honey Extract",
      role: "보습과 윤기감 보조",
      consumerBenefit:
        "피부에 촉촉하고 부드러운 윤기감을 더해 건조해 보이는 피부를 편안하게 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["윤기 부족", "건조", "푸석함", "보습"]
    }
  ],

  texture: {
    type: "투명하고 촉촉한 에센스 앰플",
    finish: "끈적임 부담을 낮춘 촉촉하고 매끄러운 마무리",
    absorption: "토너 다음 앰플 단계에서 손으로 두드려 흡수",
    sensoryCopy:
      "물처럼 가볍게 퍼지면서도 피부 위에 촉촉한 보습감을 남기는 에센스 제형으로, 건조하고 당김이 느껴지는 피부에 편안한 수분감을 더하는 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 저자극 솔루션입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
      image:
        "/images/products/concentrated-booster-skin-hydrating-25/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "ingredient",
      title: "Oligo-HA 원료 소구",
      summary:
        "브랜드 제공 자료는 초저분자 Oligo-HA가 일반 HA 대비 높은 흡수율을 보인다는 원료 소구를 제시합니다. 공개 PDP에서는 제품 단독 임상효과로 단정하지 않고 수분 전달감 보조 성분축으로 설명합니다.",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 원료 자료와 제품 체감은 개인 피부 상태에 따라 다를 수 있습니다."
    },
    {
      type: "beforeAfter",
      title: "25앰플 사용 반응 예시",
      summary:
        "브랜드 자료에는 제품 사용 전후 반응 예시와 사내 자체 임상 후기가 포함되어 있습니다. 해당 이미지는 참고용이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 상세페이지 및 제품 소개서 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너로 피부결을 정돈합니다.",
      "적당량을 손에 덜어 얼굴 전체와 목에 고르게 펴 바릅니다.",
      "건조가 심하게 느껴지는 부위에는 한 번 더 레이어링합니다.",
      "손바닥으로 가볍게 감싸며 두드려 흡수시킵니다.",
      "마지막 단계에는 피부 상태에 맞는 크림으로 보습막을 마무리합니다."
    ],
    frequency:
      "일반 피부는 데일리 앰플로 사용할 수 있으며, 건조감이 큰 시기에는 아침·저녁 루틴에서 피부 상태에 맞게 조절해 사용합니다.",
    cautions: [
      "제품 사용 중 붉어짐, 가려움, 따가움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "눈가와 입가 등 예민한 부위는 사용량을 조절하십시오.",
      "펩타이드, 꿀추출물 등 특정 성분에 민감한 피부는 사용 전 국소 부위 테스트를 권장합니다.",
      "피부 상태에 따라 사용감과 체감은 달라질 수 있습니다."
    ]
  },

  routines: [
    {
      title: "25 앰플 + 15 앰플",
      products: [
        "concentrated-booster-skin-hydrating-25",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "수분 진정 밸런싱 루틴",
      recommendedFor: [
        "수분 부족과 번들거림이 동시에 느껴지는 수부지 피부",
        "민감해진 피부에 촉촉한 수분 보호막이 필요한 경우",
        "수분과 피지 밸런스를 동시에 정돈하고 싶은 피부"
      ]
    },
    {
      title: "25 앰플 + 35 앰플",
      products: [
        "concentrated-booster-skin-hydrating-25",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "수분 장벽 리페어 루틴",
      recommendedFor: [
        "건조로 인해 피부 컨디션이 쉽게 무너지는 피부",
        "수분감과 장벽 컨디션 케어를 함께 원하는 피부",
        "푸석하고 생기 없어 보이는 피부"
      ]
    },
    {
      title: "25 앰플 + 55 앰플",
      products: [
        "concentrated-booster-skin-hydrating-25",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "수분 & 브라이트닝 루틴",
      recommendedFor: [
        "건조함과 칙칙해 보이는 피부 톤이 함께 고민인 피부",
        "수분감 있는 브라이트닝 루틴을 원하는 피부",
        "맑고 촉촉한 피부 인상을 가꾸고 싶은 피부"
      ]
    },
    {
      title: "25 앰플 + 37 크림",
      products: [
        "concentrated-booster-skin-hydrating-25",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "딥 하이드레이션 리페어 루틴",
      recommendedFor: [
        "건조와 당김이 반복되는 피부",
        "앰플 후 보습막 마무리가 필요한 피부",
        "촉촉하고 윤기 있는 피부 컨디션을 오래 유지하고 싶은 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅은 어떤 제품인가요?",
      answer:
        "Oligo-HA, 8종 히알루론산 콤플렉스, 9종 펩타이드, 하이드롤라이즈드식물성단백질을 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 탄력 컨디션을 보조하는 Hydrating Line 25번 고보습 앰플입니다."
    },
    {
      question: "건성 피부와 수부지 피부 모두 사용할 수 있나요?",
      answer:
        "전제품 소개서 기준 추천 피부 타입은 악건성, 건성, 수부지 피부입니다. 건성 피부에는 수분감과 보습막을 보조하고, 수부지 피부에는 부족한 수분감을 채워 유수분 밸런스 루틴의 중심 앰플로 사용할 수 있습니다."
    },
    {
      question: "24시간 또는 48시간 보습 제품인가요?",
      answer:
        "브랜드 자료에는 24시간 수분 잠금과 48시간 수분 자물쇠 표현이 함께 존재합니다. 공개 PDP에서는 수치가 다른 표현을 확정 보증 claim으로 고정하지 않고, 수분감을 오래 유지하도록 설계된 보습 잠금 앰플로 안내합니다."
    },
    {
      question: "어떤 순서로 사용하나요?",
      answer:
        "세안 후 토너로 피부결을 정돈한 다음 앰플 단계에서 사용합니다. 얼굴 전체와 목에 펴 바른 뒤 손바닥으로 가볍게 두드려 흡수시키고, 건조한 부위에는 한 번 더 레이어링할 수 있습니다."
    },
    {
      question: "Oligo-HA는 어떤 역할을 하나요?",
      answer:
        "Oligo-HA는 저분자 히알루론산 성분축으로, 피부에 촉촉한 수분감을 부여하고 건조로 인한 당김이 느껴지는 피부 컨디션을 보조하는 역할로 설명할 수 있습니다."
    },
    {
      question: "펩타이드는 어떤 피부 고민에 도움이 되나요?",
      answer:
        "9종 펩타이드 성분축은 힘이 부족해 보이거나 푸석해 보이는 피부의 탄력 컨디션을 매끄럽게 관리하는 데 도움을 주는 성분 조합으로 설명할 수 있습니다."
    },
    {
      question: "민감한 피부도 사용할 수 있나요?",
      answer:
        "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다. 다만 개인의 피부 상태에 따라 반응은 달라질 수 있으므로 민감한 피부는 적은 양부터 사용해 피부 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "수분과 피지 밸런스를 함께 보고 싶을 때는 15 앰플, 장벽 컨디션까지 보조하고 싶을 때는 35 앰플 또는 37 크림, 칙칙해 보이는 피부 톤까지 함께 관리하고 싶을 때는 55 앰플과의 루틴이 적합합니다."
    }
  ],

  relatedProducts: [
    "tonic-lotion-skin-hydrating-23",
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-revitalizing-35",
    "concentrated-booster-skin-brightening-55",
    "intensive-cellular-er-cream-37",
    "derma-hydro-aquax-cream-27"
  ],

  claims: {
    allowed: [
      "피부에 촉촉한 수분감을 부여하는 데 도움",
      "건조로 인한 당김이 느껴지는 피부 컨디션 케어에 도움",
      "피부 표면에 보습막을 형성해 촉촉한 피부 상태 유지에 도움",
      "탄력감이 부족해 보이는 피부 컨디션 관리에 도움",
      "민감해진 피부에 편안한 보습 사용감 제공",
      "Oligo-HA와 8종 히알루론산 콤플렉스 소구",
      "9종 펩타이드와 하이드롤라이즈드식물성단백질 소구",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "건조증 치료",
      "피부 속 깊이 진피층 수분 공급",
      "줄기세포 활성화",
      "주름 제거",
      "악건성 완치",
      "장벽 손상 치료",
      "피부 재생 치료",
      "24시간 보습 보장",
      "48시간 보습 보장",
      "100% 수분 개선",
      "모든 피부에 무조건 무자극",
      "즉시 탄력 회복"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 리뷰, 원료 소구 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const concentratedBoosterSkinHydrating25SchemaHints = {
  schemaType: "ProductGroup",
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-hydrating-25/`,
  productGroupID: "concentrated-booster-skin-hydrating-25",
  variesBy: ["https://schema.org/size"],
  variantStrategy: "Use one canonical PDP with 30ml and 100ml variants under ProductGroup.",
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "25 Concentrated Booster for Skin Hydrating",
      item: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-hydrating-25/`
    }
  ],
  faqPage: {
    useVisibleFaqOnly: true,
    source: "concentratedBoosterSkinHydrating25.faq"
  },
  productJsonLd: {
    useProductGroup: true,
    useVariants: true,
    doNotAddPriceUntilCommerceConnected: true,
    doNotAddAvailabilityUntilCommerceConnected: true,
    brandName: "ERTY",
    category: "Skincare > Ampoule > Hydrating Ampoule"
  },
  caution:
    "24h and 48h hydration-duration expressions are inconsistent across source assets. Do not encode a fixed duration claim in JSON-LD or visible PDP copy unless the brand confirms the official claim."
} as const;

export const concentratedBoosterSkinHydrating25MerchantFeedDraft = {
  itemGroupId: "concentrated-booster-skin-hydrating-25",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Ampoule > Hydrating Ampoule",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-CBSH25-30ML",
      title: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 30ml",
      description:
        "Oligo-HA, 8종 히알루론산 콤플렉스, 9종 펩타이드를 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 탄력 컨디션을 보조하는 하이드레이팅 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-hydrating-25/?variant=30ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-30ml-product.webp`,
      size: "30ml"
    },
    {
      id: "ERTY-CBSH25-100ML",
      title: "에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅 100ml",
      description:
        "Oligo-HA, 8종 히알루론산 콤플렉스, 9종 펩타이드를 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 탄력 컨디션을 보조하는 하이드레이팅 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-hydrating-25/?variant=100ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-hydrating-25/concentrated-booster-skin-hydrating-25-100ml-product.webp`,
      size: "100ml"
    }
  ],
  omittedUntilCommerceConnected: ["price", "sale_price", "availability", "shipping", "return_policy"]
} as const;

export const concentratedBoosterSkinHydrating25CodexHandoff = {
  targetFile: "src/data/products/concentrated-booster-skin-hydrating-25.ts",
  route: "/products/concentrated-booster-skin-hydrating-25/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-hydrating-25/`,
  registerExport: "concentratedBoosterSkinHydrating25",
  tasks: [
    "Move or copy the ProductPdpData export into the target file.",
    "Register concentratedBoosterSkinHydrating25 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 25 컨센트레이트 부스터 포 스킨 하이드레이팅.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 30ml and 100ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from concentratedBoosterSkinHydrating25ImageAlt.",
    "Keep hydration-duration, deep-hydration, peptide, stem-cell, wrinkle, barrier, and sensitive-skin claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com/products/concentrated-booster-skin-hydrating-25.",
    "No price or availability appears in JSON-LD until commerce data is connected.",
    "30ml and 100ml variants are visible in PDP and ProductGroup JSON-LD.",
    "24h/48h hydration duration is not encoded as a fixed guaranteed claim.",
    "Oligo-HA absorption comparison is framed as brand-provided ingredient data, not a guaranteed product effect.",
    "Hydrolyzed Vegetable Protein is not described as stem-cell activation in visible PDP copy.",
    "Peptide claims are framed as elasticity-condition care, not wrinkle removal or certified wrinkle improvement unless separate functional evidence is provided.",
    "FAQ content is visible on the page before FAQPage schema is generated.",
    "All important product content is rendered as HTML text, not only inside detail-page images."
  ]
} as const;

export default concentratedBoosterSkinHydrating25;
