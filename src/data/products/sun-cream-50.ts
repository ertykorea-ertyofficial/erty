import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 50 Sun Cream
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const sunCream50SourceAudit = {
  slug: "sun-cream-50",
  productEntity: "에르띠 50 선크림 | 50 Sun Cream",
  sourceFiles: [
    {
      fileName: "50 Sun Cream.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name",
        "capacity 50ml",
        "SPF50+ PA++++ positioning",
        "usage instruction",
        "5 Ceramide Complex positioning",
        "8 Hyaluronic Acid Complex positioning",
        "Niacinamide positioning",
        "Adenosine positioning",
        "Titanium Dioxide and Ethylhexyl Triazone UV filter axis",
        "irritation index 0.00 brand-provided test reference",
        "routine placement as final sun-care step"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product numbering system",
        "Brightening line structure",
        "50 Sun Cream line position",
        "50ml configuration",
        "triple-function sun-care positioning: UV protection, whitening, wrinkle improvement",
        "Ceracare AC-1 positioning",
        "8 Hyaluronic Acid, Niacinamide, Adenosine, Soluble Proteoglycan, Star Anise Extract ingredient context",
        "all-skin recommendation context",
        "before-after and user-response disclaimer language"
      ]
    },
    {
      fileName: "Sun Cream_1.jpg / Sun Cream_2.jpg / Sun Cream_3.jpg / Sun Cream_4.jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "SPF50+ PA++++ packaging claim",
        "texture, scent, and use-feel extraction",
        "silky cream texture",
        "powdery scent",
        "moist and adhesive finish positioning",
        "reapplication guide in summer/outdoor context",
        "consumer-facing phrase extraction",
        "image alt mapping",
        "cosmetic-safe translation of white-cast, eye-stinging, stickiness, wrinkle, whitening, and tone-up claims"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 50 선크림 / 50 Sun Cream으로 정규화한다.",
    "Brightening Line의 50번 선케어 제품이다.",
    "용량은 50ml 단일 구성이 제공 자료 기준으로 확인된다.",
    "제품 패키지 및 상세페이지 기준 SPF50+ PA++++가 표기되어 있다.",
    "제품은 자외선차단, 미백, 주름개선 3중 기능성 선크림으로 소개된다.",
    "기술 소개서 기준 자외선차단 축에는 티타늄디옥사이드와 에칠헥실트리아존이 포함된다.",
    "기술 소개서 기준 피부 장벽 보조 축에는 5가지 복합 세라마이드와 Ceramide NP, Phytosphingosine 맥락이 포함된다.",
    "기술 소개서 및 전제품 소개서 기준 보습 축에는 8종 히알루론산, 소듐하이알루로네이트, 하이드롤라이즈드하이알루로닉애씨드가 포함된다.",
    "기술 소개서 및 전제품 소개서 기준 톤/탄력 축에는 나이아신아마이드와 아데노신이 포함된다.",
    "전제품 소개서 기준 주요 성분에는 Ceracare AC-1, 8종 히알루론산, 나이아신아마이드, 아데노신, 수용성프로테오클리칸, 스타아니스추출물이 포함된다.",
    "상세페이지 기준 제형은 실키한 크림 제형, 향은 은은한 파우더리, 사용감은 밀착감 있고 촉촉한 느낌으로 제시된다.",
    "상세페이지 기준 여름철에는 3~4시간마다 덧발라 사용할 수 있다는 안내가 있다.",
    "기술 소개서 기준 인체적용시험 자극지수 0.00 자료가 제시되어 있다.",
    "가격과 재고는 제공되지 않았다."
  ],
  unresolvedOrControlledFacts: [
    "SPF50+ PA++++는 제품 표기 기준으로 사용하며, 실제 보호 효과는 충분한 사용량과 재도포에 좌우된다는 주의 문구를 유지한다.",
    "'UVA, UVB 완벽 차단'은 공개 PDP에서 'UVA/UVB 차단에 도움' 또는 'SPF50+ PA++++ 기준 높은 자외선 차단'으로 조정한다.",
    "'백탁 X, 눈시림 X, 피부자극 X'는 개인차가 있으므로 '백탁·눈시림·번들거림 부담을 낮춘 사용감'으로 조정한다.",
    "미백과 주름개선 표현은 기능성 화장품 맥락으로 제한하고, 색소·주름 치료나 보장형 개선 표현으로 쓰지 않는다.",
    "어린이 및 임산부 사용 가능 여부는 전용 검증 자료가 없으므로 '상황에 따라 전문가 상담 권장'으로 처리한다.",
    "SPF, PA, 3중 기능성, 자극지수 0.00은 브랜드 제공 자료 및 제품 표기 기준이며 모든 사용자에게 동일한 체감 결과를 보장하지 않는다.",
    "사용자 리뷰와 상세페이지 내 체감 표현은 증거 섹션의 보조 맥락으로만 활용하고, 제품 보장 claim으로 전환하지 않는다."
  ]
} as const;

export const sunCream50ImageAlt = [
  {
    src: "/images/products/sun-cream-50/sun-cream-50-detail-01.jpg",
    alt: "SPF50+ PA++++ 에르띠 50 선크림 제품과 브랜드 소개 상세페이지 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-detail-02.jpg",
    alt: "에르띠 50 선크림 3중 기능성과 세라마이드 성분을 설명하는 상세페이지 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-detail-03.jpg",
    alt: "에르띠 50 선크림 제형 사용법 추천 피부 타입을 안내하는 상세페이지 이미지",
    role: "how-to-use-detail-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-detail-04.jpg",
    alt: "에르띠 50 선크림 리뷰 FAQ 추천 루틴 제품 정보 상세페이지 이미지",
    role: "review-and-faq-detail-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-50ml-product.png",
    alt: "에르띠 50 선크림 50ml 튜브형 제품 이미지 SPF50+ PA++++",
    role: "variant-product-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-50ml-box-product.jpg",
    alt: "에르띠 50 선크림 50ml 제품과 패키지 박스 이미지",
    role: "product-package-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-ceramide-hyaluronic-acid.jpg",
    alt: "5가지 복합 세라마이드와 8종 히알루론산을 설명하는 에르띠 50 선크림 성분 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/sun-cream-50/sun-cream-50-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const sunCream50ClaimRiskClassification = {
  safeClaims: [
    "50ml 선크림",
    "Brightening Line 50번 선케어 제품",
    "SPF50+ PA++++ 표기",
    "자외선 차단 기능성 화장품",
    "미백·주름개선 기능성 성분으로 나이아신아마이드와 아데노신 배합",
    "5가지 복합 세라마이드 소구",
    "8종 히알루론산 컴플렉스 소구",
    "실키한 크림 제형",
    "촉촉하고 밀착감 있는 사용감",
    "스킨케어 마지막 단계 사용 권장",
    "여름철 또는 야외 활동 시 3~4시간마다 덧바름 권장",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "강력한 자외선 차단",
      adjusted: "SPF50+ PA++++ 기준 높은 자외선 차단을 돕는 선크림"
    },
    {
      original: "UVA, UVB를 완벽하게 차단",
      adjusted: "UVA와 UVB 차단에 도움"
    },
    {
      original: "백탁 X, 눈시림 X, 피부자극 X",
      adjusted: "백탁·눈시림·번들거림 부담을 낮춘 사용감"
    },
    {
      original: "즉각적인 피부 개선",
      adjusted: "바르는 즉시 피부를 화사하고 촉촉해 보이게 연출"
    },
    {
      original: "나이아신아마이드 함유로 한층 더 화사하게 톤업",
      adjusted: "나이아신아마이드 배합으로 칙칙해 보이는 피부 톤을 맑고 화사하게 연출하는 데 도움"
    },
    {
      original: "주름개선",
      adjusted: "아데노신 배합으로 탄력감이 부족해 보이는 피부 컨디션 관리에 도움"
    },
    {
      original: "피부 장벽 강화",
      adjusted: "세라마이드 성분축으로 피부 장벽 컨디션 케어에 도움"
    },
    {
      original: "깊은 보습 전달",
      adjusted: "피부에 촉촉한 수분감을 부여하고 보습감을 유지하는 데 도움"
    },
    {
      original: "자연스러운 톤 업",
      adjusted: "은은하게 화사해 보이는 톤업 마무리감"
    },
    {
      original: "민감한 피부도 걱정 없이 사용",
      adjusted: "민감한 피부도 부담을 낮춰 사용할 수 있도록 설계했으나 개인차가 있을 수 있음"
    }
  ],
  prohibitedClaims: [
    "자외선 100% 차단",
    "완벽 차단",
    "절대 타지 않음",
    "눈시림 0% 보장",
    "백탁 0% 보장",
    "피부 자극 없음 보장",
    "무조건 무자극",
    "색소침착 치료",
    "기미 치료",
    "주름 제거",
    "미백 보장",
    "탄력 회복 보장",
    "피부 장벽 치료",
    "여드름 개선",
    "트러블 치료",
    "어린이·임산부 무조건 사용 가능",
    "하루 종일 재도포 없이 지속 차단"
  ]
} as const;

export const sunCream50: ProductPdpData = {
  slug: "sun-cream-50",

  identity: {
    productNumber: "50",
    line: "Brightening",
    lineKo: "브라이트닝",
    nameKo: "에르띠 50 선크림",
    nameEn: "50 Sun Cream",
    canonicalName: "에르띠 50 선크림 | 50 Sun Cream",
    category: "Triple-Function Moisturizing Sunscreen",
    routineStep: "Sun Care Step",
    shortDefinition:
      "SPF50+ PA++++ 자외선 차단 표기와 나이아신아마이드, 아데노신, 5가지 복합 세라마이드, 8종 히알루론산 성분축을 결합해 촉촉한 밀착감과 은은한 톤업 마무리를 설계한 Brightening Line 50번 선크림입니다."
  },

  variants: [
    {
      sku: "ERTY-SC50-50ML",
      volume: "50ml",
      image: "/images/products/sun-cream-50/sun-cream-50-50ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 50 선크림 | SPF50+ PA++++ 촉촉한 톤업 선크림",
    description:
      "에르띠 50 선크림은 SPF50+ PA++++ 자외선 차단 표기와 나이아신아마이드, 아데노신, 5가지 복합 세라마이드, 8종 히알루론산 성분축을 담은 Brightening Line 선크림입니다. 촉촉한 밀착감, 은은한 톤업, 장벽 컨디션 케어를 고려한 3중 기능성 선케어 제품입니다.",
    keywords: [
      "에르띠 50 선크림",
      "50 Sun Cream",
      "에르띠 선크림",
      "SPF50+ PA++++ 선크림",
      "촉촉한 선크림",
      "톤업 선크림",
      "미백 주름개선 선크림",
      "3중 기능성 선크림",
      "세라마이드 선크림",
      "히알루론산 선크림",
      "나이아신아마이드 선크림",
      "아데노신 선크림",
      "민감피부 선크림",
      "백탁 부담 낮춘 선크림",
      "눈시림 부담 낮춘 선크림",
      "에스테틱 선크림"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/sun-cream-50/`,
    ogImage: "/images/products/sun-cream-50/sun-cream-50-og.jpg"
  },

  hero: {
    eyebrow: "Brightening Line · SPF50+ PA++++ Sun Care",
    headline: "자외선 앞에서도, 촉촉하고 화사하게 밀착되는 선크림",
    subheadline:
      "SPF50+ PA++++ 자외선 차단 표기와 세라마이드·히알루론산 보습 성분축을 함께 설계한 ERTY 50번 선케어",
    benefitChips: [
      "SPF50+ PA++++",
      "3중 기능성",
      "촉촉한 밀착감",
      "은은한 톤업",
      "세라마이드 케어",
      "8종 히알루론산"
    ],
    primaryImage: "/images/products/sun-cream-50/sun-cream-50-50ml-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 50 선크림은 SPF50+ PA++++ 자외선 차단 표기와 나이아신아마이드·아데노신·세라마이드·히알루론산 성분축을 결합한 촉촉한 톤업 선크림입니다.",
    paragraph:
      "에르띠 50 선크림은 Brightening Line의 50번 선케어 제품으로, SPF50+ PA++++ 자외선 차단 표기와 함께 나이아신아마이드, 아데노신, 5가지 복합 세라마이드, 8종 히알루론산 성분축을 설계한 50ml 선크림입니다. 스킨케어 마지막 단계에서 피부결을 따라 고르게 펴 바르며, 촉촉한 밀착감과 은은한 톤업 마무리로 백탁·눈시림·번들거림 부담을 낮춘 데일리 선케어를 목표로 합니다. 자외선 차단 효과는 충분한 사용량과 재도포에 따라 달라질 수 있으므로 야외 활동 시에는 3~4시간마다 덧바르는 것이 권장됩니다.",
    keyFacts: [
      "SPF50+ PA++++ 표기",
      "50ml 단일 용량",
      "Brightening Line 50번 선케어 제품",
      "자외선차단·미백·주름개선 3중 기능성 선크림으로 소개",
      "티타늄디옥사이드와 에칠헥실트리아존 기반 자외선 차단 성분축",
      "나이아신아마이드와 아데노신 배합",
      "5가지 복합 세라마이드 성분축",
      "8종 히알루론산 컴플렉스 성분축",
      "실키한 크림 제형과 은은한 파우더리 향",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "자외선 차단과 촉촉한 사용감을 동시에 원하는 피부",
      "선크림의 백탁, 눈시림, 번들거림이 부담스러운 피부",
      "건조한 마무리감 없이 밀착되는 데일리 선케어가 필요한 피부",
      "칙칙해 보이는 피부 톤을 화사하게 연출하고 싶은 피부",
      "선케어 단계에서도 보습감과 장벽 컨디션 케어를 놓치고 싶지 않은 피부",
      "메이크업 전 베이스처럼 사용할 수 있는 부드러운 선크림을 찾는 피부"
    ],
    productApproach: [
      "SPF50+ PA++++ 표기와 자외선 차단 성분축으로 데일리 UV 케어를 돕습니다.",
      "나이아신아마이드와 아데노신을 배합해 칙칙해 보이는 피부 톤과 탄력감이 부족한 피부 컨디션을 관리합니다.",
      "5가지 복합 세라마이드와 8종 히알루론산 성분축으로 촉촉한 보습감과 장벽 컨디션 케어를 보조합니다.",
      "실키한 크림 제형으로 피부 위에 부드럽게 펴 발리고 촉촉하게 밀착되는 마무리를 목표로 합니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 자외선 차단 기능만 앞세운 선크림이 아니라, SPF50+ PA++++ 선케어 축에 세라마이드·히알루론산 보습축과 나이아신아마이드·아데노신 기능성 케어축을 결합한 데일리 톤업 보습 선크림입니다.",
    axes: [
      {
        title: "UV Protection Axis",
        role: "SPF50+ PA++++ 기준 자외선 차단 케어",
        ingredients: ["Titanium Dioxide", "Ethylhexyl Triazone"],
        explanation:
          "티타늄디옥사이드와 에칠헥실트리아존 성분축이 UVA와 UVB 노출로부터 피부를 보호하는 데 도움을 주는 선케어 기반을 형성합니다."
      },
      {
        title: "Barrier Lipid Axis",
        role: "세라마이드 기반 장벽 컨디션 케어",
        ingredients: ["Ceramide EOP", "Ceramide NS", "Ceramide NP", "Ceramide AS", "Ceramide AP", "Phytosphingosine"],
        explanation:
          "5가지 세라마이드 성분축과 피토스핑고신이 건조와 외부 환경으로 흐트러지기 쉬운 피부 장벽 컨디션을 보조합니다."
      },
      {
        title: "Hydration Axis",
        role: "촉촉한 수분감과 보습막 보조",
        ingredients: ["8 Hyaluronic Acid Complex", "Sodium Hyaluronate", "Hydrolyzed Hyaluronic Acid"],
        explanation:
          "분자 크기가 다른 히알루론산 계열 성분들이 피부에 촉촉한 수분감을 부여하고 선크림 사용 후 건조 부담을 낮추는 데 도움을 줍니다."
      },
      {
        title: "Tone & Elasticity Axis",
        role: "화사한 피부 톤과 탄력 컨디션 케어",
        ingredients: ["Niacinamide", "Adenosine"],
        explanation:
          "나이아신아마이드와 아데노신이 칙칙해 보이는 피부 톤과 탄력감이 부족해 보이는 피부 컨디션을 함께 관리하는 기능성 케어축을 형성합니다."
      },
      {
        title: "Comfort Finish Axis",
        role: "부드럽고 촉촉한 사용감 보조",
        ingredients: ["Soluble Proteoglycan", "Illicium Verum Fruit Extract"],
        explanation:
          "수용성프로테오글리칸과 스타아니스추출물 성분축이 피부 위에서 촉촉하고 편안한 마무리감을 보조합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "티타늄디옥사이드",
      nameEn: "Titanium Dioxide",
      inci: "Titanium Dioxide",
      role: "자외선 차단 성분축",
      consumerBenefit:
        "자외선 노출로부터 피부를 보호하는 데 도움을 주는 무기 자외선 차단 성분입니다.",
      relatedConcerns: ["자외선", "UVA/UVB", "데일리 선케어", "민감피부 선케어"]
    },
    {
      nameKo: "에칠헥실트리아존",
      nameEn: "Ethylhexyl Triazone",
      inci: "Ethylhexyl Triazone",
      role: "자외선 차단 보조 성분축",
      consumerBenefit:
        "자외선 차단 성능을 보조해 데일리 선케어 루틴의 안정감을 높이는 데 도움을 줍니다.",
      relatedConcerns: ["자외선", "UVB", "야외 활동", "광노출"]
    },
    {
      nameKo: "5가지 복합 세라마이드",
      nameEn: "5 Ceramide Complex",
      inci: "Ceramide EOP, Ceramide NS, Ceramide NP, Ceramide AS, Ceramide AP",
      role: "장벽 컨디션과 보습막 케어",
      consumerBenefit:
        "피부 지질과 유사한 세라마이드 성분축이 건조로 흐트러지기 쉬운 피부 장벽 컨디션을 보조합니다.",
      relatedConcerns: ["건조", "장벽 컨디션", "수분 손실", "민감함"]
    },
    {
      nameKo: "8종 히알루론산 컴플렉스",
      nameEn: "8 Hyaluronic Acid Complex",
      inci: "Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid and related hyaluronic acid derivatives",
      role: "수분감과 보습 유지 보조",
      consumerBenefit:
        "피부에 촉촉한 수분감을 부여하고 선크림 사용 후 건조하게 느껴지는 부담을 낮추는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "메이크업 들뜸"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      role: "톤 케어 기능성 성분",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 균일해 보이도록 가꾸는 데 도움을 주는 기능성 성분입니다.",
      relatedConcerns: ["칙칙함", "피부 톤", "브라이트닝", "톤업"]
    },
    {
      nameKo: "아데노신",
      nameEn: "Adenosine",
      inci: "Adenosine",
      role: "탄력 컨디션 케어 기능성 성분",
      consumerBenefit:
        "탄력감이 부족해 보이는 피부 컨디션을 관리하고 매끄러운 피부 인상을 돕습니다.",
      relatedConcerns: ["탄력 저하", "잔주름 인상", "에이징 케어", "피부결"]
    },
    {
      nameKo: "수용성프로테오글리칸",
      nameEn: "Soluble Proteoglycan",
      inci: "Soluble Proteoglycan",
      role: "보습감과 탄력 컨디션 보조",
      consumerBenefit:
        "촉촉하고 탄탄해 보이는 피부 컨디션을 보조하는 보습 성분축입니다.",
      relatedConcerns: ["건조", "탄력감", "보습", "피부 컨디션"]
    },
    {
      nameKo: "스타아니스추출물",
      nameEn: "Illicium Verum Fruit Extract",
      inci: "Illicium Verum Fruit Extract",
      role: "피부 컨디셔닝과 편안한 사용감 보조",
      consumerBenefit:
        "외부 환경에 노출된 피부를 편안하게 유지하고 부드러운 사용감을 보조합니다.",
      relatedConcerns: ["외부 자극", "피부 컨디션", "민감함", "데일리 케어"]
    }
  ],

  texture: {
    type: "실키한 크림 제형",
    finish: "촉촉하게 밀착되는 은은한 톤업 마무리",
    absorption: "스킨케어 마지막 단계에서 얼굴 전체에 고르게 펴 바른 뒤 가볍게 두드려 밀착",
    sensoryCopy:
      "선크림 특유의 무겁고 번들거리는 부담을 낮추고, 피부 위에서 부드럽게 펴지는 실키한 크림 제형과 은은한 파우더리 향, 촉촉한 밀착감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "brandData",
      title: "SPF50+ PA++++ 선케어 표기",
      summary:
        "제품 패키지와 상세페이지 기준 SPF50+ PA++++가 표기된 데일리 선케어 제품입니다. 자외선 차단 효과는 충분한 사용량, 도포 균일성, 땀·물·마찰, 재도포 여부에 따라 달라질 수 있습니다.",
      metric: "SPF50+ PA++++",
      sourceNote: "제품 패키지 및 브랜드 제공 상세페이지 기준"
    },
    {
      type: "brandData",
      title: "3중 기능성 선크림 포지션",
      summary:
        "브랜드 자료 기준 자외선차단, 미백, 주름개선 3중 기능성 선크림으로 소개됩니다. 공개 PDP에서는 기능성 화장품 맥락 안에서 톤 케어와 탄력 컨디션 케어 표현으로 제한합니다.",
      sourceNote: "브랜드 제공 전제품 소개서 및 제품 상세페이지 기준"
    },
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 선케어 제품입니다. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
      metric: "Irritation Index 0.00",
      sourceNote: "브랜드 제공 제품 기술 소개서 기준"
    },
    {
      type: "ingredient",
      title: "세라마이드·히알루론산 보습 성분축",
      summary:
        "5가지 복합 세라마이드와 8종 히알루론산 성분축을 통해 선케어 단계에서도 촉촉한 보습감과 장벽 컨디션 케어를 함께 고려합니다.",
      sourceNote: "브랜드 제공 제품 기술 소개서 및 전제품 소개서 기준"
    }
  ],

  howToUse: {
    steps: [
      "스킨케어 마지막 단계에서 적당량을 덜어 얼굴 전체와 목 부위에 고르게 펴 바릅니다.",
      "광대, 콧등, 이마처럼 자외선에 많이 노출되는 부위는 충분량을 균일하게 도포합니다.",
      "피부결을 따라 펴 바른 뒤 손가락이나 손바닥으로 가볍게 두드려 밀착시킵니다.",
      "야외 활동, 땀, 물, 마찰이 많은 상황에서는 3~4시간마다 덧발라 사용합니다.",
      "저녁에는 클렌저로 깨끗하게 세정해 피부 위 잔여물을 정리합니다."
    ],
    frequency:
      "매일 아침 스킨케어 마지막 단계에서 사용하며, 야외 활동이나 여름철에는 3~4시간마다 덧바르는 것을 권장합니다.",
    cautions: [
      "자외선 차단 효과는 충분한 사용량과 균일한 도포, 재도포 여부에 따라 달라질 수 있습니다.",
      "눈에 직접 들어가지 않도록 주의하고, 눈가 사용 시 소량씩 조절해 바르십시오.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "어린이, 임산부, 수유부, 특수 피부 상태의 사용자는 필요 시 전문가와 상담 후 사용하십시오.",
      "장시간 강한 자외선에 노출되는 경우 모자, 의류, 그늘 등 물리적 차단 수단을 함께 사용하는 것이 좋습니다."
    ]
  },

  routines: [
    {
      title: "기초 케어 전 제품 + 50 선크림",
      products: ["sun-cream-50"],
      useCase: "데일리 선케어 마무리 루틴",
      recommendedFor: [
        "아침 스킨케어 마지막 단계에 자외선 차단이 필요한 경우",
        "선크림 선택이 고민인 민감한 피부",
        "촉촉하고 밀착감 좋은 선크림을 원하는 피부"
      ]
    },
    {
      title: "23 토닉 로션 + 25 앰플 + 50 선크림",
      products: [
        "tonic-lotion-skin-hydrating-23",
        "concentrated-booster-skin-hydrating-25",
        "sun-cream-50"
      ],
      useCase: "촉촉한 수분 베이스 선케어 루틴",
      recommendedFor: [
        "선크림 사용 후 건조함이 쉽게 느껴지는 피부",
        "수분감 있는 베이스 위에 선크림을 밀착시키고 싶은 경우",
        "메이크업 전 피부가 들뜨는 피부"
      ]
    },
    {
      title: "35 앰플 + 37 크림 + 50 선크림",
      products: [
        "concentrated-booster-skin-revitalizing-35",
        "intensive-cellular-er-cream-37",
        "sun-cream-50"
      ],
      useCase: "장벽 컨디션 보조 선케어 루틴",
      recommendedFor: [
        "외부 환경에 쉽게 예민해지는 피부",
        "보습 크림 이후에도 선케어 단계에서 편안한 마무리가 필요한 피부",
        "낮 시간 동안 피부 컨디션을 안정적으로 유지하고 싶은 경우"
      ]
    },
    {
      title: "55 브라이트닝 앰플 + 57 크림 + 50 선크림",
      products: [
        "concentrated-booster-skin-brightening-55",
        "melaway-brightening-cream-57",
        "sun-cream-50"
      ],
      useCase: "브라이트닝 데이 케어 루틴",
      recommendedFor: [
        "칙칙해 보이는 피부 톤을 낮 시간에도 화사하게 연출하고 싶은 경우",
        "브라이트닝 루틴 이후 자외선 차단을 함께 관리하고 싶은 피부",
        "톤 케어와 선케어를 한 루틴으로 연결하고 싶은 경우"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 50 선크림은 어떤 제품인가요?",
      answer:
        "에르띠 50 선크림은 SPF50+ PA++++ 표기와 나이아신아마이드, 아데노신, 세라마이드, 히알루론산 성분축을 결합한 Brightening Line 50번 선케어 제품입니다. 자외선 차단과 함께 촉촉한 밀착감, 은은한 톤업 마무리, 장벽 컨디션 케어를 고려한 50ml 선크림입니다."
    },
    {
      question: "SPF50+ PA++++는 어떤 의미인가요?",
      answer:
        "SPF50+와 PA++++는 제품에 표기된 자외선 차단 등급입니다. 다만 실제 차단 효과는 충분한 사용량, 고른 도포, 땀이나 물, 마찰, 재도포 여부에 따라 달라질 수 있으므로 야외 활동 시에는 주기적으로 덧바르는 것이 좋습니다."
    },
    {
      question: "무기자차인가요, 유기자차인가요?",
      answer:
        "기술 소개서 기준 자외선 차단 축에는 티타늄디옥사이드와 에칠헥실트리아존이 함께 제시됩니다. 이 성분 조합을 기준으로는 무기 필터와 유기 필터를 함께 고려한 혼합형 선케어로 해석할 수 있습니다. 최종 분류는 전성분표와 브랜드 고시 기준을 확인하는 것이 가장 정확합니다."
    },
    {
      question: "백탁이나 눈시림이 없나요?",
      answer:
        "상세페이지에서는 백탁, 눈시림, 번들거림 부담을 낮춘 사용감을 강조합니다. 다만 눈시림과 백탁감은 사용량, 피부 타입, 도포 부위, 땀과 피지 상태에 따라 개인차가 있을 수 있습니다."
    },
    {
      question: "민감피부도 사용할 수 있나요?",
      answer:
        "브랜드 제공 기술 소개서 기준 인체적용시험 자극지수 0.00 자료가 제시되어 있습니다. 다만 민감한 피부는 처음 사용 시 소량으로 테스트하고, 이상 반응이 지속되면 사용을 중단하는 것이 좋습니다."
    },
    {
      question: "톤업 효과가 있나요?",
      answer:
        "상세페이지 기준 은은한 톤업 마무리와 화사한 피부 연출이 강조됩니다. 이는 메이크업 효과와 사용감에 가까운 표현이며, 색소나 피부 톤을 치료하거나 영구적으로 바꾸는 의미는 아닙니다."
    },
    {
      question: "어린이나 임산부도 사용할 수 있나요?",
      answer:
        "제공 자료만으로 어린이·임산부 전용 테스트 여부는 확인되지 않습니다. 어린이, 임산부, 수유부, 특수 피부 상태의 사용자는 사용 전 전문가 상담을 권장합니다."
    },
    {
      question: "언제, 얼마나 자주 덧발라야 하나요?",
      answer:
        "아침 스킨케어 마지막 단계에서 충분량을 고르게 바르고, 야외 활동이나 여름철처럼 땀·물·마찰이 많은 환경에서는 3~4시간마다 덧바르는 것을 권장합니다."
    },
    {
      question: "클렌징은 어떻게 해야 하나요?",
      answer:
        "선크림은 낮 동안 피부에 밀착되는 제품이므로 저녁에는 클렌저를 사용해 깨끗하게 세정하는 것이 좋습니다. 피부 타입에 따라 1차 세안 또는 이중 세안을 선택할 수 있습니다."
    }
  ],

  relatedProducts: [
    "concentrated-booster-skin-brightening-55",
    "melaway-brightening-cream-57",
    "intensive-cellular-er-cream-37",
    "derma-hydro-aquax-cream-27",
    "tonic-lotion-skin-hydrating-23",
    "concentrated-booster-skin-hydrating-25"
  ],

  claims: {
    allowed: [
      "SPF50+ PA++++ 표기",
      "자외선 차단에 도움",
      "나이아신아마이드 배합으로 칙칙해 보이는 피부 톤 케어에 도움",
      "아데노신 배합으로 탄력감이 부족해 보이는 피부 컨디션 케어에 도움",
      "5가지 복합 세라마이드 성분축으로 장벽 컨디션 케어에 도움",
      "8종 히알루론산 성분축으로 촉촉한 수분감 부여에 도움",
      "실키한 크림 제형",
      "촉촉하고 밀착감 있는 사용감",
      "은은한 톤업 마무리",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "자외선 100% 차단",
      "완벽 차단",
      "백탁 0%",
      "눈시림 0%",
      "피부자극 없음 보장",
      "절대 안 탐",
      "미백 보장",
      "주름 제거",
      "기미 치료",
      "색소침착 치료",
      "여드름 치료",
      "트러블 개선 보장",
      "어린이·임산부 무조건 사용 가능",
      "재도포 없이 하루 종일 지속"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 효과와 사용감은 개인의 피부 상태, 사용량, 사용 환경에 따라 다를 수 있습니다. 자외선 차단 효과는 충분한 양을 고르게 도포하고 필요 시 재도포할 때 더 안정적으로 유지됩니다. 제공된 테스트 자료와 사용 예시는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const sunCream50SchemaHints = {
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/sun-cream-50/`,
  recommendedJsonLdTypes: ["Product", "Offer", "BreadcrumbList", "FAQPage"],
  productGroupStrategy:
    "Single 50ml SKU. Keep variants array for template compatibility, but Product JSON-LD can be rendered as a single Product unless future sizes are introduced.",
  productName: "에르띠 50 선크림 | 50 Sun Cream",
  brandName: "ERTY",
  skuStrategy: "Use ERTY-SC50-50ML for the 50ml SKU. Do not create additional SKUs unless commerce data confirms new sizes.",
  offerStrategy:
    "Do not hardcode price or availability until live commerce data is connected. If schema generator requires Offer, omit price and availability or populate from commerce source of truth only.",
  faqStrategy:
    "Generate FAQPage JSON-LD only from visible FAQ content rendered on the page.",
  imageStrategy:
    "Use product image as primary image and detail-page assets as supporting visuals. Main product facts must be rendered as semantic HTML text, not only inside images.",
  claimSafetyStrategy:
    "Keep SPF, whitening, wrinkle improvement, white-cast, eye-stinging, irritation, sensitive-skin, child/pregnancy, and duration claims cosmetic-safe and non-guaranteed."
} as const;

export const sunCream50MerchantFeedDraft = {
  id: "ERTY-SC50-50ML",
  itemGroupId: "sun-cream-50",
  title: "에르띠 50 선크림 50ml",
  description:
    "SPF50+ PA++++ 표기와 나이아신아마이드, 아데노신, 5가지 복합 세라마이드, 8종 히알루론산 성분축을 담은 촉촉한 톤업 선크림입니다.",
  link: `${SEO_GEO_BASE_URL}/products/sun-cream-50/?variant=50ml`,
  imageLink: `${SEO_GEO_BASE_URL}/images/products/sun-cream-50/sun-cream-50-50ml-product.png`,
  additionalImageLinks: [
    `${SEO_GEO_BASE_URL}/images/products/sun-cream-50/sun-cream-50-50ml-box-product.jpg`,
    `${SEO_GEO_BASE_URL}/images/products/sun-cream-50/sun-cream-50-detail-01.jpg`,
    `${SEO_GEO_BASE_URL}/images/products/sun-cream-50/sun-cream-50-detail-02.jpg`
  ],
  brand: "ERTY",
  condition: "new",
  productType: "Cosmetics > Skincare > Sunscreen",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care > Sunscreen",
  size: "50ml",
  availability: undefined,
  price: undefined,
  currency: undefined,
  feedNotes: [
    "Do not publish merchant feed price or availability until commerce data is connected.",
    "Use https://ertyofficial.com as the only canonical product link domain.",
    "Keep SPF50+ PA++++ in title or description only if it matches live product packaging and official product registration.",
    "Do not use www.ertykorea.com for product links."
  ]
} as const;

export const sunCream50CodexHandoff = {
  targetFile: "src/data/products/sun-cream-50.ts",
  route: "/products/sun-cream-50/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/sun-cream-50/`,
  exportName: "sunCream50",
  registerInIndex: true,
  implementationChecklist: [
    "Use this single PDP data bundle as the source of truth.",
    "Register sunCream50 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 50 선크림.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 50ml as a single SKU. Do not create additional size variants unless commerce data confirms them.",
    "Do not create separate canonical PDPs for variant or package assets.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate Product/Offer JSON-LD from the 50ml SKU without hardcoded price unless commerce source provides it.",
    "Use image alt mapping from sunCream50ImageAlt.",
    "Keep SPF, PA, whitening, wrinkle improvement, white-cast, eye-stinging, sensitive-skin, irritation, and child/pregnancy claims cosmetic-safe.",
    "Do not encode SPF protection as guaranteed all-day or 100% UV blocking.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "H1 is visible and crawlable.",
    "canonicalUrl is https://ertyofficial.com/products/sun-cream-50/.",
    "SPF50+ PA++++ appears in visible product facts, not only images.",
    "3중 기능성 wording is present but non-guaranteed and cosmetic-safe.",
    "How-to-use includes sufficient amount, last skincare step, and 3-4 hour reapplication guidance for outdoor/summer use.",
    "Claims avoid '완벽 차단', '백탁 0%', '눈시림 0%', '미백 보장', and '주름 제거'.",
    "FAQPage schema only mirrors visible FAQ copy.",
    "Merchant feed draft has no price or availability until commerce data is connected.",
    "Sitemap includes /products/sun-cream-50.",
    "Detail JPGs are supplementary visual assets, not the sole SEO content."
  ]
} as const;

export default sunCream50;
