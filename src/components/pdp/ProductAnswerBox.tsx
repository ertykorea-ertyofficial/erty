import type { ProductPdpData } from "../../data/products/types";

export function ProductAnswerBox({ aiSummary }: { aiSummary?: ProductPdpData["aiSummary"] }) {
  if (!aiSummary) return null;

  return (
    <section className="pdp-answer" aria-labelledby="pdp-answer-title">
      <p className="pdp-answer__kicker">Quick Answer / AI Summary</p>
      <div>
        <h2 id="pdp-answer-title">{aiSummary.title}</h2>
        <p>{aiSummary.body}</p>
        {!!aiSummary.bullets?.length && (
          <ul className="pdp-answer__bullets">
            {aiSummary.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
