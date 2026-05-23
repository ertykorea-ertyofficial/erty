import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 37 Intensive Cellular ER Cream
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const intensiveCellularErCream37SourceAudit = {
  slug: "intensive-cellular-er-cream-37",
  productEntity:
    "에르띠 37 인텐시브 셀룰러 ER 크림 | 37 Intensive Cellular ER Cream",
  sourceFiles: [
    {
      fileName: "37 Intensive Cellular ER Cream.pdf",
      sourceType: "product-specification",
      usedFor: [
        "canonical product name",
        "capacity 20ml / 45ml",
        "usage method",
        "SLP Complex positioning",
        "5 ceramide, phytosphingosine, and cholesterol lipid-barrier axis",
        "95% madecassoside positioning",
        "hydrolyzed lupine protein positioning",
        "copper tripeptide-1 and hexapeptide-11 elasticity-care context",
        "Vita Herb Complex positioning",
        "brand-provided clinical metric summary",
        "recommended routine pairings"
      ]
    },
    {
      fileName: "에르띠 전제품 소개서_한국어.pdf",
      sourceType: "brand-product-guide",
      usedFor: [
        "ERTY product-numbering system",
        "Revitalizing line structure",
        "37 Intensive Cellular ER Cream line position",
        "20ml / 45ml configuration",
        "Centella Asiatica Extract, Madecassoside, Madonna Lily, Spanish Licorice, Arnica Montana, SLP Complex ingredient context",
        "recommended skin types: sensitive skin and post-peeling care",
        "before-after disclaimer language",
        "related Revitalizing line product context"
      ]
    },
    {
      fileName: "Intensive-ER-37-Cream(20ml)_*.jpg / 37RENEWAL(*).jpg",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "second-skin and barrier cream narrative",
        "tone-up and post-care context",
        "real-review detail-page narrative",
        "routine suggestion context",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 37 인텐시브 셀룰러 ER 크림 / 37 Intensive Cellular ER Cream으로 공개 PDP에서 정규화한다.",
    "Revitalizing Line의 37번 크림 제품이다.",
    "용량은 20ml와 45ml 두 가지 구성이 제시되어 있다.",
    "제품은 피부 장벽 컨디션, 진정, 보습, 탄력감, 피부 톤 인상 케어를 주요 방향으로 제시한다.",
    "기술 소개서 기준 주요 성분축은 SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드, 하이드롤라이즈드 루핀 단백질, 카퍼트라이펩타이드-1, 비타 허브 콤플렉스이다.",
    "전제품 소개서 기준 주요성분은 병풀추출물, 마데카소사이드, 마돈나백합꽃추출물, 스페인감초추출물, 아르니카몬타나꽃추출물, SLP Complex, 피토스핑고신, 세라마이드NP로 제시된다.",
    "전제품 소개서 기준 추천 피부 타입은 예민한 피부와 필링 후 재생관리이다.",
    "기술 소개서 기준 추천 루틴은 37크림+25앰플, 37크림+35앰플, 37크림+55앰플, 37크림+57크림이다.",
    "브랜드 제공 자료에는 장벽, 붉은기, 피부색 밝기 관련 임상 그래프와 개선율 수치가 제시되어 있다.",
    "브랜드 제공 자료에는 제품 사용에 따른 반응 예시와 B&A 이미지가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "'피부 수명 연장', '바르는 장벽 이식', '피부 지능 강화', '상처 치유', '강력한 항염' 표현은 공개 PDP에서 직접 사용하지 않고 화장품 안전 표현으로 조정한다.",
    "브랜드 제공 임상 수치는 evidence 섹션에 보조 근거로만 사용하고, 메타디스크립션이나 JSON-LD에 보장형 효능으로 넣지 않는다.",
    "간단한 커버 UP / 톤업 기능은 자료상 확인되지만, 별도 기능성 고시 문구로 확장하지 않고 시각적 톤 보정감 정도로 제한한다.",
    "B&A와 리뷰 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다."
  ]
} as const;

export const intensiveCellularErCream37ImageAlt = [
  {
    src: "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-20ml-product.webp",
    alt: "에르띠 37 인텐시브 셀룰러 ER 크림 20ml 제품과 패키지 상세 이미지",
    role: "intro-detail-image"
  },
  {
    src: "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-20ml-detail-2.jpg",
    alt: "SLP 콤플렉스와 세컨드 스킨 장벽 컨디션을 설명하는 에르띠 37 크림 상세 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-45ml-product.webp",
    alt: "에르띠 37 인텐시브 셀룰러 ER 크림 45ml 리뉴얼 상세페이지 이미지",
    role: "renewal-detail-image"
  },
  {
    src: "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-45ml-renewal-2.jpg",
    alt: "에르띠 37 크림 사용법과 리바이탈라이징 루틴 추천 상세 이미지",
    role: "usage-and-routine-detail-image"
  },
  {
    src: "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const intensiveCellularErCream37ClaimRiskClassification = {
  safeClaims: [
    "20ml / 45ml 크림",
    "Revitalizing Line 37번 크림",
    "피부 장벽 컨디션이 고민인 피부를 위한 리바이탈라이징 크림",
    "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤 성분축 소구",
    "95% 마데카소사이드, 병풀추출물, 아르니카몬타나꽃추출물 등 진정 컨디션 성분축 소구",
    "건조하고 예민해진 피부에 촉촉한 보습감을 부여하는 데 도움",
    "외부 환경으로 예민해진 피부를 편안하게 정돈하는 데 도움",
    "탄력감이 부족해 보이는 피부 컨디션을 매끄럽게 관리하는 데 도움",
    "칙칙해 보이는 피부 톤을 맑고 생기 있게 가꾸는 데 도움",
    "브랜드 제공 자료 기준 장벽·붉은기·피부색 밝기 관련 시험 그래프 보유"
  ],
  adjustedClaims: [
    {
      original: "피부 수명 연장의 기술",
      adjusted: "건강해 보이는 피부 컨디션을 오래 유지하도록 설계한 리바이탈라이징 크림"
    },
    {
      original: "바르는 장벽 이식",
      adjusted: "피부 지질 유사 성분축으로 장벽 컨디션을 보조하는 크림"
    },
    {
      original: "파괴된 피부 장벽을 즉각적으로 메우고 결합",
      adjusted: "건조와 외부 자극으로 흐트러진 피부 장벽 컨디션을 촘촘하게 보조"
    },
    {
      original: "강력한 항염 효과와 상처 치유 프로세스 가속",
      adjusted: "외부 환경으로 예민해진 피부를 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 재생 / 탄력",
      adjusted: "탄력감이 부족해 보이는 피부와 지쳐 보이는 피부 컨디션 케어"
    },
    {
      original: "피부 지능 강화",
      adjusted: "외부 환경으로 쉽게 예민해지는 피부를 편안하게 유지하도록 보조"
    },
    {
      original: "주름 개선",
      adjusted: "주름이 신경 쓰이는 피부의 탄력 컨디션 케어"
    },
    {
      original: "미백 / 톤업",
      adjusted: "칙칙해 보이는 피부 톤을 맑고 균일한 인상으로 가꾸는 데 도움"
    },
    {
      original: "장벽 개선율 286.29%",
      adjusted: "브랜드 제공 시험 조건에서 장벽 관련 지표 개선 그래프가 제시됨"
    }
  ],
  prohibitedClaims: [
    "피부 장벽 치료",
    "장벽 이식",
    "상처 치유",
    "염증 치료",
    "항염 치료",
    "홍조 치료",
    "피부 재생 치료",
    "피부 수명 연장 보장",
    "주름 제거",
    "미백 보장",
    "색소침착 치료",
    "레이저 후 회복 치료",
    "피부과 시술 대체",
    "100% 개선",
    "즉각 개선 보장",
    "모든 피부에 무조건 무자극"
  ]
} as const;

export const intensiveCellularErCream37: ProductPdpData = {
  slug: "intensive-cellular-er-cream-37",

  identity: {
    productNumber: "37",
    line: "Revitalizing",
    lineKo: "리바이탈라이징",
    nameKo: "에르띠 37 인텐시브 셀룰러 ER 크림",
    nameEn: "37 Intensive Cellular ER Cream",
    canonicalName:
      "에르띠 37 인텐시브 셀룰러 ER 크림 | 37 Intensive Cellular ER Cream",
    category: "Revitalizing Barrier Cream",
    routineStep: "Cream Step",
    shortDefinition:
      "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드를 중심으로 건조하고 예민해진 피부의 장벽 컨디션과 보습감을 촘촘하게 보조하는 Revitalizing Line 37번 크림입니다."
  },

  variants: [
    {
      sku: "ERTY-ICER37-20ML",
      volume: "20ml",
      image:
        "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-20ml-product.webp"
    },
    {
      sku: "ERTY-ICER37-45ML",
      volume: "45ml",
      image:
        "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-45ml-product.webp"
    }
  ],

  seo: {
    title:
      "에르띠 37 인텐시브 셀룰러 ER 크림 | 리바이탈라이징 장벽 크림",
    description:
      "에르띠 37 인텐시브 셀룰러 ER 크림은 SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드, 하이드롤라이즈드 루핀 단백질을 담은 리바이탈라이징 장벽 크림입니다. 건조하고 예민해진 피부의 보습감, 장벽 컨디션, 탄력 컨디션을 함께 관리합니다.",
    keywords: [
      "에르띠 37",
      "에르띠 37 크림",
      "37 인텐시브 셀룰러 ER 크림",
      "Intensive Cellular ER Cream",
      "리바이탈라이징 크림",
      "장벽 크림",
      "세라마이드 크림",
      "SLP Complex",
      "마데카소사이드 크림",
      "피토스핑고신 크림",
      "콜레스테롤 크림",
      "카퍼트라이펩타이드 크림",
      "필링 후 크림",
      "예민피부 크림",
      "장벽 컨디션 크림",
      "세컨드 스킨 크림"
    ],
    canonicalUrl:
      "https://ertyofficial.com/products/intensive-cellular-er-cream-37/",
    ogImage:
      "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-og.jpg"
  },

  hero: {
    eyebrow: "Revitalizing Line · No.37 Cream",
    headline: "피부 지질 구조를 닮은 세컨드 스킨 장벽 크림",
    subheadline:
      "SLP Complex와 95% 마데카소사이드, 루핀 단백질, 카퍼트라이펩타이드-1을 결합해 건조하고 예민해진 피부의 보습감과 장벽 컨디션을 촘촘하게 보조하는 37번 리바이탈라이징 크림",
    benefitChips: [
      "Revitalizing Line",
      "20ml / 45ml",
      "SLP Complex",
      "5종 세라마이드",
      "피토스핑고신",
      "콜레스테롤",
      "95% 마데카소사이드",
      "세컨드 스킨 사용감"
    ],
    primaryImage:
      "/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-45ml-product.webp"
  },

  aiSummary: {
    oneSentence:
      "에르띠 37 인텐시브 셀룰러 ER 크림은 SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드로 피부 장벽 컨디션과 진정·보습감을 함께 설계한 리바이탈라이징 크림입니다.",
    paragraph:
      "에르띠 37 인텐시브 셀룰러 ER 크림은 ERTY Revitalizing Line의 37번 크림입니다. 피부 지질 구조를 고려한 SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤 성분축과 95% 마데카소사이드, 병풀추출물, 하이드롤라이즈드 루핀 단백질, 카퍼트라이펩타이드-1, 비타 허브 콤플렉스를 결합해 건조하고 예민해진 피부의 보습감과 장벽 컨디션을 보조하고, 탄력감과 맑은 피부 인상을 함께 관리하도록 설계되었습니다. 브랜드 제공 자료 기준 장벽·붉은기·피부색 밝기 관련 시험 그래프가 제시되어 있으나, 개인의 피부 상태에 따라 사용감과 반응은 달라질 수 있습니다.",
    keyFacts: [
      "Revitalizing Line 37번 크림",
      "20ml / 45ml 구성",
      "SLP Complex 소구",
      "5종 세라마이드 NP, NS, AS, AP, EOP 소구",
      "피토스핑고신과 콜레스테롤을 포함한 지질 성분축",
      "95% 마데카소사이드 소구",
      "하이드롤라이즈드 루핀 단백질 소구",
      "카퍼트라이펩타이드-1과 헥사펩타이드-11 소구",
      "예민 피부와 필링 후 케어 루틴에 적합한 크림으로 제시됨"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "건조와 외부 자극으로 피부가 쉽게 예민해지는 경우",
      "피부 장벽 컨디션이 약해져 당김과 푸석함이 반복되는 경우",
      "필링 후 피부가 건조하고 붉어 보이는 경우",
      "탄력감이 부족해 피부가 힘없이 보이는 경우",
      "칙칙함과 생기 부족이 함께 느껴지는 피부",
      "앰플 사용 후 보습막으로 루틴을 안정적으로 마무리하고 싶은 경우"
    ],
    productApproach: [
      "SLP Complex와 5종 세라마이드, 피토스핑고신, 콜레스테롤 성분축으로 피부 지질 유사 장벽 컨디션을 보조합니다.",
      "95% 마데카소사이드와 병풀추출물이 예민해진 피부를 편안하게 정돈하는 데 도움을 줍니다.",
      "하이드롤라이즈드 루핀 단백질은 피부가 촉촉한 수분감을 오래 유지하도록 보습 루틴을 보조합니다.",
      "카퍼트라이펩타이드-1과 헥사펩타이드-11은 탄력감이 부족해 보이는 피부 컨디션을 매끄럽게 관리합니다.",
      "비타 허브 콤플렉스와 식물 추출물 성분축은 칙칙해 보이는 피부를 맑고 생기 있는 인상으로 가꾸는 데 도움을 줍니다."
    ]
  },

  formula: {
    thesis:
      "37번 크림의 핵심은 단순 보습 크림이 아니라, 피부 지질 유사 성분축과 고순도 마데카소사이드, 보습 단백질, 펩타이드, 식물 유래 진정 성분을 결합해 예민해진 피부 컨디션을 촘촘하게 덮고 보조하는 세컨드 스킨 장벽 설계입니다.",
    axes: [
      {
        title: "Second-Skin Lipid Barrier Axis",
        role: "피부 장벽 컨디션 보조",
        ingredients: ["SLP Complex", "Ceramide NP", "Ceramide NS", "Ceramide AS", "Ceramide AP", "Ceramide EOP", "Phytosphingosine", "Cholesterol"],
        explanation:
          "SLP Complex는 5종 세라마이드, 피토스핑고신, 콜레스테롤을 중심으로 한 지질 성분축입니다. 공개 PDP에서는 피부 지질 유사 성분으로 건조하고 약해진 장벽 컨디션을 보조하는 세컨드 스킨 설계로 설명합니다."
      },
      {
        title: "Madecassoside Soothing Axis",
        role: "예민해진 피부 컨디션 정돈",
        ingredients: ["Madecassoside 95%", "Centella Asiatica Extract"],
        explanation:
          "95% 마데카소사이드와 병풀추출물은 외부 환경으로 예민해진 피부를 편안하게 정돈하는 성분축입니다. 강한 항염·상처치유 표현 대신 진정 컨디션 케어로 표현합니다."
      },
      {
        title: "Moisture-Lock Protein Axis",
        role: "수분감 유지와 보습막 보조",
        ingredients: ["Hydrolyzed Lupine Protein"],
        explanation:
          "하이드롤라이즈드 루핀 단백질은 보습 루틴을 보조하는 성분축입니다. 피부에 수분감을 부여하고 건조로 인한 당김 부담을 낮추는 방향으로 설명합니다."
      },
      {
        title: "Elasticity Peptide Axis",
        role: "탄력감이 부족해 보이는 피부 컨디션 케어",
        ingredients: ["Copper Tripeptide-1", "Hexapeptide-11"],
        explanation:
          "카퍼트라이펩타이드-1과 헥사펩타이드-11은 탄력감이 부족해 보이는 피부를 매끄럽게 관리하는 성분축입니다. 주름 제거가 아니라 탄력 컨디션 케어로 서술합니다."
      },
      {
        title: "Tone Vitality Botanical Axis",
        role: "맑고 생기 있는 피부 인상 케어",
        ingredients: ["Vita Herb Complex", "Glycyrrhiza Glabra Root Extract", "Madonna Lily Flower Extract", "Arnica Montana Flower Extract", "Scutellaria Baicalensis Root Extract"],
        explanation:
          "비타 허브 콤플렉스와 식물 추출물 성분축은 칙칙해 보이는 피부를 맑고 생기 있는 인상으로 가꾸는 데 도움을 주는 보조 축입니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "SLP 콤플렉스",
      nameEn: "SLP Complex",
      inci: "Skin Lipid Protection Complex",
      role: "피부 지질 유사 장벽 컨디션 보조",
      consumerBenefit:
        "세라마이드, 피토스핑고신, 콜레스테롤 성분축으로 건조하고 예민해진 피부의 장벽 컨디션을 촘촘하게 보조합니다.",
      relatedConcerns: ["장벽 컨디션", "건조", "예민함", "수분 손실"]
    },
    {
      nameKo: "5종 세라마이드",
      nameEn: "5 Ceramide Complex",
      inci: "Ceramide NP, Ceramide NS, Ceramide AS, Ceramide AP, Ceramide EOP",
      role: "장벽 지질 성분축",
      consumerBenefit:
        "피부 표면의 수분 보호막을 보조해 건조로 인한 당김과 푸석함을 줄이는 데 도움을 줍니다.",
      relatedConcerns: ["수분 손실", "장벽 약화", "건조", "푸석함"]
    },
    {
      nameKo: "피토스핑고신",
      nameEn: "Phytosphingosine",
      inci: "Phytosphingosine",
      role: "장벽 컨디션 보조",
      consumerBenefit:
        "세라마이드 성분축과 함께 피부가 편안한 상태를 유지하도록 보조합니다.",
      relatedConcerns: ["장벽 컨디션", "피부 보호", "건조"]
    },
    {
      nameKo: "콜레스테롤",
      nameEn: "Cholesterol",
      inci: "Cholesterol",
      role: "피부 지질 밸런스 보조",
      consumerBenefit:
        "피부 지질 구조를 고려한 성분축으로 보습막과 장벽 컨디션을 보조합니다.",
      relatedConcerns: ["장벽 약화", "수분 손실", "건조"]
    },
    {
      nameKo: "마데카소사이드",
      nameEn: "Madecassoside",
      inci: "Madecassoside",
      concentration: "95% purity positioning",
      role: "예민한 피부 진정 컨디션 보조",
      consumerBenefit:
        "외부 환경으로 예민해진 피부를 편안하게 정돈하고 피부 컨디션을 안정적으로 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["예민함", "붉어 보임", "필링 후 불편감", "피부 컨디션 저하"]
    },
    {
      nameKo: "병풀추출물",
      nameEn: "Centella Asiatica Extract",
      inci: "Centella Asiatica Extract",
      role: "피부 컨디션 정돈",
      consumerBenefit:
        "건조와 외부 자극으로 예민해진 피부를 편안하게 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["예민함", "피부 컨디션", "붉어 보임"]
    },
    {
      nameKo: "하이드롤라이즈드 루핀 단백질",
      nameEn: "Hydrolyzed Lupine Protein",
      inci: "Hydrolyzed Lupine Protein",
      role: "보습감 유지 보조",
      consumerBenefit:
        "피부에 촉촉한 수분감을 부여하고 건조로 인한 당김 부담을 낮추는 데 도움을 줍니다.",
      relatedConcerns: ["건조", "당김", "수분 부족", "푸석함"]
    },
    {
      nameKo: "카퍼트라이펩타이드-1",
      nameEn: "Copper Tripeptide-1",
      inci: "Copper Tripeptide-1",
      role: "탄력 컨디션 케어",
      consumerBenefit:
        "탄력감이 부족해 보이는 피부를 매끄럽고 건강한 인상으로 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["탄력 저하", "주름 고민", "피부 힘 부족"]
    },
    {
      nameKo: "헥사펩타이드-11",
      nameEn: "Hexapeptide-11",
      inci: "Hexapeptide-11",
      role: "탄력감 보조 성분축",
      consumerBenefit:
        "힘이 부족해 보이는 피부 컨디션을 매끄럽게 관리하는 데 도움을 줍니다.",
      relatedConcerns: ["탄력 저하", "피부 컨디션", "노화 징후"]
    },
    {
      nameKo: "스페인감초뿌리추출물",
      nameEn: "Glycyrrhiza Glabra Root Extract",
      inci: "Glycyrrhiza Glabra Root Extract",
      role: "편안한 피부 컨디션 보조",
      consumerBenefit:
        "칙칙하고 예민해 보이는 피부를 편안하고 균일한 인상으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "예민함", "톤 불균형"]
    },
    {
      nameKo: "마돈나백합꽃추출물",
      nameEn: "Madonna Lily Flower Extract",
      inci: "Lilium Candidum Flower Extract",
      role: "맑은 피부 인상 보조",
      consumerBenefit:
        "칙칙해 보이는 피부를 맑고 생기 있는 인상으로 가꾸는 데 도움을 줍니다.",
      relatedConcerns: ["칙칙함", "생기 부족", "피부 톤"]
    },
    {
      nameKo: "아르니카몬타나꽃추출물",
      nameEn: "Arnica Montana Flower Extract",
      inci: "Arnica Montana Flower Extract",
      role: "피부 생기 컨디션 보조",
      consumerBenefit:
        "지쳐 보이는 피부를 생기 있는 인상으로 가꾸는 데 도움을 주는 식물 추출물 성분입니다.",
      relatedConcerns: ["생기 부족", "피부 피로감", "컨디션 저하"]
    }
  ],

  texture: {
    type: "고밀도 리바이탈라이징 크림",
    finish: "촉촉한 보습막과 은은한 톤 보정감이 남는 세컨드 스킨 마무리",
    absorption: "앰플 후 크림 단계에서 얼굴과 목에 펴 바르고 두드려 흡수",
    sensoryCopy:
      "피부 위에 얇고 촘촘한 막을 형성하는 듯한 크림 제형으로, 건조하고 예민해진 피부를 편안하게 감싸며 보습감과 매끄러운 마무리감을 남기는 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "브랜드 제공 장벽 관련 시험 그래프",
      summary:
        "기술 소개서에는 물리적 자극 이후 1회 사용 후 장벽 관련 지표 개선 그래프가 제시되어 있습니다. 해당 수치는 브랜드 제공 시험 조건의 자료이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      metric: "Barrier-related metric graph: 286.29% in brand-provided data",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 임상 수치는 보조 근거로만 사용하며 보장형 효능으로 표기하지 않습니다.",
      image:
        "/images/products/intensive-cellular-er-cream-37/evidence-barrier-graph.jpg"
    },
    {
      type: "clinical",
      title: "브랜드 제공 붉은기 관련 시험 그래프",
      summary:
        "기술 소개서에는 트러블 부위 2주 사용 후 및 물리적 자극 이후 2주 사용 후 붉은기 관련 그래프가 제시되어 있습니다. PDP에서는 붉은기 치료가 아니라 예민해 보이는 피부 컨디션 케어 보조 자료로만 사용합니다.",
      metric: "Redness-related graph: 17.19% / 266.23% in brand-provided data",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태에 따라 반응은 달라질 수 있습니다.",
      image:
        "/images/products/intensive-cellular-er-cream-37/evidence-redness-graph.jpg"
    },
    {
      type: "clinical",
      title: "브랜드 제공 피부색 밝기 관련 시험 그래프",
      summary:
        "기술 소개서에는 제품 1회 사용 후 피부색 밝기 관련 그래프가 제시되어 있습니다. 공개 PDP에서는 미백 보장이 아니라 맑고 생기 있는 피부 인상 케어로 표현합니다.",
      metric: "Skin brightness-related graph: 3.32% in brand-provided data",
      sourceNote: "브랜드 제공 제품 기술 소개서 기준"
    },
    {
      type: "brandData",
      title: "Revitalizing Line 37번 크림",
      summary:
        "전제품 소개서 기준 37번 제품은 Revitalizing Line의 크림으로, 예민한 피부와 필링 후 케어가 필요한 피부에 적합한 피부 장벽 컨디션 크림으로 제시됩니다.",
      sourceNote: "ERTY KOREA Product Guide 기준"
    },
    {
      type: "beforeAfter",
      title: "피부 자극과 홍조로 들뜬 피부결 사용 예시",
      summary:
        "전제품 소개서에는 피부 자극, 붉은 기, 푸석함이 공존하는 민감상태에 대한 사용 예시가 포함되어 있습니다. 해당 이미지는 반응 예시이며 모든 사용자에게 동일한 결과를 보장하지 않습니다.",
      sourceNote: "브랜드 제공 B&A 예시 자료 기준"
    }
  ],

  howToUse: {
    steps: [
      "세안 후 토너와 앰플로 피부결을 정돈합니다.",
      "적당량을 덜어 얼굴과 목 전체에 부드럽게 펴 바릅니다.",
      "피부가 예민하거나 건조한 부위에는 손바닥으로 눌러 흡수시킵니다.",
      "필링 후, 건조함이 심한 시기, 외부 자극으로 피부가 예민한 시기에는 소량을 한 번 더 레이어링할 수 있습니다.",
      "아침 루틴에 사용할 경우 마지막 단계에서 자외선 차단제를 함께 사용하는 것을 권장합니다."
    ],
    frequency:
      "아침과 저녁 크림 단계에서 사용할 수 있습니다. 피부가 극도로 예민한 시기에는 소량부터 사용해 피부 반응을 확인하십시오.",
    cautions: [
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "눈가와 입가 등 예민한 부위는 사용량을 조절하십시오.",
      "필링 직후 사용하는 경우 피부 상태에 따라 사용량과 빈도를 조절하십시오.",
      "브랜드 제공 테스트 자료가 모든 사용자에게 동일한 결과를 보장하지는 않습니다."
    ]
  },

  routines: [
    {
      title: "37 크림 + 25 앰플",
      products: ["intensive-cellular-er-cream-37", "concentrated-booster-skin-hydrating-25"],
      useCase: "고보습 & 장벽 집중 케어 루틴",
      recommendedFor: [
        "건조함이 반복되는 피부",
        "속건조와 당김이 심한 피부",
        "장벽 컨디션이 약해 수분 유지가 어려운 피부"
      ]
    },
    {
      title: "37 크림 + 35 앰플",
      products: ["intensive-cellular-er-cream-37", "concentrated-booster-skin-revitalizing-35"],
      useCase: "피부 컨디션 리셋 & 리바이탈라이징 루틴",
      recommendedFor: [
        "자극 후 컨디션 회복이 필요한 피부",
        "붉어 보임과 피부 피로감이 함께 느껴지는 피부",
        "장벽 컨디션 약화가 느껴지는 피부"
      ]
    },
    {
      title: "37 크림 + 55 앰플",
      products: ["intensive-cellular-er-cream-37", "concentrated-booster-skin-brightening-55"],
      useCase: "톤 & 광채 업 리커버리 루틴",
      recommendedFor: [
        "칙칙함과 피부 톤 불균형이 고민인 피부",
        "계절 변화와 환경 자극으로 생기 없어 보이는 피부",
        "보습막과 브라이트닝 루틴을 함께 원하는 피부"
      ]
    },
    {
      title: "37 크림 + 57 크림",
      products: ["intensive-cellular-er-cream-37", "melaway-brightening-cream-57"],
      useCase: "장벽 컨디션 & 브라이트닝 영양 듀얼 루틴",
      recommendedFor: [
        "계절 변화로 쉽게 예민해지는 피부",
        "약한 장벽 컨디션과 칙칙함이 함께 느껴지는 피부",
        "영양감 있는 크림 루틴을 선호하는 피부"
      ]
    },
    {
      title: "15 앰플 + 37 크림",
      products: ["concentrated-booster-skin-balancing-15", "intensive-cellular-er-cream-37"],
      useCase: "밸런싱 후 장벽 안정 루틴",
      recommendedFor: [
        "유수분 밸런스가 무너진 예민 피부",
        "피지와 건조가 동시에 느껴지는 피부",
        "산뜻한 앰플 후 편안한 마무리 크림이 필요한 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 37 인텐시브 셀룰러 ER 크림은 어떤 제품인가요?",
      answer:
        "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드를 중심으로 건조하고 예민해진 피부의 장벽 컨디션과 보습감을 보조하는 Revitalizing Line 37번 크림입니다."
    },
    {
      question: "민감피부도 사용할 수 있나요?",
      answer:
        "전제품 소개서 기준 예민한 피부와 필링 후 케어가 필요한 피부에 추천되는 제품입니다. 다만 피부가 극도로 예민한 시기에는 소량부터 사용해 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "필링 후 사용해도 되나요?",
      answer:
        "브랜드 자료에서는 필링 후 케어 맥락을 제시합니다. 필링 후에는 피부 상태에 따라 사용량을 조절하고, 따가움이나 붉어짐이 지속되면 사용을 중단하십시오."
    },
    {
      question: "SLP Complex는 어떤 역할을 하나요?",
      answer:
        "SLP Complex는 5종 세라마이드, 피토스핑고신, 콜레스테롤을 중심으로 한 피부 지질 유사 성분축입니다. 공개 PDP에서는 피부 장벽 컨디션과 보습막을 보조하는 세컨드 스킨 성분축으로 설명합니다."
    },
    {
      question: "20ml와 45ml의 차이는 무엇인가요?",
      answer:
        "제공 자료 기준 동일한 37 인텐시브 셀룰러 ER 크림의 용량 variant로 처리합니다. 휴대와 집중 사용에는 20ml, 데일리 홈케어와 장기 사용에는 45ml 구성이 적합합니다."
    },
    {
      question: "이 제품은 톤업 크림인가요?",
      answer:
        "자료상 간단한 커버 UP과 톤업 기능 문맥이 있으나, PDP에서는 미백 보장 제품이 아니라 피부를 맑고 균일한 인상으로 가꾸고 은은한 톤 보정감을 남기는 크림으로 설명합니다."
    },
    {
      question: "어떤 앰플과 함께 쓰면 좋나요?",
      answer:
        "고보습 장벽 루틴에는 25 앰플, 리바이탈라이징 루틴에는 35 앰플, 톤과 광채 루틴에는 55 앰플, 브라이트닝 영양 루틴에는 57 크림과의 조합이 제안됩니다."
    },
    {
      question: "임상 수치가 모든 피부에 동일하게 적용되나요?",
      answer:
        "아니요. 브랜드 제공 시험 그래프와 B&A 이미지는 특정 조건의 자료이며, 개인의 피부 상태와 사용 환경에 따라 결과와 사용감은 달라질 수 있습니다."
    }
  ],

  relatedProducts: [
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-revitalizing-35",
    "concentrated-booster-skin-brightening-55",
    "melaway-brightening-cream-57",
    "concentrated-booster-skin-balancing-15",
    "perfect-soothing-solution-1"
  ],

  claims: {
    allowed: [
      "피부 장벽 컨디션 케어에 도움",
      "건조하고 예민해진 피부를 편안하게 유지하는 데 도움",
      "피부에 촉촉한 보습감을 부여하는 데 도움",
      "탄력감이 부족해 보이는 피부 컨디션 케어",
      "칙칙해 보이는 피부를 맑고 생기 있는 인상으로 가꾸는 데 도움",
      "20ml / 45ml 구성",
      "Revitalizing Line 37번 크림",
      "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드 소구",
      "브랜드 제공 자료 기준 장벽·붉은기·피부색 밝기 관련 시험 그래프 보유"
    ],
    avoid: [
      "피부 장벽 치료",
      "장벽 이식",
      "상처 치유",
      "염증 치료",
      "홍조 치료",
      "피부 재생 치료",
      "피부 수명 연장 보장",
      "주름 제거",
      "미백 보장",
      "피부과 시술 대체",
      "레이저 후 회복 치료",
      "100% 개선",
      "무조건 무자극",
      "임상 수치 보장형 표현"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시, 리뷰, 브랜드 제공 시험 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const intensiveCellularErCream37SchemaHints = {
  schemaType: "ProductGroup",
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/intensive-cellular-er-cream-37/`,
  productGroupID: "intensive-cellular-er-cream-37",
  variesBy: ["https://schema.org/size"],
  variantStrategy: "Use one canonical PDP with 20ml and 45ml variants under ProductGroup.",
  breadcrumb: [
    { name: "Home", item: SEO_GEO_BASE_URL },
    { name: "Products", item: `${SEO_GEO_BASE_URL}/products` },
    {
      name: "37 Intensive Cellular ER Cream",
      item: `${SEO_GEO_BASE_URL}/products/intensive-cellular-er-cream-37/`
    }
  ],
  faqPage: {
    useVisibleFaqOnly: true,
    source: "intensiveCellularErCream37.faq"
  },
  productJsonLd: {
    useProductGroup: true,
    useVariants: true,
    doNotAddPriceUntilCommerceConnected: true,
    doNotAddAvailabilityUntilCommerceConnected: true,
    brandName: "ERTY",
    category: "Skincare > Cream > Revitalizing Barrier Cream"
  },
  caution:
    "Keep barrier, regeneration, anti-inflammatory, wound-healing, redness, clinical, wrinkle, whitening, and post-procedure claims cosmetic-safe. Do not encode guaranteed clinical outcomes or therapeutic claims in JSON-LD or visible PDP copy."
} as const;

export const intensiveCellularErCream37MerchantFeedDraft = {
  itemGroupId: "intensive-cellular-er-cream-37",
  brand: "ERTY",
  productType: "Cosmetics > Skincare > Cream > Revitalizing Barrier Cream",
  googleProductCategory: "Health & Beauty > Personal Care > Cosmetics > Skin Care",
  condition: "new",
  variants: [
    {
      id: "ERTY-ICER37-20ML",
      title: "에르띠 37 인텐시브 셀룰러 ER 크림 20ml",
      description:
        "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드를 중심으로 건조하고 예민해진 피부의 보습감과 장벽 컨디션을 보조하는 리바이탈라이징 크림.",
      link: `${SEO_GEO_BASE_URL}/products/intensive-cellular-er-cream-37/?variant=20ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-20ml-product.webp`,
      size: "20ml"
    },
    {
      id: "ERTY-ICER37-45ML",
      title: "에르띠 37 인텐시브 셀룰러 ER 크림 45ml",
      description:
        "SLP Complex, 5종 세라마이드, 피토스핑고신, 콜레스테롤, 95% 마데카소사이드를 중심으로 건조하고 예민해진 피부의 보습감과 장벽 컨디션을 보조하는 리바이탈라이징 크림.",
      link: `${SEO_GEO_BASE_URL}/products/intensive-cellular-er-cream-37/?variant=45ml`,
      imageLink: `${SEO_GEO_BASE_URL}/images/products/intensive-cellular-er-cream-37/intensive-cellular-er-cream-37-45ml-product.webp`,
      size: "45ml"
    }
  ],
  omittedUntilCommerceConnected: ["price", "sale_price", "availability", "shipping", "return_policy"]
} as const;

export const intensiveCellularErCream37CodexHandoff = {
  targetFile: "src/data/products/intensive-cellular-er-cream-37.ts",
  route: "/products/intensive-cellular-er-cream-37/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/intensive-cellular-er-cream-37/`,
  registerExport: "intensiveCellularErCream37",
  tasks: [
    "Move or copy the ProductPdpData export into the target file.",
    "Register intensiveCellularErCream37 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 37 인텐시브 셀룰러 ER 크림.",
    "Render AI Summary directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Treat 20ml and 45ml as variants under one ProductGroup.",
    "Do not create separate canonical PDPs for each volume unless commerce strategy requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants.",
    "Use image alt mapping from intensiveCellularErCream37ImageAlt.",
    "Keep barrier, regeneration, wound-healing, anti-inflammatory, redness, wrinkle, whitening, clinical, and post-procedure claims cosmetic-safe.",
    "Do not encode clinical percentages as guaranteed fixed outcomes.",
    "Do not use www.ertykorea.com as canonical.",
    "Use https://ertyofficial.com as the only SEO/GEO canonical base domain."
  ],
  qaChecklist: [
    "Canonical URL uses https://ertyofficial.com/products/intensive-cellular-er-cream-37.",
    "No price or availability appears in JSON-LD until commerce data is connected.",
    "20ml and 45ml variants are visible in PDP and ProductGroup JSON-LD.",
    "The product is not mislabeled as 37 Renewal; renewal images are supporting visual assets, not the canonical product name.",
    "Clinical percentages are shown only as brand-provided evidence and not as guaranteed product outcomes.",
    "Barrier, wound-healing, anti-inflammatory, regeneration, redness, whitening, and wrinkle claims are framed as cosmetic-safe conditioning claims.",
    "FAQ content is visible on the page before FAQPage schema is generated.",
    "All important product content is rendered as HTML text, not only inside detail-page images."
  ]
} as const;

export default intensiveCellularErCream37;
