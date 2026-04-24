import type { ProductPdpData } from "./types";

export const perfectSoothingSolution1: ProductPdpData = {
  slug: "01-perfect-soothing-solution",
  aliases: ["perfect-soothing-solution-1"],
  identity: {
    sku: "01",
    nameKo: "퍼펙트 수딩 솔루션",
    nameEn: "Perfect Soothing Solution",
    line: "Professional",
    family: "professional",
    category: "저자극 필링 솔루션",
    shortDefinition: "피부결 리셋과 각질 정돈을 위한 Professional 프로토콜 시작 번호입니다.",
  },
  variants: [
    {
      id: "01-50ml",
      name: "Perfect Soothing Solution 50ml",
      size: "50ml",
      sku: "01",
      currency: "KRW",
      availability: "https://schema.org/PreOrder",
      url: "/products/01-perfect-soothing-solution/",
    },
  ],
  seo: {
    title: "01 퍼펙트 수딩 솔루션 | ERTY Official",
    description:
      "01 퍼펙트 수딩 솔루션은 피부결 리셋과 각질 정돈을 위한 저자극 필링 솔루션입니다. Professional 프로토콜의 시작 번호입니다.",
    canonicalPath: "/products/01-perfect-soothing-solution/",
    ogImage: "/assets/images/brand/products/stage-posters/01.png",
    keywords: ["퍼펙트 수딩 솔루션", "저자극 필링", "피부결", "각질 정돈", "에르띠 01"],
  },
  hero: {
    eyebrow: "Professional Protocol · 01",
    title: "퍼펙트 수딩 솔루션",
    subtitle: "피부결 리셋 · 각질 정돈 전문가",
    description: "피부 밸런스를 바로 세우는 저자극 필링 솔루션입니다.",
    image: {
      src: "/assets/images/brand/products/stage-posters/01.png",
      alt: "01 퍼펙트 수딩 솔루션 제품 포스터",
    },
  },
  aiSummary: {
    title: "빠르게 말하면",
    body: "01은 거친 피부결과 각질 신호가 먼저 보일 때 루틴의 시작점으로 읽는 Professional 번호입니다.",
    bullets: ["피부결 리셋", "각질 정돈", "다음 흡수 단계 준비"],
  },
  buyBox: {
    status: "공식 스토어 연결 준비 중",
    primaryCta: "제품 구매하기",
    secondaryCta: "제품 허브로 돌아가기",
    secondaryHref: "/products/",
  },
  problemSolution: {
    problem: "거친 피부결, 각질, 메이크업 밀림이 먼저 보이는 피부 신호",
    solution: "저자극 필링 단계로 표면 흐름을 정리하고 다음 루틴 흡수 환경을 준비합니다.",
    fitFor: ["거친 피부결", "각질 정돈", "루틴 시작 전 표면 리셋"],
  },
  formula: {
    headline: "Professional 01은 리셋 단계입니다",
    principles: [
      { title: "Reset", body: "무리한 자극보다 낮은 강도의 정돈감을 우선합니다." },
      { title: "Prepare", body: "다음 수분·장벽 루틴이 이어질 수 있는 표면 상태를 준비합니다." },
    ],
  },
  ingredients: {
    headline: "성분 정보 슬롯",
    note: "최종 전성분과 핵심 성분 설명은 제품별 PDP 데이터 확정 후 교체합니다.",
    items: [],
  },
  texture: {
    type: "솔루션",
    finish: "산뜻한 정돈감",
    sensory: ["가벼운 사용감", "루틴 시작 단계에 맞는 정돈감"],
  },
  evidence: [],
  howToUse: {
    steps: [
      "세안 후 피부결이 거칠게 느껴지는 부위 중심으로 사용합니다.",
      "피부 상태에 따라 사용 주기를 조절합니다.",
      "이후 수분 또는 장벽 루틴으로 이어갑니다.",
    ],
    caution: "민감 반응이 느껴질 경우 사용 빈도를 줄이고 피부 상태를 확인합니다.",
  },
  routines: [
    {
      title: "거친 결 루틴",
      steps: ["01", "25", "37"],
      href: "/products/?concern=texture-flaking&start=01#product-explorer",
    },
  ],
  faq: [
    {
      question: "01은 어떤 피부 신호에서 먼저 보나요?",
      answer: "거친 피부결과 각질 정돈이 먼저 필요할 때 시작 번호로 봅니다.",
    },
    {
      question: "01 사용 후 어떤 제품으로 이어가나요?",
      answer: "피부 상태에 따라 25 수분 밀도 단계 또는 37 장벽 회복 단계로 이어갈 수 있습니다.",
    },
  ],
  relatedProducts: [
    {
      sku: "25",
      name: "컨센트레이트 부스터 포 스킨 하이드레이팅",
      href: "/products/25-concentrated-booster-for-skin-hydrating/",
    },
    {
      sku: "37",
      name: "인텐시브 셀룰러 ER 크림",
      href: "/products/37-intensive-cellular-er-cream/",
    },
  ],
  claims: {
    disclaimer:
      "화장품은 개인의 피부 상태에 따라 사용감이 다를 수 있습니다. 본 페이지의 설명은 제품 구조와 루틴 이해를 돕기 위한 정보입니다.",
  },
};
