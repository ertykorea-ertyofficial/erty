(function initProductsExplorerLinks() {
  const defaultStarts = Object.freeze({
    "oil-breakout-pores": "11",
    "dehydration-tightness": "23",
    "barrier-redness": "35",
    "dullness-dark-spot": "55",
    "texture-flaking": "01",
    "recovery-firmness": "02",
  });

  function toExplorerHref(concernId, startId) {
    const params = new URLSearchParams();
    const resolvedStart = startId || defaultStarts[concernId] || "";

    if (concernId) {
      params.set("concern", concernId);
    }

    if (resolvedStart) {
      params.set("start", resolvedStart);
    }

    const query = params.toString();
    return query ? `/products/?${query}#product-explorer` : "/products/#product-explorer";
  }

  window.ERTY_PRODUCTS_EXPLORER_LINKS = Object.freeze({
    defaultStarts,
    toExplorerHref,
  });
})();
