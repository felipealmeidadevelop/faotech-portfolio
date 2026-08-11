import type { Metadata } from "next";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export const metadata: Metadata = {
  title: "Me",
  description:
    "Portfolio de Felipe de Almeida Oliveira — Fullstack React + Node. Tutu, Goold e faoTech.",
  alternates: {
    canonical: "/me",
  },
};

export default function MePage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
