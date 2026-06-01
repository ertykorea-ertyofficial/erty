"use client";

import { useEffect } from "react";

export function PdpMobileDisclosure() {
  useEffect(() => {
    const scope = document.querySelector(".pdp-page--visual-v2 .pdp-layout");
    const mediaQuery = window.matchMedia("(max-width: 520px)");

    if (!scope) return;

    const sections = Array.from(scope.querySelectorAll<HTMLElement>(".pdp-section"));
    const variantGroups = Array.from(scope.querySelectorAll<HTMLElement>('.pdp-variant-list[role="radiogroup"]'));
    const details = Array.from(scope.querySelectorAll<HTMLDetailsElement>(".pdp-answer__details"));
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanupCallbacks: Array<() => void> = [];

    const setupMobileTagMarquees = (marqueeScope: ParentNode) => {
      const lists = Array.from(
        marqueeScope.querySelectorAll<HTMLUListElement>(".pdp-tag-list, .pdp-answer__bullets"),
      ).filter((list) => list.children.length > 1);

      const ensureWrapper = (list: HTMLUListElement) => {
        if (list.parentElement?.classList.contains("pdp-tag-marquee")) {
          return list.parentElement;
        }

        const wrapper = document.createElement("div");
        wrapper.className = "pdp-tag-marquee";
        list.parentNode?.insertBefore(wrapper, list);
        wrapper.appendChild(list);

        return wrapper;
      };

      const removeClones = (list: HTMLUListElement) => {
        list.querySelectorAll(".pdp-tag-list__clone").forEach((item) => item.remove());
      };

      const deactivate = (list: HTMLUListElement) => {
        list.classList.remove("pdp-tag-list--marquee");
        list.style.removeProperty("--pdp-marquee-distance");
        list.style.removeProperty("--pdp-marquee-duration");
        removeClones(list);
      };

      const activate = (list: HTMLUListElement) => {
        if (!mediaQuery.matches) {
          deactivate(list);
          return;
        }

        const wrapper = ensureWrapper(list);
        const sourceItems = Array.from(list.children).filter((item) => !item.classList.contains("pdp-tag-list__clone"));

        if (motionQuery.matches || sourceItems.length < 2 || wrapper.offsetWidth === 0) {
          deactivate(list);
          return;
        }

        removeClones(list);
        sourceItems.forEach((item) => item.classList.add("pdp-tag-list__item"));
        sourceItems.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLElement;
          clone.classList.add("pdp-tag-list__clone");
          clone.setAttribute("aria-hidden", "true");
          list.appendChild(clone);
        });

        list.classList.add("pdp-tag-list--marquee");

        const firstClone = list.querySelector<HTMLElement>(".pdp-tag-list__clone");
        const distance = firstClone ? Math.round(firstClone.offsetLeft) : 0;

        if (!distance || distance <= wrapper.offsetWidth) {
          deactivate(list);
          return;
        }

        const duration = Math.max(16, Math.min(42, Math.round(distance / 28)));
        list.style.setProperty("--pdp-marquee-distance", `${distance}px`);
        list.style.setProperty("--pdp-marquee-duration", `${duration}s`);
      };

      lists.forEach(activate);
    };

    const scheduleMarqueeSetup = (marqueeScope: ParentNode = scope) => {
      window.requestAnimationFrame(() => setupMobileTagMarquees(marqueeScope));
    };

    const setupVariantSelection = () => {
      variantGroups.forEach((group) => {
        if (group.dataset.variantSelectionReady === "true") return;

        const variants = Array.from(group.querySelectorAll<HTMLElement>('.pdp-variant[role="radio"]'));
        const buySection = group.closest(".pdp-buy");
        const buyButton = buySection?.querySelector<HTMLButtonElement>(".pdp-buy-button");
        const selectedVolumeLabel = buySection?.querySelector<HTMLElement>(".pdp-buy__selected-volume");
        const buyButtonMeta = buySection?.querySelector<HTMLElement>(".pdp-buy-button__meta");

        if (!variants.length) return;

        const selectVariant = (target: HTMLElement, shouldFocus = false) => {
          variants.forEach((variant) => {
            const isSelected = variant === target;
            variant.classList.toggle("is-selected", isSelected);
            variant.setAttribute("aria-checked", String(isSelected));
            variant.setAttribute("tabindex", isSelected ? "0" : "-1");
          });

          const selectedVolume = target.dataset.variantVolume || "";

          if (buyButton) {
            buyButton.dataset.selectedVariantIndex = target.dataset.variantIndex || "";
            buyButton.dataset.selectedVolume = selectedVolume;
          }

          if (selectedVolumeLabel) {
            selectedVolumeLabel.textContent = selectedVolume ? `선택됨 ${selectedVolume}` : "용량 선택됨";
          }

          if (buyButtonMeta) {
            buyButtonMeta.textContent = selectedVolume ? `선택한 용량 ${selectedVolume}` : "용량 선택 후 공식몰 연결";
          }

          if (shouldFocus) {
            target.focus({ preventScroll: true });
          }
        };

        variants.forEach((variant, index) => {
          variant.addEventListener("click", () => selectVariant(variant));
          variant.addEventListener("keydown", (event) => {
            const keyMap: Record<string, number> = {
              ArrowRight: 1,
              ArrowDown: 1,
              ArrowLeft: -1,
              ArrowUp: -1,
            };

            if (event.key === " " || event.key === "Enter") {
              event.preventDefault();
              selectVariant(variant);
              return;
            }

            if (Object.prototype.hasOwnProperty.call(keyMap, event.key)) {
              event.preventDefault();
              const nextIndex = (index + keyMap[event.key] + variants.length) % variants.length;
              selectVariant(variants[nextIndex], true);
            }
          });
        });

        group.dataset.variantSelectionReady = "true";
        selectVariant(variants.find((variant) => variant.getAttribute("aria-checked") === "true") || variants[0]);
      });
    };

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
        const willOpen = section.dataset.mobileOpen !== "true";
        setSectionOpen(section, willOpen);

        if (willOpen) {
          scheduleMarqueeSetup(section);
        }
      });
      head.after(button);
    });

    details.forEach((detail) => {
      if (detail.dataset.answerMarqueeReady === "true") return;

      const handleToggle = () => {
        if (detail.open) {
          scheduleMarqueeSetup(detail);
        }
      };

      detail.dataset.answerMarqueeReady = "true";
      detail.addEventListener("toggle", handleToggle);
      cleanupCallbacks.push(() => detail.removeEventListener("toggle", handleToggle));
    });

    const syncMobileState = () => {
      document.body.classList.toggle("pdp-mobile-compact-enabled", mediaQuery.matches);
      sections.forEach((section) => setSectionOpen(section, section.dataset.mobileOpen === "true"));
      scheduleMarqueeSetup();
    };

    setupVariantSelection();
    setupMobileTagMarquees(scope);
    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);
    motionQuery.addEventListener("change", syncMobileState);

    return () => {
      mediaQuery.removeEventListener("change", syncMobileState);
      motionQuery.removeEventListener("change", syncMobileState);
      cleanupCallbacks.forEach((cleanup) => cleanup());
      document.body.classList.remove("pdp-mobile-compact-enabled");
    };
  }, []);

  return null;
}
