window.MODALS = {
  "modal-overview": {
    kicker: "2 hours",
    title: "강의 흐름",
    body: `
      <ol>
        <li>소개와 AI 사용 경험 확인</li>
        <li>ChatGPT 이후 Agentic AI까지의 변화</li>
        <li>Prompt, Context, Agent, Skill, Hook, Harness 개념</li>
        <li>Hallucination과 Human-in-the-loop 검증</li>
        <li>Codex로 keratinocyte RNA-seq 분석 workflow 구조화</li>
        <li>프론티어 연구 도구와 마지막 교육 메시지</li>
      </ol>
    `,
  },
  "modal-sources": {
    kicker: "Sources",
    title: "주요 근거와 참고 링크",
    body: `
      <ul>
        <li><a href="https://openai.com/index/chatgpt/" target="_blank" rel="noreferrer">OpenAI - Introducing ChatGPT</a></li>
        <li><a href="https://openai.com/index/introducing-deep-research/" target="_blank" rel="noreferrer">OpenAI - Introducing deep research</a></li>
        <li><a href="https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/" target="_blank" rel="noreferrer">Google - Gemini for Science</a></li>
        <li><a href="https://www.anthropic.com/research/claude-code-expertise" target="_blank" rel="noreferrer">Anthropic - Agentic coding and expertise</a></li>
        <li><a href="https://arxiv.org/abs/2601.20245" target="_blank" rel="noreferrer">arXiv:2601.20245 - How AI Impacts Skill Formation</a></li>
        <li><a href="https://github.com/K-Dense-AI/scientific-agent-skills" target="_blank" rel="noreferrer">K-Dense-AI/scientific-agent-skills</a></li>
      </ul>
    `,
  },
  "modal-profile": {
    kicker: "CV",
    title: "이한솔 소개",
    body: `
      <ul>
        <li>Samsung SDS Senior Software Engineer, 2017.08 - 현재</li>
        <li>엔터프라이즈 sales order, billing, customization service, SCM portal 도메인 경험</li>
        <li>Java/Spring, React, Kubernetes, RDBMS, Python, FastAPI 기반 개발</li>
        <li>Codex, Claude Code, opencode를 활용한 코드 생성, 리팩터링, 테스트 개선, 문서화, 반복 업무 자동화 경험</li>
        <li>성균관대학교 수학/심리학 복수전공</li>
        <li>오늘은 실제 연구실 workflow를 가까이에서 보는 실무 협업자의 관점도 포함</li>
      </ul>
    `,
  },
  "modal-ai-experience": {
    kicker: "Question",
    title: "단순 챗 사용 경험",
    body: "<p>아이디어 정리, 번역, 논문 문단 설명, 이메일 작성처럼 대화형으로 쓰는 방식입니다. 여기서 한 단계 넘어가면 파일과 도구를 다루는 workflow로 이동합니다.</p>",
  },
  "modal-agent-experience": {
    kicker: "Question",
    title: "에이전트 사용 경험",
    body: "<p>Codex, Claude Code, Antigravity 같은 도구는 질문에 답하는 것을 넘어 파일을 읽고, 코드를 고치고, 명령을 실행하고, 실패를 관찰한 뒤 다시 시도합니다.</p>",
  },
  "modal-paid-experience": {
    kicker: "Question",
    title: "유료 버전과 Deep Research",
    body: "<p>유료 모델은 보통 더 긴 context, 더 나은 reasoning, 더 많은 도구 사용량을 제공합니다. 하지만 비용을 지불해도 검토 책임은 사라지지 않습니다.</p>",
  },
  "modal-2022": {
    kicker: "History",
    title: "2022 - ChatGPT 대중화",
    body: `
      <p>2022년 11월 30일 ChatGPT 공개 이후, LLM은 연구실이나 개발자 도구 안에 있던 기술에서 일반 사용자가 매일 만지는 제품으로 바뀌었습니다.</p>
      <p>중요한 변화는 인터페이스였습니다. 사람들은 더 이상 모델을 API나 코드로만 호출하지 않고, 자연어 대화로 요약, 번역, 글쓰기, 아이디어 정리, 코드 질문을 하기 시작했습니다.</p>
      <ul>
        <li>핵심 사용 방식: 질문을 던지고 답변을 받는 챗봇</li>
        <li>장점: 진입 장벽이 매우 낮고, 거의 모든 지식 업무에 바로 시도 가능</li>
        <li>한계: 모델이 실제 파일이나 도구를 직접 다루지는 못하고, 답변 검증은 전적으로 사용자에게 남음</li>
      </ul>
    `,
  },
  "modal-2023": {
    kicker: "History",
    title: "2023 - 더 강한 모델과 도구 연결",
    body: `
      <p>2023년에는 GPT-4급 모델과 플러그인, 코드 실행 환경, 검색 연결이 등장하면서 LLM이 단순히 말을 잘하는 도구에서 업무 보조 인터페이스로 이동했습니다.</p>
      <p>특히 Code Interpreter류의 기능은 전환점이었습니다. 사용자가 CSV나 엑셀을 올리면 모델이 Python을 실행해 표를 읽고, 통계를 계산하고, 그래프를 만들 수 있게 되었습니다.</p>
      <ul>
        <li>핵심 사용 방식: 대화 + 도구 호출</li>
        <li>업무 변화: 문서 작성 보조에서 데이터 처리, 코드 작성, 검색 보조로 확장</li>
        <li>새로운 문제: 도구가 만든 결과도 모델이 해석하므로, 계산과 해석을 분리해 검토해야 함</li>
      </ul>
    `,
  },
  "modal-2024": {
    kicker: "History",
    title: "2024 - 멀티모달과 긴 문맥",
    body: `
      <p>2024년의 큰 흐름은 멀티모달과 긴 문맥이었습니다. 텍스트만 다루던 사용 경험이 문서, 이미지, 표, 음성, 코드, 긴 대화 이력을 함께 다루는 방향으로 넓어졌습니다.</p>
      <p>이 시기부터 AI는 단발 질문보다 자료 묶음을 기반으로 일하는 방식에 가까워졌습니다. 긴 PDF를 읽고, 스크린샷을 설명하고, 회의 내용을 정리하고, 코드베이스의 여러 파일을 함께 이해하는 경험이 보편화되었습니다.</p>
      <div class="context-scale">
        <div>
          <span>초기 ChatGPT/API 체감</span>
          <strong>약 4K-16K tokens</strong>
          <p>짧은 대화, 몇 페이지 문서, 코드 일부를 넣는 수준</p>
        </div>
        <div>
          <span>2024년 이후 long-context</span>
          <strong>128K-200K tokens</strong>
          <p>긴 논문, 여러 문서, 중간 규모 코드베이스를 함께 넣는 수준</p>
        </div>
        <div>
          <span>현재 frontier long-context</span>
          <strong>1M+ tokens</strong>
          <p>수백 페이지 자료, 큰 프로젝트, 장시간 transcript까지 한 번에 다루는 방향</p>
        </div>
      </div>
      <ul>
        <li>핵심 사용 방식: 더 많은 자료를 context로 넣고 답변 받기</li>
        <li>업무 변화: "이 문장 고쳐줘"에서 "이 자료 묶음을 바탕으로 판단해줘"로 이동</li>
        <li>새로운 문제: context가 길어질수록 어떤 근거에서 나온 답인지 추적하는 절차가 중요해짐</li>
      </ul>
      <p class="modal-note">단, context window가 커졌다고 모든 내용을 정확히 이해한다는 뜻은 아닙니다. 긴 문맥에서는 필요한 근거를 찾게 하는 지시, citation 확인, 사람이 보는 검토 루프가 더 중요해집니다.</p>
    `,
  },
  "modal-2025": {
    kicker: "History",
    title: "2025 - 일을 맡기는 AI",
    body: `
      <p>2025년에는 AI가 "답변"을 넘어 "작업"을 수행하는 방향이 뚜렷해졌습니다. Deep Research류의 기능은 사용자의 질문을 여러 하위 질문으로 나누고, 웹을 탐색하고, 출처를 종합해 긴 보고서를 만들었습니다.</p>
      <p>동시에 코딩 에이전트는 코드베이스를 읽고, 파일을 수정하고, 테스트를 실행하고, 실패 로그를 보고 다시 고치는 방식으로 발전했습니다. 일부 제품은 브라우저나 컴퓨터 조작까지 연결하며 실제 업무 환경에 가까워졌습니다.</p>
      <ul>
        <li>핵심 사용 방식: 목표를 주고, 계획과 중간 산출물을 확인하며 진행</li>
        <li>업무 변화: 사용자가 모든 단계를 지시하는 방식에서, Agent가 반복 작업을 맡는 방식으로 이동</li>
        <li>새로운 문제: 자율성이 커질수록 권한, 비용, 보안, 검증 기준을 명확히 해야 함</li>
      </ul>
    `,
  },
  "modal-2026": {
    kicker: "History",
    title: "2026 - Agentic workflow의 일상화",
    body: `
      <p>2026년 현재의 핵심은 특정 모델 하나가 아니라, 모델을 둘러싼 실행 환경입니다. Agent가 파일, 도구, 브라우저, 코드 실행, 문서 작성, 외부 서비스와 연결되면서 AI 사용은 점점 workflow 설계 문제가 되고 있습니다.</p>
      <p>그래서 중요한 개념이 하네스, 스킬, 훅, 권한, 로그, 테스트, Human-in-the-loop입니다. 좋은 사용자는 "어떤 모델이 더 똑똑한가"만 보지 않고, 어떤 절차 안에서 AI가 일하게 할지를 설계합니다.</p>
      <ul>
        <li>핵심 사용 방식: 반복 가능한 업무 절차 안에 Agent를 배치</li>
        <li>업무 변화: 개인 생산성 도구에서 팀 workflow, 조직 표준, 검증 체계로 확장</li>
        <li>남는 질문: AI에게 어디까지 맡기고, 어디서 사람이 멈춰 검토할 것인가</li>
      </ul>
    `,
  },
  "modal-agent-work": {
    kicker: "Agent",
    title: "계획 수립",
    body: `
      <p>에이전트는 사용자의 목표를 바로 실행하지 않고, 먼저 작은 단계로 쪼갭니다. 어떤 자료를 읽고, 어떤 도구를 쓰고, 어떤 중간 산출물을 만들지 정하는 과정입니다.</p>
      <p><strong>예시 1 - 연구 데이터 분석</strong></p>
      <ul>
        <li>요청: "이 RNA-seq 결과를 해석해줘."</li>
        <li>계획: 샘플 정보 확인 → DEG 기준 확인 → QC 파일 확인 → 주요 pathway 정리 → 과한 해석 분리 → 발표용 그림 후보 선정</li>
      </ul>
      <p><strong>예시 2 - 문헌 조사</strong></p>
      <ul>
        <li>요청: "이 주제의 최근 연구 흐름을 정리해줘."</li>
        <li>계획: 검색 키워드 정의 → 핵심 리뷰 논문 찾기 → 최근 원논문 분류 → 주장별 근거 표 만들기 → citation 확인</li>
      </ul>
      <p>좋은 Agent workflow에서는 이 계획을 먼저 보고, 사람이 "이 방향으로 진행해도 된다"거나 "이 비교는 빼자"고 개입할 수 있습니다.</p>
    `,
  },
  "modal-agent-tools": {
    kicker: "Agent",
    title: "도구 사용",
    body: `
      <p>Chatbot은 주로 말로 답하지만, Agent는 모델 바깥의 도구를 사용합니다. 이 차이 때문에 실제 업무 처리 능력이 크게 달라집니다.</p>
      <ul>
        <li><strong>파일 읽기:</strong> PDF, CSV, Excel, 이미지, 코드 파일을 직접 열어 구조와 내용을 확인합니다.</li>
        <li><strong>웹 검색:</strong> 최신 문서, 논문, 제품 정보, 공식 문서를 찾아 근거를 보강합니다.</li>
        <li><strong>Python/R 실행:</strong> 통계 계산, 데이터 정리, 그래프 생성, QC 요약을 실제 코드로 수행합니다.</li>
        <li><strong>문서 작성:</strong> 분석 요약, README, 보고서 초안, 이메일, 발표자료를 파일로 남깁니다.</li>
        <li><strong>코드 수정:</strong> 기존 코드베이스를 읽고 테스트를 실행한 뒤 필요한 부분을 고칩니다.</li>
      </ul>
      <p><strong>예시:</strong> "이 폴더를 보고 발표용 결과를 만들어줘"라고 하면, Agent는 폴더 구조를 훑고, CSV를 읽고, 기존 그림을 확인하고, 필요한 경우 Python으로 새 그림을 만든 뒤, 최종 요약 문서를 생성할 수 있습니다.</p>
    `,
  },
  "modal-agent-iteration": {
    kicker: "Agent",
    title: "반복 수정",
    body: `
      <p>Agent의 강점은 한 번에 정답을 내는 것이 아니라, 실패와 피드백을 보고 다시 시도하는 데 있습니다. 이 반복성이 챗봇과 가장 크게 다른 지점입니다.</p>
      <p><strong>기술적 반복 예시</strong></p>
      <ul>
        <li>Python 실행 중 패키지가 없다는 오류 발생</li>
        <li>대체 라이브러리나 설치된 런타임을 확인</li>
        <li>코드를 수정해 다시 실행</li>
        <li>출력 파일이 생겼는지 확인</li>
      </ul>
      <p><strong>분석적 반복 예시</strong></p>
      <ul>
        <li>처음 만든 volcano plot이 보기 어렵다는 피드백을 받음</li>
        <li>축 범위, 라벨, 색상, threshold 표시를 조정</li>
        <li>발표용 PNG와 재사용 가능한 PDF/HTML을 다시 생성</li>
      </ul>
      <p><strong>연구자 피드백 반복 예시</strong></p>
      <ul>
        <li>전문가가 "이 결과만으로 원인이라고 쓰면 과하다"고 피드백</li>
        <li>Agent가 문장을 "연관되어 보인다", "추가 검증이 필요하다"처럼 보수적으로 수정</li>
      </ul>
    `,
  },
  "modal-agent-limit": {
    kicker: "Agent",
    title: "검증 한계",
    body: `
      <p>Agent가 도구를 쓴다고 해서 결과가 자동으로 맞아지는 것은 아닙니다. 오히려 그럴듯한 산출물이 많이 생기기 때문에 검증 기준이 더 중요해집니다.</p>
      <ul>
        <li><strong>사실 검증:</strong> 논문 제목, DOI, citation, 공식 문서 내용이 실제로 맞는지 확인해야 합니다.</li>
        <li><strong>통계 검증:</strong> 샘플 수, FDR, effect size, batch effect, 비교군 정의가 적절한지 확인해야 합니다.</li>
        <li><strong>도메인 검증:</strong> pathway나 marker 해석이 실험 조건과 맞는지 전문가가 봐야 합니다.</li>
        <li><strong>보안/윤리 검증:</strong> 민감 데이터, 환자 정보, 내부 문서를 외부 도구에 넣어도 되는지 확인해야 합니다.</li>
        <li><strong>최종 책임:</strong> AI가 만든 문장과 그림을 발표하거나 논문에 넣는 책임은 사람에게 있습니다.</li>
      </ul>
      <p><strong>예시:</strong> Agent가 "microbiome이 keratinocyte differentiation을 유도했다"고 썼다면, 그것이 실제 실험 설계로 입증된 인과인지, 아니면 RNA-seq에서 보이는 연관인지 사람이 구분해야 합니다.</p>
    `,
  },
  "modal-paper-demo-source": {
    kicker: "Demo Paper",
    title: "사용할 논문",
    body: `
      <p>데모 논문은 <strong>Skin microbe-dependent TSLP-ILC2 priming axis in early life is co-opted in allergic inflammation</strong>입니다. skin microbiota, keratinocyte-derived TSLP, ILC2 priming, AD-like inflammation이 Figure 흐름으로 선명하게 이어집니다.</p>
      <ul>
        <li>목표: 논문 요약을 맡기는 것이 아니라, 발표 준비 절차를 Agent와 함께 구조화합니다.</li>
        <li>절차 적합성: Graphical abstract, Highlights, Summary, Figure 1-7의 실험 흐름이 명확합니다.</li>
        <li>Figure 흐름: microbiota deficiency -> neonatal window -> TSLP in keratinocytes -> <em>S. lentus</em> -> IAld-producing Staphylococcus -> adult AD-like inflammation</li>
        <li>진행 방식: Plan mode로 작업 계획을 세운 뒤 요약, figure map, 발표 목차, 검토 질문, 대본 초안, PPTX 산출물을 순서대로 만듭니다.</li>
      </ul>
    `,
  },
  "modal-paper-demo-0": {
    kicker: "Plan Mode",
    title: "먼저 발표 준비 계획을 세우기",
    body: `
      <p>바로 "논문 요약해줘"로 시작하지 않고, Plan mode에서 발표 준비 workflow를 먼저 설계합니다.</p>
      <pre>이 PDF 논문을 연구실 journal club 발표로 준비하려고 해.
바로 요약하지 말고, 먼저 발표 준비 계획을 세워줘.
목표는 15분 발표이고, figure 중심으로 설명하고 싶어.
사람이 검토해야 할 지점도 계획에 포함해줘.</pre>
      <p>Agent가 계획을 내면, 발표 대상과 핵심 초점을 추가해 방향을 좁힙니다.</p>
      <pre>좋아. 발표 대상은 피부/면역 쪽 연구자들이고,
skin microbiota, TSLP, ILC2 priming, AD-like inflammation의 연결에 집중하고 싶어.
Figure별 설명은 너무 길지 않게 하고,
journal club 질문을 마지막에 넣어줘.</pre>
      <p>핵심은 AI에게 정답을 맡기는 것이 아니라, 사람이 검토할 수 있는 작업 순서와 중간 산출물을 먼저 합의하는 것입니다.</p>
    `,
  },
  "modal-paper-demo-1": {
    kicker: "Prompt 1",
    title: "논문 구조화",
    body: `
      <p>첫 요청은 논문 전체 요약보다, 발표 준비에 필요한 뼈대를 만드는 데 둡니다.</p>
      <pre>이 논문을 연구실 journal club 발표 준비용으로 읽어줘.
먼저 1) 핵심 질문, 2) 주요 결론, 3) 실험 흐름, 4) 발표자가 조심해야 할 해석을 나눠서 정리해줘.
과장된 결론은 피하고, 논문 안에서 직접 보이는 근거와 추정이 필요한 내용을 구분해줘.</pre>
      <p>AI가 만든 결과는 최종 해석이 아니라 초안입니다. 제목, abstract, figure caption을 바탕으로 빠르게 지도를 만드는 용도입니다.</p>
    `,
  },
  "modal-paper-demo-2": {
    kicker: "Prompt 2",
    title: "발표 목차 만들기",
    body: `
      <p>다음 요청은 논문 내용을 발표 시간과 대상에 맞게 재구성하는 것입니다.</p>
      <pre>이 논문을 15분 연구실 발표로 구성한다면 슬라이드 목차를 만들어줘.
각 슬라이드는 제목, 말할 핵심 문장, 들어갈 figure 또는 panel, 청중에게 던질 질문을 포함해줘.</pre>
      <p>좋은 결과물은 단순한 section 요약이 아니라, "왜 이 실험이 다음 실험으로 이어지는지"가 드러나는 발표 흐름입니다.</p>
    `,
  },
  "modal-paper-demo-3": {
    kicker: "Prompt 3",
    title: "Figure별 해석",
    body: `
      <p>논문 발표의 핵심은 figure입니다. figure별 질문, 방법, 결과, 해석, 한계를 분리하면 검토하기 쉬워집니다.</p>
      <pre>Figure별로 무엇을 보여주는지 정리해줘.
각 figure에 대해:
- 실험 질문
- 사용한 방법
- 관찰 결과
- 저자 해석
- 발표자가 검토해야 할 한계
를 표로 만들어줘.</pre>
      <p>중요한 것은 "저자 해석"과 "내가 발표에서 말해도 되는 해석"을 분리하는 것입니다.</p>
    `,
  },
  "modal-paper-demo-4": {
    kicker: "Prompt 4",
    title: "검토 질문 뽑기",
    body: `
      <p>AI는 놓치기 쉬운 검토 질문을 미리 뽑는 데 유용합니다.</p>
      <pre>이 논문에서 AI가 바로 결론처럼 말하면 위험한 부분을 찾아줘.
예를 들어 neonatal mouse microbiota 결과를 human atopic dermatitis로 확장할 때 조심해야 할 점을 정리해줘.
그리고 journal club에서 나올 만한 질문 5개를 만들어줘.</pre>
      <ul>
        <li>mouse neonatal colonization 결과를 human early-life skin microbiome으로 어디까지 확장할 수 있는가?</li>
        <li><em>S. lentus</em>, IAld, TSLP, ILC2 priming 사이의 인과성이 Figure별로 충분히 지지되는가?</li>
        <li>AD-like inflammation model이 human atopic dermatitis를 어느 정도 대표하는가?</li>
        <li>early-life window라는 결론이 실험 설계와 시간축으로 충분히 뒷받침되는가?</li>
      </ul>
    `,
  },
  "modal-paper-demo-5": {
    kicker: "Prompt 5",
    title: "대본 초안 작성",
    body: `
      <p>마지막으로 실제로 말할 수 있는 톤의 introduction script를 만듭니다. 대상과 말투를 지정해야 결과가 좋아집니다.</p>
      <pre>이 논문을 연구실에서 발표한다고 가정하고,
첫 3분짜리 introduction script를 한국어로 써줘.
너무 대중강연처럼 쓰지 말고, 생명과학 연구자 대상 톤으로 써줘.
그리고 각 문장 옆에 어떤 figure 또는 배경 설명과 연결되는지 표시해줘.</pre>
      <p>대본은 시작점입니다. 실제 발표에서는 논문 이해와 figure 검토가 반드시 함께 들어가야 합니다.</p>
    `,
  },
  "modal-paper-demo-6": {
    kicker: "Prompt 6",
    title: "PPTX 산출물 만들기",
    body: `
      <p>마지막 단계에서는 지금까지 만든 발표 목차, figure map, 검토 질문, 발표 대본을 바탕으로 실제 PowerPoint 파일을 만듭니다.</p>
      <pre>지금까지 정리한 내용을 바탕으로 연구실 journal club용 PPTX를 만들어줘.
조건:
- 15분 발표 분량
- 10~12장 내외
- 각 슬라이드에 제목, 핵심 메시지, 들어갈 figure/panel, 발표자 노트를 포함
- 저자 결론과 발표자가 검토해야 할 한계를 구분
- 마지막에는 journal club 토론 질문 3~5개 포함
- 파일명은 tslp_ilc2_skin_microbiota_journal_club.pptx로 저장</pre>
      <p>생성 후에는 바로 끝내지 않고, Agent에게 자체 검증을 시킵니다.</p>
      <pre>만든 PPTX를 다시 점검해줘.
- 슬라이드 순서가 논리적인지
- 텍스트가 너무 많은 슬라이드는 없는지
- figure 설명과 결론이 과장되지 않았는지
- 발표자 노트가 실제 발표에 충분한지
- 남은 검토 필요 항목이 무엇인지
체크리스트로 알려줘.</pre>
      <p>Agent는 PPT 파일까지 만들 수 있지만, figure 사용 권한, 해석의 강도, 발표자의 이해는 사람이 마지막에 확인해야 합니다.</p>
    `,
  },
  "modal-workflow-question": {
    kicker: "Community Example",
    title: "질문 정리: 연구 질문을 더 구체화하기",
    body: `
      <p>실제 커뮤니티에서는 AI를 "검색창"처럼 쓰기보다, 연구 질문을 더 구체적인 형태로 바꾸는 데 쓰는 사례가 많습니다.</p>
      <ul>
        <li>OEGlobal Connect의 Elicit 사용 사례에서는 "How effective is open education in Asia?" 같은 넓은 질문을 넣고, 더 구체적인 검색 질문 제안을 확인하는 흐름이 소개됩니다.</li>
        <li>Elicit은 특히 "무엇이 무엇에 어떤 영향을 주는가?"처럼 empirical research 질문에 강하다는 설명이 공유되었습니다.</li>
        <li>활용 예시: "이 연구 질문에서 intervention, outcome, population, comparison을 분리해줘"라고 요청하면 가설과 대조군을 정리하는 출발점이 됩니다.</li>
      </ul>
      <p><a href="https://connect.oeglobal.org/t/eliciting-effectiveness-of-elicit-ai-research-lit-review-tool/4191" target="_blank" rel="noreferrer">OEGlobal Connect - Elicit 사용 사례</a></p>
    `,
  },
  "modal-workflow-literature": {
    kicker: "Community Example",
    title: "문헌 탐색: 관련 논문을 찾고 흐름 파악하기",
    body: `
      <p>문헌 탐색에서 AI는 "정답 논문 하나"를 찾아주는 도구라기보다, 관련 논문 후보를 넓게 찾고 연구 흐름을 파악하는 출발점으로 쓰는 편이 안전합니다.</p>
      <p>Stanford AI Tinkery에는 Elicit, ResearchRabbit, NotebookLM, ChatGPT/Gemini를 조합해 literature review를 진행한 실제 workflow가 소개되어 있습니다.</p>
      <ul>
        <li>Elicit으로 연구 질문에 맞는 후보 논문과 structured summary를 찾습니다.</li>
        <li>ResearchRabbit으로 이미 찾은 논문과 연결된 후속/관련 연구를 탐색합니다.</li>
        <li>논문 묶음을 NotebookLM에 넣고 특정 질문에 대한 근거 문단을 찾아봅니다.</li>
        <li>그 결과를 바탕으로 "이 분야에서 무엇이 이미 알려졌고, 어디가 빈틈인지"를 정리합니다.</li>
        <li>중요한 점은 citation과 claim을 원문에서 다시 확인한다는 것입니다.</li>
      </ul>
      <p><a href="https://ai-tinkery.stanford.edu/news/tinker-tidbits-ai-early-research" target="_blank" rel="noreferrer">Stanford AI Tinkery - AI-assisted literature review workflow</a></p>
    `,
  },
  "modal-workflow-data": {
    kicker: "Featured Community Example",
    title: "데이터 분석: Scientific Agent Skills로 절차화하기",
    body: `
      <p>데이터 분석은 연구자가 AI를 실제 업무에 붙이기 좋은 영역입니다. 다만 "분석해줘"라고 맡기는 것보다, 분석 관례와 검증 절차를 스킬로 묶어 실행하게 하는 편이 훨씬 안정적입니다.</p>
      <ul>
        <li><strong>K-Dense-AI/scientific-agent-skills</strong>는 연구 분석 작업에 필요한 절차, 체크리스트, 도구 사용 방식을 Agent가 따르게 만드는 예시로 사용할 수 있습니다.</li>
        <li>keratinocyte SPF vs GF bulk RNA-seq 폴더에서는 Agent가 먼저 파일 구조와 기존 산출물을 파악하게 합니다.</li>
        <li>그다음 DEG, QC, KEGG/GO, targeted panel, figure 후보를 정리하고, "안전한 주장"과 "도메인 검토가 필요한 해석"을 분리합니다.</li>
        <li>핵심은 모델이 데이터를 대신 판단하는 것이 아니라, 연구자가 검토할 수 있는 분석 노트와 재현 가능한 산출물을 만드는 것입니다.</li>
      </ul>
      <pre>이 데이터 폴더를 분석 프로젝트로 보고 먼저 구조를 요약해줘.
scientific-agent-skills의 연구 분석 workflow를 따른다고 가정하고,
원시 데이터, 기존 분석 결과, 시각화, 문헌 파일을 구분해줘.

그다음 아래를 분리해서 정리해줘.
- 바로 확인 가능한 수치
- 추가 코드 실행이 필요한 항목
- 도메인 전문가 검토가 필요한 해석
- 발표자료에 넣기 좋은 그림 후보</pre>
      <p>
        <a href="https://github.com/K-Dense-AI/scientific-agent-skills" target="_blank" rel="noreferrer">K-Dense-AI/scientific-agent-skills</a>
      </p>
    `,
  },
  "modal-workflow-writing": {
    kicker: "Community Example",
    title: "원고 작성: 초안은 가능하지만 disclosure와 검토가 필요",
    body: `
      <p>원고 작성은 실제 연구자들 사이에서도 가장 논쟁적인 영역입니다. Nature의 2025년 설문 기사에서도 약 5,000명의 연구자가 AI의 과학 논문 작성 관여와 disclosure 문제에 대해 엇갈린 견해를 보였다고 소개했습니다.</p>
      <ul>
        <li>활용 가능: outline 만들기, 문장 다듬기, reviewer 관점 질문 만들기, 논리 흐름 점검</li>
        <li>주의 필요: 데이터나 결과를 과장하는 문장, 존재하지 않는 citation, 저자 기여와 disclosure 문제</li>
        <li>활용 예시: "이 문단에서 주장과 근거가 분리되어 있는지 확인해줘"처럼 검토 도구로 쓰는 편이 안전합니다.</li>
      </ul>
      <p><a href="https://www.nature.com/articles/d41586-025-01463-8" target="_blank" rel="noreferrer">Nature - AI writing survey of researchers</a></p>
    `,
  },
  "modal-models": {
    kicker: "Models",
    title: "프론티어 모델 차이",
    body: `
      <p>모델마다 강점은 분명히 있습니다. 다만 중요한 것은 "어떤 모델이 무조건 최고인가"가 아니라, 작업에 맞는 모델과 workflow를 고르는 능력입니다.</p>
      <ul>
        <li><strong>ChatGPT 계열:</strong> 도구 생태계, 데이터 분석, 코드 실행, 문서 작성 workflow에 강점을 보이는 경우가 많습니다.</li>
        <li><strong>Claude 계열:</strong> 긴 문서 읽기, 논리 구조 점검, 원고/리뷰 피드백에서 좋은 경험을 주는 경우가 많습니다.</li>
        <li><strong>Gemini 계열:</strong> Google 생태계, 멀티모달 입력, 자료 기반 정리에서 유용할 수 있습니다.</li>
      </ul>
      <p>하지만 제품은 빠르게 바뀝니다. 그래서 "나는 Claude만 쓴다"보다 "이 작업은 긴 논문 검토, 이 작업은 데이터 분석, 이 작업은 코드 수정"처럼 작업 단위로 생각하는 편이 안전합니다.</p>
    `,
  },
  "modal-harness": {
    kicker: "Harness",
    title: "하네스의 역할",
    body: `
      <p>Harness는 모델이 혼자 말만 하는 것이 아니라, 파일, 도구, 규칙, 권한, 검증 절차 안에서 일하게 만드는 실행 환경입니다.</p>
      <ul>
        <li><strong>파일:</strong> PDF, CSV, 코드, 이미지, 결과표를 직접 읽습니다.</li>
        <li><strong>도구:</strong> Python, 웹 검색, plotting, 문서 생성, 테스트 실행을 호출합니다.</li>
        <li><strong>규칙:</strong> 어떤 파일은 건드리지 말 것, citation은 확인할 것, 결과는 표와 그림으로 남길 것 같은 기준을 둡니다.</li>
        <li><strong>검증:</strong> 실행 로그, 테스트 결과, 생성 파일 존재 여부, 사람이 확인할 체크리스트를 남깁니다.</li>
      </ul>
      <p>즉 좋은 Harness는 모델의 순간적인 답변 품질보다 workflow의 재현성과 안정성을 높입니다.</p>
    `,
  },
  "modal-domain": {
    kicker: "Domain",
    title: "도메인 지식",
    body: `
      <p>AI는 빠르게 많이 생성하지만, 무엇이 의미 있는 질문인지 판단하는 힘은 도메인 지식에서 나옵니다.</p>
      <ul>
        <li><strong>문제 설정:</strong> 이 비교가 실험 설계상 가능한 질문인지 판단합니다.</li>
        <li><strong>통계 선택:</strong> 샘플 수, 분포, 반복 수, multiple testing을 보고 적절한 기준을 고릅니다.</li>
        <li><strong>생물학적 해석:</strong> marker, pathway, cell state 해석이 plausible한지 확인합니다.</li>
        <li><strong>결론의 강도:</strong> "유도한다", "연관된다", "가능성을 시사한다" 중 어떤 표현이 맞는지 결정합니다.</li>
      </ul>
      <p>같은 AI를 써도 신입과 시니어의 결과가 다른 이유가 여기에 있습니다. AI는 속도를 높이지만, 방향 감각은 사람이 제공합니다.</p>
    `,
  },
  "modal-quality": {
    kicker: "Quality",
    title: "균일한 품질",
    body: `
      <p>좋은 결과를 반복해서 얻으려면 매번 천재적인 prompt를 쓰는 것보다, 안정적인 작업 구조를 만들어두는 편이 좋습니다.</p>
      <ul>
        <li><strong>Context 템플릿:</strong> 데이터 설명, 컬럼 의미, 실험군, 금지사항, 출력 형식을 매번 제공합니다.</li>
        <li><strong>Skill:</strong> RNA-seq, literature review, figure review처럼 반복되는 절차를 재사용합니다.</li>
        <li><strong>체크리스트:</strong> citation 확인, FDR 기준 확인, figure caption 확인, 도메인 검토 항목을 고정합니다.</li>
        <li><strong>산출물 형식:</strong> 분석 노트, 표, 그림, 발표 대본, 검토 질문처럼 사람이 확인할 형태로 남깁니다.</li>
      </ul>
      <p>이렇게 하면 모델이 조금 달라져도 결과의 구조와 검토 가능성이 유지됩니다. 그래서 핵심은 모델 선택보다 workflow 설계입니다.</p>
    `,
  },
  "modal-senior-example": {
    kicker: "Field Example",
    title: "신입과 시니어의 차이는 AI에게도 그대로 나타납니다",
    body: `
      <p>같은 AI를 써도 생산성 증폭 폭은 같지 않습니다. 제 경험상 이미 업무 구조와 검증 기준을 알고 있는 사람은 AI로 훨씬 넓은 범위의 일을 동시에 밀어낼 수 있습니다.</p>
      <div class="productivity-compare">
        <div>
          <span>나의 경우</span>
          <strong>약 20배</strong>
          <p>작업 범위를 넓게 잡고, 여러 단계의 산출물을 동시에 요구하고, 결과를 빠르게 검증하며 다음 결정을 내릴 수 있음</p>
        </div>
        <div>
          <span>신입의 경우</span>
          <strong>약 5배</strong>
          <p>반복 작업은 빨라지지만, 맡길 수 있는 작업 영역이 좁고 스스로 판단하거나 결정을 내리는 데 어려움이 있음</p>
        </div>
      </div>
      <ul>
        <li><strong>작업 영역의 범위:</strong> 시니어는 요구사항 정리, 구현, 테스트, 배포, 문서화, 이해관계자 커뮤니케이션까지 한 workflow로 묶을 수 있습니다. 신입은 보통 한 파일, 한 기능, 한 오류처럼 좁은 단위에서 시작합니다.</li>
        <li><strong>검증할 수 있는 능력:</strong> 시니어는 AI가 만든 결과가 맞는지 로그, 테스트, edge case, 운영 영향까지 확인합니다. 신입은 결과가 그럴듯하면 어디가 위험한지 놓치기 쉽습니다.</li>
        <li><strong>스스로 판단/결정:</strong> AI가 여러 대안을 내놓아도 무엇을 선택할지 결정하는 능력이 생산성 차이를 만듭니다. 신입은 선택 기준이 약해 다시 사람에게 확인해야 하는 지점이 많습니다.</li>
        <li><strong>도메인 지식:</strong> 업무 용어, 데이터 흐름, 기존 시스템의 제약, 좋은 결과의 기준을 알수록 AI에게 더 정확한 context를 줄 수 있습니다.</li>
      </ul>
      <p>그래서 AI는 실력을 평평하게 만드는 도구라기보다, 사람이 가진 작업 설계 능력과 검증 능력을 크게 증폭하는 도구에 가깝습니다.</p>
    `,
  },
  "modal-research-case-example": {
    kicker: "Research Review",
    title: "연구자 피드백 기반 분석 검토 루프",
    body: `
      <p>분석 요청은 단순한 답변으로 끝나지 않고, 연구자 피드백을 반영하며 기준 문서, 테스트, HTML 시각화, 최종 선별 패키지, PPT 변환, 전달 단계까지 이어졌습니다.</p>
      <div class="dialogue">
        <p><strong>사용자:</strong> "C, P는 구분하지말고 한그룹으로 묶어"</p>
        <p><strong>Agent:</strong> "그럼 PCA는 C/P를 평균내서 조건당 1점으로 보겠습니다."</p>
        <p><strong>사용자:</strong> "crc_driver_core_heatmap.html 이거 유전자 발현차이가 더 나보이게 색깔조정하면 좋겠어"</p>
        <p><strong>Agent:</strong> "driver core만 더 강조되도록 대비 범위를 따로 잡겠습니다."</p>
      </div>
      <ul>
        <li><strong>분석 단위 피드백:</strong> 처음에는 C/P 조직을 구분한 PCA를 제안했지만, 연구자 피드백으로 C/P를 평균내어 조건당 1점으로 바꿨습니다.</li>
        <li><strong>옵션 제시:</strong> PCA를 overview 패널, oncogenic program 패널, 전체 gene matrix 중 어디에 기반할지 후보와 trade-off를 제시했습니다.</li>
        <li><strong>한계 표기:</strong> C/P 평균, biological replicate 없음, exploratory 결과라는 한계를 설명 문구에 넣었습니다.</li>
        <li><strong>시각화 개선:</strong> driver core heatmap의 발현 차이가 더 잘 보이도록 contrast-enhanced scale과 진한 red palette를 적용했습니다.</li>
        <li><strong>재현성:</strong> 테스트를 추가하고, 실패한 테스트를 기준으로 스케일 함수와 생성 스크립트를 수정한 뒤 다시 HTML을 생성했습니다.</li>
        <li><strong>최종 산출물:</strong> heatmap 3종, group-averaged PCA, 주요 volcano HTML, gene TPM matrix, 비교 TSV, progression summary, QC/MD5 결과를 선별 패키지로 묶었습니다.</li>
      </ul>
      <p>핵심은 Agent가 모든 판단을 대신한 것이 아니라, 반복 작업과 산출물 생성을 맡고 연구자는 분석 단위, 비교 기준, 그림의 해석 가능성, 최종 전달본을 검토했다는 점입니다.</p>
    `,
  },
  "modal-research-case-artifact-overview": {
    kicker: "Actual Artifact",
    title: "CRC overview heatmap",
    size: "wide",
    body: `
      <p>최종 선별 패키지에 포함된 overview heatmap입니다. 여러 조건의 CRC 관련 gene panel을 한 번에 보고, 이후 driver core / oncogenic program / PCA로 좁혀가는 기준점으로 사용했습니다.</p>
      <figure class="artifact-modal-figure">
        <img src="assets/research-review-case/crc-heatmap-overview.png" alt="CRC overview heatmap" />
      </figure>
    `,
  },
  "modal-research-case-artifact-driver": {
    kicker: "Actual Artifact",
    title: "Driver core heatmap",
    size: "wide",
    body: `
      <p>연구자 피드백으로 대비를 더 강하게 조정한 heatmap입니다. 여기서 중요한 포인트는 계산 자체보다, 연구자가 실제로 비교를 읽을 수 있도록 figure를 다시 다듬었다는 점입니다.</p>
      <figure class="artifact-modal-figure">
        <img src="assets/research-review-case/crc-driver-core-heatmap.png" alt="CRC driver core heatmap" />
      </figure>
    `,
  },
  "modal-research-case-artifact-pca": {
    kicker: "Actual Artifact",
    title: "Group-averaged PCA",
    size: "wide",
    body: `
      <p>C/P를 구분하지 말고 한 그룹으로 묶자는 피드백을 반영한 PCA입니다. Agent가 임의로 분석 단위를 고정하지 않고, 연구자의 실험 맥락에 맞춰 grouping을 수정한 예시입니다.</p>
      <figure class="artifact-modal-figure">
        <img src="assets/research-review-case/crc-pca-group-avg.png" alt="CRC group averaged PCA" />
      </figure>
    `,
  },
  "modal-research-case-artifact-volcano": {
    kicker: "Actual Artifact",
    title: "Group-averaged volcano plots",
    size: "wide",
    body: `
      <p>세션 후반에 "사이드에서 만든 volcano도 포함된거야?"라는 확인이 있었고, 주요 group-averaged volcano 4종을 최종 패키지에 포함했습니다. 이 volcano들은 exploratory 결과로, replicate 기반 통계 검정처럼 과하게 해석하지 않도록 한계도 함께 남겼습니다.</p>
      <div class="artifact-modal-grid">
        <figure>
          <img src="assets/research-review-case/kras-he-vs-wt-volcano.png" alt="Kras He vs WT group averaged volcano" />
          <figcaption>Kras He vs WT</figcaption>
        </figure>
        <figure>
          <img src="assets/research-review-case/kras-fuso-vs-kras-he-volcano.png" alt="Kras Fuso vs Kras He group averaged volcano" />
          <figcaption>Kras Fuso vs Kras He</figcaption>
        </figure>
        <figure>
          <img src="assets/research-review-case/kras-bv-vs-kras-he-volcano.png" alt="Kras BV vs Kras He group averaged volcano" />
          <figcaption>Kras B.V. vs Kras He</figcaption>
        </figure>
        <figure>
          <img src="assets/research-review-case/kras-bv-il10-vs-kras-bv-volcano.png" alt="Kras BV IL10 vs Kras BV group averaged volcano" />
          <figcaption>Kras B.V. IL-10 vs Kras B.V.</figcaption>
        </figure>
      </div>
    `,
  },
  "modal-research-case-artifact-package": {
    kicker: "Final Package",
    title: "최종 전달 패키지",
    body: `
      <p>해당 세션은 단순 분석에서 끝나지 않고, 공유 가능한 최종 산출물로 패키징되었습니다.</p>
      <ul>
        <li><strong>HTML figures:</strong> CRC overview heatmap, driver core heatmap, oncogenic program heatmap, group-averaged PCA, group-averaged volcano 4종</li>
        <li><strong>Tables:</strong> mm39 gene TPM matrix, pairwise comparison TSV, progression summary TSV</li>
        <li><strong>Quality / integrity:</strong> FASTQ QC summary, MD5 verification</li>
        <li><strong>Presentation:</strong> 최종 HTML들을 PNG로 렌더링한 뒤 9-slide PPTX로 변환</li>
        <li><strong>Delivery:</strong> PPTX 첨부 메일까지 작성해 전달</li>
      </ul>
      <p>Agent는 분석, 시각화, 검증, 패키징, 전달 준비까지 이어갈 수 있습니다. 다만 분석 단위와 해석 강도는 연구자 피드백이 들어가야 안정적입니다.</p>
    `,
  },
  "modal-research-case-step-1": {
    kicker: "Real Case",
    title: "분석 단위 수정: C/P를 구분하지 않고 한 그룹으로 묶기",
    body: `
      <p>처음 PCA 설계에서는 그룹은 색으로, 조직 C/P는 모양으로 구분하는 방식을 제안했습니다. 하지만 실제 검토 과정에서 "C, P는 구분하지 말고 한 그룹으로 묶어"라는 피드백이 들어왔습니다.</p>
      <div class="dialogue">
        <p><strong>Agent:</strong> "PCA는 보통 샘플 10개를 한 좌표계에 같이 놓는 1개 그래프로 만듭니다. 색은 그룹, 모양은 조직(C/P)으로 구분해서 만들면 될까요?"</p>
        <p><strong>사용자:</strong> "c,p는 구분하지말고 한그룹으로 묶어"</p>
        <p><strong>Agent:</strong> "좋습니다. 그럼 PCA는 C/P를 평균내서 조건당 1점으로 보겠습니다."</p>
      </div>
      <ul>
        <li>수정 전: WT, Kras He, B.V., B.V. IL-10, Fuso를 색으로 표시하고 C/P를 별도 모양으로 구분</li>
        <li>수정 후: C/P를 평균내어 조건당 1점만 표시</li>
        <li>실제 연구 분석 작업에서 본 HITL: 실험 단위와 비교 단위는 AI가 임의로 정하면 안 되고, 연구자의 실험 맥락이 들어가야 합니다.</li>
      </ul>
    `,
  },
  "modal-research-case-step-2": {
    kicker: "Real Case",
    title: "PCA 기준 선택: overview 패널, oncogenic 패널, 전체 matrix",
    body: `
      <p>PCA를 만들 때 Agent는 바로 하나를 고정하지 않고, 유전자 범위에 대한 선택지를 제시했습니다.</p>
      <div class="dialogue">
        <p><strong>Agent:</strong> "PCA에 쓸 유전자 범위를 어떤 걸로 할까요? 1. overview heatmap에 들어간 CRC 전체 패널, 2. oncogenic program 패널만, 3. 전체 gene TPM matrix"</p>
        <p><strong>Agent:</strong> "제 추천은 1번입니다. 지금까지 보신 heatmap과 가장 자연스럽게 이어지고, 노이즈도 덜합니다."</p>
        <p><strong>사용자:</strong> "1번"</p>
      </div>
      <ul>
        <li><strong>1번:</strong> overview heatmap에 들어간 CRC 전체 패널</li>
        <li><strong>2번:</strong> oncogenic program 패널만 사용</li>
        <li><strong>3번:</strong> 전체 gene TPM matrix 사용</li>
      </ul>
      <p>추천은 overview 패널이었습니다. 이유는 이미 본 heatmap 흐름과 자연스럽게 이어지고, 전체 유전자를 쓰는 것보다 노이즈가 덜하기 때문입니다. 사용자는 이 중 1번을 선택했습니다.</p>
    `,
  },
  "modal-research-case-step-4": {
    kicker: "Real Case",
    title: "Heatmap 대비 조정: 연구자가 보기 좋은 그림으로 수정",
    body: `
      <p>연구자가 <code>crc_driver_core_heatmap.html</code>을 보고 "유전자 발현 차이가 더 나보이게 색깔 조정하면 좋겠다"고 피드백했습니다.</p>
      <div class="dialogue">
        <p><strong>사용자:</strong> "crc_driver_core_heatmap.html 이거 유전자 발현차이가 더 나보이게 색깔조정하면 좋겠어"</p>
        <p><strong>Agent:</strong> "driver core heatmap만 더 대비가 살아 보이도록 바꾸겠습니다."</p>
        <p><strong>Agent:</strong> "전체 heatmap은 그대로 두고, 이 파일만 집중 패널용 contrast-enhanced scale로 바꾸는 쪽으로 가겠습니다."</p>
      </div>
      <ul>
        <li>driver core heatmap에만 더 타이트한 값 범위 적용</li>
        <li>더 진한 red palette 사용</li>
        <li>작은 발현 차이도 더 잘 보이도록 contrast-enhanced scale 적용</li>
        <li>이후 같은 방식으로 overview와 oncogenic program heatmap도 고대비 버전으로 재생성</li>
      </ul>
      <p>실제 연구 분석 작업에서 본 HITL: figure는 "맞는 계산"뿐 아니라 "연구자가 비교를 읽을 수 있는 시각화"여야 합니다.</p>
    `,
  },
  "modal-research-case-step-6": {
    kicker: "Real Case",
    title: "Volcano/PCA 선별: 최종 결과만 남기기",
    body: `
      <p>세션 후반에는 생성된 많은 결과 중 최종 전달할 파일만 골랐습니다.</p>
      <div class="dialogue">
        <p><strong>사용자:</strong> "사이드에서 만든 volcano도 포함된거야?"</p>
        <p><strong>Agent:</strong> "네, 포함됐습니다. 최종 패키지에는 group-averaged volcano HTML 4개가 들어 있습니다."</p>
        <p><strong>Agent:</strong> "즉, 사이드에서 따로 만든 주요 volcano 결과도 최종 결과 안에 같이 들어갔습니다."</p>
      </div>
      <ul>
        <li>CRC overview heatmap</li>
        <li>CRC driver core heatmap</li>
        <li>CRC oncogenic program heatmap</li>
        <li>CRC group-averaged PCA</li>
        <li>주요 group-averaged volcano HTML 4종</li>
      </ul>
      <p>특히 "사이드에서 만든 volcano도 포함된거야?"라는 확인이 있었고, 주요 volcano 결과가 최종 패키지에 포함됐는지 다시 검증했습니다.</p>
    `,
  },
  "modal-research-case-step-7": {
    kicker: "Real Case",
    title: "최종 패키징: 공유 가능한 산출물로 정리",
    body: `
      <p>분석 결과는 파일이 많아질수록 전달이 어려워집니다. 그래서 최종 선별본만 묶고 README와 메일 문안까지 준비했습니다.</p>
      <div class="dialogue">
        <p><strong>사용자:</strong> "끝날때까지 계속 진행하고, 결과들 첨부 정리해서 보내줘. 그리고 히트맵은 파일로도 첨부해주고 내용에 아예 html로 붙여도 될듯"</p>
        <p><strong>Agent:</strong> "추가 산출물까지 끝까지 만들고, 전달용 패키지도 다시 묶겠습니다."</p>
        <p><strong>Agent:</strong> "메일 첨부는 ZIP + 메인 heatmap HTML + focused heatmap HTML들로 가는 게 가장 안전합니다."</p>
      </div>
      <ul>
        <li>전체 결과 ZIP 패키지</li>
        <li>heatmap HTML 3종</li>
        <li>gene TPM matrix</li>
        <li>주요 비교 TSV</li>
        <li>WT → Kras → Fuso/B.V. progression summary TSV</li>
        <li>FASTQ QC summary와 MD5 verification</li>
        <li>전달용 README와 메일 본문</li>
      </ul>
      <p>실제 연구 분석 작업에서 본 HITL: 좋은 Agent workflow는 분석을 끝내는 데서 멈추지 않고, 공동연구자에게 전달 가능한 형태까지 정리합니다.</p>
    `,
  },
  "modal-research-case-step-8": {
    kicker: "Real Case",
    title: "PPT/전달까지 확장: HTML 결과를 발표자료로 변환",
    body: `
      <p>마지막에는 최종 HTML 결과들을 이미지로 변환해 PPT에 넣는 단계까지 진행했습니다.</p>
      <div class="dialogue">
        <p><strong>사용자:</strong> "html을 이미지 파일로 만들어서 ppt에 붙여서 그 ppt를 보내줄 수 있어?"</p>
        <p><strong>Agent:</strong> "최종 HTML들 -> 이미지 변환 -> PPT 제작 -> PPT 첨부 발송 흐름으로 진행하겠습니다."</p>
        <p><strong>Agent:</strong> "PPT 생성은 끝났습니다. 이제 이미지들과 .pptx가 정상 생성됐는지, 슬라이드 수가 맞는지만 빠르게 검증하겠습니다."</p>
      </div>
      <ul>
        <li>최종 선별 HTML들을 PNG로 렌더링</li>
        <li>9슬라이드 PPTX로 구성</li>
        <li>CRC overview heatmap, driver core heatmap, oncogenic program heatmap 포함</li>
        <li>group-averaged PCA와 주요 volcano 결과 포함</li>
        <li>PPT 생성 후 슬라이드 수와 파일 생성 여부 확인</li>
      </ul>
      <p>실제 연구 분석 작업에서 본 HITL: Agent는 분석 도우미를 넘어, 결과 공유와 발표자료 준비까지 이어지는 반복 업무를 맡을 수 있습니다.</p>
    `,
  },
  "modal-prompt": {
    kicker: "Term",
    title: "Prompt",
    body: `
      <p>Prompt는 모델에게 주는 요청문입니다. 질문 하나라기보다 <strong>역할, 목표, 제약, 산출물 형식, 검토 기준</strong>을 담는 작업 지시서에 가깝습니다.</p>
      <p><strong>좋지 않은 예</strong></p>
      <pre>이 논문 요약해줘.</pre>
      <p><strong>좋은 예</strong></p>
      <pre>이 논문을 journal club 발표용으로 정리해줘.
대상은 피부/면역 연구자이고, 15분 발표야.
Figure 흐름 중심으로 설명하고,
과한 인과 해석은 따로 표시해줘.
최종 산출물은 발표 목차, figure별 핵심 메시지,
검토 질문 5개로 만들어줘.</pre>
      <p>Prompt가 좋아질수록 AI가 "대충 답하기"보다 "원하는 산출물을 만들기"에 가까워집니다.</p>
    `,
  },
  "modal-context": {
    kicker: "Term",
    title: "Context",
    body: `
      <p>Context는 모델이 판단에 사용할 수 있는 배경 정보입니다. 데이터 설명, 실험 조건, 이전 대화, 파일 내용, 참고 문헌, 금지사항이 모두 context입니다.</p>
      <p><strong>연구 분석에서 넣어야 할 context 예시</strong></p>
      <ul>
        <li>샘플이 무엇인지: SPF, GF, treatment, control</li>
        <li>컬럼 의미: gene symbol, log2FC, padj, count matrix</li>
        <li>분석 목표: marker 확인, pathway 후보 도출, 발표용 figure 선정</li>
        <li>금지사항: 원본 데이터 수정 금지, 인과 표현 금지, 무거운 재분석 전 확인</li>
        <li>검토 기준: FDR threshold, effect size, batch effect 가능성, domain review 필요 지점</li>
      </ul>
      <pre>먼저 파일 목록만 보고 데이터 구조를 설명해줘.
원본 파일은 수정하지 말고,
무거운 분석은 실행 전에 계획으로만 제안해줘.</pre>
    `,
  },
  "modal-agent": {
    kicker: "Term",
    title: "Agent",
    body: `
      <p>Agent는 목표를 받고, 계획을 세우고, 도구를 사용하고, 중간 결과를 보며 산출물을 완성하는 AI 실행 단위입니다.</p>
      <p>Chatbot이 주로 "답변"을 만든다면, Agent는 파일을 읽고, 코드를 실행하고, 결과를 확인하고, 실패하면 수정해서 <strong>artifact</strong>를 만듭니다.</p>
      <p><strong>예시</strong></p>
      <pre>이 keratinocyte 분석 폴더를 확인해서
1. 데이터 구조 요약
2. 주요 figure 후보
3. 해석 시 주의할 점
4. 발표용 report 초안
을 만들어줘.
먼저 계획을 보여주고, 내가 승인하면 진행해줘.</pre>
      <p>Agent를 잘 쓰려면 목표, 권한, 중단 지점, 최종 산출물 형식을 분명히 주는 것이 중요합니다.</p>
    `,
  },
  "modal-skill": {
    kicker: "Term",
    title: "Skill",
    body: `
      <p>Skill은 특정 작업을 잘 수행하기 위한 절차, 기준, 스크립트, 템플릿 묶음입니다. 반복되는 일을 매번 prompt로 길게 설명하지 않기 위한 작업 매뉴얼입니다.</p>
      <p><strong>연구용 Skill 예시</strong></p>
      <ul>
        <li>bulk RNA-seq: QC → count matrix → DEG → enrichment → figure note</li>
        <li>figure review: 축, threshold, sample 수, caption, 과한 해석 확인</li>
        <li>literature review: 검색식, inclusion/exclusion, citation table, claim 검증</li>
      </ul>
      <pre>scientific-agent-skills를 사용해서
이 폴더의 DEG 결과를 검토하고,
analysis report와 figure review checklist를 만들어줘.</pre>
      <p>Skill은 결과를 자동으로 맞게 만들지는 않지만, 빠뜨리기 쉬운 절차와 검증 기준을 안정적으로 유지해줍니다.</p>
    `,
  },
  "modal-hooks": {
    kicker: "Term",
    title: "Hooks",
    body: `
      <p>Hooks는 작업 전후에 자동으로 실행되는 규칙입니다. Agent가 어떤 행동을 하기 전이나 후에 검사, 차단, 기록, 테스트를 붙이는 guardrail입니다.</p>
      <p><strong>예시</strong></p>
      <ul>
        <li>파일 수정 후 자동으로 test 실행</li>
        <li>민감 데이터 파일을 외부로 보내려 하면 중단</li>
        <li>분석 report 생성 후 입력 파일, threshold, package version 기록 여부 확인</li>
        <li>PPTX 생성 후 슬라이드 수와 이미지 렌더링 여부 확인</li>
      </ul>
      <pre>결과 파일을 만들고 나면
1. 파일이 실제 생성됐는지
2. 표 행 수가 예상과 맞는지
3. figure 이미지가 깨지지 않는지
검증한 뒤 요약해줘.</pre>
      <p>Hooks는 Agent의 자율성을 키울수록 더 중요해집니다. 일을 맡기되, 위험한 지점에 자동 브레이크를 거는 방식입니다.</p>
    `,
  },
  "modal-harness-terms": {
    kicker: "Term",
    title: "Harness",
    body: `
      <p>Harness는 Agent가 일하는 작업대입니다. 모델 하나가 아니라, 모델이 사용할 수 있는 파일 접근, terminal, browser, Python, Skill, Hook, 로그, 권한, 검증 명령이 묶인 실행 환경입니다.</p>
      <p><strong>왜 중요한가</strong></p>
      <ul>
        <li>같은 모델이라도 harness가 없으면 대화만 합니다.</li>
        <li>harness가 있으면 파일을 읽고, 코드를 실행하고, 결과를 검증합니다.</li>
        <li>좋은 harness는 Agent가 할 수 있는 일과 하면 안 되는 일을 함께 정의합니다.</li>
      </ul>
      <p><strong>예시</strong></p>
      <pre>Codex 안에서는 Agent가
- 현재 프로젝트 파일을 읽고
- terminal에서 Python을 실행하고
- browser로 HTML 결과를 확인하고
- Skill 지침을 따라 report를 만들 수 있습니다.</pre>
      <p>그래서 "어떤 AI 모델을 쓰느냐" 못지않게 "어떤 harness 안에서 일하게 하느냐"가 중요합니다.</p>
    `,
  },
  "modal-llm-term": {
    kicker: "Term",
    title: "LLM: Large Language Model",
    body: `
      <p>LLM은 <strong>Large Language Model</strong>입니다. 아주 큰 텍스트와 코드 데이터로 학습해, 주어진 context 다음에 올 가능성이 높은 token을 예측하는 모델입니다.</p>
      <ul>
        <li><strong>Token:</strong> 모델이 읽고 쓰는 최소 단위입니다. 한글 한 글자, 단어 조각, 기호, 코드 조각처럼 잘게 나뉩니다.</li>
        <li><strong>Parameter:</strong> 학습으로 조정된 내부 숫자입니다. 공개 모델 중에는 수십억에서 수천억 개 규모가 흔하고, frontier model은 조 단위 연산/학습 규모로 이야기됩니다.</li>
        <li><strong>조 단위로 느끼기:</strong> token이나 parameter가 1조 개라면, 1초에 1개씩 세어도 약 31,700년이 걸리는 규모입니다.</li>
      </ul>
      <p><strong>예시</strong></p>
      <pre>입력: "keratinocyte에서 TSLP가 증가했다면..."
모델 내부: 다음 token 후보의 score 계산
출력 후보: "염증", "barrier", "ILC2", "allergic" ...
최종 출력: 문맥상 가장 그럴듯한 다음 token을 선택하고 반복</pre>
      <p>그래서 LLM은 단순 검색기가 아니라 거대한 확률적 pattern engine에 가깝습니다. 강력하지만, 사실 확인과 연구자 검토가 반드시 필요합니다.</p>
    `,
  },
  "modal-llm-visual": {
    kicker: "How LLM Works",
    title: "Input에서 Output이 만들어지는 방식",
    size: "wide",
    body: `
      <div class="llm-modal-grid">
        <figure class="llm-workflow-figure">
          <img src="assets/llm-workflow-image.png" alt="LLM이 input token stream을 transformer architecture로 처리하고 probability output을 만드는 3D visualization" />
        </figure>
      </div>
    `,
  },
  "modal-markdown": {
    kicker: "Term",
    title: "Markdown",
    body: `
      <p>Markdown은 제목, 목록, 표, 코드블록을 간단한 텍스트 문법으로 표현하는 형식입니다. AI가 보고서 초안, README, 분석 노트를 만들 때 자주 사용합니다.</p>
      <p><strong>예시</strong></p>
      <pre># Analysis Summary

## Key Findings
- SPF vs GF 비교에서 barrier 관련 gene 변화를 확인
- 일부 immune signaling gene은 추가 검토 필요

| Gene | log2FC | padj | Note |
|---|---:|---:|---|
| Tslp | 1.8 | 0.004 | domain review 필요 |</pre>
      <p>Markdown은 사람이 읽기 쉽고, 나중에 HTML, PDF, Word, PPT 재료로 바꾸기 좋아서 Agent 산출물의 기본 포맷으로 적합합니다.</p>
    `,
  },
  "modal-html": {
    kicker: "Term",
    title: "HTML",
    body: `
      <p>HTML은 웹페이지의 구조를 만드는 언어입니다. 오늘 발표자료도 HTML, CSS, JavaScript로 구성된 GitHub Pages입니다.</p>
      <p><strong>예시</strong></p>
      <pre>&lt;section class="slide"&gt;
  &lt;h2&gt;Agent는 목표를 잡고 반복적으로 완성합니다&lt;/h2&gt;
  &lt;p&gt;계획, 도구 사용, 산출물, 사람 검토가 한 흐름으로 이어집니다.&lt;/p&gt;
&lt;/section&gt;</pre>
      <p>HTML을 쓰면 발표자료, interactive report, figure dashboard처럼 클릭, 팝업, 스크롤 animation이 있는 결과물을 만들 수 있습니다.</p>
    `,
  },
  "modal-token-term": {
    kicker: "Term",
    title: "Token",
    body: `
      <p>Token은 LLM이 글을 읽고 쓰는 최소 단위입니다. 사람에게는 단어처럼 보이는 문장도, 모델 내부에서는 글자 조각, 단어 조각, 숫자, 기호로 쪼개져 처리됩니다.</p>
      <p><strong>예시</strong></p>
      <pre>문장: keratinocyte differentiation marker를 정리해줘
모델 내부: keratin / ocyte / differentiation / marker / ... 같은 조각으로 처리</pre>
      <p>그래서 "몇 token까지 넣을 수 있다"는 말은, 논문 몇 편이나 데이터 설명 몇 페이지를 한 번에 넣을 수 있는지와 연결됩니다.</p>
    `,
  },
  "modal-frontier-model-term": {
    kicker: "Term",
    title: "Frontier Model",
    body: `
      <p>Frontier Model은 현재 가장 성능이 높은 최상위 AI 모델군을 가리키는 말입니다. 특정 회사 하나가 아니라 ChatGPT, Claude, Gemini 같은 최신 고성능 모델들을 묶어 부를 때 씁니다.</p>
      <p><strong>왜 중요한가</strong></p>
      <ul>
        <li>긴 논문과 여러 파일을 읽을 수 있음</li>
        <li>추론, 코딩, 데이터 분석, 문서 작성 능력이 높음</li>
        <li>tool use나 agent workflow와 결합될 때 실제 업무 처리 능력이 커짐</li>
      </ul>
      <p>하지만 frontier model이라고 항상 맞는 것은 아닙니다. 연구에서는 모델 성능보다 context, 검증 절차, domain review가 더 중요해지는 순간이 많습니다.</p>
    `,
  },
  "modal-multimodal-term": {
    kicker: "Term",
    title: "Multimodal",
    body: `
      <p>Multimodal은 AI가 텍스트만이 아니라 이미지, 표, PDF, 음성, 화면, 코드 같은 여러 형태의 입력을 함께 다루는 능력입니다.</p>
      <p><strong>연구실 예시</strong></p>
      <ul>
        <li>논문 PDF와 Figure를 같이 보고 발표 흐름 정리</li>
        <li>현미경 이미지나 그래프 캡처를 보고 설명 초안 작성</li>
        <li>표와 본문을 함께 비교해 claim과 evidence 분리</li>
      </ul>
      <p>Multimodal 입력은 편리하지만, figure 해석이나 biological meaning은 여전히 사람이 확인해야 합니다.</p>
    `,
  },
  "modal-context-window": {
    kicker: "Term",
    title: "Context Window",
    body: `
      <p>Context Window는 모델이 한 번에 참고할 수 있는 입력과 이전 대화의 최대 범위입니다. 쉽게 말해 AI의 작업 책상 크기입니다.</p>
      <ul>
        <li>작으면: 논문 일부, 짧은 데이터 설명만 넣을 수 있습니다.</li>
        <li>크면: 긴 PDF, 여러 파일, 이전 대화, 분석 기준을 함께 넣을 수 있습니다.</li>
      </ul>
      <pre>이 PDF 전체와 supplementary table을 함께 보고,
Figure 1-7 흐름을 발표 목차로 정리해줘.</pre>
      <p>단, 책상이 커졌다고 모든 자료를 정확히 이해한다는 뜻은 아닙니다. 필요한 근거를 지정하고, citation과 수치를 다시 확인해야 합니다.</p>
    `,
  },
  "modal-tool-use-term": {
    kicker: "Term",
    title: "Tool Use",
    body: `
      <p>Tool Use는 AI가 말로만 답하지 않고, 외부 도구를 호출해 실제 작업을 수행하는 방식입니다.</p>
      <ul>
        <li>파일 읽기: PDF, CSV, Excel, image, code</li>
        <li>계산 실행: Python/R로 통계, plotting, QC 요약</li>
        <li>웹/문서 확인: 공식 문서, 논문, citation 검증</li>
      </ul>
      <pre>이 CSV를 Python으로 읽어서 sample별 QC summary를 만들고,
결과를 Markdown table과 PNG plot으로 저장해줘.</pre>
      <p>연구 분석에서 tool use가 중요한 이유는, AI가 "그럴듯한 말"이 아니라 확인 가능한 계산 결과와 파일을 남길 수 있기 때문입니다.</p>
    `,
  },
  "modal-artifact-term": {
    kicker: "Term",
    title: "Artifact",
    body: `
      <p>Artifact는 AI가 만든 검토 가능한 산출물입니다. 답변 텍스트만이 아니라 파일로 남는 report, table, plot, PPT draft, HTML dashboard를 말합니다.</p>
      <p><strong>Artifact 예시</strong></p>
      <ul>
        <li>논문 발표용 PPTX draft</li>
        <li>RNA-seq analysis report</li>
        <li>volcano plot, heatmap, PCA image</li>
        <li>figure review checklist</li>
      </ul>
      <p>좋은 AI workflow는 "답변을 들었다"에서 끝나지 않고, 사람이 열어보고 고칠 수 있는 artifact를 남깁니다.</p>
    `,
  },
  "modal-workflow-term": {
    kicker: "Term",
    title: "Workflow",
    body: `
      <p>Workflow는 목표를 산출물까지 가져가는 반복 가능한 절차입니다. 연구에서는 실험 설계, 데이터 확인, 분석, 그림 생성, 해석 검토, 발표자료 작성이 하나의 workflow가 됩니다.</p>
      <p><strong>예시</strong></p>
      <pre>목표 설정
→ 파일 구조 확인
→ QC / DEG / pathway 결과 검토
→ figure 후보 선정
→ 해석 한계 표시
→ 발표용 report와 PPT draft 생성
→ 연구자 검토 후 수정</pre>
      <p>Agentic AI의 핵심은 한 번의 질문이 아니라, 이런 workflow 안에서 AI를 일하게 만드는 것입니다.</p>
    `,
  },
  "modal-hitl-term": {
    kicker: "Term",
    title: "HITL: Human-in-the-loop",
    body: `
      <p>HITL은 Human-in-the-loop의 줄임말입니다. AI workflow 중간중간에 사람이 목표, 기준, 해석, 최종 승인에 개입하는 구조입니다.</p>
      <p><strong>연구에서 HITL이 필요한 지점</strong></p>
      <ul>
        <li>비교군과 분석 단위가 실험 설계와 맞는지</li>
        <li>통계 기준과 filtering이 적절한지</li>
        <li>pathway나 marker 해석이 과하지 않은지</li>
        <li>발표자료에 넣어도 되는 결론인지</li>
      </ul>
      <p>AI가 빠르게 산출물을 만들수록, 사람이 어디서 멈춰 검토할지 정하는 능력이 더 중요해집니다.</p>
    `,
  },
  "modal-agents-md-term": {
    kicker: "Term",
    title: "AGENTS.md",
    body: `
      <p><code>AGENTS.md</code>는 프로젝트 안에 두는 Agent용 사용설명서입니다. README가 사람을 위한 설명서라면, AGENTS.md는 Agent에게 "이 프로젝트에서는 이렇게 일해라"라고 알려주는 지침입니다.</p>
      <pre># AGENTS.md 예시
- 원본 데이터는 수정하지 않는다.
- FASTQ 전체 재분석은 사용자 확인 후 실행한다.
- 결과는 reports/ 아래에 저장한다.
- 결론은 관찰된 연관과 추가 검증 필요를 구분한다.</pre>
      <p>이 파일을 잘 써두면 매번 긴 prompt를 반복하지 않아도 Agent가 프로젝트 규칙을 기억하고 일하기 쉬워집니다.</p>
    `,
  },
  "modal-terminal-term": {
    kicker: "Term",
    title: "Terminal / CLI",
    body: `
      <p>Terminal 또는 CLI는 마우스로 앱을 누르는 대신, 명령어로 컴퓨터에게 일을 시키는 화면입니다. Codex 같은 coding agent는 이 terminal을 통해 파일을 찾고, Python을 실행하고, 결과를 검증합니다.</p>
      <p><strong>예시</strong></p>
      <pre>$ python analyze.py
$ ls reports/
$ node --check script.js</pre>
      <p><code>$ codex</code>처럼 보이는 검은 박스는 "Agent에게 이런 목표를 주면 terminal과 파일을 이용해 실제 작업을 한다"는 예시입니다.</p>
    `,
  },
  "modal-llm-prob": {
    kicker: "LLM",
    title: "확률 기반 언어 생성기",
    body: "<p>LLM은 다음에 올 가능성이 높은 토큰을 생성합니다. 그래서 말은 자연스럽지만, 사실성과 논리성이 자동 보장되지는 않습니다.</p>",
  },
  "modal-draft": {
    kicker: "Workflow",
    title: "검토할 초안으로 다루기",
    body: "<p>AI 결과물은 바로 제출할 결론이 아니라, 사람이 검토하고 수정할 초안입니다. 이 관점 하나만 바꿔도 위험이 크게 줄어듭니다.</p>",
  },
  "modal-hitl": {
    kicker: "HITL",
    title: "Human-in-the-loop",
    body: "<p>사람이 목표 설정, 중간 판단, 최종 승인에 들어가는 구조입니다. 연구에서는 선택이 아니라 필수입니다.</p>",
  },
  "modal-context-template": {
    kicker: "Template",
    title: "연구 분석용 Context 템플릿",
    body: `
      <pre>목표:
- 이 분석으로 확인하려는 연구 질문은 무엇인가?

데이터:
- 파일 경로, 샘플 수, 실험군/대조군, 컬럼 의미

분석 기준:
- 사용할 통계 기준, 제외할 해석, 선호하는 그림 형식

검토 기준:
- 어떤 결과는 반드시 사람에게 확인받아야 하는가?

산출물:
- 요약 문서, 표, 그래프, 재현 가능한 코드</pre>
    `,
  },
  "modal-citation-check": {
    kicker: "Verification",
    title: "출처 확인",
    body: "<p>논문 제목, 저자, 연도, DOI, 실제 본문 내용을 확인합니다. AI가 만든 citation은 존재하지 않거나 내용이 다를 수 있습니다.</p>",
  },
  "modal-stat-check": {
    kicker: "Verification",
    title: "통계 검토",
    body: "<p>p-value, FDR, 샘플 수, effect size, multiple testing correction, batch effect 가능성을 함께 확인합니다.</p>",
  },
  "modal-domain-check": {
    kicker: "Verification",
    title: "도메인 검토",
    body: "<p>결과가 생물학적으로 말이 되는지, marker와 pathway 해석이 과하지 않은지, 실험 조건과 맞는지 연구자가 판단합니다.</p>",
  },
  "modal-repro-check": {
    kicker: "Verification",
    title: "재현성 확인",
    body: "<p>입력 파일, 코드, 패키지 버전, 랜덤 시드, 출력 파일을 기록합니다. 다시 실행했을 때 같은 결론으로 가야 합니다.</p>",
  },
  "modal-goal": {
    kicker: "Workflow",
    title: "목표",
    body: "<p>좋은 목표는 산출물과 검토 기준을 포함합니다. 예: DEG 결과에서 skin barrier 관련 후보를 뽑고, 과한 해석을 표시한 요약 문서를 만든다.</p>",
  },
  "modal-plan": {
    kicker: "Workflow",
    title: "계획",
    body: "<p>Agent가 어떤 파일을 읽고, 어떤 기준으로 필터링하며, 어떤 그림을 만들지 먼저 제안하게 합니다.</p>",
  },
  "modal-tools": {
    kicker: "Workflow",
    title: "도구",
    body: "<p>Python, R, shell, web search, PDF parser, plotting library 같은 도구를 목적에 맞게 사용합니다.</p>",
  },
  "modal-artifact": {
    kicker: "Workflow",
    title: "산출물",
    body: "<p>분석 노트, 표, 그림, 코드, 체크리스트처럼 사람이 검토할 수 있는 형태로 남깁니다.</p>",
  },
  "modal-review": {
    kicker: "Workflow",
    title: "사람 검토",
    body: "<p>연구자가 해석, 통계, 실험 맥락을 검토하고 Agent에게 수정 요청을 합니다. 이 루프가 결과 품질을 만듭니다.</p>",
  },
  "modal-agent-live-demo": {
    kicker: "Live Demo",
    title: "Ensembl KRT14 데이터로 3D gene viewer 만들기",
    body: `
      <p>Ensembl REST API에서 실제 <strong>human KRT14</strong> gene annotation을 가져와, exon/intron 구조를 교육용 3D schematic으로 시각화할 수 있습니다.</p>
      <pre>Ensembl REST API에서 human KRT14 gene annotation을 받아와서,
exon/intron 구조를 3D gene viewer HTML로 만들어줘.
대표 transcript, exon 위치, transcription 방향, gene 좌표를 라벨로 표시하고
브라우저에서 검증해줘.
먼저 계획부터 보여줘.</pre>
      <ol>
        <li><strong>Goal:</strong> KRT14의 실제 gene coordinate와 exon annotation을 기반으로 viewer를 만듭니다.</li>
        <li><strong>Plan:</strong> API 호출 → JSON 저장 → 대표 transcript 선택 → exon/intron 좌표 scaling → 3D HTML 생성 → 브라우저 검증 순서로 진행합니다.</li>
        <li><strong>Tools:</strong> Ensembl REST API, JavaScript/Three.js, local browser screenshot을 사용합니다.</li>
        <li><strong>Artifact:</strong> 회전/확대 가능한 <code>krt14_gene_viewer.html</code>과 원본 API JSON이 남습니다.</li>
        <li><strong>Review:</strong> 실제 좌표와 exon 개수, strand 방향, 라벨 위치, 과장된 생물학적 표현 여부를 사람이 검토합니다.</li>
      </ol>
      <p>Endpoint 예시는 <code>https://rest.ensembl.org/lookup/symbol/homo_sapiens/KRT14?expand=1</code>입니다. API가 불안정할 수 있으므로, 먼저 JSON을 파일로 저장한 뒤 그 파일을 기준으로 viewer를 만들면 안정적입니다.</p>
    `,
  },
  "modal-practice-goal": {
    kicker: "Practice",
    title: "실습 목표",
    body: `
      <ul>
        <li><strong>Skill을 실제로 호출합니다.</strong> scientific-agent-skills의 분석 관점과 검증 기준을 Agent가 따르게 합니다.</li>
        <li><strong>Project inventory를 만듭니다.</strong> Raw data, 기존 분석 결과, figure, report 후보를 구분합니다.</li>
        <li><strong>Analysis report를 만듭니다.</strong> DEG, QC, KEGG/GO, 주요 figure 메시지를 사람이 검토 가능한 문서로 정리합니다.</li>
        <li><strong>Presentation package를 만듭니다.</strong> 발표용 figure review, 말할 문장, 검토 필요 항목을 묶습니다.</li>
      </ul>
    `,
  },
  "modal-session-bioservices": {
    kicker: "Skill Guide",
    title: "1. Skill을 설치하고 호출합니다",
    body: `
      <p>처음 사용하는 환경이라면 먼저 Codex에게 GitHub 저장소 URL을 주고 Skill 설치를 맡기면 됩니다. 설치 후에는 이번 실습에 쓸 Skill 조합을 명시하고, 각 Skill의 역할을 나눠 계획을 세우게 합니다.</p>
      <p><strong>설치 프롬프트</strong></p>
      <pre>아래 GitHub 저장소의 scientific agent skills를 Codex에서 사용할 수 있게 설치해줘.

https://github.com/K-Dense-AI/scientific-agent-skills

설치가 끝나면 사용 가능한 skill 목록 중
biology/RNA-seq 실습에 쓸만한 skill을 간단히 정리해줘.</pre>
      <p><strong>호출 프롬프트</strong></p>
      <pre>bulk-rnaseq와 scientific-visualization Skill을 사용해서
keratinocyte SPF vs GF RNA-seq 결과를 실습 자료로 다루려고 해.

먼저 두 Skill 내용을 읽고,
이번 실습에서 따라야 할 절차를 제안해줘.

역할은 이렇게 나눠줘:
- bulk-rnaseq: RNA-seq 결과 구조, QC, DEG, enrichment, report 기준
- scientific-visualization: volcano, targeted panel, heatmap의 figure 품질 기준

아직 분석은 실행하지 말고,
읽을 파일, 만들 Artifact, 사람이 검토할 지점을
순서대로 정리해줘.</pre>
      <ul>
        <li><strong>핵심:</strong> URL을 주고 설치를 요청하면 Codex가 저장소 구조를 보고 설치 절차를 진행할 수 있습니다.</li>
        <li><strong>핵심:</strong> bulk-rnaseq는 분석 workflow 기준, scientific-visualization은 figure 품질 기준을 담당합니다.</li>
        <li><strong>진행 방식:</strong> 계획을 먼저 보고, 방향이 맞으면 다음 단계로 진행합니다.</li>
        <li><strong>좋은 표현:</strong> "두 Skill 내용을 읽고", "역할을 나눠줘", "Artifact와 검토 지점을 제안해줘"</li>
      </ul>
      <p>Skill은 단순한 이름표가 아니라, Agent의 작업 방식을 바꾸는 지침입니다.</p>
    `,
  },
  "modal-session-visualization": {
    kicker: "Skill Guide",
    title: "2. bulk-rnaseq로 분석 기준을 잡습니다",
    body: `
      <p><strong>bulk-rnaseq</strong>는 figure를 예쁘게 만드는 Skill이라기보다, RNA-seq 분석 workflow를 검토 가능한 절차로 정리하는 기준입니다. 실습에서는 이 Skill로 입력, QC, DEG, enrichment, report 기준을 잡습니다.</p>
      <pre>방금 읽은 bulk-rnaseq Skill에서
이번 실습에 적용할 부분만 뽑아줘.

다음 형식으로 정리해줘:
1. Inputs: 확인할 데이터와 결과 파일
2. Checks: QC, 비교군, threshold 확인 항목
3. Artifacts: 만들 문서와 figure note
4. Review points: 연구자가 직접 판단해야 할 부분
5. Stop points: 사용자 확인 없이 넘어가지 않을 지점</pre>
      <ul>
        <li><strong>Inputs:</strong> Agent가 어떤 파일을 근거로 삼는지 확인합니다.</li>
        <li><strong>Checks:</strong> 비교군, threshold, QC처럼 틀리면 안 되는 항목을 먼저 잠급니다.</li>
        <li><strong>Artifacts:</strong> 답변이 아니라 파일로 남길 산출물을 정합니다.</li>
        <li><strong>Review points:</strong> 연구자의 도메인 판단이 필요한 부분을 따로 표시합니다.</li>
      </ul>
      <p>여기까지는 "무엇을 분석했고, 어떤 기준으로 해석할 것인가"를 정하는 단계입니다. 실제 발표용 그림 품질은 다음 단계에서 scientific-visualization Skill로 잡습니다.</p>
    `,
  },
  "modal-session-biopython": {
    kicker: "Skill Guide",
    title: "3. scientific-visualization으로 Figure를 만듭니다",
    body: `
      <p>Report 구조는 bulk-rnaseq 기준을 따르고, 실제 발표용 figure는 <strong>scientific-visualization</strong> Skill을 적용해 만듭니다. 이 Skill이 색상, 라벨, export, figure note 같은 품질 기준을 담당합니다.</p>
      <pre>이제 scientific-visualization Skill을 적용해서
발표용 figure와 figure note를 만들어줘.

bulk-rnaseq 기준으로 정리한 분석 report와 연결되도록 하고,
각 figure의 메시지와 검토 포인트도 함께 남겨줘.

반드시 포함할 것:
- analysis_report.md
  - 비교군, threshold, 핵심 결과
  - QC 확인 항목
  - 안전하게 말할 수 있는 결론

- figures/
  - volcano_spf_vs_gf.png
  - targeted_biology_panel.png
  - selected_marker_heatmap.png
  - 각 그림은 PNG와 가능하면 PDF도 함께 저장

- figure_review.md
  - figure별 핵심 message
  - axis, filtering, 색상 의미
  - 발표자가 조심해야 할 해석

- review_checklist.md
  - 연구자가 최종 확인할 질문</pre>
      <ul>
        <li><strong>analysis_report.md:</strong> 전체 분석 흐름을 사람이 읽을 수 있게 정리합니다.</li>
        <li><strong>figure PNG/PDF:</strong> scientific-visualization 기준으로 생성한 Volcano, Targeted panel, Marker heatmap입니다.</li>
        <li><strong>figure_review.md:</strong> 그림을 발표에 쓸 때 확인할 메시지와 주의점을 남깁니다.</li>
        <li><strong>review_checklist.md:</strong> HITL 검토를 실제 파일로 만듭니다.</li>
      </ul>
      <p>이렇게 하면 "AI 답변"이 아니라, 열어보고 수정할 수 있는 파일 단위 산출물이 남습니다.</p>
    `,
  },
  "modal-session-scope": {
    kicker: "Skill Guide",
    title: "4. 연구자 피드백으로 수정합니다",
    body: `
      <p>마지막은 Agent가 만든 결과를 사람이 보고 고치는 단계입니다. Skill은 산출물 형식을 안정화하지만, 해석의 책임은 연구자에게 남습니다.</p>
      <pre>내가 연구자 관점에서 피드백을 줄게.
아래 피드백을 반영해서 report와 figure note를 수정해줘.

수정할 때는:
- 바뀐 문장을 표시하고
- 왜 바꿨는지 짧게 설명하고
- 아직 확인이 필요한 항목은 checklist에 남겨줘.</pre>
      <ul>
        <li><strong>좋은 피드백:</strong> "이 표현은 인과처럼 들리니 association으로 낮춰줘."</li>
        <li><strong>좋은 피드백:</strong> "이 marker 선정 기준을 figure note에 명확히 적어줘."</li>
        <li><strong>좋은 피드백:</strong> "이 결과는 내 실험 맥락과 다르니 별도 caveat로 분리해줘."</li>
      </ul>
      <p>Skill 사용은 한 번 요청하고 끝내는 방식이 아니라, 사람 검토가 들어가는 반복 workflow로 다루는 것이 안정적입니다.</p>
    `,
  },
  "modal-dataset": {
    kicker: "Keratinocyte",
    title: "데이터 구조",
    body: `
      <ul>
        <li>실제 경로: <code>/Users/sol/dev/biology/keratinocyte differentiation with microbiome</code></li>
        <li>원시 데이터: <code>Bulk mRNA-seq</code> 하위 FASTQ 파일</li>
        <li>분석 결과: <code>codex_bioservices_analysis</code> 하위 DEG, KEGG, GO, targeted panel</li>
        <li>시각화: dashboard, volcano, KEGG enrichment, targeted panel, marker heatmap</li>
      </ul>
    `,
  },
  "modal-deg": {
    kicker: "Keratinocyte",
    title: "DEG 요약",
    body: "<p>SPF-adult-KC n=3 vs GF-adult-KC n=3. DEG 기준은 |FC| >= 1.5 및 raw p < 0.05이며 총 754개 DEG, SPF-high 471개, GF-high 283개, BH/FDR < 0.05는 510개입니다.</p>",
  },
  "modal-kegg": {
    kicker: "Keratinocyte",
    title: "KEGG/GO 해석",
    body: "<p>상위 enrichment는 단일 pathway보다 developmental/morphogenesis, matrix/adhesion, growth-factor signaling 변화로 요약됩니다. 보수적 결론은 FDR < 0.05와 targeted panel을 함께 확인해 제시합니다.</p>",
  },
  "modal-qc": {
    kicker: "Keratinocyte",
    title: "QC 포인트",
    body: "<p>원시 FASTQ는 전체 22GB 규모라 실시간 full QC보다 기존 QC 리포트와 샘플링 결과를 먼저 확인합니다. Agent가 무거운 작업을 무작정 실행하지 않도록 범위를 제한하는 것이 중요합니다.</p>",
  },
  "modal-volcano": {
    kicker: "Figure",
    title: "Volcano plot",
    body: `<p>전체 DEG 방향성과 유의성을 빠르게 확인하는 그림입니다. 축, threshold, p-value 기준, filtering 조건을 함께 확인해야 합니다.</p><img src="assets/keratinocyte/volcano-spf-gf.png" alt="Volcano plot">`,
  },
  "modal-targeted-panel": {
    kicker: "Figure",
    title: "Targeted biology panel",
    body: `<p>Barrier, wound/ECM/migration, innate antimicrobial, growth factor, hair/skin appendage 관련 유전자 패널의 방향성을 확인하는 그림입니다. 도메인 검토가 가장 많이 필요한 산출물입니다.</p><img src="assets/keratinocyte/targeted-panel.png" alt="Targeted panel">`,
  },
  "modal-heatmap": {
    kicker: "Figure",
    title: "Selected marker heatmap",
    body: `<p>선택된 marker의 sample별 패턴을 확인하는 그림입니다. marker 선정 기준을 반드시 함께 설명해야 합니다.</p><img src="assets/keratinocyte/marker-heatmap.png" alt="Marker heatmap">`,
  },
  "modal-agents-md-what": {
    kicker: "AGENTS.md",
    title: "프로젝트별 기본 지침",
    body: "<p><code>AGENTS.md</code>는 특정 프로젝트 안에서 Agent가 따라야 할 기본 규칙을 적어두는 파일입니다. README가 사람을 위한 설명서라면, AGENTS.md는 Agent가 작업을 시작할 때 참고하는 운영 지침에 가깝습니다.</p>",
  },
  "modal-agents-md-why": {
    kicker: "AGENTS.md",
    title: "왜 필요한가",
    body: "<p>매번 같은 맥락을 prompt에 반복해서 쓰지 않아도 됩니다. 데이터 위치, 실행 명령, 금지할 작업, 결과물 저장 위치, 검증 기준을 적어두면 Agent가 프로젝트에 맞게 일하기 쉬워집니다.</p>",
  },
  "modal-agents-md-example": {
    kicker: "AGENTS.md",
    title: "무엇을 쓰나",
    body: `
      <pre># AGENTS.md 예시
- 데이터 원본은 수정하지 않는다.
- 무거운 FASTQ 재분석은 사용자 확인 후 실행한다.
- 결과물은 reports/ 아래 Markdown으로 저장한다.
- 그림을 만들면 축, 기준, filtering 조건을 함께 기록한다.
- 결론은 "관찰된 연관"과 "추가 검증 필요"를 구분한다.</pre>
    `,
  },
  "modal-agents-md-vs-skill": {
    kicker: "AGENTS.md vs Skill",
    title: "AGENTS.md와 Skill의 차이",
    body: "<p><strong>AGENTS.md</strong>는 프로젝트 전체에 적용되는 기본 규칙입니다. <strong>Skill</strong>은 bulk RNA-seq, literature review, figure review처럼 특정 작업 유형을 수행하는 절차입니다. 둘을 같이 쓰면 '이 프로젝트의 규칙' 위에서 '이 작업의 절차'가 실행됩니다.</p>",
  },
  "modal-skill-what": {
    kicker: "Skill Concept",
    title: "Skill은 작업 매뉴얼입니다",
    body: "<p>Skill은 Agent에게 주는 재사용 가능한 작업 지침입니다. 예를 들어 'RNA-seq 결과를 볼 때는 QC, DEG 기준, enrichment, figure 해석, 검증 체크리스트를 함께 확인하라' 같은 절차를 미리 묶어둡니다.</p>",
  },
  "modal-skill-why": {
    kicker: "Skill Concept",
    title: "왜 Skill을 쓰는가",
    body: "<p>매번 긴 prompt를 새로 쓰면 빠지는 항목이 생깁니다. Skill을 쓰면 같은 작업을 할 때 산출물 형식, 검증 기준, 주의할 표현이 반복적으로 유지되어 결과 품질이 안정됩니다.</p>",
  },
  "modal-skill-contains": {
    kicker: "Skill Concept",
    title: "Skill 안에 들어가는 것",
    body: `
      <ul>
        <li><strong>절차:</strong> 어떤 순서로 파일을 읽고 분석할지</li>
        <li><strong>도구:</strong> Python, plotting, PDF parser, statistics package 등</li>
        <li><strong>검증 기준:</strong> QC, threshold, citation, figure caption 확인</li>
        <li><strong>산출물 형식:</strong> Markdown report, table, figure note, checklist</li>
        <li><strong>금지사항:</strong> 과한 인과 해석, 무거운 작업 임의 실행, 근거 없는 결론</li>
      </ul>
    `,
  },
  "modal-skill-limit": {
    kicker: "Skill Concept",
    title: "Skill의 한계",
    body: "<p>Skill은 좋은 습관을 고정하지만 정답을 보장하지는 않습니다. 특히 연구에서는 실험 설계, biological plausibility, 통계 기준, 최종 해석을 사람이 확인해야 합니다. Skill은 판단을 대체하는 것이 아니라 검토 가능한 산출물을 안정적으로 만들기 위한 장치입니다.</p>",
  },
  "modal-kden-bulk-rnaseq": {
    kicker: "K-Dense Skill Example",
    title: "bulk-rnaseq/SKILL.md 실제 예시",
    body: `
      <p>아래는 K-Dense의 <strong>bulk-rnaseq</strong> skill 파일 구조를 발췌한 예시입니다. Skill은 자연어 설명이 아니라, Agent가 따라야 할 작업 절차와 검증 기준을 담은 파일입니다.</p>
      <p><strong>1. Frontmatter: 언제 이 Skill을 쓸지 정의</strong></p>
      <pre>---
name: bulk-rnaseq
description: End-to-end bulk RNA-seq orchestrator —
  takes raw FASTQ reads through QC and trimming,
  alignment and quantification,
  assembles a gene-level counts matrix,
  then hands off to differential expression,
  pathway/GSEA enrichment, and publication figures.
license: MIT
metadata: {"version": "1.0", "skill-author": "K-Dense Inc."}
---</pre>
      <p><strong>2. Overview: 이 Skill이 보장하려는 분석 원칙</strong></p>
      <pre># Bulk RNA-seq

This skill orchestrates a complete, defensible
bulk RNA-seq differential-expression study,
from raw sequencing reads to enriched pathways and figures.

"Defensible" means:
- Reproducible
- Quality-gated
- Statistically sound</pre>
      <p><strong>3. Pipeline: Agent가 따라갈 작업 흐름</strong></p>
      <div class="skill-pipeline">
        <span>FASTQ</span>
        <span>QC / Trim</span>
        <span>Align / Quant</span>
        <span>Counts</span>
        <span>DEG</span>
        <span>Enrichment</span>
        <span>Figures</span>
      </div>
      <pre>The pipeline is:
FastQC/trim → align/quant (STAR/Salmon)
→ counts → DE (pydeseq2)
→ enrichment (pathway-enrichment)
→ figures</pre>
      <p><strong>4. Stage-by-stage: 검토 지점까지 적어둠</strong></p>
      <pre>1. Design & sample sheet:
   confirm biological replicates, batch/confounders,
   and comparison design.

2. Raw-read QC:
   FastQC per file; aggregate with MultiQC.

3. Differential expression:
   counts.csv + metadata.csv → DE table
   with FDR control.</pre>
      <p>이 전체 pipeline을 새로 돌리기보다, 기존 keratinocyte 결과를 Skill의 관점으로 읽고 <strong>report, figure note, 검토 checklist</strong>를 만드는 방식으로 사용할 수 있습니다.</p>
    `,
  },
  "modal-skill-install": {
    kicker: "Skills",
    title: "설치",
    body: "<p>Scientific Agent Skills는 GitHub 저장소를 통해 설치하고, Codex가 작업 유형에 맞는 skill을 읽도록 구성합니다. 설치 후에는 Skill을 불러 실제 산출물 작성 기준에 적용할 수 있습니다.</p>",
  },
  "modal-skill-use": {
    kicker: "Skills",
    title: "사용",
    body: "<p>예: bulk RNA-seq, pathway enrichment, figure review 같은 작업마다 필요한 절차와 검증 기준을 skill로 불러오고, 그 기준에 따라 Markdown report, figure note, checklist 같은 파일을 만들게 합니다.</p>",
  },
  "modal-skill-review": {
    kicker: "Skills",
    title: "검토",
    body: "<p>Skill은 산출물 형식과 검증 절차를 안정화하지만 결론을 보장하지 않습니다. 연구자는 생성된 report와 figure note에서 해석 강도, 통계 기준, 도메인 맥락을 마지막으로 확인해야 합니다.</p>",
  },
  "modal-codex-goal": {
    kicker: "Codex Tip",
    title: "/goal",
    body: "<p>긴 작업에서 목표를 고정해두는 기능입니다. 예를 들어 'keratinocyte 실습용 report와 figure note를 만든다'처럼 목표를 걸어두면, Agent가 중간에 길을 잃지 않고 같은 목표를 향해 진행하기 좋습니다.</p>",
  },
  "modal-codex-plan": {
    kicker: "Codex Tip",
    title: "Plan mode",
    body: "<p>바로 실행하지 않고 먼저 작업 계획, 필요한 파일, 위험요소, 예상 산출물을 확인하는 방식입니다. 연구 데이터처럼 해석 실수가 치명적인 작업에서는 Plan mode로 시작하는 편이 안전합니다.</p>",
  },
  "modal-codex-files": {
    kicker: "Codex Tip",
    title: "Files & paths",
    body: "<p>Codex는 실제 파일과 폴더를 읽을 수 있습니다. 프롬프트에 경로를 정확히 주고, '먼저 파일 목록만 보고 무거운 작업은 실행하지 말라'고 제한하면 실습이 안정적입니다.</p>",
  },
  "modal-codex-skills": {
    kicker: "Codex Tip",
    title: "Skills",
    body: "<p>Skill은 반복 작업용 매뉴얼입니다. bulk RNA-seq, figure review, literature review처럼 작업 유형이 분명할 때 Skill을 불러오면 산출물 형식과 검증 절차가 안정됩니다.</p>",
  },
  "modal-codex-verify": {
    kicker: "Codex Tip",
    title: "Verify",
    body: "<p>Agent가 만든 결과를 그대로 믿지 않고, 문법 체크, 파일 생성 여부, 그림 렌더링, 표 행 수, 주요 수치 재계산 같은 검증을 요청합니다. '끝났어?'보다 '무엇으로 검증했어?'가 더 좋은 질문입니다.</p>",
  },
  "modal-codex-browser": {
    kicker: "Codex Tip",
    title: "Browser",
    body: "<p>웹 발표자료나 HTML report는 브라우저로 직접 보면서 수정할 수 있습니다. 글자가 넘치는지, 그림이 보이는지, 버튼과 팝업이 동작하는지 확인하는 데 유용합니다.</p>",
  },
  "modal-openai": {
    kicker: "Frontier",
    title: "OpenAI",
    body: "<p>ChatGPT와 Deep Research는 연구 질문 구체화, 문헌 조사, 보고서 작성, 데이터 분석, 코딩 보조에 유용합니다. Codex는 코드와 파일을 직접 다루는 agentic workflow에 적합합니다.</p>",
  },
  "modal-google": {
    kicker: "Frontier",
    title: "Google",
    body: "<p>NotebookLM은 자료 기반 정리, Gemini Deep Research는 웹 기반 리서치, Gemini for Science는 과학 연구 특화 AI의 방향성을 보여주는 사례입니다.</p>",
  },
  "modal-anthropic": {
    kicker: "Frontier",
    title: "Anthropic",
    body: "<p>Claude는 긴 논문/원고 읽기, 논리 검토, 비판적 피드백, 학술 글쓰기 보조에 강점이 있습니다. Claude Code는 agentic coding workflow와 연결됩니다.</p>",
  },
  "modal-elicit": {
    kicker: "Mention",
    title: "Elicit",
    body: `
      <p><strong>Elicit</strong>은 자연어 연구 질문을 넣으면 관련 논문을 찾고, 논문별 핵심 정보를 표 형태로 정리하는 데 강한 literature review 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> "X가 Y에 어떤 영향을 주는가?"처럼 empirical evidence를 모아야 할 때 좋습니다.</li>
        <li><strong>강점:</strong> 후보 논문 검색, abstract 기반 요약, intervention/outcome/sample 같은 항목 추출, systematic review screening 초안 생성.</li>
        <li><strong>연구실 활용:</strong> journal club 주제를 잡거나, 실험 배경 논문을 빠르게 넓힐 때 출발점으로 씁니다.</li>
        <li><strong>주의:</strong> 검색 누락과 추출 오류가 있을 수 있으므로 최종 citation, 포함/제외 기준, 본문 근거는 직접 확인해야 합니다.</li>
      </ul>
      <p class="modal-note"><a href="https://elicit.com/" target="_blank" rel="noreferrer">elicit.com</a></p>
    `,
  },
  "modal-researchrabbit": {
    kicker: "Mention",
    title: "ResearchRabbit",
    body: `
      <p><strong>ResearchRabbit</strong>은 seed paper를 넣고 관련 논문, 참고문헌, 후속 인용 관계를 시각적으로 탐색하는 citation network 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> 이미 중요한 논문 몇 편을 알고 있고, 그 주변의 연구 흐름을 넓히고 싶을 때 좋습니다.</li>
        <li><strong>강점:</strong> 논문 간 연결 관계, 저자/연도 기반 탐색, 비슷한 논문 추천, collection 기반 literature map.</li>
        <li><strong>연구실 활용:</strong> "이 논문 이후 어떤 후속 연구가 나왔나?", "이 주제의 중심 논문은 무엇인가?"를 빠르게 확인합니다.</li>
        <li><strong>주의:</strong> 인용 네트워크가 강한 분야에 유리하고, 최신 preprint나 niche paper는 누락될 수 있습니다.</li>
      </ul>
      <p class="modal-note"><a href="https://www.researchrabbit.ai/" target="_blank" rel="noreferrer">researchrabbit.ai</a></p>
    `,
  },
  "modal-litmaps": {
    kicker: "Mention",
    title: "Litmaps",
    body: `
      <p><strong>Litmaps</strong>는 seed paper를 중심으로 citation/references 연결을 지도처럼 만들고, 새 논문을 지속적으로 monitor하는 데 유용한 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> 특정 주제의 문헌 지도를 만들고, 시간이 지나도 새 논문을 놓치고 싶지 않을 때 좋습니다.</li>
        <li><strong>강점:</strong> literature map, citation 기반 발견, paper monitoring, 관련성/연결성 기반 추천.</li>
        <li><strong>연구실 활용:</strong> 프로젝트 시작 시 핵심 논문 지도를 만들고, 발표 전 최신 논문 업데이트를 확인합니다.</li>
        <li><strong>주의:</strong> map은 이해를 돕는 탐색 도구이지 systematic search 자체를 대체하지는 않습니다.</li>
      </ul>
      <p class="modal-note"><a href="https://www.litmaps.com/features" target="_blank" rel="noreferrer">litmaps.com/features</a></p>
    `,
  },
  "modal-consensus": {
    kicker: "Mention",
    title: "Consensus",
    body: `
      <p><strong>Consensus</strong>는 질문이나 주장에 대해 관련 논문을 찾아 근거가 어느 방향을 지지하는지 빠르게 확인하는 academic AI search 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> "이 주장에 논문 근거가 있나?", "대체로 효과가 있다고 보는가?"처럼 claim 검토가 필요할 때 좋습니다.</li>
        <li><strong>강점:</strong> 논문 기반 답변, 요약, source 확인, 주장별 근거 탐색.</li>
        <li><strong>연구실 활용:</strong> 발표 도입부의 일반론이나 배경 문장을 넣기 전, 근거 문헌이 실제로 있는지 확인합니다.</li>
        <li><strong>주의:</strong> 연구 설계, sample size, endpoint 차이를 뭉뚱그릴 수 있으므로 primary paper를 반드시 읽어야 합니다.</li>
      </ul>
      <p class="modal-note"><a href="https://consensus.app/" target="_blank" rel="noreferrer">consensus.app</a></p>
    `,
  },
  "modal-scispace": {
    kicker: "Mention",
    title: "SciSpace",
    body: `
      <p><strong>SciSpace</strong>는 논문 PDF를 읽으면서 어려운 문단, 표, 수식, 방법론을 질문하고 설명받는 데 유용한 research reading assistant입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> 낯선 분야 논문을 처음 읽거나, method/figure caption을 빠르게 이해해야 할 때 좋습니다.</li>
        <li><strong>강점:</strong> PDF chat, citation-linked answer, section-wise summary, 여러 언어 지원.</li>
        <li><strong>연구실 활용:</strong> journal club 준비에서 "이 figure가 무엇을 비교했는지", "이 assay가 무엇을 의미하는지" 초안을 잡습니다.</li>
        <li><strong>주의:</strong> 표/수식/figure 해석은 틀릴 수 있으므로 원문과 figure legend를 나란히 확인해야 합니다.</li>
      </ul>
      <p class="modal-note"><a href="https://scispace.com/chat-pdf" target="_blank" rel="noreferrer">scispace.com/chat-pdf</a></p>
    `,
  },
  "modal-perplexity": {
    kicker: "Mention",
    title: "Perplexity",
    body: `
      <p><strong>Perplexity</strong>는 웹 검색 결과를 바탕으로 출처가 달린 요약 답변을 빠르게 만드는 AI search 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> 최신 제품/정책/도구/뉴스처럼 웹에서 빠르게 바뀌는 정보를 확인할 때 좋습니다.</li>
        <li><strong>강점:</strong> citation이 붙은 답변, follow-up 질문, 빠른 overview 생성, 공식 문서 탐색.</li>
        <li><strong>연구실 활용:</strong> 새로운 AI 도구, 데이터베이스, 분석 패키지, 공식 문서 링크를 빠르게 찾습니다.</li>
        <li><strong>주의:</strong> citation이 있다고 항상 충분한 근거라는 뜻은 아닙니다. 최종 판단은 원문 링크를 열어 확인해야 합니다.</li>
      </ul>
      <p class="modal-note"><a href="https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search.html" target="_blank" rel="noreferrer">Perplexity Help Center</a></p>
    `,
  },
  "modal-alphafold": {
    kicker: "Mention",
    title: "AlphaFold Server",
    body: `
      <p><strong>AlphaFold Server</strong>는 AlphaFold 3 기반으로 단백질과 DNA/RNA, ligand, ion 등 biomolecule interaction 구조를 예측하는 생명과학 특화 도구입니다.</p>
      <ul>
        <li><strong>언제 쓰나:</strong> protein structure, protein-ligand interaction, protein-DNA/RNA interaction 가설을 구조적으로 보고 싶을 때 좋습니다.</li>
        <li><strong>강점:</strong> 구조 예측을 wet lab 실험 전 hypothesis generation과 시각적 검토에 활용할 수 있습니다.</li>
        <li><strong>연구실 활용:</strong> 후보 단백질/변이/ligand interaction을 보기 위한 preliminary model로 사용합니다.</li>
        <li><strong>주의:</strong> 예측 구조는 실험 검증을 대체하지 않습니다. confidence score, binding site plausibility, known structure와 비교가 필요합니다.</li>
      </ul>
      <p class="modal-note"><a href="https://alphafoldserver.com/about" target="_blank" rel="noreferrer">alphafoldserver.com/about</a></p>
    `,
  },
  "modal-skill-paper": {
    kicker: "Paper",
    title: "How AI Impacts Skill Formation",
    body: `
      <p>Shen과 Tamkin의 2026년 연구는 AI 도움을 받은 그룹에서 새 기술에 대한 이해와 검증 능력이 약해질 수 있음을 보여줍니다. 핵심은 AI 사용 자체가 아니라, <strong>얼마나 인지적으로 참여하며 쓰는가</strong>입니다.</p>
      <div class="paper-figure-stack">
        <figure>
          <img src="assets/skill-formation/figure-1-overview.png" alt="AI condition and no AI condition task time and quiz score comparison">
          <figcaption>Figure 1/6 요지: AI 사용 그룹은 task time에서 뚜렷한 이득이 크지 않았고, quiz score는 낮게 나타났습니다.</figcaption>
        </figure>
        <figure>
          <img src="assets/skill-formation/figure-11-ai-personas.png" alt="Six AI interaction personas by completion time and quiz score">
          <figcaption>Figure 11 요지: 단순 delegation보다 conceptual inquiry, explanation, comprehension을 동반한 사용 패턴이 더 높은 학습 결과와 연결됩니다.</figcaption>
        </figure>
      </div>
      <ul>
        <li><strong>핵심 메시지:</strong> AI를 쓰지 말자는 이야기가 아니라, AI가 만든 결과를 읽고 질문하고 검토하는 방식으로 써야 합니다.</li>
        <li><strong>연구자에게 중요한 점:</strong> 분석, 문헌 정리, 발표자료 생성은 빨라질 수 있지만, 해석과 검증 능력은 사람이 유지해야 합니다.</li>
      </ul>
      <p class="modal-note">Source: <a href="https://arxiv.org/abs/2601.20245" target="_blank" rel="noreferrer">arXiv:2601.20245</a></p>
    `,
  },
  "modal-read": {
    kicker: "Education",
    title: "잘 읽는 힘",
    body: "<p>AI가 답을 알려줘도, 그 답이 맞는지 알려면 스스로 읽고 이해할 수 있어야 합니다. 글, 그림, 표, 뉴스, AI 답변을 천천히 읽고 근거를 묻는 힘이 중요합니다.</p>",
  },
  "modal-question": {
    kicker: "Education",
    title: "좋은 질문을 하는 힘",
    body: "<p>앞으로는 답을 외우는 사람보다 좋은 질문을 던지는 사람이 강해집니다. 왜 그런지, 다른 방법은 없는지, 정말 맞는지를 묻는 습관이 필요합니다.</p>",
  },
  "modal-judge": {
    kicker: "Education",
    title: "스스로 판단하는 힘",
    body: "<p>AI가 말해도 무조건 믿지 않고, 근거를 보고 생각해서 결정하는 힘이 필요합니다. AI는 도와주는 도구이고 마지막 책임은 사람에게 있습니다.</p>",
  },
};
