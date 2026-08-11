import Image from "next/image";
import { experience } from "../content";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden border-t border-border px-6 py-20 sm:px-8 sm:py-28"
    >
      <Image
        src="/wallpapers/wallpaper-03.png"
        alt=""
        fill
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,12,0.92),rgba(7,6,12,0.96))]"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-wide text-brand-bright">
          Experiência
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Onde estou construindo
        </h2>

        <ul className="mt-12 space-y-8">
          {experience.map((item) => (
            <li key={item.company} className="max-w-2xl">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.role}
                </h3>
                <span className="text-brand-bright">@ {item.company}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.period}</p>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">
                {item.summary}
              </p>
              <p className="mt-4 text-xs tracking-wide text-brand-bright/80">
                {item.stack.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
