const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function setMenuState(isOpen) {
  if (!menuToggle || !navPanel) return;

  menuToggle.classList.toggle("active", isOpen);
  navPanel.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  document.body.classList.toggle("menu-open", isOpen);
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenuState(isOpen);
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  });
}

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sections = [...document.querySelectorAll("main section[id]")];

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      navLinks.forEach((link) => {
        const targetId = link.getAttribute("href")?.replace("#", "");
        link.classList.toggle("active", targetId === visibleEntry.target.id);
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.05, 0.2, 0.5],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
