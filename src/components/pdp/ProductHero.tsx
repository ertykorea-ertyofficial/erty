import type { ProductPdpData } from "../../data/products/types";

export function ProductHero({ product }: { product: ProductPdpData }) {
  const hero = product.hero;

  if (!hero) return null;

  const imageSrc = hero.primaryImage || hero.image?.src;
  const imageAlt =
    product.media?.find((item) => item.src === imageSrc)?.alt ||
    hero.image?.alt ||
    product.identity.canonicalName ||
    product.identity.nameKo;

  return (
    <section className="pdp-hero" aria-labelledby="pdp-title">
      <div className="pdp-hero__copy">
        {hero.eyebrow && <p className="pdp-eyebrow">{hero.eyebrow}</p>}
        <h1 id="pdp-title">{product.identity.nameKo}</h1>
        {(hero.headline || hero.subtitle) && (
          <p className="pdp-hero__subtitle">{hero.headline || hero.subtitle}</p>
        )}
        {(hero.subheadline || hero.description) && (
          <p className="pdp-hero__desc">{hero.subheadline || hero.description}</p>
        )}
        {!!hero.benefitChips?.length && (
          <ul className="pdp-tag-list">
            {hero.benefitChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        )}
      </div>
      {imageSrc && (
        <figure className="pdp-hero__media">
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      )}
    </section>
  );
}
