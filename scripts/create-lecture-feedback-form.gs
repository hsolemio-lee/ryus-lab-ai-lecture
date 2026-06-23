function createLectureFeedbackForm() {
  const form = FormApp.create("연구자를 위한 AI 활용법 강의 피드백 설문");

  form.setDescription(
    "강의 개선과 교육 효과 확인을 위한 설문입니다. 응답은 약 3-5분 정도 소요됩니다. 정답은 없으며, 실제로 느낀 점을 편하게 적어주세요."
  );
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage("응답해주셔서 감사합니다.");

  addSection(form, "섹션 1. 기본 정보");

  addMultipleChoice(form, {
    title: "현재 역할은 무엇인가요?",
    required: true,
    choices: ["교수/PI", "박사후연구원", "대학원생", "연구원", "학부생"],
    other: true,
  });

  addText(form, {
    title: "주요 연구 분야는 무엇인가요?",
    required: false,
  });

  addMultipleChoice(form, {
    title: "강의 전 AI 도구 사용 경험은 어느 정도였나요?",
    required: true,
    choices: [
      "거의 사용해본 적 없음",
      "ChatGPT 등 챗봇을 가끔 사용",
      "논문 요약/번역/글쓰기 보조에 사용",
      "데이터 분석/코딩/문서 작업에도 사용",
      "Codex, Claude Code 등 agent형 도구를 사용해본 적 있음",
    ],
  });

  addSection(form, "섹션 2. 강의 전후 변화");

  addGrid(form, {
    title: "강의를 듣기 전, 아래 항목에 대해 본인은 어느 정도였나요?",
    helpText: "1 = 전혀 그렇지 않다, 5 = 매우 그렇다",
    required: true,
    rows: [
      "AI를 연구 workflow에 활용하는 방법을 이해하고 있었다",
      "논문 리뷰/발표 준비에 AI를 활용할 수 있다고 느꼈다",
      "데이터 분석 workflow에서 AI가 도울 수 있는 범위를 이해하고 있었다",
      "AI 결과물을 비판적으로 검토해야 하는 이유를 이해하고 있었다",
      "Agentic AI, context, tool use, HITL 같은 개념을 설명할 수 있었다",
    ],
    columns: ["1", "2", "3", "4", "5"],
  });

  addGrid(form, {
    title: "강의를 들은 후, 아래 항목에 대해 본인은 어느 정도인가요?",
    helpText: "1 = 전혀 그렇지 않다, 5 = 매우 그렇다",
    required: true,
    rows: [
      "AI를 연구 workflow에 활용하는 방법을 이해한다",
      "논문 리뷰/발표 준비에 AI를 활용할 수 있다고 느낀다",
      "데이터 분석 workflow에서 AI가 도울 수 있는 범위를 이해한다",
      "AI 결과물을 비판적으로 검토해야 하는 이유를 이해한다",
      "Agentic AI, context, tool use, HITL 같은 개념을 설명할 수 있다",
    ],
    columns: ["1", "2", "3", "4", "5"],
  });

  addSection(form, "섹션 3. 강의 내용 평가");

  addGrid(form, {
    title: "아래 강의 내용은 얼마나 유익했나요?",
    helpText: "1 = 전혀 유익하지 않음, 5 = 매우 유익함",
    required: true,
    rows: [
      "Agentic AI 개념 설명",
      "논문 발표 준비 workflow 데모",
      "연구 데이터 분석 workflow 사례",
      "Scientific Agent Skills 실습 소개",
      "AI 도구 소개",
      "연구자가 AI 결과물을 검토해야 한다는 메시지",
    ],
    columns: ["1", "2", "3", "4", "5"],
  });

  addMultipleChoice(form, {
    title: "강의 난이도는 어땠나요?",
    required: true,
    choices: ["너무 쉬웠다", "약간 쉬웠다", "적절했다", "약간 어려웠다", "너무 어려웠다"],
  });

  addMultipleChoice(form, {
    title: "강의 속도는 어땠나요?",
    required: true,
    choices: ["너무 느렸다", "약간 느렸다", "적절했다", "약간 빨랐다", "너무 빨랐다"],
  });

  addSection(form, "섹션 4. 실제 활용 가능성");

  addScale(form, {
    title: "강의 후 실제 연구 업무에 AI를 활용해보고 싶은 마음이 생겼나요?",
    required: true,
    leftLabel: "전혀 그렇지 않다",
    rightLabel: "매우 그렇다",
  });

  addCheckbox(form, {
    title: "본인의 연구 workflow에 적용해보고 싶은 작업은 무엇인가요?",
    required: false,
    choices: [
      "논문 읽기/요약",
      "저널클럽 또는 발표 준비",
      "연구 아이디어 정리",
      "실험 계획 또는 분석 계획 정리",
      "데이터 분석 코드 작성",
      "figure/report 작성",
      "논문/보고서 초안 작성",
      "연구실 반복 업무 자동화",
      "아직 잘 모르겠다",
    ],
    other: true,
  });

  addScale(form, {
    title: "전체 강의 만족도는 어느 정도인가요?",
    required: true,
    leftLabel: "매우 불만족",
    rightLabel: "매우 만족",
  });

  addSection(form, "섹션 5. 종합 피드백");

  addParagraph(form, {
    title: "가장 유익했던 내용은 무엇인가요?",
    required: false,
  });

  addParagraph(form, {
    title: "강의에서 어렵거나 아쉬웠던 점이 있다면 적어주세요.",
    required: false,
  });

  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published URL: " + form.getPublishedUrl());

  return {
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl(),
  };
}

function addSection(form, heading) {
  form.addSectionHeaderItem().setTitle(heading);
}

function addMultipleChoice(form, config) {
  const item = form.addMultipleChoiceItem();
  item.setTitle(config.title);
  item.setChoiceValues(config.choices);
  item.setRequired(Boolean(config.required));
  if (config.other) {
    item.showOtherOption(true);
  }
}

function addText(form, config) {
  const item = form.addTextItem();
  item.setTitle(config.title);
  item.setRequired(Boolean(config.required));
}

function addParagraph(form, config) {
  const item = form.addParagraphTextItem();
  item.setTitle(config.title);
  item.setRequired(Boolean(config.required));
}

function addGrid(form, config) {
  const item = form.addGridItem();
  item.setTitle(config.title);
  item.setHelpText(config.helpText);
  item.setRows(config.rows);
  item.setColumns(config.columns);
  item.setRequired(Boolean(config.required));
}

function addScale(form, config) {
  const item = form.addScaleItem();
  item.setTitle(config.title);
  item.setBounds(1, 5);
  item.setLabels(config.leftLabel, config.rightLabel);
  item.setRequired(Boolean(config.required));
}

function addCheckbox(form, config) {
  const item = form.addCheckboxItem();
  item.setTitle(config.title);
  item.setChoiceValues(config.choices);
  item.setRequired(Boolean(config.required));
  if (config.other) {
    item.showOtherOption(true);
  }
}
