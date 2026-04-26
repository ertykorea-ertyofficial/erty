import type { ProductPdpData } from "../../data/products/types";

export function ClaimDisclaimer({ claims }: { claims?: ProductPdpData["claims"] }) {
  if (!claims?.disclaimer) return null;

  return (
    <section className="pdp-disclaimer" aria-labelledby="pdp-disclaimer-title">
      <h2 id="pdp-disclaimer-title">Claim Disclaimer</h2>
      {!!claims.allowed?.length && (
        <ul className="pdp-tag-list">
          {claims.allowed.map((claim) => (
            <li key={claim}>{claim}</li>
          ))}
        </ul>
      )}
      <p>{claims.disclaimer}</p>
    </section>
  );
}
