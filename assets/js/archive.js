function initArchiveEmbedsocialSlots() {
  if (document.body.dataset.page !== "archive") {
    return;
  }

  const slots = Array.from(document.querySelectorAll("[data-embedsocial-slot]"));
  if (!slots.length || document.body.dataset.archiveBound === "true") {
    return;
  }

  document.body.dataset.archiveBound = "true";

  slots.forEach((slot) => {
    const hasEmbed = Boolean(
      slot.querySelector("iframe, script, .embedsocial-widget, [data-ref], [data-embed-social]")
    );

    slot.dataset.widgetState = hasEmbed ? "connected" : "pending";
  });
}

function loadArchiveEmbedsocialScript() {
  const scriptId = "EmbedSocialHashtagScript";

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = "https://embedsocial.com/cdn/ht.js";
  script.async = true;
  document.head.appendChild(script);
}

function scheduleArchiveEmbedsocialScript() {
  if (document.body.dataset.page !== "archive") {
    return;
  }

  const socialWall = document.getElementById("archive-social-wall");
  const widgets = document.querySelectorAll(".embedsocial-hashtag[data-ref]");

  if (!socialWall || !widgets.length || document.body.dataset.archiveEmbedsocialBound === "true") {
    return;
  }

  document.body.dataset.archiveEmbedsocialBound = "true";

  const loadOnce = () => {
    loadArchiveEmbedsocialScript();
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          loadOnce();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(socialWall);
  } else {
    loadOnce();
  }

  window.addEventListener(
    "load",
    () => {
      const scheduleIdle =
        window.requestIdleCallback ||
        function fallbackIdle(callback) {
          return window.setTimeout(callback, 1800);
        };

      scheduleIdle(loadOnce, { timeout: 5000 });
    },
    { once: true }
  );
}

document.addEventListener("DOMContentLoaded", initArchiveEmbedsocialSlots);
document.addEventListener("DOMContentLoaded", scheduleArchiveEmbedsocialScript);
document.addEventListener("components:loaded", initArchiveEmbedsocialSlots);
document.addEventListener("components:loaded", scheduleArchiveEmbedsocialScript);
