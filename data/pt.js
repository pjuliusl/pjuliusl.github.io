// Conteúdo em português (idioma principal). A versão em inglês fica em data/en.js, com as mesmas chaves.
window.PJ = {
  nome: "Pedro Julius",
  completo: "Pedro Julius Lemos dos Santos",
  classe: "AI Engineer",
  base: "Fortaleza, CE",
  lead: "Treino, avalio e disponibilizo soluções com IA em produção",
  sobre: [
    "Sou Pedro Julius, de Fortaleza. Desde julho de 2025 trabalho com dados e IA como analista terceirizado na Coordenadoria de Tecnologia e Informação da Polícia Civil do Ceará.",
    "Entrei na área pelo curso técnico integrado em informática do IFCE, concluído em 2022. Depois dei suporte na sala de informática de uma escola municipal, preparei aulas práticas de Android e Kotlin para iniciantes e escrevi a documentação técnica de projetos na iREDE. Hoje curso Engenharia de Telecomunicações no IFCE, com conclusão prevista para 2028.",
    "Meu trabalho fica entre engenharia de dados, treinamento de modelos e a infraestrutura que os coloca em uso. Falo português como língua nativa e inglês em nível C2 (EF SET 82/100)."
  ],
  fora: "Assisto lives, leio manhwa e encontro os amigos.",
  skills: [
    ["IA e MLOps", "PyTorch, Transformers, PEFT/LoRA, MLflow, LiteLLM, vLLM, MCP, avaliação e calibração"],
    ["Engenharia de dados", "Python, SQL, Airflow, dbt, PostgreSQL, ClickHouse, ETL/ELT, qualidade de dados"],
    ["Desenvolvimento", "FastAPI, Pydantic, SQLAlchemy, Alembic, pytest, Docker, Kubernetes/K3s, TypeScript"],
    ["DevOps e CI/CD", "Jenkins, Harbor, Semaphore, Docker Swarm, Portainer, HashiCorp Vault"],
    ["Segurança e integrações", "APIs REST, OAuth2/OIDC, JWT/JWKS, CSRF, Redis/Sentinel, controle de acesso"],
    ["Visualização", "Apache Superset, Power BI"]
  ],
  projetos: [
    {
      curto: "Fine-tuning", tipo: "ia / mlops",
      titulo: "Fine-tuning e avaliação de modelos de decisão",
      fluxo: ["partição", "LoRA", "avaliação", "revisão cega", "paridade"],
      texto: "Montei o pipeline de fine-tuning LoRA de um modelo que classifica registros em quatro categorias. Agrupo as partições por registro para que o mesmo caso não apareça no treino e no teste. O treino roda como Job em GPU no Kubernetes, com checkpoints e retomada, e o MLflow guarda parâmetros e métricas. Escolho o checkpoint pelo limite de erros graves e, na exportação, comparo as respostas do treino com as da inferência antes de liberar a versão.",
      stack: "PyTorch · Transformers · PEFT · MLflow · K3s",
      ckpts: ["Partição por registro", "Fine-tuning LoRA", "Avaliação independente", "Revisão humana cega", "Paridade treino × inferência"]
    },
    {
      curto: "MCP", tipo: "ia / integração",
      titulo: "Assistente analítico MCP no Apache Superset",
      fluxo: ["dashboard", "MCP Client", "MCP Host", "ferramentas"],
      texto: "Escrevi em Python o MCP Host e o Client que ligam um assistente ao Superset. O servidor confere tokens JWT/JWKS, escopos e o catálogo de ferramentas. O chat abre dentro do dashboard com proteção CSRF, e cada usuário e aba ganha sessão e nonce próprios no Redis/Sentinel.",
      stack: "Python · MCP · Superset · Redis · Jenkins"
    },
    {
      curto: "Revisão", tipo: "ia / avaliação humana",
      titulo: "Plataforma de revisão humana de respostas de IA",
      fluxo: ["fila", "revisão cega", "justificativa", "métricas"],
      texto: "Analistas revisam respostas sem saber se vieram do modelo ou de outro analista. A plataforma tem fila de trabalho, justificativa em cada decisão e histórico das revisões. Os painéis mostram concordância, erros graves, cobertura e confiança. O login usa Argon2id e trava depois de tentativas repetidas.",
      stack: "FastAPI · SQLAlchemy · PostgreSQL · Alembic"
    },
    {
      curto: "Ocorrências", tipo: "ia / conversação",
      titulo: "Assistente de registro de ocorrências",
      fluxo: ["relato", "motor de regras", "LLM", "narrativa"],
      texto: "Um motor de regras confere o que falta no relato e se o caso pode ser registrado pela internet. Um LLM escolhe a próxima pergunta e redige a narrativa, e o motor recusa fatos que o cidadão não contou. Se o relato indica risco imediato, o assistente orienta ligar para o 190. A cada commit, cidadãos simulados conversam com o assistente e um avaliador compara o resultado com o gabarito.",
      stack: "FastAPI · LLM · LiteLLM · pytest"
    },
    {
      curto: "Airflow", tipo: "dados / pipelines",
      titulo: "Pipelines Airflow e dbt em produção",
      fluxo: ["origem", "Airflow", "dbt", "destino"],
      texto: "Mantenho DAGs que replicam e publicam dados entre bancos na ordem das dependências, com captura incremental, backfill de chaves ausentes e gravação dos registros pais antes dos filhos. Também extraio indicadores de PDFs semiestruturados e comparo as duas fontes mês a mês no Superset.",
      stack: "Airflow · dbt · PostgreSQL · ClickHouse · Superset"
    },
    {
      curto: "CI/CD", tipo: "devops / ci-cd",
      titulo: "Entrega contínua numa esteira institucional",
      fluxo: ["Jenkins", "Harbor", "Semaphore", "Docker Swarm"],
      texto: "Publico meus serviços pela esteira de CI/CD que a equipe já mantém. O Jenkins monta e testa a imagem, o Harbor guarda as versões, o Semaphore faz o deploy no Docker Swarm e o Portainer mostra o estado dos serviços. Os segredos ficam no Vault, as migrações rodam antes da aplicação e um health check confere cada subida.",
      stack: "Jenkins · Harbor · Semaphore · Docker Swarm · Portainer · Vault"
    },
    {
      curto: "Chat Infinito", tipo: "ia / fork de projeto open source", pessoal: true,
      titulo: "Chat Infinito, um fork do UniiChat",
      fluxo: ["conversa", "resumos", "árvore", "busca exata"],
      texto: "O UniiChat, de Victor Taelin, é um chat que não termina: guarda a conversa inteira numa árvore de resumos e reabre os trechos antigos quando precisa. No meu fork, troquei as chaves de API pelas assinaturas Claude e ChatGPT, chamando os clientes oficiais <code>claude</code> e <code>codex</code>. O Codex gera os resumos em lote e, quando um plano bate o limite, outro modelo assume. Acrescentei busca exata no histórico, uma regra que mantém links e números nos resumos e o uso real das assinaturas na tela.",
      stack: "TypeScript · Bun · Claude Code · Codex CLI · MCP",
      link: ["UniiChat original no GitHub", "https://github.com/VictorTaelin/uniichat"]
    },
    {
      curto: "PokeIdle", tipo: "projeto pessoal / jogo", pessoal: true,
      titulo: "PokeIdle Hub",
      fluxo: ["login", "WebSocket", "painel", "alertas"],
      texto: "Gosto de PokeIdle, então fiz um painel para acompanhar minhas contas do jogo. Cada conta roda numa conexão WebSocket, sem navegador aberto, e o Chrome só aparece no login. O painel local mostra nível, XP, ouro e abates por hora, com um log só do que importa: shiny, drop raro, time caído. Para os amigos que não programam, empacotei tudo num instalador de Windows.",
      stack: "Node.js · WebSocket · Discord webhook"
    }
  ],
  exp: [
    { quando: "jul 2025 – atual", ano: 2025, cargo: "Analista de Dados", org: "Polícia Civil do Ceará (CTI)", curto: "PC-CE", texto: "Terceirizado. Mantenho DAGs Airflow e transformações dbt em produção, integro assistentes MCP ao Superset e treino, avalio e coloco em revisão humana modelos de IA." },
    { quando: "out 2024 – jun 2025", ano: 2024, cargo: "Assistente de Projetos", org: "iREDE", curto: "iREDE", texto: "Acompanhei entregas e escrevi a documentação técnica dos projetos." },
    { quando: "out 2023 – dez 2024", ano: 2023, cargo: "Monitor de Desenvolvimento Android", org: "iREDE", curto: "Android", texto: "Preparei aulas práticas e trilhas de Kotlin para alunos iniciantes." },
    { quando: "ago 2022 – fev 2023", ano: 2022, cargo: "Estagiário de Suporte de TI", org: "E. M. Maria Bezerra Quevedo", curto: "Suporte TI", texto: "Dei suporte na sala de informática, com manutenção de equipamentos e Chromebooks." }
  ],
  formacao: [
    { quando: "2023 – 2028 (prev.)", ano: 2023, curso: "Bacharelado em Engenharia de Telecomunicações", org: "IFCE", curto: "Eng. Telecom", texto: "Hoje curso Engenharia de Telecomunicações no IFCE, com conclusão prevista para 2028." },
    { quando: "2018 – 2022", ano: 2018, curso: "Técnico Integrado em Informática", org: "IFCE", curto: "IFCE 2018", texto: "Entrei na área pelo curso técnico integrado em informática do IFCE, concluído em 2022." }
  ],
  idiomas: "Português nativo · Inglês C2 (EF SET 82/100)",
  contatoTexto: "Entre em contato comigo",
  contato: {
    email: "pdrjuliusls@gmail.com",
    linkedin: "https://linkedin.com/in/pedro-julius",
    github: "https://github.com/pjuliusl",
    cv: "Pedro-Julius-CV-PTBR.pdf"
  },
  citacao: { texto: "Não sou supersticioso, mas sou um pouco sticioso.", autor: "Michael Scott" },
  grafico: `<svg viewBox="0 0 560 288" role="img" aria-label="Esquema da avaliação por checkpoint, sem dados reais" shape-rendering="crispEdges">
      <text x="24" y="16">acerto na validação</text>
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
PJ.figura = `<figure class="chart">${PJ.grafico}<figcaption><span>fine-tuned vs. base tracejada · ▼ save escolhido</span><span>esquema, sem dados reais</span></figcaption></figure>`;
PJ.L = {
  de: "de", sistema: "sistema", contato: "contato", habilidades: "habilidades", fechar: "Fechar", cv: "Currículo PDF",
  capitulo: "capítulo 0 · regressão", role: "role para voltar no tempo ▼",
  nome: "nome", classe: "classe", base: "base", lucidez: "lucidez", esperteza: "esperteza", sorte: "sorte",
  nota: "Sorte baixa. Por isso escrevo testes.",
  foraExp: "fora do expediente", pessoais: "Os dois próximos são projetos pessoais.", extra: "episódio extra",
  regressao: "regressão", regDe: (de, para) => `Regressão de ${de} para ${para}`, deNovo: "…de novo?",
  missao: "missão longa aceita", curso: "curso", prazo: "prazo", origem: "ponto de origem",
  itens: "itens mantidos após a regressão", foraTrab: "fora do trabalho",
  fim: "Fim do capítulo 0", fimSub: "o capítulo 1 ainda não foi escrito", proximo: "próximo capítulo",
  comentarios: "Comentários", fixado: "fixado", responder: "responder",
  presente: "presente", deVolta: "de volta"
};
