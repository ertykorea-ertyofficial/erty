export type ProductVariant = {
  id?: string;
  name?: string;
  size?: string;
  sku?: string;
  volume?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  role?: string;
  width?: number;
  height?: number;
};

export type ProductPdpData = {
  slug: string;
  aliases?: string[];
  identity: {
    sku?: string;
    productNumber?: string;
    nameKo: string;
    nameEn?: string;
    canonicalName?: string;
    line: string;
    lineKo?: string;
    family?: string;
    category?: string;
    routineStep?: string;
    shortDefinition: string;
  };
  variants?: ProductVariant[];
  seo: {
    title: string;
    description: string;
    canonicalPath?: string;
    canonicalUrl?: string;
    ogImage?: string;
    keywords?: string[];
  };
  hero?: {
    eyebrow?: string;
    title?: string;
    headline?: string;
    subheadline?: string;
    subtitle?: string;
    description?: string;
    benefitChips?: string[];
    primaryImage?: string;
    image?: ProductImage;
  };
  aiSummary?: {
    title?: string;
    oneSentence?: string;
    body?: string;
    paragraph?: string;
    bullets?: string[];
    keyFacts?: string[];
  };
  buyBox?: {
    status?: string;
    primaryCta?: string;
    primaryHref?: string;
    secondaryCta?: string;
    secondaryHref?: string;
  };
  problemSolution?: {
    problem?: string;
    solution?: string;
    fitFor?: string[];
    targetConcerns?: string[];
    productApproach?: string[];
  };
  formula?: {
    headline?: string;
    thesis?: string;
    principles?: Array<{ title: string; body: string }>;
    axes?: Array<{
      title: string;
      role: string;
      ingredients: string[];
      explanation?: string;
    }>;
  };
  ingredients?:
    | {
        headline?: string;
        note?: string;
        items?: Array<{ name: string; role: string; source?: string }>;
      }
    | Array<{
        nameKo: string;
        nameEn?: string;
        inci?: string;
        concentration?: string;
        role: string;
        consumerBenefit?: string;
        relatedConcerns?: string[];
      }>;
  texture?: {
    type?: string;
    finish?: string;
    absorption?: string;
    sensoryCopy?: string;
    sensory?: string[];
  };
  evidence?: Array<{
    type?: string;
    title?: string;
    summary?: string;
    metric?: string;
    label?: string;
    source?: string;
    sourceNote?: string;
    image?: string;
  }>;
  howToUse?: {
    steps: string[];
    frequency?: string;
    caution?: string;
    cautions?: string[];
  };
  routines?: Array<{
    title: string;
    steps?: string[];
    products?: string[];
    useCase?: string;
    recommendedFor?: string[];
    href?: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  relatedProducts?: Array<{ sku: string; name: string; href: string } | string>;
  claims?: {
    allowed?: string[];
    avoid?: string[];
    disclaimer?: string;
  };
  media?: ReadonlyArray<ProductImage>;
};
