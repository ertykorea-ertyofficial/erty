function normalizePath(pathname) {
  return pathname.replace(/index\.html$/, "").replace(/\/+$/, "") || "/";
}

const PRODUCT_SLUGS = window.ERTY_PRODUCT_SLUGS || {
  getHref() {
    return "/products/";
  },
};

function linkMatches(targetPath, currentPath) {
  if (targetPath === "/") {
    return currentPath === "/";
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

function markCurrentPage() {
  const currentPath = normalizePath(window.location.pathname);
  const links = document.querySelectorAll("[data-nav-link]");

  links.forEach((link) => {
    const targetPath = normalizePath(link.getAttribute("href") || "");

    if (linkMatches(targetPath, currentPath)) {
      link.setAttribute("aria-current", "page");
      link.classList.add("is-active");
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("is-active");
    }
  });
}

function updateFooterYear() {
  const yearTarget = document.querySelector("[data-current-year]");

  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }
}

function setNavOpen(header, toggle, isOpen) {
  const label = toggle.querySelector("[data-nav-toggle-label]");
  header.dataset.navOpen = isOpen ? "true" : "false";
  document.body.classList.toggle("nav-open", isOpen);
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (label) {
    label.textContent = isOpen ? "Close" : "Menu";
  }
}

function initNavigationToggle() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");

  if (!header || !toggle || !panel || header.dataset.navBound === "true") {
    return;
  }

  header.dataset.navBound = "true";

  const closeNav = () => setNavOpen(header, toggle, false);
  const openNav = () => setNavOpen(header, toggle, true);

  toggle.addEventListener("click", () => {
    const isOpen = header.dataset.navOpen === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.dataset.navOpen === "true") {
      closeNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (header.dataset.navOpen === "true" && !header.contains(event.target)) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023 && header.dataset.navOpen === "true") {
      closeNav();
    }
  });
}

function getPathValue(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function applyCopySlots(data) {
  document.querySelectorAll("[data-home-copy]").forEach((node) => {
    const path = node.dataset.homeCopy || "";
    const value = getPathValue(data.copy, path);

    if (typeof value !== "string") {
      return;
    }

    node.textContent = value;
  });
}

function trackHomeEvent(name, payload = {}) {
  const detail = {
    event: name,
    page: "home",
    timestamp: Date.now(),
    ...payload,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(detail);
  }

  window.dispatchEvent(new CustomEvent("erty:analytics", { detail }));
}

function slugToImagePath(imageKey) {
  return imageKey ? `/assets/images/brand/home/sku-rail/${imageKey}` : "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatEvidenceType(value) {
  const labels = {
    clinical_metric: "임상 수치",
    before_after: "전후 비교",
    in_house_test: "사내 테스트",
    ingredient_claim: "성분 기준",
    protocol_outcome: "프로토콜 결과",
  };

  return labels[value] || value || "";
}

function initHomePage() {
  if (document.body.dataset.page !== "home") {
    return;
  }

  const data = window.ERTY_HOME_DATA;
  if (!data) {
    return;
  }

  if (document.body.dataset.homeInitialized === "true") {
    return;
  }

  renderHeroIndex(data);
  renderOperatingRows(data);
  renderFeaturedSystem(data);
  renderEvidenceGrid(data);
  renderNumberingRows(data);
  renderNextLayers(data);
  renderFaq(data);
  bindHomeStaticEvents();
  document.body.dataset.homeInitialized = "true";
}

function initSharedFooter() {
  const data = window.ERTY_HOME_DATA;
  if (!data) {
    return;
  }

  applyCopySlots(data);
  renderFooterArtifact(data);
}

function renderHeroIndex(data) {
  const root = document.querySelector("[data-hero-index]");
  if (!root) {
    return;
  }

  root.innerHTML = data.copy.hero.indexGroups
    .map(
      (group) => `
        <div class="home-v12-hero-index__group" data-hero-group="${escapeHtml(group.id)}">
          <span class="home-v12-hero-index__label">${escapeHtml(group.label)}</span>
          <div class="home-v12-hero-index__value">${escapeHtml(group.value)}</div>
        </div>
      `
    )
    .join("");
}

function renderOperatingRows(data) {
  const root = document.querySelector("[data-operating-rows]");
  if (!root) {
    return;
  }

  root.innerHTML = data.copy.operating.rows
    .map(
      (row) => `
        <article class="home-v12-operating__row" aria-label="${escapeHtml(`${row.index} ${row.title}`)}">
          <span class="home-v12-operating__index">${escapeHtml(row.index)}</span>
          <div class="home-v12-operating__rule">
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEvidenceGrid(data) {
  const root = document.querySelector("[data-evidence-grid]");
  if (!root) {
    return;
  }

  const orderedItems = [...data.evidence].sort((left, right) => {
    const leftRank = left.emphasis === "primary" ? 0 : 1;
    const rightRank = right.emphasis === "primary" ? 0 : 1;
    return leftRank - rightRank;
  });

  root.innerHTML = orderedItems
    .map((item) => {
      const route = data.routes[item.nextRouteKey];
      const tileClass =
        item.emphasis === "primary"
          ? "home-v12-proof-tile home-v12-proof-tile--primary home-v12-proof-tile--ledger"
          : "home-v12-proof-tile home-v12-proof-tile--secondary home-v12-proof-tile--ledger";
      const lineLabel = `${item.id} · ${data.families[item.family].label}`;

      return `
        <article
          class="${tileClass}"
          data-proof-item
          data-proof-key="${escapeHtml(item.id)}"
          data-proof-emphasis="${escapeHtml(item.emphasis)}"
          data-line="${escapeHtml(item.family)}"
          data-evidence-sku="${escapeHtml(item.skuId)}"
          tabindex="0"
          aria-label="${escapeHtml(`${lineLabel} ${item.metric} ${item.whatChanged}`)}"
        >
          <div class="home-v12-proof-tile__head">
            <span class="home-v12-proof-tile__line">${escapeHtml(lineLabel)}</span>
            <span class="home-v12-proof-tile__type">${escapeHtml(formatEvidenceType(item.evidenceType))}</span>
          </div>
          <div class="home-v12-proof-tile__metric-lock">
            <span class="home-v12-proof-tile__metric">${escapeHtml(item.metric)}</span>
            <strong class="home-v12-proof-tile__title">${escapeHtml(item.whatChanged)}</strong>
          </div>
          <div class="home-v12-proof-tile__copy">
            <p class="home-v12-proof-tile__body">${escapeHtml(item.interpretation)}</p>
          </div>
          <div class="home-v12-proof-tile__footer">
            <small class="home-v12-proof-tile__qualifier">${escapeHtml(item.trustQualifier)}</small>
            <a class="home-v12-proof-tile__route text-link" href="${escapeHtml(route.href)}" data-proof-route="${escapeHtml(item.id)}">${escapeHtml(item.nextRouteLabel || `${route.label} 보기`)}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderNumberingRows(data) {
  const root = document.querySelector("[data-numbering-rows]");
  if (!root) {
    return;
  }

  root.innerHTML = data.numberingRows
    .map(
      (row) => `
        <button
        class="home-v12-system-row home-v7-system__row"
          type="button"
          data-numbering-row
          data-line="${escapeHtml(row.family)}"
          data-sku-target="${escapeHtml(row.representativeSkuId)}"
          aria-label="${escapeHtml(`${row.label} ${row.ids} ${row.route}`)}"
        >
          <span class="home-v12-system-row__family">
            <strong>${escapeHtml(row.label)}</strong>
            <em>${escapeHtml(row.family === "professional" ? "Protocol layer" : "Line family")}</em>
          </span>
          <span class="home-v12-system-row__ids">${escapeHtml(row.ids)}</span>
          <small class="home-v12-system-row__route">${escapeHtml(row.route)}</small>
        </button>
      `
    )
    .join("");
}

function renderNextLayers(data) {
  const root = document.querySelector("[data-next-layer-links]");
  if (!root) {
    return;
  }

  root.innerHTML = data.nextLayers
    .map(
      (entry) => `
        <a
          class="home-v7-next-link"
          href="${escapeHtml(entry.href)}"
          data-line="${escapeHtml(entry.family)}"
          data-route-entry
          data-route-key="${escapeHtml(entry.id)}"
        >
          <span class="home-v7-next-link__label">${escapeHtml(entry.label)}</span>
          <strong>${escapeHtml(entry.benefit)}</strong>
          <small class="home-v7-next-link__cue">${escapeHtml(entry.cue || "")}</small>
        </a>
      `
    )
    .join("");
}

function renderFaq(data) {
  const root = document.querySelector("[data-faq-list]");
  if (!root) {
    return;
  }

  root.innerHTML = data.faq
    .map((item, index) => {
      const routeHref = item.routeHref || "#";
      const routeLabel = item.routeLabel || "NEXT";
      const routeCta = item.routeCta || "다음 경로 보기";
      const indexLabel = item.index || `Q${String(index + 1).padStart(2, "0")}`;
      return `
        <article class="home-v7-faq__item home-v12-faq-card" data-line="${escapeHtml(item.family)}" data-faq-item>
          <div class="home-v12-faq-card__head">
            <span class="home-v12-faq-card__index">${escapeHtml(indexLabel)}</span>
            <span class="home-v12-faq-card__route">${escapeHtml(routeLabel)}</span>
          </div>
          <h4 class="home-v12-faq-card__question">${escapeHtml(item.question)}</h4>
          <p class="home-v12-faq-card__answer">${escapeHtml(item.answer)}</p>
          <a class="home-v12-faq-card__link" href="${escapeHtml(routeHref)}">${escapeHtml(routeCta)}</a>
        </article>
      `;
    })
    .join("");
}

function renderFooterArtifact(data) {
  const root = document.querySelector("[data-footer-numbering]");
  if (!root) {
    return;
  }

  root.innerHTML = data.numberingRows
    .map(
      (row) => `
        <span data-line="${escapeHtml(row.family)}">
          <em>${escapeHtml(row.label)}</em>
          <strong>${escapeHtml(row.ids)}</strong>
          <small>${escapeHtml(row.route)}</small>
        </span>
      `
    )
    .join("");
}

function renderFeaturedSystem(data) {
  const root = document.querySelector("[data-featured-system]");
  if (!root) {
    return;
  }

  const coreRoot = root.querySelector("[data-featured-tabs]");
  const protocolRoot = root.querySelector("[data-featured-protocol]");
  const compactScopeLabel = (value) => {
    const compactLabels = {
      "제품별 확인": "",
      "제품별 확인 필요": "",
      "제품별 상세 확인": "상세",
      "라인 기준 해석": "라인 기준",
      "수치 범위 교차확인": "수치 확인",
      "프로토콜 기준": "프로토콜",
    };

    return Object.prototype.hasOwnProperty.call(compactLabels, value) ? compactLabels[value] : value || "";
  };

  if (coreRoot) {
    const familyOrder = ["balancing", "hydrating", "revitalizing", "brightening"];
    coreRoot.innerHTML = familyOrder
      .map((familyKey, familyIndex) => {
        const family = data.families[familyKey];
        const items = data.skus.filter((item) => item.kind === "core" && item.family === familyKey);
        const labelId = `featured-group-${familyKey}`;
        const familyIds = items.map((item) => item.id).join(" · ");

        return `
          <section class="home-v12-explorer-group" data-line-group="${escapeHtml(familyKey)}">
            <p class="home-v12-explorer-group__label" id="${escapeHtml(labelId)}">
              <span>${escapeHtml(family.label)}</span>
              <small>${escapeHtml(familyIds)}</small>
            </p>
            <div class="home-v12-explorer-group__items">
              ${items
                .map((item, itemIndex) => {
                  const scopeLabel = ["27", "55", "57"].includes(item.id) ? "" : compactScopeLabel(item.scopeLabel);
                  return `
                    <button
                      class="home-v12-explorer-item"
                      type="button"
                      role="tab"
                      aria-selected="${item.id === data.defaultSkuId ? "true" : "false"}"
                      aria-controls="featured-selection-panel"
                      aria-describedby="${escapeHtml(labelId)}"
                      tabindex="${item.id === data.defaultSkuId ? "0" : "-1"}"
                      data-featured-item
                      data-sku-id="${escapeHtml(item.id)}"
                      data-line="${escapeHtml(item.family)}"
                      data-kind="${escapeHtml(item.kind)}"
                      data-group-index="${familyIndex}"
                      data-item-index="${itemIndex}"
                    >
                      <span class="home-v12-explorer-item__number">${escapeHtml(item.id)}</span>
                      <span class="home-v12-explorer-item__meta">
                        <span class="home-v12-explorer-item__line">${escapeHtml(item.roleLabel)}</span>
                        <strong>${escapeHtml(item.explorerTitle)}</strong>
                      </span>
                      ${scopeLabel ? `<small>${escapeHtml(scopeLabel)}</small>` : ""}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");
  }

  if (protocolRoot) {
    const protocols = data.skus.filter((item) => item.kind === "protocol");
    protocolRoot.innerHTML = protocols
      .map(
        (item, index) => `
            <button
            class="home-v12-protocol-item"
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="featured-selection-panel"
            aria-describedby="featured-protocol-label"
            tabindex="-1"
            data-featured-item
            data-sku-id="${escapeHtml(item.id)}"
            data-line="${escapeHtml(item.family)}"
            data-kind="${escapeHtml(item.kind)}"
            data-group-index="4"
            data-item-index="${index}"
          >
            <span class="home-v12-protocol-item__number">${escapeHtml(item.id)}</span>
            <span class="home-v12-protocol-item__meta">
              <span class="home-v12-protocol-item__line">${escapeHtml(item.roleLabel)}</span>
              <strong>${escapeHtml(item.displayName)}</strong>
              <small class="home-v12-protocol-item__subtitle">${escapeHtml(item.explorerTitle)}</small>
            </span>
          </button>
        `
      )
      .join("");
  }
}

function bindHomeStaticEvents() {
  const root = document.querySelector("[data-featured-system]");
  if (!root || root.dataset.bound === "true") {
    return;
  }

  const data = window.ERTY_HOME_DATA;
  const skuMap = new Map(data.skus.map((item) => [item.id, item]));
  const evidenceMap = new Map(data.evidence.map((item) => [item.id, item]));
  const activeLive = root.querySelector('[data-featured-slot="live"]');
  const panel = document.getElementById("featured-selection-panel");
  const slots = {
    kicker: root.querySelector('[data-featured-slot="kicker"]'),
    mode: root.querySelector('[data-featured-slot="mode"]'),
    number: root.querySelector('[data-featured-slot="number"]'),
    line: root.querySelector('[data-featured-slot="line"]'),
    name: root.querySelector('[data-featured-slot="name"]'),
    signal: root.querySelector('[data-featured-slot="signal"]'),
    proof: root.querySelector('[data-featured-slot="proof"]'),
    routeTag: root.querySelector('[data-featured-slot="routeTag"]'),
    routeText: root.querySelector('[data-featured-slot="routeText"]'),
    relation: root.querySelector('[data-featured-slot="relation"]'),
    scope: root.querySelector('[data-featured-slot="scope"]'),
    caption: root.querySelector('[data-featured-slot="caption"]'),
    summary: root.querySelector('[data-featured-slot="summary"]'),
    link: root.querySelector('[data-featured-slot="link"]'),
    image: root.querySelector('[data-featured-slot="image"]'),
  };
  const routeEntries = Array.from(document.querySelectorAll("[data-route-entry]"));
  const proofItems = Array.from(document.querySelectorAll("[data-proof-item]"));
  const numberingRows = Array.from(document.querySelectorAll("[data-numbering-row]"));
  const featuredItems = Array.from(document.querySelectorAll("[data-featured-item]"));
  const protocolToggle = root.querySelector("[data-featured-protocol-toggle]");
  const protocolPanel = root.querySelector("#featured-protocol-panel");
  const proofStatusLabel = document.querySelector('[data-proof-slot="activeLabel"]');
  const proofStatusSummary = document.querySelector('[data-proof-slot="activeSummary"]');
  const proofRoot = document.querySelector(".home-v11-proof");
  const heroCtas = Array.from(document.querySelectorAll("[data-home-cta]"));
  const nextLayerLinks = Array.from(document.querySelectorAll("[data-route-entry]"));
  const evidenceLinks = Array.from(document.querySelectorAll("[data-proof-route]"));
  const explorerGroups = Array.from(root.querySelectorAll(".home-v12-explorer-group"));
  const protocolBand = root.querySelector(".home-v12-featured-protocol");

  root.dataset.bound = "true";

  let activeSkuId = data.defaultSkuId;
  let previewSkuId = "";
  let previewStartedAt = 0;
  let previewTrackedId = "";
  let protocolOpen = true;

  const familyBridge = {
    balancing: "01",
    hydrating: "01",
    revitalizing: "03",
    brightening: "02",
  };
  const protocolToFamilies = {
    "01": ["balancing", "hydrating"],
    "02": ["brightening"],
    "03": ["revitalizing"],
  };

  function getSku(id) {
    return skuMap.get(id) || null;
  }

  function getRenderedSku() {
    return getSku(previewSkuId || activeSkuId);
  }

  function getRelatedEvidenceIds(item) {
    return item?.relatedEvidenceIds || [];
  }

  function getRouteFor(item) {
    return data.routes[item?.routeKey] || null;
  }

  function getRelationFor(item) {
    if (!item) {
      return "";
    }

    if (item.kind === "protocol") {
      const families = protocolToFamilies[item.id] || [];
      return families.map((family) => data.families[family]?.label).filter(Boolean).join(" · ") || "집중 프로토콜";
    }

    const protocolId = item.relatedProtocolIds[0] || familyBridge[item.family];
    return protocolId ? `${protocolId} 프로토콜` : "프로토콜";
  }

  function setPanelState(renderedItem) {
    if (!renderedItem) {
      return;
    }

    root.dataset.activeSku = activeSkuId;
    root.dataset.previewSku = previewSkuId;
    root.dataset.activeLine = getSku(activeSkuId)?.family || "";
    root.dataset.previewLine = getSku(previewSkuId)?.family || "";
    root.dataset.renderSku = renderedItem.id;
    root.dataset.renderKind = renderedItem.kind;
    root.dataset.renderState = previewSkuId ? "preview" : "active";

    if (panel) {
      panel.dataset.line = renderedItem.family;
      panel.dataset.kind = renderedItem.kind;
      panel.dataset.renderState = previewSkuId ? "preview" : "selected";
      panel.dataset.renderSku = renderedItem.id;
    }

    slots.kicker.textContent = previewSkuId ? data.copy.featured.panelPreviewKicker : data.copy.featured.panelKicker;
    slots.mode.textContent = renderedItem.kind === "protocol" ? "집중 프로토콜" : "핵심 SKU";
    slots.number.textContent = renderedItem.id;
    slots.line.textContent = renderedItem.roleLabel;
    if (slots.name) {
      slots.name.textContent = renderedItem.displayName;
    }
    slots.signal.textContent = renderedItem.proofMetric || renderedItem.proofLabel;
    slots.proof.textContent = renderedItem.proofLabel;
    slots.caption.textContent = renderedItem.oneLiner;
    slots.summary.textContent = renderedItem.panelBody;
    slots.scope.textContent = renderedItem.scopeLabel;
    slots.relation.textContent = getRelationFor(renderedItem);

    const route = getRouteFor(renderedItem);
    slots.routeTag.textContent = route?.shortLabel || renderedItem.routeLabel;
    slots.routeText.textContent = route ? `${route.benefit}` : "다음 경로 확인";
    slots.link.setAttribute(
      "href",
      PRODUCT_SLUGS.getHref(renderedItem.id) || renderedItem.detailHref,
    );
    slots.link.textContent = renderedItem.actionLabel;
    slots.image.setAttribute("src", slugToImagePath(renderedItem.imageKey));
    slots.image.setAttribute("alt", renderedItem.displayName);
    slots.image.dataset.skuId = renderedItem.id;
    slots.image.style.setProperty(
      "--home-featured-image-scale",
      "1",
    );
    slots.image.style.setProperty(
      "--home-featured-image-offset-y",
      renderedItem.id === "01" ? "-5px" : "0px",
    );

    if (activeLive && !previewSkuId) {
      activeLive.textContent = `${renderedItem.id} ${renderedItem.roleLabel} 선택됨. ${renderedItem.oneLiner}`;
    }
  }

  function syncExplorerStates(renderedItem) {
    featuredItems.forEach((item) => {
      const itemId = item.dataset.skuId || "";
      const itemData = getSku(itemId);
      const isActive = itemId === activeSkuId;
      const isPreview = Boolean(previewSkuId) && itemId === previewSkuId;
      const isRelated =
        renderedItem?.kind === "protocol"
          ? (protocolToFamilies[renderedItem.id] || []).includes(itemData?.family || "")
          : itemData?.kind === "protocol"
            ? itemId === (renderedItem.relatedProtocolIds[0] || familyBridge[renderedItem.family])
            : itemData?.family === renderedItem.family;

      item.classList.toggle("is-selected", isActive);
      item.classList.toggle("is-preview", isPreview && !isActive);
      item.classList.toggle("is-related", isRelated && !isActive && !isPreview);
      item.dataset.state = isActive ? "active" : isPreview ? "preview" : isRelated ? "related" : "idle";
      item.setAttribute("aria-selected", isActive ? "true" : "false");
      item.tabIndex = isActive ? 0 : -1;
    });

    explorerGroups.forEach((group) => {
      const family = group.dataset.lineGroup || "";
      const familyItems = featuredItems.filter((item) => item.dataset.line === family && item.dataset.kind === "core");
      const hasActive = familyItems.some((item) => item.dataset.state === "active");
      const hasPreview = familyItems.some((item) => item.dataset.state === "preview");
      const hasRelated = familyItems.some((item) => item.dataset.state === "related");

      group.classList.toggle("is-active", hasActive);
      group.classList.toggle("is-preview", hasPreview);
      group.classList.toggle("is-related", hasRelated && !hasActive && !hasPreview);
    });

    if (protocolBand) {
      const protocolItems = featuredItems.filter((item) => item.dataset.kind === "protocol");
      const hasActive = protocolItems.some((item) => item.dataset.state === "active");
      const hasPreview = protocolItems.some((item) => item.dataset.state === "preview");
      const hasRelated = protocolItems.some((item) => item.dataset.state === "related");

      protocolBand.classList.toggle("is-active", hasActive);
      protocolBand.classList.toggle("is-preview", hasPreview);
      protocolBand.classList.toggle("is-related", hasRelated && !hasActive && !hasPreview);
    }
  }

  function syncRoutes(renderedItem) {
    const activeRoute = getRouteFor(getSku(activeSkuId))?.id || "";
    const previewRoute = getRouteFor(getSku(previewSkuId))?.id || "";
    routeEntries.forEach((entry) => {
      const key = entry.dataset.routeKey || "";
      const isActive = key === activeRoute;
      const isPreview = Boolean(previewRoute) && key === previewRoute && key !== activeRoute;
      const isRelated = renderedItem?.kind === "protocol"
        ? key === "guide"
        : key === (getRouteFor(renderedItem)?.id || "");

      entry.classList.toggle("is-active", isActive);
      entry.classList.toggle("is-preview", isPreview);
      entry.classList.toggle("is-related", isRelated && !isActive && !isPreview);
      entry.dataset.state = isActive ? "active" : isPreview ? "preview" : isRelated ? "related" : "idle";
    });
  }

  function syncEvidence(renderedItem) {
    const activeRelated = getRelatedEvidenceIds(getSku(activeSkuId));
    const previewRelated = getRelatedEvidenceIds(getSku(previewSkuId));
    const relatedFamilies = renderedItem?.kind === "protocol" ? protocolToFamilies[renderedItem.id] || [] : [];

    proofItems.forEach((item) => {
      const proofKey = item.dataset.proofKey || "";
      const proofData = evidenceMap.get(proofKey);
      const isActive = activeRelated.includes(proofKey);
      const isPreview = previewRelated.includes(proofKey) && !isActive;
      const isRelated =
        renderedItem?.kind === "core"
          ? getRelatedEvidenceIds(renderedItem).includes(proofKey)
          : relatedFamilies.includes(proofData?.family || "");

      item.classList.toggle("is-active", isActive);
      item.classList.toggle("is-preview", isPreview);
      item.classList.toggle("is-related", isRelated && !isActive && !isPreview);
      item.dataset.state = isActive ? "active" : isPreview ? "preview" : isRelated ? "related" : "idle";
      item.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (!proofStatusLabel || !proofStatusSummary) {
      return;
    }

    if (renderedItem.kind === "protocol") {
      proofRoot.dataset.activeProofLine = "professional";
      proofStatusLabel.textContent = `집중 프로토콜 · ${renderedItem.id}`;
      proofStatusSummary.textContent = "직접 수치 대신 연결된 라인과 단계 신호를 먼저 확인";
      return;
    }

    const evidenceId = renderedItem.relatedEvidenceIds[0] || "";
    const evidence = evidenceMap.get(evidenceId);
    proofRoot.dataset.activeProofLine = evidence?.family || renderedItem.family;
    proofStatusLabel.textContent = evidence ? `${evidence.id} · ${data.families[evidence.family].label}` : `${renderedItem.id} · ${renderedItem.roleLabel}`;
    proofStatusSummary.textContent = evidence ? evidence.whatChanged : renderedItem.oneLiner;
  }

  function syncNumbering(renderedItem) {
    const activeItem = getSku(activeSkuId) || renderedItem;
    const previewItem = previewSkuId ? renderedItem : null;

    function matchesRow(item, rowLine) {
      if (!item) {
        return false;
      }
      return item.kind === "protocol" ? rowLine === "professional" : rowLine === item.family;
    }

    function relatesToRow(item, rowLine) {
      if (!item) {
        return false;
      }
      return item.kind === "protocol"
        ? rowLine === "professional" || (protocolToFamilies[item.id] || []).includes(rowLine)
        : rowLine === item.family || (rowLine === "professional" && familyBridge[item.family]);
    }

    numberingRows.forEach((row) => {
      const rowLine = row.dataset.line || "";
      const isSelected = matchesRow(activeItem, rowLine);
      const isPreview = previewItem ? matchesRow(previewItem, rowLine) && !isSelected : false;
      const isRelated = previewItem
        ? relatesToRow(previewItem, rowLine) && !isPreview && !isSelected
        : relatesToRow(activeItem, rowLine) && !isSelected;

      row.classList.toggle("is-active", isSelected);
      row.classList.toggle("is-preview", isPreview);
      row.classList.toggle("is-related", isRelated);
      row.dataset.state = isSelected ? "selected" : isPreview ? "preview" : isRelated ? "related" : "idle";
      row.setAttribute("aria-pressed", isSelected ? "true" : "false");
      row.setAttribute("aria-current", isSelected ? "true" : "false");
    });
  }

  function commitSelection(nextId, meta = {}) {
    const nextItem = getSku(nextId);
    if (!nextItem) {
      return;
    }

    clearPreview();
    activeSkuId = nextId;
    const renderedItem = getRenderedSku();
    setPanelState(renderedItem);
    syncExplorerStates(renderedItem);
    syncRoutes(renderedItem);
    syncEvidence(renderedItem);
    syncNumbering(renderedItem);

    trackHomeEvent(nextItem.kind === "protocol" ? "home_protocol_select" : "home_sku_select_commit", {
      skuId: nextItem.id,
      kind: nextItem.kind,
      family: nextItem.family,
      trigger: meta.trigger || "commit",
    });
  }

  function flushPreviewDwell(reason) {
    if (!previewTrackedId || !previewStartedAt) {
      return;
    }

    const duration = Math.round(performance.now() - previewStartedAt);
    if (duration >= 600) {
      trackHomeEvent("home_sku_preview_dwell", {
        skuId: previewTrackedId,
        durationMs: duration,
        reason,
      });
    }

    previewTrackedId = "";
    previewStartedAt = 0;
  }

  function setPreview(nextId) {
    if (!nextId || nextId === activeSkuId) {
      clearPreview();
      return;
    }

    if (previewSkuId !== nextId) {
      flushPreviewDwell("switch");
      previewSkuId = nextId;
      previewTrackedId = nextId;
      previewStartedAt = performance.now();
    }

    const renderedItem = getRenderedSku();
    setPanelState(renderedItem);
    syncExplorerStates(renderedItem);
    syncRoutes(renderedItem);
    syncEvidence(renderedItem);
    syncNumbering(renderedItem);
  }

  function clearPreview() {
    if (!previewSkuId) {
      return;
    }

    flushPreviewDwell("clear");
    previewSkuId = "";
    const renderedItem = getRenderedSku();
    setPanelState(renderedItem);
    syncExplorerStates(renderedItem);
    syncRoutes(renderedItem);
    syncEvidence(renderedItem);
    syncNumbering(renderedItem);
  }

  function getClusterItems(item) {
    const cluster = item.closest(".home-v12-explorer-group__items, .home-v12-featured-protocol__items");
    return cluster ? Array.from(cluster.querySelectorAll("[data-featured-item]")) : featuredItems;
  }

  function syncProtocolCollapse(forceOpen = null) {
    if (!protocolToggle || !protocolPanel) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) {
      protocolOpen = true;
    } else if (typeof forceOpen === "boolean") {
      protocolOpen = forceOpen;
    }

    protocolToggle.setAttribute("aria-expanded", protocolOpen ? "true" : "false");
    protocolPanel.hidden = !protocolOpen && isMobile;
    root.dataset.protocolOpen = protocolOpen ? "true" : "false";
  }

  featuredItems.forEach((item) => {
    const skuId = item.dataset.skuId || "";

    item.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover)").matches) {
        setPreview(skuId);
      }
    });

    item.addEventListener("focus", () => {
      setPreview(skuId);
    });

    item.addEventListener("blur", () => {
      window.requestAnimationFrame(() => {
        const activeElement = document.activeElement;
        if (!activeElement || !root.contains(activeElement)) {
          clearPreview();
        }
      });
    });

    item.addEventListener("click", () => {
      commitSelection(skuId, { trigger: "click" });
      if (item.dataset.kind === "protocol") {
        syncProtocolCollapse(true);
      }
    });

    item.addEventListener("keydown", (event) => {
      const clusterItems = getClusterItems(item);
      const currentIndex = clusterItems.indexOf(item);
      let nextIndex = currentIndex;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = Math.min(clusterItems.length - 1, currentIndex + 1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = Math.max(0, currentIndex - 1);
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = clusterItems.length - 1;
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        commitSelection(skuId, { trigger: "keyboard" });
        if (item.dataset.kind === "protocol") {
          syncProtocolCollapse(true);
        }
        return;
      } else if (event.key === "Escape") {
        event.preventDefault();
        clearPreview();
        item.blur();
        return;
      } else {
        return;
      }

      event.preventDefault();
      clusterItems[nextIndex]?.focus();
    });
  });

  if (protocolToggle) {
    protocolToggle.addEventListener("click", () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (!isMobile) {
        return;
      }

      protocolOpen = !protocolOpen;
      syncProtocolCollapse(protocolOpen);
    });
  }

  window.addEventListener("resize", () => {
    syncProtocolCollapse();
  });

  root.addEventListener("pointerleave", () => {
    if (previewSkuId) {
      clearPreview();
    }
  });

  proofItems.forEach((item) => {
    const targetId = item.dataset.evidenceSku || "";

    item.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover)").matches) {
        setPreview(targetId);
      }
    });

    item.addEventListener("focusin", () => {
      setPreview(targetId);
    });

    item.addEventListener("mouseleave", () => {
      const activeElement = document.activeElement;
      if (activeElement && item.contains(activeElement)) {
        return;
      }
      clearPreview();
    });

    item.addEventListener("focusout", (event) => {
      if (event.relatedTarget && item.contains(event.relatedTarget)) {
        return;
      }
      clearPreview();
    });

    item.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        return;
      }
      commitSelection(targetId, { trigger: "proof" });
    });

    item.addEventListener("keydown", (event) => {
      if (event.target.closest("a")) {
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      commitSelection(targetId, { trigger: "proof-keyboard" });
    });
  });

  numberingRows.forEach((row) => {
    const targetId = row.dataset.skuTarget || "";

    row.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover)").matches) {
        setPreview(targetId);
      }
    });

    row.addEventListener("focus", () => {
      setPreview(targetId);
    });

    row.addEventListener("mouseleave", clearPreview);
    row.addEventListener("blur", clearPreview);

    row.addEventListener("click", () => {
      commitSelection(targetId, { trigger: "numbering" });
      trackHomeEvent("home_numbering_row_click", {
        skuId: targetId,
        line: row.dataset.line || "",
      });
    });
  });

  heroCtas.forEach((link) => {
    link.addEventListener("click", () => {
      trackHomeEvent("home_hero_cta_click", {
        cta: link.dataset.homeCta || "",
        href: link.getAttribute("href") || "",
      });
    });
  });

  nextLayerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      trackHomeEvent("home_next_layer_click", {
        routeKey: link.dataset.routeKey || "",
        href: link.getAttribute("href") || "",
      });
    });
  });

  evidenceLinks.forEach((link) => {
    link.addEventListener("click", () => {
      trackHomeEvent("home_evidence_click", {
        proofKey: link.dataset.proofRoute || "",
        href: link.getAttribute("href") || "",
      });
    });
  });

  commitSelection(activeSkuId, { trigger: "initial" });
  protocolOpen = !window.matchMedia("(max-width: 767px)").matches;
  syncProtocolCollapse(protocolOpen);
}

function initApp() {
  markCurrentPage();
  updateFooterYear();
  initNavigationToggle();
  initSharedFooter();
  initHomePage();
}

document.addEventListener("DOMContentLoaded", initApp);
document.addEventListener("components:loaded", initApp);
