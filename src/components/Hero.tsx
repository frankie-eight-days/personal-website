import Link from "next/link";
import { profile } from "@/data/profile";
import TerminalWindow from "./TerminalWindow";
import ImageFrame from "./ImageFrame";

export default function Hero() {
  return (
    <section className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-start">
      <TerminalWindow title="frank@walsh: ~" className="box-glow">
        <div className="p-5 sm:p-7">
          <div className="text-sm text-text-dim">
            <span className="text-green-dim">$</span> whoami
          </div>
          <h1 className="mt-1 text-2xl font-bold text-green glow sm:text-3xl">
            {profile.name}
          </h1>
          <div className="mt-1 text-sm text-text-dim">{profile.roles.join("  ·  ")}</div>

          {/* the line that used to live only in OG metadata — now the headline */}
          <p className="mt-3 max-w-prose text-lg font-semibold leading-snug text-green-bright glow sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-5 text-sm text-text-dim">
            <span className="text-green-dim">$</span> cat about.txt
          </div>
          <p className="mt-1 max-w-prose font-sans text-sm leading-relaxed text-text sm:text-[15px]">
            {profile.blurb}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/software" className="btn">
              view projects →
            </Link>
            <a
              href={profile.resume}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume ↓
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              say hi
            </a>
          </div>
        </div>
      </TerminalWindow>

      <div className="space-y-3">
        <ImageFrame
          src={profile.headshot || undefined}
          alt={profile.name}
          dir="/images/hero/"
          className="aspect-[4/3]"
          priority
          sizes="(max-width: 768px) 100vw, 540px"
        />
        <div className="flex flex-wrap gap-4 px-1 text-sm">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="tlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
