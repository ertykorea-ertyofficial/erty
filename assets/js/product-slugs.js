(function initProductSlugs() {
  const bySku = Object.freeze({
    "01": "perfect-soothing-solution-1",
    "02": "perfect-n-cell-ampoule-2",
    "03": "perfect-spicule-formulation-3",
    "11": "cleansing-gel-skin-balancing-11",
    "13": "purifying-toner-skin-balancing-13",
    "15": "concentrated-booster-skin-balancing-15",
    "21": "cleansing-milk-skin-hydrating-21",
    "23": "tonic-lotion-skin-hydrating-23",
    "25": "concentrated-booster-skin-hydrating-25",
    "27": "derma-hydro-aquax-cream-27",
    "35": "concentrated-booster-skin-revitalizing-35",
    "37": "intensive-cellular-er-cream-37",
    "50": "sun-cream-50",
    "55": "concentrated-booster-skin-brightening-55",
    "57": "melaway-brightening-cream-57",
  });

  function normalizeSkuId(skuId) {
    return String(skuId || "").padStart(2, "0");
  }

  function getSlug(skuId) {
    return bySku[normalizeSkuId(skuId)] || "";
  }

  function getHref(skuId) {
    const slug = getSlug(skuId);
    return slug ? `/products/${slug}/` : "/products/";
  }

  window.ERTY_PRODUCT_SLUGS = Object.freeze({
    bySku,
    getSlug,
    getHref,
  });
})();
