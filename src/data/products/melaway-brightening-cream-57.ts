import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 57 Melaway Brightening Cream
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const melawayBrighteningCream57SourceAudit = {
  slug: "melaway-brightening-cream-57",
  productEntity:
    "에르띠 57 멜라웨이 브라이트닝 크림 | 57 Melaway Brightening Cream",
  sourceFiles: [
    {
      fileName: "57 Melaway Brightening Cream.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and canonical naming correction",
        "50ml capacity",
        "usage method",
        "MELAWAY positioning",
        "Niacinamide 5% and Adenosine positioning",
        "Centella Asiatica PDRN positioning",
        "Phyto-Amino Acid Complex positioning",
        "dual-function brightening and wrinkle-care positioning",
        "three-tone clinical-data context: dull tone, redness, yellow tone",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product numbering system",
        "Brightening line structure",
        "57 Melaway Brightening Cream line position",
        "50ml configuration",
        "MELAWAY patented-ingredient context",
        "Niacinamide, Star Anise Extract, and Scutellaria Baicalensis Root Extract context",
        "recommended skin type: dull skin, sensitive skin, and dark-looking complexion",
        "light and silky texture positioning",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "57Cream(50ml)_1.jpg",
      sourceType: "detail-page-and-product-image",
      usedFor: [
        "visual hierarchy",
        "image alt mapping",
        "consumer-facing phrase extraction",
        "Melaway cream positioning",
        "melanin and tone-balance narrative",
        "texture and usage context",
        "recommendation and disclaimer context",
        "cosmetic-safe translation of whitening, melanin, tone, wrinkle, and radiance claims"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 57 멜라웨이 브라이트닝 크림 / 57 Melaway Brightening Cream으로 공개 PDP에서 정규화한다.",
    "기술 소개서 1페이지의 괄호 표기에는 ERTY 37 MELAWAY BRIGHTENING CREAM으로 보이는 오기 가능성이 있으나, 공개 PDP 엔터티는 57 Melaway Brightening Cream으로 고정한다.",
    "Brightening Line의 57번 크림 제품이다.",
    "용량은 50ml 단일 구성으로 제시되어 있다.",
    "사용법은 피부결을 따라 얼굴 전체에 부드럽게 펴 바른 다음 가볍게 두드리며 흡수시키는 방식이다.",
    "기술 소개서 기준 핵심 성분축은 MELAWAY, Niacinamide 5%, Adenosine, Centella Asiatica PDRN, Phyto-Amino Acid Complex이다.",
    "MELAWAY는 알바수련꽃물, 레몬머틀잎, 사과추출물 복합 원료로 설명된다.",
    "전제품 소개서 기준 주요 성분에는 나이아신아마이드, 스타아니스추출물, 황금추출물이 포함된다.",
    "전제품 소개서 기준 추천 피부 타입은 칙칙한 피부, 예민한 피부, 어두운 안색이다.",
    "기술 소개서 기준 미백·주름개선 이중기능성 포지션이 제시되어 있다.",
    "기술 소개서 기준 4주 사용 후 칙칙한 톤, 붉은기, 노란기 관련 브랜드 제공 임상 데이터가 제시되어 있다.",
    "가격과 재고는 제공되지 않았다."
  ],
  unresolvedOrControlledFacts: [
    "기술 소개서 내 37 표기는 57 제품과 충돌하므로 공개 PDP, slug, schema, merchant feed에는 사용하지 않는다.",
    "칙칙한 톤 175%, 붉은기 157%, 노란기 199% 수치는 브랜드 제공 자료 기준 evidence로만 사용하고 보장형 결과로 쓰지 않는다.",
    "미백·주름개선 표현은 기능성 화장품 문맥으로 제한하고, 기미·잡티·색소침착 치료 표현으로 확장하지 않는다.",
    "MELAWAY의 멜라닌 억제·환원 표현은 성분 소구로 활용하되 제품 단독 효과 보장으로 쓰지 않는다.",
    "Centella Asiatica PDRN의 재생·회복 표현은 피부 컨디션 케어 및 보습·진정 보조 문맥으로 조정한다.",
    "사용자 리뷰와 상세페이지 내 체감 표현은 보조 맥락으로만 활용하고 제품 보장 claim으로 전환하지 않는다.",
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다."
  ]
} as const;

export const melawayBrighteningCream57ImageAlt = [
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-50ml-detail.jpg",
    alt: "에르띠 57 멜라웨이 브라이트닝 크림 50ml 상세페이지 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-50ml-product.jpg",
    alt: "에르띠 57 멜라웨이 브라이트닝 크림 50ml 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-melaway-ingredient.jpg",
    alt: "MELAWAY 멜라닌 타겟팅 성분을 설명하는 에르띠 57 브라이트닝 크림 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-tone-data.jpg",
    alt: "칙칙한 톤 붉은기 노란기 피부 톤 데이터를 설명하는 에르띠 57 멜라웨이 크림 이미지",
    role: "evidence-detail-image"
  },
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-usage.jpg",
    alt: "에르띠 57 멜라웨이 브라이트닝 크림 사용법과 추천 피부 타입 안내 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const melawayBrighteningCream57ClaimRiskClassification = {
  safeClaims: [
    "50ml 브라이트닝 크림",
    "Brightening Line 57번 크림",
    "MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN, 식물성 아미노산 복합체 소구",
    "미백·주름개선 이중기능성 크림 포지션",
    "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움",
    "건조하고 지쳐 보이는 피부에 촉촉한 영양감을 부여하는 데 도움",
    "가볍고 실키한 텍스처와 자연스러운 광채 마무리",
    "전제품 소개서 기준 추천 피부 타입: 칙칙한 피부, 예민한 피부, 어두운 안색",
    "브랜드 제공 자료 기준 4주 사용 후 피부 톤 관련 데이터 보유"
  ],
  adjustedClaims: [
    {
      original: "기미, 색소침착 완화와 피부톤 균일화",
      adjusted: "색소 고민으로 칙칙해 보이는 피부 톤을 균일하게 가꾸는 데 도움"
    },
    {
      original: "멜라닌 억제 및 멜라닌 환원",
      adjusted: "멜라닌 케어 성분축으로 칙칙해 보이는 피부 톤 인상을 관리하는 데 도움"
    },
    {
      original: "3중 피부톤 개선 임상 완료",
      adjusted: "브랜드 제공 자료 기준 칙칙한 톤, 붉은기, 노란기 관련 평가 데이터 보유"
    },
    {
      original: "즉각적인 브라이트닝 효과",
      adjusted: "피부를 맑고 화사해 보이는 인상으로 가꾸는 데 도움"
    },
    {
      original: "피부 조직 재생 활성화, 손상 세포 자가 회복 촉진",
      adjusted: "식물 유래 PDRN 성분축으로 예민해진 피부 컨디션을 편안하게 보조"
    },
    {
      original: "피부 보습, 미백, 탄력, 주름 방지",
      adjusted: "보습감, 톤 케어, 탄력감이 부족해 보이는 피부 컨디션 관리에 도움"
    },
    {
      original: "피부과 노화되면서 탄력을 잃고 피부색이 어두워지는 것을 방지",
      adjusted: "외부 환경과 건조로 지쳐 보이는 피부를 생기 있고 균일한 인상으로 가꾸는 데 도움"
    }
  ],
  prohibitedClaims: [
    "기미 치료",
    "잡티 제거",
    "색소침착 치료",
    "다크스팟 완전 제거",
    "멜라닌 완전 차단",
    "멜라닌 환원 보장",
    "즉시 미백",
    "100% 미백 개선",
    "피부 톤 영구 개선",
    "주름 제거",
    "탄력 회복 보장",
    "피부 재생 치료",
    "손상 세포 회복",
    "피부과 시술 대체",
    "레이저 시술 대체",
    "모든 피부에 무조건 무자극",
    "피부 자극 없음 보장",
    "의약품 수준 미백",
    "과색소침착 치료"
  ]
} as const;

export const melawayBrighteningCream57: ProductPdpData = {
  slug: "melaway-brightening-cream-57",

  identity: {
    productNumber: "57",
    line: "Brightening",
    lineKo: "브라이트닝",
    nameKo: "에르띠 57 멜라웨이 브라이트닝 크림",
    nameEn: "57 Melaway Brightening Cream",
    canonicalName:
      "에르띠 57 멜라웨이 브라이트닝 크림 | 57 Melaway Brightening Cream",
    category: "Melanin-Care Brightening Cream",
    routineStep: "Cream Step",
    shortDefinition:
      "MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN을 중심으로 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 보습·영양·탄력 컨디션을 함께 보조하는 Brightening Line 57번 미백·주름개선 이중기능성 크림입니다."
  },

  variants: [
    {
      sku: "ERTY-MBC57-50",
      volume: "50ml",
      image: "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-50ml-product.jpg"
    }
  ],

  seo: {
    title:
      "에르띠 57 멜라웨이 브라이트닝 크림 | MELAWAY 나이아신아마이드 5% 톤 케어 크림",
    description:
      "에르띠 57 멜라웨이 브라이트닝 크림은 MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN을 결합한 50ml 브라이트닝 크림입니다. 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 보습·영양·탄력 컨디션을 함께 보조하는 Brightening Line 57번 크림.",
    keywords: [
      "에르띠 57",
      "에르띠 멜라웨이 브라이트닝 크림",
      "57 Melaway Brightening Cream",
      "멜라웨이 크림",
      "MELAWAY cream",
      "나이아신아마이드 5% 크림",
      "미백 주름개선 이중기능성 크림",
      "브라이트닝 크림",
      "피부톤 크림",
      "칙칙한 피부톤 크림",
      "어두운 안색 크림",
      "광채 크림",
      "톤업 크림",
      "센텔라 PDRN 크림",
      "식물성 아미노산 크림",
      "에스테틱 브라이트닝 크림"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/melaway-brightening-cream-57/`,
    ogImage:
      "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-og.jpg"
  },

  hero: {
    eyebrow: "Brightening Line · No.57 Melaway Cream",
    headline: "칙칙한 피부 톤에, 밀도 있는 광채를 남기는 멜라웨이 크림",
    subheadline:
      "MELAWAY와 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN을 결합한 미백·주름개선 이중기능성 브라이트닝 크림",
    benefitChips: [
      "MELAWAY",
      "Niacinamide 5%",
      "Adenosine",
      "Centella Asiatica PDRN",
      "Phyto-Amino Acid Complex",
      "50ml"
    ],
    primaryImage:
      "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-50ml-product.jpg"
  },

  aiSummary: {
    oneSentence:
      "에르띠 57 멜라웨이 브라이트닝 크림은 MELAWAY와 나이아신아마이드 5%, 아데노신을 중심으로 칙칙해 보이는 피부 톤과 탄력 컨디션을 함께 관리하는 브라이트닝 크림입니다.",
    paragraph:
      "에르띠 57 멜라웨이 브라이트닝 크림은 Brightening Line의 57번 크림으로, MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN, 식물성 아미노산 복합체를 결합해 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸고 보습·영양·탄력 컨디션을 함께 보조하도록 설계된 50ml 브라이트닝 크림입니다. 브랜드 자료 기준 미백·주름개선 이중기능성 포지션과 4주 사용 후 피부 톤 관련 평가 데이터가 제시되어 있으나, 개인의 피부 상태에 따라 결과는 달라질 수 있습니다.",
    keyFacts: [
      "Brightening Line 57번 크림",
      "50ml 단일 용량",
      "MELAWAY 기반 멜라닌 톤 케어 성분축",
      "나이아신아마이드 5%와 아데노신 배합",
      "센텔라 아시아티카 PDRN과 식물성 아미노산 복합체 배합",
      "미백·주름개선 이중기능성 포지션",
      "가볍고 실키한 텍스처와 자연스러운 광채 마무리",
      "브랜드 제공 자료 기준 4주 사용 후 칙칙한 톤·붉은기·노란기 관련 평가 데이터 보유"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "피부 톤이 칙칙하고 생기 없어 보이는 피부",
      "붉은기와 노란기가 섞여 피부 톤이 균일하지 않아 보이는 피부",
      "건조와 피로감으로 피부 광채가 떨어져 보이는 피부",
      "브라이트닝 케어와 보습 영양감을 동시에 원하는 피부",
      "미백·주름개선 기능성 크림을 데일리 루틴에 넣고 싶은 피부",
      "자외선 노출 후 거칠고 어두워 보이는 피부 컨디션"
    ],
    productApproach: [
      "MELAWAY 성분축으로 칙칙해 보이는 피부 톤 인상을 맑고 균일하게 관리합니다.",
      "나이아신아마이드 5%와 아데노신을 중심으로 브라이트닝과 탄력 컨디션을 함께 보조합니다.",
      "센텔라 아시아티카 PDRN과 식물성 아미노산 복합체가 예민해진 피부에 보습·영양감을 더합니다.",
      "가볍고 실키한 크림 제형이 피부에 부드럽게 밀착되어 자연스러운 광채 마무리를 돕습니다."
    ]
  },

  formula: {
    thesis:
      "57 멜라웨이 브라이트닝 크림은 멜라닌 톤 케어 성분축과 미백·주름개선 기능성 성분축, 식물 유래 PDRN·아미노산 보습축을 결합해 칙칙해 보이는 피부 톤을 균일하게 가꾸면서 보습·영양·탄력 컨디션을 함께 보조하는 브라이트닝 크림입니다.",
    axes: [
      {
        title: "Melanin Tone-Balance Axis",
        role: "칙칙해 보이는 피부 톤 인상 케어",
        ingredients: ["MELAWAY", "Niacinamide 5%"],
        explanation:
          "MELAWAY와 나이아신아마이드 5%를 중심으로 칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움을 줍니다."
      },
      {
        title: "Dual-Functional Care Axis",
        role: "브라이트닝과 탄력 컨디션 보조",
        ingredients: ["Niacinamide 5%", "Adenosine"],
        explanation:
          "나이아신아마이드와 아데노신을 결합해 미백·주름개선 이중기능성 크림의 핵심 기능성 성분축을 구성합니다."
      },
      {
        title: "Skin-Condition Comfort Axis",
        role: "예민해진 피부 컨디션 보조",
        ingredients: ["Centella Asiatica PDRN", "Scutellaria Baicalensis Root Extract"],
        explanation:
          "센텔라 아시아티카 PDRN과 황금추출물 성분축이 외부 환경으로 예민해진 피부를 편안하게 유지하도록 보조합니다."
      },
      {
        title: "Nourishing Moisture Axis",
        role: "보습감과 영양감 부여",
        ingredients: ["Phyto-Amino Acid Complex", "Star Anise Extract"],
        explanation:
          "식물성 아미노산 복합체와 스타아니스추출물이 건조하고 지쳐 보이는 피부에 촉촉한 영양감과 부드러운 사용감을 더합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "멜라웨이",
      nameEn: "MELAWAY",
      inci:
        "Nymphaea Alba Flower Water / Lemon Myrtle Leaf Extract / Apple Fruit Extract Complex",
      role: "멜라닌 톤 케어 성분축",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙한 피부 톤", "어두운 안색", "피부 톤 불균형", "광채 부족"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      concentration: "5%",
      role: "브라이트닝 기능성 성분축",
      consumerBenefit:
        "피부를 맑고 균일한 톤으로 가꾸고 칙칙해 보이는 피부 인상을 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["피부 톤", "칙칙함", "광채 부족", "브라이트닝 케어"]
    },
    {
      nameKo: "아데노신",
      nameEn: "Adenosine",
      inci: "Adenosine",
      role: "탄력 컨디션 보조 성분",
      consumerBenefit:
        "탄력감이 부족해 보이는 피부 컨디션을 매끄럽고 건강한 인상으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["탄력 저하", "주름 고민", "피부 피로감", "안티에이징 루틴"]
    },
    {
      nameKo: "센텔라 아시아티카 PDRN",
      nameEn: "Centella Asiatica PDRN",
      role: "식물 유래 PDRN 컨디셔닝 성분축",
      consumerBenefit:
        "외부 환경으로 예민해진 피부 컨디션을 편안하게 보조하고 보습·영양 루틴을 강화합니다.",
      relatedConcerns: ["예민한 피부", "건조", "피부 컨디션 저하", "장벽 컨디션"]
    },
    {
      nameKo: "식물성 아미노산 복합체",
      nameEn: "Phyto-Amino Acid Complex",
      role: "보습과 영양감 보조",
      consumerBenefit:
        "건조하고 지쳐 보이는 피부에 촉촉한 영양감을 부여하고 부드러운 피부결 인상을 돕습니다.",
      relatedConcerns: ["건조", "영양 부족", "푸석한 피부", "피부결"]
    },
    {
      nameKo: "스타아니스추출물",
      nameEn: "Star Anise Extract",
      inci: "Illicium Verum Fruit Extract",
      role: "피부 보호와 진정 컨디션 보조",
      consumerBenefit:
        "외부 환경으로 지친 피부를 편안하게 유지하고 브라이트닝 루틴의 사용감을 보조합니다.",
      relatedConcerns: ["예민함", "외부 자극", "피부 보호", "피부 컨디션"]
    },
    {
      nameKo: "황금추출물",
      nameEn: "Scutellaria Baicalensis Root Extract",
      inci: "Scutellaria Baicalensis Root Extract",
      role: "피부 진정 컨디션 보조",
      consumerBenefit:
        "예민해지기 쉬운 피부를 편안하게 유지하고 건강해 보이는 피부 인상을 돕습니다.",
      relatedConcerns: ["예민 피부", "붉어짐", "피부 컨디션", "외부 환경 스트레스"]
    }
  ],

  texture: {
    type: "가볍고 실키한 영양 크림",
    finish: "자연스럽고 건강한 광채 마무리",
    absorption: "피부결을 따라 부드럽게 펴 바른 뒤 두드려 흡수",
    sensoryCopy:
      "무겁게 막을 씌우는 크림보다, 피부에 부드럽게 밀착되며 촉촉한 영양감과 은은한 광채감을 남기는 브라이트닝 크림 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "브랜드 제공 4주 사용 후 피부 톤 평가 데이터",
      summary:
        "기술 소개서에는 4주 사용 후 칙칙한 톤, 붉은기, 노란기 관련 평가 데이터가 제시되어 있습니다. 해당 수치는 브랜드 제공 자료 기준이며, 개인의 피부 상태와 사용 환경에 따라 결과는 달라질 수 있습니다.",
      metric: "Dull tone 175% / Redness 157% / Yellow tone 199% — brand-provided data",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 결과 보장 표현으로 사용하지 않는다.",
      image:
        "/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-tone-data.jpg"
    },
    {
      type: "ingredient",
      title: "MELAWAY와 나이아신아마이드 5% 브라이트닝 성분축",
      summary:
        "MELAWAY, 나이아신아마이드 5%, 아데노신이 칙칙해 보이는 피부 톤과 탄력 컨디션을 함께 관리하는 포뮬러 축으로 제시되어 있습니다.",
      sourceNote: "제품 기술 소개서 및 ERTY KOREA Product Guide 기준"
    },
    {
      type: "brandData",
      title: "Brightening Line 57번 멜라닌 케어 크림",
      summary:
        "전제품 소개서에서 57 멜라웨이 브라이트닝 크림은 칙칙한 피부, 예민한 피부, 어두운 안색을 위한 브라이트닝 크림으로 소개됩니다.",
      sourceNote: "ERTY KOREA Product Guide 기준"
    }
  ],

  howToUse: {
    steps: [
      "스킨케어 크림 단계에서 적당량을 덜어냅니다.",
      "피부결을 따라 얼굴 전체에 부드럽게 펴 바릅니다.",
      "건조하거나 칙칙해 보이는 부위에는 한 번 더 얇게 레이어링합니다.",
      "손바닥으로 가볍게 눌러 흡수시킵니다.",
      "아침 루틴에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하십시오."
    ],
    frequency:
      "피부 상태에 따라 아침과 저녁 루틴에 사용할 수 있습니다. 예민한 피부는 소량부터 시작해 사용량과 빈도를 조절하십시오.",
    cautions: [
      "미백·주름개선 기능성 성분이 포함되어 있으므로 피부 상태에 따라 사용량을 조절하십시오.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "자외선 노출이 많은 낮 시간에는 선크림을 함께 사용하는 것이 좋습니다.",
      "눈가와 입가 등 예민한 부위는 소량으로 사용하십시오."
    ]
  },

  routines: [
    {
      title: "57 크림 + 25 앰플",
      products: [
        "melaway-brightening-cream-57",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "수분 광채 밀도 루틴",
      recommendedFor: [
        "속건조로 인해 피부가 칙칙해 보이는 피부",
        "메이크업이 뜨는 피부",
        "가벼운 영양과 수분감이 필요한 피부"
      ]
    },
    {
      title: "57 크림 + 55 앰플",
      products: [
        "melaway-brightening-cream-57",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "브라이트닝 집중 톤업 루틴",
      recommendedFor: [
        "칙칙한 피부 톤이 고민인 피부",
        "잡티와 색소 고민 초기 단계의 피부",
        "여름 시즌 브라이트닝 집중 관리가 필요한 피부"
      ]
    },
    {
      title: "57 크림 + 37 크림",
      products: [
        "melaway-brightening-cream-57",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "미백 영양 & 장벽 컨디션 듀얼 루틴",
      recommendedFor: [
        "계절 변화로 피부가 예민해진 시기",
        "장벽 컨디션이 약해 톤이 쉽게 칙칙해 보이는 피부",
        "브라이트닝과 보습 장벽 루틴을 함께 설계하고 싶은 피부"
      ]
    },
    {
      title: "57 크림 + 35 앰플",
      products: [
        "melaway-brightening-cream-57",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "톤 밸런스 & 리바이탈라이징 루틴",
      recommendedFor: [
        "자외선 노출 후 피부가 거칠고 칙칙해 보이는 경우",
        "피부가 얇아지고 힘이 떨어진 듯한 느낌이 드는 경우",
        "밝기와 탄력 컨디션을 함께 관리하고 싶은 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 57 멜라웨이 브라이트닝 크림은 어떤 제품인가요?",
      answer:
        "MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN, 식물성 아미노산 복합체를 중심으로 칙칙해 보이는 피부 톤과 보습·영양·탄력 컨디션을 함께 관리하는 Brightening Line 57번 크림입니다."
    },
    {
      question: "나이아신아마이드 5%는 어떤 역할을 하나요?",
      answer:
        "나이아신아마이드 5%는 칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 브라이트닝 성분축으로 설계되어 있습니다. PDP에서는 기능성 화장품 문맥 안에서 톤 케어 성분으로 설명합니다."
    },
    {
      question: "MELAWAY는 어떤 성분인가요?",
      answer:
        "MELAWAY는 제품 자료 기준 알바수련꽃물, 레몬머틀잎, 사과추출물을 복합으로 함유한 멜라닌 톤 케어 성분축입니다. 칙칙해 보이는 피부 톤을 균일하고 화사한 인상으로 가꾸는 데 도움을 주는 방향으로 설명할 수 있습니다."
    },
    {
      question: "기미나 색소침착에 사용할 수 있나요?",
      answer:
        "이 제품은 화장품이므로 기미나 색소침착을 치료하는 제품은 아닙니다. 다만 색소 고민으로 칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 브라이트닝 루틴에 사용할 수 있습니다."
    },
    {
      question: "55 브라이트닝 앰플과 함께 써도 되나요?",
      answer:
        "함께 사용할 수 있습니다. 55 앰플은 브라이트닝 집중 앰플, 57 크림은 브라이트닝과 보습·영양감을 마무리하는 크림 단계로 설계하면 좋습니다. 예민 피부는 사용량과 빈도를 조절하십시오."
    },
    {
      question: "아침에도 사용할 수 있나요?",
      answer:
        "아침 루틴에도 사용할 수 있습니다. 다만 브라이트닝 루틴은 자외선 차단과 함께 설계하는 것이 중요하므로, 낮에 사용할 때는 마지막 단계에서 선크림을 충분히 바르는 것을 권장합니다."
    },
    {
      question: "어떤 피부 타입에 추천하나요?",
      answer:
        "전제품 소개서 기준 칙칙한 피부, 예민한 피부, 어두운 안색이 추천 피부 타입으로 제시됩니다. 특히 피부 톤이 균일하지 않아 보이거나 건조로 인해 광채가 부족해 보이는 피부에 적합합니다."
    },
    {
      question: "임상 수치가 모든 사용자에게 동일하게 적용되나요?",
      answer:
        "아닙니다. 기술 소개서에 제시된 피부 톤 관련 수치는 브랜드 제공 자료 기준이며, 개인의 피부 상태와 사용 환경에 따라 결과는 달라질 수 있습니다. PDP에서는 보조 근거로만 사용해야 합니다."
    }
  ],

  relatedProducts: [
    "concentrated-booster-skin-brightening-55",
    "concentrated-booster-skin-hydrating-25",
    "intensive-cellular-er-cream-37",
    "concentrated-booster-skin-revitalizing-35",
    "sun-cream-50"
  ],

  claims: {
    allowed: [
      "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움",
      "브라이트닝 톤 케어에 도움",
      "피부에 촉촉한 영양감과 광채감을 부여하는 데 도움",
      "탄력감이 부족해 보이는 피부 컨디션 관리에 도움",
      "나이아신아마이드 5%와 아데노신 배합",
      "MELAWAY 기반 멜라닌 톤 케어 성분축",
      "미백·주름개선 이중기능성 크림 포지션",
      "브랜드 제공 자료 기준 4주 사용 후 피부 톤 평가 데이터 보유"
    ],
    avoid: [
      "기미 치료",
      "잡티 제거",
      "색소침착 치료",
      "다크스팟 완전 제거",
      "멜라닌 완전 차단",
      "즉시 미백",
      "100% 미백 개선",
      "피부 톤 영구 개선",
      "주름 제거",
      "피부 재생 치료",
      "손상 세포 회복",
      "레이저 시술 대체",
      "피부과 시술 대체",
      "무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 브랜드 제공 평가 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const melawayBrighteningCream57SchemaHints = {
  canonicalDomain: SEO_GEO_BASE_URL,
  pagePath: "/products/melaway-brightening-cream-57/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/melaway-brightening-cream-57/`,
  preferredSchemaType: "Product",
  productGroupStrategy:
    "Single 50ml SKU. Render as Product with one Offer placeholder; ProductGroup may be used only if the engine requires variants array compatibility.",
  productGroupID: "melaway-brightening-cream-57",
  variesBy: ["https://schema.org/size"],
  variantStrategy: {
    type: "single-sku",
    variants: ["50ml"],
    note:
      "Do not create additional size variants unless commerce data confirms them."
  },
  jsonLdRequired: [
    "Product",
    "Offer",
    "BreadcrumbList",
    "FAQPage",
    "Organization",
    "WebPage"
  ],
  jsonLdControls: [
    "Do not hardcode price or availability until commerce data is connected.",
    "Use https://ertyofficial.com for @id, url, BreadcrumbList item, and Offer url.",
    "Do not encode clinical percentages as guaranteed outcomes.",
    "Do not use www.ertykorea.com as canonical."
  ]
} as const;

export const melawayBrighteningCream57MerchantFeedDraft = {
  itemGroupId: "melaway-brightening-cream-57",
  products: [
    {
      id: "ERTY-MBC57-50",
      title: "에르띠 57 멜라웨이 브라이트닝 크림 50ml",
      description:
        "MELAWAY, 나이아신아마이드 5%, 아데노신, 센텔라 아시아티카 PDRN을 결합한 Brightening Line 57번 브라이트닝 크림. 칙칙해 보이는 피부 톤과 보습·영양·탄력 컨디션을 함께 관리합니다.",
      link: `${SEO_GEO_BASE_URL}/products/melaway-brightening-cream-57/?variant=50ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/melaway-brightening-cream-57/melaway-brightening-cream-57-50ml-product.jpg`,
      brand: "ERTY",
      condition: "new",
      productType: "Cosmetics > Skincare > Face Cream > Brightening Cream",
      googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care > Lotion & Moisturizer",
      size: "50ml",
      availability: undefined,
      price: undefined,
      currency: "KRW"
    }
  ],
  feedControls: [
    "Do not publish merchant feed rows until price, availability, shipping, and return policy are connected.",
    "Keep title and description consistent with PDP canonical product entity.",
    "Avoid medicalized claims such as pigmentation treatment, melasma treatment, or wrinkle removal."
  ]
} as const;

export const melawayBrighteningCream57CodexHandoff = {
  targetFile: "src/data/products/melaway-brightening-cream-57.ts",
  route: "/products/melaway-brightening-cream-57/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/melaway-brightening-cream-57/`,
  exportName: "melawayBrighteningCream57",
  registration: {
    indexFile: "src/data/products/index.ts",
    expectedRegistrationKey: "melaway-brightening-cream-57"
  },
  tasks: [
    "Copy or move this bundle into the product data layer.",
    "Register melawayBrighteningCream57 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 57 멜라웨이 브라이트닝 크림.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 50ml as a single SKU.",
    "Do not create additional variants unless commerce data confirms them.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate Product/Offer JSON-LD from the 50ml SKU without hardcoded price.",
    "Use image alt mapping from melawayBrighteningCream57ImageAlt.",
    "Keep whitening, melanin, dark-spot, pigmentation, wrinkle, PDRN, regeneration, tone, redness, yellow-tone, clinical, and before-after claims cosmetic-safe.",
    "Do not encode clinical percentages as guaranteed fixed outcomes.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "H1 exists and matches canonicalName Korean primary entity.",
    "Canonical URL uses https://ertyofficial.com/products/melaway-brightening-cream-57/.",
    "No www.ertykorea.com URL remains in metadata, schema, sitemap, or merchant draft.",
    "50ml is rendered as the only size unless commerce data confirms otherwise.",
    "The technical PDF typo 'ERTY 37 MELAWAY BRIGHTENING CREAM' is not rendered as public entity text.",
    "Clinical percentages are presented only as brand-provided evidence with disclaimer.",
    "FAQ text is visible in page HTML and matches FAQPage schema.",
    "All important product facts are rendered as server-side HTML text, not only inside long detail images.",
    "Images are supplementary visual assets with descriptive alt text.",
    "ClaimDisclaimer appears near the bottom of the PDP."
  ]
} as const;

export default melawayBrighteningCream57;
