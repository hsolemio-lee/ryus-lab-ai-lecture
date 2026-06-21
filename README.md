# 연구자를 위한 AI 활용법 강의 자료

GitHub Pages로 바로 배포할 수 있는 정적 발표자료입니다.

## 구성

- `index.html`: GitHub Pages용 껍데기
- `data/slides.js`: 슬라이드 본문 데이터
- `data/modals.js`: 클릭 팝업 본문 데이터
- `styles.css`: 반응형 스타일
- `script.js`: 슬라이드 렌더링, 진행률, 현재 슬라이드, 팝업 동작
- `assets/keratinocyte`: keratinocyte SPF vs GF RNA-seq 실습용 시각화

## 로컬 실행

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 됩니다.

## GitHub Pages

저장소 Settings → Pages에서 branch를 `main` 또는 `master`, folder를 `/root`로 지정하면 됩니다.
