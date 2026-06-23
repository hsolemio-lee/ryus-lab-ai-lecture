const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const scriptPath = path.join(__dirname, "create-lecture-feedback-form.gs");

test("Apps Script defines the lecture feedback form content", () => {
  const source = fs.readFileSync(scriptPath, "utf8");

  assert.match(source, /연구자를 위한 AI 활용법 강의 피드백 설문/);
  assert.match(source, /createLectureFeedbackForm/);
  assert.match(source, /섹션 1\. 기본 정보/);
  assert.match(source, /섹션 2\. 강의 전후 변화/);
  assert.match(source, /섹션 3\. 강의 내용 평가/);
  assert.match(source, /섹션 4\. 실제 활용 가능성/);
  assert.match(source, /섹션 5\. 종합 피드백/);
  assert.match(source, /가장 유익했던 내용은 무엇인가요\?/);
  assert.match(source, /강의에서 어렵거나 아쉬웠던 점이 있다면 적어주세요\./);
});

test("Apps Script keeps the reduced one-time survey shape", () => {
  const source = fs.readFileSync(scriptPath, "utf8");

  assert.doesNotMatch(source, /다음 강의에서 더 다루었으면/);
  assert.doesNotMatch(source, /후속 강의/);

  const questionMatches = source.match(/title:\s*"/g) || [];
  assert.equal(questionMatches.length, 13);
});
