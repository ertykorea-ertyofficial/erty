export type ProductVariant = {
  id: string;
  name: string;
  size?: string;
  sku?: string;
  price?: string;
  currency?: string;
  availability?: string;
  url?: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductPdpData = {
  slug: string;
  aliases?: string[];
  identity: {
    sku: string;
    nameKo: string;
    nameEn?: string;
    line: string;
    family: string;
    category?: string;
    shortDefinition: string;
  };
  variants?: ProductVariant[];
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImage?: string;
    keywords?: string[];
  };
  hero?: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: ProductImage;
  };
  aiSummary?: {
    title: string;
    body: string;
    bullets?: string[];
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
  };
  formula?: {
    headline?: string;
    principles?: Array<{ title: string; body: string }>;
  };
  ingredients?: {
    headline?: string;
    note?: string;
    items?: Array<{ name: string; role: string; source?: string }>;
  };
  texture?: {
    type?: string;
    finish?: string;
    sensory?: string[];
  };
  evidence?: Array<{
    metric: string;
    label: string;
    source?: string;
  }>;
  howToUse?: {
    steps: string[];
    caution?: string;
  };
  routines?: Array<{
    title: string;
    steps: string[];
    href?: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  relatedProducts?: Array<{
    sku: string;
    name: string;
    href: string;
  }>;
  claims?: {
    disclaimer?: string;
  };
};
