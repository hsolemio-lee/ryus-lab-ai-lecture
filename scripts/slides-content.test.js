const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const slidesPath = path.join(__dirname, "..", "data", "slides.js");

function loadSlides() {
  const source = fs.readFileSync(slidesPath, "utf8");
  const window = {};
  const fn = new Function("window", source + "\nreturn window.SLIDES;");
  return fn(window);
}

test("the deck ends with a thank-you slide containing the survey link", () => {
  const slides = loadSlides();
  const lastSlide = slides.at(-1);

  assert.equal(lastSlide.id, "thanks");
  assert.equal(lastSlide.section, "마무리");
  assert.match(lastSlide.html, /감사합니다/);
  assert.match(lastSlide.html, /강의 피드백 설문/);
  assert.match(lastSlide.html, /https:\/\/forms\.gle\/eLRqm5UBvtAShfGz9/);
});

test("the takeaway slide uses general audience wording", () => {
  const slides = loadSlides();
  const closingSlide = slides.find((slide) => slide.id === "closing");

  assert.ok(closingSlide);
  assert.match(closingSlide.html, /AI를 잘 쓰는 사람은/);
  assert.doesNotMatch(closingSlide.html, /AI를 잘 쓰는 연구자는/);
});
