(function initByConcernSelector() {
  if (document.body.dataset.page !== "by-concern") {
    return;
  }

  const data = window.ERTY_BY_CONCERN_SELECTOR_DATA;
  const pageShell = document.querySelector(".by-concern-reset");
  const heroSection = document.querySelector(".by-concern-reset__hero");
  const heroCopy = document.querySelector(".by-concern-reset__hero-copy");
  const heroPlate = document.querySelector(".by-concern-reset__hero-plate");
  const root = document.getElementById("concern-selector");
  const shell = document.getElementById("bc-experience");
  const stage = document.getElementById("bc-stage");
  const stageOrb = stage?.querySelector(".bc-stage__orb");
  const stagePrev = document.getElementById("bc-stage-prev");
  const stageNext = document.getElementById("bc-stage-next");
  const mobileChip = document.getElementById("bc-mobile-chip");
  const mobileFamily = document.getElementById("bc-mobile-family");
  const mobileConcern = document.getElementById("bc-mobile-concern");
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
  const commitLive = document.getElementById("bc-commit-live");
  const dock = document.getElementById("bc-dock");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

  if (
    !data ||
    !pageShell ||
    !heroSection ||
    !heroCopy ||
    !heroPlate ||
    !root ||
    !shell ||
    !stage ||
    !stageOrb ||
    !stagePrev ||
    !stageNext ||
    !mobileChip ||
    !mobileFamily ||
    !mobileConcern ||
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
  let displayedConcernId = null;
  let visualSwitchFrame = 0;
  let visualSwitchTimer = 0;
  let routeAnimationFrame = 0;
  let scrollFrame = 0;
  let swipePointerId = null;
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeMoved = false;

  function setScrollHandoffVariables(progress) {
    const clamped = Math.min(Math.max(progress, 0), 1);
    const heroShift = `${(-18 * clamped).toFixed(2)}px`;
    const heroOpacity = (1 - 0.14 * clamped).toFixed(3);
    const heroPlateShift = `${(-12 * clamped).toFixed(2)}px`;
    const heroPlateOpacity = (0.5 - 0.14 * clamped).toFixed(3);
    const introShift = `${(14 * (1 - clamped)).toFixed(2)}px`;
    const introOpacity = (0.93 + 0.07 * clamped).toFixed(3);
    const experienceShift = `${(20 * (1 - clamped)).toFixed(2)}px`;
    const experienceOpacity = (0.95 + 0.05 * clamped).toFixed(3);
    const selectorWashOpacity = (0.78 + 0.22 * clamped).toFixed(3);
    const selectorShellOpacity = (0.68 + 0.32 * clamped).toFixed(3);

    pageShell.style.setProperty("--bc-hero-handoff-shift", heroShift);
    pageShell.style.setProperty("--bc-hero-handoff-opacity", heroOpacity);
    pageShell.style.setProperty("--bc-hero-plate-handoff-shift", heroPlateShift);
    pageShell.style.setProperty("--bc-hero-plate-handoff-opacity", heroPlateOpacity);
    pageShell.style.setProperty("--bc-selector-intro-handoff-shift", introShift);
    pageShell.style.setProperty("--bc-selector-intro-handoff-opacity", introOpacity);
    pageShell.style.setProperty("--bc-selector-experience-handoff-shift", experienceShift);
    pageShell.style.setProperty("--bc-selector-experience-handoff-opacity", experienceOpacity);
    pageShell.style.setProperty("--bc-selector-wash-opacity", selectorWashOpacity);
    pageShell.style.setProperty("--bc-selector-shell-opacity", selectorShellOpacity);
  }

  function computeScrollHandoffProgress() {
    const headerHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-height")
      ) || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const selectorTop = root.getBoundingClientRect().top + window.scrollY;
    const revealStart = Math.max(0, selectorTop - viewportHeight * 0.78);
    const revealEnd = Math.max(revealStart + 1, selectorTop - headerHeight - 36);
    return (window.scrollY - revealStart) / (revealEnd - revealStart);
  }

  function updateScrollHandoff() {
    if (reduceMotionQuery.matches) {
      pageShell.style.removeProperty("--bc-hero-handoff-shift");
      pageShell.style.removeProperty("--bc-hero-handoff-opacity");
      pageShell.style.removeProperty("--bc-hero-plate-handoff-shift");
      pageShell.style.removeProperty("--bc-hero-plate-handoff-opacity");
      pageShell.style.removeProperty("--bc-selector-intro-handoff-shift");
      pageShell.style.removeProperty("--bc-selector-intro-handoff-opacity");
      pageShell.style.removeProperty("--bc-selector-experience-handoff-shift");
      pageShell.style.removeProperty("--bc-selector-experience-handoff-opacity");
      pageShell.style.removeProperty("--bc-selector-wash-opacity");
      pageShell.style.removeProperty("--bc-selector-shell-opacity");
      return;
    }

    setScrollHandoffVariables(computeScrollHandoffProgress());
  }

  function requestScrollHandoffUpdate() {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      updateScrollHandoff();
    });
  }

  function renderCueTitle(title) {
    return title
      .split(/\s*·\s*/g)
      .map((line) => `<span class="bc-cue__title-line">${line}</span>`)
      .join("");
  }

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
          <span class="bc-cue__title">${renderCueTitle(concern.title)}</span>
        </button>
      `
    )
    .join("");

  dock.innerHTML = cueMarkup;

  const cues = Array.from(dock.querySelectorAll(".bc-cue"));

  function getDisplayConcernId() {
    return previewConcernId ?? activeConcernId;
  }

  function getCommittedConcern() {
    return concerns.get(activeConcernId) || concerns.get(concernIds[0]);
  }

  function renderRouteMarkup(routeText) {
    const tokens = routeText.split(/\s*→\s*/);
    return tokens
      .map((token, index) => {
        const rgb = routeTokenRgb[token] || "17,19,23";
        const tokenMarkup = `<span class="bc-stage__route-token" style="--route-rgb:${rgb}">${token}</span>`;
        if (index === tokens.length - 1) {
          return tokenMarkup;
        }

        return `${tokenMarkup}<span class="bc-stage__route-sep" style="--route-rgb:${rgb}" aria-hidden="true">⇢</span>`;
      })
      .join("");
  }

  function renderRoute(displayConcern) {
    window.cancelAnimationFrame(routeAnimationFrame);
    routeAnimationFrame = 0;
    route.classList.remove("is-route-revealing");
    route.innerHTML = renderRouteMarkup(displayConcern.route);
    route.setAttribute("aria-label", displayConcern.route);
    route
      .querySelectorAll(".bc-stage__route-token, .bc-stage__route-sep")
      .forEach((element, index) => {
        element.style.setProperty("--bc-route-delay", `${Math.min(index * 42, 180)}ms`);
      });

    if (reduceMotionQuery.matches) {
      route.classList.add("is-route-revealing");
      return;
    }

    routeAnimationFrame = window.requestAnimationFrame(() => {
      routeAnimationFrame = 0;
      route.classList.add("is-route-revealing");
    });
  }

  function syncCommittedCta() {
    const committedConcern = getCommittedConcern();
    if (!committedConcern) {
      return;
    }

    ctaText.textContent = committedConcern.cta;
    cta.href = committedConcern.href;
    cta.dataset.concernId = committedConcern.id;
    cta.setAttribute("aria-label", `${committedConcern.title} ${committedConcern.cta}`);
  }

  function announceCommittedConcern(concernId) {
    if (!commitLive) {
      return;
    }

    const committedConcern = concerns.get(concernId);
    if (!committedConcern) {
      return;
    }

    commitLive.textContent = `${committedConcern.title} 개선 루틴이 선택되었습니다. 먼저 볼 번호 ${committedConcern.route}.`;
  }

  function preloadConcernImages() {
    const urls = Array.from(
      new Set(
        data.concerns
          .map((concern) => concern.imageSrc)
          .filter((src) => typeof src === "string" && src.length > 0)
      )
    );

    const loadImages = () => {
      urls.forEach((url) => {
        if (url === stageImage.currentSrc || url === stageImage.src) {
          return;
        }

        const image = new Image();
        image.decoding = "async";
        image.src = url;
        if (typeof image.decode === "function") {
          image.decode().catch(() => {});
        }
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadImages, { timeout: 1800 });
      return;
    }

    window.setTimeout(loadImages, 600);
  }

  function setPointerOrigin(x = "50%", y = "50%") {
    root.style.setProperty("--mx", x);
    root.style.setProperty("--my", y);
  }

  function emitConcernChange() {
    document.dispatchEvent(
      new CustomEvent("bc:concern-change", {
        detail: { id: activeConcernId },
      }),
    );
  }

  function updateVisualState(concernId, options = {}) {
    const isSameDisplay = concernId === displayedConcernId;
    const shouldAnimate =
      options.animate !== false &&
      !reduceMotionQuery.matches &&
      !isSameDisplay;

    displayedConcernId = concernId;
    stage.dataset.displayConcern = concernId;
    root.dataset.displayConcern = concernId;

    if (isSameDisplay) {
      return;
    }

    window.clearTimeout(visualSwitchTimer);
    window.cancelAnimationFrame(visualSwitchFrame);
    visualSwitchFrame = 0;
    stageVisual.classList.remove("is-switching");
    stageImage.classList.remove("is-switching");

    if (!shouldAnimate) {
      return;
    }

    visualSwitchFrame = window.requestAnimationFrame(() => {
      visualSwitchFrame = 0;
      stageVisual.classList.add("is-switching");
      stageImage.classList.add("is-switching");
      visualSwitchTimer = window.setTimeout(() => {
        stageVisual.classList.remove("is-switching");
        stageImage.classList.remove("is-switching");
        visualSwitchTimer = 0;
      }, 140);
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
    root.style.setProperty(
      "--cue-ink-rgb",
      displayConcern.cueInkRgb || displayConcern.cueRgb || displayConcern.accentRgb
    );
    chip.textContent = "지금 신호";
    mobileChip.textContent = "지금 신호";
    family.textContent = displayConcern.family;
    mobileFamily.textContent = displayConcern.family;
    concernName.textContent = displayConcern.title;
    mobileConcern.textContent = displayConcern.title;
    renderRoute(displayConcern);
    why.textContent = displayConcern.why;
    next.textContent = displayConcern.next;
    stage.dataset.previewing = previewConcernId ? "true" : "false";
    root.dataset.previewing = previewConcernId ? "true" : "false";
    syncCommittedCta();
    const imageScale = Number(displayConcern.imageScale) || 1;
    stage.style.setProperty("--bc-stage-image-scale", `${imageScale}`);
    stage.style.setProperty(
      "--bc-stage-image-switch-scale",
      `${Math.max(imageScale * 0.985, 0.94).toFixed(3)}`
    );
    if (displayConcern.imageSrc) {
      stageImage.src = displayConcern.imageSrc;
    }
    document.getElementById("bc-stage-panel")?.setAttribute(
      "aria-labelledby",
      `bc-tab-${displayConcernId}`
    );

    syncCueStates();
    updateVisualState(displayConcernId, { animate: options.animate });
  }

  function commitConcern(concernId) {
    applyConcern(concernId, { commit: true });
    emitConcernChange();
    announceCommittedConcern(concernId);
  }

  function previewConcern(concernId) {
    if (concernId === activeConcernId) {
      if (previewConcernId !== null) {
        applyConcern(activeConcernId, { commit: true });
      } else {
        syncCueStates();
      }
      return;
    }

    applyConcern(concernId, { commit: false });
  }

  function restoreActiveConcern() {
    if (previewConcernId === null) {
      syncCueStates();
      return;
    }

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

  function moveConcern(offset) {
    const currentIndex = concernIds.indexOf(activeConcernId);
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + offset + concernIds.length) % concernIds.length;
    const nextConcernId = concernIds[nextIndex];
    if (nextConcernId) {
      commitConcern(nextConcernId);
    }
  }

  function isStageSwipeEnabled() {
    return coarsePointerQuery.matches || window.innerWidth <= 820;
  }

  function resetSwipeState() {
    swipePointerId = null;
    swipeStartX = 0;
    swipeStartY = 0;
    swipeMoved = false;
  }

  function handleSwipeCommit(deltaX, deltaY) {
    const threshold = Math.max(44, Math.min(84, stageOrb.clientWidth * 0.12));
    if (Math.abs(deltaX) < threshold || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      moveConcern(1);
      return;
    }

    moveConcern(-1);
  }

  function initByConcernScrollInteractions() {
    if (document.body.dataset.page !== "by-concern") {
      return;
    }

    if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
      document.body.dataset.bcScrollBound = "true";
      document.body.dataset.bcMotion = "reduced";
      return;
    }

    const motionState = window.ERTY_BY_CONCERN_SCROLL_MOTION || {};
    window.ERTY_BY_CONCERN_SCROLL_MOTION = motionState;
    const motionTargets = [];

    function addMotionTargets(selector, options = {}) {
      const {
        variant = "quiet",
        delayBase = 0,
        delayStep = 48,
        maxDelay = 240,
      } = options;

      document.querySelectorAll(selector).forEach((element, index) => {
        if (element.dataset.bcMotionTarget === "true") {
          return;
        }

        element.dataset.bcMotionTarget = "true";
        element.classList.add("bc-motion-item", `bc-motion-item--${variant}`);
        element.style.setProperty("--bc-scroll-motion-delay", `${Math.min(delayBase + index * delayStep, maxDelay)}ms`);
        motionTargets.push(element);
      });
    }

    addMotionTargets(".by-concern-reset__hero-copy", { delayBase: 0, delayStep: 0 });
    addMotionTargets(".by-concern-reset__hero-eyebrow", { delayBase: 40, delayStep: 0 });
    addMotionTargets("#by-concern-hero-title", { variant: "headline", delayBase: 70, delayStep: 0 });
    addMotionTargets(".by-concern-reset__hero-subcopy", { delayBase: 140, delayStep: 0 });
    addMotionTargets(".by-concern-reset__cta", { delayBase: 190, delayStep: 0 });

    addMotionTargets(".bc-selector__intro", { delayBase: 0, delayStep: 0 });
    addMotionTargets(".bc-selector__eyebrow", { delayBase: 40, delayStep: 0 });
    addMotionTargets("#bc-selector-title", { variant: "headline", delayBase: 70, delayStep: 0 });
    addMotionTargets(".bc-selector__desc", { delayBase: 130, delayStep: 0 });
    addMotionTargets(".bc-stage", { variant: "panel", delayBase: 80, delayStep: 0 });
    addMotionTargets(".bc-cue", { variant: "ledger", delayBase: 110, delayStep: 36, maxDelay: 260 });

    addMotionTargets(".bc-next-actions__rail", { variant: "panel", delayBase: 70, delayStep: 0 });
    addMotionTargets(".bc-next-actions__item", { variant: "ledger", delayBase: 110, delayStep: 44, maxDelay: 220 });

    addMotionTargets(".site-footer__brand", { delayBase: 40, delayStep: 0 });
    addMotionTargets(".site-footer__artifact", { delayBase: 80, delayStep: 0 });
    addMotionTargets(".site-footer__artifact-rows span", { variant: "ledger", delayBase: 120, delayStep: 32 });
    addMotionTargets(".site-footer__status, .site-footer__nav-column", { delayBase: 150, delayStep: 36 });

    function revealMotionTarget(element) {
      element.classList.add("is-bc-motion-visible");
      element
        .querySelectorAll(".bc-motion-item--headline")
        .forEach((headline) => headline.classList.add("is-bc-motion-visible"));
    }

    const visibleThreshold = window.innerHeight * 0.94;
    motionTargets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < visibleThreshold && rect.bottom > 0) {
        revealMotionTarget(element);
      }
    });

    if (!motionState.observer) {
      motionState.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            revealMotionTarget(entry.target);
            motionState.observer.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.16,
        }
      );
    }

    motionTargets.forEach((element) => {
      motionState.observer.observe(element);
    });

    document.body.dataset.bcScrollBound = "true";
    document.body.dataset.bcMotion = "ready";
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

  stageOrb.addEventListener("pointerdown", (event) => {
    if (!isStageSwipeEnabled() || event.pointerType === "mouse") {
      return;
    }

    swipePointerId = event.pointerId;
    swipeStartX = event.clientX;
    swipeStartY = event.clientY;
    swipeMoved = false;

    if (typeof stageOrb.setPointerCapture === "function") {
      try {
        stageOrb.setPointerCapture(event.pointerId);
      } catch (error) {
        // Ignore capture failures; swipe still works without exclusive capture.
      }
    }
  });

  stageOrb.addEventListener("pointermove", (event) => {
    if (swipePointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - swipeStartX;
    const deltaY = event.clientY - swipeStartY;
    if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      swipeMoved = true;
      event.preventDefault();
    }
  });

  stageOrb.addEventListener("pointerup", (event) => {
    if (swipePointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - swipeStartX;
    const deltaY = event.clientY - swipeStartY;

    if (swipeMoved) {
      handleSwipeCommit(deltaX, deltaY);
    }

    resetSwipeState();
  });

  stageOrb.addEventListener("pointercancel", resetSwipeState);
  stageOrb.addEventListener("lostpointercapture", resetSwipeState);

  stagePrev.addEventListener("click", (event) => {
    event.preventDefault();
    moveConcern(-1);
  });

  stageNext.addEventListener("click", (event) => {
    event.preventDefault();
    moveConcern(1);
  });

  window.addEventListener("scroll", requestScrollHandoffUpdate, { passive: true });
  window.addEventListener("resize", requestScrollHandoffUpdate);

  if (typeof reduceMotionQuery.addEventListener === "function") {
    reduceMotionQuery.addEventListener("change", requestScrollHandoffUpdate);
  } else if (typeof reduceMotionQuery.addListener === "function") {
    reduceMotionQuery.addListener(requestScrollHandoffUpdate);
  }

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

  applyConcern(activeConcernId, { commit: true, animate: false });
  emitConcernChange();
  preloadConcernImages();
  requestScrollHandoffUpdate();
  initByConcernScrollInteractions();
  document.addEventListener("DOMContentLoaded", initByConcernScrollInteractions);
  document.addEventListener("components:loaded", initByConcernScrollInteractions);
})();
