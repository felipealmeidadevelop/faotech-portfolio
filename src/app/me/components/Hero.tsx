import Image from "next/image";
import { profile } from "../content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/wallpapers/wallpaper-04.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,92,255,0.18),transparent_55%),linear-gradient(180deg,rgba(7,6,12,0.55)_0%,rgba(7,6,12,0.78)_45%,rgba(7,6,12,0.96)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-end px-6 pb-16 pt-10 sm:px-8 sm:pb-20">
        <div className="animate-fade-in mb-auto">
          <Image
            src="/brand/logo-horiz.png"
            alt="faoTech"
            width={180}
            height={40}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="animate-fade-up delay-1 mb-4 text-sm font-medium tracking-wide text-brand-bright">
              {profile.brand}
            </p>
            <h1 className="animate-fade-up delay-2 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="animate-fade-up delay-3 mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {profile.role}. {profile.tagline}
            </p>

            <div className="animate-fade-up delay-4 mt-8 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta-primary inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white"
              >
                LinkedIn
              </a>
              <a
                href={profile.cv}
                download
                className="cta inline-flex items-center rounded-md border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-brand-bright/40 hover:bg-white/10"
              >
                Baixar CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta inline-flex items-center rounded-md border border-transparent px-5 py-3 text-sm font-semibold text-brand-bright hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="animate-fade-up delay-3 relative mx-auto w-full max-w-[280px] lg:mx-0 lg:justify-self-end">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_70%)] blur-2xl"
            />
            <Image
              src="/brand/profile.png"
              alt={profile.name}
              width={560}
              height={560}
              priority
              className="relative aspect-square w-full rounded-2xl object-cover object-top ring-1 ring-brand/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
