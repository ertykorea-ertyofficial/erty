import type { ProductPdpData } from "../../data/products/types";

export function ProductBuyBox({ product }: { product: ProductPdpData }) {
  if (!product.buyBox && !product.variants?.length) return null;

  return (
    <section className="pdp-buy" aria-labelledby="pdp-buy-title">
      <div>
        <p className="pdp-section__eyebrow">Purchase / Variant / CTA</p>
        <h2 id="pdp-buy-title">구매와 용량 선택</h2>
        {product.buyBox?.status && <p>{product.buyBox.status}</p>}
      </div>
      {!!product.variants?.length && (
        <div className="pdp-variant-list">
          {product.variants.map((variant) => (
            <article className="pdp-variant" key={variant.id}>
              <h3>{variant.name}</h3>
              <dl>
                {variant.sku && (
                  <div>
                    <dt>SKU</dt>
                    <dd>{variant.sku}</dd>
                  </div>
                )}
                {variant.size && (
                  <div>
                    <dt>Size</dt>
                    <dd>{variant.size}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
