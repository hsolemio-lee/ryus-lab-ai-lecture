const slidesRoot = document.querySelector("#slidesRoot");
const currentSlide = document.querySelector("#currentSlide");
const totalSlides = document.querySelector("#totalSlides");
const progressBar = document.querySelector("#progressBar");
const navLinks = Array.from(document.querySelectorAll(".section-nav a"));
const modalRoot = document.querySelector("#modalRoot");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalContent = document.querySelector("#modalContent");
let activeSlideIndex = 0;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function renderSlides() {
  slidesRoot.innerHTML = window.SLIDES.map(
    (slide) => `
      <section id="${slide.id}" class="${slide.className}" data-section="${slide.section}">
        ${slide.html}
      </section>
    `,
  ).join("");
}

function observeAnimatedSections() {
  const animatedBlocks = Array.from(
    document.querySelectorAll(".history-timeline, .choice-matrix, .outcome-flow"),
  );
  if (!("IntersectionObserver" in window)) {
    animatedBlocks.forEach((block) => block.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
  );

  animatedBlocks.forEach((block) => observer.observe(block));
}

function getSlides() {
  return Array.from(document.querySelectorAll(".slide"));
}

function updateProgress() {
  const slides = getSlides();
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.height = `${Math.min(100, Math.max(0, progress))}%`;

  let activeIndex = 0;
  for (const [index, slide] of slides.entries()) {
    const rect = slide.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4) activeIndex = index;
  }

  activeSlideIndex = activeIndex;
  currentSlide.textContent = String(activeIndex + 1).padStart(2, "0");
  const activeSection = slides[activeIndex]?.dataset.section;
  navLinks.forEach((link) => {
    const activeSections = (link.dataset.activeSections || "")
      .split(",")
      .map((section) => section.trim())
      .filter(Boolean);
    link.classList.toggle("active", activeSections.includes(activeSection));
  });
}

function scrollToSlide(index) {
  const slides = getSlides();
  const nextIndex = Math.min(Math.max(index, 0), slides.length - 1);
  const target = slides[nextIndex];
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${target.id}`);
  activeSlideIndex = nextIndex;
  currentSlide.textContent = String(nextIndex + 1).padStart(2, "0");
}

function isEditableTarget(target) {
  return Boolean(
    target?.closest?.("input, textarea, select, [contenteditable='true'], [contenteditable='']"),
  );
}

function jumpToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;

  const previousBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({ top: target.offsetTop, behavior: "auto" });
  document.documentElement.style.scrollBehavior = previousBehavior;
}

function openModal(id) {
  const data = window.MODALS[id];
  if (!data) return;
  const modalPanel = modalRoot.querySelector(".modal");
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalContent.innerHTML = data.body;
  modalPanel.classList.toggle("wide-modal", data.size === "wide");
  modalRoot.classList.add("open");
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalRoot.querySelector(".modal").classList.remove("wide-modal");
  modalRoot.classList.remove("open");
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-modal]");
  if (trigger) openModal(trigger.dataset.modal);

  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (modalRoot.classList.contains("open") || isEditableTarget(event.target)) return;

  const forwardKeys = [" ", "Spacebar", "PageDown", "ArrowDown"];
  const backwardKeys = ["PageUp", "ArrowUp"];
  const isSpace = event.key === " " || event.key === "Spacebar";

  if (forwardKeys.includes(event.key)) {
    event.preventDefault();
    scrollToSlide(activeSlideIndex + (isSpace && event.shiftKey ? -1 : 1));
  } else if (backwardKeys.includes(event.key)) {
    event.preventDefault();
    scrollToSlide(activeSlideIndex - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    scrollToSlide(0);
  } else if (event.key === "End") {
    event.preventDefault();
    scrollToSlide(getSlides().length - 1);
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
window.addEventListener("hashchange", () => {
  jumpToHash();
  updateProgress();
});
window.addEventListener("load", () => {
  jumpToHash();
  updateProgress();
});

renderSlides();
observeAnimatedSections();
totalSlides.textContent = String(getSlides().length).padStart(2, "0");
if (window.location.hash) {
  jumpToHash();
  requestAnimationFrame(jumpToHash);
  setTimeout(jumpToHash, 120);
  setTimeout(jumpToHash, 400);
  setTimeout(jumpToHash, 900);
}
updateProgress();
