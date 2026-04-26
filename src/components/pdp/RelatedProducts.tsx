import type { ProductPdpData } from "../../data/products/types";

export function RelatedProducts({ relatedProducts }: { relatedProducts?: ProductPdpData["relatedProducts"] }) {
  if (!relatedProducts?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-related-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Related</p>
        <h2 id="pdp-related-title">Related Products</h2>
      </div>
      <div className="pdp-split-list">
        {relatedProducts.map((item) => {
          const slug = typeof item === "string" ? item : item.href.replace(/^\/products\//, "").replace(/\/$/, "");
          const href = typeof item === "string" ? `/products/${item}/` : item.href;
          const label = typeof item === "string" ? item : item.name;
          const sku = typeof item === "string" ? slug.split("-").pop() || slug : item.sku;

          return (
          <a className="pdp-related-link" href={href} key={href}>
            <span>{sku}</span>
            <strong>{label}</strong>
          </a>
          );
        })}
      </div>
    </section>
  );
}
