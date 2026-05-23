import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 55 Concentrated Booster for Skin Brightening
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const concentratedBoosterSkinBrightening55SourceAudit = {
  slug: "concentrated-booster-skin-brightening-55",
  productEntity:
    "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 | 55 Concentrated Booster for Skin Brightening",
  sourceFiles: [
    {
      fileName: "55 Concentraed Booster for Skin Brightening.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming correction",
        "capacity 30ml / 100ml",
        "Alpha-Arbutin positioning",
        "Bright Oleoactif positioning",
        "Niacinamide positioning",
        "Adenosine positioning",
        "3-in-1 brightening, wrinkle-care, and moisturizing positioning",
        "dark-spot and clear-tone marketing context",
        "Bright Oleoactif dark-spot and complexion evidence context",
        "irritation index 0.00 brand-provided test reference",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product numbering system",
        "Brightening line structure",
        "55 Concentrated Booster line position",
        "30ml / 100ml configuration",
        "Alpha-Arbutin and Bright Oleoactif patented-ingredient context",
        "Niacinamide and Adenosine ingredient context",
        "recommended skin type: dull skin and sensitive skin",
        "Bright Oleoactif treatment manual context",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "55(30ml)_*.jpg / 55(100ml)_*.jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "brightening ampoule positioning",
        "melanin and complexion narrative",
        "real-review detail-page narrative",
        "routine suggestion context",
        "official mall notice context",
        "cosmetic-safe translation of dark-spot, whitening, wrinkle, hydration, and glow claims"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 / 55 Concentrated Booster for Skin Brightening으로 공개 PDP에서 정규화한다.",
    "기술 소개서 파일명과 일부 본문에는 Concentraed로 오탈자가 있으나, 공개 PDP 엔터티는 Concentrated로 정규화한다.",
    "Brightening Line의 55번 앰플 제품이다.",
    "용량은 30ml와 100ml 두 가지 구성이 제시되어 있다.",
    "제품은 미백, 주름개선, 보습까지 3 in 1 브라이트닝 케어 방향으로 소개된다.",
    "기술 소개서 기준 주요 성분축은 Alpha-Arbutin, Bright Oleoactif, Niacinamide, Adenosine이다.",
    "Bright Oleoactif는 유채씨오일, 마시멜로뿌리추출물, 쌀겨추출물, 스페인감초추출물의 보태니컬 브라이트닝 성분축으로 제시된다.",
    "전제품 소개서 기준 추천 피부 타입은 칙칙한 피부, 예민한 피부로 제시된다.",
    "전제품 소개서 기준 Alpha-Arbutin은 멜라닌 억제 및 감소, Bright Oleoactif는 다크 스팟 감소 맥락으로 소개된다.",
    "나이아신아마이드는 피부 톤업 및 미백 효과, 아데노신은 탄력 증진 및 주름개선 맥락으로 제시된다.",
    "기술 소개서 기준 인체적용시험 자극지수 0.00 자료가 제시되어 있다.",
    "Bright Oleoactif 관련 D+0 / D+28 / D+56 안색 및 색소침착 평가 자료가 전제품 소개서의 트리트먼트 매뉴얼에 포함되어 있다.",
    "가격과 재고는 제공되지 않았다."
  ],
  unresolvedOrControlledFacts: [
    "미백·주름개선 표현은 기능성 화장품 문맥으로 제한하고, 색소·기미·주름 치료나 보장형 개선 표현으로 쓰지 않는다.",
    "Alpha-Arbutin의 멜라닌 생성 억제 표현은 성분 소구로 활용하되 제품 단독 효과를 보장하지 않는다.",
    "Bright Oleoactif의 다크스팟·색소침착 자료는 원료/브랜드 제공 자료로 취급하고 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다.",
    "'반짝반짝 몰라보게 밝아진', '즉각 미백', '잡티 개선' 등 강한 표현은 '칙칙해 보이는 피부 톤 인상 케어', '맑고 균일한 피부 톤으로 가꾸는 데 도움'으로 조정한다.",
    "사용자 리뷰와 상세페이지 내 체감 표현은 증거 섹션의 보조 맥락으로만 활용하고, 제품 보장 claim으로 전환하지 않는다.",
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다."
  ]
} as const;

export const concentratedBoosterSkinBrightening55ImageAlt = [
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-product.webp",
    alt: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 30ml 미백 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-detail-1.jpg",
    alt: "알파 알부틴과 브라이트 올레오액티프를 설명하는 에르띠 55 브라이트닝 앰플 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-detail-2.jpg",
    alt: "칙칙한 피부 톤과 브라이트닝 루틴을 설명하는 에르띠 55 컨센트레이트 부스터 30ml 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-100ml-product.webp",
    alt: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 100ml 미백 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-100ml-detail-1.jpg",
    alt: "피부 안색과 광채 케어를 설명하는 에르띠 55 브라이트닝 앰플 100ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-100ml-detail-2.jpg",
    alt: "에르띠 55 컨센트레이트 부스터 사용 후기와 브라이트닝 루틴 추천 상세 이미지",
    role: "review-and-routine-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const concentratedBoosterSkinBrightening55ClaimRiskClassification = {
  safeClaims: [
    "30ml / 100ml 앰플",
    "Brightening Line 55번 앰플",
    "칙칙해 보이는 피부 톤과 건조한 미백 케어가 고민인 피부를 위한 브라이트닝 앰플",
    "Alpha-Arbutin, Bright Oleoactif, Niacinamide, Adenosine 소구",
    "피부를 맑고 균일한 톤으로 가꾸는 데 도움",
    "칙칙해 보이는 피부 인상을 화사하게 관리하는 데 도움",
    "피부에 촉촉한 수분감과 생기 있는 광채감을 부여하는 데 도움",
    "나이아신아마이드와 아데노신 기반 기능성 성분축 소구",
    "브라이트 올레오액티프 기반 보태니컬 광채 케어",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "멜라닌 생성을 억제하고 감소시켜 피부를 환하고 맑게 가꾸어 줍니다.",
      adjusted: "멜라닌 케어 성분축으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움"
    },
    {
      original: "다크스팟 개선 / 감소",
      adjusted: "다크 스팟이 고민인 피부 톤 인상을 균일하게 관리하는 데 도움"
    },
    {
      original: "색소침착을 완화하여 깨끗한 피부톤 유지",
      adjusted: "색소 고민으로 칙칙해 보이는 피부 톤을 깨끗하고 균일하게 가꾸는 데 도움"
    },
    {
      original: "반짝 반짝 몰라보게 밝아진 피부 안색",
      adjusted: "맑고 화사해 보이는 피부 안색으로 가꾸는 데 도움"
    },
    {
      original: "미백 효과",
      adjusted: "기능성 성분축을 통한 브라이트닝 톤 케어"
    },
    {
      original: "주름개선",
      adjusted: "아데노신 배합으로 탄력감이 부족해 보이는 피부 컨디션 관리에 도움"
    },
    {
      original: "피부 광채 케어",
      adjusted: "피부에 생기 있는 광채감을 부여하는 데 도움"
    },
    {
      original: "자외선 방어력 형성",
      adjusted: "외부 환경으로 칙칙해 보이기 쉬운 피부를 편안하게 관리하는 보태니컬 성분축"
    },
    {
      original: "피부 자극 완화 & 진정",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 유지하는 데 도움"
    }
  ],
  prohibitedClaims: [
    "기미 치료",
    "잡티 제거",
    "색소침착 치료",
    "다크스팟 완전 제거",
    "멜라닌 완전 차단",
    "즉시 미백",
    "100% 미백 개선",
    "피부 톤 영구 개선",
    "주름 제거",
    "탄력 회복 보장",
    "레이저 시술 대체",
    "자외선 손상 치료",
    "모든 피부에 무조건 무자극",
    "피부 자극 없음 보장",
    "의약품 수준 미백",
    "과색소침착 치료"
  ]
} as const;

export const concentratedBoosterSkinBrightening55: ProductPdpData = {
  slug: "concentrated-booster-skin-brightening-55",

  identity: {
    productNumber: "55",
    line: "Brightening",
    lineKo: "브라이트닝",
    nameKo: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝",
    nameEn: "55 Concentrated Booster for Skin Brightening",
    canonicalName:
      "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 | 55 Concentrated Booster for Skin Brightening",
    category: "Brightening Ampoule",
    routineStep: "Ampoule Step",
    shortDefinition:
      "알파-알부틴, 브라이트 올레오액티프, 나이아신아마이드, 아데노신을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 수분감과 광채감을 함께 보조하는 Brightening Line 55번 브라이트닝 앰플입니다."
  },

  variants: [
    {
      sku: "ERTY-CBSB55-30ML",
      volume: "30ml",
      image:
        "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-product.webp"
    },
    {
      sku: "ERTY-CBSB55-100ML",
      volume: "100ml",
      image:
        "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-100ml-product.webp"
    }
  ],

  seo: {
    title: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 | 브라이트닝 미백 앰플",
    description:
      "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝은 알파-알부틴, 브라이트 올레오액티프, 나이아신아마이드, 아데노신을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 수분감과 광채감을 함께 보조하는 Brightening Line 55번 앰플입니다.",
    keywords: [
      "에르띠 55 컨센트레이트 부스터",
      "55 Concentrated Booster for Skin Brightening",
      "컨센트레이트 부스터 포 스킨 브라이트닝",
      "에르띠 브라이트닝 앰플",
      "미백 앰플",
      "브라이트닝 앰플",
      "알파 알부틴 앰플",
      "Alpha Arbutin ampoule",
      "나이아신아마이드 앰플",
      "Bright Oleoactif 앰플",
      "칙칙한 피부 앰플",
      "피부 톤 앰플",
      "광채 앰플",
      "다크스팟 케어 앰플",
      "탄력 브라이트닝 앰플"
    ],
    canonicalUrl:
      "https://ertyofficial.com/products/concentrated-booster-skin-brightening-55/",
    ogImage:
      "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-og.jpg"
  },

  hero: {
    eyebrow: "Brightening Line · Ampoule Step",
    headline: "칙칙해 보이는 피부 톤에, 수분감과 광채감을 더하는 브라이트닝 앰플",
    subheadline:
      "알파-알부틴과 브라이트 올레오액티프, 나이아신아마이드로 맑고 균일한 피부 톤 인상을 설계한 3 in 1 브라이트닝 부스터",
    benefitChips: [
      "Alpha-Arbutin",
      "Bright Oleoactif",
      "Niacinamide",
      "Adenosine",
      "브라이트닝 톤 케어",
      "수분 광채",
      "탄력 컨디션"
    ],
    primaryImage:
      "/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-product.webp"
  },

  aiSummary: {
    oneSentence:
      "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝은 알파-알부틴과 브라이트 올레오액티프를 중심으로 피부 톤 인상과 수분 광채를 함께 관리하는 브라이트닝 앰플입니다.",
    paragraph:
      "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝은 Brightening Line의 55번 앰플로, 알파-알부틴과 나이아신아마이드가 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 주고, 브라이트 올레오액티프가 식물 유래 보태니컬 광채 케어 축을 형성하며, 아데노신이 탄력감이 부족해 보이는 피부 컨디션 관리를 보조하도록 설계된 3 in 1 브라이트닝 앰플입니다. 건조하기 쉬운 브라이트닝 케어에 수분감과 광채감을 함께 더하는 방향으로 설계되었으며, 브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다.",
    keyFacts: [
      "Brightening Line 55번 앰플",
      "30ml / 100ml 구성",
      "Alpha-Arbutin 소구",
      "Bright Oleoactif 소구",
      "Niacinamide 배합",
      "Adenosine 배합",
      "브라이트닝·탄력 컨디션·보습 3 in 1 케어 방향",
      "칙칙한 피부와 예민한 피부 추천 맥락",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "Bright Oleoactif D+0 / D+28 / D+56 원료 및 브랜드 제공 안색 평가 자료 보유"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "칙칙하고 어두워 보이는 피부 톤",
      "건조한 미백 앰플 사용감이 부담스러운 피부",
      "다크 스팟과 잡티로 피부 톤이 균일해 보이지 않는 피부",
      "피부가 생기 없이 피곤해 보이는 상태",
      "브라이트닝과 수분감을 동시에 원하는 피부",
      "탄력감이 부족해 보이고 윤기가 줄어든 피부"
    ],
    productApproach: [
      "알파-알부틴과 나이아신아마이드 성분축으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 줍니다.",
      "브라이트 올레오액티프 성분축으로 보태니컬 광채 케어와 촉촉한 브라이트닝 사용감을 보조합니다.",
      "아데노신을 배합해 탄력감이 부족해 보이는 피부 컨디션 관리를 돕습니다.",
      "건조하기 쉬운 브라이트닝 루틴에 수분감과 광채감을 함께 더하도록 설계했습니다."
    ]
  },

  formula: {
    thesis:
      "55번 앰플은 단순한 톤업 앰플이 아니라 알파-알부틴과 나이아신아마이드의 브라이트닝 성분축, 브라이트 올레오액티프의 보태니컬 광채 축, 아데노신의 탄력 컨디션 축을 결합한 3 in 1 브라이트닝 포뮬러입니다.",
    axes: [
      {
        title: "Brightening Tone Axis",
        role: "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움",
        ingredients: ["Alpha-Arbutin", "Niacinamide"],
        explanation:
          "알파-알부틴과 나이아신아마이드는 브라이트닝 톤 케어의 중심축으로, 색소 고민으로 칙칙해 보이는 피부 인상을 균일하고 맑게 가꾸는 데 도움을 주는 성분 조합으로 설명할 수 있습니다."
      },
      {
        title: "Botanical Radiance Axis",
        role: "수분감과 광채감을 함께 보조하는 보태니컬 케어",
        ingredients: ["Bright Oleoactif", "Rapeseed Oil", "Marshmallow Root Extract", "Rice Bran Extract", "Spanish Licorice Extract"],
        explanation:
          "브라이트 올레오액티프는 유채씨오일, 마시멜로뿌리추출물, 쌀겨추출물, 스페인감초추출물로 구성된 식물 유래 성분축으로, 건조하기 쉬운 브라이트닝 루틴에 보습감과 생기 있는 광채감을 더하는 방향으로 설계되었습니다."
      },
      {
        title: "Elasticity Condition Axis",
        role: "탄력감이 부족해 보이는 피부 컨디션 케어",
        ingredients: ["Adenosine", "Niacinamide"],
        explanation:
          "아데노신은 탄력감이 부족해 보이는 피부를 매끄럽고 건강한 인상으로 관리하는 데 도움을 주는 성분축으로 설명할 수 있습니다."
      },
      {
        title: "Moisture Glow Axis",
        role: "브라이트닝 케어 중 건조 부담을 낮추는 수분 광채 보조",
        ingredients: ["Bright Oleoactif", "Marshmallow Root Extract", "Rapeseed Oil"],
        explanation:
          "브라이트닝 앰플에서 흔히 느껴지는 건조한 사용감의 한계를 줄이고, 촉촉하고 윤기 있어 보이는 마무리를 목표로 설계한 보습·광채 축입니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "알파-알부틴",
      nameEn: "Alpha-Arbutin",
      inci: "Alpha-Arbutin",
      role: "브라이트닝 톤 케어",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 주는 핵심 브라이트닝 성분입니다.",
      relatedConcerns: ["칙칙한 피부", "다크 스팟 고민", "피부 톤 불균형", "잡티 고민"]
    },
    {
      nameKo: "브라이트 올레오액티프",
      nameEn: "Bright Oleoactif",
      role: "보태니컬 광채 케어",
      consumerBenefit:
        "식물 유래 활성 성분축으로 건조하기 쉬운 브라이트닝 케어에 수분감과 생기 있는 광채감을 더하는 데 도움을 줍니다.",
      relatedConcerns: ["광채 부족", "칙칙함", "건조한 브라이트닝 케어", "피부 생기 부족"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      role: "피부 톤과 컨디션 밸런싱",
      consumerBenefit:
        "피부 톤을 균일하게 정돈하고 밝고 맑은 피부 인상을 형성하는 데 도움을 주는 기능성 성분축입니다.",
      relatedConcerns: ["칙칙함", "피부 톤 불균형", "광채 부족", "피부 컨디션 저하"]
    },
    {
      nameKo: "아데노신",
      nameEn: "Adenosine",
      inci: "Adenosine",
      role: "탄력 컨디션 케어",
      consumerBenefit:
        "탄력감이 부족해 보이는 피부를 매끄럽고 건강한 인상으로 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["탄력 저하", "잔주름 고민", "피부 생기 부족", "에이징 케어"]
    },
    {
      nameKo: "유채씨오일",
      nameEn: "Rapeseed Oil",
      role: "보습감과 윤기 보조",
      consumerBenefit:
        "브라이트 올레오액티프의 구성 성분으로 촉촉한 사용감과 윤기 있는 피부 인상을 보조합니다.",
      relatedConcerns: ["건조", "윤기 부족", "수분감 부족"]
    },
    {
      nameKo: "마시멜로뿌리추출물",
      nameEn: "Marshmallow Root Extract",
      role: "보습 보호막 컨디션 보조",
      consumerBenefit:
        "건조하기 쉬운 피부에 부드러운 보습감을 더하고 편안한 피부 컨디션을 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "예민함", "피부 보호", "수분감 부족"]
    },
    {
      nameKo: "쌀겨추출물",
      nameEn: "Rice Bran Extract",
      role: "피부결과 톤 인상 보조",
      consumerBenefit:
        "피부결을 정돈하고 맑은 피부 인상을 보조하는 보태니컬 성분축입니다.",
      relatedConcerns: ["피부결", "칙칙함", "광채 부족"]
    },
    {
      nameKo: "스페인감초추출물",
      nameEn: "Spanish Licorice Extract",
      role: "맑은 피부 인상과 편안한 컨디션 보조",
      consumerBenefit:
        "외부 자극으로 예민해진 피부를 편안하게 유지하고 맑은 피부 인상을 보조하는 성분으로 설명할 수 있습니다.",
      relatedConcerns: ["예민함", "칙칙함", "피부 컨디션 저하"]
    }
  ],

  texture: {
    type: "촉촉한 에센스 앰플 제형",
    finish: "번들거림보다 수분 광채가 남는 촉촉한 마무리",
    absorption: "앰플 단계에서 얼굴 전체와 목에 펴 바른 뒤 두드려 흡수",
    sensoryCopy:
      "건조하기 쉬운 브라이트닝 앰플의 사용감을 보완해, 피부에 촉촉한 수분감과 은은한 광채감을 남기도록 설계한 에센스 타입 앰플입니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 브라이트닝 앰플입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다."
    },
    {
      type: "ingredient",
      title: "Bright Oleoactif D+0 / D+28 / D+56 원료 평가 자료",
      summary:
        "전제품 소개서의 트리트먼트 매뉴얼에는 Bright Oleoactif 1% 적용 후 D+0, D+28, D+56 시점의 피부 색소침착 및 안색 평가 맥락이 제시되어 있습니다.",
      sourceNote:
        "원료 및 브랜드 제공 자료 기준으로, 제품 사용 시 모든 사용자에게 동일한 결과를 보장하지 않습니다."
    },
    {
      type: "brandData",
      title: "Brightening Line 55번 3 in 1 앰플 포지션",
      summary:
        "브랜드 자료는 이 제품을 미백, 주름개선, 보습까지 3 in 1 브라이트닝 케어 앰플로 소개합니다.",
      sourceNote: "ERTY KOREA Product Guide 및 제품 기술 소개서 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너로 피부결을 정돈합니다.",
      "앰플 단계에서 적당량을 취해 얼굴 전체와 목에 고르게 펴 바릅니다.",
      "손바닥으로 가볍게 두드리며 흡수시킵니다.",
      "칙칙함이 고민인 부위에는 소량을 한 번 더 레이어링할 수 있습니다.",
      "아침 루틴에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "일반 피부는 데일리 브라이트닝 앰플로 사용할 수 있으며, 예민 피부는 적은 양부터 시작해 피부 반응을 확인하는 것을 권장합니다.",
    cautions: [
      "민감한 피부는 사용 전 국소 부위에 먼저 테스트하는 것이 좋습니다.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "미백·브라이트닝 케어는 자외선 차단과 함께 병행할 때 루틴 완성도가 높아집니다.",
      "제품 사용에 따른 피부 톤 체감은 개인의 피부 상태, 자외선 노출, 생활 습관에 따라 달라질 수 있습니다."
    ]
  },

  routines: [
    {
      title: "55 앰플 + 15 앰플",
      products: [
        "concentrated-booster-skin-brightening-55",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "브라이트 진정 밸런스 루틴",
      recommendedFor: [
        "외부 자극으로 예민해진 피부",
        "칙칙함과 피지 밸런스가 동시에 고민인 피부",
        "맑고 균일한 피부 톤과 산뜻한 컨디션을 함께 원하는 피부"
      ]
    },
    {
      title: "55 앰플 + 35 앰플",
      products: [
        "concentrated-booster-skin-brightening-55",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "리바이탈 브라이트닝 루틴",
      recommendedFor: [
        "탄력감이 부족해 보이면서 칙칙한 피부",
        "맑은 피부 톤과 생기 있는 컨디션을 함께 원하는 피부",
        "브라이트닝과 리바이탈라이징 케어를 함께 설계하고 싶은 피부"
      ]
    },
    {
      title: "55 앰플 + 57 크림",
      products: [
        "concentrated-booster-skin-brightening-55",
        "melaway-brightening-cream-57"
      ],
      useCase: "딥 브라이트닝 루틴",
      recommendedFor: [
        "칙칙한 피부 톤이 반복적으로 고민인 피부",
        "앰플과 크림으로 브라이트닝 루틴을 완성하고 싶은 피부",
        "광채감과 보습감을 함께 유지하고 싶은 피부"
      ]
    },
    {
      title: "55 앰플 + 25 앰플",
      products: [
        "concentrated-booster-skin-brightening-55",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "수분 브라이트닝 루틴",
      recommendedFor: [
        "건조로 인해 피부가 칙칙해 보이는 경우",
        "브라이트닝 앰플 사용 시 건조감이 부담스러운 피부",
        "수분감과 맑은 피부 인상을 동시에 원하는 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 55 컨센트레이트 부스터는 어떤 제품인가요?",
      answer:
        "알파-알부틴, 브라이트 올레오액티프, 나이아신아마이드, 아데노신을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 수분감과 광채감을 함께 보조하는 Brightening Line의 55번 브라이트닝 앰플입니다."
    },
    {
      question: "미백 앰플인데 건조하지 않나요?",
      answer:
        "이 제품은 건조하기 쉬운 브라이트닝 케어에 수분감과 광채감을 함께 더하는 방향으로 설계되었습니다. 브라이트 올레오액티프와 보태니컬 성분축이 촉촉한 사용감을 보조합니다."
    },
    {
      question: "알파-알부틴은 어떤 역할을 하나요?",
      answer:
        "알파-알부틴은 브라이트닝 톤 케어의 핵심 성분축으로, 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움을 주는 성분으로 설명할 수 있습니다."
    },
    {
      question: "Bright Oleoactif는 어떤 성분인가요?",
      answer:
        "브라이트 올레오액티프는 유채씨오일, 마시멜로뿌리추출물, 쌀겨추출물, 스페인감초추출물로 구성된 식물 유래 성분축입니다. 피부에 수분감과 생기 있는 광채감을 더하는 보태니컬 브라이트닝 케어로 활용됩니다."
    },
    {
      question: "기미나 잡티가 없어지나요?",
      answer:
        "이 제품은 화장품이며 기미나 잡티를 치료하거나 제거하는 제품이 아닙니다. 색소 고민으로 칙칙해 보이는 피부 톤 인상을 맑고 균일하게 관리하는 데 도움을 주는 브라이트닝 앰플로 사용하는 것이 적절합니다."
    },
    {
      question: "민감한 피부도 사용할 수 있나요?",
      answer:
        "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다. 다만 개인의 피부 상태에 따라 반응은 달라질 수 있으므로 예민한 피부는 적은 양부터 사용해 피부 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "아침에도 사용할 수 있나요?",
      answer:
        "아침 루틴에도 사용할 수 있습니다. 다만 브라이트닝 케어는 자외선 차단과 함께 병행하는 것이 중요하므로, 아침 사용 후에는 선크림을 충분히 발라주는 것을 권장합니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "수분감까지 함께 원할 때는 25 앰플, 진정 밸런스가 필요할 때는 15 앰플, 탄력 컨디션을 함께 보고 싶을 때는 35 앰플, 집중 브라이트닝 루틴을 원할 때는 57 크림과의 조합이 적합합니다."
    }
  ],

  relatedProducts: [
    "sun-cream-50",
    "melaway-brightening-cream-57",
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37"
  ],

  claims: {
    allowed: [
      "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움",
      "피부에 수분감과 생기 있는 광채감을 부여하는 데 도움",
      "건조하기 쉬운 브라이트닝 케어에 촉촉한 사용감 보조",
      "탄력감이 부족해 보이는 피부 컨디션 관리에 도움",
      "Alpha-Arbutin, Bright Oleoactif, Niacinamide, Adenosine 소구",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "브라이트닝·탄력 컨디션·보습 3 in 1 케어 방향"
    ],
    avoid: [
      "기미 치료",
      "잡티 제거",
      "색소침착 치료",
      "즉시 미백",
      "피부 톤 영구 개선",
      "멜라닌 완전 차단",
      "주름 제거",
      "탄력 회복 보장",
      "100% 미백 개선",
      "피부 자극 없음 보장",
      "레이저 시술 대체",
      "의약품 수준 미백"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 리뷰, 원료 소구 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const concentratedBoosterSkinBrightening55SchemaHints = {
  schemaType: "ProductGroup",
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-brightening-55/`,
  productGroupID: "concentrated-booster-skin-brightening-55",
  variesBy: ["https://schema.org/size"],
  variantStrategy: "Use one canonical PDP with 30ml and 100ml variants under ProductGroup.",
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "55 Concentrated Booster for Skin Brightening",
      item: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-brightening-55/`
    }
  ],
  faqPage: {
    useVisibleFaqOnly: true,
    source: "concentratedBoosterSkinBrightening55.faq"
  },
  productJsonLd: {
    useProductGroup: true,
    useVariants: true,
    doNotAddPriceUntilCommerceConnected: true,
    doNotAddAvailabilityUntilCommerceConnected: true,
    brandName: "ERTY",
    category: "Skincare > Ampoule > Brightening Ampoule"
  },
  caution:
    "Do not encode dark-spot removal, melanin blocking, whitening guarantee, wrinkle removal, or fixed clinical outcomes in JSON-LD or visible PDP copy. Keep Bright Oleoactif evidence as brand/ingredient-provided context only."
} as const;

export const concentratedBoosterSkinBrightening55MerchantFeedDraft = {
  itemGroupId: "concentrated-booster-skin-brightening-55",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Ampoule > Brightening Ampoule",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-CBSB55-30ML",
      title: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 30ml",
      description:
        "알파-알부틴, 브라이트 올레오액티프, 나이아신아마이드, 아데노신을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 수분감과 광채감을 함께 보조하는 브라이트닝 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-brightening-55/?variant=30ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-30ml-product.webp`,
      size: "30ml"
    },
    {
      id: "ERTY-CBSB55-100ML",
      title: "에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝 100ml",
      description:
        "알파-알부틴, 브라이트 올레오액티프, 나이아신아마이드, 아데노신을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 수분감과 광채감을 함께 보조하는 브라이트닝 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-brightening-55/?variant=100ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-brightening-55/concentrated-booster-skin-brightening-55-100ml-product.webp`,
      size: "100ml"
    }
  ],
  omittedUntilCommerceConnected: ["price", "sale_price", "availability", "shipping", "return_policy"]
} as const;

export const concentratedBoosterSkinBrightening55CodexHandoff = {
  targetFile: "src/data/products/concentrated-booster-skin-brightening-55.ts",
  route: "/products/concentrated-booster-skin-brightening-55/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-brightening-55/`,
  registerExport: "concentratedBoosterSkinBrightening55",
  tasks: [
    "Move or copy the ProductPdpData export into the target file.",
    "Register concentratedBoosterSkinBrightening55 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 55 컨센트레이트 부스터 포 스킨 브라이트닝.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 30ml and 100ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from concentratedBoosterSkinBrightening55ImageAlt.",
    "Keep whitening, dark-spot, melanin, pigmentation, wrinkle, anti-aging, radiance, clinical, and before-after claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com/products/concentrated-booster-skin-brightening-55/.",
    "No price or availability appears in JSON-LD until commerce data is connected.",
    "30ml and 100ml variants are visible in PDP and ProductGroup JSON-LD.",
    "Alpha-Arbutin claims are framed as brightening tone-care support, not melanin blocking guarantee.",
    "Bright Oleoactif evidence is framed as brand/ingredient-provided context, not guaranteed dark-spot removal.",
    "No visible copy claims kima/jabti/spot treatment, instant whitening, permanent tone improvement, or wrinkle removal.",
    "FAQ content is visible on the page before FAQPage schema is generated.",
    "All important product content is rendered as HTML text, not only inside detail-page images."
  ]
} as const;

export default concentratedBoosterSkinBrightening55;
