import type { ProductPdpData } from "../../data/products/types";

export function ProductBuyBox({ product }: { product: ProductPdpData }) {
  if (!product.buyBox && !product.variants?.length) return null;

  const routineCta = product.identity.routineStep
    ? `${product.identity.routineStep} 루틴 보기`
    : `${product.identity.productNumber || product.identity.sku || ""}번 루틴 보기`.trim();

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
            <article className="pdp-variant" key={variant.sku || variant.id || variant.volume}>
              <h3>{variant.name || `${product.identity.nameEn || product.identity.nameKo} ${variant.volume || variant.size || ""}`}</h3>
              <dl>
                {variant.sku && (
                  <div>
                    <dt>SKU</dt>
                    <dd>{variant.sku}</dd>
                  </div>
                )}
                {(variant.volume || variant.size) && (
                  <div>
                    <dt>Volume</dt>
                    <dd>{variant.volume || variant.size}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      )}
      <div className="pdp-cta-row">
        <a className="pdp-button pdp-button--primary" href="#how-to-use">
          {routineCta}
        </a>
        <a className="pdp-button pdp-button--ghost" href="#formula">
          성분 구조 확인하기
        </a>
      </div>
    </section>
  );
}
