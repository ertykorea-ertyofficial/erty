import type { ProductPdpData } from "../../data/products/types";
import { buildProductJsonLd } from "../../lib/seo/productJsonLd";

export function ProductJsonLd({ product }: { product: ProductPdpData }) {
  return (
    <script
      id="product-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductJsonLd(product)) }}
    />
  );
}
