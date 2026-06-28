import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import TerminalWindow from "@/components/TerminalWindow";
import ImageFrame from "@/components/ImageFrame";
import { current, headline, internships } from "@/data/experience";
import type { Role } from "@/data/types";

export const metadata: Metadata = { title: "experience" };

function RoleBlock({ role, accent }: { role: Role; accent?: boolean }) {
  return (
    <TerminalWindow
      title={`${role.company.toLowerCase()} — ${role.title}`}
      className={accent ? "box-glow" : ""}
    >
      <div className="grid md:grid-cols-[1fr_1.5fr]">
        <ImageFrame
          src={role.cover}
          alt={role.company}
          dir={role.imageDir}
          bare
          fit={role.fit}
          mediaAspect={role.mediaAspect}
          className="aspect-video"
        />
        <div className="p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold text-green glow">{role.company}</h3>
            <span className="text-xs text-text-dim">
              {role.period}
              {role.location ? ` · ${role.location}` : ""}
            </span>
          </div>
          <div className="text-sm text-text">{role.title}</div>
          <ul className="mt-3 space-y-2">
            {role.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-dim">
                <span className="shrink-0 text-green-dim">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {role.tags && role.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {role.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </TerminalWindow>
  );
}

export default function ExperiencePage() {
  return (
    <div className="wrap space-y-12 py-10 sm:py-14">
      <SectionHeader path="~/experience" command="cat work_history.log">
        Currently doing systems EE at Apple. Before that, the headline work was at
        Tesla. Everything earlier is bucketed below.
      </SectionHeader>

      <div className="space-y-4">
        <div className="text-xs uppercase tracking-wider text-cyan">// current</div>
        <RoleBlock role={current} accent />
      </div>

      <div className="space-y-4">
        <div className="text-xs uppercase tracking-wider text-cyan">// headline</div>
        <RoleBlock role={headline} accent />
      </div>

      <div className="space-y-4">
        <div className="text-xs uppercase tracking-wider text-cyan">
          // internships &amp; earlier
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {internships.map((r) => (
            <div key={r.company + r.title} className="term p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-green">{r.company}</h3>
                <span className="text-xs text-text-dim">{r.period}</span>
              </div>
              <div className="text-xs text-text-dim">
                {r.title}
                {r.location ? ` · ${r.location}` : ""}
              </div>
              <ul className="mt-2 space-y-1.5">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-xs text-text-dim">
                    <span className="shrink-0 text-green-dim">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
