import type { ProductPdpData } from "../../data/products/types";

export function HowToUse({ howToUse }: { howToUse?: ProductPdpData["howToUse"] }) {
  if (!howToUse?.steps?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-how-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Use</p>
        <h2 id="pdp-how-title">How to Use</h2>
      </div>
      <div className="pdp-section__body">
        <ol className="pdp-ordered-list">
          {howToUse.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {howToUse.frequency && <p className="pdp-note">{howToUse.frequency}</p>}
        {!!howToUse.cautions?.length && (
          <ul className="pdp-tag-list">
            {howToUse.cautions.map((caution) => (
              <li key={caution}>{caution}</li>
            ))}
          </ul>
        )}
        {howToUse.caution && <p className="pdp-note">{howToUse.caution}</p>}
      </div>
    </section>
  );
}
