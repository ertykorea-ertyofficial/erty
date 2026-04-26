import type { ProductPdpData } from "../../data/products/types";

export function ProblemSolution({ data }: { data?: ProductPdpData["problemSolution"] }) {
  if (!data) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-problem-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Problem Fit</p>
        <h2 id="pdp-problem-title">Problem-Solution Fit</h2>
      </div>
      <div className="pdp-section__body">
        {data.problem && <p>{data.problem}</p>}
        {data.solution && <p>{data.solution}</p>}
        {!!data.targetConcerns?.length && (
          <>
            <h3>Target Concerns</h3>
            <ul className="pdp-tag-list">
              {data.targetConcerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {!!data.productApproach?.length && (
          <>
            <h3>Product Approach</h3>
            <ul className="pdp-ordered-list">
              {data.productApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {!!data.fitFor?.length && (
          <ul className="pdp-tag-list">
            {data.fitFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
