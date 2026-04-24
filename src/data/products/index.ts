import { perfectSoothingSolution1 } from "./perfect-soothing-solution-1";
import type { ProductPdpData } from "./types";

export const products: ProductPdpData[] = [perfectSoothingSolution1];

export const productSlugs = products.map((product) => product.slug);

export function getProductBySlug(slug: string): ProductPdpData | undefined {
  return products.find((product) => product.slug === slug || product.aliases?.includes(slug));
}
