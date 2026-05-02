import { products } from "../../data/products";
import { absoluteUrl } from "./site";

export function getProductSitemapEntries() {
  return products.map((product) => ({
    url: absoluteUrl(product.seo.canonicalUrl || product.seo.canonicalPath || `/products/${product.slug}/`),
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}
