(function () {
  const pxExplorer = document.getElementById("product-explorer");
  const pxShell = document.getElementById("px-shell");
  const pxEye = document.getElementById("px-eyebrow");
  const pxTitle = document.getElementById("px-title");
  const pxDesc = document.getElementById("px-desc");
  const pxConcernChip = document.getElementById("px-context-concern");
  const pxRouteChip = document.getElementById("px-context-route");
  const pxFamilyChip = document.getElementById("px-context-family");
  const pxStage = pxExplorer?.querySelector(".px-stage");
  const pxImage = document.getElementById("px-image");
  const pxVisual = pxExplorer?.querySelector(".px-stage__visual");
  const pxPanel = pxExplorer?.querySelector(".px-stage__panel");
  const pxPoster = document.getElementById("px-poster");
  const pxPosterOutgoing = document.getElementById("px-poster-outgoing");
  const pxFamily = document.getElementById("px-family");
  const pxNumber = document.getElementById("px-number");
  const pxName = document.getElementById("px-name");
  const pxSummary = document.getElementById("px-summary");
  const pxDetail = document.getElementById("px-detail");
  const pxMeta = document.getElementById("px-meta");
  const pxPrimary = document.getElementById("px-primary");
  const pxPurchase = document.getElementById("px-purchase");
  const pxSecondary = document.getElementById("px-secondary");
  const pxTertiary = document.getElementById("px-tertiary");
  const pxFamilyTabs = document.getElementById("px-family-tabs");
  const pxNumberRail = document.getElementById("px-number-rail");
  const pxPrev = document.getElementById("px-prev");
  const pxNext = document.getElementById("px-next");
  const pxPosterPrev = pxExplorer?.querySelector(".px-stage__swipe-hint--prev");
  const pxPosterNext = pxExplorer?.querySelector(".px-stage__swipe-hint--next");

  const productsCatalog = document.getElementById("products-catalog");
  const catalogTitle = document.getElementById("products-catalog-title");
  const catalogDescription = document.getElementById("products-catalog-description");
  const catalogStatus = document.getElementById("products-catalog-status");
  const catalogScope = document.getElementById("products-catalog-scope");
  const catalogRouteButton = document.getElementById("products-catalog-route");
  const catalogExpandButton = document.getElementById("products-catalog-expand");
  const productGrid = document.getElementById("product-grid");
  const sentinel = document.getElementById("product-grid-sentinel");

  if (
    !pxExplorer ||
    !pxShell ||
    !pxStage ||
    !pxImage ||
    !pxVisual ||
    !pxPanel ||
    !pxPoster ||
    !pxPosterOutgoing ||
    !pxFamily ||
    !pxNumber ||
    !pxName ||
    !pxSummary ||
    !pxDetail ||
    !pxMeta ||
    !pxPrimary ||
    !pxPurchase ||
    !pxSecondary ||
    !pxTertiary ||
    !pxFamilyTabs ||
    !pxNumberRail ||
    !pxPrev ||
    !pxNext ||
    !pxPosterPrev ||
    !pxPosterNext ||
    !productsCatalog ||
    !catalogTitle ||
    !catalogDescription ||
    !catalogStatus ||
    !catalogScope ||
    !catalogRouteButton ||
    !catalogExpandButton ||
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

  const STAGE_POSTER_IMAGE_MAP = {
    "01": "/assets/images/brand/products/stage-posters/01.png",
    "02": "/assets/images/brand/products/stage-posters/02.png",
    "03": "/assets/images/brand/products/stage-posters/03.png",
    "11": "/assets/images/brand/products/stage-posters/11.png",
    "13": "/assets/images/brand/products/stage-posters/13.png",
    "15": "/assets/images/brand/products/stage-posters/15.png",
    "21": "/assets/images/brand/products/stage-posters/21.png",
    "23": "/assets/images/brand/products/stage-posters/23.png",
    "25": "/assets/images/brand/products/stage-posters/25.png",
    "27": "/assets/images/brand/products/stage-posters/27.png",
    "35": "/assets/images/brand/products/stage-posters/35.png",
    "37": "/assets/images/brand/products/stage-posters/37.png",
    "50": "/assets/images/brand/products/stage-posters/50.png",
    "55": "/assets/images/brand/products/stage-posters/55.png",
    "57": "/assets/images/brand/products/stage-posters/57.png",
  };
  const DESKTOP_STAGE_POSTER_BASE_PATH = "/assets/images/brand/products/stage-posters-16x9";

  const HOME_DATA_SKU_MAP = Array.isArray(window.ERTY_HOME_DATA?.skus)
    ? new Map(window.ERTY_HOME_DATA.skus.map((sku) => [sku.id, sku]))
    : new Map();

  function getProductImageScale(productId) {
    return 1;
  }

  function getStageImageScale(productId) {
    return productId === "01" ? 1 : getProductImageScale(productId);
  }

  function getStageImageOffsetY(productId) {
    return productId === "01" ? "-12px" : "0px";
  }

  function getStagePosterSrc(product) {
    if (MOBILE_GRID_MEDIA.matches) {
      return STAGE_POSTER_IMAGE_MAP[product.id] || product.stagePoster || "";
    }

    return `${DESKTOP_STAGE_POSTER_BASE_PATH}/${product.id}.png`;
  }

  function getPurchaseHref(productId) {
    const shopUrl = HOME_DATA_SKU_MAP.get(productId)?.shopUrl;
    return typeof shopUrl === "string" && shopUrl.trim() ? shopUrl.trim() : null;
  }

  const pxProducts = [
    {
      id: "11",
      family: "balancing",
      familyLabel: "BALANCING",
      name: "Cleansing Gel for Skin Balancing",
      stageName: "클렌징 젤 포 스킨 밸런싱",
      stageSummary: "루틴의 시작점",
      stageDetail: "피부 진정과 유수분 밸런스를 위한\n상쾌한 자일리톨 클렌저",
      stagePoster: "/assets/images/brand/products/stage-posters/11.png",
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
      stageName: "퓨리파잉 포 스킨 밸런싱",
      stageSummary: "피지 · 각질 밸런싱 토너",
      stageDetail: "피지·모공·산화\n스트레스를 동시에 케어하는\n식물 유래 세범 컨트롤 솔루션",
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
      stageName: "컨센트레이트 부스터 포 스킨 밸런싱",
      stageSummary: "균형 밀도 부스터",
      stageDetail: "피지는 잡아주고\n유수분 밸런스를 찾아주며\n문제성 피부를 위한 필수 기초 앰플",
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
      stageName: "클렌징 밀크 포 스킨 하이드레이팅",
      stageSummary: "유수분 밸런스 클렌저",
      stageDetail: "피부 진정과 유수분\n밸런스를 위한\n상쾌한 자일리톨 클렌저",
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
      stageName: "토닉 로션 포 스킨 하이드레이팅",
      stageSummary: "해조 유래 안티폴루션 기반 피부 정화 · 보호",
      stageDetail: "피부 수분통로를 열어\n피부 갈증을 해소하는 미네랄 토너",
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
      stageName: "컨센트레이트 부스터 포 스킨 하이드레이팅",
      stageSummary: "수분 · 장벽 밀도 부스터",
      stageDetail: "8종 히알루론산과 팹타이드 성분이\n수분 · 탄력 · 생기를\n부여하는 고농축 보습 앰플",
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
      stageName: "더마 하이드로 아쿠아엑스 크림",
      stageSummary: "촉촉한 보습 액티브",
      stageDetail: "피부 속부터 깊게 차오르는 수분 에너지",
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
      stageName: "컨센트레이트 부스터 포 스킨 리바이탈라이징",
      stageSummary: "피부 보습 · 컨디션 · 보호막 형성",
      stageDetail: "피부 탄력과 주름 개선\n미백에 도움을 주는 안티에이징 앰플",
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
      stageName: "인텐시브 셀룰러 ER 크림",
      stageSummary: "피부 지질의 복제, 세컨드 스킨",
      stageDetail: "내 피부가 기억하는\n가장 건강한 온도 37도\n피부 수명 연장의 기술",
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
      stageName: "선크림",
      stageSummary: "브라이트닝 데이 스텝",
      stageDetail: "무너진 피부 장벽을\n탄탄하게 채워 수분을\n지켜주는 핵심 지질 케어",
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
      stageName: "컨센트레이트 부스터 포 스킨 브라이트닝",
      stageSummary: "미백 시너지 해결사",
      stageDetail: "수분과 광채를 동시에 채운\n미백 · 주름개선 · 보습까지\n3 in 1 브라이트닝 케어",
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
      stageName: "멜라웨이 브라이트닝 크림",
      stageSummary: "멜라닌 타켓팅 솔루션",
      stageDetail: "빛을 잃고 지친 피부에게\n필요한 스스로 다시 빛날 힘",
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
      stageName: "퍼펙트 수딩 솔루션",
      stageSummary: "피부결 리셋\n각질 정돈 전문가",
      stageDetail: "피부 밸런스를 바로 세우는\n저자극 필링 솔루션",
      summary: "거친 피부결과 각질은 01부터 결을 정리하는 편이 안정적입니다.",
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
      stageName: "퍼펙트 엔셀 앰플",
      stageSummary: "멀티 기능 기반 피부 톤 개선 · 장벽 강화",
      stageDetail: "나이아신아마이드 10%\n피부를 환하고 맑게\n개선 시켜주는 앰플",
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
      stageName: "퍼펙트 스피큘 포뮬레이션",
      stageSummary: "멀티 기능 기반 피부 톤 개선 · 장벽 강화",
      stageDetail: "피부 탄력과 미백을 위한\n이중 기능성 포뮬레이션 크림",
      summary: "03은 재생 리모델링을 보조하는 프로토콜 단계입니다.",
      detail:
        "회복과 장벽 축 이후 피부 밀도와 리모델링을 이어 보는 프로토콜의 마지막 단계입니다.",
      image: HOME_EXPLORER_IMAGE_MAP["03"],
      href: "#product-card-03",
    },
  ];

  const pxConcernMap = {
    "oil-breakout-pores": {
      title: "유분 · 트러블 · 모공",
      routineTitle: "유분 · 트러블 · 모공 개선 루틴",
      route: ["11", "13", "15"],
      family: "balancing",
    },
    "dehydration-tightness": {
      title: "수분 부족 · 속당김",
      routineTitle: "수분 부족 · 속당김 개선 루틴",
      route: ["23", "25", "27"],
      family: "hydrating",
    },
    "barrier-redness": {
      title: "장벽 약화 · 붉은기",
      routineTitle: "장벽 약화 · 붉은기 개선 루틴",
      route: ["35", "37"],
      family: "revitalizing",
    },
    "dullness-dark-spot": {
      title: "칙칙함 · 잡티 · 톤 저하",
      routineTitle: "칙칙함 · 잡티 · 톤저하 개선 루틴",
      route: ["55", "57", "50"],
      family: "brightening",
    },
    "texture-flaking": {
      title: "거친 피부결 · 각질",
      routineTitle: "거친 피부결 · 각질 개선 루틴",
      route: ["01", "25", "37"],
      family: "professional",
    },
    "recovery-firmness": {
      title: "회복 저하 · 탄력 저하",
      routineTitle: "회복 저하 · 탄력 저하 개선 루틴",
      route: ["02", "37", "03"],
      family: "professional",
    },
  };

  const pxConcernAliases = {
    oil: "oil-breakout-pores",
    dehydration: "dehydration-tightness",
    barrier: "barrier-redness",
    tone: "dullness-dark-spot",
    texture: "texture-flaking",
    recovery: "recovery-firmness",
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

  const SWIPE_THRESHOLD = 42;
  const MOBILE_GRID_MEDIA = window.matchMedia("(max-width: 767px)");

  const state = {
    activeConcern: null,
    activeRouteIds: [],
    activeFamily: "all",
    catalogScope: "all",
    activeId: "11",
    previewId: null,
    previewFamily: null,
    swipeStartX: null,
    suspendGridHoverPreview: false,
    stageSlideDirection: "",
  };
  let visualSyncFrame = 0;
  let viewportCardSyncFrame = 0;

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

  function normalizeConcernId(concernId) {
    if (!concernId) {
      return null;
    }

    if (pxConcernMap[concernId]) {
      return concernId;
    }

    return pxConcernAliases[concernId] || null;
  }

  function getProductsForFamily(family) {
    if (family === "all") {
      return pxProducts;
    }

    return pxProducts.filter((product) => product.family === family);
  }

  function getRouteProducts(routeIds = state.activeRouteIds) {
    return routeIds
      .map((id) => getProductById(id))
      .filter(Boolean);
  }

  function getVisibleProducts() {
    if (state.activeConcern && state.catalogScope === "route") {
      return getRouteProducts();
    }

    if (state.catalogScope === "all") {
      return pxProducts;
    }

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

  function isRouteScope() {
    return Boolean(state.activeConcern && state.catalogScope === "route");
  }

  function hasConcernScopeControls() {
    return Boolean(state.activeConcern && state.activeRouteIds.length);
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

  function syncStageVisualFrame() {
    const visualRect = pxVisual.getBoundingClientRect();
    const imageRect = pxImage.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;

    if (!visualRect.width || !imageRect.height) {
      return;
    }

    let maxDiscSize = 392;
    if (viewportWidth <= 768) {
      maxDiscSize = 248;
    } else if (viewportWidth <= 1100) {
      maxDiscSize = 364;
    }

    const discSize = Math.min(imageRect.height * 1.08, maxDiscSize, visualRect.width - 24);
    pxVisual.style.setProperty("--px-stage-disc-size", `${Math.max(discSize, 0).toFixed(2)}px`);
  }

  function requestStageVisualFrameSync() {
    if (visualSyncFrame) {
      return;
    }

    visualSyncFrame = window.requestAnimationFrame(() => {
      visualSyncFrame = 0;
      syncStageVisualFrame();
    });
  }

  function getPrimaryLabel(product, concernData) {
    return "제품 상세 보기";
  }

  function syncScopeControls() {
    const shouldShow = hasConcernScopeControls();
    catalogScope.hidden = !shouldShow;

    if (!shouldShow) {
      return;
    }

    const isRouteActive = state.catalogScope === "route";
    catalogRouteButton.classList.toggle("is-active", isRouteActive);
    catalogExpandButton.classList.toggle("is-active", !isRouteActive);
    catalogRouteButton.setAttribute("aria-pressed", isRouteActive ? "true" : "false");
    catalogExpandButton.setAttribute("aria-pressed", !isRouteActive ? "true" : "false");
  }

  function applyCatalogScope(scope) {
    if (scope !== "route" && scope !== "all" && scope !== "family") {
      return;
    }

    if (scope === "route" && !state.activeRouteIds.length) {
      return;
    }

    state.catalogScope = scope;

    if (scope === "route") {
      const routeProducts = getRouteProducts();
      if (!routeProducts.find((product) => product.id === state.activeId)) {
        state.activeId = routeProducts[0]?.id || state.activeId;
      }
    }

    state.previewId = null;
    state.previewFamily = null;
    state.suspendGridHoverPreview = true;
    renderAll();
    dispatchExplorerEvents();
  }

  function renderContext(product) {
    const concernData = getCurrentConcernData();

    if (concernData) {
      const routineTitle = concernData.routineTitle || `${concernData.title} 개선 루틴`;
      const routineSuffix = "개선 루틴";
      const routineLead = routineTitle.endsWith(routineSuffix)
        ? routineTitle.slice(0, -routineSuffix.length).trim()
        : routineTitle;
      const leadNode = document.createElement("span");
      const suffixNode = document.createElement("span");

      leadNode.className = "px-title__lead";
      leadNode.textContent = routineLead;
      suffixNode.className = "px-title__suffix";
      suffixNode.textContent = routineSuffix;

      pxEye.textContent = "FROM BY CONCERN";
      pxTitle.classList.add("is-routine-title");
      pxTitle.replaceChildren(leadNode, suffixNode);
      pxDesc.textContent = "선택한 피부고민을 개선 시킬 루틴을 소개합니다";
      pxConcernChip.textContent = concernData.title;
      pxRouteChip.textContent = concernData.route.join(" → ");
      pxFamilyChip.textContent = concernData.family.toUpperCase();
      return;
    }

    pxEye.textContent = "PRODUCT EXPLORER";
    pxTitle.classList.remove("is-routine-title");
    pxTitle.textContent = "더 깊게 알아가는 시간";
    pxDesc.textContent = "내 피부에 쓸 제품이기에 더 자세히 알아야합니다.";
    pxConcernChip.textContent = "ALL PRODUCTS";
    pxRouteChip.textContent = product.familyLabel;
    pxFamilyChip.textContent = product.id;
  }

  function renderStage(product) {
    if (!product) {
      return;
    }

    const concernData = getCurrentConcernData();
    const stagePosterSrc = getStagePosterSrc(product);
    const hasStagePoster = Boolean(stagePosterSrc);
    const isDesktopPosterMode = !MOBILE_GRID_MEDIA.matches;
    const usePosterMode = hasStagePoster || isDesktopPosterMode;
    const purchaseHref = getPurchaseHref(product.id);
    const shouldShowPurchase = usePosterMode;
    const previousPosterSrc = pxPoster.getAttribute("src");
    const shouldAnimateDesktopPoster =
      isDesktopPosterMode &&
      hasStagePoster &&
      Boolean(state.stageSlideDirection) &&
      Boolean(previousPosterSrc) &&
      previousPosterSrc !== stagePosterSrc &&
      !pxPoster.hidden;

    applyExplorerAccent(product.family);
    applyCatalogAccent(state.activeFamily);
    renderContext(product);

    pxImage.src = HOME_EXPLORER_IMAGE_MAP[product.id] || product.image;
    pxImage.alt = product.name;
    pxImage.dataset.productId = product.id;
    pxImage.style.setProperty("--px-image-scale", String(getStageImageScale(product.id)));
    pxImage.style.setProperty("--px-image-offset-y", getStageImageOffsetY(product.id));
    pxVisual.dataset.stageNumber = product.id;
    pxStage.classList.toggle("is-poster-mode", usePosterMode);
    pxStage.classList.toggle("is-desktop-poster-mode", isDesktopPosterMode);
    pxStage.classList.toggle("has-stage-poster", hasStagePoster);
    pxPanel.classList.toggle("is-poster-mode", usePosterMode);
    pxPanel.classList.toggle("is-desktop-poster-mode", isDesktopPosterMode);
    pxPanel.classList.toggle("has-stage-poster", hasStagePoster);
    pxPosterOutgoing.hidden = !shouldAnimateDesktopPoster;
    if (shouldAnimateDesktopPoster) {
      pxPosterOutgoing.src = previousPosterSrc;
    } else {
      pxPosterOutgoing.removeAttribute("src");
    }
    pxPoster.hidden = !hasStagePoster;
    if (hasStagePoster) {
      pxPoster.src = stagePosterSrc;
      pxPoster.alt = `${product.stageName || product.name} 제품 포스터`;
    } else {
      pxPoster.alt = "";
    }
    pxFamily.textContent = product.familyLabel;
    pxNumber.textContent = product.id;
    pxName.textContent = product.stageName || product.name;
    pxSummary.textContent = product.stageSummary || product.summary;
    pxDetail.textContent = product.stageDetail || product.detail;

    const metaItems = concernData
      ? ["선택 route 기준", concernData.route.join(" → ")]
      : [product.familyLabel, `${product.id} 먼저 보기`];

    pxMeta.innerHTML = metaItems
      .map((item) => `<span class="px-stage__meta-item">${item}</span>`)
      .join("");

    pxPrimary.textContent = getPrimaryLabel(product, concernData);
    pxPrimary.href = `#product-card-${product.id}`;

    pxPurchase.hidden = !shouldShowPurchase;
    pxPurchase.disabled = !purchaseHref;
    pxPurchase.setAttribute("aria-disabled", purchaseHref ? "false" : "true");
    pxPurchase.dataset.pendingReason = purchaseHref ? "" : "shop-url-pending";
    pxPurchase.dataset.productId = product.id;

    if (concernData) {
      pxSecondary.textContent =
        state.catalogScope === "route" ? "전체 제품 보기" : "루틴 제품 보기";
      pxSecondary.dataset.action =
        state.catalogScope === "route" ? "expand-all" : "show-route";
      pxTertiary.href = "/by-concern/";
      pxTertiary.textContent = "고민 다시 보기";
      pxTertiary.hidden = false;
    } else {
      pxSecondary.textContent =
        state.catalogScope === "all" ? "전체 제품 보기" : "전체 제품으로 확장";
      pxSecondary.dataset.action =
        state.catalogScope === "all" ? "jump-grid" : "expand-all";
      pxTertiary.hidden = true;
    }

    requestStageVisualFrameSync();
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
    const isMobile = MOBILE_GRID_MEDIA.matches;

    if (concernData) {
      catalogTitle.textContent = concernData.title;
      if (state.catalogScope === "route") {
        catalogDescription.textContent = isMobile
          ? "전체 제품을 스와이프로 선택하기"
          : `${concernData.route.join(" → ")} route만 아래에서 먼저 확인합니다.`;
        catalogStatus.textContent = `${concernData.title} route ${filteredProducts.length}개 제품`;
      } else {
        catalogDescription.textContent = isMobile
          ? "전체 제품을 스와이프로 선택하기"
          : `${concernData.route.join(" → ")} route를 유지한 채 전체 제품으로 확장해 이어서 확인합니다.`;
        catalogStatus.textContent = `전체 ${filteredProducts.length}개 제품`;
      }
      syncScopeControls();
      return;
    }

    if (state.activeFamily === "all") {
      catalogTitle.textContent = "전체 제품";
      catalogDescription.textContent = "전제품 선택하기 쉽게 정리했습니다.";
      catalogStatus.textContent = `전체 ${filteredProducts.length}개 제품`;
      syncScopeControls();
      return;
    }

    catalogTitle.textContent = familyMeta.countLabel;
    catalogDescription.textContent = isMobile
      ? "전체 제품을 스와이프로 선택하기"
      : `${familyMeta.label} 라인 안에서 먼저 볼 번호를 아래 support grid로 이어서 확인합니다.`;
    catalogStatus.textContent = `${familyMeta.countLabel} ${filteredProducts.length}개 제품`;
    syncScopeControls();
  }

  function renderExplorerOnly() {
    renderFamilyTabs();
    renderNumberRail();
    renderStage(getDisplayedProduct());
    syncFilterStates();
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
    article.setAttribute("aria-label", `${product.familyLabel} ${product.id} ${product.name}`);
    article.style.setProperty("--product-accent-rgb", FAMILY_META[product.family].accentRgb);
    article.style.setProperty("--product-image-scale", String(getProductImageScale(product.id)));
    article.innerHTML = `
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
      </div>
      <div class="product-card__body">
        <button type="button" class="product-card__cta liquid-glass" aria-label="${product.name} ${product.id} 선택하기">선택하기</button>
      </div>
    `;
    const ctaButton = article.querySelector(".product-card__cta");

    const updatePointer = (event) => {
      const rect = article.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      article.style.setProperty("--product-mx", `${x}%`);
      article.style.setProperty("--product-my", `${y}%`);

      if (state.suspendGridHoverPreview) {
        state.suspendGridHoverPreview = false;
        state.previewId = product.id;
        renderStage(getDisplayedProduct());
        syncFilterStates();
        syncGridStates();
      }
    };

    const previewCard = (event) => {
      if (event?.type === "mouseenter" && state.suspendGridHoverPreview) {
        return;
      }

      state.suspendGridHoverPreview = false;
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
      state.suspendGridHoverPreview = false;
      renderAll();
      dispatchExplorerEvents();

      if (withScroll) {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const headerHeight = parseFloat(rootStyles.getPropertyValue("--header-height")) || 0;
        const desktopPosterOffset = headerHeight + 24;
        const targetTop = MOBILE_GRID_MEDIA.matches
          ? Math.max(0, window.scrollY + pxTitle.getBoundingClientRect().top - 96)
          : Math.max(0, window.scrollY + pxShell.getBoundingClientRect().top - desktopPosterOffset);
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
          top: targetTop,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });

        const nextUrl = `${window.location.pathname}${window.location.search}#product-explorer`;
        if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
          window.history.replaceState(null, "", nextUrl);
        }
      }
    };

    ctaButton?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      commitFromCard(true);
    });

    article.addEventListener("click", (event) => {
      if (MOBILE_GRID_MEDIA.matches) {
        commitFromCard(true);
        return;
      }

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
    requestViewportCardSync();
  }

  function syncViewportCurrentCard() {
    viewportCardSyncFrame = 0;

    const cards = Array.from(
      productGrid.querySelectorAll(".product-card:not(.product-card--skeleton)"),
    );

    cards.forEach((card) => {
      card.classList.remove("is-viewport-current");
    });

    if (!MOBILE_GRID_MEDIA.matches || !cards.length) {
      return;
    }

    const gridRect = productGrid.getBoundingClientRect();
    const gridCenter = gridRect.left + (gridRect.width / 2);

    let closestCard = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + (rect.width / 2);
      const distance = Math.abs(cardCenter - gridCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard) {
      closestCard.classList.add("is-viewport-current");
    }
  }

  function requestViewportCardSync() {
    if (viewportCardSyncFrame) {
      return;
    }

    viewportCardSyncFrame = window.requestAnimationFrame(syncViewportCurrentCard);
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

    const fragment = document.createDocumentFragment();

    filteredProducts.forEach((product) => {
      fragment.appendChild(createCard(product));
    });

    productGrid.appendChild(fragment);
    productGrid.setAttribute("aria-busy", "false");
    syncGridStates();
    requestViewportCardSync();
  }

  function renderAll() {
    renderExplorerOnly();
    renderGrid();
  }

  function ensureVisibleAndScrollToCard(productId) {
    requestAnimationFrame(() => {
      const target = document.getElementById(`product-card-${productId}`);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
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
    state.suspendGridHoverPreview = false;
    renderAll();
    dispatchExplorerEvents();
  }

  function commitFamily(family) {
    state.activeConcern = null;
    state.activeRouteIds = [];
    state.activeFamily = family;
    state.catalogScope = family === "all" ? "all" : "family";
    state.previewFamily = null;
    state.previewId = null;
    state.suspendGridHoverPreview = false;

    const visible = getVisibleProducts();

    if (!visible.find((product) => product.id === state.activeId)) {
      state.activeId = visible[0]?.id || pxProducts[0].id;
    }

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
    state.suspendGridHoverPreview = false;
    state.stageSlideDirection = direction > 0 ? "next" : "prev";
    renderAll();
    playPosterSlide();
    dispatchExplorerEvents();
  }

  function playPosterSlide() {
    if (!state.stageSlideDirection) {
      return;
    }

    pxStage.dataset.slideDirection = state.stageSlideDirection;
    pxStage.classList.remove("is-stage-sliding");
    void pxStage.offsetWidth;
    pxStage.classList.add("is-stage-sliding");
    window.setTimeout(() => {
      pxStage.classList.remove("is-stage-sliding");
      pxPosterOutgoing.hidden = true;
      pxPosterOutgoing.removeAttribute("src");
      state.stageSlideDirection = "";
    }, 500);
  }

  function preloadDesktopPosters() {
    if (MOBILE_GRID_MEDIA.matches) {
      return;
    }

    pxProducts.forEach((product) => {
      const image = new Image();
      image.src = `${DESKTOP_STAGE_POSTER_BASE_PATH}/${product.id}.png`;
    });
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
    const normalizedConcernId = normalizeConcernId(concernId);
    const concernData = normalizedConcernId ? pxConcernMap[normalizedConcernId] : null;

    if (!concernData) {
      return;
    }

    state.activeConcern = normalizedConcernId;
    state.activeRouteIds = [...concernData.route];
    state.activeFamily = concernData.family;
    state.catalogScope = "route";
    state.activeId = concernData.route[0];
    state.previewId = null;
    state.previewFamily = null;
    renderAll();
    dispatchExplorerEvents();
  }

  function bindExplorerEvents() {
    pxPrev.addEventListener("click", () => moveStage(-1));
    pxNext.addEventListener("click", () => moveStage(1));
    pxPosterPrev.addEventListener("click", () => moveStage(-1));
    pxPosterNext.addEventListener("click", () => moveStage(1));

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

    pxSecondary.addEventListener("click", () => {
      const action = pxSecondary.dataset.action || "jump-grid";

      if (action === "expand-all") {
        applyCatalogScope("all");
        requestAnimationFrame(() => {
          productsCatalog.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
        return;
      }

      if (action === "show-route") {
        applyCatalogScope("route");
        requestAnimationFrame(() => {
          productsCatalog.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
        return;
      }

      productsCatalog.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    catalogRouteButton.addEventListener("click", () => {
      applyCatalogScope("route");
    });

    catalogExpandButton.addEventListener("click", () => {
      applyCatalogScope("all");
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

    const swipeSurface = pxStage;

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

    pxImage.addEventListener("load", requestStageVisualFrameSync);
    window.addEventListener("resize", requestStageVisualFrameSync);
    window.addEventListener("resize", requestViewportCardSync);
    MOBILE_GRID_MEDIA.addEventListener("change", requestViewportCardSync);
    productGrid.addEventListener("scroll", requestViewportCardSync, { passive: true });
  }

  function initState() {
    const { concern, start, family } = getSearchState();
    const normalizedConcernId = normalizeConcernId(concern);
    const concernData = normalizedConcernId ? pxConcernMap[normalizedConcernId] : null;
    const startProduct = start ? getProductById(start) : null;

    if (concernData) {
      state.activeConcern = normalizedConcernId;
      state.activeRouteIds = [...concernData.route];
      state.activeFamily = concernData.family;
      state.catalogScope = "route";
      state.activeId =
        startProduct && concernData.route.includes(startProduct.id)
          ? startProduct.id
          : concernData.route[0];
    } else if (family && FAMILY_META[family]) {
      state.activeConcern = null;
      state.activeRouteIds = [];
      state.activeFamily = family;
      state.catalogScope = family === "all" ? "all" : "family";
      state.activeId =
        startProduct && getProductsForFamily(family).some((product) => product.id === startProduct.id)
          ? startProduct.id
          : getProductsForFamily(family)[0]?.id || "11";
    } else {
      state.activeConcern = null;
      state.activeRouteIds = [];
      state.activeFamily = "all";
      state.catalogScope = "all";
      state.activeId = startProduct ? startProduct.id : "11";
    }
  }

  function bootstrap() {
    initState();
    preloadDesktopPosters();
    renderAll();
    bindExplorerEvents();
    dispatchExplorerEvents();
  }

  bootstrap();
})();
