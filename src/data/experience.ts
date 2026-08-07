// ============================================================
//  EXPERIÊNCIA & FORMAÇÃO — dados reais.
// ============================================================

export type Experience = {
  id: string;
  role: { pt: string; en: string };
  org: string;
  period: { pt: string; en: string };
  location?: string;
  description: { pt: string; en: string };
  tags?: string[];
  current?: boolean; // mostra o selo "Atual"
  highlight?: boolean; // dá destaque visual (usado no NAPI SPACE)
};

export const experiences: Experience[] = [
  {
    id: "napi-space",
    role: {
      pt: "Iniciação Científica em Robótica e Astronomia",
      en: "Undergraduate Research in Robotics & Astronomy",
    },
    org: "NAPI SPACE · IFPR × Agência Espacial Brasileira",
    period: { pt: "Desde set 2025", en: "Since Sep 2025" },
    location: "Londrina, PR · Híbrido",
    description: {
      pt: "Trabalho no projeto NAPI SPACE, o Novo Arranjo de Pesquisa e Inovação em serviços e produtos espaciais do Paraná, uma parceria da Agência Espacial Brasileira (AEB) com o IFPR e outras instituições públicas. Ajudo e dou aulas para o público infantil e juvenil sobre robótica, foguetes e astronomia, além de atuar com impressão 3D.",
      en: "I work on the NAPI SPACE project, Paraná's new research and innovation arrangement for space services and products, a partnership between the Brazilian Space Agency (AEB), IFPR and other public institutions. I help out and teach children and teenagers about robotics, rockets and astronomy, and also work with 3D printing.",
    },
    tags: ["Robótica", "Foguetes", "Astronomia", "Impressão 3D"],
    current: true,
    highlight: true,
  },
  {
    id: "tads-ifpr",
    role: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis & Development (Technology degree)",
    },
    org: "IFPR · Campus Londrina",
    period: { pt: "Último semestre", en: "Final semester" },
    location: "Londrina, PR",
    description: {
      pt: "Graduação em andamento, com foco em desenvolvimento de software, banco de dados e design de interfaces.",
      en: "Ongoing degree focused on software development, databases and interface design.",
    },
    tags: ["Formação"],
    current: true,
  },
];
