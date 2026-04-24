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
        {relatedProducts.map((item) => (
          <a className="pdp-related-link" href={item.href} key={item.sku}>
            <span>{item.sku}</span>
            <strong>{item.name}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
