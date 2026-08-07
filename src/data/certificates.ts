// ============================================================
//  SEUS CERTIFICADOS — dados reais.
// ============================================================

export type Certificate = {
  id: string;
  title: string; // nome do certificado/curso
  issuer: string; // instituição
  year?: string;
  url?: string; // link de verificação (opcional)
};

export const certificates: Certificate[] = [
  {
    id: "ifpr-vivencia-robotica",
    title: "Vivência de Robótica",
    issuer: "Laboratório de Robótica · IFPR",
    year: "2026",
    url: "https://suap.ifpr.edu.br/eventos/download/1b18fd0bcbfffbb9/",
  },
  {
    id: "cisco-redes",
    title: "Conceitos Básicos de Rede",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    id: "canva-professores",
    title: "O básico para professores",
    issuer: "Canva Design School",
    year: "2025",
    url: "https://www.canva.com/pt_br/design-school/certification-award/43f84fcf-fc0e-4225-be1a-f3f9a05f7808",
  },
  {
    id: "senac-marketing",
    title: "Ferramentas de Marketing Digital",
    issuer: "Senac PR",
    year: "2025",
  },
  {
    id: "unifil-pensamento",
    title: "Pensamento Computacional",
    issuer: "UniFil, Centro Universitário Filadélfia",
    year: "2025",
  },
  {
    id: "ifpr-inovatec-trabalho",
    title: "Apresentação de trabalho, InovaTec/PR",
    issuer: "II Simpósio de Inovação e Tecnologia do Norte Paranaense · IFPR",
    year: "2024",
    url: "https://www.even3.com.br/documentos/imprimir?i=18240159.85274317.8630141.8.82401598527431786301418&cc=8F067AE7-BF39-4DD5-92EC-E067BAF15E6F",
  },
  {
    id: "ifpr-inovatec-participacao",
    title: "Participação no II Simpósio InovaTec/PR",
    issuer: "II Simpósio de Inovação e Tecnologia do Norte Paranaense · IFPR",
    year: "2024",
    url: "https://www.even3.com.br/documentos/imprimir?i=18240156.85274317.6.8.82401568527431768&cc=8F067AE7-BF39-4DD5-92EC-E067BAF15E6F",
  },
];
