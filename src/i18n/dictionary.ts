// Textos fixos da interface (rótulos de seção, botões, navegação).
// O conteúdo pessoal (bio, projetos, certificados) fica em src/data/*.

export type Lang = "pt" | "en";

// Estrutura de um dicionário de idioma (folhas são strings).
type Section = Record<string, string>;
export type Dict = {
  nav: Section;
  hero: Section;
  about: Section;
  experience: Section;
  projects: Section;
  certificates: Section;
  contact: Section;
  footer: Section;
};

export const dictionary: Record<Lang, Dict> = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      certificates: "Certificados",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para novos projetos",
      role: "Desenvolvedor",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
      scroll: "Role para explorar",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Um pouco da minha história",
      stackTitle: "Tecnologias que uso",
    },
    experience: {
      eyebrow: "Trajetória",
      title: "Experiência & formação",
      subtitle: "Onde tenho aplicado e desenvolvido minhas habilidades.",
      current: "Atual",
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Projetos que construí",
      subtitle:
        "Uma seleção do que já criei, do backend ao design. Alguns feitos em parceria com IA, outros do zero.",
      viewCode: "Código",
      viewLive: "Ver online",
      featured: "Destaque",
    },
    certificates: {
      eyebrow: "Formação",
      title: "Certificados & cursos",
      subtitle: "Aprendizado contínuo, cursos e certificações que concluí.",
      view: "Ver certificado",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      subtitle:
        "Aberto a oportunidades, parcerias e trocas de ideia. Me chame por onde preferir.",
      emailMe: "Enviar email",
    },
    footer: {
      builtWith: "Feito com Next.js e muito café",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      badge: "Available for new projects",
      role: "Developer",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scroll: "Scroll to explore",
    },
    about: {
      eyebrow: "About me",
      title: "A bit of my story",
      stackTitle: "Tech I work with",
    },
    experience: {
      eyebrow: "Journey",
      title: "Experience & education",
      subtitle: "Where I've been applying and growing my skills.",
      current: "Now",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Things I've built",
      subtitle:
        "A selection of what I've made, from backend to design. Some built alongside AI, others from scratch.",
      viewCode: "Code",
      viewLive: "Live",
      featured: "Featured",
    },
    certificates: {
      eyebrow: "Education",
      title: "Certificates & courses",
      subtitle: "Continuous learning, courses and certifications I've completed.",
      view: "View certificate",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      subtitle:
        "Open to opportunities, collaborations and good conversations. Reach me wherever you prefer.",
      emailMe: "Send an email",
    },
    footer: {
      builtWith: "Built with Next.js and lots of coffee",
      rights: "All rights reserved.",
    },
  },
};
