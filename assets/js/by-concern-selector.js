(function initByConcernSelector() {
  if (document.body.dataset.page !== "by-concern") {
    return;
  }

  const data = window.ERTY_BY_CONCERN_SELECTOR_DATA;
  const root = document.getElementById("concern-selector");
  const shell = document.getElementById("bc-experience");
  const stage = document.getElementById("bc-stage");
  const stageVisual = document.getElementById("bc-stage-visual");
  const stageImage = document.getElementById("bc-stage-image");
  const chip = document.getElementById("bc-panel-chip");
  const family = document.getElementById("bc-panel-family");
  const concernName = document.getElementById("bc-panel-concern");
  const route = document.getElementById("bc-panel-route");
  const why = document.getElementById("bc-panel-why");
  const next = document.getElementById("bc-panel-next");
  const cta = document.getElementById("bc-panel-cta");
  const ctaText = document.getElementById("bc-panel-cta-text");
  const dock = document.getElementById("bc-dock");

  if (
    !data ||
    !root ||
    !shell ||
    !stage ||
    !stageVisual ||
    !stageImage ||
    !chip ||
    !family ||
    !concernName ||
    !route ||
    !why ||
    !next ||
    !cta ||
    !ctaText ||
    !dock
  ) {
    return;
  }

  const concerns = new Map(data.concerns.map((item) => [item.id, item]));
  const concernIds = data.concerns.map((item) => item.id);
  const routeTokenRgb = {
    "01": "88,88,88",
    "02": "88,88,88",
    "03": "88,88,88",
    "11": "26,140,90",
    "13": "26,140,90",
    "15": "26,140,90",
    "23": "39,113,188",
    "25": "39,113,188",
    "27": "39,113,188",
    "35": "179,53,64",
    "37": "179,53,64",
    "50": "198,151,27",
    "55": "198,151,27",
    "57": "198,151,27",
  };
  let activeConcernId = concerns.has(data.defaultConcernId)
    ? data.defaultConcernId
    : concernIds[0];
  let previewConcernId = null;

  const cueMarkup = data.concerns
    .map(
      (concern) => `
        <button
          class="bc-cue${concern.id === activeConcernId ? " is-active" : ""}"
          type="button"
          role="tab"
          id="bc-tab-${concern.id}"
          aria-selected="${concern.id === activeConcernId ? "true" : "false"}"
          aria-controls="bc-stage-panel"
          tabindex="${concern.id === activeConcernId ? "0" : "-1"}"
          data-id="${concern.id}"
          style="--cue-rgb:${concern.cueRgb || concern.accentRgb}; --cue-ink-rgb:${concern.cueInkRgb || concern.cueRgb || concern.accentRgb};"
        >
          <span class="bc-cue__accent"></span>
          <span class="bc-cue__number">${concern.cueNumber}</span>
          <span class="bc-cue__title">${concern.title}</span>
          <span class="bc-cue__meta">${concern.cueMeta}</span>
        </button>
      `
    )
    .join("");

  dock.innerHTML = cueMarkup;

  const cues = Array.from(dock.querySelectorAll(".bc-cue"));

  function getDisplayConcernId() {
    return previewConcernId ?? activeConcernId;
  }

  function renderRouteMarkup(routeText) {
    return routeText
      .split(/\s*→\s*/)
      .map((token) => {
        const rgb = routeTokenRgb[token] || "17,19,23";
        return `<span class="bc-stage__route-token" style="--route-rgb:${rgb}">${token}</span>`;
      })
      .join('<span class="bc-stage__route-sep" aria-hidden="true">→</span>');
  }

  function setPointerOrigin(x = "50%", y = "50%") {
    root.style.setProperty("--mx", x);
    root.style.setProperty("--my", y);
  }

  function updateVisualState(concernId) {
    stageVisual.classList.add("is-switching");
    stageImage.classList.add("is-switching");
    stage.dataset.displayConcern = concernId;
    root.dataset.displayConcern = concernId;
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        stageVisual.classList.remove("is-switching");
        stageImage.classList.remove("is-switching");
      }, 100);
    });
  }

  function syncCueStates() {
    cues.forEach((cue) => {
      const cueId = cue.dataset.id || "";
      const isActive = cueId === activeConcernId;
      const isPreview = cueId === previewConcernId && cueId !== activeConcernId;
      cue.classList.toggle("is-active", isActive);
      cue.classList.toggle("is-preview", isPreview);
      cue.setAttribute("aria-selected", isActive ? "true" : "false");
      cue.tabIndex = isActive ? 0 : -1;
    });
  }

  function applyConcern(concernId, options = {}) {
    const concern = concerns.get(concernId);
    if (!concern) {
      return;
    }

    const commit = options.commit === true;
    if (commit) {
      activeConcernId = concernId;
      previewConcernId = null;
    } else {
      previewConcernId = concernId;
    }

    const displayConcernId = getDisplayConcernId();
    const displayConcern = concerns.get(displayConcernId);
    if (!displayConcern) {
      return;
    }

    root.style.setProperty("--accent-rgb", displayConcern.accentRgb);
    chip.textContent = "지금 신호";
    family.textContent = displayConcern.family;
    concernName.textContent = displayConcern.title;
    route.innerHTML = renderRouteMarkup(displayConcern.route);
    route.setAttribute("aria-label", displayConcern.route);
    why.textContent = displayConcern.why;
    next.textContent = displayConcern.next;
    ctaText.textContent = displayConcern.cta;
    cta.href = displayConcern.href;
    cta.setAttribute("aria-label", `${displayConcern.title} ${displayConcern.cta}`);
    if (displayConcern.imageSrc) {
      stageImage.src = displayConcern.imageSrc;
    }
    document.getElementById("bc-stage-panel")?.setAttribute(
      "aria-labelledby",
      `bc-tab-${displayConcernId}`
    );

    syncCueStates();
    updateVisualState(displayConcernId);
  }

  function commitConcern(concernId) {
    applyConcern(concernId, { commit: true });
  }

  function previewConcern(concernId) {
    if (concernId === activeConcernId) {
      previewConcernId = null;
      applyConcern(activeConcernId, { commit: true });
      return;
    }

    applyConcern(concernId, { commit: false });
  }

  function restoreActiveConcern() {
    applyConcern(activeConcernId, { commit: true });
  }

  function moveFocus(currentCue, offset) {
    const currentIndex = cues.indexOf(currentCue);
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + offset + cues.length) % cues.length;
    const nextCue = cues[nextIndex];
    nextCue?.focus({ preventScroll: true });
  }

  cues.forEach((cue) => {
    const concernId = cue.dataset.id || "";

    cue.addEventListener("mouseenter", () => {
      previewConcern(concernId);
    });

    cue.addEventListener("mouseleave", () => {
      restoreActiveConcern();
    });

    cue.addEventListener("focus", () => {
      previewConcern(concernId);
    });

    cue.addEventListener("blur", () => {
      restoreActiveConcern();
    });

    cue.addEventListener("click", () => {
      commitConcern(concernId);
    });

    cue.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          moveFocus(cue, 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          moveFocus(cue, -1);
          break;
        case "Home":
          event.preventDefault();
          cues[0]?.focus({ preventScroll: true });
          break;
        case "End":
          event.preventDefault();
          cues.at(-1)?.focus({ preventScroll: true });
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          commitConcern(concernId);
          break;
        default:
          break;
      }
    });
  });

  shell.addEventListener("pointermove", (event) => {
    const rect = shell.getBoundingClientRect();
    const x = `${((event.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((event.clientY - rect.top) / rect.height) * 100}%`;
    setPointerOrigin(x, y);
  });

  shell.addEventListener("pointerleave", () => {
    setPointerOrigin();
  });

  const heroCta = document.querySelector('.by-concern-reset__cta[href="#concern-selector"]');
  heroCta?.addEventListener("click", (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headerHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
    ) || 0;
    const targetTop = Math.max(
      0,
      window.scrollY + root.getBoundingClientRect().top - headerHeight - 24,
    );
    window.scrollTo({
      top: targetTop,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", "#concern-selector");
  });

  applyConcern(activeConcernId, { commit: true });
})();
