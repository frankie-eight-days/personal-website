import type { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`term ${className}`}>
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f56" }} />
        <span className="term-dot" style={{ background: "#ffbd2e" }} />
        <span className="term-dot" style={{ background: "#27c93f" }} />
        {title && <span className="ml-2 truncate">{title}</span>}
      </div>
      {children}
    </div>
  );
}
