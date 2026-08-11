import Image from "next/image";
import { profile } from "../content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-16 sm:px-8">
      <Image
        src="/wallpapers/wallpaper-02.png"
        alt=""
        fill
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,12,0.9),rgba(7,6,12,0.97))]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            src="/brand/logo-stacked.png"
            alt="faoTech"
            width={120}
            height={120}
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            {profile.name} — {profile.role}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-brand-bright">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta hover:text-white"
          >
            GitHub
          </a>
          <a href={profile.cv} download className="cta hover:text-white">
            CV
          </a>
        </nav>
      </div>
    </footer>
  );
}
