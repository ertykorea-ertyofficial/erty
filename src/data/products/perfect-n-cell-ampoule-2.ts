import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: Perfect N.Cell Ampoule Step.2
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const perfectNCellAmpoule2SourceAudit = {
  slug: "perfect-n-cell-ampoule-2",
  productEntity: "에르띠 퍼펙트 엔셀 앰플 | Perfect N.Cell Ampoule Step.2",
  sourceFiles: [
    {
      fileName: "2 Perfect N.Cell Ampoule.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name",
        "capacity variants",
        "usage",
        "Niacinamide 10% positioning",
        "IBR-TCLC",
        "Alpha-Arbutin",
        "Pseudoalteromonas Ferment Extract",
        "product feature axes",
        "irritation index 0.00",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product number and professional-line structure",
        "ER Perfection Toning Treatment Kit Step 2 position",
        "5pcs and 10pcs product configuration",
        "recommended skin concerns",
        "pH 4.5-5.5 positioning",
        "professional treatment context",
        "device-use context",
        "treatment manual routine links"
      ]
    },
    {
      fileName: "N.Cell Ampoule_Step.2(5pcs)_*.jpg / N.Cell Ampoule_Step.2(10pcs)_*.jpg / product PNGs",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "variant image alt mapping",
        "5pcs and 10pcs visual distinction",
        "consumer-facing phrase extraction",
        "all-in-one ampoule positioning"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 퍼펙트 엔셀 앰플 / Perfect N.Cell Ampoule이다.",
    "Professional Line의 ER Perfection Toning Treatment Kit Step 2 제품이다.",
    "용량 구성은 8ml x 5pcs, 8ml x 10pcs이다.",
    "주요 포지션은 나이아신아마이드 10% 기반 브라이트닝 앰플이다.",
    "주요 성분축은 Niacinamide 10%, IBR-TCLC, Alpha-Arbutin, Pseudoalteromonas Ferment Extract다.",
    "브랜드 자료 기준 약산성 pH 4.5-5.5로 설명된다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "일반 피부는 데일리 사용, 예민 피부는 주 2-3회 사용이 권장된다.",
    "전문가 관리 맥락에서 MTS, 고주파, 냉온기기, 갈바닉 등과 함께 사용할 수 있는 제품으로 제시된다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "미백 기능성 인증 문서 자체는 제공되지 않았으므로 공개 문구는 '브라이트닝', '톤 케어', '맑고 균일한 피부 톤으로 가꾸는 데 도움' 중심으로 운용한다.",
    "MTS, 고주파, 갈바닉 등 디바이스 병행 문구는 소비자 자가시술 지침으로 보이지 않도록 '전문가 관리 환경' 문맥으로 제한한다.",
    "B&A 이미지는 사내 자체 사용 후기 또는 반응 예시로만 다루며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const perfectNCellAmpoule2ImageAlt = [
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-single-vial.png",
    alt: "에르띠 퍼펙트 엔셀 앰플 Step 2 8ml 단상자 낱개 바이알 제품 이미지",
    role: "single-product-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-5pcs-product.webp",
    alt: "에르띠 퍼펙트 엔셀 앰플 8ml x 5개입 오픈 박스 구성 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-5pcs-intro.jpg",
    alt: "Perfect N.Cell Ampoule Step 2 5개입 제품 소개와 브라이트닝 앰플 콘셉트 이미지",
    role: "detail-intro-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-5pcs-detail.jpg",
    alt: "나이아신아마이드 10퍼센트와 브라이트닝 성분을 설명하는 퍼펙트 엔셀 앰플 5개입 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-10pcs-product.webp",
    alt: "에르띠 퍼펙트 엔셀 앰플 8ml x 10개입 박스형 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-10pcs-intro.jpg",
    alt: "Perfect N.Cell Ampoule Step 2 10개입 올인원 브라이트닝 앰플 소개 이미지",
    role: "detail-intro-image"
  },
  {
    src: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-10pcs-detail.jpg",
    alt: "에르띠 퍼펙트 엔셀 앰플 10개입 사용 정보와 성분 설명 상세 이미지",
    role: "detail-page-image"
  }
] as const;

export const perfectNCellAmpoule2ClaimRiskClassification = {
  safeClaims: [
    "나이아신아마이드 10% 함유",
    "피부 톤을 맑고 균일하게 가꾸는 데 도움",
    "칙칙해 보이는 피부 톤 정돈에 도움",
    "피부 장벽 컨디션과 수분 보유를 돕는 포뮬러",
    "IBR-TCLC, 알파-알부틴, 슈도알테로모나스발효추출물 배합",
    "약산성 pH 4.5-5.5 설계",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
    "일반 피부 데일리 사용 가능, 예민 피부 주 2-3회 사용 권장"
  ],
  adjustedClaims: [
    {
      original: "기미·잡티·색소침착 완화",
      adjusted: "잡티가 도드라져 보이는 피부 톤을 균일하게 정돈하는 데 도움"
    },
    {
      original: "멜라닌 생성 차단",
      adjusted: "멜라닌 생성 경로를 고려한 브라이트닝 케어에 도움"
    },
    {
      original: "광노화 차단",
      adjusted: "자외선 노출로 인한 산화 스트레스에 대응하는 데 도움"
    },
    {
      original: "붉은기 완화",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 개선",
      adjusted: "피부 톤과 결을 매끄럽게 가꾸는 데 도움"
    },
    {
      original: "재생",
      adjusted: "피부 컨디션 회복과 활력 케어에 도움"
    },
    {
      original: "MTS 호환 가능",
      adjusted: "전문가 관리 환경에서 디바이스 병행 루틴으로 활용 가능"
    }
  ],
  prohibitedClaims: [
    "기미 치료",
    "색소침착 치료",
    "잡티 제거 보장",
    "여드름 자국 제거",
    "흉터 제거",
    "광노화 완전 차단",
    "자외선 차단 효과",
    "콜라겐 재생 보장",
    "미백 100% 개선",
    "즉시 미백",
    "피부과 시술 대체",
    "모든 피부에 무조건 무자극",
    "염증 제거",
    "완치"
  ]
} as const;

export const perfectNCellAmpoule2: ProductPdpData = {
  slug: "perfect-n-cell-ampoule-2",

  identity: {
    productNumber: "2",
    line: "Professional",
    lineKo: "프로페셔널",
    nameKo: "에르띠 퍼펙트 엔셀 앰플",
    nameEn: "Perfect N.Cell Ampoule",
    canonicalName: "에르띠 퍼펙트 엔셀 앰플 | Perfect N.Cell Ampoule Step.2",
    category: "10% Niacinamide Brightening Ampoule",
    routineStep: "Step 2",
    shortDefinition:
      "나이아신아마이드 10%와 IBR-TCLC, 알파-알부틴을 중심으로 칙칙한 피부 톤을 맑고 균일하게 가꾸고 수분·장벽 컨디션까지 보조하는 Professional Step 2 브라이트닝 앰플입니다."
  },

  variants: [
    {
      sku: "ERTY-PNCA2-8ML-5PCS",
      volume: "8ml x 5pcs",
      image: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-5pcs-product.webp"
    },
    {
      sku: "ERTY-PNCA2-8ML-10PCS",
      volume: "8ml x 10pcs",
      image: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-10pcs-product.webp"
    }
  ],

  seo: {
    title: "에르띠 퍼펙트 엔셀 앰플 | 나이아신아마이드 10% 브라이트닝 앰플",
    description:
      "에르띠 퍼펙트 엔셀 앰플은 나이아신아마이드 10%, IBR-TCLC, 알파-알부틴, 슈도알테로모나스발효추출물을 담은 Professional Step 2 브라이트닝 앰플입니다. 칙칙한 피부 톤과 거친 피부결을 맑고 균일하게 정돈하고 수분·장벽 컨디션까지 보조합니다.",
    keywords: [
      "에르띠 퍼펙트 엔셀 앰플",
      "Perfect N.Cell Ampoule",
      "퍼펙트 엔셀 앰플",
      "엔셀 앰플",
      "에르띠 2번 앰플",
      "Step 2 앰플",
      "나이아신아마이드 10% 앰플",
      "브라이트닝 앰플",
      "피부 톤 개선 앰플",
      "칙칙한 피부 톤 앰플",
      "알파 알부틴 앰플",
      "IBR-TCLC 앰플",
      "슈도알테로모나스 발효추출물 앰플",
      "에스테틱 앰플",
      "MTS 호환 앰플",
      "미백 앰플"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/`,
    ogImage: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-og.jpg"
  },

  hero: {
    eyebrow: "Professional Step 2 · 10% Niacinamide Brightening Ampoule",
    headline: "톤을 밝히는 성분력에, 수분과 장벽까지 더한 엔셀 앰플",
    subheadline:
      "나이아신아마이드 10%, IBR-TCLC, 알파-알부틴을 중심으로 칙칙한 피부 톤을 맑고 균일하게 정돈하는 올인원 브라이트닝 앰플",
    benefitChips: [
      "Niacinamide 10%",
      "톤 케어",
      "브라이트닝",
      "수분 보유",
      "장벽 컨디션",
      "약산성 pH 4.5-5.5",
      "Step 2"
    ],
    primaryImage: "/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-single-vial.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 퍼펙트 엔셀 앰플은 나이아신아마이드 10%를 중심으로 피부 톤, 수분, 장벽 컨디션을 함께 설계한 Professional Step 2 브라이트닝 앰플입니다.",
    paragraph:
      "에르띠 퍼펙트 엔셀 앰플은 ER Perfection Toning Treatment Kit의 Step 2 제품으로, 나이아신아마이드 10%, IBR-TCLC, 알파-알부틴, 슈도알테로모나스발효추출물을 중심으로 칙칙하고 균일하지 않은 피부 톤을 맑게 정돈하고 수분 보유와 장벽 컨디션까지 보조하도록 설계된 앰플입니다. 브랜드 자료 기준 약산성 pH 4.5-5.5로 설명되며, 일반 피부는 데일리 사용 가능하고 예민 피부는 주 2-3회 사용이 권장됩니다.",
    keyFacts: [
      "나이아신아마이드 10% 함유",
      "IBR-TCLC, 알파-알부틴, 슈도알테로모나스발효추출물 배합",
      "8ml x 5pcs, 8ml x 10pcs 구성",
      "ER Perfection Toning Treatment Kit의 Step 2 제품",
      "약산성 pH 4.5-5.5 설계",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "일반 피부 데일리 사용 가능, 예민 피부 주 2-3회 권장",
      "전문가 관리 환경에서 디바이스 병행 루틴으로 활용 가능"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "안색이 어둡고 칙칙해 보이는 피부",
      "피부 톤이 균일하지 않고 잡티가 도드라져 보이는 피부",
      "보습과 브라이트닝 케어가 동시에 필요한 피부",
      "장벽 컨디션이 약해져 피부가 쉽게 칙칙해지는 경우",
      "메이크업 없이도 자연스러운 광채와 화사한 피부 표현을 원하는 경우",
      "피부 결, 톤, 윤기를 한 번에 정돈하고 싶은 경우",
      "전문가 관리 루틴에서 Step 2 집중 앰플이 필요한 경우"
    ],
    productApproach: [
      "나이아신아마이드 10%가 피부 톤을 밝고 균일하게 가꾸는 브라이트닝 축을 형성합니다.",
      "IBR-TCLC와 알파-알부틴이 멜라닌 생성 경로와 산화 스트레스를 고려한 톤 케어를 보조합니다.",
      "슈도알테로모나스발효추출물과 스쿠알란, 호호바씨오일이 수분 보유와 매끄러운 피부결을 돕습니다.",
      "약산성 앰플 제형이 Step 1 수딩 솔루션 이후 피부 컨디션을 이어받아 Step 3 스피큘 포뮬레이션으로 연결되는 토닝 루틴을 완성합니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 단순한 미백 앰플이 아니라 나이아신아마이드 10%를 중심으로 톤 케어, 수분 보유, 장벽 컨디션, 산화 스트레스 대응을 동시에 설계한 Step 2 집중 브라이트닝 포뮬러입니다.",
    axes: [
      {
        title: "Tone-Brightening Axis",
        role: "칙칙하고 균일하지 않은 피부 톤 정돈",
        ingredients: ["Niacinamide 10%", "IBR-TCLC", "Alpha-Arbutin", "Bisabolol"],
        explanation:
          "나이아신아마이드 10%, IBR-TCLC, 알파-알부틴이 피부 톤을 맑고 균일하게 가꾸는 브라이트닝 축을 형성합니다."
      },
      {
        title: "Barrier-Hydration Axis",
        role: "수분 보유와 장벽 컨디션 보조",
        ingredients: ["Niacinamide", "Pseudoalteromonas Ferment Extract", "Squalane", "Jojoba Seed Oil"],
        explanation:
          "나이아신아마이드와 해양 발효 보습 성분, 오일 기반 보습 성분이 피부 표면의 촉촉하고 매끄러운 컨디션을 유지하도록 돕습니다."
      },
      {
        title: "Photo-Stress Defense Axis",
        role: "자외선 노출로 인한 산화 스트레스 대응",
        ingredients: ["IBR-TCLC", "Tomato Fruit Extract", "Squalane", "Broccoli Extract"],
        explanation:
          "IBR-TCLC의 카로티노이드 기반 성분과 식물 유래 항산화 성분이 외부 환경으로 칙칙해 보이기 쉬운 피부 컨디션을 보조합니다."
      },
      {
        title: "Revitalizing-Comfort Axis",
        role: "피부 활력과 편안한 사용감 보조",
        ingredients: ["Pseudoalteromonas Ferment Extract", "Soymilk Ferment Filtrate", "Lactobacillus", "Bacillus"],
        explanation:
          "발효 유래 성분과 보습 컨디셔닝 성분이 고농도 톤 케어 앰플의 사용감을 촉촉하고 편안하게 보조합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      concentration: "10%",
      role: "피부 톤 케어와 장벽 컨디션 보조",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고, 수분 손실로 인해 약해진 피부 장벽 컨디션을 보조합니다.",
      relatedConcerns: ["칙칙한 피부 톤", "불균일한 안색", "장벽 약화", "건조로 인한 칙칙함"]
    },
    {
      nameKo: "IBR-TCLC",
      nameEn: "IBR-TCLC",
      inci: "Jojoba Seed Oil, Squalane, Tomato Fruit Extract complex",
      role: "광 스트레스 대응 브라이트닝 보조",
      consumerBenefit:
        "피토엔, 피토플루엔 등 카로티노이드 기반 성분으로 자외선 노출로 칙칙해 보이는 피부 컨디션을 맑게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["광노화로 인한 칙칙함", "피부 톤 저하", "산화 스트레스", "피부 컨디션 저하"]
    },
    {
      nameKo: "알파-알부틴",
      nameEn: "Alpha-Arbutin",
      inci: "Alpha-Arbutin",
      role: "멜라닌 생성 경로를 고려한 톤 케어",
      consumerBenefit:
        "잡티가 도드라져 보이는 피부 톤을 균일하게 가꾸는 데 도움을 주는 식물 유래 브라이트닝 성분입니다.",
      relatedConcerns: ["잡티가 도드라져 보이는 피부", "칙칙함", "불균일한 피부 톤", "색소 고민"]
    },
    {
      nameKo: "슈도알테로모나스발효추출물",
      nameEn: "Pseudoalteromonas Ferment Extract",
      inci: "Pseudoalteromonas Ferment Extract",
      role: "발효 유래 보습과 피부 컨디셔닝",
      consumerBenefit:
        "수분을 끌어당기고 피부 표면에 촉촉한 보습감을 남겨 매끄러운 피부결 유지에 도움을 줍니다.",
      relatedConcerns: ["건조", "피부결 거칠음", "피부 컨디션 저하", "보습 부족"]
    },
    {
      nameKo: "비사보롤",
      nameEn: "Bisabolol",
      inci: "Bisabolol",
      role: "브라이트닝과 피부 편안함 보조",
      consumerBenefit:
        "톤 케어 루틴에서 피부를 편안하게 유지하고 맑은 피부 인상을 보조합니다.",
      relatedConcerns: ["예민한 피부", "칙칙함", "피부 톤 저하"]
    },
    {
      nameKo: "스쿠알란",
      nameEn: "Squalane",
      inci: "Squalane",
      role: "보습막과 유연한 피부결 보조",
      consumerBenefit:
        "끈적임 없이 촉촉한 보습감을 남겨 피부결을 부드럽고 유연하게 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "푸석함", "피부결 거칠음", "윤기 부족"]
    },
    {
      nameKo: "호호바씨오일",
      nameEn: "Jojoba Seed Oil",
      inci: "Jojoba Seed Oil",
      role: "보습과 피부 유연감 보조",
      consumerBenefit:
        "피부에 부드러운 보습감을 더해 브라이트닝 앰플의 사용감을 촉촉하게 보조합니다.",
      relatedConcerns: ["건조", "당김", "푸석함", "피부 유연감 부족"]
    },
    {
      nameKo: "토마토추출물",
      nameEn: "Tomato Fruit Extract",
      inci: "Tomato Fruit Extract",
      role: "식물 유래 항산화 보조",
      consumerBenefit:
        "외부 환경으로 칙칙해 보이는 피부 컨디션을 생기 있게 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "산화 스트레스", "피부 생기 저하"]
    }
  ],

  texture: {
    type: "촉촉한 에센스 제형 앰플",
    finish: "끈적임 없이 촉촉하고 맑은 윤기를 남기는 마무리",
    absorption: "손 흡수, 전문가 관리 환경의 디바이스 병행 루틴, 1-2회 레이어링 사용 가능",
    sensoryCopy:
      "고함량 나이아신아마이드 앰플이지만 무겁거나 끈적이는 사용감보다, 피부에 수분을 밀착시키는 촉촉한 에센스 제형으로 설계되었습니다."
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
      image: "/images/products/perfect-n-cell-ampoule-2/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "beforeAfter",
      title: "사내 자체 사용 후기: 어두운 피부 톤과 많은 잡티 케이스",
      summary:
        "브랜드 자료에는 사용 전후 예시로 안색 개선, 잡티가 도드라져 보이는 피부 톤 정돈, 피부결 정돈이 제시되어 있습니다. 이는 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 제품 기술 소개서 및 제품 가이드 기준",
      image: "/images/products/perfect-n-cell-ampoule-2/evidence-before-after-tone-care.jpg"
    },
    {
      type: "brandData",
      title: "ER Perfection Toning Treatment Kit Step 2",
      summary:
        "Perfect N.Cell Ampoule은 Step 1 수딩 솔루션 이후, Step 3 스피큘 포뮬레이션 전에 적용되는 톤 케어·보습·탄력 보조 앰플로 제시됩니다.",
      sourceNote: "ERTY KOREA Product Guide 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 또는 Step 1 수딩 솔루션 사용 후 피부를 정돈합니다.",
      "앰플 적당량을 얼굴과 목에 고르게 펴 바릅니다.",
      "손바닥으로 가볍게 두드리며 흡수시킵니다.",
      "피부 상태에 따라 1-2회 반복 도포할 수 있습니다.",
      "전문가 관리 환경에서는 피부 상태에 따라 갈바닉, 초음파, 냉온기기 등과 함께 사용할 수 있습니다.",
      "브라이트닝 루틴 후 낮 시간에는 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "일반 피부는 데일리 사용 가능, 예민 피부는 주 2-3회 사용을 권장합니다.",
    cautions: [
      "극예민 피부는 사용 후 일시적인 붉어짐이 있을 수 있습니다.",
      "고함량 나이아신아마이드 제품에 민감한 피부는 낮은 빈도부터 시작하십시오.",
      "MTS 등 침습적 디바이스 병행은 전문가 관리 환경에서만 진행하십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "브라이트닝 루틴 중에는 자외선 차단을 병행하는 것이 좋습니다."
    ]
  },

  routines: [
    {
      title: "2 엔셀 앰플 + 35 앰플",
      products: [
        "perfect-n-cell-ampoule-2",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "톤 리페어 & 장벽 강화 루틴",
      recommendedFor: [
        "장벽 약화로 피부가 쉽게 칙칙해지는 경우",
        "피부가 예민하면서 톤까지 무너진 상태",
        "건강한 피부 바탕부터 톤 개선까지 함께 잡고 싶은 경우"
      ]
    },
    {
      title: "2 엔셀 앰플 + 37 크림",
      products: [
        "perfect-n-cell-ampoule-2",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "톤업 부스팅 & 광채 마무리 루틴",
      recommendedFor: [
        "피부 결, 톤, 윤기를 한 번에 정리하고 싶은 경우",
        "톤 보정과 자연스러운 광채를 원하는 경우",
        "메이크업 없이도 화사한 피부 표현을 원하는 경우"
      ]
    },
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
    }
  ],

  faq: [
    {
      question: "에르띠 퍼펙트 엔셀 앰플은 어떤 제품인가요?",
      answer:
        "나이아신아마이드 10%, IBR-TCLC, 알파-알부틴, 슈도알테로모나스발효추출물을 중심으로 피부 톤, 수분, 장벽 컨디션을 함께 설계한 Professional Step 2 브라이트닝 앰플입니다."
    },
    {
      question: "왜 Step 2 제품인가요?",
      answer:
        "ER Perfection Toning Treatment Kit에서 Step 1 수딩 솔루션이 피부결과 각질을 정돈한 뒤, Step 2 엔셀 앰플이 톤 케어와 보습·장벽 컨디션을 집중적으로 보조하고, Step 3 스피큘 포뮬레이션으로 루틴을 마무리하는 구조입니다."
    },
    {
      question: "나이아신아마이드 10%는 어떤 역할을 하나요?",
      answer:
        "나이아신아마이드 10%는 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 주며, 세라마이드 합성 촉진과 수분 손실 완화에 관여해 장벽 컨디션 케어에도 도움을 줍니다."
    },
    {
      question: "민감피부도 사용할 수 있나요?",
      answer:
        "브랜드 자료 기준 예민 피부는 주 2-3회 사용을 권장합니다. 고함량 나이아신아마이드 제품에 민감한 피부는 처음부터 매일 사용하기보다 낮은 빈도로 시작하는 것이 좋습니다."
    },
    {
      question: "5개입과 10개입은 어떻게 다른가요?",
      answer:
        "두 구성 모두 8ml 바이알 앰플이며, 5개입은 키트형 또는 입문 구성, 10개입은 반복 관리와 전문가용 루틴에 더 적합한 구성으로 볼 수 있습니다."
    },
    {
      question: "MTS와 함께 사용할 수 있나요?",
      answer:
        "상세 자료와 제품 가이드에서는 전문가 관리 환경에서 디바이스 병행이 가능한 앰플로 제시됩니다. 다만 MTS 등 침습적 관리와의 병행은 자가 사용 지침으로 해석하지 말고 전문가 판단하에 진행해야 합니다."
    },
    {
      question: "브라이트닝 앰플인데 건조하지 않나요?",
      answer:
        "엔셀 앰플은 브라이트닝 성분뿐 아니라 슈도알테로모나스발효추출물, 스쿠알란, 호호바씨오일 등 보습과 컨디셔닝 성분을 함께 배치해 촉촉한 에센스형 사용감을 목표로 설계되었습니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "톤 리페어와 장벽 케어가 필요하면 35 앰플, 톤업과 광채 마무리가 필요하면 37 크림, 집중 토닝 트리트먼트가 필요하면 1 수딩 솔루션과 3 스피큘 크림을 함께 사용하는 루틴이 제안됩니다."
    }
  ],

  relatedProducts: [
    "perfect-soothing-solution-1",
    "perfect-spicule-formulation-3",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37",
    "er-perfection-toning-treatment-kit"
  ],

  claims: {
    allowed: [
      "나이아신아마이드 10% 함유",
      "칙칙해 보이는 피부 톤 정돈에 도움",
      "맑고 균일한 피부 톤으로 가꾸는 데 도움",
      "수분 보유와 장벽 컨디션 케어에 도움",
      "피부결을 매끄럽게 정돈하는 데 도움",
      "약산성 pH 4.5-5.5 설계",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "일반 피부 데일리 사용 가능",
      "예민 피부 주 2-3회 사용 권장"
    ],
    avoid: [
      "기미 치료",
      "잡티 제거 보장",
      "색소침착 치료",
      "광노화 차단",
      "자외선 차단",
      "콜라겐 재생 보장",
      "즉시 미백",
      "100% 미백 개선",
      "흉터 제거",
      "여드름 자국 제거",
      "염증 제거",
      "피부과 시술 대체",
      "무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다. MTS 등 디바이스 병행 관리는 전문가 판단하에 진행하십시오."
  }
};

export const perfectNCellAmpoule2SchemaHints = {
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/`,
  schemaTypes: ["ProductGroup", "Product", "Offer", "BreadcrumbList", "FAQPage"],
  productGroup: {
    type: "ProductGroup",
    productGroupID: "perfect-n-cell-ampoule-2",
    variesBy: ["https://schema.org/size"],
    variantStrategy: "Use one canonical PDP with hasVariant entries for 8ml x 5pcs and 8ml x 10pcs. Do not create separate canonical PDPs for each pack count unless commerce architecture requires separate purchase URLs."
  },
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "Perfect N.Cell Ampoule Step.2",
      item: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/`
    }
  ],
  pricePolicy: "Do not add price, priceCurrency, availability, or aggregateRating until commerce data and review data are connected."
} as const;

export const perfectNCellAmpoule2MerchantFeedDraft = {
  itemGroupId: "perfect-n-cell-ampoule-2",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Ampoule",
  googleProductCategoryCandidate: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  variants: [
    {
      id: "ERTY-PNCA2-8ML-5PCS",
      title: "에르띠 퍼펙트 엔셀 앰플 8ml x 5pcs",
      description:
        "나이아신아마이드 10%, IBR-TCLC, 알파-알부틴을 담은 Professional Step 2 브라이트닝 앰플. 칙칙한 피부 톤과 피부결을 맑고 균일하게 정돈하고 수분·장벽 컨디션을 보조합니다.",
      link: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/?variant=8ml-x-5pcs`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-5pcs-product.webp`,
      size: "8ml x 5pcs",
      condition: "new"
    },
    {
      id: "ERTY-PNCA2-8ML-10PCS",
      title: "에르띠 퍼펙트 엔셀 앰플 8ml x 10pcs",
      description:
        "나이아신아마이드 10%, IBR-TCLC, 알파-알부틴을 담은 Professional Step 2 브라이트닝 앰플 10개입 구성. 반복 관리와 전문가용 토닝 루틴에 적합합니다.",
      link: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/?variant=8ml-x-10pcs`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/perfect-n-cell-ampoule-2/perfect-n-cell-ampoule-2-10pcs-product.webp`,
      size: "8ml x 10pcs",
      condition: "new"
    }
  ],
  omittedUntilCommerceConnection: ["price", "sale_price", "availability", "shipping", "return_policy", "gtin"]
} as const;

export const perfectNCellAmpoule2CodexHandoff = {
  targetDataFile: "src/data/products/perfect-n-cell-ampoule-2.ts",
  registerIn: "src/data/products/index.ts",
  route: "/products/perfect-n-cell-ampoule-2",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/perfect-n-cell-ampoule-2/`,
  instructions: [
    "Use perfectNCellAmpoule2 as the ProductPdpData source for the PDP.",
    "Keep SEO_GEO_BASE_URL as https://ertyofficial.com and do not use www.ertykorea.com as canonical.",
    "Render H1 as real server-rendered HTML text: 에르띠 퍼펙트 엔셀 앰플.",
    "Render the AI Summary block directly below the Hero.",
    "Render Formula Architecture and Ingredient Intelligence as crawlable semantic HTML.",
    "Render variants as 8ml x 5pcs and 8ml x 10pcs under one canonical ProductGroup.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants but do not inject price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD only from visible FAQ content.",
    "Use perfectNCellAmpoule2ImageAlt for image alt mapping.",
    "Use uploaded long detail PNG/JPG assets only as supplementary visual modules, not as the main SEO content.",
    "Add ClaimDisclaimer near the bottom of the PDP.",
    "Avoid consumer-facing MTS self-use instructions; keep device compatibility in expert/professional treatment context.",
    "Ensure sitemap loc uses https://ertyofficial.com/products/perfect-n-cell-ampoule-2/."
  ]
} as const;

export default perfectNCellAmpoule2;
