window.ERTYRouter = {
  normalize(pathname) {
    if (!pathname || pathname === "/index.html") {
      return "/";
    }

    return pathname.replace(/\/+$/, "") || "/";
  },

  sourceToCanonical(pathname) {
    const map = {
      "/pages/philosophy.html": "/brand",
      "/pages/products.html": "/products",
      "/pages/product-detail.html": "/products/[product-slug]",
      "/pages/evidence.html": "/archive",
      "/pages/journal.html": "/insight",
      "/pages/skin-concerns.html": "/by-concern"
    };

    return map[pathname] || pathname;
  }
};
