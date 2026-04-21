const productHeroFamilies = {
  balancing: {
    id: "balancing",
    label: "BALANCING",
    railSkus: "11 · 13 · 15",
    representativeSkuId: "11",
    accentRgb: "26, 140, 90",
    interpretation: "세정과 진정, 유수분 균형의 시작점입니다.",
    imageSrc: "/assets/images/brand/home/sku-rail/11.png",
    imageAlt: "BALANCING 대표 SKU 11 제품",
  },
  hydrating: {
    id: "hydrating",
    label: "HYDRATING",
    railSkus: "21 · 23 · 25 · 27",
    representativeSkuId: "23",
    accentRgb: "39, 113, 188",
    interpretation: "수분 통로와 보습 유지 흐름을 먼저 읽는 라인입니다.",
    imageSrc: "/assets/images/brand/home/sku-rail/23.png",
    imageAlt: "HYDRATING 대표 SKU 23 제품",
  },
  revitalizing: {
    id: "revitalizing",
    label: "REVITALIZING",
    railSkus: "35 · 37",
    representativeSkuId: "37",
    accentRgb: "179, 53, 64",
    interpretation: "회복과 장벽, 컨디션 보완의 시작점입니다.",
    imageSrc: "/assets/images/brand/home/sku-rail/37.png",
    imageAlt: "REVITALIZING 대표 SKU 37 제품",
  },
  brightening: {
    id: "brightening",
    label: "BRIGHTENING",
    railSkus: "50 · 55 · 57",
    representativeSkuId: "55",
    accentRgb: "198, 151, 27",
    interpretation: "톤, 광채, 방어 흐름을 한 축으로 읽는 라인입니다.",
    imageSrc: "/assets/images/brand/home/sku-rail/55.png",
    imageAlt: "BRIGHTENING 대표 SKU 55 제품",
  },
  protocol: {
    id: "protocol",
    label: "PROTOCOL",
    railSkus: "01 · 02 · 03",
    representativeSkuId: "01",
    accentRgb: "88, 88, 88",
    interpretation: "단계형 트리트먼트의 시작 번호를 읽는 프로토콜입니다.",
    imageSrc: "/assets/images/brand/home/sku-rail/01.png",
    imageAlt: "PROTOCOL 대표 SKU 01 제품",
  },
};

const productHeroRoot = document.querySelector(".products-main--v1");

if (productHeroRoot) {
  const railItems = Array.from(
    productHeroRoot.querySelectorAll(".products-hero__rail-item"),
  );
  const stagePanel = document.getElementById("products-hero-panel");
  const stageImage = document.getElementById("products-hero-image");
  const stageNumber = document.getElementById("products-hero-number");
  const stageFamily = document.getElementById("products-hero-family");
  const stageRange = document.getElementById("products-hero-range");
  const stageInterpretation = document.getElementById(
    "products-hero-interpretation",
  );

  let activeProductFamilyId = "revitalizing";
  let previewProductFamilyId = null;
  let focusProductFamilyId = activeProductFamilyId;

  function dispatchFamilyCommit(detail) {
    document.dispatchEvent(
      new CustomEvent("products:family-change", {
        detail,
      }),
    );
  }

  function syncTabStops() {
    railItems.forEach((item) => {
      const itemFamilyId = item.dataset.family;
      const isFocusable = itemFamilyId === focusProductFamilyId;
      item.tabIndex = isFocusable ? 0 : -1;
    });
  }

  function renderProductHeroFamily(familyId, { commit = false } = {}) {
    const displayProductFamilyId = familyId;
    const data = productHeroFamilies[displayProductFamilyId];

    if (!data) {
      return;
    }

    if (commit) {
      activeProductFamilyId = displayProductFamilyId;
      previewProductFamilyId = null;
      focusProductFamilyId = displayProductFamilyId;
      productHeroRoot.dataset.activeFamily = displayProductFamilyId;
      dispatchFamilyCommit({
        familyId: data.id,
        representativeSkuId: data.representativeSkuId,
      });
    }

    productHeroRoot.style.setProperty("--products-accent-rgb", data.accentRgb);
    stagePanel.setAttribute(
      "aria-labelledby",
      `products-family-tab-${data.id}`,
    );
    stageImage.src = data.imageSrc;
    stageImage.alt = data.imageAlt;
    stageNumber.textContent = data.representativeSkuId;
    stageFamily.textContent = data.label;
    stageRange.textContent = data.railSkus;
    stageInterpretation.textContent = data.interpretation;

    railItems.forEach((item) => {
      const itemFamilyId = item.dataset.family;
      const isActive = activeProductFamilyId === itemFamilyId;
      const isPreview = !commit && displayProductFamilyId === itemFamilyId;

      item.classList.toggle("is-active", isActive);
      item.classList.toggle("is-preview", isPreview);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    syncTabStops();
  }

  function focusFamilyByOffset(currentFamilyId, offset) {
    const currentIndex = railItems.findIndex(
      (item) => item.dataset.family === currentFamilyId,
    );

    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + offset + railItems.length) % railItems.length;
    const target = railItems[nextIndex];

    focusProductFamilyId = target.dataset.family;
    syncTabStops();
    target.focus();
    previewProductFamilyId = target.dataset.family;
    renderProductHeroFamily(target.dataset.family, { commit: false });
  }

  railItems.forEach((item) => {
    const familyId = item.dataset.family;

    item.addEventListener("mouseenter", () => {
      previewProductFamilyId = familyId;
      renderProductHeroFamily(familyId, { commit: false });
    });

    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      item.style.setProperty("--products-rail-mx", `${x}%`);
      item.style.setProperty("--products-rail-my", `${y}%`);
    });

    item.addEventListener("mouseleave", () => {
      item.style.removeProperty("--products-rail-mx");
      item.style.removeProperty("--products-rail-my");

      if (document.activeElement !== item) {
        previewProductFamilyId = null;
        renderProductHeroFamily(activeProductFamilyId, { commit: true });
      }
    });

    item.addEventListener("focus", () => {
      focusProductFamilyId = familyId;
      previewProductFamilyId = familyId;
      renderProductHeroFamily(familyId, { commit: false });
    });

    item.addEventListener("blur", () => {
      if (previewProductFamilyId === familyId) {
        previewProductFamilyId = null;
      }

      requestAnimationFrame(() => {
        const activeElement = document.activeElement;
        const focusWithinRail = railItems.includes(activeElement);

        if (!focusWithinRail) {
          focusProductFamilyId = activeProductFamilyId;
          renderProductHeroFamily(activeProductFamilyId, { commit: true });
        }
      });
    });

    item.addEventListener("click", () => {
      renderProductHeroFamily(familyId, { commit: true });
    });

    item.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          focusFamilyByOffset(familyId, 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          focusFamilyByOffset(familyId, -1);
          break;
        case "Home":
          event.preventDefault();
          focusProductFamilyId = railItems[0].dataset.family;
          syncTabStops();
          railItems[0].focus();
          previewProductFamilyId = railItems[0].dataset.family;
          renderProductHeroFamily(railItems[0].dataset.family, { commit: false });
          break;
        case "End":
          event.preventDefault();
          focusProductFamilyId = railItems[railItems.length - 1].dataset.family;
          syncTabStops();
          railItems[railItems.length - 1].focus();
          previewProductFamilyId = railItems[railItems.length - 1].dataset.family;
          renderProductHeroFamily(railItems[railItems.length - 1].dataset.family, {
            commit: false,
          });
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          renderProductHeroFamily(familyId, { commit: true });
          break;
        default:
          break;
      }
    });
  });

  renderProductHeroFamily(activeProductFamilyId, { commit: true });
}
