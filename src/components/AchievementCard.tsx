import type { Achievement } from "@/data/types";
import ImageFrame from "./ImageFrame";

export default function AchievementCard({ a }: { a: Achievement }) {
  return (
    <article className="term flex flex-col transition-transform hover:-translate-y-0.5 hover:box-glow">
      <ImageFrame
        src={a.cover}
        alt={a.title}
        dir={a.imageDir}
        bare
        className="aspect-[4/3]"
      />
      <div className="p-3">
        <div className="flex items-center gap-2">
          <span className="tag border-amber/40 text-amber! glow-amber">{a.tag}</span>
          <span className="text-xs text-text-dim">{a.year}</span>
        </div>
        <h3 className="mt-2 text-sm font-semibold text-green">{a.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-text-dim">{a.detail}</p>
        {a.links && a.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {a.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="tlink text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
