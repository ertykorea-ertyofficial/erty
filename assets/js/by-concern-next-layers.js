(function initByConcernNextLayers() {
  if (document.body.dataset.page !== "by-concern") {
    return;
  }

  const data = window.ERTY_BY_CONCERN_NEXT_LAYERS_DATA;
  const guideSection = document.getElementById("bc-guide");
  const guideDesc = document.getElementById("bc-guide-desc");
  const guideGrid = document.getElementById("bc-guide-grid");

  if (!data || !guideSection || !guideDesc || !guideGrid) {
    return;
  }

  const concerns = data.concerns || {};

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function renderGuideCluster(guides) {
    guideGrid.innerHTML = guides
      .map(
        (guide) => `
          <article class="bc-guide__card">
            <div class="bc-guide__card-label">${escapeHtml(guide.label)}</div>
            <div class="bc-guide__card-title">${escapeHtml(guide.title)}</div>
            <div class="bc-guide__card-copy">${escapeHtml(guide.copy)}</div>
            <div class="bc-guide__card-meta">
              ${guide.tags
                .map((tag) => `<span class="bc-guide__tag">${escapeHtml(tag)}</span>`)
                .join("")}
            </div>
            <a class="bc-guide__card-link" href="${escapeHtml(guide.href)}">
              ${escapeHtml(guide.linkLabel)}
              <span aria-hidden="true">→</span>
            </a>
          </article>
        `,
      )
      .join("");
  }

  function renderNextLayers(concernId) {
    const concern = concerns[concernId];
    if (!concern) {
      return;
    }

    guideSection.style.setProperty("--bcx-accent-rgb", concern.accentRgb);
    guideGrid.style.setProperty("--bcx-accent-rgb", concern.accentRgb);
    guideDesc.textContent = concern.guideDesc;
    renderGuideCluster(concern.guides);
  }

  document.addEventListener("bc:concern-change", (event) => {
    const concernId = event.detail?.id;
    if (concernId) {
      renderNextLayers(concernId);
    }
  });

  const initialConcernId =
    document
      .querySelector("#bc-dock .bc-cue[aria-selected='true']")
      ?.getAttribute("data-id") ||
    data.defaultConcernId ||
    "barrier-redness";

  renderNextLayers(initialConcernId);
})();
