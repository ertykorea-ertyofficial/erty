import { products } from "../../data/products";

const SITE_URL = "https://ertyofficial.com";

export function getProductSitemapEntries() {
  return products.map((product) => ({
    url: `${SITE_URL}${product.seo.canonicalPath || `/products/${product.slug}/`}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}
