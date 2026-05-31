import type { ProductPdpData } from "../../data/products/types";

export function ProductIdentity({ identity }: { identity: ProductPdpData["identity"] }) {
  const rows = [
    ["번호", identity.productNumber || identity.sku],
    ["제품명", identity.nameKo],
    ["영문명", identity.nameEn],
    ["정식명", identity.canonicalName],
    ["라인", identity.line],
    ["루틴 단계", identity.routineStep],
    ["카테고리", identity.category],
    ["정의", identity.shortDefinition],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return (
    <section className="pdp-section" aria-labelledby="pdp-identity-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Identity</p>
        <h2 id="pdp-identity-title">Identity</h2>
      </div>
      <div className="pdp-section__body">
        <dl className="pdp-definition-list">
          {rows.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
