import { projects } from "../content";

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative border-t border-border bg-background px-6 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-wide text-brand-bright">
          Projetos
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Produtos que construí
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Referências públicas do Tutu e de uma aplicação de agendamentos em
          PWA.
        </p>

        <ul className="mt-14 space-y-0 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li key={project.name} className="group py-8 sm:py-10">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="project-link text-2xl font-semibold text-white sm:text-3xl">
                      {project.name}
                    </span>
                    <span className="text-sm text-muted">{project.label}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted transition-colors group-hover:text-foreground/90">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs tracking-wide text-brand-bright/80">
                    {project.stack.join(" · ")}
                  </p>
                </div>
                <span className="text-sm font-medium text-brand-bright transition-transform group-hover:translate-x-1">
                  Ver projeto →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
