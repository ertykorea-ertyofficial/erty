import type { ProductPdpData } from "../../data/products/types";

export function EvidenceSection({ evidence }: { evidence?: ProductPdpData["evidence"] }) {
  if (!evidence?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-evidence-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Evidence</p>
        <h2 id="pdp-evidence-title">Evidence / Clinical Data</h2>
      </div>
      <div className="pdp-split-list">
        {evidence.map((item) => (
          <article key={`${item.metric || item.title}-${item.summary || item.label}`}>
            <h3>{item.title || item.metric}</h3>
            {item.metric && item.title && <p className="pdp-lead">{item.metric}</p>}
            <p>{item.summary || item.label}</p>
            {(item.sourceNote || item.source) && <small>{item.sourceNote || item.source}</small>}
          </article>
        ))}
      </div>
    </section>
  );
}
