import type { ProductPdpData } from "../../data/products/types";

export function ProductAnswerBox({ aiSummary }: { aiSummary?: ProductPdpData["aiSummary"] }) {
  if (!aiSummary) return null;

  const title = aiSummary.title && aiSummary.title !== "AI Summary" ? aiSummary.title : "제품 요약";
  const summaryBody = aiSummary.paragraph || aiSummary.body;
  const bullets = aiSummary.keyFacts || aiSummary.bullets;

  return (
    <section className="pdp-answer pdp-answer--accordion" aria-labelledby="pdp-answer-title">
      <div className="pdp-answer__header">
        <p className="pdp-answer__kicker">Product Brief</p>
        <h2 id="pdp-answer-title">{title}</h2>
        {aiSummary.oneSentence && <p className="pdp-answer__preview">{aiSummary.oneSentence}</p>}
      </div>
      <details className="pdp-answer__details">
        <summary className="pdp-answer__summary">
          <span className="pdp-answer__summary-label">제품 요약 자세히 보기</span>
          <span className="pdp-answer__summary-icon" aria-hidden="true" />
        </summary>
        <div className="pdp-answer__content">
          {summaryBody && <p>{summaryBody}</p>}
          {!!bullets?.length && (
            <ul className="pdp-answer__bullets">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </details>
    </section>
  );
}
