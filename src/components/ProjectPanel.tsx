import type { Project } from "@/data/types";
import ImageFrame from "./ImageFrame";
import Gallery from "./Gallery";

// Horizontal project layout used inside the landing-page <LsTabs> panels.
export default function ProjectPanel({ project }: { project: Project }) {
  const imgs =
    project.images && project.images.length
      ? project.images
      : project.cover
        ? [project.cover]
        : [];

  return (
    <div className="grid gap-5 md:grid-cols-[1.45fr_1fr] md:items-start">
      {imgs.length ? (
        <Gallery
          images={imgs}
          alt={project.title}
          fit={project.fit}
          aspect={project.mediaAspect}
        />
      ) : (
        <ImageFrame
          src={undefined}
          alt={project.title}
          dir={project.imageDir}
          className="aspect-[16/10]"
        />
      )}
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-green glow">{project.title}</h3>
          <span className="text-xs text-text-dim">
            {project.status}
            {project.year ? ` · ${project.year}` : ""}
          </span>
        </div>
        <p className="mt-2 text-sm text-text">{project.tagline}</p>
        {project.description && (
          <p className="mt-2 font-sans text-sm leading-relaxed text-text-dim">
            {project.description}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
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
    </div>
  );
}
