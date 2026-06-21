window.SLIDES = [
  {
    id: "intro",
    className: "slide hero",
    section: "소개",
    html: `
		<div class="slide-inner">
		          <div class="hero-copy">
		            <h1 class="hero-title"><span>연구자를 위한</span><span>AI 활용법</span></h1>
		            <p class="lead">
		              AI를 답안지가 아니라,<br>맥락을 주고 검토하며 함께 일하는<br>연구 보조 에이전트로 다루는 법.
	            </p>
	            <div class="hero-actions">
	              <button class="pill-button" data-modal="modal-overview">강의 흐름</button>
	              <a class="pill-button" href="assets/downloads/ryus-lab-ai-lecture-notes.pdf" download>강의 노트 PDF</a>
	            </div>
	          </div>
	        </div>
    `,
  },
  {
    id: "profile",
    className: "slide",
    section: "소개",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">Speaker</p>
            <h2>이한솔</h2>
            <p class="lead">
              Samsung SDS Senior Software Engineer. 엔터프라이즈 백엔드와 풀스택 시스템을 만들며,
              Codex, Claude Code, opencode 기반의 Agentic AI workflow를 실무에 적용하고 있습니다.
            </p>
            <button class="text-button" data-modal="modal-profile">CV 기반 소개 보기</button>
          </div>
          <div class="quote-block">
            <p>
              오늘은 차지민 박사 연구실과 가까운 사람으로서, 연구자의 실제 workflow에 AI가 어떻게 들어와야
              하는지를 최대한 현실적으로 이야기합니다.
            </p>
          </div>
        </div>
    `,
  },
  {
    id: "outcomes",
    className: "slide",
    section: "소개",
    html: `
<div class="slide-inner">
          <p class="kicker">Expected Outcomes</p>
            <h2>AI가 Research Workflow에<br>실제로 들어오는 순간</h2>
          <p class="lead narrow">
            오늘의 목표는 신기한 답변을 보는 것이 아니라,<br>Paper Review, Data Analysis, Report 생성까지 이어지는<br>실제 workflow를 경험하는 것입니다.
          </p>
          <div class="outcome-flow" aria-label="이번 강의의 기대효과">
            <div class="outcome-card" style="--i: 0" data-step="01">
              <span class="outcome-index">01</span>
              <strong>Paper PDF가 Presentation Draft가 됩니다</strong>
              <p>논문을 넣고 Research Question, Figure 해석, Journal Club 목차, 발표 Script, PPT 구조까지 이어갑니다.</p>
            </div>
            <div class="outcome-card" style="--i: 1" data-step="02">
              <span class="outcome-index">02</span>
              <strong>FASTQ 등 Raw Sequencing Data도 Analysis Workflow가 됩니다</strong>
              <p>Raw Sequencing Data부터 QC, Trimming, Alignment, Count Matrix, DEG, Pathway, Figure까지 연결해 검토 가능한 Report로 만듭니다.</p>
            </div>
            <div class="outcome-card" style="--i: 2" data-step="03">
              <span class="outcome-index">03</span>
              <strong>AI가 Chat이 아니라 Artifact를 만듭니다</strong>
              <p>Python 실행, Plot 생성, HTML Report, PPT Draft처럼 눈으로 확인하고 수정할 수 있는 산출물을 만듭니다.</p>
            </div>
            <div class="outcome-card" style="--i: 3" data-step="04">
              <span class="outcome-index">04</span>
              <strong>Researcher는 Operator가 아니라 Reviewer가 됩니다</strong>
              <p>Experimental Context, Interpretation Limit, Figure Message는 사람이 잡고 AI는 반복 작업과 Draft 생성을 맡습니다.</p>
            </div>
          </div>
        </div>
    `,
  },
  {
    id: "questions",
    className: "slide compact",
    section: "소개",
    html: `
<div class="slide-inner">
          <p class="kicker">Audience Check</p>
          <h2>지금 AI를 어떻게 쓰고 계신가요?</h2>
          <div class="choice-grid">
            <button data-modal="modal-ai-experience">ChatGPT 같은 단순 챗</button>
            <button data-modal="modal-agent-experience">Codex, Claude Code, Antigravity 같은 에이전트</button>
            <button data-modal="modal-paid-experience">유료 버전 또는 Deep Research</button>
          </div>
        </div>
    `,
  },
  {
    id: "concepts",
    className: "slide compact",
    section: "Agentic AI",
    html: `
<div class="slide-inner">
          <p class="kicker">Vocabulary</p>
          <h2>강의 내내 쓰는<br>기본 개념</h2>
          <div class="concept-grid glossary-grid">
            <button data-modal="modal-llm-term">LLM</button>
            <button data-modal="modal-frontier-model-term">Frontier Model</button>
            <button data-modal="modal-multimodal-term">Multimodal</button>
            <button data-modal="modal-token-term">Token</button>
            <button data-modal="modal-prompt">Prompt</button>
            <button data-modal="modal-context">Context</button>
            <button data-modal="modal-context-window">Context Window</button>
            <button data-modal="modal-agent">Agent</button>
            <button data-modal="modal-tool-use-term">Tool Use</button>
            <button data-modal="modal-artifact-term">Artifact</button>
            <button data-modal="modal-workflow-term">Workflow</button>
            <button data-modal="modal-hitl-term">HITL</button>
            <button data-modal="modal-skill">Skill</button>
            <button data-modal="modal-hooks">Hooks</button>
            <button data-modal="modal-harness-terms">Harness</button>
            <button data-modal="modal-agents-md-term">AGENTS.md</button>
            <button data-modal="modal-terminal-term">Terminal</button>
            <button data-modal="modal-markdown">Markdown</button>
            <button data-modal="modal-html">HTML</button>
          </div>
        </div>
    `,
  },
  {
    id: "agentic",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner">
          <p class="kicker">Agentic AI</p>
          <h2>챗봇에서 에이전트로</h2>
          <p class="lead narrow">
            생성형 AI의 변화는 모델 성능만의 이야기가 아니라,<br>사람이 컴퓨터와 일하는 방식이 바뀐 역사입니다.
          </p>
          <div class="timeline history-timeline" aria-label="ChatGPT 이후 Agentic AI 연혁">
            <button class="timeline-item" style="--i: 0" data-modal="modal-2022">
              <span class="timeline-dot"></span>
              <strong>2022</strong>
              <small>대화형 AI의 대중화</small>
              <span>ChatGPT</span>
            </button>
            <button class="timeline-item" style="--i: 1" data-modal="modal-2023">
              <span class="timeline-dot"></span>
              <strong>2023</strong>
              <small>업무 보조 도구화</small>
              <span>GPT-4, Plugins, Code Interpreter</span>
            </button>
            <button class="timeline-item" style="--i: 2" data-modal="modal-2024">
              <span class="timeline-dot"></span>
              <strong>2024</strong>
              <small>멀티모달과 긴 문맥</small>
              <span>문서, 이미지, 음성, 파일 작업</span>
            </button>
            <button class="timeline-item" style="--i: 3" data-modal="modal-2025">
              <span class="timeline-dot"></span>
              <strong>2025</strong>
              <small>일을 맡기는 AI</small>
              <span>Deep Research, coding agents, computer use</span>
            </button>
            <button class="timeline-item" style="--i: 4" data-modal="modal-2026">
              <span class="timeline-dot"></span>
              <strong>2026</strong>
              <small>Agentic workflow의 일상화</small>
              <span>하네스, 스킬, 검증 루프</span>
            </button>
          </div>
        </div>
    `,
  },
  {
    id: "current-level",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">현재 수준</p>
            <h2>AI는 이제 말만 하지 않고,<br>작업합니다</h2>
            <p class="lead">
              파일을 읽고, 웹을 찾고, 코드를 실행하고,<br>그래프를 만들고, 문서를 고치고,<br>실패하면 다시 시도합니다.
            </p>
          </div>
          <div class="capability-list">
            <button data-modal="modal-agent-work">계획 수립</button>
            <button data-modal="modal-agent-tools">도구 사용</button>
            <button data-modal="modal-agent-iteration">반복 수정</button>
            <button data-modal="modal-agent-limit">검증 한계</button>
          </div>
        </div>
    `,
  },
  {
    id: "paper-presentation-demo",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">Live Demo</p>
            <h2>논문 발표 준비에서 Agent는<br>어디까지 도와줄 수 있을까?</h2>
            <p class="lead">
              PDF 하나를 넣고, 논문 요약이 아니라<br>연구실 발표 workflow 전체를 구조화합니다.
            </p>
            <button class="text-button" data-modal="modal-paper-demo-source">사용할 논문</button>
          </div>
          <div class="demo-flow">
            <button data-modal="modal-paper-demo-0"><strong>0</strong><span>Plan mode로 시작</span></button>
            <button data-modal="modal-paper-demo-1"><strong>1</strong><span>논문 구조화</span></button>
            <button data-modal="modal-paper-demo-2"><strong>2</strong><span>발표 목차 만들기</span></button>
            <button data-modal="modal-paper-demo-3"><strong>3</strong><span>Figure별 해석</span></button>
            <button data-modal="modal-paper-demo-4"><strong>4</strong><span>검토 질문 뽑기</span></button>
            <button data-modal="modal-paper-demo-5"><strong>5</strong><span>대본 초안 작성</span></button>
            <button data-modal="modal-paper-demo-6"><strong>6</strong><span>PPTX 산출물 만들기</span></button>
          </div>
        </div>
    `,
  },
  {
    id: "research-use",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner">
          <p class="kicker">Research Workflow</p>
          <h2>연구자의 AI 사용은<br>이미 넓어졌습니다</h2>
          <p class="lead narrow">
            특히 데이터 분석은 스킬과 검증 절차를 붙였을 때<br>연구 workflow로 다루기 좋아집니다.
          </p>
          <div class="workflow-strip focused-workflow">
            <button data-modal="modal-workflow-literature">
              <strong>문헌 탐색</strong>
              <span>관련 논문 찾기와 흐름 파악</span>
              <small>예: Elicit으로 후보 논문 찾고 ResearchRabbit으로 연결 관계 보기</small>
            </button>
            <button class="featured-workflow" data-modal="modal-workflow-data">
              <strong>데이터 분석</strong>
              <span>QC, 통계, 시각화</span>
              <small>예: scientific-agent-skills로 RNA-seq report와 checklist 생성</small>
            </button>
          </div>
        </div>
    `,
  },
  {
    id: "model-choice",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">Model Choice</p>
            <h2>어떤 AI를 쓰느냐보다<br>중요한 것은</h2>
            <p class="lead">
              모델의 차이는 있습니다.<br>하지만 연구 workflow의 품질은 도메인 지식, 충분한 맥락,<br>검토 절차와 하네스가 더 크게 좌우합니다.
            </p>
            <div class="definition-note">
              <strong>도메인 지식</strong>
              <span>특정 업무나 문제 영역의 용어, 맥락, 데이터, 관행, 제약조건, 좋은 결과의 기준을 이해하는 지식</span>
            </div>
          </div>
          <div class="matrix choice-matrix">
            <button class="matrix-card model-card" style="--i: 0" data-modal="modal-models">
              <strong>프론티어 모델 차이</strong>
              <span>각 모델은 잘하는 일이 조금 다릅니다.</span>
            </button>
            <button class="matrix-card domain-card" style="--i: 1" data-modal="modal-domain">
              <strong>도메인 지식</strong>
              <span>무엇이 맞는 질문인지 사람이 정합니다.</span>
            </button>
            <button class="matrix-card harness-card" style="--i: 2" data-modal="modal-harness">
              <strong>하네스의 역할</strong>
              <span>모델을 도구, 파일, 규칙 안에서 일하게 합니다.</span>
            </button>
            <button class="matrix-card quality-card" style="--i: 3" data-modal="modal-quality">
              <strong>균일한 품질</strong>
              <span>템플릿, 스킬, 검토 루프가 결과를 안정화합니다.</span>
            </button>
          </div>
        </div>
    `,
  },
  {
    id: "domain-examples",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner two-col">
          <div class="case-card">
            <p class="kicker">Example 1</p>
            <h3>신입과 시니어의 생산성 차이</h3>
            <p>
              같은 AI를 써도 무엇을 맡길지, 어디서 끊어 검토할지, 어떤 산출물을 요구할지가 다릅니다.
            </p>
            <button class="text-button" data-modal="modal-senior-example">실무 예시</button>
          </div>
          <div class="case-card">
            <p class="kicker">Example 2</p>
            <h3>차지민 박사와의 분석 검토</h3>
            <p>
              데이터 분석의 기술적 실행은 도와줄 수 있지만, 생물학적 해석은 연구자의 검토 없이는 완성되지 않습니다.
            </p>
            <button class="text-button" data-modal="modal-jimin-example">검토 루프</button>
          </div>
        </div>
    `,
  },
  {
    id: "jimin-artifacts",
    className: "slide image-slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner">
          <p class="kicker">Actual Artifacts</p>
          <h2>실제 결과물</h2>
          <div class="artifact-gallery">
            <button data-modal="modal-jimin-artifact-overview">
              <img src="assets/jimin-session/crc-heatmap-overview.png" alt="CRC overview heatmap" />
              <span>CRC overview heatmap</span>
            </button>
            <button data-modal="modal-jimin-artifact-driver">
              <img src="assets/jimin-session/crc-driver-core-heatmap.png" alt="CRC driver core heatmap" />
              <span>Driver core heatmap</span>
            </button>
            <button data-modal="modal-jimin-artifact-pca">
              <img src="assets/jimin-session/crc-pca-group-avg.png" alt="CRC group averaged PCA" />
              <span>Group-averaged PCA</span>
            </button>
            <button data-modal="modal-jimin-artifact-volcano">
              <img src="assets/jimin-session/kras-fuso-vs-kras-he-volcano.png" alt="Kras Fuso versus Kras He group averaged volcano" />
              <span>Group-averaged volcano</span>
            </button>
          </div>
          <button class="text-button" data-modal="modal-jimin-artifact-package">최종 패키지 구성 보기</button>
          <a class="text-button" href="#jimin-session-case">HITL 과정 보기</a>
        </div>
    `,
  },
  {
    id: "jimin-session-case",
    className: "slide",
    section: "Agentic AI",
    html: `
<div class="slide-inner">
          <p class="kicker">Real Case</p>
          <h2>차지민 박사와 진행한 작업에서 본<br>HITL</h2>
          <div class="step-grid">
            <button data-modal="modal-jimin-case-1"><strong>1</strong><span>분석 단위 수정</span></button>
            <button data-modal="modal-jimin-case-2"><strong>2</strong><span>PCA 기준 선택</span></button>
            <button data-modal="modal-jimin-case-4"><strong>3</strong><span>Heatmap 대비 조정</span></button>
            <button data-modal="modal-jimin-case-6"><strong>4</strong><span>Volcano/PCA 선별</span></button>
            <button data-modal="modal-jimin-case-7"><strong>5</strong><span>최종 패키징</span></button>
            <button data-modal="modal-jimin-case-8"><strong>6</strong><span>PPT/전달까지 확장</span></button>
          </div>
        </div>
    `,
  },
  {
    id: "principles-cover",
    className: "slide section-cover",
    section: "이해",
    html: `
<div class="slide-inner">
          <p class="kicker">Part 2</p>
          <h2>AI 활용 원칙</h2>
          <p class="lead narrow">
            좋은 답을 받는 법보다,<br>검토 가능한 산출물을 만드는 법을 봅니다.
          </p>
          <div class="cover-points">
            <span>LLM Mindset</span>
            <span>Context Engineering</span>
            <span>Hallucination</span>
            <span>Agent Workflow</span>
          </div>
        </div>
    `,
  },
  {
    id: "understand",
    className: "slide",
    section: "이해",
    html: `
	<div class="slide-inner split">
          <div>
            <p class="kicker">Mindset</p>
            <h2>LLM은 결론이 아니라<br>검토할 결과물을 만듭니다</h2>
            <p class="lead">
              답을 바로 믿는 순간 위험해지고,<br>검토 가능한 초안으로 다루는 순간 강력해집니다.
            </p>
            <div class="rule-stack compact-rules">
              <button data-modal="modal-llm-prob">확률적 생성</button>
              <button data-modal="modal-draft">검토할 초안</button>
              <button data-modal="modal-hitl">HITL 필수</button>
            </div>
          </div>
          <div class="llm-open-card">
            <p class="kicker">How LLM Works</p>
            <h3>Input을 보고 다음 token을 고릅니다</h3>
            <div class="mini-pipeline" aria-hidden="true">
              <span>Input Context</span>
              <span>Score / Logits</span>
              <span>Output Token</span>
            </div>
            <p>
              LLM은 문장을 한 번에 완성하는 것이 아니라, 주어진 context 다음에 올 token 후보들의 score를 계산하고 하나씩 이어 붙입니다.
            </p>
            <button class="text-button" data-modal="modal-llm-visual">자세히 보기</button>
          </div>
        </div>
    `,
  },
  {
    id: "context-slide",
    className: "slide",
    section: "이해",
    html: `
<div class="slide-inner">
          <p class="kicker">Context Engineering</p>
          <h2>좋은 질문보다<br>충분한 맥락이 결과를 바꿉니다</h2>
          <div class="compare">
            <div>
              <span class="label bad">부족한 요청</span>
              <p>"이 데이터 분석해줘."</p>
            </div>
            <div>
              <span class="label good">좋은 요청</span>
              <p>
                데이터 설명, 컬럼 의미, 실험군, 금지사항, 출력 형식, 검토 기준, 최종 목표를 함께 제공합니다.
              </p>
            </div>
          </div>
          <div class="context-insight">
            <strong>핵심:</strong>
            <span>양질의 Context는 AI가 아니라 연구자가 만듭니다. 실험 설계, sample 의미, marker/pathway 해석, 통계적 한계를 아는 사람이 좋은 질문보다 더 좋은 작업 지시서를 줄 수 있습니다.</span>
          </div>
          <button class="text-button" data-modal="modal-context-template">연구 분석용 Context 템플릿</button>
        </div>
    `,
  },
  {
    id: "hallucination",
    className: "slide",
    section: "이해",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">Hallucination</p>
            <h2>그럴듯하게 틀릴 수 있다는<br>전제를 둡니다</h2>
            <p class="lead">
              가짜 citation, 과한 해석, 근거 없는 추정,<br>잘못된 비교가 workflow에 섞일 수 있습니다.
            </p>
          </div>
          <div class="checklist">
            <button data-modal="modal-citation-check">출처 확인</button>
            <button data-modal="modal-stat-check">통계 검토</button>
            <button data-modal="modal-domain-check">도메인 검토</button>
            <button data-modal="modal-repro-check">재현성 확인</button>
          </div>
        </div>
    `,
  },
  {
    id: "working-ai",
    className: "slide",
    section: "이해",
    html: `
<div class="slide-inner">
          <p class="kicker">From Talking To Working</p>
          <h2>말하는 AI에서 일하는 AI로</h2>
          <div class="tool-belt">
            <span>File</span>
            <span>Web</span>
            <span>Python</span>
            <span>Plot</span>
            <span>Docs</span>
            <span>Code</span>
          </div>
          <p class="lead narrow">
            Agent는 컴퓨터에서 할 수 있는 작업을 도구로 호출하고, 중간 결과를 보며 계획을 수정합니다.
          </p>
        </div>
    `,
  },
  {
    id: "agent-workflow",
    className: "slide",
    section: "이해",
    html: `
	<div class="slide-inner">
	          <p class="kicker">Stable Workflow</p>
	          <h2>Agent는 목표를 잡고<br>반복적으로 완성합니다</h2>
	          <div class="flow-diagram">
	            <button data-modal="modal-goal">목표</button>
	            <button data-modal="modal-plan">계획</button>
	            <button data-modal="modal-tools">도구</button>
	            <button data-modal="modal-artifact">산출물</button>
	            <button data-modal="modal-review">사람 검토</button>
	          </div>
	          <div class="workflow-live-demo">
	            <div class="terminal-card" aria-label="Agent workflow 라이브 데모 프롬프트">
	              <span>$ codex</span>
	              <p>Ensembl REST API에서 human KRT14 gene annotation을 받아와서, exon/intron 구조를 3D gene viewer HTML로 만들어줘. 대표 transcript, exon 위치, transcription 방향, gene 좌표를 라벨로 표시하고 브라우저에서 검증해줘. 먼저 계획부터 보여줘.</p>
	            </div>
	            <button class="text-button" data-modal="modal-agent-live-demo">라이브 데모 내용</button>
	          </div>
	        </div>
	    `,
	  },
	  {
	    id: "practice-cover",
	    className: "slide section-cover",
	    section: "실습",
	    html: `
<div class="slide-inner">
	          <p class="kicker">Part 3</p>
	          <h2>실습</h2>
	          <p class="lead narrow">
	            설명을 듣는 시간이 아니라,<br>Skill과 실제 데이터로 산출물을 만들어봅니다.
	          </p>
	          <div class="cover-points">
	            <span>AGENTS.md</span>
	            <span>Scientific Agent Skills</span>
	            <span>Keratinocyte RNA-seq</span>
	            <span>Report / Figure Note</span>
	          </div>
	        </div>
	    `,
	  },
	  {
	    id: "agents-md",
	    className: "slide",
	    section: "실습",
	    html: `
	<div class="slide-inner split">
	          <div>
	            <p class="kicker">Project Instructions</p>
	            <h2>AGENTS.md는 Agent에게 주는<br>프로젝트 사용설명서입니다</h2>
	            <p class="lead">
	              프로젝트마다 지켜야 할 규칙, 파일 구조, 실행 방법,<br>금지사항을 적어두면 Agent가 매번 같은 기준으로 일할 수 있습니다.
	            </p>
	          </div>
	          <div class="skill-stack">
	            <button data-modal="modal-agents-md-what"><strong>무엇인가</strong><span>프로젝트별 기본 지침</span></button>
	            <button data-modal="modal-agents-md-why"><strong>왜 필요한가</strong><span>맥락 반복 입력을 줄임</span></button>
	            <button data-modal="modal-agents-md-example"><strong>무엇을 쓰나</strong><span>구조, 명령어, 주의사항</span></button>
	            <button data-modal="modal-agents-md-vs-skill"><strong>Skill과 차이</strong><span>프로젝트 규칙 vs 작업 절차</span></button>
	          </div>
	        </div>
	    `,
	  },
	  {
	    id: "skill-concept",
	    className: "slide",
	    section: "실습",
	    html: `
	<div class="slide-inner">
	          <p class="kicker">Skill Concept</p>
	          <h2>Skill은 Agent에게 주는<br>작업 매뉴얼입니다</h2>
	          <p class="lead narrow">
	            매번 긴 prompt로 설명하지 않고,<br>반복되는 작업 방식, 검증 기준, 산출물 형식을<br>미리 정해두는 방법입니다.
	          </p>
	          <div class="skill-stack">
	            <button data-modal="modal-skill-what"><strong>무엇인가</strong><span>작업 지침과 체크리스트</span></button>
	            <button data-modal="modal-skill-why"><strong>왜 쓰나</strong><span>결과 품질의 흔들림을 줄임</span></button>
	            <button data-modal="modal-skill-contains"><strong>무엇을 담나</strong><span>절차, 도구, 금지사항, 산출물</span></button>
	            <button data-modal="modal-skill-limit"><strong>한계</strong><span>판단 책임은 사람에게 남음</span></button>
	          </div>
	          <button class="kden-skill-card" data-modal="modal-kden-bulk-rnaseq">
	            <span>K-Dense Skill Example</span>
	            <strong>bulk-rnaseq</strong>
	            <small>FASTQ → QC → counts matrix → DEG → pathway enrichment → figures</small>
	          </button>
	        </div>
	    `,
	  },
	  {
	    id: "skills",
	    className: "slide",
	    section: "실습",
	    html: `
		      <div class="slide-inner split">
		          <div>
		            <p class="kicker">Scientific Agent Skills</p>
		            <h2>이번 실습에서는<br>연구용 Skill을 사용합니다</h2>
		            <p class="lead">
		              Scientific Agent Skills는 연구 데이터 분석과 문헌/figure 검토에서 필요한<br>절차와 검증 기준을 Agent가 따르게 만드는 예시입니다.
		            </p>
	            <a class="external-link" href="https://github.com/K-Dense-AI/scientific-agent-skills" target="_blank" rel="noreferrer">
	              K-Dense-AI/scientific-agent-skills
	            </a>
	          </div>
	          <div class="skill-file-preview">
	            <span>bulk-rnaseq/SKILL.md</span>
	            <pre>---
name: bulk-rnaseq
description: End-to-end bulk RNA-seq orchestrator
metadata: {"skill-author": "K-Dense Inc."}
---

# Bulk RNA-seq

The pipeline is:
FastQC/trim → align/quant → counts
→ DE → enrichment → figures</pre>
	            <button class="text-button" data-modal="modal-kden-bulk-rnaseq">실제 Skill 내용 보기</button>
	          </div>
	        </div>
		    `,
	  },
	  {
	    id: "practice",
	    className: "slide",
	    section: "실습",
    html: `
	      <div class="slide-inner split">
	          <div>
	            <p class="kicker">Hands-on</p>
	            <h2>Scientific Agent Skills로<br>산출물 만들기</h2>
	            <p class="lead">
	              오늘 실습은 설명을 듣는 시간이 아니라,<br>Skill을 불러 실제 데이터 폴더에서 검토 가능한<br>Report, Figure note, 발표용 요약을 만들어보는 시간입니다.
	            </p>
	            <div class="practice-actions">
	              <button class="text-button" data-modal="modal-practice-goal">실습 목표</button>
	              <a class="download-chip" href="assets/downloads/keratinocyte_analysis_results_no_fastq.zip" download>실습 ZIP 다운로드</a>
	            </div>
	          </div>
	          <div class="terminal-card" aria-label="실습 프롬프트 예시">
	            <span>$ codex</span>
	            <p>scientific-agent-skills를 사용해서 keratinocyte SPF vs GF RNA-seq 폴더에서 analysis report와 figure review를 만들어줘.</p>
	          </div>
        </div>
    `,
  },
  {
    id: "hands-on-session",
    className: "slide",
    section: "실습",
    html: `
	      <div class="slide-inner">
	          <p class="kicker">Skill-guided Hands-on</p>
	          <h2>Skill을 어떻게 호출하고<br>어떻게 써먹는지 봅니다</h2>
	          <p class="lead narrow">
	            bulk-rnaseq로 분석 절차를 잡고,<br>scientific-visualization으로 Figure 품질을 잡아<br>검토 가능한 Artifact를 만드는 방법입니다.
	          </p>
	          <div class="step-grid session-step-grid">
	            <button data-modal="modal-session-bioservices"><strong>1</strong><span>Skill 설치와 호출</span></button>
	            <button data-modal="modal-session-visualization"><strong>2</strong><span>분석 기준 확인</span></button>
	            <button data-modal="modal-session-biopython"><strong>3</strong><span>시각화 Skill 적용</span></button>
	            <button data-modal="modal-session-scope"><strong>4</strong><span>피드백 반영</span></button>
	          </div>
        </div>
    `,
  },
  {
    id: "keratinocyte-data",
    className: "slide image-slide",
    section: "실습",
    html: `
<div class="slide-inner">
          <p class="kicker">Dataset</p>
          <h2>Keratinocyte SPF vs GF bulk RNA-seq</h2>
          <figure class="analysis-figure">
            <img src="assets/keratinocyte/dashboard-summary.png" alt="Keratinocyte 분석 대시보드 요약" />
          </figure>
          <div class="metric-row">
            <button data-modal="modal-dataset">데이터 구조</button>
            <button data-modal="modal-deg">DEG 요약</button>
            <button data-modal="modal-kegg">KEGG/GO</button>
            <button data-modal="modal-qc">QC 포인트</button>
          </div>
        </div>
    `,
  },
	  {
	    id: "figures",
    className: "slide image-slide",
    section: "실습",
    html: `
	      <div class="slide-inner">
	          <p class="kicker">Artifacts</p>
	          <h2>오늘 만들 산출물은<br>사람이 바로 검토할 수 있어야 합니다</h2>
          <div class="figure-grid">
            <button class="figure-button" data-modal="modal-volcano">
              <img src="assets/keratinocyte/volcano-spf-gf.png" alt="SPF vs GF volcano plot" />
              <span>Volcano</span>
            </button>
            <button class="figure-button" data-modal="modal-targeted-panel">
              <img src="assets/keratinocyte/targeted-panel.png" alt="Targeted biology panel" />
              <span>Targeted panel</span>
            </button>
            <button class="figure-button" data-modal="modal-heatmap">
              <img src="assets/keratinocyte/marker-heatmap.png" alt="Selected marker heatmap" />
              <span>Marker heatmap</span>
            </button>
          </div>
        </div>
    `,
	  },
	  {
	    id: "codex-features",
	    className: "slide compact",
	    section: "실습",
	    html: `
	<div class="slide-inner">
	          <p class="kicker">Codex Tips</p>
	          <h2>실습에서 바로 써먹을 Codex 기능</h2>
	          <div class="concept-grid">
	            <button data-modal="modal-codex-goal"><strong>/goal</strong><span>긴 작업 목표 고정</span></button>
	            <button data-modal="modal-codex-plan"><strong>Plan mode</strong><span>실행 전 설계 확인</span></button>
	            <button data-modal="modal-codex-files"><strong>Files & paths</strong><span>실제 폴더 읽기</span></button>
	            <button data-modal="modal-codex-skills"><strong>Skills</strong><span>작업 매뉴얼 호출</span></button>
	            <button data-modal="modal-codex-verify"><strong>Verify</strong><span>테스트와 산출물 확인</span></button>
	            <button data-modal="modal-codex-browser"><strong>Browser</strong><span>화면 보며 수정</span></button>
	          </div>
	        </div>
	    `,
	  },
	  {
	    id: "tools-cover",
	    className: "slide section-cover",
	    section: "도구",
	    html: `
<div class="slide-inner">
	          <p class="kicker">Part 4</p>
	          <h2>AI 도구 소개</h2>
	          <p class="lead narrow">
	            연구 과정에서 활용해볼 만한<br>추가 AI 도구들을 간단히 소개합니다.
	          </p>
	          <div class="cover-points">
	            <span>OpenAI</span>
	            <span>Google</span>
	            <span>Anthropic</span>
	            <span>Research Tools</span>
	          </div>
	        </div>
	    `,
	  },
	  {
	    id: "tools",
    className: "slide",
    section: "도구",
    html: `
<div class="slide-inner">
          <p class="kicker">Frontier Tools</p>
          <h2>프론티어 도구는<br>흐름만 잡으면 됩니다</h2>
          <div class="frontier-grid">
            <button data-modal="modal-openai"><strong>OpenAI</strong><span>ChatGPT, Deep Research, Codex</span></button>
            <button data-modal="modal-google"><strong>Google</strong><span>NotebookLM, Gemini Deep Research, Gemini for Science</span></button>
            <button data-modal="modal-anthropic"><strong>Anthropic</strong><span>Claude, Claude Code</span></button>
          </div>
        </div>
    `,
  },
  {
    id: "tool-mentions",
    className: "slide compact",
    section: "도구",
    html: `
<div class="slide-inner">
          <p class="kicker">Mention Only</p>
          <h2>나머지는 용도별로 이름만 알아두기</h2>
          <div class="mention-list">
            <button data-modal="modal-elicit"><strong>Elicit</strong><span>질문 기반 Literature Review</span></button>
            <button data-modal="modal-researchrabbit"><strong>ResearchRabbit</strong><span>Citation Network 탐색</span></button>
            <button data-modal="modal-litmaps"><strong>Litmaps</strong><span>Literature Map과 Monitoring</span></button>
            <button data-modal="modal-consensus"><strong>Consensus</strong><span>Claim 근거 빠르게 확인</span></button>
            <button data-modal="modal-scispace"><strong>SciSpace</strong><span>PDF 읽기와 문단 설명</span></button>
            <button data-modal="modal-perplexity"><strong>Perplexity</strong><span>출처 기반 Web Research</span></button>
            <button data-modal="modal-alphafold"><strong>AlphaFold Server</strong><span>Protein Interaction 예측</span></button>
          </div>
        </div>
    `,
  },
  {
    id: "closing-cover",
    className: "slide section-cover",
    section: "마무리",
    html: `
<div class="slide-inner">
          <p class="kicker">Part 5</p>
          <h2>마무리</h2>
          <p class="lead narrow">
            AI는 생산성을 높이지만,<br>읽고 질문하고 판단하는 힘을 대체하지 않습니다.
          </p>
          <div class="cover-points">
            <span>Skill Formation</span>
            <span>Reading</span>
            <span>Questioning</span>
            <span>Judgment</span>
          </div>
        </div>
    `,
  },
  {
    id: "paper",
    className: "slide",
    section: "마무리",
    html: `
<div class="slide-inner split">
          <div>
            <p class="kicker">Research Note</p>
            <h2>AI는 생산성을 높일 수 있지만,<br>학습을 대신하지 않습니다</h2>
            <p class="lead">
              AI 사용 방식에 따라 개념 이해, 코드 읽기, 디버깅 능력의 형성이 달라질 수 있습니다.
            </p>
            <button class="text-button" data-modal="modal-skill-paper">논문 요약</button>
          </div>
          <div class="paper-card">
            <span>arXiv:2601.20245</span>
            <strong>How AI Impacts Skill Formation</strong>
            <p>Judy Hanwen Shen, Alex Tamkin. 2026.</p>
          </div>
        </div>
    `,
  },
  {
    id: "education",
    className: "slide education-slide",
    section: "마무리",
    html: `
<div class="slide-inner">
          <p class="kicker">Education</p>
          <h2>앞으로 더 중요해지는 세 가지 힘</h2>
          <div class="education-visual-wrap">
            <img src="assets/three-human-powers.png" alt="AI 시대에 더 중요해지는 읽기, 질문, 판단의 힘을 표현한 인포그래픽" />
          </div>
          <div class="education-grid education-actions">
            <button data-modal="modal-read"><strong>잘 읽는 힘</strong><span>근거를 읽고 이해하기</span></button>
            <button data-modal="modal-question"><strong>좋은 질문을 하는 힘</strong><span>더 나은 맥락 만들기</span></button>
            <button data-modal="modal-judge"><strong>스스로 판단하는 힘</strong><span>마지막 책임을 지기</span></button>
          </div>
        </div>
    `,
  },
  {
    id: "closing",
    className: "slide final-slide",
    section: "마무리",
    html: `
<div class="slide-inner">
          <p class="kicker">Takeaway</p>
          <h2>AI를 잘 쓰는 연구자는<br>더 많이 맡기는 사람이 아니라,<br>더 잘 검토하는 사람입니다</h2>
          <p class="lead narrow">
            Context를 충분히 주고, Agent에게 일을 맡기고,<br>산출물을 근거와 도메인 지식으로 검토하는<br>workflow를 만드는 것이 핵심입니다.
          </p>
        </div>
    `,
  }
];
