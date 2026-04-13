function normalizePath(pathname) {
  if (pathname === "/index.html") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

function markCurrentPage() {
  const currentPath = normalizePath(window.location.pathname);
  const links = document.querySelectorAll("[data-nav-link]");

  links.forEach((link) => {
    const targetPath = normalizePath(link.getAttribute("href") || "");

    if (targetPath === currentPath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateFooterYear() {
  const yearTarget = document.querySelector("[data-current-year]");

  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateFooterYear();
});

document.addEventListener("components:loaded", () => {
  markCurrentPage();
  updateFooterYear();
});
