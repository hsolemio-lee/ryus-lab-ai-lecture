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
const typedPromptCache = new Set();

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

function prepareSlideReveals() {
  const revealSelectors = [
    ".kicker",
    "h1",
    "h2",
    "h3",
    ".lead",
    ".hero-actions",
    ".definition-note",
    ".context-insight",
    ".quote-block",
    ".signal-panel",
    ".case-card",
    ".paper-card",
    ".terminal-card",
    ".choice-grid > *",
    ".concept-grid > *",
    ".frontier-grid > *",
    ".mention-list > *",
    ".step-grid > *",
    ".demo-flow > *",
    ".workflow-strip > *",
    ".flow-diagram > *",
    ".capability-list > *",
    ".rule-stack > *",
    ".checklist > *",
    ".skill-stack > *",
    ".matrix > *",
    ".metric-row > *",
    ".practice-actions > *",
    ".cover-points > *",
    ".outcome-card",
    ".skill-file-preview",
    ".kden-skill-card",
    ".llm-open-card",
    ".mini-pipeline > *",
    ".artifact-gallery > *",
    ".analysis-figure",
    ".figure-grid > *",
    ".education-visual-wrap",
    ".education-actions > *",
  ].join(",");

  getSlides().forEach((slide) => {
    const seen = new Set();
    const items = Array.from(slide.querySelectorAll(revealSelectors)).filter((item) => {
      if (seen.has(item)) return false;
      seen.add(item);
      return !item.closest(".modal-root");
    });
    items.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-index", String(Math.min(index, 14)));
    });
  });
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
  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === activeIndex);
    slide.classList.toggle("is-before", index < activeIndex);
    slide.classList.toggle("is-after", index > activeIndex);
  });
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

function getPreBlockKind(text) {
  const trimmed = text.trim();
  if (/^---/.test(trimmed) || /SKILL\.md|The pipeline is|Statistically sound/i.test(trimmed)) {
    return { label: "SKILL", shouldType: false };
  }
  if (/^# AGENTS\.md|AGENTS\.md 예시/i.test(trimmed)) {
    return { label: "AGENTS.md", shouldType: false };
  }
  if (/^\$ /.test(trimmed)) {
    return { label: "COMMAND", shouldType: false };
  }
  if (/^</.test(trimmed) || /<\/[a-z]+>/i.test(trimmed)) {
    return { label: "HTML", shouldType: false };
  }
  if (/^# |^\| |입력:|모델 내부:|최종 출력:|목표 설정|→/m.test(trimmed)) {
    return { label: "EXAMPLE", shouldType: false };
  }
  if (/해줘|보여줘|알려줘|만들어줘|정리해줘|설명해줘|검토해줘|찾아줘|사용해서|설치해|저장|진행|계획|분석|발표|논문|데이터/.test(trimmed)) {
    return { label: "PROMPT", shouldType: true };
  }
  return { label: "EXAMPLE", shouldType: false };
}

function enhancePromptBlocks(modalId) {
  modalContent.querySelectorAll("pre").forEach((pre, index) => {
    const originalText = pre.textContent;
    const promptId = `${modalId}:${index}:${originalText.length}:${originalText.slice(0, 24)}`;
    const blockKind = getPreBlockKind(originalText);
    const wrapper = document.createElement("div");
    wrapper.className = "prompt-block";
    wrapper.dataset.promptId = promptId;
    wrapper.dataset.label = blockKind.label;

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "copy-prompt";
    copyButton.textContent = "복사";
    copyButton.setAttribute("aria-label", "프롬프트 복사");
    copyButton.dataset.copyText = originalText;

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.append(copyButton, pre);

    if (!blockKind.shouldType || typedPromptCache.has(promptId) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pre.textContent = originalText;
      pre.classList.add("typed-complete");
      return;
    }

    typedPromptCache.add(promptId);
    pre.textContent = "";
    pre.classList.add("typing");

    const maxDuration = 1700;
    const minDuration = 520;
    const duration = Math.min(maxDuration, Math.max(minDuration, originalText.length * 11));
    const startedAt = performance.now();

    function typeFrame(now) {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 2.4);
      const nextLength = Math.floor(originalText.length * eased);
      pre.textContent = originalText.slice(0, nextLength);

      if (progress < 1) {
        requestAnimationFrame(typeFrame);
      } else {
        pre.textContent = originalText;
        pre.classList.remove("typing");
        pre.classList.add("typed-complete");
      }
    }

    requestAnimationFrame(typeFrame);
  });
}

async function copyPrompt(button) {
  const text = button.dataset.copyText || "";
  if (!text) return;

  try {
    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.style.pointerEvents = "none";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      copied = document.execCommand("copy");
      textarea.remove();
    }

    if (!copied) throw new Error("Copy command failed");

    button.textContent = "복사됨";
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = "복사";
      button.classList.remove("copied");
    }, 1400);
  } catch {
    button.textContent = "실패";
    setTimeout(() => {
      button.textContent = "복사";
    }, 1400);
  }
}

function openModal(id) {
  const data = window.MODALS[id];
  if (!data) return;
  const modalPanel = modalRoot.querySelector(".modal");
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalContent.innerHTML = data.body;
  enhancePromptBlocks(id);
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
  const copyButton = event.target.closest(".copy-prompt");
  if (copyButton) {
    copyPrompt(copyButton);
    return;
  }

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
prepareSlideReveals();
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
