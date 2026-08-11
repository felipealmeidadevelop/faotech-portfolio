export const profile = {
  brand: "faoTech",
  name: "Felipe de Almeida Oliveira",
  role: "Desenvolvedor Fullstack",
  tagline:
    "Construo produtos web com React e Node — da ideia ao deploy.",
  linkedin: "https://www.linkedin.com/in/felipealmeidadev/",
  github: "https://github.com/felipealmeidadevelop",
  cv: "/cv/felipe-de-almeida-oliveira-fullstack.pdf",
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
    name: "Goold",
    label: "Agendamento",
    description:
      "Aplicação de agendamento com autenticação e fluxo completo de login e cadastro.",
    href: "https://goold-frontend-nu.vercel.app/login",
    stack: ["React", "Node"],
  },
] as const;

export const experience = [
  {
    company: "Goold",
    role: "Desenvolvedor Fullstack",
    period: "Fevereiro 2026 — atual",
    summary:
      "Desenvolvimento fullstack do produto de agendamento com React no frontend e Node no backend.",
    stack: ["React", "Node"],
  },
] as const;
