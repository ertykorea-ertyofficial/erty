"use client";

import { useEffect } from "react";

export function PdpMobileDisclosure() {
  useEffect(() => {
    const scope = document.querySelector(".pdp-page--visual-v2 .pdp-layout");
    const mediaQuery = window.matchMedia("(max-width: 520px)");

    if (!scope) return;

    const sections = Array.from(scope.querySelectorAll<HTMLElement>(".pdp-section"));

    const setSectionOpen = (section: HTMLElement, isOpen: boolean) => {
      const content = section.querySelector<HTMLElement>(".pdp-section__body");
      const button = section.querySelector<HTMLButtonElement>(".pdp-mobile-section-toggle");

      section.dataset.mobileOpen = isOpen ? "true" : "false";
      button?.setAttribute("aria-expanded", String(isOpen));

      if (content) {
        content.hidden = mediaQuery.matches && !isOpen;
      }
    };

    sections.forEach((section, index) => {
      if (section.dataset.mobileDisclosureReady === "true") return;

      const head = section.querySelector<HTMLElement>(".pdp-section__head");
      const content = section.querySelector<HTMLElement>(".pdp-section__body");
      const eyebrow = section.querySelector(".pdp-section__eyebrow")?.textContent?.trim() || "Detail";
      const title = section.querySelector("h2")?.textContent?.trim() || eyebrow;

      if (!head || !content) return;

      const contentId = content.id || `${section.id || `pdp-detail-${index}`}-mobile-content`;
      const button = document.createElement("button");
      const copy = document.createElement("span");
      const eyebrowSpan = document.createElement("span");
      const titleSpan = document.createElement("span");
      const icon = document.createElement("span");

      content.id = contentId;
      section.classList.add("pdp-mobile-collapsible");
      section.dataset.mobileDisclosureReady = "true";
      button.type = "button";
      button.className = "pdp-mobile-section-toggle";
      button.setAttribute("aria-controls", contentId);
      button.setAttribute("aria-expanded", "false");
      copy.className = "pdp-mobile-section-toggle__copy";
      eyebrowSpan.className = "pdp-mobile-section-toggle__eyebrow";
      titleSpan.className = "pdp-mobile-section-toggle__title";
      icon.className = "pdp-mobile-section-toggle__icon";
      icon.setAttribute("aria-hidden", "true");
      eyebrowSpan.textContent = eyebrow;
      titleSpan.textContent = title;
      copy.append(eyebrowSpan, titleSpan);
      button.append(copy, icon);
      button.addEventListener("click", () => {
        setSectionOpen(section, section.dataset.mobileOpen !== "true");
      });
      head.after(button);
    });

    const syncMobileState = () => {
      document.body.classList.toggle("pdp-mobile-compact-enabled", mediaQuery.matches);
      sections.forEach((section) => setSectionOpen(section, section.dataset.mobileOpen === "true"));
    };

    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => {
      mediaQuery.removeEventListener("change", syncMobileState);
      document.body.classList.remove("pdp-mobile-compact-enabled");
    };
  }, []);

  return null;
}
