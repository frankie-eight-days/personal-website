"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ ./boot.sh --profile=frank",
  "[ ok ] mounting /frank ...",
  "[ ok ] loading neon drivers ...",
  "[ ok ] spinning up portfolio ...",
  "[ ok ] whoami → frank_walsh :: EE // founder",
];

type State = "idle" | "running" | "closing" | "done";

export default function BootSequence() {
  const [state, setState] = useState<State>("idle");
  const [pct, setPct] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let booted = false;
    try {
      booted = sessionStorage.getItem("booted") === "1";
    } catch {}

    if (booted || reduce) {
      setState("done");
      return;
    }

    setState("running");
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLines(i + 1), 70 * i));
    });

    let p = 0;
    const prog = setInterval(() => {
      p = Math.min(100, p + 18);
      setPct(p);
      if (p >= 100) clearInterval(prog);
    }, 45);

    const end = setTimeout(() => {
      try {
        sessionStorage.setItem("booted", "1");
      } catch {}
      setState("closing");
      timers.push(setTimeout(() => setState("done"), 300));
    }, 650);

    timers.push(end);
    return () => {
      clearInterval(prog);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (state === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg px-4 transition-opacity duration-300 ${
        state === "closing" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="term box-glow w-full max-w-md">
        <div className="term-bar">
          <span className="term-dot" style={{ background: "#ff5f56" }} />
          <span className="term-dot" style={{ background: "#ffbd2e" }} />
          <span className="term-dot" style={{ background: "#27c93f" }} />
          <span className="ml-2">frank@walsh: ~/boot</span>
        </div>
        <div className="p-5 text-sm leading-7">
          {LINES.slice(0, lines).map((l, i) => (
            <div
              key={i}
              className={l.startsWith("[ ok ]") ? "text-green-dim" : "text-green glow"}
            >
              {l}
            </div>
          ))}
          <div className="mt-4">
            <div className="h-2 w-full overflow-hidden rounded border border-line bg-panel-2">
              <div
                className="h-full bg-green transition-[width] duration-100 ease-linear"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-text-dim">{pct}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
