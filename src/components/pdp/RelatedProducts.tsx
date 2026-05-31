import type { ProductPdpData } from "../../data/products/types";
import { products } from "../../data/products";

export function RelatedProducts({ relatedProducts }: { relatedProducts?: ProductPdpData["relatedProducts"] }) {
  if (!relatedProducts?.length) return null;

  function fallbackRelatedLabel(slug: string) {
    if (slug === "er-perfection-toning-treatment-kit") return "ER Perfection Toning Treatment Kit";
    return slug
      .split("-")
      .map((word) => (word.length <= 2 ? word.toUpperCase() : `${word[0]?.toUpperCase() || ""}${word.slice(1)}`))
      .join(" ");
  }

  return (
    <section className="pdp-section" aria-labelledby="pdp-related-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Related</p>
        <h2 id="pdp-related-title">Related</h2>
      </div>
      <div className="pdp-section__body">
        <div className="pdp-split-list">
          {relatedProducts.map((item) => {
            const slug = typeof item === "string" ? item : item.href.replace(/^\/products\//, "").replace(/\/$/, "");
            const href = typeof item === "string" ? `/products/${item}/` : item.href;
            const relatedProduct = products.find((product) => product.slug === slug || product.aliases?.includes(slug));
            const label = typeof item === "string" ? relatedProduct?.identity.nameKo || fallbackRelatedLabel(slug) : item.name;
            const sku = typeof item === "string" ? relatedProduct?.identity.productNumber || "KIT" : item.sku;

            return (
              <a className="pdp-related-link" href={href} key={href}>
                <span>{sku}</span>
                <strong>{label}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
