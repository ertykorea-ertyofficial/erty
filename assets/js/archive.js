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

document.addEventListener("DOMContentLoaded", initArchiveEmbedsocialSlots);
document.addEventListener("components:loaded", initArchiveEmbedsocialSlots);
