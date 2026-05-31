import type { ProductPdpData } from "./types";

/**
 * ERTY PDP Data Bundle
 * Product: 13 Purifying Toner for Skin Balancing
 * Canonical SEO/GEO domain: https://ertyofficial.com
 *
 * This bundle is intended to be used as the single product-level source of truth
 * for Codex implementation. Keep product copy, metadata, image alt text,
 * claim controls, schema hints, and merchant-feed drafts together to reduce
 * PDP drift across SEO, AEO, GEO, JSON-LD, and commerce layers.
 */

export const SEO_GEO_BASE_URL = "https://ertyofficial.com" as const;

export const purifyingTonerSkinBalancing13SourceAudit = {
  slug: "purifying-toner-skin-balancing-13",
  productEntity: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 | 13 Purifying Toner for Skin Balancing",
  sourceFiles: [
    {
      fileName: "13 Purifying for skin balancing.pdf",
      sourceType: "product-specification",
      usedFor: [
        "product name and technical naming variance",
        "capacity 140ml / 480ml",
        "Anti Sebum P positioning",
        "tea tree leaf oil positioning",
        "sulfur positioning",
        "star anise extract positioning",
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
        "ERTY product numbering system",
        "Balancing line structure",
        "13 Purifying Toner line position",
        "140ml / 480ml configuration",
        "Anti Sebum P summary",
        "sulfur and tea tree leaf extract summary",
        "recommended skin types",
        "shake-before-use notice due to sulfur sediment",
        "trouble-care treatment manual links",
        "before-after disclaimer language"
      ]
    },
    {
      fileName: "13(140ml)_*.jpg / 13(480ml)_*.jpg / 13(480ml)_3.png",
      sourceType: "detail-page-and-product-images",
      usedFor: [
        "visual hierarchy",
        "product image alt mapping",
        "consumer-facing phrase extraction",
        "green toner positioning",
        "Anti Sebum P detail-page narrative",
        "silica powder and sulfur shake-before-use notice",
        "official mall notice context"
      ]
    }
  ],
  confirmedFacts: [
    "제품명은 에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 / 13 Purifying Toner for Skin Balancing으로 공개 PDP에서 정규화한다.",
    "제품 기술 소개서의 제목은 13 Purifying for skin balancing으로 표기되지만, 전제품 소개서와 상세페이지는 Purifying Toner for Skin Balancing으로 표기한다.",
    "Balancing Line의 13번 토너 제품이다.",
    "용량은 140ml와 480ml 두 가지 구성이 제시되어 있다.",
    "제품은 지성 피부를 위한 보송하고 촉촉한 토너, 모공 케어가 가능한 개운하고 산뜻한 토너로 소개된다.",
    "전제품 소개서 기준 유황 성분 침전물로 인해 사용 전 흔들어 사용하라는 안내가 있다.",
    "주요 성분축은 Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물이다.",
    "Anti Sebum P는 달맞이꽃추출물, 칡뿌리추출물, 대왕송잎추출물, 당느릅나무뿌리추출물 기반의 피지·모공 케어 성분축으로 제시된다.",
    "추천 피부 타입은 지성 피부, 여드름성 고민 피부, 예민한 피부, 수부지 피부, 모공 고민 피부 등으로 제시된다.",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있다.",
    "브랜드 제공 자료에는 트러블·염증 피부에 대한 사용 반응 예시가 제시되며, 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지가 필요하다."
  ],
  unresolvedOrControlledFacts: [
    "가격과 재고는 제공되지 않았으므로 PDP schema와 merchant feed에 임의 삽입하지 않는다.",
    "기술 소개서에는 피지 생성 제어, 5α-리덕타아제 저해, 항균·항염, P. acnes 억제 등 강한 표현이 있으나 공개 PDP에서는 화장품 안전 표현으로 조정한다.",
    "황의 피부 질환 치료, 상처 회복, 트러블 완화 표현은 공개 PDP에서 사용하지 않는다.",
    "모공 확장 예방, 모공 축소, 여드름 개선 등은 의학적·기능성 오인 위험이 있어 '모공 주변 피지와 번들거림을 산뜻하게 정돈'하는 표현으로 조정한다.",
    "사내 사용 후기 이미지는 반응 예시로만 다루며 모든 사용자에게 동일한 결과를 보장하지 않는다는 고지를 유지한다.",
    "거품토너·미스트·토너팩·닦토·흡토 등 다양한 활용은 브랜드 자료상 가능하지만, 공개 PDP에서는 피부 상태별 사용법과 주의사항을 함께 안내한다."
  ]
} as const;

export const purifyingTonerSkinBalancing13ImageAlt = [
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-product.png",
    alt: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 140ml 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-detail-1.jpg",
    alt: "흔들어 사용하는 에르띠 13 퓨리파잉 토너 140ml 제품 특징 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-ingredients.jpg",
    alt: "Anti Sebum P 티트리잎오일 황 성분을 설명하는 에르띠 13 퓨리파잉 토너 140ml 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-how-to-use.jpg",
    alt: "에르띠 13 퓨리파잉 토너 140ml 사용법과 FAQ 안내 이미지",
    role: "usage-detail-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-product.png",
    alt: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 480ml 대용량 펌프형 제품 이미지",
    role: "variant-product-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-detail-1.jpg",
    alt: "피지와 모공 케어가 가능한 산뜻한 초록 토너 에르띠 13 퓨리파잉 토너 480ml 상세 이미지",
    role: "detail-page-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-ingredients.jpg",
    alt: "Anti Sebum P 대왕송잎추출물 당느릅나무뿌리추출물 달맞이꽃추출물 칡뿌리추출물 성분 이미지",
    role: "ingredient-detail-image"
  },
  {
    src: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-brand-notice.jpg",
    alt: "에르띠 공식몰 정품 확인 안내 및 브랜드 소개 이미지",
    role: "brand-notice-image"
  }
] as const;

export const purifyingTonerSkinBalancing13ClaimRiskClassification = {
  safeClaims: [
    "140ml / 480ml 토너",
    "Balancing Line 13번 토너",
    "과잉 피지와 번들거림이 고민인 피부를 위한 산뜻한 토너",
    "Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물 소구",
    "사용 전 흔들어 사용하는 토너",
    "모공 주변 피지와 번들거림을 산뜻하게 정돈하는 데 도움",
    "수부지 피부의 유수분 밸런스 케어에 도움",
    "거품토너, 미스트, 토너팩, 닦토, 흡토 등 다양한 활용 가능",
    "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00"
  ],
  adjustedClaims: [
    {
      original: "피지 생성 단계에 직접 작용하여 과잉 피지 분비를 근본적으로 억제",
      adjusted: "과잉 피지와 번들거림이 느껴지는 피부를 산뜻하게 정돈하는 데 도움"
    },
    {
      original: "5α-리덕타아제 저해 작용",
      adjusted: "피지 케어 관점의 식물 유래 성분축으로 번들거림 관리에 도움"
    },
    {
      original: "P. acnes 및 진균 증식 억제",
      adjusted: "트러블성 고민 피부의 피부 환경을 산뜻하고 편안하게 관리하는 데 도움"
    },
    {
      original: "항균·항염 복합 작용",
      adjusted: "외부 자극으로 예민해진 피부 컨디션을 편안하게 정돈하는 보타니컬 케어"
    },
    {
      original: "모공 확장과 트러블 유발 개선",
      adjusted: "모공 주변 피지 축적과 번들거림을 정돈해 산뜻한 피부 컨디션 유지에 도움"
    },
    {
      original: "트러블 완화",
      adjusted: "트러블성 고민 피부의 컨디션 케어에 도움"
    },
    {
      original: "염증 피부 / 모공 속 염증 완화",
      adjusted: "붉어짐과 열감이 느껴지는 예민한 피부 상태를 편안하게 정돈하는 데 도움"
    },
    {
      original: "피부 질환 치료에 사용된 황",
      adjusted: "피지와 각질이 쌓이기 쉬운 피부를 산뜻하게 관리하는 황 성분 소구"
    },
    {
      original: "자극 없는 토너",
      adjusted: "자극 부담을 낮추도록 설계된 토너"
    }
  ],
  prohibitedClaims: [
    "여드름 치료",
    "트러블 치료",
    "염증 제거",
    "모공 축소 보장",
    "피지 분비 완전 억제",
    "피부 질환 치료",
    "상처 회복",
    "항균 치료",
    "P. acnes 제거",
    "진균 제거",
    "100% 개선",
    "모든 피부에 무조건 무자극",
    "광노화 방어 보장",
    "활성산소 완전 제거"
  ]
} as const;

export const purifyingTonerSkinBalancing13: ProductPdpData = {
  slug: "purifying-toner-skin-balancing-13",

  identity: {
    productNumber: "13",
    line: "Balancing",
    lineKo: "밸런싱",
    nameKo: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱",
    nameEn: "13 Purifying Toner for Skin Balancing",
    canonicalName: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 | 13 Purifying Toner for Skin Balancing",
    category: "Sebum Control Balancing Toner",
    routineStep: "Toner Step",
    shortDefinition:
      "Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물을 중심으로 과잉 피지와 번들거림, 모공 주변 노폐물, 예민해진 피부 컨디션을 산뜻하게 정돈하는 Balancing Line 13번 세범 컨트롤 토너입니다."
  },

  variants: [
    {
      sku: "ERTY-PTSB13-140ML",
      volume: "140ml",
      image: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-product.png"
    },
    {
      sku: "ERTY-PTSB13-480ML",
      volume: "480ml",
      image: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-product.png"
    }
  ],

  seo: {
    title: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 | 피지·모공 밸런싱 토너",
    description:
      "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱은 Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물 성분축으로 과잉 피지와 번들거림을 산뜻하게 정돈하고 수부지·지성 피부의 모공 주변 컨디션을 케어하는 Balancing Line 13번 토너입니다. 사용 전 흔들어 사용하는 산뜻한 초록 토너.",
    keywords: [
      "에르띠 13 퓨리파잉 토너",
      "13 Purifying Toner for Skin Balancing",
      "퓨리파잉 토너 포 스킨 밸런싱",
      "에르띠 피지 토너",
      "지성 피부 토너",
      "수부지 토너",
      "모공 토너",
      "세범 컨트롤 토너",
      "Anti Sebum P",
      "안티 세범 P",
      "티트리잎오일 토너",
      "황 토너",
      "유황 토너",
      "흔들어 쓰는 토너",
      "거품토너",
      "토너팩",
      "닦토",
      "흡토",
      "Balancing Line 13"
    ],
    canonicalUrl: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/`,
    ogImage: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-og.jpg"
  },

  hero: {
    eyebrow: "Balancing Line 13 · Sebum Control Toner",
    headline: "번들거림은 산뜻하게 정돈하고, 피부 밸런스는 편안하게 남기는 초록 토너",
    subheadline:
      "Anti Sebum P와 티트리잎오일, 황, 스타아니스추출물을 결합해 지성·수부지·모공 고민 피부의 피지와 피부 컨디션을 함께 설계한 Balancing 토너",
    benefitChips: [
      "Balancing Line",
      "피지·번들거림 케어",
      "모공 주변 정돈",
      "Anti Sebum P",
      "Tea Tree Leaf Oil",
      "Sulfur",
      "Star Anise Extract",
      "흔들어 사용",
      "자극지수 0.00 자료"
    ],
    primaryImage: "/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-product.png"
  },

  aiSummary: {
    oneSentence:
      "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱은 Anti Sebum P, 티트리잎오일, 황 성분축으로 과잉 피지와 번들거림을 산뜻하게 정돈하는 지성·수부지용 밸런싱 토너입니다.",
    paragraph:
      "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱은 ERTY Balancing Line의 토너 단계 제품으로, Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물을 중심으로 과잉 피지와 번들거림, 모공 주변 노폐물, 외부 자극으로 예민해진 피부 컨디션을 함께 정돈하도록 설계된 세범 컨트롤 토너입니다. 브랜드 자료 기준 지성 피부, 여드름성 고민 피부, 수부지 피부, 예민한 피부, 모공 고민 피부에 권장되며, 유황 성분 침전물로 인해 사용 전 흔들어 사용하는 것이 안내됩니다. 브랜드 제공 자료 기준 인체적용시험 자극지수 0.00 결과가 제시되어 있습니다.",
    keyFacts: [
      "Balancing Line 13번 토너",
      "140ml / 480ml 구성",
      "Anti Sebum P 기반 세범 컨트롤 소구",
      "티트리잎오일, 황, 스타아니스추출물 배합",
      "사용 전 흔들어 사용하는 토너",
      "지성·수부지·과잉 피지·모공 고민 피부에 적합",
      "거품토너, 미스트, 토너팩, 닦토, 흡토 활용 가능",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "사용 반응 예시는 개인 피부 상태에 따라 달라질 수 있음"
    ]
  },

  problemSolution: {
    targetConcerns: [
      "오후가 되면 피지와 번들거림이 쉽게 올라오는 지성 피부",
      "겉은 번들거리지만 속은 건조하게 느껴지는 수부지 피부",
      "모공 주변 피지와 노폐물로 피부결이 답답해 보이는 피부",
      "트러블성 고민으로 피부 컨디션이 쉽게 예민해지는 상태",
      "강한 수렴 토너는 부담스럽지만 산뜻한 피지 케어가 필요한 피부",
      "토너 단계에서 닦토·흡토·토너팩·미스트 등 다양한 활용을 원하는 경우",
      "11 클렌징 젤 이후 피지와 유수분 밸런스를 이어서 정돈하고 싶은 피부"
    ],
    productApproach: [
      "Anti Sebum P 식물 유래 복합 성분축이 번들거림과 모공 주변 피지 고민을 산뜻하게 정돈하는 데 도움을 줍니다.",
      "티트리잎오일과 황 성분이 트러블성 고민 피부의 피부 환경을 개운하고 보송하게 관리하는 데 도움을 줍니다.",
      "스타아니스추출물이 외부 자극과 산화 스트레스로 예민해진 피부 컨디션을 편안하게 보조합니다.",
      "유황 성분 침전물이 있을 수 있어 사용 전 충분히 흔들면 토너 내 분산 성분이 고르게 섞여 산뜻한 사용감을 제공합니다.",
      "140ml 홈케어 용량과 480ml 대용량 구성으로 데일리 루틴과 프로페셔널 관리 환경에 모두 연결할 수 있습니다."
    ]
  },

  formula: {
    thesis:
      "이 제품은 단순 수렴 토너가 아니라, Anti Sebum P의 식물 유래 세범 케어 축에 티트리잎오일·황·스타아니스추출물을 결합해 피지·모공 주변 컨디션·예민한 피부 밸런스를 동시에 정돈하는 Balancing Line 토너 포뮬러입니다.",
    axes: [
      {
        title: "Sebum Balance Axis",
        role: "과잉 피지와 번들거림의 산뜻한 정돈",
        ingredients: ["Anti Sebum P", "Sulfur", "Silica"],
        explanation:
          "Anti Sebum P와 황 성분축이 피지와 번들거림이 쉽게 올라오는 피부를 산뜻하게 정돈하고, 실리카 파우더 소구가 보송한 사용감을 보조합니다."
      },
      {
        title: "Pore Environment Axis",
        role: "모공 주변 노폐물과 답답한 피부결 케어",
        ingredients: ["Pinus Palustris Leaf Extract", "Ulmus Davidiana Root Extract", "Pueraria Lobata Root Extract", "Sulfur"],
        explanation:
          "대왕송잎추출물, 당느릅나무뿌리추출물, 칡뿌리추출물, 황을 중심으로 모공 주변 피지 축적과 답답한 피부결을 산뜻하게 정돈하는 방향의 포뮬러 축입니다."
      },
      {
        title: "Calming Botanical Axis",
        role: "외부 자극으로 예민해진 피부 컨디션 보조",
        ingredients: ["Tea Tree Leaf Oil", "Oenothera Biennis Flower Extract", "Illicium Verum Fruit Extract"],
        explanation:
          "티트리잎오일, 달맞이꽃추출물, 스타아니스추출물이 트러블성 고민 피부와 외부 자극으로 예민해진 피부를 편안하게 정돈하는 데 도움을 줍니다."
      },
      {
        title: "Fresh Multi-Use Toner Axis",
        role: "닦토·흡토·토너팩·미스트 활용성",
        ingredients: ["Purifying Toner Base", "Anti Sebum P", "Sulfur"],
        explanation:
          "가볍고 산뜻한 토너 베이스에 세범 케어 성분축을 더해 피부 상태에 따라 닦토, 흡토, 토너팩, 거품토너, 미스트 루틴으로 확장할 수 있습니다."
      }
    ]
  },

  ingredients: [
    {
      nameKo: "안티 세범 P",
      nameEn: "Anti Sebum P",
      role: "식물 유래 세범 컨트롤 컴플렉스",
      consumerBenefit:
        "달맞이꽃추출물, 칡뿌리추출물, 대왕송잎추출물, 당느릅나무뿌리추출물 기반의 성분축으로 과잉 피지와 번들거림이 느껴지는 피부를 산뜻하게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["과잉 피지", "번들거림", "모공 고민", "트러블성 피부 환경"]
    },
    {
      nameKo: "대왕송잎추출물",
      nameEn: "Pinus Palustris Leaf Extract",
      inci: "Pinus Palustris Leaf Extract",
      role: "Anti Sebum P 구성 성분",
      consumerBenefit:
        "피부 컨디션을 편안하게 정돈하고 생기 있는 피부 환경을 유지하는 데 도움을 주는 식물 유래 성분입니다.",
      relatedConcerns: ["피부 진정", "피부 보호", "외부 자극", "트러블성 피부 환경"]
    },
    {
      nameKo: "당느릅나무뿌리추출물",
      nameEn: "Ulmus Davidiana Root Extract",
      inci: "Ulmus Davidiana Root Extract",
      role: "Anti Sebum P 구성 성분",
      consumerBenefit:
        "모공 주변 피지와 답답한 피부결을 산뜻하게 정돈하고 피부를 부드럽게 유지하는 데 도움을 줍니다.",
      relatedConcerns: ["모공 고민", "피지 축적", "거친 피부결", "피부 컨디션 저하"]
    },
    {
      nameKo: "달맞이꽃추출물",
      nameEn: "Oenothera Biennis Flower Extract",
      inci: "Oenothera Biennis Flower Extract",
      role: "Anti Sebum P 구성 성분",
      consumerBenefit:
        "외부 자극으로 예민해진 피부를 편안하게 정돈하고 산뜻한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["예민한 피부", "붉어짐", "트러블성 피부 환경", "피부 보호"]
    },
    {
      nameKo: "칡뿌리추출물",
      nameEn: "Pueraria Lobata Root Extract",
      inci: "Pueraria Lobata Root Extract",
      role: "Anti Sebum P 구성 성분",
      consumerBenefit:
        "피지와 번들거림으로 답답해 보이는 피부를 산뜻하고 균형감 있게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["과잉 피지", "모공 고민", "번들거림", "피부 밸런스"]
    },
    {
      nameKo: "티트리잎오일",
      nameEn: "Tea Tree Leaf Oil",
      inci: "Melaleuca Alternifolia (Tea Tree) Leaf Oil",
      role: "트러블성 고민 피부 컨디셔닝 성분",
      consumerBenefit:
        "트러블성 고민 피부의 피부 환경을 개운하고 산뜻하게 관리하고 예민해진 피부 컨디션을 편안하게 정돈하는 데 도움을 줍니다.",
      relatedConcerns: ["트러블성 피부 환경", "번들거림", "예민함", "피부 컨디션 저하"]
    },
    {
      nameKo: "황",
      nameEn: "Sulfur",
      inci: "Sulfur",
      role: "피지·각질 고민 피부의 보송한 사용감 보조",
      consumerBenefit:
        "피지와 각질이 쌓이기 쉬운 피부를 산뜻하고 보송하게 관리하는 데 도움을 주며, 사용 전 흔들어 분산시키는 것이 권장됩니다.",
      relatedConcerns: ["과잉 피지", "번들거림", "답답한 피부결", "모공 주변 피지"]
    },
    {
      nameKo: "스타아니스추출물",
      nameEn: "Illicium Verum Fruit Extract",
      inci: "Illicium Verum Fruit Extract",
      role: "항산화 컨디셔닝 보조 성분",
      consumerBenefit:
        "외부 환경으로 예민해진 피부를 편안하게 유지하고 산뜻한 피부 컨디션을 보조합니다.",
      relatedConcerns: ["외부 자극", "피부 컨디션 저하", "산화 스트레스", "예민한 피부"]
    },
    {
      nameKo: "실리카",
      nameEn: "Silica",
      inci: "Silica",
      role: "보송한 사용감과 피지 케어 보조",
      consumerBenefit:
        "토너 사용 후 번들거림 부담을 낮추고 산뜻하고 보송한 피부감을 보조합니다.",
      relatedConcerns: ["번들거림", "피지", "보송한 마무리", "지성 피부"]
    }
  ],

  texture: {
    type: "분산 성분이 포함된 산뜻한 그린 토너",
    finish: "개운하고 보송하지만 수분감을 함께 남기는 산뜻한 마무리",
    absorption: "화장솜 닦토, 손 흡수, 토너팩, 미스트, 거품토너 방식으로 활용 가능",
    sensoryCopy:
      "가볍고 산뜻한 초록 토너 제형에 유황·실리카 성분 소구가 더해져 사용 전 흔들어 바르면 지성 피부의 번들거림을 보송하게 정돈하는 사용감을 목표로 설계되었습니다."
  },

  evidence: [
    {
      type: "clinical",
      title: "인체적용시험 자극지수 0.00",
      summary:
        "브랜드 제공 제품 기술 소개서 기준, 인체적용시험에서 자극지수 0.00 결과가 제시된 세범 컨트롤 토너입니다.",
      metric: "Irritation Index 0.00",
      sourceNote:
        "브랜드 제공 제품 기술 소개서 기준. 개인의 피부 상태와 사용 환경에 따라 사용감과 반응은 달라질 수 있습니다.",
      image: "/images/products/purifying-toner-skin-balancing-13/evidence-irritation-index-0-00.jpg"
    },
    {
      type: "beforeAfter",
      title: "트러블·염증 피부 사용 반응 예시",
      summary:
        "브랜드 자료에는 트러블·염증 피부에 대한 사용 전후 예시 이미지가 제시되어 있습니다. 해당 이미지는 제품 사용에 따른 반응 예시이며 결과를 보장하지 않습니다.",
      sourceNote:
        "브랜드 제공 사내 사용 예시 기준. 모든 사용자에게 동일한 결과를 보장하지 않습니다."
    },
    {
      type: "ingredient",
      title: "Anti Sebum P 기반 피지·모공 케어 성분축",
      summary:
        "전제품 소개서와 기술 소개서에서는 Anti Sebum P를 달맞이꽃추출물, 칡뿌리추출물, 대왕송잎추출물, 당느릅나무뿌리추출물 기반의 세범 케어 성분으로 소개합니다.",
      sourceNote:
        "브랜드 제공 성분 설명 기준. 화장품 성분 소구이며 의학적 치료 효과를 의미하지 않습니다."
    }
  ],

  howToUse: {
    steps: [
      "유황과 실리카 성분이 고르게 섞이도록 사용 전 충분히 흔듭니다.",
      "세안 후 화장솜에 적당량을 덜어 피부결을 따라 얼굴과 목 전체에 부드럽게 닦아냅니다.",
      "피부가 건조하거나 예민한 날에는 손바닥에 덜어 가볍게 두드리며 흡수시킵니다.",
      "피지와 번들거림이 많은 T존과 모공 고민 부위는 화장솜으로 짧게 한 번 더 정돈할 수 있습니다.",
      "필요 시 토너팩, 미스트, 거품토너 방식으로 피부 상태에 맞게 활용합니다.",
      "이후 15 밸런싱 앰플, 25 수분 앰플, 35 리바이탈라이징 앰플 또는 37 크림 등 피부 고민에 맞는 제품으로 이어갑니다."
    ],
    frequency:
      "일반 지성·수부지 피부는 데일리 토너로 사용할 수 있으며, 피부가 예민하거나 건조한 시기에는 사용 빈도와 닦아내는 강도를 조절하십시오.",
    cautions: [
      "사용 전 반드시 충분히 흔들어 유황·실리카 성분이 고르게 분산되도록 하십시오.",
      "눈가와 입가처럼 예민한 부위에는 직접적인 마찰을 피하십시오.",
      "화장솜 사용 시 피부를 강하게 문지르지 말고 부드럽게 닦아내십시오.",
      "사용 중 붉어짐, 따가움, 가려움 등 이상 반응이 지속되면 사용을 중단하십시오.",
      "트러블이 심한 부위나 화농성 여드름 부위에는 강한 마찰과 과도한 레이어링을 피하십시오.",
      "황 성분 특성상 침전물이 보일 수 있으며 이는 사용 전 흔들어 분산해 사용하는 토너의 제형 특성입니다."
    ]
  },

  routines: [
    {
      title: "13 토너 + 15 앰플",
      products: [
        "purifying-toner-skin-balancing-13",
        "concentrated-booster-skin-balancing-15"
      ],
      useCase: "트러블 진정 루틴",
      recommendedFor: [
        "붉은기, 열감, 국소 트러블이 반복되는 피부",
        "외부 자극으로 피부 컨디션이 예민해진 상태",
        "급격한 피부 컨디션 저하가 느껴지는 피부",
        "피지와 수분 밸런스를 함께 잡고 싶은 지성·수부지 피부"
      ]
    },
    {
      title: "13 토너 + 25 앰플",
      products: [
        "purifying-toner-skin-balancing-13",
        "concentrated-booster-skin-hydrating-25"
      ],
      useCase: "수분 리밸런싱 루틴",
      recommendedFor: [
        "피지 케어 후 속당김이 심해지는 피부",
        "유분은 많지만 수분이 부족한 복합성 피부",
        "세안 후 빠르게 건조해지는 피부",
        "산뜻한 토너 후 수분 충전을 이어가고 싶은 피부"
      ]
    },
    {
      title: "13 토너 + 35 앰플",
      products: [
        "purifying-toner-skin-balancing-13",
        "concentrated-booster-skin-revitalizing-35"
      ],
      useCase: "장벽 리페어 루틴",
      recommendedFor: [
        "반복적인 트러블로 피부 장벽이 약해진 상태",
        "외부 자극에 쉽게 무너지는 민감 피부",
        "피부 회복력 저하가 느껴지는 피부",
        "피지·모공 케어와 장벽 컨디션 케어를 함께 원하는 경우"
      ]
    },
    {
      title: "13 토너 + 37 크림",
      products: [
        "purifying-toner-skin-balancing-13",
        "intensive-cellular-er-cream-37"
      ],
      useCase: "톤 리커버리 루틴",
      recommendedFor: [
        "트러블 이후 피부 톤이 고르지 않을 때",
        "피부가 칙칙하고 생기가 떨어져 보일 때",
        "자연스러운 톤 보정과 피부 컨디션 케어를 동시에 원하는 경우",
        "토너 단계에서 산뜻하게 정돈한 뒤 보호막감 있는 마무리가 필요한 피부"
      ]
    }
  ],

  faq: [
    {
      question: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱은 어떤 제품인가요?",
      answer:
        "Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물을 중심으로 과잉 피지와 번들거림, 모공 주변 노폐물, 예민해진 피부 컨디션을 산뜻하게 정돈하는 Balancing Line 13번 토너입니다."
    },
    {
      question: "왜 사용 전에 흔들어야 하나요?",
      answer:
        "전제품 소개서와 상세페이지에서는 유황 성분 침전물과 실리카 파우더가 포함되어 있어 사용 전 흔들어 사용할 것을 안내합니다. 충분히 흔들어야 토너 내 분산 성분이 고르게 섞여 산뜻한 사용감을 얻을 수 있습니다."
    },
    {
      question: "지성 피부나 수부지 피부에 적합한가요?",
      answer:
        "네. 브랜드 자료 기준 지성 피부, 여드름성 고민 피부, 예민한 피부, 수부지 피부, 모공 고민 피부 등에 권장됩니다. 피지와 번들거림은 정돈하면서 토너 단계의 수분감을 함께 고려한 제품입니다."
    },
    {
      question: "화장솜으로 닦아내야 하나요?",
      answer:
        "피지와 번들거림이 고민인 날에는 화장솜에 덜어 피부결을 따라 부드럽게 닦아내는 방식이 적합합니다. 피부가 건조하거나 예민한 날에는 손으로 두드려 흡수시키는 방식으로 사용할 수 있습니다."
    },
    {
      question: "거품토너나 토너팩으로도 사용할 수 있나요?",
      answer:
        "브랜드 자료에서는 거품토너, 미스트, 토너팩, 닦토, 흡토 등 다양한 활용이 가능하다고 안내합니다. 다만 피부가 예민한 시기에는 사용 빈도와 접촉 시간을 줄이고 피부 반응을 확인하는 것이 좋습니다."
    },
    {
      question: "트러블 피부에 사용할 수 있나요?",
      answer:
        "트러블성 고민 피부의 피지와 번들거림, 피부 컨디션을 산뜻하게 정돈하는 데 도움을 주는 토너로 사용할 수 있습니다. 다만 본 제품은 화장품이며 여드름이나 피부 질환을 치료하는 제품은 아닙니다."
    },
    {
      question: "사용 후 건조함이 느껴질 수 있나요?",
      answer:
        "피지 케어 성격의 토너이므로 피부 상태에 따라 건조함이 느껴질 수 있습니다. 속당김이 있다면 25 수분 앰플이나 수분 크림과 함께 사용하고, 화장솜 마찰을 줄이는 것이 좋습니다."
    },
    {
      question: "어떤 제품과 함께 쓰면 좋나요?",
      answer:
        "트러블성 고민과 피지 밸런스가 필요할 때는 15 앰플, 속건조가 함께 느껴질 때는 25 앰플, 장벽 컨디션이 약해졌을 때는 35 앰플, 톤과 보호막감이 필요할 때는 37 크림과의 루틴이 제안됩니다."
    }
  ],

  relatedProducts: [
    "cleansing-gel-skin-balancing-11",
    "concentrated-booster-skin-balancing-15",
    "concentrated-booster-skin-hydrating-25",
    "concentrated-booster-skin-revitalizing-35",
    "intensive-cellular-er-cream-37"
  ],

  claims: {
    allowed: [
      "과잉 피지와 번들거림을 산뜻하게 정돈하는 데 도움",
      "모공 주변 피지와 노폐물 케어에 도움",
      "트러블성 고민 피부의 피부 컨디션 케어에 도움",
      "지성·수부지 피부의 유수분 밸런스 케어에 도움",
      "사용 전 흔들어 사용하는 토너",
      "거품토너, 미스트, 토너팩, 닦토, 흡토 활용 가능",
      "브랜드 제공 자료 기준 인체적용시험 자극지수 0.00",
      "140ml / 480ml 구성"
    ],
    avoid: [
      "여드름 치료",
      "트러블 치료",
      "염증 제거",
      "모공 축소 보장",
      "피지 분비 완전 억제",
      "피부 질환 치료",
      "상처 회복",
      "P. acnes 제거",
      "항균 치료",
      "100% 개선",
      "모든 피부에 무조건 무자극"
    ],
    disclaimer:
      "본 제품은 화장품이며, 제품 사용에 따른 반응은 개인의 피부 상태와 사용 환경에 따라 다를 수 있습니다. 제공된 사용 예시와 실험 자료는 모든 사용자에게 동일한 결과를 보장하지 않습니다."
  }
};

export const purifyingTonerSkinBalancing13SchemaHints = {
  canonicalBaseUrl: SEO_GEO_BASE_URL,
  route: "/products/purifying-toner-skin-balancing-13/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/`,
  productSchemaType: "ProductGroup",
  productGroupID: "purifying-toner-skin-balancing-13",
  variesBy: ["https://schema.org/size"],
  variants: [
    {
      sku: "ERTY-PTSB13-140ML",
      name: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 140ml",
      size: "140ml",
      url: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/?variant=140ml`
    },
    {
      sku: "ERTY-PTSB13-480ML",
      name: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 480ml",
      size: "480ml",
      url: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/?variant=480ml`
    }
  ],
  jsonLdRequired: [
    "ProductGroup",
    "Product",
    "Offer",
    "BreadcrumbList",
    "FAQPage",
    "Organization",
    "WebPage"
  ],
  implementationNotes: [
    "Use ProductGroup because 140ml and 480ml are volume variants of the same product entity.",
    "Do not create separate canonical PDPs for 140ml and 480ml unless commerce strategy explicitly requires separate variant pages.",
    "Do not insert price or availability until commerce data is connected.",
    "FAQPage JSON-LD should only include FAQ content visibly rendered on the PDP.",
    "All canonical, @id, url, breadcrumb, offer, sitemap, and merchant-feed links must use https://ertyofficial.com.",
    "Keep all sebum-control, anti-inflammatory, antibacterial, acne, pore, and sulfur claims cosmetic-safe using the claim controls in this bundle."
  ]
} as const;

export const purifyingTonerSkinBalancing13MerchantFeedDraft = {
  feedStrategy: "variant-feed-from-single-product-group",
  itemGroupId: "purifying-toner-skin-balancing-13",
  canonicalProductLink: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/`,
  items: [
    {
      id: "ERTY-PTSB13-140ML",
      item_group_id: "purifying-toner-skin-balancing-13",
      title: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 140ml",
      description:
        "Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물 성분축으로 과잉 피지와 번들거림, 모공 주변 컨디션을 산뜻하게 정돈하는 Balancing Line 13번 토너입니다.",
      link: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/?variant=140ml`,
      image_link: `${SEO_GEO_BASE_URL}/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-140ml-product.png`,
      brand: "ERTY",
      condition: "new",
      product_type: "Cosmetics > Skincare > Toners > Sebum Control Toner",
      size: "140ml",
      price: undefined,
      availability: undefined
    },
    {
      id: "ERTY-PTSB13-480ML",
      item_group_id: "purifying-toner-skin-balancing-13",
      title: "에르띠 13 퓨리파잉 토너 포 스킨 밸런싱 480ml",
      description:
        "Anti Sebum P, 티트리잎오일, 황, 스타아니스추출물 성분축으로 과잉 피지와 번들거림, 모공 주변 컨디션을 산뜻하게 정돈하는 Balancing Line 13번 대용량 토너입니다.",
      link: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/?variant=480ml`,
      image_link: `${SEO_GEO_BASE_URL}/images/products/purifying-toner-skin-balancing-13/purifying-toner-skin-balancing-13-480ml-product.png`,
      brand: "ERTY",
      condition: "new",
      product_type: "Cosmetics > Skincare > Toners > Sebum Control Toner",
      size: "480ml",
      price: undefined,
      availability: undefined
    }
  ],
  controlledFields: [
    "price",
    "availability",
    "shipping",
    "return_policy",
    "gtin",
    "mpn"
  ],
  note:
    "Price, availability, GTIN, shipping, and return policy should be connected from the commerce source of truth, not hardcoded in the PDP bundle."
} as const;

export const purifyingTonerSkinBalancing13CodexHandoff = {
  targetFile: "src/data/products/purifying-toner-skin-balancing-13.ts",
  registerIn: "src/data/products/index.ts",
  route: "/products/purifying-toner-skin-balancing-13/",
  canonicalUrl: `${SEO_GEO_BASE_URL}/products/purifying-toner-skin-balancing-13/`,
  instructions: [
    "Use this single PDP data bundle as the source of truth for the ERTY 13 Purifying Toner for Skin Balancing PDP.",
    "Copy or move purifyingTonerSkinBalancing13 into src/data/products/purifying-toner-skin-balancing-13.ts.",
    "Register purifyingTonerSkinBalancing13 in src/data/products/index.ts.",
    "Render H1 as real HTML text: 에르띠 13 퓨리파잉 토너 포 스킨 밸런싱.",
    "Render the AI Summary block directly below Hero.",
    "Render Formula Architecture and Ingredient Intelligence as semantic HTML.",
    "Represent 140ml and 480ml as variants under one ProductGroup.",
    "Do not create separate canonical product pages for each volume unless the commerce strategy explicitly requires it.",
    "Do not insert price or availability until commerce data is connected.",
    "Generate FAQPage JSON-LD from visible FAQ only.",
    "Generate ProductGroup/Product/Offer JSON-LD from variants, leaving price and availability undefined or omitted until commerce data is available.",
    "Use image alt mapping from purifyingTonerSkinBalancing13ImageAlt.",
    "Use product detail PNG/JPG assets only as supplementary visuals; all core product facts must be rendered as server-rendered HTML text.",
    "Add a visible shake-before-use notice near the usage section because the toner contains dispersed sulfur/silica components.",
    "Keep sebum-control, anti-inflammatory, antibacterial, acne, pore, sulfur, and UV-stress claims cosmetic-safe using the claim controls in this bundle.",
    "Do not use www.ertykorea.com as canonical. All canonical, sitemap, JSON-LD, and merchant links must use https://ertyofficial.com."
  ],
  qaChecklist: [
    "PDP route renders successfully.",
    "H1 is visible and crawlable.",
    "Canonical URL uses https://ertyofficial.com/products/purifying-toner-skin-balancing-13.",
    "140ml and 480ml variants are selectable or visible in the variant UI.",
    "Shake-before-use notice is visible before or inside HowToUse.",
    "No price or availability is hardcoded.",
    "FAQ is visible and FAQPage schema is generated.",
    "ProductGroup schema includes both 140ml and 480ml variants.",
    "Image alt text exists for product and detail images.",
    "Claim disclaimer is rendered near the bottom of the PDP.",
    "No prohibited claims are rendered in public PDP copy."
  ]
} as const;

export default purifyingTonerSkinBalancing13;
