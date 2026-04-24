import type { ProductPdpData } from "../../data/products/types";

export function RoutinePairing({ routines }: { routines?: ProductPdpData["routines"] }) {
  if (!routines?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-routine-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Routine</p>
        <h2 id="pdp-routine-title">Routine Pairing</h2>
      </div>
      <div className="pdp-split-list">
        {routines.map((routine) => (
          <article key={routine.title}>
            <h3>{routine.title}</h3>
            <p>{routine.steps.join(" → ")}</p>
            {routine.href && <a href={routine.href}>루틴에서 보기</a>}
          </article>
        ))}
      </div>
    </section>
  );
}
