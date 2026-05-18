(function () {
  function initBrandReveal() {
    if (document.body.dataset.page !== "brand") {
      return;
    }

    const targets = Array.from(document.querySelectorAll("[data-brand-reveal]"));
    if (!targets.length) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-brand-revealed"));
      document.body.dataset.brandMotion = "reduced";
      return;
    }

    document.body.classList.add("brand-motion-enabled");
    document.body.dataset.brandMotion = "enabled";

    const reveal = (target) => {
      target.classList.add("is-brand-revealed");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      }
    );

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        reveal(target);
        return;
      }

      observer.observe(target);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBrandReveal);
  } else {
    initBrandReveal();
  }
})();
