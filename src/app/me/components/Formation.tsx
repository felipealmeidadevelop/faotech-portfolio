import { courses, education } from "../content";

export function Formation() {
  return (
    <section
      id="formacao"
      className="relative border-t border-border bg-background px-6 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-brand-bright">
            Formação
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Acadêmica
          </h2>
          <ul className="mt-8 space-y-6">
            {education.map((item) => (
              <li key={item.title}>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {item.institution} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-brand-bright">
            Cursos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Complementares
          </h2>
          <ul className="mt-8 space-y-3">
            {courses.map((course) => (
              <li
                key={course}
                className="relative pl-4 text-sm leading-relaxed text-foreground/85 before:absolute before:left-0 before:text-brand-bright before:content-['–']"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
