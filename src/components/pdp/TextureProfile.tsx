import type { ProductPdpData } from "../../data/products/types";

export function TextureProfile({ texture }: { texture?: ProductPdpData["texture"] }) {
  if (!texture) return null;

  return (
    <section className="pdp-section" aria-labelledby="pdp-texture-title">
      <div className="pdp-section__head">
        <p className="pdp-section__eyebrow">Texture</p>
        <h2 id="pdp-texture-title">Texture</h2>
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
          {texture.absorption && (
            <div>
              <dt>Absorption</dt>
              <dd>{texture.absorption}</dd>
            </div>
          )}
        </dl>
        {texture.sensoryCopy && <p>{texture.sensoryCopy}</p>}
      </div>
    </section>
  );
}
