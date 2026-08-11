export const profile = {
  brand: "faoTech",
  name: "Felipe de Almeida Oliveira",
  role: "Desenvolvedor Fullstack",
  tagline:
    "Node.js com TypeScript, React com Next.js e NestJS no backend — também com experiência em Java e C#.",
  linkedin: "https://www.linkedin.com/in/felipealmeidadev/",
  github: "https://github.com/felipealmeidadevelop",
  cv: "/cv/felipe-de-almeida-oliveira-fullstack.pdf",
  emails: [
    "felipe.almeida@faotech.com.br",
    "felipealmeidadevelop@gmail.com",
    "felipealmeidadevelop@hotmail.com",
  ],
} as const;

export const projects = [
  {
    name: "Tutu",
    label: "SaaS · faoTech",
    description:
      "O tutor da rotina do bebê — SaaS para organizar sono, alimentação e cuidados do dia a dia.",
    href: "https://tutu-app.up.railway.app/",
    stack: ["React", "Node"],
  },
  {
    name: "Aplicação de agendamentos em PWA",
    label: "PWA",
    description:
      "Aplicação progressiva de agendamentos com autenticação e fluxo completo de login e cadastro.",
    href: "https://goold-frontend-nu.vercel.app/login",
    stack: ["React", "Node", "PWA"],
  },
] as const;

export const experience = [
  {
    company: "Grupo Goold",
    role: "Desenvolvedor Fullstack",
    period: "Fevereiro 2026 — atual",
    bullets: [
      "Desenvolvimento fullstack de aplicação de agendamentos em PWA com React e Node.",
      "Planejamento, modelagem, desenvolvimento e manutenção de sistemas.",
    ],
    stack: ["React", "Node", "TypeScript"],
  },
  {
    company: "PRODEB — Companhia de Processamento de Dados do Estado da Bahia",
    role: "Consultor III — Desenvolvedor Fullstack",
    period: "Julho 2023 — presente",
    bullets: [
      "Desenvolvimento de sistema governamental fullstack com Java 17 e React, bancos Oracle.",
      "Desenvolvimento de sistema governamental com React e Next.js.",
      "Sustentação de sistema monolito Java 8 com JSF.",
    ],
    stack: ["Java", "React", "Next.js", "Oracle"],
  },
  {
    company: "Avantsoft",
    role: "Desenvolvedor Fullstack",
    period: "Setembro 2023 — Setembro 2025",
    bullets: [
      "Desenvolvimento fullstack com Node.js e TypeScript — Next.js no front e NestJS no back, PostgreSQL.",
      "PDV de criptomoedas mobile-first em Node.js para cliente estrangeiro.",
      "Participação em projeto de gerenciamento de processos para clínica de psicologia (Laravel, HTML, CSS, Bootstrap).",
      "App mobile em FlutterFlow para cliente estrangeiro; dailies 100% em inglês.",
    ],
    stack: ["Node.js", "TypeScript", "Next.js", "NestJS", "PostgreSQL"],
  },
  {
    company: "Welcome The Future",
    role: "Desenvolvedor Backend",
    period: "Fevereiro 2024 — Junho 2024",
    bullets: [
      "Desenvolvimento backend com C# e PostgreSQL.",
      "Desenvolvimento de plataforma de cursos web.",
    ],
    stack: ["C#", "PostgreSQL"],
  },
  {
    company: "Grupo SINART",
    role: "Desenvolvedor Fullstack",
    period: "Fevereiro 2022 — Março 2024",
    bullets: [
      "Desenvolvimento e manutenção de sistemas de gerenciamento de embarque em PL/SQL.",
      "Manutenção de sistemas de contratos, guarda-volumes, PDV e integração de contas a receber em Java 8/11.",
      "Migração de sistemas Java 8 para 11.",
      "Sistema informativo de voos do Aeroporto de Porto Seguro e rotinas financeiras em Node.js (Express + React).",
      "Leitor de passagens aéreas para automatizar sala de embarque em React Native.",
    ],
    stack: ["Java", "Node.js", "React", "React Native", "PL/SQL"],
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Fullstack",
    period: "Julho 2021 — presente",
    bullets: [
      "Planejamento, prototipação, UML, modelagem de banco e fluxos no Figma.",
      "APIs e sistemas sob demanda em Java e Node.js.",
      "Aplicações web com NestJS e Next.js (TypeScript).",
    ],
    stack: ["Node.js", "NestJS", "Next.js", "Java"],
  },
] as const;

export const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Católica do Salvador",
    period: "Concluído em 2021",
  },
  {
    title: "Pós-graduação em Arquitetura de Software",
    institution: "XP Educação",
    period: "Em andamento",
  },
  {
    title: "Pós-graduação em Arquitetura de Soluções com IA",
    institution: "XP Educação",
    period: "Em andamento",
  },
] as const;

export const courses = [
  "Formação TypeScript Fullstack Developer — DIO",
  "Bootcamp Banco PAN Java Developer — DIO",
  "Jornada FullStack (Node.js) — Samsung Ocean",
  "JavaScript para Backend, Node.js com Express, React Native — Alura",
  "GitHub — Microsoft Learn",
  "1ª Maratona Baiana de Programação (competidor) — Java",
] as const;
