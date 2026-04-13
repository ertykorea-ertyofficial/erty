async function loadComponent(target) {
  const componentName = target.dataset.component;
  const source = `/components/${componentName}.html`;

  try {
    const response = await fetch(source, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    target.innerHTML = await response.text();
    target.dataset.componentLoaded = "true";
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    target.dataset.componentError = reason;
    console.error(
      `[components] Failed to load ${componentName} from ${source}: ${reason}`
    );
  }
}

async function initComponents() {
  const targets = Array.from(document.querySelectorAll("[data-component]"));
  await Promise.all(targets.map(loadComponent));
  document.dispatchEvent(new CustomEvent("components:loaded"));
}

document.addEventListener("DOMContentLoaded", () => {
  void initComponents();
});
