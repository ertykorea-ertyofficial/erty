import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: Perfect Spicule Formulation Step.3
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const perfectSpiculeFormulation3SourceAudit = {
  slug: "perfect-spicule-formulation-3",
  productEntity: "에르띠 퍼펙트 스피큘 포뮬레이션 | Perfect Spicule Formulation Step.3",
  sourceFiles: [
    {
      fileName: "3 Perfect Spicule Formulation.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name",
        "capacity",
        "usage",
        "Niacinamide positioning",
        "IBR-TCLC",
        "HyalOcta Complex",
        "Hydrolyzed Sponge",
        "product feature axes",
        "in-house usage case positioning",
        "irritation index 0.00",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product number and professional-line structure",
        "ER Perfection Toning Treatment Kit Step 3 position",
        "20ml product configuration",
        "professional-line usage context",
        "spicule cream positioning",
        "functional cosmetic positioning",
        "caution language for temporary tingling",
        "treatment manual routine links"
      ]
    },
    {
      fileName: "Spicule STEP3_*.jpg / product PNG",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "spicule mechanism visual context",
        "before-after visual disclaimer context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 퍼펙트 스피큘 포뮬레이션 / Perfect Spicule Formulation이다.",
    "Professional Line의 ER Perfection Toning Treatment Kit Step 3 제품이다.",
    "용량은 20ml이다.",
    "브랜드 자료 기준 미백·주름개선 이중 기능성 포뮬레이션으로 소개된다.",
    "주요 성분축은 Niacinamide, IBR-TCLC, HyalOcta Complex, Hydrolyzed Sponge다.",
    "전제품 소개서에서는 나이아신아마이드, 아데노신, 스피큘, 하이드롤라이즈드하이알루로닉애씨드, IBR-TCLC 관련 성분을 주요 포인트로 제시한다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "브랜드 자료 기준 예민 피부는 주 2-3회, 일반 피부는 데일리 사용 가능으로 제시된다.",
    "예민 피부는 스피큘 니들 특성상 일시적인 따가움을 느낄 수 있다는 주의 문구가 제시되어 있다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "스피큘의 '피부 깊숙이 침투', '진피 자극', '재생 유도' 표현은 소비자 오해와 클레임 리스크가 있으므로 공개 PDP에서는 '피부 표면의 미세 감각', '턴오버 케어', '유효성분 전달감 보조' 중심으로 조정한다.",
    "기능성 화장품 관련 표현은 브랜드 제공 자료의 범위 안에서만 사용하며, 치료·시술 대체 문구로 확장하지 않는다.",
    "B&A 이미지는 사내 자체 사용 후기 또는 반응 예시로만 다루며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const perfectSpiculeFormulation3ImageAlt = [
  {
    src: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-product.png",
    alt: "에르띠 퍼펙트 스피큘 포뮬레이션 Step 3 20ml 제품과 단상자 이미지",
    role: "product-image"
  },
  {
    src: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-intro.jpg",
    alt: "Perfect Spicule Formulation Step 3 스피큘 크림 제형과 마이크로 스피큘 니들 설명 이미지",
    role: "detail-intro-image"
  },
  {
    src: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-detail.jpg",
    alt: "나이아신아마이드 IBR-TCLC 히알옥타 콤플렉스 하이드롤라이즈드 해면 성분을 설명하는 퍼펙트 스피큘 포뮬레이션 상세 이미지",
    role: "detail-page-image"
  }
] as const;

export const perfectSpiculeFormulation3ClaimRiskClassification = {
  safeClaims: [
    "20ml 스피큘 크림",
    "미백·주름개선 이중 기능성 포뮬레이션",
    "나이아신아마이드, 아데노신, IBR-TCLC, 하이드롤라이즈드 해면 배합",
    "피부 톤과 결을 매끄럽게 가꾸는 데 도움",
    "탄력 저하가 느껴지는 피부 컨디션 케어에 도움",
    "수분 보유와 장벽 컨디션 케어에 도움",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
    "예민 피부는 주 2-3회 사용 권장",
    "일반 피부는 데일리 사용 가능"
  ],
  adjustedClaims: [
    {
      original: "스피큘이 피부 속으로 침투하여 피부 재생을 유도",
      adjusted: "스피큘 유래 미세 감각이 피부 턴오버 케어와 유효성분 전달감을 보조"
    },
    {
      original: "진피 자극 재생",
      adjusted: "피부 표면의 미세한 사용감을 통해 피부결 정돈과 컨디션 케어를 보조"
    },
    {
      original: "피부 재생 촉진",
      adjusted: "피부 컨디션 회복과 활력 케어에 도움"
    },
    {
      original: "광노화 차단",
      adjusted: "자외선 노출로 인한 산화 스트레스에 대응하는 데 도움"
    },
    {
      original: "미백 개선",
      adjusted: "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움"
    },
    {
      original: "주름 개선",
      adjusted: "주름개선 기능성 성분을 포함해 탄력 저하가 느껴지는 피부를 케어하는 데 도움"
    },
    {
      original: "트러블 완화",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움"
    },
    {
      original: "흡수력을 높임",
      adjusted: "피부에 밀착되는 포뮬러로 다음 단계 루틴의 사용감을 보조"
    }
  ],
  prohibitedClaims: [
    "피부 재생 보장",
    "진피 침투 보장",
    "콜라겐 생성 보장",
    "피부과 시술 대체",
    "흉터 치료",
    "트러블 치료",
    "여드름 치료",
    "모공 축소 보장",
    "주름 제거",
    "미백 100% 개선",
    "색소침착 치료",
    "염증 제거",
    "모든 피부에 무조건 무자극",
    "스피큘 통증 없음 보장",
    "완치"
  ]
} as const;

export const perfectSpiculeFormulation3: ProductPdpData = {
  slug: "perfect-spicule-formulation-3",

  identity: {
    productNumber: "3",
    line: "Professional",
    lineKo: "프로페셔널",
    nameKo: "에르띠 퍼펙트 스피큘 포뮬레이션",
    nameEn: "Perfect Spicule Formulation",
    canonicalName: "에르띠 퍼펙트 스피큘 포뮬레이션 | Perfect Spicule Formulation Step.3",
    category: "Functional Spicule Cream",
    routineStep: "Step 3",
    shortDefinition:
      "하이드롤라이즈드 해면 기반 스피큘과 나이아신아마이드, 아데노신, IBR-TCLC, 히알옥타 콤플렉스를 결합해 피부결·톤·탄력·수분 장벽 컨디션을 함께 설계한 Professional Step 3 스피큘 크림입니다."
  },

  variants: [
    {
      sku: "ERTY-PSF3-20ML",
      volume: "20ml",
      image: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-product.png"
    }
  ],

  seo: {
    title: "에르띠 퍼펙트 스피큘 포뮬레이션 | 미백·주름개선 스피큘 크림",
    description:
      "에르띠 퍼펙트 스피큘 포뮬레이션은 하이드롤라이즈드 해면 기반 스피큘, 나이아신아마이드, 아데노신, IBR-TCLC, 히알옥타 콤플렉스를 담은 Professional Step 3 스피큘 크림입니다. 피부결, 톤, 탄력, 수분 장벽 컨디션을 함께 케어하는 미백·주름개선 이중 기능성 포뮬레이션입니다.",
    keywords: [
      "에르띠 퍼펙트 스피큘 포뮬레이션",
      "Perfect Spicule Formulation",
      "퍼펙트 스피큘 포뮬레이션",
      "에르띠 3번",
      "Step 3 스피큘 크림",
      "스피큘 크림",
      "하이드롤라이즈드 해면 크림",
      "미백 주름개선 크림",
      "나이아신아마이드 크림",
      "아데노신 크림",
      "IBR-TCLC 크림",
      "히알옥타 콤플렉스",
      "피부결 개선 크림",
      "탄력 크림",
      "브라이트닝 크림",
      "에스테틱 스피큘 크림",
      "토닝 트리트먼트 키트 Step 3"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-spicule-formulation-3/`,
    ogImage: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-og.jpg"
  },

  hero: {
    eyebrow: "Professional Step 3 · Functional Spicule Cream",
    headline: "피부결의 마지막 밀도를 잡는 스피큘 포뮬레이션",
    subheadline:
      "스피큘 유래 미세 감각과 브라이트닝·탄력 성분을 결합해 톤, 결, 탄력, 수분 장벽 컨디션을 함께 마무리하는 Step 3 크림",
    benefitChips: [
      "Step 3",
      "Hydrolyzed Sponge",
      "Niacinamide",
      "Adenosine",
      "IBR-TCLC",
      "HyalOcta Complex",
      "미백·주름개선 기능성",
      "자극지수 0.00 자료"
    ],
    primaryImage: "/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 퍼펙트 스피큘 포뮬레이션은 하이드롤라이즈드 해면 기반 스피큘과 나이아신아마이드, 아데노신, IBR-TCLC를 결합한 Professional Step 3 스피큘 크림입니다.",
    paragraph:
      "에르띠 퍼펙트 스피큘 포뮬레이션은 ER Perfection Toning Treatment Kit의 Step 3 제품으로, 하이드롤라이즈드 해면 기반 스피큘의 미세한 사용감과 나이아신아마이드, 아데노신, IBR-TCLC, 히알옥타 콤플렉스를 함께 설계한 기능성 크림입니다. Step 1에서 피부결을 정돈하고 Step 2에서 톤 케어를 집중한 뒤, Step 3에서 피부결·톤·탄력·수분 장벽 컨디션을 마무리하는 포지션입니다. 브랜드 자료 기준 예민 피부는 주 2-3회, 일반 피부는 데일리 사용이 가능하며, 스피큘 특성상 일시적인 따가움이 느껴질 수 있습니다.",
    keyFacts: [
      "ER Perfection Toning Treatment Kit Step 3",
      "20ml 스피큘 크림",
      "하이드롤라이즈드 해면 기반 스피큘 포뮬러",
      "나이아신아마이드와 아데노신 함유",
      "IBR-TCLC와 히알옥타 콤플렉스 배합",
      "미백·주름개선 이중 기능성 포뮬레이션",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "예민 피부 주 2-3회 사용 권장",
      "일반 피부 데일리 사용 가능"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "피부결이 거칠고 매끄럽지 않은 피부",
      "탄력 저하와 잔주름이 동시에 느껴지는 피부",
      "칙칙한 피부 톤과 생기 부족이 함께 보이는 피부",
      "피부가 전반적으로 처지고 힘이 없어 보이는 경우",
      "넓어진 모공과 피부 요철이 눈에 띄는 피부",
      "Step 1, Step 2 이후 루틴을 밀도 있게 마무리하고 싶은 피부"
    ],
    productApproach: [
      "하이드롤라이즈드 해면 기반 스피큘이 피부 표면에 미세한 사용감을 남기며 피부결 정돈 루틴을 보조합니다.",
      "나이아신아마이드와 IBR-TCLC가 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 줍니다.",
      "아데노신과 나이아신아마이드가 탄력 저하와 주름 고민이 있는 피부 컨디션 케어를 보조합니다.",
      "히알옥타 콤플렉스와 보습 성분이 수분 장벽 컨디션을 함께 고려해 스피큘 크림의 마무리감을 보완합니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 스피큘을 단순 자극 요소로 쓰는 것이 아니라, Step 3 마무리 단계에서 피부결·톤·탄력·수분 장벽 컨디션을 동시에 설계하기 위한 기능성 포뮬러입니다.",
    axes: [
      {
        title: "Micro-Spicule Turnover Axis",
        role: "피부결 정돈과 턴오버 케어 보조",
        ingredients: ["Hydrolyzed Sponge"],
        explanation:
          "하이드롤라이즈드 해면 기반 스피큘이 피부 표면에 미세한 사용감을 남기며 거칠어 보이는 결을 정돈하는 루틴을 보조합니다. 예민 피부에서는 일시적인 따가움이 느껴질 수 있습니다."
      },
      {
        title: "Brightening Tone Axis",
        role: "칙칙한 피부 톤을 맑고 균일하게 가꾸는 데 도움",
        ingredients: ["Niacinamide", "IBR-TCLC"],
        explanation:
          "나이아신아마이드와 IBR-TCLC가 칙칙해 보이는 피부 톤, 불균일한 안색, 산화 스트레스에 노출된 피부 컨디션을 고려한 브라이트닝 축을 형성합니다."
      },
      {
        title: "Elasticity & Wrinkle-Care Axis",
        role: "탄력 저하와 주름 고민 피부 케어",
        ingredients: ["Adenosine", "Niacinamide"],
        explanation:
          "아데노신과 나이아신아마이드가 주름개선 기능성 포뮬레이션의 핵심 축으로 작동해 탄력 저하가 느껴지는 피부를 매끄럽게 가꾸는 데 도움을 줍니다."
      },
      {
        title: "Hydration Barrier Axis",
        role: "수분 보유와 장벽 컨디션 보조",
        ingredients: ["HyalOcta Complex", "Hydrolyzed Hyaluronic Acid", "Squalane", "Jojoba Seed Oil"],
        explanation:
          "다양한 히알루론산과 보습 지질 성분이 스피큘 크림 사용 후에도 피부가 건조하게 느껴지지 않도록 수분 장벽 컨디션을 보조합니다."
      },
      {
        title: "Antioxidant Defense Axis",
        role: "외부 환경에 노출된 피부 컨디션 보호",
        ingredients: ["IBR-TCLC", "Tomato Fruit Extract", "Squalane", "Jojoba Seed Oil"],
        explanation:
          "IBR-TCLC와 오일 기반 컨디셔닝 성분이 외부 환경으로 칙칙해 보이는 피부를 생기 있게 가꾸는 데 도움을 줍니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "하이드롤라이즈드 해면",
      nameEn: "Hydrolyzed Sponge",
      inci: "Hydrolyzed Sponge",
      role: "스피큘 기반 피부결 정돈 보조",
      consumerBenefit:
        "피부 표면에 미세한 사용감을 남기며 거칠어 보이는 피부결과 턴오버 케어 루틴을 보조합니다.",
      relatedConcerns: ["거친 피부결", "피부 요철", "턴오버 저하", "칙칙함"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      role: "피부 톤 개선과 장벽 컨디션 보조",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 주고, 피부 장벽 컨디션 케어를 보조합니다.",
      relatedConcerns: ["칙칙한 피부 톤", "불균일한 안색", "장벽 약화", "피부결 저하"]
    },
    {
      nameKo: "아데노신",
      nameEn: "Adenosine",
      inci: "Adenosine",
      role: "주름개선 기능성 성분",
      consumerBenefit:
        "탄력 저하와 잔주름이 느껴지는 피부를 매끄럽고 탄탄하게 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["잔주름", "탄력 저하", "노화 피부", "피부 밀도 저하"]
    },
    {
      nameKo: "IBR-TCLC",
      nameEn: "IBR-TCLC",
      role: "광 노출 스트레스 대응 브라이트닝 성분축",
      consumerBenefit:
        "외부 환경과 자외선 노출로 칙칙해 보이는 피부를 맑고 균일한 톤으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "산화 스트레스", "광노화 컨디션", "피부 톤 불균형"]
    },
    {
      nameKo: "히알옥타 콤플렉스",
      nameEn: "HyalOcta Complex",
      role: "복합 히알루론산 기반 보습 축",
      consumerBenefit:
        "피부 표면부터 수분 장벽까지 촉촉한 사용감을 유지하도록 돕고 스피큘 크림의 건조 부담을 완화합니다.",
      relatedConcerns: ["건조", "수분 부족", "장벽 약화", "당김"]
    },
    {
      nameKo: "하이드롤라이즈드하이알루로닉애씨드",
      nameEn: "Hydrolyzed Hyaluronic Acid",
      inci: "Hydrolyzed Hyaluronic Acid",
      role: "수분 공급과 촉촉한 사용감 보조",
      consumerBenefit:
        "저분자 히알루론산 계열 성분으로 촉촉한 피부 컨디션을 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "속당김", "수분 부족"]
    },
    {
      nameKo: "스쿠알란",
      nameEn: "Squalane",
      inci: "Squalane",
      role: "피부 컨디셔닝과 보습막 보조",
      consumerBenefit:
        "피부에 부드럽게 밀착되어 촉촉하고 유연한 마무리감을 보조합니다.",
      relatedConcerns: ["건조", "피부 유연성", "보습막", "거친 피부결"]
    },
    {
      nameKo: "호호바씨오일",
      nameEn: "Jojoba Seed Oil",
      inci: "Simmondsia Chinensis Seed Oil",
      role: "보습과 피부 유연감 보조",
      consumerBenefit:
        "피부에 매끄러운 코팅감을 남기고 스피큘 크림 사용 후 편안한 마무리감을 돕습니다.",
      relatedConcerns: ["건조", "거친 피부결", "피부 유연성"]
    }
  ],

  texture: {
    type: "스피큘 함유 크림 포뮬레이션",
    finish: "밀착감 있는 촉촉한 크림 마무리",
    absorption: "얼굴과 목에 도포 후 문지르기보다 누르듯 흡수",
    sensoryCopy:
      "스피큘 유래 미세 감각으로 사용 중 일시적인 따가움이 느껴질 수 있으며, 이는 브랜드 자료상 스피큘 니들 특성에 따른 사용감으로 안내됩니다. 예민 피부는 낮은 빈도부터 시작하는 것이 좋습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 제품 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 저자극 솔루션입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
      image: "/images/products/perfect-spicule-formulation-3/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "brandData",
      title: "사내 자체 사용 후기 이미지",
      summary:
        "브랜드 자료에는 어두운 피부 톤과 무너진 피부 탄력 관련 사용 전후 예시가 제시되어 있습니다. 해당 이미지는 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 제품 기술 소개서 및 제품 가이드 기준",
      image: "/images/products/perfect-spicule-formulation-3/evidence-internal-before-after.jpg"
    },
    {
      type: "ingredient",
      title: "미백·주름개선 기능성 포뮬레이션",
      summary:
        "브랜드 자료에서는 나이아신아마이드와 아데노신을 중심으로 미백·주름개선 기능성 포뮬레이션을 제시합니다.",
      sourceNote: "ERTY KOREA Product Guide 및 제품 기술 소개서 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 Step 1 수딩 솔루션과 Step 2 엔셀 앰플 등 앞 단계 루틴을 마무리합니다.",
      "적당량을 얼굴과 목에 고르게 도포합니다.",
      "문지르기보다 피부결을 따라 부드럽게 펴 바른 뒤 손바닥으로 누르듯 흡수시킵니다.",
      "홍반, 색소침착, 트러블 흔적, 주름 고민 부위에는 피부 상태에 따라 소량을 한 번 더 도포할 수 있습니다.",
      "아침 또는 낮 시간 루틴에 사용할 경우 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "브랜드 자료 기준 일반 피부는 데일리 사용 가능, 예민 피부는 주 2-3회 사용을 권장합니다.",
    cautions: [
      "스피큘 성분 특성상 사용 중 일시적인 따가움이 느껴질 수 있습니다.",
      "극예민 피부는 낮은 빈도와 적은 양으로 시작하십시오.",
      "눈가, 입가, 상처 부위 등 예민한 부위에는 사용량을 조절하십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "필링, 레티노이드, 고농도 산 성분 제품과 같은 날 병행할 경우 피부 상태에 따라 자극 부담이 커질 수 있습니다."
    ]
  },

  routines: [
    {
      title: "1 수딩 솔루션 + 2 엔셀 앰플 + 3 스피큘 크림",
      products: [
        "perfect-soothing-solution-1",
        "perfect-n-cell-ampoule-2",
        "perfect-spicule-formulation-3"
      ],
      useCase: "피부 컨디션 부스팅 & 재생 리모델링 루틴",
      recommendedFor: [
        "피부가 전반적으로 처지고 힘이 없어 보이는 경우",
        "잔주름, 탄력 저하, 거친 결이 동시에 느껴지는 경우",
        "시술 없이 단계적으로 피부 밀도를 끌어올리고 싶은 경우"
      ]
    },
    {
      title: "2 엔셀 앰플 + 3 스피큘 포뮬레이션",
      products: ["perfect-n-cell-ampoule-2", "perfect-spicule-formulation-3"],
      useCase: "브라이트닝 전달감 & 결 마무리 루틴",
      recommendedFor: [
        "Step 2의 톤 케어를 스피큘 크림으로 밀도 있게 마무리하고 싶은 경우",
        "칙칙한 피부 톤과 거친 피부결을 동시에 케어하고 싶은 경우",
        "브라이트닝 루틴의 마무리감을 높이고 싶은 경우"
      ]
    },
    {
      title: "3 스피큘 포뮬레이션 + 37 크림",
      products: ["perfect-spicule-formulation-3", "intensive-cellular-er-cream-37"],
      useCase: "스피큘 후 장벽 안정 루틴",
      recommendedFor: [
        "스피큘 사용감 이후 피부를 편안하게 마무리하고 싶은 경우",
        "예민함과 건조가 함께 느껴지는 피부",
        "탄력 케어와 장벽 컨디션 케어를 함께 설계하고 싶은 경우"
      ]
    },
    {
      title: "3 스피큘 포뮬레이션 + 35 앰플",
      products: ["perfect-spicule-formulation-3", "concentrated-booster-skin-revitalizing-35"],
      useCase: "스킨 리뉴얼 & 활력 케어 루틴",
      recommendedFor: [
        "피부결이 거칠고 활력 케어가 필요한 경우",
        "탄력 저하와 칙칙함이 동시에 느껴지는 피부",
        "피부 컨디션 회복 루틴을 보강하고 싶은 경우"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 퍼펙트 스피큘 포뮬레이션은 어떤 제품인가요?",
      answer:
        "ER Perfection Toning Treatment Kit의 Step 3 제품으로, 하이드롤라이즈드 해면 기반 스피큘과 나이아신아마이드, 아데노신, IBR-TCLC, 히알옥타 콤플렉스를 결합한 미백·주름개선 기능성 스피큘 크림입니다."
    },
    {
      question: "왜 Step 3 제품인가요?",
      answer:
        "Step 1 수딩 솔루션이 피부결과 각질을 정돈하고, Step 2 엔셀 앰플이 톤과 보습을 집중 케어한 뒤, Step 3 스피큘 포뮬레이션이 피부결·톤·탄력·수분 장벽 컨디션을 밀도 있게 마무리하는 구조입니다."
    },
    {
      question: "스피큘 성분은 어떤 역할을 하나요?",
      answer:
        "하이드롤라이즈드 해면 기반 스피큘은 피부 표면에 미세한 사용감을 남기며 거칠어 보이는 피부결과 턴오버 케어 루틴을 보조합니다. 다만 피부 상태에 따라 따가움이 느껴질 수 있습니다."
    },
    {
      question: "사용할 때 따가운 느낌이 정상인가요?",
      answer:
        "브랜드 자료에서는 예민 피부의 경우 일시적으로 따가울 수 있으며 스피큘 니들로 인한 정상적인 사용감으로 안내합니다. 다만 따가움, 붉어짐, 가려움이 지속되면 사용을 중단하는 것이 좋습니다."
    },
    {
      question: "민감피부도 사용할 수 있나요?",
      answer:
        "예민 피부는 주 2-3회 사용을 권장합니다. 처음 사용할 때는 적은 양과 낮은 빈도로 시작하고, 피부 상태에 따라 사용 빈도를 조절하는 것이 좋습니다."
    },
    {
      question: "매일 사용해도 되나요?",
      answer:
        "브랜드 자료 기준 일반 피부는 데일리 사용 가능으로 제시됩니다. 다만 스피큘 성분이 포함되어 있으므로 피부가 예민하거나 필링 제품을 함께 쓰는 날에는 빈도를 조절하는 것이 안전합니다."
    },
    {
      question: "이 제품은 미백·주름개선 기능성 제품인가요?",
      answer:
        "브랜드 자료에서는 나이아신아마이드와 아데노신을 중심으로 미백·주름개선 이중 기능성 포뮬레이션으로 소개합니다. 공개 PDP에서는 피부 톤과 탄력 저하가 느껴지는 피부를 가꾸는 데 도움을 주는 표현으로 운용합니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "가장 핵심적인 조합은 1 수딩 솔루션, 2 엔셀 앰플, 3 스피큘 포뮬레이션으로 이어지는 ER Perfection Toning Treatment Kit 루틴입니다. 피부 상태에 따라 35 앰플 또는 37 크림과 함께 장벽·탄력 케어를 보강할 수 있습니다."
    }
  ],

  relatedProducts: [
    "perfect-soothing-solution-1",
    "perfect-n-cell-ampoule-2",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37",
    "er-perfection-toning-treatment-kit"
  ],

  claims: {
    allowed: [
      "20ml 스피큘 크림",
      "미백·주름개선 이중 기능성 포뮬레이션",
      "하이드롤라이즈드 해면 기반 스피큘 배합",
      "나이아신아마이드와 아데노신 함유",
      "피부결을 매끄럽게 정돈하는 데 도움",
      "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움",
      "탄력 저하가 느껴지는 피부 컨디션 케어에 도움",
      "수분 장벽 컨디션 케어에 도움",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "예민 피부 주 2-3회 사용 권장",
      "일반 피부 데일리 사용 가능"
    ],
    avoid: [
      "피부 재생 보장",
      "진피 침투 보장",
      "피부과 시술 대체",
      "흉터 치료",
      "트러블 치료",
      "여드름 치료",
      "모공 축소 보장",
      "주름 제거",
      "미백 100% 개선",
      "색소침착 치료",
      "염증 제거",
      "통증 없음 보장",
      "모든 피부에 무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다. 스피큘 성분 특성상 사용 중 일시적인 따가움이 느껴질 수 있으며, 이상 반응이 지속되면 사용을 중단하십시오."
  }
};

export const perfectSpiculeFormulation3SchemaHints = {
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-spicule-formulation-3/`,
  schemaTypes: ["Product", "Offer", "BreadcrumbList", "FAQPage"],
  product: {
    type: "Product",
    productID: "perfect-spicule-formulation-3",
    sku: "ERTY-PSF3-20ML",
    size: "20ml",
    variantStrategy:
      "Use one canonical PDP for the 20ml product. Do not create separate canonical PDPs unless commerce architecture introduces additional sizes."
  },
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "Perfect Spicule Formulation Step.3",
      item: `${SEO_GEO_BASE_URL}/products/perfect-spicule-formulation-3/`
    }
  ],
  pricePolicy:
    "Do not add price, priceCurrency, availability, aggregateRating, or review until commerce data and review data are connected."
} as const;

export const perfectSpiculeFormulation3MerchantFeedDraft = {
  itemGroupId: "perfect-spicule-formulation-3",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Cream",
  googleProductCategoryCandidate: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  variants: [
    {
      id: "ERTY-PSF3-20ML",
      title: "에르띠 퍼펙트 스피큘 포뮬레이션 20ml",
      description:
        "하이드롤라이즈드 해면 기반 스피큘, 나이아신아마이드, 아데노신, IBR-TCLC를 담은 Professional Step 3 스피큘 크림. 피부결, 톤, 탄력, 수분 장벽 컨디션을 함께 케어하는 미백·주름개선 기능성 포뮬레이션입니다.",
      link: `${SEO_GEO_BASE_URL}/products/perfect-spicule-formulation-3/`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/perfect-spicule-formulation-3/perfect-spicule-formulation-3-product.png`,
      size: "20ml",
      condition: "new"
    }
  ],
  omittedUntilCommerceConnection: [
    "price",
    "sale_price",
    "availability",
    "shipping",
    "return_policy",
    "gtin"
  ]
} as const;

export const perfectSpiculeFormulation3CodexHandoff = {
  targetDataFile: "src/data/products/perfect-spicule-formulation-3.ts",
  registerIn: "src/data/products/index.ts",
  route: "/products/perfect-spicule-formulation-3",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-spicule-formulation-3/`,
  instructions: [
    "Use perfectSpiculeFormulation3 as the ProductPdpData source for the PDP.",
    "Keep SEO_GEO_BASE_URL as https://ertyofficial.com and do not use www.ertykorea.com as canonical.",
    "Render H1 as real server-rendered HTML text: 에르띠 퍼펙트 스피큘 포뮬레이션.",
    "Render the AI Summary block directly below the Hero.",
    "Render Formula Architecture and Ingredient Intelligence as crawlable semantic HTML.",
    "Render the product as a single 20ml product; do not create multiple canonical PDPs.",
    "Generate Product/Offer JSON-LD but do not inject price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD only from visible FAQ content.",
    "Use perfectSpiculeFormulation3ImageAlt for image alt mapping.",
    "Use uploaded long detail JPG assets only as supplementary visual modules, not as the main SEO content.",
    "Add ClaimDisclaimer near the bottom of the PDP.",
    "Keep spicule mechanism copy cosmetic-safe. Avoid 'dermis penetration', 'skin regeneration guarantee', or procedure-substitute language.",
    "Ensure sitemap loc uses https://ertyofficial.com/products/perfect-spicule-formulation-3/."
  ]
} as const;

export default perfectSpiculeFormulation3;
