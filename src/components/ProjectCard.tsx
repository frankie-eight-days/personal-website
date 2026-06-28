import type { Project } from "@/data/types";
import ImageFrame from "./ImageFrame";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="term flex flex-col transition-transform hover:-translate-y-0.5 hover:box-glow">
      <ImageFrame
        src={project.cover}
        alt={project.title}
        dir={project.imageDir}
        bare
        fit={project.fit}
        className="aspect-[16/10]"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-semibold text-green glow">{project.title}</h3>
          <div className="flex shrink-0 items-center gap-2 text-xs text-text-dim">
            {project.status && <span className="text-green-dim">{project.status}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        </div>

        <p className="text-sm text-text">{project.tagline}</p>
        {project.description && (
          <p className="font-sans text-sm leading-relaxed text-text-dim">{project.description}</p>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-1 text-sm">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="tlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
