"use client";

import { useState } from "react";

type Mode = "good" | "vibe";

// The same small board laid out twice: USB-C in, a buck converter, an MCU,
// a header. Same netlist, same connectivity, both pass a basic DRC. The
// numbered callouts stay put when you flip modes, so the reader learns where
// to look rather than what to think.

const COPPER = "#c98a4b";
const PAD = "#e0a96d";
const SILK = "#c6f6d8";
const DIM = "#6f9a80";
const MASK = "#0b2216";
const AMBER = "#ffc857";
const CYAN = "#57e3ff";
const BOTTOM = "#6f9be0";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

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
    x: 74,
    y: 192,
    title: "ESD at the connector",
    good: "The TVS diode (D1) sits on the USB lines right at the connector, so a zap is clamped before it goes anywhere.",
    vibe: "D1 is parked next to the MCU. The zap crosses the board first, then meets the clamp.",
  },
  {
    n: 2,
    x: 40,
    y: 38,
    title: "Buck input loop",
    good: "Input cap tight against U2. The hot loop (amber) is tiny.",
    vibe: "Input cap at the bottom of the board. The hot loop (amber) wraps half of it, and that loop is an antenna for every switching edge.",
  },
  {
    n: 3,
    x: 178,
    y: 30,
    title: "Switch node",
    good: "Inductor right next to the switch pin. The switch node is a small copper island.",
    vibe: "Inductor across the board. The switch node is a long, fat trace radiating at the switching frequency.",
  },
  {
    n: 4,
    x: 348,
    y: 156,
    title: "Placement",
    good: "Decoupling caps hug every side of U1, and the passives sit in rows with one orientation. Someone thought about pick-and-place and rework.",
    vibe: "The decoupling caps are a cluster in the far corner and the passives point every which way. It connects, and that is all that was checked.",
  },
  {
    n: 5,
    x: 196,
    y: 205,
    title: "Ground return",
    good: "Solid ground under the USB pair. The return current (cyan) runs straight back underneath it.",
    vibe: "A slot cut through the ground pour. The return current (cyan) detours around it, opening a loop under the signals.",
  },
  {
    n: 6,
    x: 590,
    y: 46,
    title: "Copper balance",
    good: "Each layer roughly matches its mirror in the stackup (L1↔L4, L2↔L3). It etches evenly and stays flat in reflow.",
    vibe: "L2 is solid copper and its mirror L3 is nearly bare. That panel bows in reflow, and the fab will call you.",
  },
];

const BALANCE: Record<Mode, number[]> = {
  good: [52, 94, 90, 48],
  vibe: [70, 95, 12, 22],
};

function Cap({
  x,
  y,
  vertical = false,
  rot = 0,
  big = false,
}: {
  x: number;
  y: number;
  vertical?: boolean;
  rot?: number;
  big?: boolean;
}) {
  const long = big ? 40 : 18;
  const short = big ? 18 : 9;
  const w = vertical ? short : long;
  const h = vertical ? long : short;
  const p = big ? 9 : 5;
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} fill="#2a3b30" rx={1.5} />
      {vertical ? (
        <>
          <rect x={x} y={y} width={w} height={p} fill={PAD} />
          <rect x={x} y={y + h - p} width={w} height={p} fill={PAD} />
        </>
      ) : (
        <>
          <rect x={x} y={y} width={p} height={h} fill={PAD} />
          <rect x={x + w - p} y={y} width={p} height={h} fill={PAD} />
        </>
      )}
    </g>
  );
}

function T({
  x,
  y,
  t,
  c = SILK,
  s = 11,
  anchor = "start",
}: {
  x: number;
  y: number;
  t: string;
  c?: string;
  s?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fill={c} fontSize={s} fontFamily={MONO} textAnchor={anchor}>
      {t}
    </text>
  );
}

function Chip({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={3} fill="#1b2620" stroke="#46564d" />
      <T x={x + w / 2} y={y + h / 2 + 4} t={label} anchor="middle" />
    </>
  );
}

function Board({ mode }: { mode: Mode }) {
  const good = mode === "good";

  const ring: [number, number][] = [];
  for (let x = 44; x <= 480; x += 29) ring.push([x, 32], [x, 398]);
  for (let y = 61; y <= 370; y += 29) ring.push([32, y], [488, y]);
  const vias: [number, number][] = good
    ? [...ring, [48, 128], [76, 128], [104, 128], [132, 128]]
    : [
        [150, 300],
        [330, 140],
        [250, 360],
        [430, 160],
      ];

  return (
    <>
      {/* board and ground pour */}
      <rect x={20} y={20} width={480} height={390} rx={14} fill={MASK} stroke="#2f9a5d" strokeWidth={2} />
      <rect x={28} y={28} width={464} height={374} rx={10} fill={COPPER} opacity={0.14} />
      <T x={212} y={176} t="GND pour" c={DIM} s={10} />
      {!good && <rect x={174} y={150} width={12} height={205} fill={MASK} />}
      {!good && <T x={192} y={348} t="slot" c={AMBER} s={10} />}

      {vias.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={3} fill={PAD} stroke={MASK} strokeWidth={1.2} />
      ))}

      {/* return current under the USB pair */}
      {good ? (
        <polyline points="300,256 60,256" fill="none" stroke={CYAN} strokeWidth={2} strokeDasharray="6 4" />
      ) : (
        <polyline
          points="300,256 192,256 192,366 166,366 166,256 60,256"
          fill="none"
          stroke={CYAN}
          strokeWidth={2}
          strokeDasharray="6 4"
        />
      )}

      {/* USB-C and the data pair */}
      <rect x={4} y={204} width={54} height={58} rx={7} fill="#8f9994" />
      <rect x={13} y={219} width={36} height={28} rx={5} fill="#3b4440" />
      <T x={8} y={280} t="J1 USB-C" />
      <line x1={58} y1={227} x2={300} y2={227} stroke={COPPER} strokeWidth={3} />
      <line x1={58} y1={240} x2={300} y2={240} stroke={COPPER} strokeWidth={3} />
      {good ? (
        <>
          <rect x={66} y={214} width={16} height={38} fill="#2a3b30" />
          <rect x={66} y={214} width={16} height={7} fill={PAD} />
          <rect x={66} y={245} width={16} height={7} fill={PAD} />
          <T x={86} y={212} t="D1" />
        </>
      ) : (
        <>
          <line x1={272} y1={240} x2={272} y2={268} stroke={COPPER} strokeWidth={2} />
          <rect x={264} y={268} width={16} height={38} fill="#2a3b30" />
          <rect x={264} y={268} width={16} height={7} fill={PAD} />
          <rect x={264} y={299} width={16} height={7} fill={PAD} />
          <T x={284} y={300} t="D1" />
        </>
      )}

      {/* MCU */}
      <rect x={300} y={190} width={96} height={96} rx={3} fill="#1b2620" stroke="#46564d" />
      {Array.from({ length: 8 }).map((_, k) => (
        <g key={k}>
          <rect x={308 + k * 10.5} y={184} width={4} height={6} fill={PAD} />
          <rect x={308 + k * 10.5} y={286} width={4} height={6} fill={PAD} />
          <rect x={294} y={198 + k * 10.5} width={6} height={4} fill={PAD} />
          <rect x={396} y={198 + k * 10.5} width={6} height={4} fill={PAD} />
        </g>
      ))}
      <T x={348} y={243} t="U1 MCU" anchor="middle" />

      {/* decoupling */}
      {good ? (
        <>
          <Cap x={280} y={196} vertical />
          <Cap x={280} y={262} vertical />
          <Cap x={406} y={196} vertical />
          <Cap x={406} y={262} vertical />
          <Cap x={312} y={170} />
          <Cap x={366} y={170} />
        </>
      ) : (
        <>
          <line x1={396} y1={280} x2={452} y2={330} stroke={COPPER} strokeWidth={1.5} />
          <Cap x={440} y={318} rot={25} />
          <Cap x={462} y={336} vertical rot={-30} />
          <Cap x={436} y={346} rot={70} />
          <Cap x={458} y={366} />
          <Cap x={440} y={372} vertical rot={40} />
          <Cap x={468} y={312} rot={-55} />
        </>
      )}

      {/* buck converter */}
      <Chip x={72} y={58} w={52} h={50} label="U2" />
      {good ? (
        <>
          <rect x={38} y={52} width={92} height={62} rx={6} fill={AMBER} fillOpacity={0.22} stroke={AMBER} strokeWidth={2} strokeDasharray="5 3" />
          <Cap x={48} y={63} vertical big />
          <T x={46} y={128} t="Cin" />
          <rect x={124} y={72} width={18} height={20} fill={COPPER} />
          <rect x={142} y={46} width={72} height={72} rx={6} fill="#3a3530" stroke="#6b6157" />
          <T x={178} y={87} t="L1" anchor="middle" />
          <Cap x={222} y={63} vertical big />
          <T x={220} y={128} t="Cout" />
        </>
      ) : (
        <>
          <polygon
            points="36,388 36,50 130,50 130,116 70,116 70,388"
            fill={AMBER}
            fillOpacity={0.16}
            stroke={AMBER}
            strokeWidth={2}
            strokeDasharray="5 3"
          />
          <Cap x={44} y={330} vertical big />
          <T x={68} y={356} t="Cin" />
          <polyline points="53,318 110,296 110,132 96,116" fill="none" stroke={BOTTOM} strokeWidth={3} />
          <circle cx={53} cy={318} r={4} fill={PAD} stroke={MASK} strokeWidth={1.5} />
          <circle cx={96} cy={116} r={4} fill={PAD} stroke={MASK} strokeWidth={1.5} />
          <rect x={124} y={70} width={248} height={24} fill={COPPER} />
          <rect x={372} y={46} width={72} height={72} rx={6} fill="#3a3530" stroke="#6b6157" />
          <T x={408} y={87} t="L1" anchor="middle" />
          <Cap x={452} y={63} vertical big />
        </>
      )}

      {/* passives */}
      {Array.from({ length: 12 }).map((_, k) => {
        const col = k % 4;
        const row = Math.floor(k / 4);
        const rots = [0, 35, 90, -20, 60, -45, 90, 15, -70, 30, 90, -10];
        return <Cap key={k} x={300 + col * 28} y={322 + row * 22} rot={good ? 0 : rots[k]} />;
      })}

      {/* header */}
      <rect x={458} y={172} width={26} height={110} rx={2} fill="#1b2620" stroke="#46564d" />
      {Array.from({ length: 5 }).map((_, k) => (
        <circle key={k} cx={471} cy={186 + k * 21} r={4.5} fill={PAD} />
      ))}
      <T x={456} y={298} t="J2" />

      {/* stackup cross-section */}
      <T x={520} y={78} t="stackup, side view" c={DIM} s={10} />
      {BALANCE[mode].map((v, k) => {
        const y = 92 + k * 36;
        const bad = !good && (k === 2 || k === 3);
        return (
          <g key={k}>
            <rect x={520} y={y} width={120} height={8} fill="#24382c" />
            <rect x={520} y={y} width={(120 * v) / 100} height={8} fill={bad ? AMBER : COPPER} />
            <T x={520} y={y - 3} t={`L${k + 1}  ${v}% copper`} c={bad ? AMBER : SILK} s={10} />
          </g>
        );
      })}
      <T x={520} y={250} t={good ? "mirrors match:" : "L2 95% vs L3 12%:"} c={good ? SILK : AMBER} s={10} />
      <T x={520} y={264} t={good ? "etches evenly," : "the panel bows"} c={good ? SILK : AMBER} s={10} />
      <T x={520} y={278} t={good ? "stays flat" : "in reflow"} c={good ? SILK : AMBER} s={10} />

      {/* legend */}
      <line x1={520} y1={320} x2={544} y2={320} stroke={AMBER} strokeWidth={2} strokeDasharray="5 3" />
      <T x={550} y={324} t="buck hot loop" c={DIM} s={10} />
      <line x1={520} y1={340} x2={544} y2={340} stroke={CYAN} strokeWidth={2} strokeDasharray="6 4" />
      <T x={550} y={344} t="return current" c={DIM} s={10} />
      <rect x={520} y={354} width={24} height={10} fill={COPPER} />
      <T x={550} y={363} t="top copper" c={DIM} s={10} />
      <line x1={520} y1={380} x2={544} y2={380} stroke={BOTTOM} strokeWidth={3} />
      <T x={550} y={384} t="bottom copper" c={DIM} s={10} />

      {/* callouts */}
      {CALLOUTS.map((c) => (
        <g key={c.n}>
          <circle cx={c.x} cy={c.y} r={11} fill="#4dff91" stroke="#04150a" strokeWidth={2} />
          <text
            x={c.x}
            y={c.y + 4.5}
            textAnchor="middle"
            fill="#04150a"
            fontSize={13}
            fontWeight={700}
            fontFamily={MONO}
          >
            {c.n}
          </text>
        </g>
      ))}
    </>
  );
}

export default function BoardTaste({ initial = "good" }: { initial?: Mode }) {
  const [mode, setMode] = useState<Mode>(initial);
  return (
    <figure className="term my-6 overflow-hidden" data-board-mode={mode}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        <span>▸ view thirty-seconds.kicad_pcb</span>
        <span className="flex gap-1" role="group" aria-label="layout version">
          {(["good", "vibe"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              data-mode={m}
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
        viewBox="0 0 660 430"
        className="block h-auto w-full bg-black/30"
        role="img"
        aria-label={
          mode === "good"
            ? "A well laid-out board: ESD at the connector, a tight buck converter, decoupling around the MCU, solid ground under the USB pair, balanced copper."
            : "The same board, vibed: ESD far from the connector, a sprawling buck converter, clustered decoupling, a slot in the ground pour, unbalanced copper."
        }
      >
        <Board mode={mode} />
      </svg>
      <table className="w-full border-t border-line text-left text-xs leading-relaxed">
        <tbody className="divide-y divide-line">
          {CALLOUTS.map((c) => (
            <tr key={c.n} className="align-top">
              <td className="w-11 py-2 pl-4 pr-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green text-[11px] font-bold text-bg">
                  {c.n}
                </span>
              </td>
              <td className="w-32 py-2 pr-3 text-green">{c.title}</td>
              <td className={`py-2 pr-4 ${mode === "good" ? "text-text" : "text-amber"}`}>
                {mode === "good" ? c.good : c.vibe}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> an illustration, not a
        real design. same netlist both ways; both connect and both would pass a
        basic DRC. flip it and look at the same six spots.
      </figcaption>
    </figure>
  );
}
