"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Nav() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[84rem] flex-wrap items-center gap-x-1 gap-y-2 px-5 py-3 text-sm">
        <Link href="/" className="mr-3 font-semibold">
          <span className="text-green glow">frank</span>
          <span className="text-text-dim">@</span>
          <span className="text-green">walsh</span>
          <span className="text-text-dim">:</span>
          <span className="text-cyan">~</span>
          <span className="text-green-dim">$</span>
        </Link>

        <div className="flex flex-wrap items-center gap-1">
          {sections.map((s) => {
            const active = path === `/${s.slug}` || path?.startsWith(`/${s.slug}/`);
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                aria-current={active ? "page" : undefined}
                className={`rounded px-2 py-1 transition-colors ${
                  active
                    ? "bg-panel text-green glow"
                    : "text-text-dim hover:text-green"
                }`}
              >
                {s.label}
              </Link>
            );
          })}
        </div>

        <a
          href={profile.resume}
          className="tag ml-auto hover:text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume&nbsp;↓
        </a>
      </nav>
    </header>
  );
}
