import type { ProductPdpData } from "../../data/products/types";

export function IngredientIntelligence({ ingredients }: { ingredients?: ProductPdpData["ingredients"] }) {
  if (!ingredients) return null;

  const ingredientList = Array.isArray(ingredients) ? ingredients : ingredients.items;
  const headline = Array.isArray(ingredients) ? "핵심 성분 구조" : ingredients.headline;
  const note = Array.isArray(ingredients) ? undefined : ingredients.note;

  if (!note && !ingredientList?.length) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-ingredients-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Ingredients</p>
        <h2 id="pdp-ingredients-title">Ingredients</h2>
      </div>
      <div className="pdp-section__body">
        {headline && <p className="pdp-lead">{headline}</p>}
        {note && <p>{note}</p>}
        {!!ingredientList?.length && (
          <table className="pdp-table">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Role</th>
                <th>Consumer Benefit</th>
              </tr>
            </thead>
            <tbody>
              {ingredientList.map((item) => (
                <tr key={"nameKo" in item ? item.nameKo : item.name}>
                  <th>
                    {"nameKo" in item ? item.nameKo : item.name}
                    {"nameEn" in item && item.nameEn ? <small>{item.nameEn}</small> : null}
                    {"concentration" in item && item.concentration ? <small>{item.concentration}</small> : null}
                  </th>
                  <td>{item.role}</td>
                  <td>{"consumerBenefit" in item ? item.consumerBenefit : item.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
