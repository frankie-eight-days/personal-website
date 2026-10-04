"use client";

import { useState } from "react";

type Mode = "good" | "vibe";

// Two layouts of the same small board (USB-C in, buck converter, MCU, a
// header). Same netlist, same connectivity, both would pass a basic DRC.
// The numbered callouts stay put when you flip modes so the reader learns
// where to look.

const COPPER = "#c98a4b";
const PAD = "#e0a96d";
const SILK = "#c6f6d8";
const MASK = "#0b2216";
const AMBER = "#ffc857";

const CALLOUTS: {
  n: number;
  x: number;
  y: number;
  title: string;
  good: string;
  vibe: string;
}[] = [
  {
    n: 1,
    x: 70,
    y: 160,
    title: "ESD at the connector",
    good: "The TVS diode sits right at the connector, so a zap is clamped before it reaches anything else.",
    vibe: "The ESD diode is parked next to the MCU. The zap crosses the whole board before it meets the clamp.",
  },
  {
    n: 2,
    x: 92,
    y: 40,
    title: "Buck input loop",
    good: "Input cap tight against VIN and GND. The hot loop is the size of a fingernail.",
    vibe: "Input cap on the far side of the board. That loop is an antenna for every switching edge.",
  },
  {
    n: 3,
    x: 172,
    y: 40,
    title: "Switch node and inductor",
    good: "Inductor right next to the switch pin, so the switch node is a small copper island.",
    vibe: "Inductor across the board, so the switch node is a long, fat trace radiating at the switching frequency.",
  },
  {
    n: 4,
    x: 305,
    y: 124,
    title: "Placement",
    good: "Decoupling at every supply pin, passives in rows, one orientation. Someone was thinking about pick-and-place and rework.",
    vibe: "The decoupling caps sit in a cluster in the corner and the passives are at random angles. It connects, which is all that was checked.",
  },
  {
    n: 5,
    x: 392,
    y: 268,
    title: "Ground return",
    good: "Unbroken ground plane, with stitching vias along the edges and around the buck.",
    vibe: "A slot through the ground plane, right under the signals. Every return current has to detour around it.",
  },
  {
    n: 6,
    x: 584,
    y: 40,
    title: "Copper balance",
    good: "Each layer roughly matches its mirror in the stackup. It will etch evenly and stay flat through reflow.",
    vibe: "One layer is nearly bare and its mirror is solid copper. That panel bows in reflow, and the fab will call you about it.",
  },
];

const BALANCE: Record<Mode, number[]> = {
  good: [55, 92, 90, 52],
  vibe: [72, 95, 12, 20],
};

function Passive({
  x,
  y,
  vertical = false,
  rot = 0,
}: {
  x: number;
  y: number;
  vertical?: boolean;
  rot?: number;
}) {
  const w = vertical ? 8 : 16;
  const h = vertical ? 16 : 8;
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} fill="#2a3b30" rx={1} />
      {vertical ? (
        <>
          <rect x={x} y={y} width={w} height={4} fill={PAD} />
          <rect x={x} y={y + h - 4} width={w} height={4} fill={PAD} />
        </>
      ) : (
        <>
          <rect x={x} y={y} width={4} height={h} fill={PAD} />
          <rect x={x + w - 4} y={y} width={4} height={h} fill={PAD} />
        </>
      )}
    </g>
  );
}

function Via({ x, y }: { x: number; y: number }) {
  return (
    <circle cx={x} cy={y} r={2.6} fill={PAD} stroke={MASK} strokeWidth={1.2} />
  );
}

function Label({ x, y, t }: { x: number; y: number; t: string }) {
  return (
    <text
      x={x}
      y={y}
      fill={SILK}
      fontSize={9}
      fontFamily="ui-monospace, monospace"
      opacity={0.85}
    >
      {t}
    </text>
  );
}

function Board({ mode }: { mode: Mode }) {
  const good = mode === "good";

  // Stitching vias: a full ring for the good board, a scattered handful for
  // the vibe one.
  const ring: [number, number][] = [];
  for (let x = 40; x <= 500; x += 28) ring.push([x, 32], [x, 368]);
  for (let y = 60; y <= 340; y += 28) ring.push([32, y], [508, y]);
  const vias: [number, number][] = good
    ? [...ring, [100, 108], [128, 108], [156, 108], [184, 108], [212, 108]]
    : [
        [140, 300],
        [330, 90],
        [460, 330],
        [240, 120],
        [60, 140],
      ];

  return (
    <>
      {/* board, ground pour */}
      <rect x={20} y={20} width={500} height={360} rx={14} fill={MASK} stroke="#2f9a5d" strokeWidth={2} />
      <rect x={28} y={28} width={484} height={344} rx={10} fill={COPPER} opacity={0.12} />
      {!good && (
        <>
          <rect x={170} y={262} width={210} height={8} fill={MASK} />
          <Label x={232} y={284} t="pour slot" />
        </>
      )}

      {vias.map(([x, y]) => (
        <Via key={`${x}-${y}`} x={x} y={y} />
      ))}

      {/* USB-C */}
      <rect x={6} y={175} width={48} height={50} rx={6} fill="#8f9994" />
      <rect x={14} y={188} width={32} height={24} rx={4} fill="#3b4440" />
      <Label x={14} y={240} t="J1 USB-C" />

      {/* USB data pair to the MCU */}
      {good ? (
        <>
          <polyline points="54,195 62,195 76,195 260,195" fill="none" stroke={COPPER} strokeWidth={2.5} />
          <polyline points="54,205 62,205 76,205 260,205" fill="none" stroke={COPPER} strokeWidth={2.5} />
          <rect x={62} y={186} width={14} height={28} fill="#2a3b30" />
          <rect x={62} y={186} width={14} height={6} fill={PAD} />
          <rect x={62} y={208} width={14} height={6} fill={PAD} />
          <Label x={58} y={226} t="D1" />
        </>
      ) : (
        <>
          <polyline points="54,195 150,195 170,180 260,180" fill="none" stroke={COPPER} strokeWidth={2.5} />
          <polyline points="54,205 160,205 180,215 260,215" fill="none" stroke={COPPER} strokeWidth={2.5} />
          <polyline points="240,215 240,262 222,262" fill="none" stroke={COPPER} strokeWidth={2} />
          <rect x={208} y={250} width={14} height={28} fill="#2a3b30" transform="rotate(90 215 264)" />
          <Label x={196} y={300} t="D1" />
        </>
      )}

      {/* MCU */}
      <rect x={260} y={150} width={90} height={90} rx={3} fill="#1b2620" stroke="#46564d" />
      {Array.from({ length: 8 }).map((_, k) => (
        <g key={k}>
          <rect x={268 + k * 10} y={144} width={4} height={6} fill={PAD} />
          <rect x={268 + k * 10} y={240} width={4} height={6} fill={PAD} />
          <rect x={254} y={158 + k * 10} width={6} height={4} fill={PAD} />
          <rect x={350} y={158 + k * 10} width={6} height={4} fill={PAD} />
        </g>
      ))}
      <Label x={292} y={200} t="U1" />

      {/* decoupling */}
      {good ? (
        <>
          <Passive x={238} y={156} vertical />
          <Passive x={238} y={216} vertical />
          <Passive x={364} y={156} vertical />
          <Passive x={364} y={216} vertical />
          <Passive x={276} y={130} />
          <Passive x={318} y={130} />
        </>
      ) : (
        <>
          <Passive x={430} y={84} rot={20} />
          <Passive x={454} y={96} vertical rot={-35} />
          <Passive x={438} y={112} rot={60} />
          <Passive x={466} y={120} />
          <Passive x={446} y={136} vertical rot={15} />
          <Passive x={420} y={128} rot={-50} />
          <polyline points="356,160 430,92" fill="none" stroke={COPPER} strokeWidth={1.5} />
        </>
      )}

      {/* buck converter */}
      <rect x={112} y={60} width={34} height={34} rx={2} fill="#1b2620" stroke="#46564d" />
      <Label x={118} y={81} t="U2" />
      {good ? (
        <>
          <rect x={88} y={56} width={62} height={44} rx={6} fill={AMBER} opacity={0.12} stroke={AMBER} strokeDasharray="4 3" />
          <Passive x={94} y={66} vertical />
          <rect x={146} y={70} width={12} height={14} fill={COPPER} />
          <rect x={156} y={56} width={42} height={42} rx={4} fill="#3a3530" stroke="#6b6157" />
          <Label x={168} y={81} t="L1" />
          <Passive x={206} y={66} vertical />
          <Label x={86} y={116} t="Cin" />
        </>
      ) : (
        <>
          <polygon points="50,352 50,52 150,52 150,102 86,102 86,352" fill={AMBER} opacity={0.1} stroke={AMBER} strokeDasharray="4 3" />
          <Passive x={60} y={322} vertical />
          <polyline points="66,322 66,110 112,90" fill="none" stroke={COPPER} strokeWidth={3} />
          <polyline points="146,77 402,77" fill="none" stroke={COPPER} strokeWidth={14} />
          <rect x={402} y={52} width={42} height={42} rx={4} fill="#3a3530" stroke="#6b6157" />
          <Label x={414} y={77} t="L1" />
          <Passive x={454} y={60} vertical />
          <Label x={74} y={342} t="Cin" />
        </>
      )}

      {/* passives */}
      {Array.from({ length: 15 }).map((_, k) => {
        const col = k % 5;
        const row = Math.floor(k / 5);
        const rots = [0, 35, 90, -20, 60, 0, -45, 90, 15, -70, 30, 90, -10, 45, 0];
        return (
          <Passive
            key={k}
            x={390 + col * 22}
            y={292 + row * 22}
            rot={good ? 0 : rots[k]}
          />
        );
      })}

      {/* header */}
      <rect x={478} y={150} width={24} height={100} rx={2} fill="#1b2620" stroke="#46564d" />
      {Array.from({ length: 5 }).map((_, k) => (
        <circle key={k} cx={490} cy={162 + k * 19} r={4} fill={PAD} />
      ))}
      <Label x={472} y={266} t="J2" />

      {/* copper balance */}
      <text x={540} y={74} fill={SILK} fontSize={9} fontFamily="ui-monospace, monospace">
        copper / layer
      </text>
      {BALANCE[mode].map((v, k) => (
        <g key={k}>
          <text x={540} y={98 + k * 26} fill="#6f9a80" fontSize={9} fontFamily="ui-monospace, monospace">
            L{k + 1}
          </text>
          <rect x={558} y={90 + k * 26} width={70} height={10} fill="#173d28" />
          <rect x={558} y={90 + k * 26} width={(70 * v) / 100} height={10} fill={COPPER} />
        </g>
      ))}
      <text x={540} y={210} fill="#6f9a80" fontSize={8} fontFamily="ui-monospace, monospace">
        L1↔L4 · L2↔L3
      </text>

      {/* callouts */}
      {CALLOUTS.map((c) => (
        <g key={c.n}>
          <circle cx={c.x} cy={c.y} r={10} fill="#4dff91" stroke="#04150a" strokeWidth={2} />
          <text
            x={c.x}
            y={c.y + 4}
            textAnchor="middle"
            fill="#04150a"
            fontSize={11}
            fontWeight={700}
            fontFamily="ui-monospace, monospace"
          >
            {c.n}
          </text>
        </g>
      ))}
    </>
  );
}

export default function BoardTaste() {
  const [mode, setMode] = useState<Mode>("good");
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        <span>▸ view thirty-seconds.kicad_pcb</span>
        <span className="flex gap-1" role="group" aria-label="layout version">
          {(["good", "vibe"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`rounded border px-2 py-0.5 transition ${
                mode === m
                  ? m === "good"
                    ? "border-green text-green box-glow"
                    : "border-amber text-amber"
                  : "border-line text-text-dim hover:text-text"
              }`}
            >
              {m === "good" ? "designed" : "vibed"}
            </button>
          ))}
        </span>
      </div>
      <svg
        viewBox="0 0 640 400"
        className="block h-auto w-full bg-black/30"
        role="img"
        aria-label={
          mode === "good"
            ? "A well laid-out board: ESD at the connector, a tight buck converter, decoupling at the MCU pins, stitching vias, balanced copper."
            : "The same board, vibed: ESD far from the connector, a sprawling buck converter, clustered decoupling, a slot in the ground pour, unbalanced copper."
        }
      >
        <Board mode={mode} />
      </svg>
      <ol className="space-y-2 border-t border-line p-4 text-xs leading-relaxed">
        {CALLOUTS.map((c) => (
          <li key={c.n} className="flex gap-2">
            <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-green text-[10px] font-bold text-bg">
              {c.n}
            </span>
            <span>
              <span className="text-green">{c.title}.</span>{" "}
              <span className={mode === "good" ? "text-text" : "text-amber"}>
                {mode === "good" ? c.good : c.vibe}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> same netlist both ways.
        both connect, both would pass a basic DRC. flip it and look at the
        same six spots.
      </figcaption>
    </figure>
  );
}
