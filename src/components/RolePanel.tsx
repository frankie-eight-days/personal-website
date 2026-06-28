import type { Role } from "@/data/types";
import ImageFrame from "./ImageFrame";

// Horizontal role layout used inside the landing-page <LsTabs> experience panel.
export default function RolePanel({ role }: { role: Role }) {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_1.3fr] md:items-start">
      <ImageFrame
        src={role.cover}
        alt={role.company}
        dir={role.imageDir}
        fit={role.fit}
        mediaAspect={role.mediaAspect}
        className="aspect-[16/10]"
      />
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-green glow">{role.company}</h3>
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
  );
}
