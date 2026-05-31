import type { ProductPdpData } from "../../data/products/types";

export function ProductFAQ({ faq }: { faq?: ProductPdpData["faq"] }) {
  if (!faq?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-faq-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">FAQ</p>
        <h2 id="pdp-faq-title">FAQ</h2>
      </div>
      <div className="pdp-section__body">
        <div className="pdp-faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
