import type { ProductPdpData } from "./types";

/**
 * ERTY PDP DATA BUNDLE
 * Product: 에르띠 1 퍼펙트 수딩 솔루션 | Perfect Soothing Solution 1
 * Slug: perfect-soothing-solution-1
 * Purpose: Single source-of-truth product PDP payload for SEO / AEO / GEO / Codex implementation.
 *
 * Source documents used:
 * - 에르띠 전제품 소개서_한국어.pdf
 *   - p.4: ERTY product number / line architecture
 *   - p.35: ER Perfection Toning Treatment Kit composition, Step 1 Perfect Soothing Solution
 *   - p.39-p.41: Perfect Soothing Solution Step.1 product detail, usage, caution, case note
 *   - p.66-p.67: Brightening care manual, Step 1 role and ingredients
 * - 1 Perfect Soothing Solution 1.pdf
 *   - p.1: product name, volume, usage, AHA 1.5% / Glycolic Acid positioning
 *   - p.2: Allantoin, Panthenol, Centella Asiatica notes
 *   - p.3: product features and irritation index 0.00
 *   - p.4: routine pairings
 *
 * Editorial strategy:
 * - Canonical positioning: "Professional Step 1 skin prep / milk peeling toner"
 * - Avoid medical or absolute claims.
 * - All claim-sensitive terms are converted to cosmetic-safe language.
 */

export const perfectSoothingSolution1SourceAudit = {
  productEntity: {
    canonicalName: "에르띠 1 퍼펙트 수딩 솔루션 | Perfect Soothing Solution 1",
    slug: "perfect-soothing-solution-1",
    productNumber: "1",
    line: "Professional",
    routineStep: "Step 1",
    sourceConfidence: "high" as const,
  },
  confirmedFacts: [
    {
      field: "제품명",
      value: "에르띠 1 퍼펙트 수딩 솔루션 / Perfect Soothing Solution 1",
      source: "1 Perfect Soothing Solution 1.pdf p.1",
    },
    {
      field: "라인/역할",
      value: "Professional Line / ER Perfection Toning Treatment Kit Step 1",
      source: "에르띠 전제품 소개서_한국어.pdf p.35, p.39",
    },
    {
      field: "용량",
      value: "50ml / 140ml confirmed. 140ml / 480ml appears in product guide; 480ml should be treated as professional/large-size candidate until commerce data confirms.",
      source: "1 Perfect Soothing Solution 1.pdf p.1; 에르띠 전제품 소개서_한국어.pdf p.39-p.40",
    },
    {
      field: "핵심 성분",
      value: "AHA 1.5% Glycolic Acid, Allantoin, Panthenol, Phytosphingosine, Ceramide NP, Centella Asiatica Extract",
      source: "1 Perfect Soothing Solution 1.pdf p.1-p.3; 에르띠 전제품 소개서_한국어.pdf p.39-p.40, p.66",
    },
    {
      field: "사용법",
      value: "얼굴과 목에 펴 바르고 두드려 흡수. 화장솜 사용 및 1-2회 레이어링 가능.",
      source: "에르띠 전제품 소개서_한국어.pdf p.40",
    },
    {
      field: "임상/근거",
      value: "인체적용시험 결과 자극지수 0.00",
      source: "1 Perfect Soothing Solution 1.pdf p.3",
    },
  ],
  riskNotes: [
    "'피부 자극 없이'는 '자극 부담을 낮추도록 설계된'으로 변환한다.",
    "'염증 완화', '트러블 치료', '여드름 치료' 등 의학적 오해 표현은 사용하지 않는다.",
    "알란토인은 공개 PDP에서 진정/컨디셔닝/편안한 사용감 보조로 제한한다.",
    "Before/After 및 case 이미지는 보조 자료이며 동일 결과 보장을 금지한다.",
  ],
} as const;

export const perfectSoothingSolution1ImageAlt = [
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-50ml-product.png",
    alt: "에르띠 1 퍼펙트 수딩 솔루션 50ml 튜브형 제품 이미지",
    role: "variant-product-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-50ml-intro.jpg",
    alt: "AHA 1.5% 기반 에르띠 퍼펙트 수딩 솔루션 50ml 제형과 제품 소개 이미지",
    role: "detail-support-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-50ml-detail.jpg",
    alt: "에르띠 퍼펙트 수딩 솔루션 50ml 상세페이지 이미지",
    role: "detail-support-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-product.png",
    alt: "에르띠 1 퍼펙트 수딩 솔루션 140ml 펌프형 제품 이미지",
    role: "variant-product-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-ingredients.jpg",
    alt: "글라이콜릭애씨드 알란토인 판테놀 피토스핑고신 병풀추출물을 설명하는 퍼펙트 수딩 솔루션 성분 이미지",
    role: "ingredient-support-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-how-to-use.jpg",
    alt: "에르띠 퍼펙트 수딩 솔루션 사용법과 FAQ 안내 이미지",
    role: "usage-support-image",
  },
  {
    src: "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-support-image",
  },
] as const;

export const perfectSoothingSolution1ClaimRiskClassification = {
  safeClaims: [
    "AHA 1.5% 함유",
    "묵은 각질 정돈에 도움",
    "거친 피부결을 부드럽게 정돈하는 데 도움",
    "약산성 pH 4.5-5.5 설계",
    "일반 피부 데일리 사용 가능",
    "예민 피부 주 2-3회 사용 권장",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
  ],
  adjustedClaims: [
    {
      original: "피부 자극 없이",
      adjusted: "자극 부담을 낮추도록 설계된",
    },
    {
      original: "빠른 진정",
      adjusted: "예민해진 피부 컨디션을 편안하게 정돈하는 데 도움",
    },
    {
      original: "피부 장벽 강화",
      adjusted: "피부 장벽 컨디션 케어에 도움",
    },
    {
      original: "염증 완화",
      adjusted: "외부 자극으로 예민해진 피부를 편안하게 유지하는 데 도움",
    },
  ],
  prohibitedClaims: [
    "치료",
    "완치",
    "염증 제거",
    "여드름 치료",
    "트러블 완치",
    "100% 개선",
    "무조건 무자극",
    "모든 피부에 완벽",
    "즉시 미백",
  ],
} as const;

export const perfectSoothingSolution1: ProductPdpData = {
  slug: "perfect-soothing-solution-1",

  identity: {
    productNumber: "1",
    line: "Professional",
    lineKo: "프로페셔널",
    nameKo: "에르띠 1 퍼펙트 수딩 솔루션",
    nameEn: "Perfect Soothing Solution 1",
    canonicalName: "에르띠 1 퍼펙트 수딩 솔루션 | Perfect Soothing Solution 1",
    category: "Daily Exfoliating Milk Toner",
    routineStep: "Step 1",
    shortDefinition:
      "AHA 1.5% 기반의 저자극 밀크 필링 토너로, 묵은 각질과 거친 피부결을 부드럽게 정돈하고 다음 단계 스킨케어를 위한 피부 컨디션을 준비합니다.",
  },

  variants: [
    {
      sku: "ERTY-PSS1-50",
      volume: "50ml",
      image:
        "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-50ml-product.png",
    },
    {
      sku: "ERTY-PSS1-140",
      volume: "140ml",
      image:
        "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-product.png",
    },
  ],

  seo: {
    title:
      "에르띠 1 퍼펙트 수딩 솔루션 | AHA 1.5% 저자극 밀크 필링 토너",
    description:
      "에르띠 1 퍼펙트 수딩 솔루션은 AHA 1.5% 글라이콜릭애씨드와 알란토인, 판테놀, 피토스핑고신, 병풀추출물을 담은 약산성 밀크 필링 토너입니다. 묵은 각질과 거친 피부결을 부드럽게 정돈하고 예민해진 피부 컨디션을 편안하게 케어하는 ERTY Step 1 솔루션.",
    keywords: [
      "에르띠 퍼펙트 수딩 솔루션",
      "Perfect Soothing Solution 1",
      "에르띠 1번",
      "AHA 1.5% 토너",
      "글라이콜릭애씨드 토너",
      "저자극 필링 토너",
      "밀크 필링 토너",
      "데일리 필링 토너",
      "각질 정돈 토너",
      "피부결 정돈 토너",
      "민감피부 각질 케어",
      "약산성 필링 토너",
      "Step 1 토너",
      "에스테틱 필링 토너",
    ],
    canonicalUrl:
      "https://ertyofficial.com/products/perfect-soothing-solution-1/",
    ogImage:
      "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-og.jpg",
  },

  hero: {
    eyebrow: "Professional Step 1 · Daily Milk Peeling Toner",
    headline: "벗겨내는 필링보다, 편안하게 정돈하는 수딩 솔루션",
    subheadline:
      "AHA 1.5%와 진정·장벽 성분을 함께 설계한 약산성 밀크 필링 토너",
    benefitChips: [
      "AHA 1.5%",
      "각질 정돈",
      "피부결 프렙",
      "진정 보조",
      "장벽 컨디션 케어",
      "약산성 pH 4.5-5.5",
    ],
    primaryImage:
      "/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-product.png",
  },

  aiSummary: {
    oneSentence:
      "에르띠 1 퍼펙트 수딩 솔루션은 AHA 1.5% 글라이콜릭애씨드와 진정·장벽 성분을 함께 설계한 저자극 밀크 필링 토너입니다.",
    paragraph:
      "에르띠 1 퍼펙트 수딩 솔루션은 ER Perfection Toning Treatment Kit의 Step 1 제품으로, AHA 1.5% 글라이콜릭애씨드가 묵은 각질과 거친 피부결을 부드럽게 정돈하고 알란토인, 판테놀, 피토스핑고신, 세라마이드 NP, 병풀추출물이 필링 후 피부를 편안하게 유지하도록 보조하는 약산성 밀크 토너입니다. 일반 피부는 데일리 사용이 가능하고, 예민 피부는 주 2-3회 사용이 권장됩니다.",
    keyFacts: [
      "AHA 1.5% 글라이콜릭애씨드 함유",
      "약산성 pH 4.5-5.5 설계",
      "우윳빛 밀크 토너 제형",
      "알란토인, 판테놀, 피토스핑고신, 세라마이드 NP, 병풀추출물 배합",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "일반 피부 데일리 사용 가능",
      "예민 피부 주 2-3회 사용 권장",
    ],
  },

  problemSolution: {
    targetConcerns: [
      "묵은 각질로 피부결이 거칠어 보이는 피부",
      "강한 필링은 부담스럽지만 피부결 정돈이 필요한 피부",
      "칙칙하고 답답해 보이는 피부 표면",
      "필링 후 건조감이나 자극감이 걱정되는 피부",
      "메이크업이 들뜨고 피부결이 고르지 않은 피부",
      "다음 단계 앰플이나 크림이 편안하게 올라가는 바탕을 만들고 싶은 피부",
    ],
    productApproach: [
      "AHA 1.5% 글라이콜릭애씨드로 묵은 각질과 거친 표면을 부드럽게 정돈합니다.",
      "알란토인과 병풀추출물이 예민해진 피부 컨디션을 편안하게 유지하도록 보조합니다.",
      "판테놀, 피토스핑고신, 세라마이드 NP가 필링 후 장벽 컨디션과 수분 밸런스를 보조합니다.",
      "약산성 밀크 토너 제형으로 데일리 루틴에 부담을 낮춘 사용감을 제공합니다.",
    ],
  },

  formula: {
    thesis:
      "이 제품은 강한 산 필링이 아니라 AHA 1.5%의 부드러운 각질 정돈 축에 진정·보습·장벽 컨디션 성분을 결합한 Step 1 피부 프렙 포뮬러입니다.",
    axes: [
      {
        title: "Exfoliation Axis",
        role: "묵은 각질과 거친 피부결 정돈",
        ingredients: ["Glycolic Acid", "Phytosphingosine"],
        explanation:
          "AHA 1.5% 글라이콜릭애씨드가 피부 표면의 묵은 각질과 거친 결을 부드럽게 정돈하고, 피토스핑고신이 피부 표면 컨디션을 보조합니다.",
      },
      {
        title: "Soothing Axis",
        role: "필링 후 피부 컨디션 안정",
        ingredients: ["Allantoin", "Centella Asiatica Extract"],
        explanation:
          "알란토인과 병풀추출물이 필링 후 예민해질 수 있는 피부를 편안하게 유지하도록 돕습니다.",
      },
      {
        title: "Barrier Support Axis",
        role: "피부 장벽 컨디션 케어",
        ingredients: ["Panthenol", "Phytosphingosine", "Ceramide NP"],
        explanation:
          "판테놀, 피토스핑고신, 세라마이드 NP가 건조와 외부 자극으로 흐트러진 피부 장벽 컨디션을 보조합니다.",
      },
      {
        title: "Moisture Balance Axis",
        role: "촉촉한 사용감과 수분 밸런스 보조",
        ingredients: ["Panthenol", "Allantoin"],
        explanation:
          "필링 토너 사용 후 느껴질 수 있는 당김 부담을 낮추고 촉촉하고 매끈한 마무리감을 보조합니다.",
      },
    ],
  },

  ingredients: [
    {
      nameKo: "글라이콜릭애씨드",
      nameEn: "Glycolic Acid",
      inci: "Glycolic Acid",
      concentration: "AHA 1.5%",
      role: "묵은 각질과 거친 피부결 정돈",
      consumerBenefit:
        "거칠어진 피부 표면을 부드럽게 정돈해 매끈한 피부결로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["묵은 각질", "거친 피부결", "칙칙함", "피부결 불균형"],
    },
    {
      nameKo: "알란토인",
      nameEn: "Allantoin",
      inci: "Allantoin",
      role: "피부 진정과 컨디셔닝 보조",
      consumerBenefit:
        "각질 정돈 후 예민해질 수 있는 피부를 편안하게 유지하도록 돕습니다.",
      relatedConcerns: ["예민한 피부", "필링 후 불편감", "피부 컨디션 저하"],
    },
    {
      nameKo: "판테놀",
      nameEn: "Panthenol",
      inci: "Panthenol",
      role: "수분 유지와 장벽 컨디션 보조",
      consumerBenefit:
        "건조로 인한 당김 부담을 줄이고 촉촉한 피부 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "장벽 약화", "예민함"],
    },
    {
      nameKo: "피토스핑고신",
      nameEn: "Phytosphingosine",
      inci: "Phytosphingosine",
      role: "피부 표면 보호와 장벽 컨디션 보조",
      consumerBenefit:
        "피부 표면의 수분 보호막 형성에 관여해 필링 후에도 피부가 편안하게 느껴지도록 보조합니다.",
      relatedConcerns: ["장벽 컨디션", "건조", "피부 보호", "피부결 불균형"],
    },
    {
      nameKo: "세라마이드 NP",
      nameEn: "Ceramide NP",
      inci: "Ceramide NP",
      role: "피부 장벽 컨디션 케어",
      consumerBenefit:
        "피부 장벽 구성 성분과 유사한 세라마이드 계열 성분으로 촉촉하고 탄탄한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["피부 장벽", "건조", "외부 자극", "수분 손실"],
    },
    {
      nameKo: "병풀추출물",
      nameEn: "Centella Asiatica Extract",
      inci: "Centella Asiatica Extract",
      role: "예민한 피부 진정 보조",
      consumerBenefit:
        "외부 환경으로 예민해진 피부를 편안하게 정돈하고 피부 컨디션을 안정적으로 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["붉어짐", "예민함", "피부 컨디션 저하", "트러블성 피부"],
    },
  ],

  texture: {
    type: "우윳빛 밀크 토너",
    finish: "촉촉하고 매끈한 마무리",
    absorption: "손 흡수, 화장솜 닦토, 1-2회 레이어링 사용 가능",
    sensoryCopy:
      "필링 토너 특유의 건조하고 날카로운 사용감보다, 수분감과 영양감이 느껴지는 우윳빛 제형으로 피부를 부드럽게 감싸는 사용감을 목표로 설계되었습니다.",
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
        "/images/products/perfect-soothing-solution-1/evidence-irritation-index-0-00.jpg",
    },
    {
      type: "brandData",
      title: "AHA 1.5% 기반 Step 1 필링 토너",
      summary:
        "ER Perfection Toning Treatment Kit의 Step 1로 설계된 제품이며, 묵은 각질 정돈과 다음 단계 케어 준비를 위한 프렙 토너 역할을 합니다.",
      sourceNote: "ERTY KOREA Product Guide 기준",
    },
  ],

  howToUse: {
    steps: [
      "세안 후 적당량을 얼굴과 목에 고르게 펴 바릅니다.",
      "손바닥으로 가볍게 두드리며 흡수시킵니다.",
      "각질이 신경 쓰이는 날에는 화장솜에 묻혀 피부결을 따라 부드럽게 닦아냅니다.",
      "피부 상태에 따라 1-2회 덧발라 레이어링할 수 있습니다.",
      "아침 사용 시에는 이후 자외선 차단제를 함께 사용하는 것을 권장합니다.",
    ],
    frequency:
      "일반 피부는 데일리 사용 가능, 예민 피부는 주 2-3회 사용을 권장합니다.",
    cautions: [
      "극예민 피부는 사용 후 일시적인 붉어짐이 있을 수 있습니다.",
      "눈가와 입가 등 예민한 부위는 사용량을 조절하십시오.",
      "사용 중 따가움, 붉어짐, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "AHA 성분을 포함하므로 낮 시간 사용 후에는 자외선 차단제를 함께 사용하는 것이 좋습니다.",
    ],
  },

  routines: [
    {
      title: "1 수딩 솔루션 + 35 앰플",
      products: [
        "perfect-soothing-solution-1",
        "concentrated-booster-skin-revitalizing-35",
      ],
      useCase: "피부 리셋 & 재생 준비 루틴",
      recommendedFor: [
        "시술 후 예민해진 피부",
        "붉은기와 미세 트러블이 반복되는 피부",
        "피부 컨디션이 전체적으로 무너졌다고 느껴지는 피부",
      ],
    },
    {
      title: "1 수딩 솔루션 + 37 크림",
      products: [
        "perfect-soothing-solution-1",
        "intensive-cellular-er-cream-37",
      ],
      useCase: "장벽 밀도 업 안정 루틴",
      recommendedFor: [
        "열감과 건조가 반복되는 피부",
        "장벽이 얇아 메이크업이 들뜨는 피부",
        "피부가 쉽게 예민해지는 시기",
      ],
    },
    {
      title: "1 수딩 솔루션 + 2 엔셀 앰플 + 3 스피큘 크림",
      products: [
        "perfect-soothing-solution-1",
        "perfect-n-cell-ampoule-2",
        "perfect-spicule-formulation-3",
      ],
      useCase: "피부 컨디션 부스팅 & 재생 리모델링 루틴",
      recommendedFor: [
        "피부가 전반적으로 처지고 힘이 없어 보이는 경우",
        "잔주름, 탄력 저하, 거친 결이 동시에 느껴지는 피부",
        "시술 없이 단계적으로 피부 밀도를 끌어올리고 싶은 경우",
      ],
    },
  ],

  faq: [
    {
      question: "에르띠 1 퍼펙트 수딩 솔루션은 어떤 제품인가요?",
      answer:
        "AHA 1.5% 글라이콜릭애씨드를 중심으로 묵은 각질과 거친 피부결을 부드럽게 정돈하고, 알란토인·판테놀·피토스핑고신·병풀추출물·세라마이드 NP로 필링 후 피부 컨디션을 편안하게 보조하는 약산성 밀크 필링 토너입니다.",
    },
    {
      question: "민감피부도 사용할 수 있나요?",
      answer:
        "예민 피부도 사용할 수 있도록 설계된 제품이지만, AHA 성분이 포함되어 있으므로 처음에는 주 2-3회부터 시작하는 것을 권장합니다. 극예민 피부는 사용 후 일시적인 붉어짐이 있을 수 있습니다.",
    },
    {
      question: "매일 사용해도 되나요?",
      answer:
        "브랜드 자료 기준 일반 피부는 데일리 사용이 가능합니다. 다만 피부가 예민하거나 건조한 시기에는 사용 빈도를 줄이고 피부 반응을 확인하는 것이 좋습니다.",
    },
    {
      question: "화장솜으로 닦아내야 하나요?",
      answer:
        "화장솜에 묻혀 피부결을 따라 부드럽게 닦아내는 방식과 손으로 두드려 흡수시키는 방식 모두 가능합니다. 각질이 신경 쓰이는 날에는 닦토로, 건조함이 느껴지는 날에는 손 흡수 방식으로 사용하는 것을 권장합니다.",
    },
    {
      question: "AHA 1.5%는 어떤 역할을 하나요?",
      answer:
        "AHA 1.5% 글라이콜릭애씨드는 피부 표면의 묵은 각질과 거친 결을 부드럽게 정돈해 매끈한 피부결로 가꾸는 데 도움을 줍니다.",
    },
    {
      question: "사용 후 따갑거나 붉어질 수 있나요?",
      answer:
        "AHA 성분이 포함되어 있어 피부 상태에 따라 일시적인 따가움이나 붉어짐이 느껴질 수 있습니다. 반응이 지속되면 사용 빈도를 줄이거나 사용을 중단하는 것이 좋습니다.",
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "피부 컨디션 리셋이 필요할 때는 35 앰플, 장벽 안정이 필요할 때는 37 크림, 집중적인 토닝 루틴이 필요할 때는 2 엔셀 앰플과 3 스피큘 크림을 함께 사용하는 루틴이 제안됩니다.",
    },
    {
      question: "이 제품은 필링제인가요, 토너인가요?",
      answer:
        "강한 박피형 필링제라기보다 데일리 루틴에서 사용할 수 있는 밀크 필링 토너에 가깝습니다. 각질 정돈, 진정 보조, 장벽 컨디션 케어를 함께 고려한 Step 1 프렙 토너입니다.",
    },
  ],

  relatedProducts: [
    "perfect-n-cell-ampoule-2",
    "perfect-spicule-formulation-3",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37",
    "er-perfection-toning-treatment-kit",
  ],

  claims: {
    allowed: [
      "묵은 각질 정돈에 도움",
      "거친 피부결을 부드럽게 정돈하는 데 도움",
      "예민해진 피부 컨디션을 편안하게 유지하는 데 도움",
      "피부 장벽 컨디션 케어에 도움",
      "수분 밸런스 유지에 도움",
      "일반 피부 데일리 사용 가능",
      "예민 피부 주 2-3회 사용 권장",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
    ],
    avoid: [
      "치료",
      "완치",
      "염증 제거",
      "여드름 치료",
      "트러블 완치",
      "100% 개선",
      "무조건 무자극",
      "피부 자극 없이",
      "모든 피부에 완벽",
      "즉시 미백",
      "주름 개선 기능성 제품으로 오인될 수 있는 표현",
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
  },
};

export const perfectSoothingSolution1SchemaHints = {
  schemaTypes: [
    "ProductGroup",
    "Product",
    "Offer",
    "BreadcrumbList",
    "FAQPage",
  ],
  productGroupID: "perfect-soothing-solution-1",
  variesBy: ["https://schema.org/size"],
  variantStrategy:
    "Render 50ml and 140ml as hasVariant items. Do not render price until commerce source is connected.",
  pricePolicy:
    "Do not hardcode price or stock. Pull price, currency, availability from commerce data to avoid Product schema and Merchant feed mismatch.",
} as const;

export const perfectSoothingSolution1MerchantFeedDraft = {
  itemGroupId: "perfect-soothing-solution-1",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Toner",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  variants: [
    {
      id: "ERTY-PSS1-50",
      title: "에르띠 1 퍼펙트 수딩 솔루션 50ml",
      link: "https://ertyofficial.com/products/perfect-soothing-solution-1?variant=50ml",
      imageLink:
        "https://ertyofficial.com/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-50ml-product.png",
      size: "50ml",
    },
    {
      id: "ERTY-PSS1-140",
      title: "에르띠 1 퍼펙트 수딩 솔루션 140ml",
      link: "https://ertyofficial.com/products/perfect-soothing-solution-1?variant=140ml",
      imageLink:
        "https://ertyofficial.com/images/products/perfect-soothing-solution-1/perfect-soothing-solution-1-140ml-product.png",
      size: "140ml",
    },
  ],
  description:
    "AHA 1.5% 글라이콜릭애씨드와 진정·장벽 성분을 함께 설계한 약산성 밀크 필링 토너. 묵은 각질과 거친 피부결을 부드럽게 정돈하는 ERTY Professional Step 1 솔루션.",
} as const;

export const perfectSoothingSolution1CodexHandoff = {
  targetFile: "src/data/products/perfect-soothing-solution-1.ts",
  registerIn: "src/data/products/index.ts",
  slug: "perfect-soothing-solution-1",
  checklist: [
    "Register perfectSoothingSolution1 in product index.",
    "Ensure /products/perfect-soothing-solution-1 renders from dynamic PDP template.",
    "Render H1 as real HTML text: 에르띠 1 퍼펙트 수딩 솔루션.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Generate FAQPage JSON-LD when faq exists.",
    "Generate ProductGroup / Product / Offer JSON-LD from variants.",
    "Do not hardcode price or availability until commerce data is connected.",
    "Apply image alt mapping from perfectSoothingSolution1ImageAlt.",
    "Use detail PNGs only as supplementary visual assets, not primary SEO content.",
    "Add ClaimDisclaimer near the bottom of the PDP.",
    "Ensure sitemap includes this slug.",
  ],
} as const;

export default perfectSoothingSolution1;
