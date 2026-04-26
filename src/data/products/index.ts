import {
  perfectSoothingSolution1,
  perfectSoothingSolution1ImageAlt,
} from "./perfect-soothing-solution-1";
import {
  perfectNCellAmpoule2,
  perfectNCellAmpoule2ImageAlt,
} from "./perfect-n-cell-ampoule-2";
import {
  perfectSpiculeFormulation3,
  perfectSpiculeFormulation3ImageAlt,
} from "./perfect-spicule-formulation-3";
import {
  cleansingGelSkinBalancing11,
  cleansingGelSkinBalancing11ImageAlt,
} from "./cleansing-gel-skin-balancing-11";
import {
  purifyingTonerSkinBalancing13,
  purifyingTonerSkinBalancing13ImageAlt,
} from "./purifying-toner-skin-balancing-13";
import {
  concentratedBoosterSkinBalancing15,
  concentratedBoosterSkinBalancing15ImageAlt,
} from "./concentrated-booster-skin-balancing-15";
import {
  cleansingMilkSkinHydrating21,
  cleansingMilkSkinHydrating21ImageAlt,
} from "./cleansing-milk-skin-hydrating-21";
import {
  tonicLotionSkinHydrating23,
  tonicLotionSkinHydrating23ImageAlt,
} from "./tonic-lotion-skin-hydrating-23";
import {
  concentratedBoosterSkinHydrating25,
  concentratedBoosterSkinHydrating25ImageAlt,
} from "./concentrated-booster-skin-hydrating-25";
import {
  dermaHydroAquaxCream27,
  dermaHydroAquaxCream27ImageAlt,
} from "./derma-hydro-aquax-cream-27";
import {
  concentratedBoosterSkinRevitalizing35,
  concentratedBoosterSkinRevitalizing35ImageAlt,
} from "./concentrated-booster-skin-revitalizing-35";
import {
  intensiveCellularErCream37,
  intensiveCellularErCream37ImageAlt,
} from "./intensive-cellular-er-cream-37";
import {
  sunCream50,
  sunCream50ImageAlt,
} from "./sun-cream-50";
import {
  concentratedBoosterSkinBrightening55,
  concentratedBoosterSkinBrightening55ImageAlt,
} from "./concentrated-booster-skin-brightening-55";
import {
  melawayBrighteningCream57,
  melawayBrighteningCream57ImageAlt,
} from "./melaway-brightening-cream-57";
import type { ProductPdpData } from "./types";

export const products: ProductPdpData[] = [
  {
    ...perfectSoothingSolution1,
    aliases: ["01-perfect-soothing-solution"],
    media: perfectSoothingSolution1ImageAlt,
  },
  {
    ...perfectNCellAmpoule2,
    aliases: ["02-perfect-n-cell-ampoule", "02-perfect-ncell-ampoule"],
    media: perfectNCellAmpoule2ImageAlt,
  },
  {
    ...perfectSpiculeFormulation3,
    aliases: ["03-perfect-spicule-formulation"],
    media: perfectSpiculeFormulation3ImageAlt,
  },
  {
    ...cleansingGelSkinBalancing11,
    aliases: ["11-cleansing-gel-for-skin-balancing"],
    media: cleansingGelSkinBalancing11ImageAlt,
  },
  {
    ...purifyingTonerSkinBalancing13,
    aliases: ["13-purifying-toner-for-skin-balancing", "13-purifying-for-skin-balancing"],
    media: purifyingTonerSkinBalancing13ImageAlt,
  },
  {
    ...concentratedBoosterSkinBalancing15,
    aliases: ["15-concentrated-booster-for-skin-balancing", "15-concentraed-booster-for-skin-balancing"],
    media: concentratedBoosterSkinBalancing15ImageAlt,
  },
  {
    ...cleansingMilkSkinHydrating21,
    aliases: ["21-cleansing-milk-for-skin-hydrating"],
    media: cleansingMilkSkinHydrating21ImageAlt,
  },
  {
    ...tonicLotionSkinHydrating23,
    aliases: ["23-tonic-lotion-for-skin-hydrating"],
    media: tonicLotionSkinHydrating23ImageAlt,
  },
  {
    ...concentratedBoosterSkinHydrating25,
    aliases: ["25-concentrated-booster-for-skin-hydrating", "25-concentraed-booster-for-skin-hydrating"],
    media: concentratedBoosterSkinHydrating25ImageAlt,
  },
  {
    ...dermaHydroAquaxCream27,
    aliases: ["27-derma-hydro-aquax-cream"],
    media: dermaHydroAquaxCream27ImageAlt,
  },
  {
    ...concentratedBoosterSkinRevitalizing35,
    aliases: [
      "35-concentrated-booster-for-skin-revitalizing",
      "35-concentraed-booster-for-skin-revitalizing",
    ],
    media: concentratedBoosterSkinRevitalizing35ImageAlt,
  },
  {
    ...intensiveCellularErCream37,
    aliases: ["37-intensive-cellular-er-cream"],
    media: intensiveCellularErCream37ImageAlt,
  },
  {
    ...sunCream50,
    aliases: ["50-sun-cream", "50-sun-cream-for-brightening"],
    media: sunCream50ImageAlt,
  },
  {
    ...concentratedBoosterSkinBrightening55,
    aliases: [
      "55-concentrated-booster-for-skin-brightening",
      "55-concentraed-booster-for-skin-brightening",
    ],
    media: concentratedBoosterSkinBrightening55ImageAlt,
  },
  {
    ...melawayBrighteningCream57,
    aliases: ["57-melaway-brightening-cream"],
    media: melawayBrighteningCream57ImageAlt,
  },
];

const slugAliases: Record<string, string> = {
  "01-perfect-soothing-solution": "perfect-soothing-solution-1",
  "02-perfect-n-cell-ampoule": "perfect-n-cell-ampoule-2",
  "02-perfect-ncell-ampoule": "perfect-n-cell-ampoule-2",
  "03-perfect-spicule-formulation": "perfect-spicule-formulation-3",
  "11-cleansing-gel-for-skin-balancing": "cleansing-gel-skin-balancing-11",
  "13-purifying-toner-for-skin-balancing": "purifying-toner-skin-balancing-13",
  "13-purifying-for-skin-balancing": "purifying-toner-skin-balancing-13",
  "15-concentrated-booster-for-skin-balancing": "concentrated-booster-skin-balancing-15",
  "15-concentraed-booster-for-skin-balancing": "concentrated-booster-skin-balancing-15",
  "21-cleansing-milk-for-skin-hydrating": "cleansing-milk-skin-hydrating-21",
  "23-tonic-lotion-for-skin-hydrating": "tonic-lotion-skin-hydrating-23",
  "25-concentrated-booster-for-skin-hydrating": "concentrated-booster-skin-hydrating-25",
  "25-concentraed-booster-for-skin-hydrating": "concentrated-booster-skin-hydrating-25",
  "27-derma-hydro-aquax-cream": "derma-hydro-aquax-cream-27",
  "35-concentrated-booster-for-skin-revitalizing": "concentrated-booster-skin-revitalizing-35",
  "35-concentraed-booster-for-skin-revitalizing": "concentrated-booster-skin-revitalizing-35",
  "37-intensive-cellular-er-cream": "intensive-cellular-er-cream-37",
  "50-sun-cream": "sun-cream-50",
  "50-sun-cream-for-brightening": "sun-cream-50",
  "55-concentrated-booster-for-skin-brightening": "concentrated-booster-skin-brightening-55",
  "55-concentraed-booster-for-skin-brightening": "concentrated-booster-skin-brightening-55",
  "57-melaway-brightening-cream": "melaway-brightening-cream-57",
};

export const productSlugs = products.map((product) => product.slug);

export function getProductBySlug(slug: string): ProductPdpData | undefined {
  const canonicalSlug = slugAliases[slug] || slug;

  return products.find((product) => product.slug === canonicalSlug || product.aliases?.includes(slug));
}
