(function initByConcernNextActions() {
  if (document.body.dataset.page !== "by-concern") {
    return;
  }

  const nextLayerData = window.ERTY_BY_CONCERN_NEXT_LAYERS_DATA;
  const selectorData = window.ERTY_BY_CONCERN_SELECTOR_DATA;
  const section = document.getElementById("bc-next-actions");
  const rail = document.getElementById("bc-next-actions-rail");
  const ctaProduct = document.getElementById("bc-next-actions-products");
  const ctaResults = document.getElementById("bc-next-actions-results");
  const ctaGuide = document.getElementById("bc-next-actions-guide");

  if (
    !nextLayerData ||
    !selectorData ||
    !section ||
    !rail ||
    !ctaProduct ||
    !ctaResults ||
    !ctaGuide
  ) {
    return;
  }

  const nextConcerns = nextLayerData.concerns || {};
  const selectorConcerns = Array.isArray(selectorData.concerns) ? selectorData.concerns : [];
  const selectorMetaById = new Map(selectorConcerns.map((concern) => [concern.id, concern]));

  function getFallbackHref(basePath, concernId) {
    const cueNumber = selectorMetaById.get(concernId)?.cueNumber;
    return cueNumber ? `${basePath}?concern=${cueNumber}` : basePath;
  }

  function getGuideEntry(concernMeta, label) {
    if (!concernMeta || !Array.isArray(concernMeta.guides)) {
      return null;
    }

    return concernMeta.guides.find((entry) => entry.label === label) || null;
  }

  function syncAccent(concernId, concernMeta) {
    const selectorMeta = selectorMetaById.get(concernId);
    const accentRgb = selectorMeta?.accentRgb || concernMeta?.accentRgb || "179,53,64";
    section.style.setProperty("--bc-next-accent-rgb", accentRgb);
    section.dataset.concern = concernId;
    section.dataset.family = (selectorMeta?.family || "").toLowerCase();
  }

  function syncTargets(concernId, concernMeta) {
    const resultsEntry = getGuideEntry(concernMeta, "RESULTS");
    const guideEntry = getGuideEntry(concernMeta, "GUIDE");
    const productsEntry = getGuideEntry(concernMeta, "PRODUCTS");

    ctaResults.href = resultsEntry?.href || getFallbackHref("/results", concernId);
    ctaGuide.href = guideEntry?.href || getFallbackHref("/guide", concernId);
    ctaProduct.href = productsEntry?.href || getFallbackHref("/products", concernId);
  }

  function renderNextActions(concernId) {
    const concernMeta = nextConcerns[concernId];
    if (!concernMeta) {
      return;
    }

    syncAccent(concernId, concernMeta);
    syncTargets(concernId, concernMeta);
  }

  document.addEventListener("bc:concern-change", (event) => {
    const concernId = event.detail?.id;
    if (concernId) {
      renderNextActions(concernId);
    }
  });

  rail.addEventListener("pointermove", (event) => {
    const rect = rail.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    rail.style.setProperty("--bc-next-mx", `${x}%`);
    rail.style.setProperty("--bc-next-my", `${y}%`);
  });

  rail.addEventListener("pointerleave", () => {
    rail.style.setProperty("--bc-next-mx", "50%");
    rail.style.setProperty("--bc-next-my", "50%");
  });

  const initialConcernId =
    document
      .querySelector("#bc-dock .bc-cue[aria-selected='true']")
      ?.getAttribute("data-id") ||
    selectorData.defaultConcernId ||
    nextLayerData.defaultConcernId ||
    selectorConcerns[0]?.id ||
    "barrier-redness";

  renderNextActions(initialConcernId);
})();
