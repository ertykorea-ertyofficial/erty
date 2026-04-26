import type { ProductPdpData } from "../../data/products/types";

export function ProductAnswerBox({ aiSummary }: { aiSummary?: ProductPdpData["aiSummary"] }) {
  if (!aiSummary) return null;

  const title = aiSummary.title || "AI Summary";
  const summaryBody = aiSummary.paragraph || aiSummary.body;
  const bullets = aiSummary.keyFacts || aiSummary.bullets;

  return (
    <section className="pdp-answer" aria-labelledby="pdp-answer-title">
      <p className="pdp-answer__kicker">Quick Answer / AI Summary</p>
      <div>
        <h2 id="pdp-answer-title">{title}</h2>
        {aiSummary.oneSentence && <p className="pdp-lead">{aiSummary.oneSentence}</p>}
        {summaryBody && <p>{summaryBody}</p>}
        {!!bullets?.length && (
          <ul className="pdp-answer__bullets">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
