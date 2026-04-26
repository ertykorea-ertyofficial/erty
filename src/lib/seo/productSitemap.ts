import { products } from "../../data/products";

const SITE_URL = "https://ertyofficial.com";

function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getProductSitemapEntries() {
  return products.map((product) => ({
    url: absoluteUrl(product.seo.canonicalUrl || product.seo.canonicalPath || `/products/${product.slug}/`),
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}
