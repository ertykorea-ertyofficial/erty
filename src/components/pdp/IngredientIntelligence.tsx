import type { ProductPdpData } from "../../data/products/types";

export function IngredientIntelligence({ ingredients }: { ingredients?: ProductPdpData["ingredients"] }) {
  if (!ingredients || (!ingredients.note && !ingredients.items?.length)) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-ingredients-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Ingredients</p>
        <h2 id="pdp-ingredients-title">Ingredient Intelligence</h2>
      </div>
      <div className="pdp-section__body">
        {ingredients.headline && <p className="pdp-lead">{ingredients.headline}</p>}
        {ingredients.note && <p>{ingredients.note}</p>}
        {!!ingredients.items?.length && (
          <table className="pdp-table">
            <tbody>
              {ingredients.items.map((item) => (
                <tr key={item.name}>
                  <th>{item.name}</th>
                  <td>{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
