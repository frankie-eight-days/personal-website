import type { ReactNode } from "react";

export default function SectionHeader({
  path,
  command,
  children,
}: {
  path: string;
  command: string;
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
      {children && (
        <p className="mt-3 max-w-2xl text-text-dim">{children}</p>
      )}
    </header>
  );
}
