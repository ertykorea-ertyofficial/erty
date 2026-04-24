import type { ProductPdpData } from "../../data/products/types";

export function ProductHero({ product }: { product: ProductPdpData }) {
  const hero = product.hero;

  if (!hero) return null;

  return (
    <section className="pdp-hero" aria-labelledby="pdp-title">
      <div className="pdp-hero__copy">
        {hero.eyebrow && <p className="pdp-eyebrow">{hero.eyebrow}</p>}
        <h1 id="pdp-title">{hero.title}</h1>
        {hero.subtitle && <p className="pdp-hero__subtitle">{hero.subtitle}</p>}
        {hero.description && <p className="pdp-hero__desc">{hero.description}</p>}
      </div>
      {hero.image?.src && (
        <figure className="pdp-hero__media">
          <img src={hero.image.src} alt={hero.image.alt} />
        </figure>
      )}
    </section>
  );
}
