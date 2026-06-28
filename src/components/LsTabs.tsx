"use client";

import { Children, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

// A terminal-style listing: prints a command, then a tab strip whose panels
// are passed in as children (one child per tab/label).
export default function LsTabs({
  command,
  labels,
  viewAllHref,
  children,
}: {
  command: string;
  labels: string[];
  viewAllHref?: string;
  children: ReactNode;
}) {
  const panels = Children.toArray(children);
  const [active, setActive] = useState(0);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="text-sm">
          <span className="text-green-dim">frank@walsh</span>
          <span className="text-text-dim">:</span>
          <span className="text-cyan">~</span>
          <span className="text-text-dim">$ </span>
          <span className="text-green glow">{command}</span>
          <span className="cursor" />
        </div>
        {viewAllHref && (
          <Link href={viewAllHref} className="tlink shrink-0 text-xs">
            view all →
          </Link>
        )}
      </div>

      <div className="term">
        <div className="flex flex-wrap gap-1 border-b border-line bg-black/25 p-2">
          {labels.map((l, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded px-3 py-1 text-xs transition-colors ${
                i === active
                  ? "bg-panel text-green glow"
                  : "text-text-dim hover:text-green"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="p-4 sm:p-5">{panels[active]}</div>
      </div>
    </section>
  );
}
