import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 35 Concentrated Booster for Skin Revitalizing
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const concentratedBoosterSkinRevitalizing35SourceAudit = {
  slug: "concentrated-booster-skin-revitalizing-35",
  productEntity:
    "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 | 35 Concentrated Booster for Skin Revitalizing",
  sourceFiles: [
    {
      fileName: "35 Concentraed Booster for Skin Hydrating.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product-name correction and canonical naming",
        "capacity 30ml / 100ml",
        "Revitalizing line ampoule positioning",
        "Pseudoalteromonas Ferment Extract positioning",
        "Marine repair and skin-conditioning positioning",
        "9 Peptide Complex positioning",
        "Adenosine positioning",
        "5 Ceramide Complex positioning",
        "Ceracare AC-1, phytosphingosine, and cholesterol barrier-lipid axis",
        "Niacinamide and dual-functional whitening/wrinkle context",
        "irritation index 0.00",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product-numbering system",
        "Revitalizing line structure",
        "35 Concentrated Booster line position",
        "30ml / 100ml configuration",
        "Pseudoalteromonas Ferment Extract and Ceracare AC-1 patent ingredient context",
        "9 peptide, adenosine, and niacinamide core ingredient context",
        "recommended skin types: wrinkled, aging, sensitive, soothing/revitalizing-care needs",
        "before-after disclaimer language",
        "related Revitalizing line product context"
      ]
    },
    {
      fileName: "35(30ml)_*.jpg / 35(100ml)_*.jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "Revitalizing booster narrative",
        "elasticity, moisture, skin barrier, and tone-care narrative",
        "real-review detail-page narrative",
        "routine suggestion context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 / 35 Concentrated Booster for Skin Revitalizing으로 공개 PDP에서 정규화한다.",
    "기술 소개서 파일명과 일부 본문에는 Concentraed 오탈자와 Hydrating 파일명 혼재가 있으나, 제품 본문은 Skin Revitalizing으로 확인되므로 공개 PDP 엔터티는 Revitalizing으로 정규화한다.",
    "Revitalizing Line의 35번 앰플 제품이다.",
    "용량은 30ml와 100ml 두 가지 구성이 제시되어 있다.",
    "제품은 피부 탄력, 주름개선, 미백, 피부 보습, 컨디션 케어, 장벽 컨디션을 주요 방향으로 제시한다.",
    "기술 소개서 기준 주요 성분축은 슈도알테로모나스발효추출물, 9종 펩타이드 콤플렉스, 아데노신, 5가지 복합 세라마이드, 세라케어 AC-1, 피토스핑고신, 콜레스테롤, 나이아신아마이드이다.",
    "전제품 소개서 기준 특허성분은 슈도알테로모나스발효추출물과 Ceracare AC-1로 제시된다.",
    "전제품 소개서 기준 주요성분은 9종 펩타이드, 아데노신, 나이아신아마이드로 제시된다.",
    "전제품 소개서 기준 추천 피부 타입은 주름진 피부, 노화 피부, 예민한 피부, 진정 및 재생이 필요한 피부이다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "브랜드 제공 자료에는 제품 사용에 따른 반응 예시와 사내 자체 임상 후기가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "기술 소개서에는 미백·주름개선 이중 기능성 문맥이 있으나, 공개 PDP에서는 피부 톤 컨디션과 탄력 컨디션 케어 중심으로 설명하고 기능성 고시 문구는 별도 인증 범위가 확인된 경우에만 강화한다.",
    "'피부 재생', '재생력', '장벽 강화', '주름 개선' 표현은 강한 의학적·기능성 오인 가능성이 있어 '피부 컨디션', '탄력감', '장벽 컨디션', '맑고 생기 있는 피부 인상' 중심으로 조정한다.",
    "기술 소개서 page 3에 Oligo-HA 문장이 포함되어 있으나 35번 제품의 핵심 성분 구조와 충돌 가능성이 있으므로 공개 PDP 핵심 성분에는 넣지 않고, 수분감 보조 문맥으로만 제한한다.",
    "기술 소개서 추천 루틴의 '35앰플 + 35앰플 재생 보습 리커버리 루틴'은 상세페이지의 '35앰플 + 25앰플' 루틴과 충돌하므로, 공개 PDP에서는 수분 리커버리 조합을 35+25로 정리하고 원자료 충돌 사항으로 관리한다.",
    "사내 자체 임상, B&A, 리뷰 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const concentratedBoosterSkinRevitalizing35ImageAlt = [
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-product.webp",
    alt: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 30ml 안티에이징 앰플 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-detail-1.jpg",
    alt: "슈도알테로모나스발효추출물과 세라케어 AC-1을 설명하는 에르띠 35 리바이탈라이징 앰플 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-detail-2.jpg",
    alt: "피부 탄력과 장벽 컨디션 케어를 설명하는 에르띠 35 컨센트레이트 부스터 30ml 상세 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-100ml-product.webp",
    alt: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 100ml 인트로 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-100ml-detail-1.jpg",
    alt: "쫀쫀한 탄력 케어 앰플 에르띠 35 컨센트레이트 부스터 100ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-100ml-detail-2.jpg",
    alt: "에르띠 35 컨센트레이트 부스터 사용 후기와 리바이탈라이징 루틴 추천 상세 이미지",
    role: "review-and-routine-detail-image"
  },
  {
    src: "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const concentratedBoosterSkinRevitalizing35ClaimRiskClassification = {
  safeClaims: [
    "30ml / 100ml 앰플",
    "Revitalizing Line 35번 앰플",
    "피부 탄력감과 장벽 컨디션이 고민인 피부를 위한 리바이탈라이징 앰플",
    "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드 소구",
    "건조하고 지쳐 보이는 피부에 촉촉한 보습감과 영양감을 부여하는 데 도움",
    "탄력감이 부족해 보이는 피부 컨디션을 매끄럽게 관리하는 데 도움",
    "장벽 컨디션을 보조해 편안한 피부 상태 유지에 도움",
    "칙칙해 보이는 피부 톤을 맑고 생기 있게 가꾸는 데 도움",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "피부 재생력을 키워 피부 속부터 튼튼하게",
      adjusted: "지쳐 보이는 피부 컨디션을 편안하게 관리하고 탄탄한 피부 인상을 가꾸는 데 도움"
    },
    {
      original: "빙하가 선물한 재생 앰플",
      adjusted: "극한 환경 유래 발효 성분축을 담은 리바이탈라이징 앰플"
    },
    {
      original: "강한 재생력",
      adjusted: "피부 컨디션 케어에 도움을 주는 발효 유래 성분축"
    },
    {
      original: "피부 장벽 강화",
      adjusted: "피부 장벽 컨디션 케어에 도움"
    },
    {
      original: "주름 개선",
      adjusted: "탄력감이 부족해 보이는 피부와 주름이 신경 쓰이는 피부 컨디션 케어"
    },
    {
      original: "미백에 도움",
      adjusted: "칙칙해 보이는 피부 톤을 맑고 균일하게 가꾸는 데 도움"
    },
    {
      original: "외부 자극으로 예민해진 피부를 빠르게 진정",
      adjusted: "외부 환경으로 예민해진 피부를 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 깊이 수분 공급",
      adjusted: "피부에 촉촉한 수분감을 부여하고 보습감을 유지하는 데 도움"
    }
  ],
  prohibitedClaims: [
    "피부 재생 치료",
    "장벽 손상 치료",
    "주름 제거",
    "미백 보장",
    "색소침착 치료",
    "노화 치료",
    "탄력 회복 보장",
    "피부 속 진피층 재생",
    "염증 치료",
    "손상 피부 회복 치료",
    "100% 개선",
    "즉각적인 주름 개선 보장",
    "모든 피부에 무조건 무자극"
  ]
} as const;

export const concentratedBoosterSkinRevitalizing35: ProductPdpData = {
  slug: "concentrated-booster-skin-revitalizing-35",

  identity: {
    productNumber: "35",
    line: "Revitalizing",
    lineKo: "리바이탈라이징",
    nameKo: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징",
    nameEn: "35 Concentrated Booster for Skin Revitalizing",
    canonicalName:
      "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 | 35 Concentrated Booster for Skin Revitalizing",
    category: "Revitalizing Anti-Aging Ampoule",
    routineStep: "Ampoule Step",
    shortDefinition:
      "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 중심으로 지쳐 보이는 피부에 보습감과 탄력 컨디션을 부여하고 장벽 컨디션과 피부 톤 인상을 함께 관리하는 Revitalizing Line 35번 앰플입니다."
  },

  variants: [
    {
      sku: "ERTY-CBSR35-30ML",
      volume: "30ml",
      image:
        "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-product.webp"
    },
    {
      sku: "ERTY-CBSR35-100ML",
      volume: "100ml",
      image:
        "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-100ml-product.webp"
    }
  ],

  seo: {
    title:
      "에르띠 35 컨센트레이트 부스터 | 리바이탈라이징 탄력 앰플",
    description:
      "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징은 슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 담은 Revitalizing Line 앰플입니다. 보습감, 탄력 컨디션, 장벽 컨디션, 맑고 생기 있는 피부 인상을 함께 관리합니다.",
    keywords: [
      "에르띠 35",
      "에르띠 35 앰플",
      "35 컨센트레이트 부스터",
      "Concentrated Booster for Skin Revitalizing",
      "리바이탈라이징 앰플",
      "탄력 앰플",
      "안티에이징 앰플",
      "슈도알테로모나스발효추출물 앰플",
      "Ceracare AC-1",
      "세라마이드 앰플",
      "펩타이드 앰플",
      "아데노신 앰플",
      "나이아신아마이드 앰플",
      "장벽 컨디션 앰플",
      "피부 활력 앰플"
    ],
    canonicalUrl:
      "https://ertyofficial.com/products/concentrated-booster-skin-revitalizing-35/",
    ogImage:
      "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-og.jpg"
  },

  hero: {
    eyebrow: "Revitalizing Line · No.35 Ampoule",
    headline: "쫀쫀한 탄력감과 장벽 컨디션을 함께 설계한 리바이탈라이징 앰플",
    subheadline:
      "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드로 지쳐 보이는 피부를 촉촉하고 생기 있게 가꾸는 35번 부스터 앰플",
    benefitChips: [
      "Revitalizing Line",
      "30ml / 100ml",
      "슈도알테로모나스발효추출물",
      "Ceracare AC-1",
      "9종 펩타이드",
      "아데노신",
      "나이아신아마이드",
      "자극지수 0.00 자료"
    ],
    primaryImage:
      "/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-product.webp"
  },

  aiSummary: {
    oneSentence:
      "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징은 슈도알테로모나스발효추출물과 Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 중심으로 탄력감·보습감·장벽 컨디션을 함께 관리하는 리바이탈라이징 앰플입니다.",
    paragraph:
      "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징은 ERTY Revitalizing Line의 35번 앰플입니다. 남극 빙하 기저부 유래 성분으로 소개되는 슈도알테로모나스발효추출물과 Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드, 5가지 세라마이드 성분축을 결합해 건조하고 힘이 부족해 보이는 피부에 촉촉한 보습감과 탄력 컨디션을 부여하고, 장벽 컨디션과 맑고 생기 있는 피부 인상을 함께 관리하도록 설계되었습니다. 브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다.",
    keyFacts: [
      "Revitalizing Line 35번 앰플",
      "30ml / 100ml 구성",
      "슈도알테로모나스발효추출물 함유",
      "Ceracare AC-1 특허 성분 소구",
      "9종 펩타이드 콤플렉스 소구",
      "아데노신과 나이아신아마이드 함유",
      "5가지 복합 세라마이드 성분축 소구",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "탄력감이 떨어져 피부가 힘없이 보이는 경우",
      "건조와 푸석함으로 피부 컨디션이 쉽게 무너지는 경우",
      "장벽 컨디션이 약해져 피부가 쉽게 예민해지는 경우",
      "칙칙해 보이는 피부 톤과 생기 부족이 함께 고민인 경우",
      "나이가 들며 피부결과 탄력감이 동시에 흐트러져 보이는 경우",
      "진정·보습·탄력·톤 케어를 한 루틴 안에서 함께 관리하고 싶은 경우"
    ],
    productApproach: [
      "슈도알테로모나스발효추출물 기반의 마린 리페어 성분축으로 지쳐 보이는 피부 컨디션을 편안하게 관리합니다.",
      "Ceracare AC-1, 세라마이드, 피토스핑고신, 콜레스테롤 성분축으로 장벽 컨디션을 보조합니다.",
      "9종 펩타이드와 아데노신으로 탄력감이 부족해 보이는 피부 컨디션을 매끄럽게 관리합니다.",
      "나이아신아마이드 성분축으로 칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움을 줍니다.",
      "보습감과 영양감이 느껴지는 앰플 제형으로 건조하고 예민해진 피부를 촉촉하게 감싸는 사용감을 제공합니다."
    ]
  },

  formula: {
    thesis:
      "35번 앰플의 핵심은 단일 안티에이징 성분을 강하게 밀어붙이는 방식이 아니라, 발효 유래 컨디셔닝 축, 세라마이드 장벽 지질 축, 펩타이드 탄력 축, 나이아신아마이드 톤 케어 축을 결합해 지쳐 보이는 피부를 다층적으로 정돈하는 리바이탈라이징 설계입니다.",
    axes: [
      {
        title: "Marine Repair Conditioning Axis",
        role: "지쳐 보이는 피부 컨디션 케어",
        ingredients: ["Pseudoalteromonas Ferment Extract"],
        explanation:
          "슈도알테로모나스발효추출물은 브랜드 자료에서 마린 리페어 콤플렉스의 핵심 성분으로 제시됩니다. 공개 PDP에서는 피부 보호막과 컨디션 유지에 도움을 주는 발효 유래 성분축으로 설명합니다."
      },
      {
        title: "Barrier Lipid Axis",
        role: "피부 장벽 컨디션 보조",
        ingredients: ["Ceracare AC-1", "Ceramide Complex", "Phytosphingosine", "Cholesterol"],
        explanation:
          "Ceracare AC-1, 5가지 복합 세라마이드, 피토스핑고신, 콜레스테롤을 장벽 지질 성분축으로 구성해 건조와 외부 환경으로 흐트러진 피부 컨디션을 보조합니다."
      },
      {
        title: "Elasticity Peptide Axis",
        role: "탄력감이 부족해 보이는 피부 컨디션 케어",
        ingredients: ["9 Peptide Complex", "Adenosine"],
        explanation:
          "9종 펩타이드와 아데노신은 힘이 부족해 보이는 피부에 매끄러운 탄력 인상을 부여하는 성분축입니다. 공개 PDP에서는 주름 제거가 아니라 탄력 컨디션 케어로 표현합니다."
      },
      {
        title: "Tone Vitality Axis",
        role: "칙칙해 보이는 피부 톤 인상 케어",
        ingredients: ["Niacinamide"],
        explanation:
          "나이아신아마이드는 칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움을 주는 성분축입니다. 미백 보장 표현이 아니라 톤 컨디션 케어로 서술합니다."
      },
      {
        title: "Moisture & Nourishment Axis",
        role: "촉촉하고 부드러운 앰플 사용감",
        ingredients: ["Humectant Base", "Marine Ferment Complex"],
        explanation:
          "제품 라벨과 상세페이지는 풍부한 수분감과 영양감을 강조합니다. PDP에서는 건조하고 푸석해 보이는 피부를 촉촉하게 감싸는 사용감으로 번역합니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "슈도알테로모나스발효추출물",
      nameEn: "Pseudoalteromonas Ferment Extract",
      inci: "Pseudoalteromonas Ferment Extract",
      role: "마린 리페어 컨디셔닝 성분축",
      consumerBenefit:
        "건조와 외부 환경으로 지쳐 보이는 피부 컨디션을 편안하게 관리하고 촉촉한 피부 인상을 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["피부 피로감", "건조", "컨디션 저하", "푸석함"]
    },
    {
      nameKo: "세라케어 AC-1",
      nameEn: "Ceracare AC-1",
      inci: "Ceracare AC-1",
      role: "장벽 컨디션 보조 성분축",
      consumerBenefit:
        "피부 장벽 컨디션을 보조해 건조하고 예민해지기 쉬운 피부를 편안하게 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["장벽 컨디션", "건조", "예민함", "피부 보호"]
    },
    {
      nameKo: "9종 펩타이드 콤플렉스",
      nameEn: "9 Peptide Complex",
      inci: "Peptide Complex",
      role: "탄력 컨디션 케어",
      consumerBenefit:
        "힘이 부족해 보이는 피부를 매끄럽고 탄탄한 인상으로 가꾸는 데 도움을 주는 펩타이드 성분축입니다.",
      relatedConcerns: ["탄력 저하", "피부 힘 부족", "푸석함", "노화 징후"]
    },
    {
      nameKo: "아데노신",
      nameEn: "Adenosine",
      inci: "Adenosine",
      role: "탄력과 주름 고민 피부 컨디션 케어",
      consumerBenefit:
        "주름이 신경 쓰이는 피부와 탄력감이 부족해 보이는 피부를 매끄럽게 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["주름 고민", "탄력 저하", "피부결 변화"]
    },
    {
      nameKo: "나이아신아마이드",
      nameEn: "Niacinamide",
      inci: "Niacinamide",
      role: "맑은 피부 톤 인상 케어",
      consumerBenefit:
        "칙칙해 보이는 피부 톤을 맑고 생기 있는 인상으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "톤 불균형", "생기 부족"]
    },
    {
      nameKo: "5가지 복합 세라마이드",
      nameEn: "5 Ceramide Complex",
      inci: "Ceramide EOP, Ceramide NS, Ceramide NP, Ceramide AS, Ceramide AP",
      role: "피부 장벽 지질 컨디션 보조",
      consumerBenefit:
        "피부 표면의 수분 보호막을 보조해 건조로 인한 불편감을 줄이고 촉촉한 컨디션을 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["장벽 약화", "수분 손실", "건조", "예민함"]
    },
    {
      nameKo: "피토스핑고신",
      nameEn: "Phytosphingosine",
      inci: "Phytosphingosine",
      role: "장벽 컨디션 보조",
      consumerBenefit:
        "세라마이드 성분축과 함께 피부 장벽 컨디션을 보조하고 편안한 피부 상태 유지에 도움을 줍니다.",
      relatedConcerns: ["피부 보호", "장벽 컨디션", "건조"]
    },
    {
      nameKo: "콜레스테롤",
      nameEn: "Cholesterol",
      inci: "Cholesterol",
      role: "피부 지질 밸런스 보조",
      consumerBenefit:
        "피부 표면 지질 성분축을 보조해 건조한 피부의 편안한 컨디션 유지에 도움을 줍니다.",
      relatedConcerns: ["건조", "장벽 컨디션", "수분 손실"]
    }
  ],

  texture: {
    type: "촉촉한 고농축 앰플 제형",
    finish: "보습감과 윤기감이 남는 매끄러운 마무리",
    absorption: "토너 후 앰플 단계에서 얼굴과 목에 펴 바르고 두드려 흡수",
    sensoryCopy:
      "풍부한 보습감과 영양감이 느껴지는 앰플 제형으로, 건조하고 힘이 부족해 보이는 피부에 촉촉한 막을 남기면서도 루틴 안에서 레이어링하기 좋은 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시되었습니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태와 사용 환경에 따라 사용감과 반응은 달라질 수 있습니다.",
      image:
        "/images/products/concentrated-booster-skin-revitalizing-35/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "brandData",
      title: "Revitalizing Line 35번 앰플",
      summary:
        "전제품 소개서 기준 35번 제품은 Revitalizing Line의 앰플로, 슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드 소구가 제시됩니다.",
      sourceNote: "ERTY KOREA Product Guide 기준"
    },
    {
      type: "beforeAfter",
      title: "피부 장벽 컨디션 관련 사용 예시",
      summary:
        "전제품 소개서에는 피부 장벽이 무너진 피부를 대상으로 한 사용 예시 이미지가 포함되어 있습니다. 해당 이미지는 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 B&A 예시 자료 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너로 피부결을 정돈합니다.",
      "적당량을 덜어 얼굴과 목 전체에 고르게 펴 바릅니다.",
      "손바닥으로 가볍게 감싸듯 눌러 흡수시킵니다.",
      "건조함, 탄력감 저하, 푸석함이 느껴지는 부위에는 한 번 더 소량 레이어링할 수 있습니다.",
      "아침 루틴에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "피부 상태에 따라 아침 또는 저녁 앰플 단계에서 사용할 수 있습니다. 민감한 피부는 적은 양부터 사용해 피부 반응을 확인하십시오.",
    cautions: [
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "눈가와 입가 등 예민한 부위는 사용량을 조절하십시오.",
      "고기능성 성분이 포함된 루틴과 병행할 경우 피부 상태에 따라 사용 빈도를 조절하십시오.",
      "브랜드 제공 테스트 자료가 모든 사용자에게 동일한 결과를 보장하지는 않습니다."
    ]
  },

  routines: [
    {
      title: "35 앰플 + 15 앰플",
      products: [
        "concentrated-booster-skin-revitalizing-35",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "피부 리페어 & 진정 밸런스 루틴",
      recommendedFor: [
        "외부 환경으로 예민해진 피부",
        "트러블성 고민과 탄력 저하가 함께 느껴지는 피부",
        "진정과 리바이탈라이징 케어를 함께 원하는 피부"
      ]
    },
    {
      title: "35 앰플 + 25 앰플",
      products: [
        "concentrated-booster-skin-revitalizing-35",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "재생 보습 리커버리 루틴",
      recommendedFor: [
        "건조로 인해 피부 컨디션이 쉽게 무너지는 피부",
        "보습감과 탄력 컨디션 케어를 함께 원하는 피부",
        "푸석하고 힘이 부족해 보이는 피부"
      ]
    },
    {
      title: "35 앰플 + 55 앰플",
      products: [
        "concentrated-booster-skin-revitalizing-35",
        "concentrated-booster-skin-brightening-55"
      ],
      useCase: "리바이탈라이징 & 브라이트닝 루틴",
      recommendedFor: [
        "칙칙해 보이는 피부 톤과 탄력 저하가 함께 고민인 피부",
        "맑고 생기 있는 피부 인상을 원하는 피부",
        "리바이탈라이징 케어와 톤 케어를 함께 설계하고 싶은 피부"
      ]
    },
    {
      title: "35 앰플 + 37 크림",
      products: [
        "concentrated-booster-skin-revitalizing-35",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "딥 리페어 장벽 루틴",
      recommendedFor: [
        "장벽 컨디션이 약해져 쉽게 건조하고 예민해지는 피부",
        "앰플 후 크림으로 보습막을 마무리하고 싶은 피부",
        "탄탄하고 편안한 피부 컨디션을 유지하고 싶은 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징은 어떤 제품인가요?",
      answer:
        "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 중심으로 건조하고 힘이 부족해 보이는 피부에 보습감과 탄력 컨디션을 부여하고 장벽 컨디션을 함께 관리하는 Revitalizing Line 35번 앰플입니다."
    },
    {
      question: "어떤 피부 타입에 추천되나요?",
      answer:
        "전제품 소개서 기준 주름진 피부, 노화 피부, 예민한 피부, 진정 및 재생 케어가 필요한 피부에 추천됩니다. 공개 PDP에서는 탄력감 저하, 건조, 푸석함, 장벽 컨디션 약화, 칙칙해 보이는 피부 톤이 함께 고민인 피부에 적합한 앰플로 안내합니다."
    },
    {
      question: "슈도알테로모나스발효추출물은 어떤 역할을 하나요?",
      answer:
        "브랜드 자료에서 슈도알테로모나스발효추출물은 마린 리페어 성분축으로 제시됩니다. PDP에서는 피부 컨디션 유지, 보습감, 보호막 케어에 도움을 주는 발효 유래 성분으로 설명합니다."
    },
    {
      question: "Ceracare AC-1과 세라마이드는 어떤 피부 고민에 도움이 되나요?",
      answer:
        "Ceracare AC-1, 5가지 복합 세라마이드, 피토스핑고신, 콜레스테롤은 건조와 외부 환경으로 흐트러진 피부 장벽 컨디션을 보조하는 성분축입니다. 장벽 손상 치료가 아니라 편안한 피부 컨디션 유지에 도움을 주는 방향으로 이해하는 것이 맞습니다."
    },
    {
      question: "이 제품은 미백·주름개선 제품인가요?",
      answer:
        "자료에는 아데노신과 나이아신아마이드 성분 및 미백·주름개선 기능성 문맥이 있습니다. 공개 PDP에서는 피부 톤 인상과 탄력 컨디션 케어 중심으로 설명하며, 별도 기능성 고시 범위가 확정된 경우에만 기능성 표현을 강화하는 것이 안전합니다."
    },
    {
      question: "민감한 피부도 사용할 수 있나요?",
      answer:
        "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다. 다만 개인의 피부 상태에 따라 반응은 다를 수 있으므로 민감한 피부는 적은 양부터 사용해 피부 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "어떤 순서로 사용하나요?",
      answer:
        "세안 후 토너로 피부결을 정돈한 다음 앰플 단계에서 사용합니다. 얼굴과 목에 고르게 펴 바르고 손바닥으로 가볍게 눌러 흡수시키며, 건조하거나 탄력감이 부족한 부위에는 소량을 한 번 더 레이어링할 수 있습니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "예민한 피부 컨디션까지 함께 관리하고 싶을 때는 15 앰플, 수분감까지 보강하고 싶을 때는 25 앰플, 칙칙해 보이는 피부 톤까지 함께 관리하고 싶을 때는 55 앰플, 장벽 보습 마무리가 필요할 때는 37 크림과의 루틴이 적합합니다."
    }
  ],

  relatedProducts: [
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-brightening-55",
    "intensive-cellular-er-cream-37",
    "derma-hydro-aquax-cream-27",
    "tonic-lotion-skin-hydrating-23"
  ],

  claims: {
    allowed: [
      "피부에 촉촉한 보습감과 영양감을 부여하는 데 도움",
      "탄력감이 부족해 보이는 피부 컨디션 관리에 도움",
      "건조하고 푸석해 보이는 피부를 생기 있게 가꾸는 데 도움",
      "피부 장벽 컨디션 케어에 도움",
      "칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움",
      "슈도알테로모나스발효추출물과 Ceracare AC-1 소구",
      "9종 펩타이드, 아데노신, 나이아신아마이드 소구",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
    ],
    avoid: [
      "피부 재생 치료",
      "장벽 손상 치료",
      "주름 제거",
      "미백 보장",
      "색소침착 치료",
      "노화 치료",
      "탄력 회복 보장",
      "피부 속 진피층 재생",
      "염증 치료",
      "100% 개선",
      "모든 피부에 무조건 무자극",
      "즉시 주름 개선 보장"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 리뷰, 원료 소구 및 테스트 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const concentratedBoosterSkinRevitalizing35SchemaHints = {
  schemaType: "ProductGroup",
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-revitalizing-35/`,
  productGroupID: "concentrated-booster-skin-revitalizing-35",
  variesBy: ["https://schema.org/size"],
  variantStrategy: "Use one canonical PDP with 30ml and 100ml variants under ProductGroup.",
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "35 Concentrated Booster for Skin Revitalizing",
      item: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-revitalizing-35/`
    }
  ],
  faqPage: {
    useVisibleFaqOnly: true,
    source: "concentratedBoosterSkinRevitalizing35.faq"
  },
  productJsonLd: {
    useProductGroup: true,
    useVariants: true,
    doNotAddPriceUntilCommerceConnected: true,
    doNotAddAvailabilityUntilCommerceConnected: true,
    brandName: "ERTY",
    category: "Skincare > Ampoule > Revitalizing Ampoule"
  },
  caution:
    "Keep regeneration, whitening, wrinkle, barrier-strengthening, clinical and before-after claims cosmetic-safe. Do not encode guaranteed outcomes or therapeutic claims in JSON-LD or visible PDP copy."
} as const;

export const concentratedBoosterSkinRevitalizing35MerchantFeedDraft = {
  itemGroupId: "concentrated-booster-skin-revitalizing-35",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Ampoule > Revitalizing Ampoule",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-CBSR35-30ML",
      title: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 30ml",
      description:
        "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 중심으로 보습감, 탄력 컨디션, 장벽 컨디션을 함께 관리하는 리바이탈라이징 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-revitalizing-35/?variant=30ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-30ml-product.webp`,
      size: "30ml"
    },
    {
      id: "ERTY-CBSR35-100ML",
      title: "에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징 100ml",
      description:
        "슈도알테로모나스발효추출물, Ceracare AC-1, 9종 펩타이드, 아데노신, 나이아신아마이드를 중심으로 보습감, 탄력 컨디션, 장벽 컨디션을 함께 관리하는 리바이탈라이징 앰플.",
      link: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-revitalizing-35/?variant=100ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/concentrated-booster-skin-revitalizing-35/concentrated-booster-skin-revitalizing-35-100ml-product.webp`,
      size: "100ml"
    }
  ],
  omittedUntilCommerceConnected: ["price", "sale_price", "availability", "shipping", "return_policy"]
} as const;

export const concentratedBoosterSkinRevitalizing35CodexHandoff = {
  targetFile: "src/data/products/concentrated-booster-skin-revitalizing-35.ts",
  route: "/products/concentrated-booster-skin-revitalizing-35/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/concentrated-booster-skin-revitalizing-35/`,
  registerExport: "concentratedBoosterSkinRevitalizing35",
  tasks: [
    "Move or copy the ProductPdpData export into the target file.",
    "Register concentratedBoosterSkinRevitalizing35 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 35 컨센트레이트 부스터 포 스킨 리바이탈라이징.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 30ml and 100ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from concentratedBoosterSkinRevitalizing35ImageAlt.",
    "Keep regeneration, whitening, wrinkle, anti-aging, barrier, peptide, clinical, and before-after claims cosmetic-safe.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com/products/concentrated-booster-skin-revitalizing-35.",
    "No price or availability appears in JSON-LD until commerce data is connected.",
    "30ml and 100ml variants are visible in PDP and ProductGroup JSON-LD.",
    "Concentraed typo is corrected to Concentrated in visible PDP copy, metadata, schema, and merchant feed.",
    "The product is not mislabeled as Hydrating even though the uploaded PDF file name includes Hydrating.",
    "Regeneration, wrinkle improvement, whitening, and barrier strengthening claims are framed as cosmetic-safe conditioning claims unless separate regulatory wording is confirmed.",
    "The 35+35 routine conflict is not rendered as-is; hydration recovery pairing should use 35+25 unless the brand confirms another SKU strategy.",
    "FAQ content is visible on the page before FAQPage schema is generated.",
    "All important product content is rendered as HTML text, not only inside detail-page images."
  ]
} as const;

export default concentratedBoosterSkinRevitalizing35;
