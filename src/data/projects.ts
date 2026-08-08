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
  status?: "online" | "offline"; // "online" mostra selo verde + botão de acesso
  featured?: boolean; // destaca o card (maior)
  year?: string;
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
    live: "https://colmeia-ten.vercel.app/",
    status: "online",
    featured: true,
    year: "2025",
  },
  {
    id: "estudaai",
    title: "EstudaAí",
    description: {
      pt: "Aplicativo mobile (React Native + Expo) para ajudar estudantes na preparação para o ENEM, vestibulares e concursos. Reúne resumos, os tópicos que mais caem, apostilas e videoaulas organizados por matéria, com sistema de favoritos. Projeto acadêmico do IFPR.",
      en: "Mobile app (React Native + Expo) that helps students prepare for Brazil's ENEM, college entrance and public exams. Gathers summaries, most frequent topics, study guides and video lessons organized by subject, with a favorites system. Academic project at IFPR.",
    },
    tags: ["React Native", "Expo", "TypeScript"],
    repo: "https://github.com/Otavio-MR/EstudaAi",
    status: "offline",
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
    status: "offline",
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
    status: "offline",
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
  },
];
