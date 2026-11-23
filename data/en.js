// English content. Same keys as data/pt.js (Portuguese is the main language).
window.PJ = {
  nome: "Pedro Julius",
  completo: "Pedro Julius Lemos dos Santos",
  classe: "AI Engineer",
  base: "Fortaleza, Brazil",
  lead: "I train, evaluate and deploy AI solutions to production",
  sobre: [
    "I'm Pedro Julius, from Fortaleza, Brazil. Since July 2025 I've worked on data and AI as a contractor at the IT department of the Civil Police of Ceará.",
    "I got into tech through the integrated technical program in computing at IFCE, which I finished in 2022. After that I did IT support in a public school's computer lab, prepared hands-on Android and Kotlin lessons for beginners, and wrote technical documentation for projects at iREDE. I'm now studying Telecommunications Engineering at IFCE, expected to finish in 2028.",
    "My work sits between data engineering, model training and the infrastructure that puts models to use. I speak Portuguese natively and English at C2 level (EF SET 82/100)."
  ],
  fora: "I watch livestreams, read manhwa and hang out with friends.",
  skills: [
    ["AI and MLOps", "PyTorch, Transformers, PEFT/LoRA, MLflow, LiteLLM, vLLM, MCP, evaluation and calibration"],
    ["Data engineering", "Python, SQL, Airflow, dbt, PostgreSQL, ClickHouse, ETL/ELT, data quality"],
    ["Development", "FastAPI, Pydantic, SQLAlchemy, Alembic, pytest, Docker, Kubernetes/K3s, TypeScript"],
    ["DevOps and CI/CD", "Jenkins, Harbor, Semaphore, Docker Swarm, Portainer, HashiCorp Vault"],
    ["Security and integrations", "REST APIs, OAuth2/OIDC, JWT/JWKS, CSRF, Redis/Sentinel, access control"],
    ["Visualization", "Apache Superset, Power BI"]
  ],
  projetos: [
    {
      curto: "Fine-tuning", tipo: "ai / mlops",
      titulo: "Fine-tuning and evaluating decision models",
      fluxo: ["split", "LoRA", "evaluation", "blind review", "parity"],
      texto: "I built the LoRA fine-tuning pipeline for a model that sorts records into four categories. I group the splits by record, so the same case can't show up in both training and test. Training runs as a GPU Job on Kubernetes with checkpoints and resume, and MLflow stores parameters and metrics. I pick the checkpoint by its severe-error limit, and at export I compare training outputs with serving outputs before I release the version.",
      stack: "PyTorch · Transformers · PEFT · MLflow · K3s",
      ckpts: ["Split by record", "LoRA fine-tuning", "Independent evaluation", "Blind human review", "Training × serving parity"]
    },
    {
      curto: "MCP", tipo: "ai / integration",
      titulo: "MCP analytics assistant in Apache Superset",
      fluxo: ["dashboard", "MCP Client", "MCP Host", "tools"],
      texto: "I wrote the Python MCP Host and Client that connect an assistant to Superset. The server checks JWT/JWKS tokens, scopes and the tool catalog. The chat opens inside the dashboard with CSRF protection, and each user and browser tab gets its own session and nonce in Redis/Sentinel.",
      stack: "Python · MCP · Superset · Redis · Jenkins"
    },
    {
      curto: "Review", tipo: "ai / human evaluation",
      titulo: "Human review platform for AI answers",
      fluxo: ["queue", "blind review", "rationale", "metrics"],
      texto: "Analysts review answers without knowing whether a model or another analyst wrote them. The platform has a work queue, a written reason for each decision and a history of every review. Dashboards show agreement, severe errors, coverage and confidence. Login uses Argon2id and locks after repeated failed attempts.",
      stack: "FastAPI · SQLAlchemy · PostgreSQL · Alembic"
    },
    {
      curto: "Reports", tipo: "ai / conversation",
      titulo: "Assistant for filing police reports",
      fluxo: ["report", "rules engine", "LLM", "narrative"],
      texto: "A rules engine checks what the report still lacks and whether the case can be filed online. An LLM picks the next question and drafts the narrative, and the engine rejects facts the citizen didn't state. If the report points to immediate danger, the assistant tells the person to call 190, the police emergency line. On every commit, simulated citizens talk to the assistant and an evaluator compares the result with an answer key.",
      stack: "FastAPI · LLM · LiteLLM · pytest"
    },
    {
      curto: "Airflow", tipo: "data / pipelines",
      titulo: "Airflow and dbt pipelines in production",
      fluxo: ["source", "Airflow", "dbt", "target"],
      texto: "I maintain DAGs that replicate and publish data between databases in dependency order, with incremental capture, backfill of missing keys and parent rows written before child rows. I also extract metrics from semi-structured PDFs and compare the two sources month by month in Superset.",
      stack: "Airflow · dbt · PostgreSQL · ClickHouse · Superset"
    },
    {
      curto: "CI/CD", tipo: "devops / ci-cd",
      titulo: "Continuous delivery on an existing pipeline",
      fluxo: ["Jenkins", "Harbor", "Semaphore", "Docker Swarm"],
      texto: "I ship my services through the CI/CD pipeline the team already runs. Jenkins builds and tests the image, Harbor stores the versions, Semaphore deploys to Docker Swarm and Portainer shows the state of each service. Secrets live in Vault, migrations run before the app and a health check verifies each rollout.",
      stack: "Jenkins · Harbor · Semaphore · Docker Swarm · Portainer · Vault"
    },
    {
      curto: "Chat Infinito", tipo: "ai / fork of an open source project", pessoal: true,
      titulo: "Chat Infinito, a fork of UniiChat",
      fluxo: ["chat", "summaries", "tree", "exact search"],
      texto: "UniiChat, by Victor Taelin, is a chat that never ends: it keeps the whole conversation in a tree of summaries and reopens old parts when it needs them. In my fork I replaced API keys with Claude and ChatGPT subscriptions, calling the official <code>claude</code> and <code>codex</code> clients. Codex writes the summaries in batches, and when one plan hits its limit another model takes over. I added exact search over the history, a rule that keeps links and numbers in the summaries and live subscription usage on screen.",
      stack: "TypeScript · Bun · Claude Code · Codex CLI · MCP",
      link: ["Original UniiChat on GitHub", "https://github.com/VictorTaelin/uniichat"]
    },
    {
      curto: "PokeIdle", tipo: "side project / game", pessoal: true,
      titulo: "PokeIdle Hub",
      fluxo: ["login", "WebSocket", "dashboard", "alerts"],
      texto: "I like PokeIdle, so I built a dashboard to keep track of my game accounts. Each account runs over a WebSocket connection with no browser open, and Chrome only shows up for login. The local dashboard shows level, XP, gold and kills per hour, plus a log of what matters: shinies, rare drops, a fainted team. For friends who don't code, I packed it all into a Windows installer.",
      stack: "Node.js · WebSocket · Discord webhook"
    }
  ],
  exp: [
    { quando: "Jul 2025 – now", ano: 2025, cargo: "Data Analyst", org: "Civil Police of Ceará (IT department)", curto: "PC-CE", texto: "Contractor. I maintain Airflow DAGs and dbt models in production, connect MCP assistants to Superset, and train, evaluate and run human review on AI models." },
    { quando: "Oct 2024 – Jun 2025", ano: 2024, cargo: "Project Assistant", org: "iREDE", curto: "iREDE", texto: "I tracked deliveries and wrote the projects' technical documentation." },
    { quando: "Oct 2023 – Dec 2024", ano: 2023, cargo: "Android Development Teaching Assistant", org: "iREDE", curto: "Android", texto: "I prepared hands-on classes and Kotlin learning tracks for beginners." },
    { quando: "Aug 2022 – Feb 2023", ano: 2022, cargo: "IT Support Intern", org: "Maria Bezerra Quevedo Municipal School", curto: "IT support", texto: "I supported the computer lab, maintaining equipment and Chromebooks." }
  ],
  formacao: [
    { quando: "2023 – 2028 (expected)", ano: 2023, curso: "B.Eng. in Telecommunications Engineering", org: "IFCE", curto: "Telecom Eng.", texto: "I'm now studying Telecommunications Engineering at IFCE, expected to finish in 2028." },
    { quando: "2018 – 2022", ano: 2018, curso: "Technical high school diploma in Computing", org: "IFCE", curto: "IFCE 2018", texto: "I got into tech through the integrated technical program in computing at IFCE, which I finished in 2022." }
  ],
  idiomas: "Portuguese (native) · English C2 (EF SET 82/100)",
  contatoTexto: "Get in touch",
  contato: {
    email: "pdrjuliusls@gmail.com",
    linkedin: "https://linkedin.com/in/pedro-julius",
    github: "https://github.com/pjuliusl",
    cv: "../Pedro-Julius-CV-EN.pdf"
  },
  citacao: { texto: "I’m not superstitious, but I am a little stitious.", autor: "Michael Scott" },
  grafico: `<svg viewBox="0 0 560 288" role="img" aria-label="Sketch of checkpoint evaluation, no real data" shape-rendering="crispEdges">
      <text x="24" y="16">validation accuracy</text>
      <path class="gl" d="M24 72H536M24 136H536M24 200H536"/>
      <path class="ax" d="M24 256H536"/>
      <path class="base" d="M24 176H536"/>
      <path class="pick-l" d="M424 92V256"/>
      <path class="ft" d="M24 248H56V236H88V216H120V196H152V172H184V152H216V136H248V120H280V108H312V98H344V90H376V84H408V80H440V84H472V88H504V96H536V100"/>
      <rect class="sp" x="131" y="191" width="10" height="10"/><rect class="sp" x="227" y="131" width="10" height="10"/><rect class="sp" x="323" y="93" width="10" height="10"/><rect class="sp pick" x="419" y="75" width="10" height="10"/><rect class="sp" x="515" y="91" width="10" height="10"/>
      <text class="cur" x="424" y="62" text-anchor="middle">▼</text>
      <text x="136" y="276" text-anchor="middle">step-0400</text><text x="232" y="276" text-anchor="middle">step-0800</text><text x="328" y="276" text-anchor="middle">step-1200</text><text class="pick-t" x="424" y="276" text-anchor="middle">step-1600</text><text x="520" y="276" text-anchor="middle">step-2000</text>
    </svg>`
};
PJ.figura = `<figure class="chart">${PJ.grafico}<figcaption><span>fine-tuned vs. dashed baseline · ▼ chosen save</span><span>sketch, no real data</span></figcaption></figure>`;
PJ.L = {
  de: "of", sistema: "system", contato: "contact", habilidades: "skills", fechar: "Close", cv: "Resume PDF",
  capitulo: "chapter 0 · regression", role: "scroll to go back in time ▼",
  nome: "name", classe: "class", base: "base", lucidez: "lucidity", esperteza: "wits", sorte: "luck",
  nota: "Low luck. That's why I write tests.",
  foraExp: "after hours", pessoais: "The next two are personal projects.", extra: "bonus episode",
  regressao: "regression", regDe: (de, para) => `Regression from ${de} to ${para}`, deNovo: "…again?",
  missao: "long quest accepted", curso: "course", prazo: "deadline", origem: "point of origin",
  itens: "items kept after the regression", foraTrab: "outside work",
  fim: "End of chapter 0", fimSub: "chapter 1 hasn't been written yet", proximo: "next chapter",
  comentarios: "Comments", fixado: "pinned", responder: "reply",
  presente: "present", deVolta: "back again"
};
