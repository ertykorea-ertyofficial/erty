(function () {
  const pxExplorer = document.getElementById("product-explorer");
  const pxShell = document.getElementById("px-shell");
  const pxEye = document.getElementById("px-eyebrow");
  const pxTitle = document.getElementById("px-title");
  const pxDesc = document.getElementById("px-desc");
  const pxConcernChip = document.getElementById("px-context-concern");
  const pxRouteChip = document.getElementById("px-context-route");
  const pxFamilyChip = document.getElementById("px-context-family");
  const pxImage = document.getElementById("px-image");
  const pxVisual = pxExplorer?.querySelector(".px-stage__visual");
  const pxFamily = document.getElementById("px-family");
  const pxNumber = document.getElementById("px-number");
  const pxName = document.getElementById("px-name");
  const pxSummary = document.getElementById("px-summary");
  const pxDetail = document.getElementById("px-detail");
  const pxMeta = document.getElementById("px-meta");
  const pxPrimary = document.getElementById("px-primary");
  const pxSecondary = document.getElementById("px-secondary");
  const pxFamilyTabs = document.getElementById("px-family-tabs");
  const pxNumberRail = document.getElementById("px-number-rail");
  const pxPrev = document.getElementById("px-prev");
  const pxNext = document.getElementById("px-next");

  const productsCatalog = document.getElementById("products-catalog");
  const catalogTitle = document.getElementById("products-catalog-title");
  const catalogDescription = document.getElementById("products-catalog-description");
  const catalogStatus = document.getElementById("products-catalog-status");
  const productGrid = document.getElementById("product-grid");
  const sentinel = document.getElementById("product-grid-sentinel");

  if (
    !pxExplorer ||
    !pxShell ||
    !pxImage ||
    !pxVisual ||
    !pxFamily ||
    !pxNumber ||
    !pxName ||
    !pxSummary ||
    !pxDetail ||
    !pxMeta ||
    !pxPrimary ||
    !pxSecondary ||
    !pxFamilyTabs ||
    !pxNumberRail ||
    !pxPrev ||
    !pxNext ||
    !productsCatalog ||
    !catalogTitle ||
    !catalogDescription ||
    !catalogStatus ||
    !productGrid ||
    !sentinel
  ) {
    console.error("[products] Missing explorer/catalog DOM contract");
    return;
  }

  const HOME_EXPLORER_IMAGE_MAP = {
    "01": "/assets/images/brand/home/sku-rail/01.png",
    "02": "/assets/images/brand/home/sku-rail/02.png",
    "03": "/assets/images/brand/home/sku-rail/03.png",
    "11": "/assets/images/brand/home/sku-rail/11.png",
    "13": "/assets/images/brand/home/sku-rail/13.png",
    "15": "/assets/images/brand/home/sku-rail/15.png",
    "21": "/assets/images/brand/home/sku-rail/21.png",
    "23": "/assets/images/brand/home/sku-rail/23.png",
    "25": "/assets/images/brand/home/sku-rail/25.png",
    "27": "/assets/images/brand/home/sku-rail/27.png",
    "35": "/assets/images/brand/home/sku-rail/35.png",
    "37": "/assets/images/brand/home/sku-rail/37.png",
    "50": "/assets/images/brand/home/sku-rail/50.png",
    "55": "/assets/images/brand/home/sku-rail/55.png",
    "57": "/assets/images/brand/home/sku-rail/57.png",
  };

  const pxProducts = [
    {
      id: "11",
      family: "balancing",
      familyLabel: "BALANCING",
      name: "Cleansing Gel for Skin Balancing",
      summary: "번들거림과 막힘이 먼저라면 11로 세정 리듬부터 정리합니다.",
      detail:
        "무리한 각질 제거보다 먼저 과한 유분과 잔여 노폐물의 흐름을 부드럽게 정리하는 시작 번호입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["11"],
      href: "#product-card-11",
    },
    {
      id: "13",
      family: "balancing",
      familyLabel: "BALANCING",
      name: "Purifying Toner for Skin Balancing",
      summary: "13은 피지와 모공 흐름이 먼저 신경 쓰일 때 보는 번호입니다.",
      detail:
        "막힘과 산화 스트레스를 먼저 다루며 세정 이후의 균형을 이어 주는 정리 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["13"],
      href: "#product-card-13",
    },
    {
      id: "15",
      family: "balancing",
      familyLabel: "BALANCING",
      name: "Balancing Booster 15",
      summary: "15는 유수분 밸런스와 문제성 피부 컨디션을 보완하는 단계입니다.",
      detail:
        "세정과 피지 정리 이후 피부가 무너지지 않도록 밸런스 축을 보완합니다.",
      image: HOME_EXPLORER_IMAGE_MAP["15"],
      href: "#product-card-15",
    },
    {
      id: "21",
      family: "hydrating",
      familyLabel: "HYDRATING",
      name: "Cleansing Milk for Skin Hydrating",
      summary: "당김과 민감이 함께 있을 때는 자극을 줄인 세정부터 시작합니다.",
      detail:
        "과도한 세정보다 자극을 줄이며 유수분 밸런스를 유지하는 부드러운 클렌징 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["21"],
      href: "#product-card-21",
    },
    {
      id: "23",
      family: "hydrating",
      familyLabel: "HYDRATING",
      name: "Tonic Lotion for Skin Hydrating",
      summary: "속당김이 먼저라면 23부터 수분 통로를 엽니다.",
      detail:
        "피부가 먼저 받아들일 수 있는 수분 길을 정리해 당김과 들뜸을 줄이는 시작 번호입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["23"],
      href: "#product-card-23",
    },
    {
      id: "25",
      family: "hydrating",
      familyLabel: "HYDRATING",
      name: "Concentrated Booster for Skin Hydrating",
      summary: "25는 당김과 수분 부족을 직접 채우는 단계입니다.",
      detail:
        "수분 공급 축을 두텁게 만들어 속당김과 표면 들뜸을 동시에 보완하는 보습 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["25"],
      href: "#product-card-25",
    },
    {
      id: "27",
      family: "hydrating",
      familyLabel: "HYDRATING",
      name: "Derma Hydro-AQUAX Cream",
      summary: "27은 수분과 장벽을 함께 유지하는 핵심 번호입니다.",
      detail:
        "수분이 빠르게 날아가지 않도록 붙잡아 붉음과 민감이 동반된 건조에도 대응합니다.",
      image: HOME_EXPLORER_IMAGE_MAP["27"],
      href: "#product-card-27",
    },
    {
      id: "35",
      family: "revitalizing",
      familyLabel: "REVITALIZING",
      name: "Concentrated Booster for Skin Revitalizing",
      summary: "35는 회복 리듬과 피부 컨디션을 먼저 끌어올리는 번호입니다.",
      detail:
        "처짐과 회복 저하가 먼저 느껴질 때 흐름을 정돈하고 피부 상태를 다시 세우는 보조 축입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["35"],
      href: "#product-card-35",
    },
    {
      id: "37",
      family: "revitalizing",
      familyLabel: "REVITALIZING",
      name: "Intensive Cellular ER Cream",
      summary: "장벽 약화와 붉음이 먼저라면 37부터 보는 편이 빠릅니다.",
      detail:
        "피부 지질 보호막과 세컨드 스킨 개념으로 무너진 장벽 컨디션을 먼저 붙잡는 핵심 번호입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["37"],
      href: "#product-card-37",
    },
    {
      id: "50",
      family: "brightening",
      familyLabel: "BRIGHTENING",
      name: "Sun Cream for Brightening 50",
      summary: "50은 밝기 변화를 외부 자극으로부터 지켜 주는 방어 단계입니다.",
      detail:
        "브라이트닝 축 이후 톤 변화를 유지하기 위한 UV 방어와 외부 자극 보호 역할을 합니다.",
      image: HOME_EXPLORER_IMAGE_MAP["50"],
      href: "#product-card-50",
    },
    {
      id: "55",
      family: "brightening",
      familyLabel: "BRIGHTENING",
      name: "Brightening Booster 55",
      summary: "칙칙함과 잡티가 먼저라면 55부터 밝기 축을 확인합니다.",
      detail:
        "브라이트닝의 시작 번호로, 기미와 어두운 톤을 먼저 다루는 핵심 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["55"],
      href: "#product-card-55",
    },
    {
      id: "57",
      family: "brightening",
      familyLabel: "BRIGHTENING",
      name: "Brightening Cream 57",
      summary:
        "57은 붉음·노란기·칙칙함을 함께 정리하는 톤 보정 단계입니다.",
      detail:
        "55 이후 더 넓은 의미의 피부 톤을 정리하고, 밝기 흐름을 이어 가는 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["57"],
      href: "#product-card-57",
    },
    {
      id: "01",
      family: "professional",
      familyLabel: "PROFESSIONAL",
      name: "Perfect Soothing Solution 01",
      summary: "거친 결과 각질은 01부터 결을 정리하는 편이 안정적입니다.",
      detail:
        "저자극 필링과 표면 reset에 가까운 시작 번호로, 결 정리와 다음 흡수 단계를 여는 역할을 합니다.",
      image: HOME_EXPLORER_IMAGE_MAP["01"],
      href: "#product-card-01",
    },
    {
      id: "02",
      family: "professional",
      familyLabel: "PROFESSIONAL",
      name: "Perfect N.Cell Ampoule 02",
      summary: "02는 톤 리페어와 밀도 축을 보완하는 프로토콜 단계입니다.",
      detail:
        "회복 이후 더 정교한 케어가 필요할 때 톤 리페어와 리모델링 축을 이어 주는 보조 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["02"],
      href: "#product-card-02",
    },
    {
      id: "03",
      family: "professional",
      familyLabel: "PROFESSIONAL",
      name: "Perfect Spicule Formulation 03",
      summary: "03은 재생 리모델링을 보조하는 프로토콜 단계입니다.",
      detail:
        "회복과 장벽 축 이후 피부 밀도와 리모델링을 이어 보는 프로토콜의 마지막 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["03"],
      href: "#product-card-03",
    },
  ];

  const pxConcernMap = {
    oil: {
      title: "유분 · 트러블 · 모공",
      route: ["11", "13", "15"],
      family: "balancing",
    },
    dehydration: {
      title: "수분 부족 · 속당김",
      route: ["23", "25", "27"],
      family: "hydrating",
    },
    barrier: {
      title: "장벽 약화 · 붉은기",
      route: ["37", "35"],
      family: "revitalizing",
    },
    tone: {
      title: "칙칙함 · 잡티 · 톤 저하",
      route: ["55", "57", "50"],
      family: "brightening",
    },
    texture: {
      title: "거친 결 · 각질",
      route: ["01", "23", "37"],
      family: "professional",
    },
    recovery: {
      title: "회복이 느림 · 탄력 저하",
      route: ["35", "37", "02"],
      family: "revitalizing",
    },
  };

  const pxFamilyOrder = [
    { key: "all", label: "ALL" },
    { key: "balancing", label: "BALANCING" },
    { key: "hydrating", label: "HYDRATING" },
    { key: "revitalizing", label: "REVITALIZING" },
    { key: "brightening", label: "BRIGHTENING" },
    { key: "professional", label: "PROFESSIONAL" },
  ];

  const FAMILY_META = {
    all: { key: "all", label: "ALL", countLabel: "전체" },
    balancing: { key: "balancing", label: "BALANCING", countLabel: "Balancing", accentRgb: "26, 140, 90" },
    hydrating: { key: "hydrating", label: "HYDRATING", countLabel: "Hydrating", accentRgb: "39, 113, 188" },
    revitalizing: { key: "revitalizing", label: "REVITALIZING", countLabel: "Revitalizing", accentRgb: "179, 53, 64" },
    brightening: { key: "brightening", label: "BRIGHTENING", countLabel: "Brightening", accentRgb: "198, 151, 27" },
    professional: { key: "professional", label: "PROFESSIONAL", countLabel: "Professional", accentRgb: "88, 88, 88" },
  };

  const INITIAL_VISIBLE_COUNT = 8;
  const LOAD_INCREMENT = 4;
  const LOAD_DELAY_MS = 220;
  const SWIPE_THRESHOLD = 42;

  const state = {
    activeConcern: null,
    activeFamily: "all",
    activeId: "11",
    previewId: null,
    previewFamily: null,
    visibleCount: INITIAL_VISIBLE_COUNT,
    isLoadingMore: false,
    observer: null,
    swipeStartX: null,
  };

  function getSearchState() {
    const params = new URLSearchParams(window.location.search);
    return {
      concern: params.get("concern"),
      start: params.get("start"),
      family: params.get("family"),
    };
  }

  function getProductById(id) {
    return pxProducts.find((product) => product.id === id) || null;
  }

  function getProductsForFamily(family) {
    if (family === "all") {
      return pxProducts;
    }

    return pxProducts.filter((product) => product.family === family);
  }

  function getVisibleProducts() {
    return getProductsForFamily(state.activeFamily);
  }

  function getDisplayedProduct() {
    return getProductById(state.previewId || state.activeId) || getVisibleProducts()[0] || pxProducts[0];
  }

  function getCurrentConcernData() {
    if (!state.activeConcern) {
      return null;
    }

    return pxConcernMap[state.activeConcern] || null;
  }

  function getFamilyCounts() {
    return pxFamilyOrder.map((family) => ({
      ...family,
      count:
        family.key === "all"
          ? pxProducts.length
          : pxProducts.filter((product) => product.family === family.key).length,
    }));
  }

  function applyExplorerAccent(family) {
    pxExplorer.classList.remove(
      "is-balancing",
      "is-hydrating",
      "is-revitalizing",
      "is-brightening",
      "is-professional",
    );

    if (family && family !== "all") {
      pxExplorer.classList.add(`is-${family}`);
    }
  }

  function applyCatalogAccent(family) {
    const accentOwner = family === "all" ? getDisplayedProduct().family : family;
    const accentRgb = FAMILY_META[accentOwner]?.accentRgb || FAMILY_META.revitalizing.accentRgb;
    productsCatalog.style.setProperty("--products-accent-rgb", accentRgb);
  }

  function getPrimaryLabel(product, concernData) {
    if (concernData && concernData.route[0] === product.id) {
      return `${product.id}부터 보기`;
    }

    return `${product.id} 제품 보기`;
  }

  function renderContext(product) {
    const concernData = getCurrentConcernData();

    if (concernData) {
      pxEye.textContent = "FROM BY CONCERN";
      pxTitle.textContent = `${concernData.title}라면, ${concernData.route[0]}부터 보시면 됩니다`;
      pxDesc.textContent = "선택된 고민 기준으로 먼저 볼 번호와 이어질 제품만 추렸습니다.";
      pxConcernChip.textContent = concernData.title;
      pxRouteChip.textContent = concernData.route.join(" → ");
      pxFamilyChip.textContent = concernData.family.toUpperCase();
      return;
    }

    pxEye.textContent = "PRODUCT EXPLORER";
    pxTitle.textContent = "먼저 봐야 할 번호부터 제품을 보여드립니다";
    pxDesc.textContent = "번호 기준으로 제품을 읽으면 전체를 다 볼 필요는 없습니다.";
    pxConcernChip.textContent = "ALL PRODUCTS";
    pxRouteChip.textContent = product.familyLabel;
    pxFamilyChip.textContent = product.id;
  }

  function renderStage(product) {
    if (!product) {
      return;
    }

    const concernData = getCurrentConcernData();

    applyExplorerAccent(product.family);
    applyCatalogAccent(state.activeFamily);
    renderContext(product);

    pxImage.src = HOME_EXPLORER_IMAGE_MAP[product.id] || product.image;
    pxImage.alt = product.name;
    pxVisual.dataset.stageNumber = product.id;
    pxFamily.textContent = product.familyLabel;
    pxNumber.textContent = product.id;
    pxName.textContent = product.name;
    pxSummary.textContent = product.summary;
    pxDetail.textContent = product.detail;

    const metaItems = concernData
      ? ["선택 route 기준", concernData.route.join(" → ")]
      : [product.familyLabel, `${product.id} 먼저 보기`];

    pxMeta.innerHTML = metaItems
      .map((item) => `<span class="px-stage__meta-item">${item}</span>`)
      .join("");

    pxPrimary.textContent = getPrimaryLabel(product, concernData);
    pxPrimary.href = `#product-card-${product.id}`;

    if (concernData) {
      pxSecondary.href = "/by-concern/";
      pxSecondary.textContent = "고민 다시 보기";
    } else {
      pxSecondary.href = "#products-catalog";
      pxSecondary.textContent = "전체 제품 보기";
    }
  }

  function renderFamilyTabs() {
    const counts = getFamilyCounts();
    pxFamilyTabs.innerHTML = counts
      .map((family) => {
        const isActive = state.activeFamily === family.key;
        const isPreview = state.previewFamily === family.key;

        return `
          <button
            type="button"
            class="px-family-tab${isActive ? " is-active" : ""}${isPreview ? " is-preview" : ""}"
            data-family="${family.key}"
            role="tab"
            aria-selected="${isActive ? "true" : "false"}"
          >
            ${family.label} ${family.count}
          </button>
        `;
      })
      .join("");

    pxFamilyTabs.querySelectorAll(".px-family-tab").forEach((button) => {
      const family = button.dataset.family;

        const previewFamily = () => {
          state.previewFamily = family;
          if (family === state.activeFamily) {
            state.previewId = state.activeId;
          } else {
            state.previewId = getProductsForFamily(family)[0]?.id || state.activeId;
          }

          renderStage(getDisplayedProduct());
          syncFilterStates();
          syncGridStates();
        };

      button.addEventListener("mouseenter", previewFamily);
      button.addEventListener("focus", previewFamily);
      button.addEventListener("mouseleave", () => {
        state.previewFamily = null;
        state.previewId = null;
        renderStage(getDisplayedProduct());
        syncFilterStates();
        syncGridStates();
      });
      button.addEventListener("blur", () => {
        state.previewFamily = null;
        state.previewId = null;
        renderStage(getDisplayedProduct());
        syncFilterStates();
        syncGridStates();
      });
      button.addEventListener("click", () => {
        commitFamily(family);
      });
    });
  }

  function renderNumberRail() {
    const visible = getVisibleProducts();
    pxNumberRail.innerHTML = visible
      .map((product) => {
        const isActive = product.id === state.activeId;
        const isPreview = product.id === state.previewId;

        return `
          <button
            type="button"
            class="px-number-pill${isActive ? " is-active" : ""}${isPreview ? " is-preview" : ""}"
            data-id="${product.id}"
            role="option"
            aria-selected="${isActive ? "true" : "false"}"
          >
            ${product.id}
          </button>
        `;
      })
      .join("");

    pxNumberRail.querySelectorAll(".px-number-pill").forEach((button) => {
      const id = button.dataset.id;

        const previewNumber = () => {
          state.previewFamily = null;
          state.previewId = id;
          renderStage(getDisplayedProduct());
          syncFilterStates();
          syncGridStates();
        };

      button.addEventListener("mouseenter", previewNumber);
      button.addEventListener("focus", previewNumber);
      button.addEventListener("mouseleave", () => {
        state.previewId = null;
        renderStage(getDisplayedProduct());
        syncFilterStates();
        syncGridStates();
      });
      button.addEventListener("blur", () => {
        state.previewId = null;
        renderStage(getDisplayedProduct());
        syncFilterStates();
        syncGridStates();
      });
      button.addEventListener("click", () => {
        commitProduct(id);
      });
    });
  }

  function updateCatalogCopy(filteredProducts) {
    const concernData = getCurrentConcernData();
    const displayed = getDisplayedProduct();
    const familyMeta = FAMILY_META[state.activeFamily];

    if (concernData) {
      catalogTitle.textContent = concernData.title;
      catalogDescription.textContent = `${concernData.route.join(" → ")} route와 연결된 제품만 아래에서 이어서 확인합니다.`;
      catalogStatus.textContent = `${concernData.title} 기준 ${filteredProducts.length}개 제품`;
      return;
    }

    if (state.activeFamily === "all") {
      catalogTitle.textContent = "전체 제품";
      catalogDescription.textContent = `현재 focus 번호 ${displayed.id} 아래로 전체 제품 구조를 이어서 탐색합니다.`;
      catalogStatus.textContent = `전체 ${filteredProducts.length}개 제품`;
      return;
    }

    catalogTitle.textContent = familyMeta.countLabel;
    catalogDescription.textContent = `${familyMeta.label} 라인 안에서 먼저 볼 번호를 아래 support grid로 이어서 확인합니다.`;
    catalogStatus.textContent = `${familyMeta.countLabel} ${filteredProducts.length}개 제품`;
  }

  function renderExplorerOnly() {
    renderFamilyTabs();
    renderNumberRail();
    renderStage(getDisplayedProduct());
    syncFilterStates();
  }

  function createSkeletonCard() {
    const skeleton = document.createElement("article");
    skeleton.className = "product-card product-card--skeleton";
    skeleton.innerHTML = `
      <div class="product-card__media-skeleton"></div>
      <div class="product-card__body-skeleton">
        <div class="product-card__line-skeleton product-card__line-skeleton--short"></div>
        <div class="product-card__line-skeleton product-card__line-skeleton--medium"></div>
        <div class="product-card__line-skeleton product-card__line-skeleton--long"></div>
        <div class="product-card__line-skeleton product-card__line-skeleton--medium"></div>
        <div class="product-card__button-skeleton"></div>
      </div>
    `;
    return skeleton;
  }

  function createCard(product) {
    const article = document.createElement("article");
    const isActive = product.id === state.activeId;
    const isPreview = product.id === state.previewId;

    article.className = `product-card${isActive ? " is-active" : ""}${isPreview ? " is-preview" : ""}`;
    article.id = `product-card-${product.id}`;
    article.dataset.productId = product.id;
    article.dataset.family = product.family;
    article.tabIndex = 0;
    article.style.setProperty("--product-accent-rgb", FAMILY_META[product.family].accentRgb);
    article.innerHTML = `
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="product-card__family">${product.familyLabel}</span>
          <span class="product-card__number">${product.id}</span>
        </div>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__desc">${product.summary}</p>
        <button type="button" class="product-card__cta">이 번호 보기</button>
      </div>
    `;

    const updatePointer = (event) => {
      const rect = article.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      article.style.setProperty("--product-mx", `${x}%`);
      article.style.setProperty("--product-my", `${y}%`);
    };

    const previewCard = () => {
      state.previewId = product.id;
      renderStage(getDisplayedProduct());
      syncFilterStates();
      syncGridStates();
    };

    const clearPreview = () => {
      state.previewId = null;
      renderStage(getDisplayedProduct());
      syncFilterStates();
      syncGridStates();
    };

    article.addEventListener("mousemove", updatePointer);
    article.addEventListener("mouseenter", previewCard);
    article.addEventListener("focus", previewCard);
    article.addEventListener("mouseleave", clearPreview);
    article.addEventListener("blur", clearPreview);

    const commitFromCard = (withScroll) => {
      state.activeFamily = state.activeFamily === "all" ? "all" : product.family;
      state.activeId = product.id;
      state.previewId = null;
      state.previewFamily = null;
      state.visibleCount = Math.max(INITIAL_VISIBLE_COUNT, state.visibleCount);
      renderAll();
      dispatchExplorerEvents();

      if (withScroll) {
        pxExplorer.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    article.addEventListener("click", (event) => {
      if (event.target.closest(".product-card__cta")) {
        commitFromCard(true);
        return;
      }

      commitFromCard(false);
    });

    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        commitFromCard(true);
      }
    });

    return article;
  }

  function createEmptyState() {
    const empty = document.createElement("div");
    empty.className = "product-grid__empty";
    empty.innerHTML = `
      <p class="product-grid__empty-title">조건에 맞는 제품이 없습니다</p>
      <p class="product-grid__empty-copy">라인 선택을 바꾸면 다른 번호 구조를 바로 이어서 볼 수 있습니다.</p>
    `;
    return empty;
  }

  function syncGridStates() {
    productGrid.querySelectorAll(".product-card:not(.product-card--skeleton)").forEach((card) => {
      const id = card.dataset.productId;
      card.classList.toggle("is-active", id === state.activeId);
      card.classList.toggle("is-preview", id === state.previewId);
    });
  }

  function syncFilterStates() {
    pxFamilyTabs.querySelectorAll(".px-family-tab").forEach((button) => {
      const family = button.dataset.family;
      const isActive = family === state.activeFamily;
      const isPreview = family === state.previewFamily;

      button.classList.toggle("is-active", isActive);
      button.classList.toggle("is-preview", isPreview);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    pxNumberRail.querySelectorAll(".px-number-pill").forEach((button) => {
      const id = button.dataset.id;
      const isActive = id === state.activeId;
      const isPreview = id === state.previewId;

      button.classList.toggle("is-active", isActive);
      button.classList.toggle("is-preview", isPreview);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function renderGrid() {
    const filteredProducts = getVisibleProducts();
    updateCatalogCopy(filteredProducts);
    productGrid.innerHTML = "";

    if (!filteredProducts.length) {
      productGrid.appendChild(createEmptyState());
      productGrid.setAttribute("aria-busy", "false");
      return;
    }

    const visibleProducts = filteredProducts.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visibleProducts.forEach((product) => {
      fragment.appendChild(createCard(product));
    });

    if (state.isLoadingMore) {
      const remaining = filteredProducts.length - visibleProducts.length;
      const skeletonCount = Math.max(1, Math.min(LOAD_INCREMENT, remaining));

      for (let index = 0; index < skeletonCount; index += 1) {
        fragment.appendChild(createSkeletonCard());
      }
    }

    productGrid.appendChild(fragment);
    productGrid.setAttribute("aria-busy", state.isLoadingMore ? "true" : "false");
    syncGridStates();
  }

  function renderAll() {
    renderExplorerOnly();
    renderGrid();
  }

  function ensureVisibleAndScrollToCard(productId) {
    const filtered = getVisibleProducts();
    const index = filtered.findIndex((product) => product.id === productId);

    if (index === -1) {
      return;
    }

    if (index >= state.visibleCount) {
      state.visibleCount =
        Math.ceil((index + 1) / LOAD_INCREMENT) * LOAD_INCREMENT;
      renderGrid();
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(`product-card-${productId}`);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    });
  }

  function commitProduct(id) {
    const product = getProductById(id);

    if (!product) {
      return;
    }

    state.activeFamily = state.activeFamily === "all" ? "all" : product.family;
    state.activeId = id;
    state.previewId = null;
    state.previewFamily = null;
    renderAll();
    dispatchExplorerEvents();
  }

  function commitFamily(family) {
    state.activeFamily = family;
    state.previewFamily = null;
    state.previewId = null;

    const visible = getVisibleProducts();

    if (!visible.find((product) => product.id === state.activeId)) {
      state.activeId = visible[0]?.id || pxProducts[0].id;
    }

    state.visibleCount = INITIAL_VISIBLE_COUNT;
    state.isLoadingMore = false;
    renderAll();
    dispatchExplorerEvents();
  }

  function moveStage(direction) {
    const visible = getVisibleProducts();
    const index = visible.findIndex((product) => product.id === state.activeId);

    if (index === -1 || !visible.length) {
      return;
    }

    const nextIndex = (index + direction + visible.length) % visible.length;
    state.activeId = visible[nextIndex].id;
    state.previewId = null;
    renderAll();
    dispatchExplorerEvents();
  }

  function loadMore() {
    const visible = getVisibleProducts();

    if (state.isLoadingMore || state.visibleCount >= visible.length) {
      return;
    }

    state.isLoadingMore = true;
    renderGrid();

    window.setTimeout(() => {
      state.visibleCount = Math.min(state.visibleCount + LOAD_INCREMENT, visible.length);
      state.isLoadingMore = false;
      renderGrid();
    }, LOAD_DELAY_MS);
  }

  function setupObserver() {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    state.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      {
        rootMargin: "180px 0px 220px",
        threshold: 0.01,
      },
    );

    state.observer.observe(sentinel);
  }

  function dispatchExplorerEvents() {
    const product = getProductById(state.activeId);

    if (!product) {
      return;
    }

    document.dispatchEvent(
      new CustomEvent("products:family-change", {
        detail: { familyId: state.activeFamily === "all" ? product.family : state.activeFamily },
      }),
    );

    document.dispatchEvent(
      new CustomEvent("products:explorer-change", {
        detail: {
          concern: state.activeConcern,
          familyId: state.activeFamily,
          productId: state.activeId,
        },
      }),
    );
  }

  function handleConcernEvent(concernId) {
    const concernData = pxConcernMap[concernId];

    if (!concernData) {
      return;
    }

    state.activeConcern = concernId;
    state.activeFamily = concernData.family;
    state.activeId = concernData.route[0];
    state.previewId = null;
    state.previewFamily = null;
    state.visibleCount = INITIAL_VISIBLE_COUNT;
    state.isLoadingMore = false;
    renderAll();
    dispatchExplorerEvents();
  }

  function bindExplorerEvents() {
    pxPrev.addEventListener("click", () => moveStage(-1));
    pxNext.addEventListener("click", () => moveStage(1));

    pxPrimary.addEventListener("click", (event) => {
      event.preventDefault();

      const product = getDisplayedProduct();
      state.activeId = product.id;
      state.previewId = null;
      state.previewFamily = null;
      renderAll();
      ensureVisibleAndScrollToCard(product.id);
      dispatchExplorerEvents();
    });

    pxShell.addEventListener("pointermove", (event) => {
      const rect = pxShell.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      pxShell.style.setProperty("--px-mx", `${x}%`);
      pxShell.style.setProperty("--px-my", `${y}%`);
      pxExplorer.style.setProperty("--px-mx", `${x}%`);
      pxExplorer.style.setProperty("--px-my", `${y}%`);
    });

    pxShell.addEventListener("pointerleave", () => {
      pxShell.style.setProperty("--px-mx", "50%");
      pxShell.style.setProperty("--px-my", "50%");
      pxExplorer.style.setProperty("--px-mx", "50%");
      pxExplorer.style.setProperty("--px-my", "50%");
    });

    const swipeSurface = pxVisual;

    swipeSurface.addEventListener("touchstart", (event) => {
      state.swipeStartX = event.changedTouches[0]?.clientX ?? null;
    }, { passive: true });

    swipeSurface.addEventListener("touchend", (event) => {
      const endX = event.changedTouches[0]?.clientX ?? null;

      if (state.swipeStartX === null || endX === null) {
        state.swipeStartX = null;
        return;
      }

      const delta = endX - state.swipeStartX;
      state.swipeStartX = null;

      if (Math.abs(delta) < SWIPE_THRESHOLD) {
        return;
      }

      moveStage(delta < 0 ? 1 : -1);
    }, { passive: true });

    document.addEventListener("bc:concern-change", (event) => {
      const concernId = event.detail?.id;
      handleConcernEvent(concernId);
    });
  }

  function initState() {
    const { concern, start, family } = getSearchState();
    const concernData = concern ? pxConcernMap[concern] : null;
    const startProduct = start ? getProductById(start) : null;

    if (concernData) {
      state.activeConcern = concern;
      state.activeFamily = concernData.family;
      state.activeId =
        startProduct && getProductsForFamily(concernData.family).some((product) => product.id === startProduct.id)
          ? startProduct.id
          : concernData.route[0];
    } else if (family && FAMILY_META[family]) {
      state.activeConcern = null;
      state.activeFamily = family;
      state.activeId =
        startProduct && getProductsForFamily(family).some((product) => product.id === startProduct.id)
          ? startProduct.id
          : getProductsForFamily(family)[0]?.id || "11";
    } else {
      state.activeConcern = null;
      state.activeFamily = "all";
      state.activeId = startProduct ? startProduct.id : "11";
    }
  }

  function bootstrap() {
    initState();
    renderAll();
    bindExplorerEvents();
    setupObserver();
    dispatchExplorerEvents();
  }

  productGrid.setAttribute("aria-busy", "true");
  for (let index = 0; index < INITIAL_VISIBLE_COUNT; index += 1) {
    productGrid.appendChild(createSkeletonCard());
  }

  window.setTimeout(bootstrap, 120);
})();
