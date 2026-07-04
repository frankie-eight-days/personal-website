import type { ReactNode } from "react";

export default function SectionHeader({
  path,
  command,
  title,
  children,
}: {
  path: string;
  command: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-8">
      <div className="text-sm">
        <span className="text-green-dim">frank@walsh</span>
        <span className="text-text-dim">:</span>
        <span className="text-cyan">{path}</span>
        <span className="text-text-dim">$ </span>
        <span className="text-green glow">{command}</span>
        <span className="cursor" />
      </div>
      {title && (
        <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-green glow sm:text-3xl">
          {title}
        </h1>
      )}
      {children && (
        <p className="mt-3 max-w-2xl text-text-dim">{children}</p>
      )}
    </header>
  );
}
