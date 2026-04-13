window.ERTYRouter = {
  normalize(pathname) {
    if (!pathname || pathname === "/index.html") {
      return "/";
    }

    return pathname.replace(/\/+$/, "") || "/";
  },

  sourceToCanonical(pathname) {
    const map = {
      "/pages/philosophy.html": "/philosophy",
      "/pages/products.html": "/products",
      "/pages/product-detail.html": "/products/[product-slug]",
      "/pages/evidence.html": "/evidence",
      "/pages/journal.html": "/journal",
      "/pages/skin-concerns.html": "/skin-concerns"
    };

    return map[pathname] || pathname;
  }
};
