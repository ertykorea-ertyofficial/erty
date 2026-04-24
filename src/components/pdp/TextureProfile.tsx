import type { ProductPdpData } from "../../data/products/types";

export function TextureProfile({ texture }: { texture?: ProductPdpData["texture"] }) {
  if (!texture) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-texture-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Texture</p>
        <h2 id="pdp-texture-title">Texture Profile</h2>
      </div>
      <div className="pdp-section__body">
        <dl className="pdp-definition-list">
          {texture.type && (
            <div>
              <dt>Type</dt>
              <dd>{texture.type}</dd>
            </div>
          )}
          {texture.finish && (
            <div>
              <dt>Finish</dt>
              <dd>{texture.finish}</dd>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
}
