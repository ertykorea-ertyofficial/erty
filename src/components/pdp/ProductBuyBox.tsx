import type { ProductPdpData } from "../../data/products/types";

export function ProductBuyBox({ product }: { product: ProductPdpData }) {
  if (!product.buyBox && !product.variants?.length) return null;

  const routineCta = product.identity.routineStep
    ? `${product.identity.routineStep} 루틴 보기`
    : `${product.identity.productNumber || product.identity.sku || ""}번 루틴 보기`.trim();

  const variantImageAlt = (variant: NonNullable<ProductPdpData["variants"]>[number]) => {
    const volume = variant.volume || variant.size;
    return variant.imageAlt || `${product.identity.nameKo}${volume ? ` ${volume}` : ""} 제품 누끼컷`;
  };

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
              {variant.image && (
                <figure className="pdp-variant__media">
                  <img
                    className="pdp-variant__image"
                    src={variant.image}
                    alt={variantImageAlt(variant)}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}
              <div className="pdp-variant__content">
                <h3>
                  {variant.name || `${product.identity.nameEn || product.identity.nameKo} ${variant.volume || variant.size || ""}`}
                </h3>
                <dl>
                  {(variant.volume || variant.size) && (
                    <div>
                      <dt>Volume</dt>
                      <dd>{variant.volume || variant.size}</dd>
                    </div>
                  )}
                </dl>
              </div>
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
