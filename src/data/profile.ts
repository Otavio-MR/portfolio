// ============================================================
//  SEUS DADOS PESSOAIS — edite aqui.
//  Campos com { pt, en } têm as duas versões de idioma.
// ============================================================

export const profile = {
  // Nome que aparece no hero e no rodapé
  name: "Otavio Ramalho",
  // Como quer ser chamado / handle curto (usado no logo)
  shortName: "Otavio",

  // Título/subtítulo ao lado do nome (aparece grande no hero)
  headline: {
    pt: "Desenvolvedor Full Stack, apaixonado por design",
    en: "Full Stack Developer, passionate about design",
  },

  // Frase de impacto logo abaixo do nome
  tagline: {
    pt: "Transformo ideias em produtos digitais que são um prazer de usar, do backend ao design.",
    en: "I turn ideas into digital products that are a joy to use, from backend to design.",
  },

  // Texto da seção "Sobre" (use \n\n pra separar parágrafos)
  bio: {
    pt: "Meu nome é Otavio, estou no último semestre do TADS (Tecnólogo em Análise e Desenvolvimento de Sistemas). Curto muito construir coisas para problemas reais: hoje trabalho com pessoas próximas e realizo diversos projetos acadêmicos, desde interfaces e softwares até sites, para áreas como empresas privadas, projetos pessoais e sistemas voltados à educação. Gosto especialmente da parte de design, sempre buscando deixar a experiência mais prazerosa de usar.\n\nTenho explorado bastante o uso de IA nos meus projetos, sempre como uma ferramenta de auxílio. Estou aberto a novos desafios para explorar e ampliar cada vez mais o meu potencial.",
    en: "My name is Otavio, and I'm in the last semester of my Systems Analysis and Development degree (TADS). I really enjoy building things that solve real problems: today I work with people close to me and take on many academic projects, from interfaces and software to websites, for areas like private companies, personal projects and education focused systems. I especially love the design side, always making the experience more pleasant to use.\n\nI've been exploring the use of AI across my projects, always as a supporting tool. I'm open to new challenges to keep exploring and growing my potential.",
  },

  // Local (opcional)
  location: {
    pt: "Brasil",
    en: "Brazil",
  },

  // Seus links (deixe "" pra esconder o botão)
  links: {
    email: "otavio.ramalhomrc@gmail.com",
    github: "https://github.com/Otavio-MR",
    linkedin: "https://www.linkedin.com/in/otavio-marcondes-ramalho-0321492a2/",
    instagram: "",
    discord: "",
  },

  // Tecnologias exibidas na seção "Sobre".
  stack: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML & CSS",
    "Tailwind CSS",
    "Figma",
    "Git & GitHub",
    "Vercel",
    "Render",
  ],
};

export type Profile = typeof profile;
