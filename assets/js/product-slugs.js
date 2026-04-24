(function initProductSlugs() {
  const bySku = Object.freeze({
    "01": "01-perfect-soothing-solution",
    "02": "02-perfect-n-cell-ampoule",
    "03": "03-perfect-spicule-formulation",
    "11": "11-cleansing-gel-for-skin-balancing",
    "13": "13-purifying-toner-for-skin-balancing",
    "15": "15-concentrated-booster-for-skin-balancing",
    "21": "21-cleansing-milk-for-skin-hydrating",
    "23": "23-tonic-lotion-for-skin-hydrating",
    "25": "25-concentrated-booster-for-skin-hydrating",
    "27": "27-derma-hydro-aquax-cream",
    "35": "35-concentrated-booster-for-skin-revitalizing",
    "37": "37-intensive-cellular-er-cream",
    "50": "50-sun-cream-for-brightening",
    "55": "55-concentrated-booster-for-skin-brightening",
    "57": "57-melaway-brightening-cream",
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
