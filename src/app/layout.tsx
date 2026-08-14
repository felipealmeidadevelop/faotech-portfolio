import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "faoTech — Felipe de Almeida Oliveira",
    template: "%s · faoTech",
  },
  description:
    "Portfolio de Felipe de Almeida Oliveira — Desenvolvedor Fullstack (React + Node). Projetos Tutu e aplicação de agendamentos em PWA.",
  metadataBase: new URL("https://faotech.com.br"),
  openGraph: {
    title: "faoTech — Felipe de Almeida Oliveira",
    description:
      "Desenvolvedor Fullstack. React + Node. Portfolio em faotech.com.br/me",
    url: "https://faotech.com.br/me",
    siteName: "faoTech",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/wallpapers/wallpaper-03.png" }],
  },
  icons: {
    icon: [{ url: "/brand/symbol.png", type: "image/png" }],
    apple: [{ url: "/brand/symbol.png", type: "image/png" }],
    shortcut: "/brand/symbol.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${firaCode.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}
