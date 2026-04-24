import type { ProductPdpData } from "../../data/products/types";

export function FormulaArchitecture({ formula }: { formula?: ProductPdpData["formula"] }) {
  if (!formula) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-formula-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Formula</p>
        <h2 id="pdp-formula-title">Formula Architecture</h2>
      </div>
      <div className="pdp-section__body">
        {formula.headline && <p className="pdp-lead">{formula.headline}</p>}
        {!!formula.principles?.length && (
          <div className="pdp-split-list">
            {formula.principles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
