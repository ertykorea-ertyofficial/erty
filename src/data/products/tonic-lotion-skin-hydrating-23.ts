import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 23 Tonic Lotion for Skin Hydrating
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const tonicLotionSkinHydrating23SourceAudit = {
  slug: "tonic-lotion-skin-hydrating-23",
  productEntity:
    "에르띠 23 토닉 로션 포 스킨 하이드레이팅 | 23 Tonic Lotion for Skin Hydrating",
  sourceFiles: [
    {
      fileName: "23 Tonic Lotion for skin Hydrating.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming",
        "capacity 140ml / 480ml",
        "Mari Anti Toxin positioning",
        "Laminaria Japonica Extract positioning",
        "Undaria Pinnatifida Extract positioning",
        "Illicium Verum Fruit Extract positioning",
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
        "23 Tonic Lotion line position",
        "140ml / 480ml configuration",
        "mineral hydrating toner positioning",
        "Mari Anti Toxin, marine algae extract, and star anise summary",
        "recommended skin types and line-level positioning",
        "moisturizing-care treatment manual links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "23(140ml)_*.jpg / 23(480ml)_*.jpg/png",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "hydrating mineral toner positioning",
        "Mari Anti Toxin marine extract detail context",
        "Star Anise detail context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 23 토닉 로션 포 스킨 하이드레이팅 / 23 Tonic Lotion for Skin Hydrating으로 공개 PDP에서 정규화한다.",
    "Hydrating Line의 23번 토닉 로션/미네랄 토너 제품이다.",
    "용량은 140ml와 480ml 두 가지 구성이 제시되어 있다.",
    "전제품 소개서 기준 미네랄이 풍부한 해조류 성분 함유로 윤기와 탄력을 부여하고 활력을 주는 토너로 소개된다.",
    "전제품 소개서 기준 주요 성분은 Mari Anti Toxin, 다시마추출물, 납작파래추출물, 스피룰리나 플란테시스추출물, 미역추출물, 우뭇가사리추출물, 스타아니스추출물이다.",
    "기술 소개서 기준 주요 성분축은 Mari Anti Toxin, Laminaria Japonica Extract, Undaria Pinnatifida Extract, Illicium Verum Fruit Extract이다.",
    "제품 특장점은 수분/보습, 진정/보호, 탄력 케어, 항산화·항염 문맥으로 구성된다.",
    "브랜드 자료 기준 사용 임상 후기에는 속건조와 탄력 부족 피부 케이스가 제시되며, 피부 보습·속건조 완화·탄력 향상 문맥이 포함되어 있다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "전제품 소개서 모이스처라이징 케어 매뉴얼 기준 23 토닉 로션은 수분 공급과 다음 제품 흡수 용이 목적의 토너 단계로 쓰인다."
  ],
  unresolvedOrControlledFacts: [
    "사용자 요청에는 150ml가 언급되었으나, 제공된 PDF와 이미지 파일명 및 제품 자료 기준 23번 제품의 소매 용량은 140ml / 480ml로 정리한다.",
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "기술 소개서와 전제품 소개서에는 항염, 항균, 미세먼지 제거, 중금속 정화, 티로시나아제 억제, 피부 수분 통로 등의 강한 표현이 있으나 공개 PDP에서는 화장품 안전 표현으로 조정한다.",
    "미백·톤 개선 문맥은 기능성 인증 또는 leave-on 효능 보장으로 오인되지 않도록 맑고 생기 있는 피부 인상 케어 수준으로 제한한다.",
    "사용 임상 후기와 B&A 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다.",
    "전문가용 트리트먼트 매뉴얼의 용량·시간 정보는 에스테틱 루틴 맥락에서만 사용하고 일반 소비자 사용법과 혼동하지 않는다."
  ]
} as const;

export const tonicLotionSkinHydrating23ImageAlt = [
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-product.jpg",
    alt: "에르띠 23 토닉 로션 포 스킨 하이드레이팅 140ml 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-detail-1.jpg",
    alt: "풍부한 보습감의 미네랄 토너 에르띠 23 토닉 로션 140ml 상세 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-detail-2.jpg",
    alt: "Mari Anti Toxin 해조류 성분과 스타아니스추출물을 설명하는 에르띠 23 토닉 로션 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-detail-3.jpg",
    alt: "에르띠 23 토닉 로션 사용법과 FAQ 및 제품 가이드 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-product.png",
    alt: "에르띠 23 토닉 로션 포 스킨 하이드레이팅 480ml 대용량 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-detail-1.jpg",
    alt: "에르띠 23 토닉 로션 480ml 하이드레이팅 미네랄 토너 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-detail-2.jpg",
    alt: "마르지 않는 촉촉함을 선사하는 에르띠 23 토닉 로션 480ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-detail-3.png",
    alt: "에르띠 23 토닉 로션 480ml 사용법 정보와 제품 사양 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const tonicLotionSkinHydrating23ClaimRiskClassification = {
  safeClaims: [
    "140ml / 480ml 토닉 로션",
    "Hydrating Line 23번 미네랄 토너",
    "해조류 유래 성분을 담은 촉촉한 수분 토너",
    "Mari Anti Toxin, 다시마추출물, 미역추출물, 스타아니스추출물 소구",
    "건조하고 당김이 느껴지는 피부의 수분감 있는 토너 루틴",
    "피부 표면에 촉촉한 수분감을 부여하는 데 도움",
    "다음 단계 스킨케어가 편안하게 올라가는 피부 바탕을 만드는 데 도움",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "피부 수분 통로를 열어 수분을 깊숙이 전달",
      adjusted: "피부 표면에 수분감을 채우고 다음 단계 보습 루틴을 준비하는 데 도움"
    },
    {
      original: "미세먼지·중금속 등 외부 오염 물질로부터 피부를 보호하고 정화",
      adjusted: "외부 환경에 노출된 피부 표면을 산뜻하고 깨끗한 컨디션으로 정돈하는 데 도움"
    },
    {
      original: "TEWL 감소를 통해 보습 유지력 강화",
      adjusted: "피부 표면의 수분감이 오래 머무는 듯한 보습막 사용감을 보조"
    },
    {
      original: "항산화·항염·진정",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하고 생기 있는 피부 인상을 보조"
    },
    {
      original: "항균 작용으로 피부 유해균 미생물 증식 억제",
      adjusted: "식물 유래 성분축으로 피부를 산뜻하고 균형 잡힌 컨디션으로 관리하는 데 도움"
    },
    {
      original: "티로시나아제 억제효과까지 더하여 환하고 탄력 있는 피부",
      adjusted: "수분감과 생기를 더해 맑고 균일해 보이는 피부 인상을 가꾸는 데 도움"
    },
    {
      original: "노화억제, 피부 보호",
      adjusted: "외부 환경으로 지친 피부 컨디션과 생기 저하를 케어하는 데 도움"
    },
    {
      original: "피부 속 노폐물 정화",
      adjusted: "피부 표면을 산뜻하게 정돈하고 수분감 있는 토너 루틴을 보조"
    }
  ],
  prohibitedClaims: [
    "피부 질환 치료",
    "염증 치료",
    "항염 치료",
    "항균 치료",
    "유해균 제거 보장",
    "중금속 제거 보장",
    "미세먼지 완전 제거",
    "티로시나아제 억제 보장",
    "미백 치료",
    "색소침착 치료",
    "노화 억제 보장",
    "피부 수분 통로를 실제로 개방한다는 표현",
    "수분이 피부 깊숙이 침투 보장",
    "피부 장벽 완전 회복",
    "100% 개선",
    "무조건 무자극"
  ]
} as const;

export const tonicLotionSkinHydrating23: ProductPdpData = {
  slug: "tonic-lotion-skin-hydrating-23",

  identity: {
    productNumber: "23",
    line: "Hydrating",
    lineKo: "하이드레이팅",
    nameKo: "에르띠 23 토닉 로션 포 스킨 하이드레이팅",
    nameEn: "23 Tonic Lotion for Skin Hydrating",
    canonicalName:
      "에르띠 23 토닉 로션 포 스킨 하이드레이팅 | 23 Tonic Lotion for Skin Hydrating",
    category: "Hydrating Mineral Tonic Lotion",
    routineStep: "Toner Step",
    shortDefinition:
      "Mari Anti Toxin과 해조류 유래 미네랄 성분축을 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 채우고 다음 단계 보습 루틴을 준비하는 Hydrating Line 23번 미네랄 토너입니다."
  },

  variants: [
    {
      sku: "ERTY-TLSH23-140ML",
      volume: "140ml",
      image:
        "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-product.jpg"
    },
    {
      sku: "ERTY-TLSH23-480ML",
      volume: "480ml",
      image:
        "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 23 토닉 로션 포 스킨 하이드레이팅 | 해조류 미네랄 수분 토너",
    description:
      "에르띠 23 토닉 로션 포 스킨 하이드레이팅은 Mari Anti Toxin, 다시마추출물, 미역추출물, 스타아니스추출물을 담은 Hydrating Line 미네랄 토너입니다. 건조하고 당김이 느껴지는 피부에 수분감을 부여하고, 다음 단계 앰플과 크림이 편안하게 올라가는 촉촉한 피부 바탕을 준비합니다.",
    keywords: [
      "에르띠 23 토닉 로션",
      "23 Tonic Lotion for Skin Hydrating",
      "토닉 로션 포 스킨 하이드레이팅",
      "에르띠 하이드레이팅 토너",
      "해조류 토너",
      "미네랄 토너",
      "수분 토너",
      "속건조 토너",
      "건성 피부 토너",
      "민감 피부 토너",
      "당김 없는 토너",
      "Mari Anti Toxin",
      "다시마추출물 토너",
      "미역추출물 토너",
      "스타아니스추출물",
      "Hydrating Line 23"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/`,
    ogImage:
      "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-og.jpg"
  },

  hero: {
    eyebrow: "Hydrating Line 23 · Mineral Tonic Lotion",
    headline: "피부 갈증을 오래 촉촉하게 붙잡는 미네랄 수분 토너",
    subheadline:
      "Mari Anti Toxin과 해조류 유래 미네랄 성분축으로 건조하고 당김이 느껴지는 피부를 촉촉하게 정돈합니다.",
    benefitChips: [
      "수분 보습",
      "속건조 케어",
      "해조류 미네랄",
      "피부결 정돈",
      "다음 단계 흡수 준비",
      "Hydrating Line 23"
    ],
    primaryImage:
      "/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-product.jpg"
  },

  aiSummary: {
    oneSentence:
      "에르띠 23 토닉 로션 포 스킨 하이드레이팅은 Mari Anti Toxin과 해조류 유래 미네랄 성분축을 담은 Hydrating Line 수분 토너입니다.",
    paragraph:
      "에르띠 23 토닉 로션 포 스킨 하이드레이팅은 다시마추출물, 미역추출물, 납작파래추출물, 스피룰리나 플란테시스추출물, 우뭇가사리추출물 등 해조류 유래 성분을 중심으로 건조하고 당김이 느껴지는 피부에 수분감을 부여하는 미네랄 토너입니다. 스타아니스추출물이 외부 환경으로 지친 피부 컨디션을 편안하게 정돈하도록 보조하고, 토너 단계에서 피부 표면을 촉촉하게 준비해 다음 단계 앰플과 크림이 편안하게 올라가는 바탕을 만들어 줍니다.",
    keyFacts: [
      "Hydrating Line 23번 토닉 로션",
      "140ml / 480ml 구성",
      "Mari Anti Toxin 성분축 소구",
      "다시마추출물, 미역추출물, 납작파래추출물, 스피룰리나 플란테시스추출물, 우뭇가사리추출물 배합",
      "스타아니스추출물 배합",
      "건조하고 당김이 느껴지는 피부의 수분감 있는 토너 루틴",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "브랜드 자료 기준 23토너 + 25앰플 딥 하이드레이션 루틴 제안"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "세안 후 빠르게 당김이 느껴지는 피부",
      "수분 부족으로 피부 표면이 푸석하고 거칠어 보이는 피부",
      "어떤 제품을 발라도 금방 건조해지는 피부",
      "메이크업이 들뜨고 촉촉한 피부 바탕이 부족한 피부",
      "칙칙하고 생기 없는 피부 인상이 함께 느껴지는 피부",
      "토너 단계에서 수분감을 먼저 채우고 싶은 피부"
    ],
    productApproach: [
      "Mari Anti Toxin 해조류 성분축으로 피부 표면에 산뜻한 수분감을 부여합니다.",
      "다시마추출물과 미역추출물이 촉촉한 보습막 사용감을 보조합니다.",
      "납작파래추출물, 스피룰리나 플란테시스추출물, 우뭇가사리추출물이 수분감과 생기 있는 피부 컨디션을 보조합니다.",
      "스타아니스추출물이 외부 환경으로 지친 피부를 편안하게 정돈하는 데 도움을 줍니다.",
      "토너 단계에서 피부를 촉촉하게 준비해 25 앰플, 37 크림, 55 앰플 등 다음 루틴과의 연결성을 높입니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 단순한 물 토너가 아니라 해조류 유래 미네랄 성분축과 스타아니스추출물을 결합해 피부 표면의 수분감, 보습막 사용감, 피부 컨디션 정돈을 함께 설계한 Hydrating Line 토너입니다.",
    axes: [
      {
        title: "Marine Hydration Axis",
        role: "수분감 부여와 촉촉한 토너 사용감",
        ingredients: [
          "Mari Anti Toxin",
          "Laminaria Japonica Extract",
          "Undaria Pinnatifida Extract",
          "Gelidium Cartilagineum Extract"
        ],
        explanation:
          "해조류 유래 성분축이 건조하고 당김이 느껴지는 피부 표면에 촉촉한 수분감을 부여하고 보습 루틴을 위한 바탕을 준비합니다."
      },
      {
        title: "Mineral Conditioning Axis",
        role: "푸석하고 생기 없는 피부 컨디션 정돈",
        ingredients: [
          "Enteromorpha Compressa Extract",
          "Spirulina Platensis Extract",
          "Glycerin"
        ],
        explanation:
          "해양 유래 식물성 성분과 글리세린이 수분감 있는 마무리와 생기 있는 피부 인상을 보조합니다."
      },
      {
        title: "Comfort Protection Axis",
        role: "외부 환경으로 지친 피부의 편안한 컨디션 케어",
        ingredients: ["Illicium Verum Fruit Extract", "Mari Anti Toxin"],
        explanation:
          "스타아니스추출물과 해조류 성분축이 외부 환경으로 예민해진 피부를 편안하게 정돈하는 데 도움을 줍니다."
      },
      {
        title: "Routine Prep Axis",
        role: "다음 단계 스킨케어 흡수 환경 준비",
        ingredients: [
          "Laminaria Japonica Extract",
          "Undaria Pinnatifida Extract",
          "Glycerin"
        ],
        explanation:
          "토너 단계에서 피부 표면을 촉촉하게 정돈해 앰플과 크림이 편안하게 올라가는 루틴 연결성을 높입니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "마리 안티 톡신",
      nameEn: "Mari Anti Toxin",
      inci: "Marine Algae Complex",
      role: "해조류 유래 수분·컨디셔닝 성분축",
      consumerBenefit:
        "외부 환경에 노출된 피부 표면을 산뜻하게 정돈하고 촉촉한 수분감을 부여하는 데 도움을 줍니다.",
      relatedConcerns: ["속건조", "푸석함", "외부 환경 노출", "수분 부족"]
    },
    {
      nameKo: "다시마추출물",
      nameEn: "Laminaria Japonica Extract",
      inci: "Laminaria Japonica Extract",
      role: "해조류 유래 보습막 사용감 보조",
      consumerBenefit:
        "피부 표면에 촉촉한 수분감을 남기고 건조로 인한 당김 부담을 낮추는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "푸석한 피부"]
    },
    {
      nameKo: "미역추출물",
      nameEn: "Undaria Pinnatifida Extract",
      inci: "Undaria Pinnatifida Extract",
      role: "수분감과 윤기 보조",
      consumerBenefit:
        "수분감 있는 마무리와 건강해 보이는 피부 윤기를 보조합니다.",
      relatedConcerns: ["푸석함", "생기 부족", "건조", "윤기 부족"]
    },
    {
      nameKo: "납작파래추출물",
      nameEn: "Enteromorpha Compressa Extract",
      inci: "Enteromorpha Compressa Extract",
      role: "미네랄 컨디셔닝 보조",
      consumerBenefit:
        "피부를 산뜻하고 생기 있는 컨디션으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "수분 부족", "생기 저하", "피부 컨디션 저하"]
    },
    {
      nameKo: "스피룰리나 플란테시스추출물",
      nameEn: "Spirulina Platensis Extract",
      inci: "Spirulina Platensis Extract",
      role: "해양 유래 생기 케어 보조",
      consumerBenefit:
        "외부 환경으로 지친 피부에 생기 있는 인상을 더하는 데 도움을 줍니다.",
      relatedConcerns: ["생기 부족", "외부 환경 노출", "푸석함", "칙칙한 인상"]
    },
    {
      nameKo: "우뭇가사리추출물",
      nameEn: "Gelidium Cartilagineum Extract",
      inci: "Gelidium Cartilagineum Extract",
      role: "피부 표면 컨디셔닝과 보습감 보조",
      consumerBenefit:
        "피부 표면을 촉촉하고 편안한 상태로 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "피부결 거침", "수분감 부족"]
    },
    {
      nameKo: "스타아니스추출물",
      nameEn: "Star Anise Extract",
      inci: "Illicium Verum Fruit Extract",
      role: "피부 보호와 진정 컨디션 보조",
      consumerBenefit:
        "외부 환경으로 예민해진 피부를 편안하게 정돈하고 수분 루틴의 안정감을 보조합니다.",
      relatedConcerns: ["예민함", "외부 자극", "피부 컨디션 저하", "건조로 인한 불편감"]
    }
  ],

  texture: {
    type: "산뜻한 워터리 미네랄 토너",
    finish: "가볍고 촉촉한 수분감이 남는 마무리",
    absorption: "손 흡수, 화장솜 닦토, 토너팩, 미스트형 활용 가능",
    sensoryCopy:
      "청량한 블루 워터 제형이 피부 표면에 빠르게 퍼지며, 끈적임보다 산뜻한 수분감을 남겨 다음 단계 앰플과 크림을 편안하게 연결하는 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 저자극 토너입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태와 사용 환경에 따라 사용감과 반응은 달라질 수 있습니다.",
      image:
        "/images/products/tonic-lotion-skin-hydrating-23/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "brandData",
      title: "속건조·탄력 부족 피부 사용 케이스",
      summary:
        "브랜드 자료의 사내 자체 임상 후기에는 속건조와 탄력 부족 피부 케이스가 제시되며, 피부 보습과 속건조 완화, 탄력 향상 문맥이 포함되어 있습니다.",
      sourceNote:
        "브랜드 제공 사내 자체 임상 후기 기준. 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      image:
        "/images/products/tonic-lotion-skin-hydrating-23/evidence-before-after-hydration-case.jpg"
    },
    {
      type: "ingredient",
      title: "Mari Anti Toxin 기반 해조류 미네랄 성분축",
      summary:
        "전제품 소개서와 상세페이지는 다시마추출물, 납작파래추출물, 미역추출물, 스피룰리나 플란테시스추출물, 우뭇가사리추출물 중심의 해조류 성분축을 제품의 핵심으로 제시합니다.",
      sourceNote: "ERTY KOREA Product Guide 및 상세페이지 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 적당량을 손바닥 또는 화장솜에 덜어냅니다.",
      "피부결을 따라 얼굴과 목 전체에 부드럽게 펴 바릅니다.",
      "손으로 가볍게 두드리며 흡수시킵니다.",
      "건조함이 느껴지는 부위에는 1–2회 레이어링해 사용할 수 있습니다.",
      "토너팩으로 사용할 경우 화장솜에 충분히 적셔 건조한 부위에 짧게 올린 뒤 흡수시킵니다."
    ],
    frequency:
      "아침과 저녁 세안 후 데일리 토너로 사용할 수 있습니다. 예민한 피부는 사용량과 레이어링 횟수를 조절하십시오.",
    cautions: [
      "상처가 있거나 극도로 예민한 부위에는 사용을 피하십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "미스트나 토너팩으로 활용할 때는 눈가에 직접 분사하거나 장시간 방치하지 마십시오.",
      "브라이트닝 루틴과 병행하는 경우 낮 시간에는 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ]
  },

  routines: [
    {
      title: "23 토너 + 25 앰플",
      products: [
        "tonic-lotion-skin-hydrating-23",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "딥 하이드레이션 루틴",
      recommendedFor: [
        "속건조로 피부가 당기고 메마른 느낌일 때",
        "피부 속까지 탄탄한 수분층을 만들고 싶을 때",
        "메이크업이 들뜨지 않는 촉촉한 피부 바탕을 만들고 싶을 때"
      ]
    },
    {
      title: "23 토너 + 55 앰플",
      products: [
        "tonic-lotion-skin-hydrating-23",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "브라이트닝 부스팅 루틴",
      recommendedFor: [
        "수분 부족으로 피부 투명도가 낮아 보일 때",
        "맑고 균일한 피부 톤 인상을 만들고 싶을 때",
        "피부 톤이 칙칙하고 생기가 떨어져 보일 때"
      ]
    },
    {
      title: "23 토너 + 37 크림",
      products: [
        "tonic-lotion-skin-hydrating-23",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "수분 밀착 톤업 루틴",
      recommendedFor: [
        "칙칙함과 건조함을 동시에 케어하고 싶을 때",
        "자연스럽게 밝아 보이는 피부 표현을 원할 때",
        "메이크업 없이도 촉촉한 피부 톤을 정돈하고 싶을 때"
      ]
    },
    {
      title: "23 토너 + 35 앰플",
      products: [
        "tonic-lotion-skin-hydrating-23",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "스킨 리페어 루틴",
      recommendedFor: [
        "피부가 얇아지고 쉽게 자극받는 상태일 때",
        "장벽이 무너져 건조와 민감이 반복될 때",
        "피부 컨디션을 단계적으로 회복시키고 싶을 때"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 23 토닉 로션은 어떤 제품인가요?",
      answer:
        "에르띠 23 토닉 로션 포 스킨 하이드레이팅은 Mari Anti Toxin과 해조류 유래 성분축을 담은 Hydrating Line 수분 토너입니다. 건조하고 당김이 느껴지는 피부에 수분감을 부여하고 다음 단계 스킨케어를 위한 촉촉한 피부 바탕을 준비하는 제품입니다."
    },
    {
      question: "건성 피부와 속건조 피부에 사용할 수 있나요?",
      answer:
        "네. 이 제품은 건조함과 당김이 느껴지는 피부, 수분감이 부족해 푸석해 보이는 피부를 위한 토너 단계에 적합합니다. 건조함이 심한 날에는 손으로 1–2회 레이어링해 사용할 수 있습니다."
    },
    {
      question: "화장솜으로 닦아야 하나요, 손으로 흡수시켜야 하나요?",
      answer:
        "둘 다 가능합니다. 피부 표면 정돈이 필요할 때는 화장솜에 묻혀 피부결을 따라 부드럽게 닦아내고, 건조함이 느껴지는 날에는 손으로 두드려 흡수시키는 방식을 권장합니다."
    },
    {
      question: "미스트나 토너팩처럼 사용할 수 있나요?",
      answer:
        "브랜드 자료상 거품토너, 미스트, 토너팩, 닦토, 흡토 등 다양한 활용이 가능한 토너로 소개됩니다. 다만 미스트로 사용할 때는 눈가 직접 분사를 피하고, 토너팩으로 사용할 때는 장시간 방치하지 않는 것이 좋습니다."
    },
    {
      question: "Mari Anti Toxin은 어떤 역할을 하나요?",
      answer:
        "Mari Anti Toxin은 해조류 유래 성분축으로, 피부 표면에 촉촉한 수분감을 부여하고 외부 환경으로 지친 피부를 산뜻하고 편안한 컨디션으로 정돈하는 데 도움을 주는 성분 컨셉입니다."
    },
    {
      question: "스타아니스추출물은 왜 들어 있나요?",
      answer:
        "스타아니스추출물은 외부 환경으로 예민해진 피부 컨디션을 편안하게 정돈하고, 수분 루틴의 안정감을 보조하는 식물 유래 성분으로 사용됩니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "속건조가 강할 때는 25 앰플, 맑고 균일한 피부 톤 인상이 필요할 때는 55 앰플, 수분 밀착감과 피부 표현이 필요할 때는 37 크림, 장벽 컨디션 케어가 필요할 때는 35 앰플과 함께 쓰는 루틴이 제안됩니다."
    },
    {
      question: "이 제품은 모든 피부에 사용할 수 있나요?",
      answer:
        "브랜드 자료상 보습과 미백이 필요한 모든 피부에 적합한 토너로 소개됩니다. 다만 예민한 피부는 처음 사용할 때 사용량과 레이어링 횟수를 줄여 피부 반응을 확인하는 것이 좋습니다."
    }
  ],

  relatedProducts: [
    "cleansing-milk-skin-hydrating-21",
    "concentrated-booster-skin-hydrating-25",
    "derma-hydro-aquax-cream-27",
    "concentrated-booster-skin-brightening-55",
    "intensive-cellular-er-cream-37",
    "concentrated-booster-skin-revitalizing-35"
  ],

  claims: {
    allowed: [
      "피부 표면에 촉촉한 수분감 부여에 도움",
      "건조로 인한 당김 부담을 낮추는 데 도움",
      "다음 단계 스킨케어를 위한 피부 바탕 정돈에 도움",
      "외부 환경으로 지친 피부 컨디션을 편안하게 정돈하는 데 도움",
      "해조류 유래 성분축을 담은 Hydrating Line 미네랄 토너",
      "140ml / 480ml 구성",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "피부 질환 치료",
      "염증 치료",
      "항염 치료",
      "항균 치료",
      "유해균 제거 보장",
      "중금속 제거 보장",
      "미세먼지 완전 제거",
      "티로시나아제 억제 보장",
      "미백 치료",
      "색소침착 치료",
      "노화 억제 보장",
      "피부 수분 통로 개방",
      "수분 깊숙이 침투 보장",
      "피부 장벽 완전 회복",
      "100% 개선",
      "무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 사내 자체 임상 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const tonicLotionSkinHydrating23SchemaHints = {
  canonicalDomain: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/`,
  recommendedJsonLdTypes: ["ProductGroup", "Product", "Offer", "BreadcrumbList", "FAQPage"],
  productGroup: {
    "@type": "ProductGroup",
    productGroupID: "tonic-lotion-skin-hydrating-23",
    variesBy: ["https://schema.org/size"],
    variantStrategy:
      "Represent 140ml and 480ml as variants under one canonical PDP. Do not create separate canonical PDPs for each capacity unless commerce strategy requires it."
  },
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "23 Tonic Lotion for Skin Hydrating",
      item: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/`
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

export const tonicLotionSkinHydrating23MerchantFeedDraft = {
  itemGroupId: "tonic-lotion-skin-hydrating-23",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Toner > Hydrating Toner",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-TLSH23-140ML",
      title: "에르띠 23 토닉 로션 포 스킨 하이드레이팅 140ml",
      description:
        "Mari Anti Toxin과 해조류 유래 미네랄 성분축으로 건조하고 당김이 느껴지는 피부에 수분감을 부여하는 Hydrating Line 23번 토너.",
      link: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/?variant=140ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-140ml-product.jpg`,
      size: "140ml",
      price: undefined,
      availability: undefined
    },
    {
      id: "ERTY-TLSH23-480ML",
      title: "에르띠 23 토닉 로션 포 스킨 하이드레이팅 480ml",
      description:
        "Mari Anti Toxin과 해조류 유래 미네랄 성분축으로 건조하고 당김이 느껴지는 피부에 수분감을 부여하는 Hydrating Line 23번 토너 대용량.",
      link: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/?variant=480ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/tonic-lotion-skin-hydrating-23/tonic-lotion-skin-hydrating-23-480ml-product.png`,
      size: "480ml",
      price: undefined,
      availability: undefined
    }
  ],
  feedSafetyNotes: [
    "Do not include medical, anti-inflammatory treatment, antibacterial treatment, heavy-metal removal guarantee, fine-dust complete removal, tyrosinase inhibition guarantee, or whitening treatment claims in feed descriptions.",
    "Use https://ertyofficial.com as the only canonical and merchant-feed base domain.",
    "Keep price and availability synchronized with commerce source before publishing feed."
  ]
} as const;

export const tonicLotionSkinHydrating23CodexHandoff = {
  targetFile: "src/data/products/tonic-lotion-skin-hydrating-23.ts",
  route: "/products/tonic-lotion-skin-hydrating-23/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/tonic-lotion-skin-hydrating-23/`,
  exportName: "tonicLotionSkinHydrating23",
  registerInIndex: true,
  implementationChecklist: [
    "Register tonicLotionSkinHydrating23 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 23 토닉 로션 포 스킨 하이드레이팅.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 140ml and 480ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from tonicLotionSkinHydrating23ImageAlt.",
    "Show a visible note that provided materials indicate 140ml / 480ml, not 150ml / 480ml.",
    "Keep anti-pollution, anti-inflammatory, antibacterial, tyrosinase, whitening, deep-hydration, and barrier claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain.",
    "Place ClaimDisclaimer near the bottom of the PDP.",
    "Keep all key product information visible in server-rendered HTML."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com.",
    "H1 is visible in SSR HTML.",
    "140ml and 480ml variants render correctly.",
    "No price or availability is hardcoded.",
    "FAQ is visible and JSON-LD is generated from the same FAQ data.",
    "ProductGroup JSON-LD uses productGroupID tonic-lotion-skin-hydrating-23.",
    "Product page does not claim 150ml unless commerce data confirms a separate SKU.",
    "All anti-pollution/anti-inflammatory/antibacterial/whitening/deep-hydration claims have been safety-adjusted.",
    "Before-after/use-case sections include individual-results disclaimer if rendered."
  ]
} as const;

export default tonicLotionSkinHydrating23;
