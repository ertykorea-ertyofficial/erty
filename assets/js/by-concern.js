(function () {
  const DATA_KEY = "ertyByConcernData";

  function getPathValue(source, path) {
    return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getPrimaryFamily(concern) {
    return concern?.lineFamilies?.[0] || "revitalizing";
  }

  function getConcernById(data, concernId) {
    return data.concerns.find((concern) => concern.id === concernId) || data.concerns[0];
  }

  function trackByConcernEvent(name, payload = {}) {
    const detail = {
      event: name,
      page: "by-concern",
      timestamp: Date.now(),
      ...payload,
    };

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(detail);
    }

    window.dispatchEvent(new CustomEvent("erty:analytics", { detail }));
  }

  function applyCopySlots(data) {
    document.querySelectorAll("[data-by-concern-copy]").forEach((node) => {
      const path = node.dataset.byConcernCopy || "";
      const value = getPathValue(data.copy, path);

      if (typeof value === "string") {
        node.textContent = value;
      }
    });
  }

  function renderSelectorTabs(tablist, data) {
    tablist.innerHTML = data.concerns
      .map((concern) => {
        const family = getPrimaryFamily(concern);
        const keywords = concern.symptomKeywords.join(" · ");
        const firstNumber = concern.firstSkuIds?.[0] || concern.firstNumberLabel.replace(/^먼저\s*/, "");

        return `
          <button
            class="by-concern-selector__item"
            id="concern-tab-${escapeHtml(concern.id)}"
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="concern-panel"
            tabindex="-1"
            data-concern-id="${escapeHtml(concern.id)}"
            data-line="${escapeHtml(family)}"
          >
            <span class="by-concern-selector__signal">
              <span class="by-concern-selector__state" data-concern-state-chip hidden aria-hidden="true"></span>
              <span class="by-concern-selector__title">${escapeHtml(concern.displayName)}</span>
              <span class="by-concern-selector__keywords">${escapeHtml(keywords)}</span>
            </span>
            <span class="by-concern-selector__number">
              <span>시작</span>
              <strong>${escapeHtml(firstNumber)}</strong>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function initConcernSelector(data) {
    const selector = document.querySelector("[data-concern-selector]");
    const tablist = document.querySelector("[data-concern-tablist]");
    const panel = document.querySelector("[data-concern-panel]");

    if (!selector || !tablist || !panel || tablist.dataset.concernBound === "true") {
      return;
    }

    tablist.dataset.concernBound = "true";
    renderSelectorTabs(tablist, data);

    let activeConcernId = data.defaultConcernId || data.concerns[0]?.id || "";
    let previewConcernId = "";
    let handoffPreviewLockUntil = 0;
    const canTrackLighting =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getTabs = () => Array.from(tablist.querySelectorAll("[data-concern-id]"));
    const getDisplayConcernId = () => previewConcernId || activeConcernId;

    function updateBoardLighting(event) {
      if (!canTrackLighting) return;
      const rect = selector.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      selector.style.setProperty("--selector-light-x", `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
      selector.style.setProperty("--selector-light-y", `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
      selector.style.setProperty("--selector-light-opacity", "0.08");
    }

    function syncSelector(mode = "selected") {
      const displayConcern = getConcernById(data, getDisplayConcernId());
      const activeConcern = getConcernById(data, activeConcernId);
      const isPreview = Boolean(previewConcernId);
      const displayFamily = getPrimaryFamily(displayConcern);
      const routeNumbers = displayConcern.firstSkuIds.join(" → ");

      selector.dataset.activeConcern = activeConcern.id;
      selector.dataset.previewConcern = previewConcernId;
      selector.dataset.displayConcern = displayConcern.id;
      selector.dataset.line = displayFamily;

      getTabs().forEach((tab) => {
        const concernId = tab.dataset.concernId || "";
        const isSelected = concernId === activeConcern.id;
        const isCurrentPreview = isPreview && concernId === displayConcern.id;
        const isRelated =
          !isSelected &&
          !isCurrentPreview &&
          getConcernById(data, concernId).lineFamilies.some((family) =>
            displayConcern.lineFamilies.includes(family)
          );

        tab.classList.toggle("is-active", isSelected);
        tab.classList.toggle("is-preview", isCurrentPreview);
        tab.classList.toggle("is-related", isRelated);
        tab.dataset.state = isSelected
          ? "selected"
          : isCurrentPreview
            ? "preview"
            : isRelated
              ? "related"
              : "idle";
        tab.setAttribute("aria-selected", isSelected ? "true" : "false");
        tab.setAttribute("tabindex", isSelected ? "0" : "-1");
      });

      panel.dataset.line = displayFamily;
      panel.dataset.state = isPreview ? "preview" : "selected";
      panel.setAttribute("aria-labelledby", `concern-tab-${displayConcern.id}`);

      const modeTarget = panel.querySelector("[data-concern-panel-mode]");
      const titleTarget = panel.querySelector("[data-concern-panel-title]");
      const statementTarget = panel.querySelector("[data-concern-panel-statement]");
      const routeTarget = panel.querySelector("[data-concern-panel-route]");
      const nextTarget = panel.querySelector("[data-concern-panel-next]");
      const ctaTarget = panel.querySelector("[data-concern-panel-cta]");
      const protocolTarget = panel.querySelector('[data-concern-panel-shell="protocol"]');
      const evidenceTarget = panel.querySelector('[data-concern-panel-shell="evidence"]');
      const guideTarget = panel.querySelector('[data-concern-panel-shell="guide"]');
      const productsTarget = panel.querySelector('[data-concern-panel-shell="products"]');

      if (modeTarget) {
        modeTarget.textContent = isPreview
          ? data.copy.selector.previewLabel
          : data.copy.selector.activeLabel;
      }

      if (titleTarget) titleTarget.textContent = displayConcern.displayName;
      if (statementTarget) statementTarget.textContent = displayConcern.concernStatement;
      if (routeTarget) routeTarget.textContent = routeNumbers;
      if (nextTarget) nextTarget.textContent = displayConcern.routeLabel;
      if (ctaTarget) {
        const label = displayConcern.ctaLabel || `${displayConcern.firstSkuIds[0]}부터 보기`;
        ctaTarget.textContent = label;
        ctaTarget.setAttribute("aria-label", `${displayConcern.displayName} ${label}`);
      }

      if (evidenceTarget) evidenceTarget.dataset.state = "ready";
      if (guideTarget) guideTarget.dataset.state = "ready";
      if (productsTarget) productsTarget.dataset.state = "ready";
      if (protocolTarget) {
        const hasProtocolRelation =
          Array.isArray(displayConcern.relatedProtocolIds) && displayConcern.relatedProtocolIds.length > 0 ||
          displayConcern.lineFamilies.includes("professional") ||
          [...(displayConcern.firstSkuIds || []), ...(displayConcern.optionalSkuIds || [])].some((skuId) =>
            ["01", "02", "03"].includes(skuId)
          );
        protocolTarget.dataset.state = hasProtocolRelation ? "ready" : "muted";
      }

      getTabs().forEach((tab) => {
        const chip = tab.querySelector("[data-concern-state-chip]");

        if (!chip) return;

        if (tab.classList.contains("is-active")) {
          chip.hidden = false;
          chip.textContent = data.copy.selector.activeChip || "선택됨";
          return;
        }

        if (tab.classList.contains("is-preview")) {
          chip.hidden = false;
          chip.textContent = data.copy.selector.previewChip || "미리보기";
          return;
        }

        chip.hidden = true;
        chip.textContent = "";
      });

      if (mode === "commit") {
        trackByConcernEvent("by_concern_select_commit", {
          concernId: activeConcern.id,
          route: activeConcern.routeLabel,
          skuIds: activeConcern.firstSkuIds,
        });
      }
    }

    function setPreview(concernId) {
      if (Date.now() < handoffPreviewLockUntil) return;
      if (!concernId) return;
      if (concernId === activeConcernId) {
        clearPreview();
        return;
      }
      if (concernId === previewConcernId) return;
      previewConcernId = concernId;
      syncSelector("preview");
      trackByConcernEvent("by_concern_selector_preview", { concernId });
    }

    function clearPreview() {
      if (!previewConcernId) return;
      previewConcernId = "";
      syncSelector("selected");
    }

    function commitSelection(concernId, trigger = "click") {
      if (!concernId) return;
      activeConcernId = concernId;
      previewConcernId = "";
      syncSelector("commit");
      const activeTab = tablist.querySelector(`[data-concern-id="${CSS.escape(concernId)}"]`);
      if (activeTab && trigger !== "initial") {
        activeTab.focus({ preventScroll: true });
      }
    }

    function focusTabByOffset(currentTab, offset) {
      const tabs = getTabs();
      const currentIndex = tabs.indexOf(currentTab);
      if (currentIndex === -1) return;
      const nextIndex = (currentIndex + offset + tabs.length) % tabs.length;
      tabs[nextIndex].focus({ preventScroll: true });
    }

    function getSelectorColumnCount() {
      return window.matchMedia("(max-width: 1180px)").matches ? 1 : 2;
    }

    tablist.addEventListener("mouseover", (event) => {
      const tab = event.target.closest("[data-concern-id]");
      if (tab) {
        setPreview(tab.dataset.concernId || "");
      }
    });

    tablist.addEventListener("mouseout", (event) => {
      if (!tablist.contains(event.relatedTarget)) {
        clearPreview();
      }
    });

    tablist.addEventListener("focusin", (event) => {
      const tab = event.target.closest("[data-concern-id]");
      if (tab) {
        setPreview(tab.dataset.concernId || "");
      }
    });

    tablist.addEventListener("focusout", (event) => {
      if (!tablist.contains(event.relatedTarget)) {
        clearPreview();
      }
    });

    tablist.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-concern-id]");
      if (tab) {
        commitSelection(tab.dataset.concernId || "", "click");
      }
    });

    tablist.addEventListener("keydown", (event) => {
      const tab = event.target.closest("[data-concern-id]");
      if (!tab) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        focusTabByOffset(tab, 1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        focusTabByOffset(tab, -1);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        focusTabByOffset(tab, getSelectorColumnCount());
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        focusTabByOffset(tab, -getSelectorColumnCount());
      }

      if (event.key === "Home") {
        event.preventDefault();
        getTabs()[0]?.focus({ preventScroll: true });
      }

      if (event.key === "End") {
        event.preventDefault();
        const tabs = getTabs();
        tabs[tabs.length - 1]?.focus({ preventScroll: true });
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        commitSelection(tab.dataset.concernId || "", "keyboard");
      }

      if (event.key === "Escape") {
        event.preventDefault();
        clearPreview();
        const activeTab = tablist.querySelector(`[data-concern-id="${CSS.escape(activeConcernId)}"]`);
        activeTab?.focus({ preventScroll: true });
      }
    });

    if (canTrackLighting) {
      selector.addEventListener("pointermove", updateBoardLighting);
      selector.addEventListener("pointerleave", () => {
        selector.style.setProperty("--selector-light-opacity", "0");
      });
    }

    document.querySelectorAll("[data-by-concern-cta]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href") || "";

        trackByConcernEvent("by_concern_hero_cta_click", {
          cta: link.dataset.byConcernCta || "",
          href,
        });

        if (href !== "#concern-selector") {
          return;
        }

        event.preventDefault();
        handoffPreviewLockUntil = Date.now() + 760;
        clearPreview();

        const target = document.getElementById("concern-selector");
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        target?.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });

        if (window.history?.replaceState) {
          window.history.replaceState(null, "", href);
        }

        window.setTimeout(
          () => {
            clearPreview();
            const activeTab = tablist.querySelector(
              `[data-concern-id="${CSS.escape(activeConcernId)}"]`
            );
            activeTab?.focus({ preventScroll: true });
          },
          prefersReducedMotion ? 0 : 360
        );
      });
    });

    commitSelection(activeConcernId, "initial");
  }

  function initByConcernPage() {
    if (document.body.dataset.page !== "by-concern") {
      return;
    }

    const data = window[DATA_KEY];
    if (!data?.concerns?.length) {
      console.error("[by-concern] Missing by-concern data.");
      return;
    }

    applyCopySlots(data);
    initConcernSelector(data);
  }

  document.addEventListener("DOMContentLoaded", initByConcernPage);
})();
