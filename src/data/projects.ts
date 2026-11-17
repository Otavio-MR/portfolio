// ============================================================
//  SEUS PROJETOS — puxados do GitHub (Otavio-MR) + Colmeia.
// ============================================================

export type Project = {
  id: string;
  title: string;
  description: { pt: string; en: string };
  tags: string[];
  repo?: string; // link do GitHub (opcional)
  live?: string; // link do site/app no ar (opcional)
  // online/offline = web; desktop = app que roda localmente; tool = ferramenta/servidor
  status?: "online" | "offline" | "desktop" | "tool";
  featured?: boolean; // destaca o card (maior)
  year?: string;
  // Prints das telas (seguras) do projeto. Abrem num lightbox, sem sair do site.
  // Coloque as imagens em public/shots/<id>/ e referencie o caminho a partir de /.
  shots?: string[];
};

export const projects: Project[] = [
  {
    id: "colmeia",
    title: "Colmeia",
    description: {
      pt: "Plataforma completa de encomendas de modelos 3D para Minecraft: catálogo dinâmico, montador de pedidos, fila de produção automática, login via Discord com abertura de tickets e pagamento por Pix. Full stack, de ponta a ponta.",
      en: "Full platform for ordering custom Minecraft 3D models: dynamic catalog, order builder, automatic production queue, Discord login with ticket creation, and Pix payment. Full stack, from end to end.",
    },
    tags: ["React", "Node.js", "Express", "MongoDB", "Discord API"],
    repo: "https://github.com/modelscolmeia-lgtm/colmeia",
    live: "https://colmeiamodels.vercel.app/",
    status: "online",
    featured: true,
    year: "2025",
    shots: ["/shots/colmeia/01-desktop.png"],
  },
  {
    id: "estudaai",
    title: "EstudaAí",
    description: {
      pt: "Plataforma web que deixa os editais de concursos públicos mais fáceis de entender: em vez de ler um PDF enorme, você vê um resumo visual com datas, vagas, salários, taxas, local da prova e as matérias que mais valem na nota. Projeto acadêmico em trio no IFPR, full stack (React + Vite no front; Node, Express e MongoDB no back).",
      en: "Web platform that makes Brazilian public exam notices easier to grasp: instead of reading a huge PDF, you get a visual summary with dates, openings, salaries, fees, exam location and the subjects that weigh most. A trio academic project at IFPR, full stack (React + Vite front; Node, Express and MongoDB back).",
    },
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/JoaoVictor3501/EstudaAi",
    live: "https://estudaai-ifpr.vercel.app/",
    status: "online",
    year: "2026",
    shots: ["/shots/estudaai/01-desktop.png"],
  },
  {
    id: "caixa-paella",
    title: "Caixa Paella",
    description: {
      pt: "Caixa registradora web para eventos beneficentes, com impressão automática de vouchers em impressora térmica (um por unidade vendida). Tem perfis de operador e administrador, formas de pagamento, controle de estoque atômico e atalhos de teclado para atender a fila rápido. Primeiro cliente real: a 6ª Paella Mineira Solidária, em prol do Hospital do Câncer de Londrina.",
      en: "Web cash register for charity events, with automatic voucher printing on thermal printers (one per unit sold). Operator and admin profiles, payment methods, atomic stock control and keyboard shortcuts to keep the line moving. First real client: a charity paella event raising funds for Londrina's cancer hospital.",
    },
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    repo: "https://github.com/Otavio-MR/caixa-paella",
    live: "https://caixa-demo.onrender.com/",
    status: "online",
    year: "2026",
    shots: ["/shots/caixa-paella/01-desktop.png"],
  },
  {
    id: "lyendell",
    title: "Lyendell",
    description: {
      pt: "Sistema web de administração para a cidade de RPG de Lyendell: tabelionato, guarda, hospital, congresso, galeria e murais de anúncios e atividades. Tem login por nome de personagem, níveis de acesso por cargo, aprovação de registros, tempo real (WebSocket) e notificações push.",
      en: "Web administration system for the Lyendell roleplay city: notary, guard, hospital, congress, gallery and announcement boards. Features character-name login, role-based access levels, record approval, real-time updates (WebSocket) and push notifications.",
    },
    tags: ["Node.js", "Express", "libSQL", "WebSocket"],
    repo: "https://github.com/Otavio-MR/lyendell",
    live: "https://casa-luckham.onrender.com/",
    status: "online",
    year: "2026",
    shots: ["/shots/lyendell/01-desktop.png"],
  },
  {
    id: "mcp-imagem",
    title: "MCP Imagens",
    description: {
      pt: "Servidor e cliente MCP (Model Context Protocol) em Java que mede imagens e cores com exatidão: conta pixels e calcula contraste pelos critérios de acessibilidade (WCAG). A IA enxerga, mas estima; aqui ela usa números exatos e determinísticos para avaliar paletas e contraste. Voltado a design, front-end e UX.",
      en: "MCP (Model Context Protocol) server and client in Java that measures images and colors precisely: it counts pixels and computes contrast against WCAG accessibility criteria. AI sees but estimates; here it uses exact, deterministic numbers to assess palettes and contrast. Aimed at design, front-end and UX.",
    },
    tags: ["Java", "MCP", "Maven", "WCAG"],
    repo: "https://github.com/Otavio-MR/mcp-imagem",
    status: "tool",
    year: "2026",
  },
  {
    id: "sportfinder",
    title: "SportFinder",
    description: {
      pt: "Aplicação desktop em Python que usa Machine Learning (K-Means, Scikit-learn) para analisar características físicas e recomendar a categoria esportiva ideal para o biotipo do usuário. Arquitetura MVC com Tkinter e MongoDB. Projeto do TADS no IFPR.",
      en: "Python desktop app that uses Machine Learning (K-Means, Scikit-learn) to analyze physical traits and recommend the ideal sport category for the user's body type. MVC architecture with Tkinter and MongoDB. Built during my TADS degree at IFPR.",
    },
    tags: ["Python", "Scikit-learn", "Tkinter", "MongoDB"],
    repo: "https://github.com/Otavio-MR/SportFinder",
    status: "desktop",
    year: "2025",
  },
  {
    id: "loja-de-jogos",
    title: "Loja de Jogos",
    description: {
      pt: "Sistema de loja de jogos em Python seguindo o padrão MVC, com interface em Tkinter e banco MongoDB. Catálogo, carrinho, histórico de compras, gestão de saldo e validações de entrada em todas as telas.",
      en: "Game store system in Python following the MVC pattern, with a Tkinter interface and MongoDB. Catalog, cart, purchase history, balance management and input validation across every screen.",
    },
    tags: ["Python", "Tkinter", "MongoDB"],
    repo: "https://github.com/Otavio-MR/Loja-de-Jogos",
    status: "desktop",
    year: "2025",
  },
  {
    id: "vitrine-salgadinhos",
    title: "Vitrine de Salgadinhos",
    description: {
      pt: "Vitrine virtual em React (mobile first) simulando uma loja virtual: produtos em cards, página de detalhes e consulta de endereço por CEP via API ViaCEP. Trabalho da disciplina de Desenvolvimento Web no IFPR.",
      en: "React storefront (mobile first) simulating an online store: product cards, detail pages and address lookup by zip code via the ViaCEP API. Coursework for Web Development at IFPR.",
    },
    tags: ["React", "React Router", "ViaCEP", "CSS"],
    repo: "https://github.com/Otavio-MR/Loja-de-Salgadinhos",
    status: "offline",
    year: "2025",
    shots: ["/shots/vitrine-salgadinhos/01-desktop.png", "/shots/vitrine-salgadinhos/02-mobile.png"],
  },
];
