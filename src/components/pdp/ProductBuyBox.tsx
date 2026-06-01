import type { ProductPdpData } from "../../data/products/types";

export function ProductBuyBox({ product }: { product: ProductPdpData }) {
  if (!product.buyBox && !product.variants?.length) return null;

  const firstVariant = product.variants?.[0];
  const firstVolume = firstVariant?.volume || firstVariant?.size || "";
  const variantImageAlt = (variant: NonNullable<ProductPdpData["variants"]>[number]) => {
    const volume = variant.volume || variant.size;
    return variant.imageAlt || `${product.identity.nameKo}${volume ? ` ${volume}` : ""} 제품 누끼컷`;
  };

  return (
    <section className="pdp-buy" aria-labelledby="pdp-buy-title" data-commerce-state="pending">
      <div className="pdp-buy__intro">
        <p className="pdp-section__eyebrow">Purchase / Variant</p>
        <h2 id="pdp-buy-title">구매와 용량 선택</h2>
      </div>
      {!!product.variants?.length && (
        <div className="pdp-buy__checkout-panel">
          <div className="pdp-buy__panel-head">
            <span>Volume option</span>
            <strong className="pdp-buy__selected-volume">{firstVolume ? `선택됨 ${firstVolume}` : "용량 선택"}</strong>
          </div>
          <div className="pdp-variant-list" role="radiogroup" aria-label="제품 용량 선택">
            {product.variants.map((variant, index) => (
              <article
                className={`pdp-variant${index === 0 ? " is-selected" : ""}`}
                key={variant.sku || variant.id || variant.volume}
                role="radio"
                aria-checked={index === 0}
                tabIndex={index === 0 ? 0 : -1}
                data-variant-index={index}
                data-variant-volume={variant.volume || variant.size || ""}
              >
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
          <div className="pdp-cta-row pdp-buy__checkout">
            <button
              className="pdp-button pdp-button--primary pdp-buy-button"
              type="button"
              disabled
              aria-disabled="true"
              data-selected-volume={firstVolume}
            >
              <span className="pdp-buy-button__label">구매하러가기</span>
              <span className="pdp-buy-button__meta">
                {firstVolume ? `선택한 용량 ${firstVolume}` : "용량 선택 후 공식몰 연결"}
              </span>
            </button>
            <p className="pdp-buy__notice">공식몰 제품 링크 연결 전입니다.</p>
          </div>
        </div>
      )}
    </section>
  );
}
