const selectorProductExplorerLinks = window.ERTY_PRODUCTS_EXPLORER_LINKS || {
  toExplorerHref(concernId, startId) {
    const params = new URLSearchParams();

    if (concernId) {
      params.set("concern", concernId);
    }

    if (startId) {
      params.set("start", startId);
    }

    const query = params.toString();
    return query
      ? `/products/?${query}#product-explorer`
      : "/products/#product-explorer";
  },
};

window.ERTY_BY_CONCERN_SELECTOR_DATA = {
  defaultConcernId: "barrier-redness",
  concerns: [
    {
      id: "oil-breakout-pores",
      family: "BALANCING",
      accentRgb: "26,140,90",
      cueRgb: "26,140,90",
      cueInkRgb: "18,108,67",
      title: "유분 · 트러블 · 모공",
      cueNumber: "11",
      cueMeta: "번들거림 · 막힘 · 반복 트러블",
      route: "11 → 13 → 15",
      why: "번들거림이 먼저면 11로 세정 리듬부터 다시 잡습니다.",
      next: "13과 15로 유분 균형과 모공 단계를 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("oil-breakout-pores", "11"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/oil-breakout-pores.png",
    },
    {
      id: "dehydration-tightness",
      family: "HYDRATING",
      accentRgb: "39,113,188",
      cueRgb: "39,113,188",
      cueInkRgb: "25,85,148",
      title: "수분 부족 · 속당김",
      cueNumber: "23",
      cueMeta: "당김 · 들뜸 · 건조",
      route: "23 → 25 → 27",
      why: "당김이 먼저면 23으로 수분 통로부터 엽니다.",
      next: "25와 27로 수분 공급과 유지력을 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("dehydration-tightness", "23"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/dehydration-tightness.png",
    },
    {
      id: "barrier-redness",
      family: "REVITALIZING",
      accentRgb: "179,53,64",
      cueRgb: "179,53,64",
      cueInkRgb: "140,33,43",
      title: "장벽 약화 · 붉은기",
      cueNumber: "35",
      cueMeta: "예민함 · 붉어짐 · 쉽게 자극됨",
      route: "35 → 37",
      why: "붉음이 먼저면 35로 회복 컨디션부터 봅니다.",
      next: "37로 장벽 회복을 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("barrier-redness", "35"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/barrier-redness.png",
    },
    {
      id: "dullness-dark-spot",
      family: "BRIGHTENING",
      accentRgb: "198,151,27",
      cueRgb: "174,131,18",
      cueInkRgb: "129,95,9",
      title: "칙칙함 · 잡티 · 톤 저하",
      cueNumber: "55",
      cueMeta: "칙칙함 · 어두움 · 잡티",
      route: "55 → 57 → 50",
      why: "칙칙함이 먼저면 55로 밝기 시작점부터 봅니다.",
      next: "57과 50으로 톤과 방어 단계를 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("dullness-dark-spot", "55"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/dullness-dark-spot.png",
    },
    {
      id: "texture-flaking",
      family: "PROFESSIONAL",
      accentRgb: "88,88,88",
      cueRgb: "88,88,88",
      cueInkRgb: "62,62,62",
      title: "거친 피부결 · 각질",
      cueNumber: "01",
      cueMeta: "거친 피부결 · 각질 · 밀림",
      route: "01 → 25 → 37",
      why: "거친 피부결과 각질이 먼저면 01로 결 정리부터 시작합니다.",
      next: "25와 37로 수분 밀도와 장벽을 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("texture-flaking", "01"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/texture-flaking.png",
    },
    {
      id: "recovery-firmness",
      family: "REVITALIZING",
      accentRgb: "179,53,64",
      cueRgb: "163,48,58",
      cueInkRgb: "124,34,43",
      title: "회복 저하 · 탄력 저하",
      cueNumber: "02",
      cueMeta: "회복 저하 · 처짐 · 탄력 저하",
      route: "02 → 37 → 03",
      why: "회복 저하가 먼저면 02로 톤 리페어와 밀도 축부터 봅니다.",
      next: "37과 03으로 장벽 회복과 리모델링을 이어 봅니다.",
      cta: "루틴 제품 보기",
      href: selectorProductExplorerLinks.toExplorerHref("recovery-firmness", "02"),
      imageSrc: "/assets/images/brand/by-concern/selector-stage/recovery-firmness.png",
    },
  ],
};
