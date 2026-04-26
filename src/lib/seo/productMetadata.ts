import type { ProductPdpData } from "../../data/products/types";

const SITE_URL = "https://ertyofficial.com";

function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildProductMetadata(product: ProductPdpData) {
  const canonicalUrl = absoluteUrl(product.seo.canonicalUrl || product.seo.canonicalPath || `/products/${product.slug}/`);
  const imageUrl = absoluteUrl(product.seo.ogImage || product.hero?.primaryImage || product.hero?.image?.src);

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: product.seo.title,
      description: product.seo.description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
      locale: "ko_KR",
      siteName: "ERTY Official",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
