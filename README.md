# 연구자를 위한 AI 활용법 강의 자료

GitHub Pages로 바로 배포할 수 있는 정적 발표자료입니다.

## 구성

- `index.html`: GitHub Pages용 껍데기
- `data/slides.js`: 슬라이드 본문 데이터
- `data/modals.js`: 클릭 팝업 본문 데이터
- `styles.css`: 반응형 스타일
- `script.js`: 슬라이드 렌더링, 진행률, 현재 슬라이드, 팝업 동작
- `assets/keratinocyte`: keratinocyte SPF vs GF RNA-seq 실습용 시각화
- `lecture-notes/ryus-lab-ai-lecture-notes.html`: 배포용 강의 노트 원본
- `lecture-notes/ryus-lab-ai-lecture-notes.pdf`: 배포용 강의 노트 PDF
- `scripts/build-lecture-notes-pdf.js`: 강의 노트 PDF 생성 스크립트

## 로컬 실행

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 됩니다.

## 강의 노트 PDF 생성

```bash
NODE_PATH=/Users/sol/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
/Users/sol/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node \
scripts/build-lecture-notes-pdf.js
```

생성된 PDF는 `lecture-notes/ryus-lab-ai-lecture-notes.pdf`와
`assets/downloads/ryus-lab-ai-lecture-notes.pdf`에 저장됩니다.

## 강의 피드백 Google Form 생성

`scripts/create-lecture-feedback-form.gs`는 Google Apps Script에서 실행하는
폼 생성 스크립트입니다.

1. <https://script.new> 접속
2. `scripts/create-lecture-feedback-form.gs` 내용을 Apps Script 편집기에 붙여넣기
3. 함수 선택 드롭다운에서 `createLectureFeedbackForm` 선택
4. 실행 후 권한 승인
5. 실행 로그에서 `Edit URL`과 `Published URL` 확인

스크립트 구조 검증은 아래 명령으로 실행할 수 있습니다.

```bash
node --test scripts/create-lecture-feedback-form.test.js
```

## GitHub Pages

저장소 Settings → Pages에서 branch를 `main` 또는 `master`, folder를 `/root`로 지정하면 됩니다.
