import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import TweetCarousel, { type CarouselTweet } from "@/components/TweetCarousel";
import BoardTaste from "@/components/BoardTaste";

export const metadata: Metadata = {
  title: "It reads the netlist, it can't route the board",
  description:
    "Vibe hardware, from an EE who designs production boards with AI every day: harness and context engineering, what it's actually good at, why it can't route a board, and why EE needs a benchmark that grades the physics.",
};

const IMAGE_DIR = "/images/blog/vibe-hardware/";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 mb-3 text-lg font-bold text-green glow">
      <span className="text-green-dim">##</span> {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-sm leading-relaxed text-text">{children}</p>;
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="tlink" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="term my-6 border-l-2 border-green px-4 py-3 text-sm leading-relaxed text-text">
      <span className="text-green-dim">{">"}</span> {children}
    </blockquote>
  );
}

// Bulleted list in the terminal style.
function UL({ children }: { children: ReactNode }) {
  return <ul className="mb-5 space-y-2 text-sm leading-relaxed text-text">{children}</ul>;
}

function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="flex-none text-green">▸</span>
      <span>{children}</span>
    </li>
  );
}

function OL({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mb-5 space-y-2 text-sm leading-relaxed text-text">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2">
          <span className="w-5 flex-none text-green">{i + 1}.</span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}

// A table framed as a terminal window. Scrolls sideways inside its own frame
// on narrow screens rather than pushing the page wider.
function Table({
  title,
  head,
  rows,
  note,
}: {
  title: string;
  head: string[];
  rows: ReactNode[][];
  note?: ReactNode;
}) {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] text-left text-xs leading-relaxed">
          <thead>
            <tr className="border-b border-line text-green-dim">
              {head.map((h) => (
                <th key={h} className="px-3 py-2 font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r, i) => (
              <tr key={i} className="align-top">
                {r.map((c, j) => (
                  <td key={j} className={`px-3 py-2 ${j === 0 ? "text-green" : "text-text"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
          <span className="text-green-dim">{"//"}</span> {note}
        </figcaption>
      )}
    </figure>
  );
}

const box = "rounded border border-line bg-black/20 px-2.5 py-1 text-text";

// ------------------------------------------------------------------ //
//  The feed                                                          //
// ------------------------------------------------------------------ //

const TWEETS: CarouselTweet[] = [
  {
    name: "Kai Yang",
    handle: "ChihYang04",
    url: "https://x.com/ChihYang04/status/2095637507337826741",
    text: "GPT-6 Astra doing PCB layout in KiCad 🤯🤯",
    date: "Sep 3, 2026",
    views: "965K",
    image: "x-astra-kicad.jpg",
    caption:
      "the board from OpenAI's launch video, the clip everyone shared. fifteen seconds, condensed from a 2 min 54 s run.",
    kind: "built",
  },
  {
    name: "Peter",
    handle: "Peter05704721",
    url: "https://x.com/Peter05704721/status/2099308253910049209",
    text: "fab sent photos. real FPV board is done.\n\nGPT-6 Astra + EasyEDA. PCB + SMT finished.",
    date: "Sep 14, 2026",
    views: "151K",
    image: "x-fpv-fab.jpg",
    caption:
      "an ESP32-S3 flight controller. it powered on clean and ran PX4 a week later. the design is open source.",
    kind: "built",
  },
  {
    name: "Peter",
    handle: "Peter05704721",
    url: "https://x.com/Peter05704721/status/2097895739242565891",
    text: "Reworked the FPV PCB.\n\nGave GPT-6 Astra a few clean reference boards, then redid IC placement and routing.",
    date: "Sep 10, 2026",
    views: "87K",
    image: "x-fpv-rework.jpg",
    caption:
      "the fix between V1 and V2 was handing it reference boards. that's context engineering. hold that thought.",
    kind: "built",
  },
  {
    name: "GoFly",
    handle: "GoGoFly23",
    url: "https://x.com/GoGoFly23/status/2096436525110309251",
    text: "GPT-6 Astra designing an F405 six-layer flight controller, driving KiCad directly from Codex: schematic, placement, routing, ERC and DRC, Gerbers, BOM, STEP. 3 h 14 min, about 52 million tokens. Not fabbed yet.",
    date: "Sep 6, 2026",
    views: "301K",
    image: "x-f405-six-layer.jpg",
    caption: "fifty-two million tokens for one board. not fabbed yet.",
    kind: "built",
    translated: true,
  },
  {
    name: "Kai Yang",
    handle: "ChihYang04",
    url: "https://x.com/ChihYang04/status/2096088141220479214",
    text: "Astra just ONE-SHOTTED my PCB for Microduck. It's over guys",
    date: "Sep 5, 2026",
    views: "272K",
    image: "x-microduck.jpg",
    caption:
      "the most-critiqued board of the month. the amber cards at the end are about this one.",
    kind: "built",
  },
  {
    name: "Alan (Jialiang) Zhao",
    handle: "alanz_jl",
    url: "https://x.com/alanz_jl/status/2096508475824349566",
    text: "Astra helped me:\n- designed this telescope star tracker PCB\n- created the order for the PCB+assembly on @JLCPCB and checked component stock / optimized for cost along the way\n...\nThen I paid ~$200😅",
    date: "Sep 6, 2026",
    views: "22K",
    image: "x-star-tracker.jpg",
    caption: "the model placed the fab order too.",
    kind: "built",
  },
  {
    name: "Nigel Hungerford-Symes",
    handle: "VectorCrossProd",
    url: "https://x.com/VectorCrossProd/status/2102948414824812739",
    text: "Grok and Opus given the same task: design a USB temperature sensor PCB in KiCad.\nLeft: Grok 4.7 | Right: Claude Opus 5.5\n...\nWhich would you send to fab?",
    date: "Sep 24, 2026",
    views: "140K",
    image: "x-grok-vs-opus.jpg",
    caption: "same prompt, two models, two completely different architectures.",
    kind: "built",
  },
  {
    name: "NULL=RUN",
    handle: "GOROman",
    url: "https://x.com/GOROman/status/2082956011363766686",
    text: "My Famicom ROM dumper is finally finished!\nI had Claude Code Fable design the PCB, write the firmware, and build the web UI, all with AI.\nThe parts ordering and soldering, though, were done by a human (me)! 😄",
    date: "Jul 30, 2026",
    views: "19K",
    image: "x-famicom.jpg",
    caption: "a bench tool for a hobby, start to finish. this is where vibe hardware shines.",
    kind: "built",
  },
  {
    name: "Marco Rossini",
    handle: "PinoZlatan",
    url: "https://x.com/PinoZlatan/status/2097867538189238723",
    text: "NEXUS-16: an STM32-based industrial gateway designed for Ethernet, USB-C, CAN-FD, RS-485 and sensor I/O.\n\nGerber files tomorrow, so you can inspect the result. Still a prototype, not hardware-validated.",
    date: "Sep 10, 2026",
    views: "36K",
    image: "x-nexus16.jpg",
    caption: "sixteen layers. \"not hardware-validated\" is doing a lot of work.",
    kind: "built",
  },
  {
    name: "nim",
    handle: "eminimnim",
    url: "https://x.com/eminimnim/status/2098072497182666987",
    text: "Vibe hardware is here.\n\nI gave Astra my credit card and asked for a Teenage Engineering-style mini DJ controller.\n\nIt generated a concept image, sourced parts, read Chinese datasheets, built a CAD model, ordered everything, then made a Blender animation showing how to assemble it.",
    date: "Sep 10, 2026",
    views: "1.0M",
    image: "x-dj-controller.jpg",
    caption: "the post that put the phrase in everyone's mouth.",
    kind: "built",
  },
  {
    name: "i²cjak",
    handle: "i2cjak",
    url: "https://x.com/i2cjak/status/2096762827948048824",
    text: "Passing ERC/DRC is good but bro there are literally inaccessible connectors on this thing. You need to watch the model like a hawk as it works so it doesn't paint itself into a corner. I'm not convinced a board this complex is even worth letting the LLM route/place.",
    date: "Sep 7, 2026",
    views: "10K",
    caption: "on the Microduck board. i2cjak builds agent tooling for KiCad, so this is not a skeptic talking.",
    kind: "critique",
  },
  {
    name: "BlindVia",
    handle: "blind_via",
    url: "https://x.com/blind_via/status/2096250330900279480",
    text: "Astra doesn't understand pcb user interface requirements. Look at how those screw terminals are being blocked. Good luck getting your wires in there.",
    date: "Sep 5, 2026",
    views: "13K",
    caption: "also on Microduck. a board is a physical object someone has to plug things into.",
    kind: "critique",
  },
  {
    name: "Luke Weston",
    handle: "lukeweston",
    url: "https://x.com/lukeweston/status/2096239564608413718",
    text: "The screw terminal connectors\nThe USB-C connector 😂\nThe generally horrible layout\nThe FFC connector\nThe signal integrity of the CSI diff pairs",
    date: "Sep 5, 2026",
    views: "8K",
    caption: "the whole review, in five lines.",
    kind: "critique",
  },
  {
    name: "Alain-Sam Cohen",
    handle: "alainsamjr",
    url: "https://x.com/alainsamjr/status/2096382254272352602",
    text: "The board uses five track widths. It declares one net class, and that class is empty. So four of those widths can't be checked...\n9 of Astra's 32 vias sit inside pads. On a 4-layer 27-net board.",
    date: "Sep 5, 2026",
    views: "27K",
    image: "x-deeppcb.jpg",
    caption:
      "DeepPCB re-routing the same board. they sell a router, so weigh it accordingly, but the numbers are checkable.",
    kind: "critique",
  },
  {
    name: "Michael W.",
    handle: "Michaelskywal",
    url: "https://x.com/Michaelskywal/status/2095869945053630962",
    text: "Using AI to route PCBs is so funny to me right now, because I feel like I have made all the same mistakes it has, earlier in my carrier...\n1. DP and DM of USB 2.0 being routed terribly\n2. Begging to add a GPIO expander due to routing issues...\n3. Doing the most awful buck converter layout I have ever seen.",
    date: "Sep 4, 2026",
    views: "12K",
    image: "x-usb-routing.jpg",
    caption: "the best take in the pile. he had mentors who made him rip boards up. the model doesn't.",
    kind: "critique",
  },
  {
    name: "kelin",
    handle: "kelin_online",
    url: "https://x.com/kelin_online/status/2090299949426827474",
    text: "shenzhen PM is complaining that all her new clients this year are software engineers switching to hardware who try to vibe-design PCBs that don't work",
    date: "Aug 20, 2026",
    views: "74K",
    caption: "the view from the fab.",
    kind: "critique",
  },
];

// ------------------------------------------------------------------ //
//  Boxes and diagrams                                                //
// ------------------------------------------------------------------ //

function TLDR() {
  return (
    <div className="term my-6 p-4 text-sm leading-relaxed">
      <div className="mb-3 text-xs text-text-dim">
        <span className="text-amber glow-amber">[ tl;dr ]</span>{" "}the whole
        argument
      </div>
      <ul className="space-y-2 text-text">
        <li className="flex gap-2">
          <span className="flex-none text-green">1.</span>
          <span>
            <span className="text-green">Harness and context decide almost everything.</span>{" "}
            Everyone gets the same model. What you hand it is yours.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-none text-green">2.</span>
          <span>
            <span className="text-green">Keep it close to text.</span>{" "}KiCad over
            binary formats, CLIs over MCP, a CLAUDE.md that reads like a header
            file, and never a raw datasheet PDF.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-none text-green">3.</span>
          <span>
            <span className="text-green">It&apos;s superb at translation.</span>{" "}
            Flex pinouts, Gerber diffs, DFM triage: anything that moves
            information between tools that never talked.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-none text-amber">4.</span>
          <span>
            <span className="text-amber">It&apos;s bad at layout.</span>{" "}On real
            industrial boards the best model routes 12.6% of nets cleanly.
            Humans route 93.6%.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex-none text-amber">5.</span>
          <span>
            <span className="text-amber">Half of &ldquo;taste&rdquo; is physics nobody grades.</span>{" "}
            EE needs a layout benchmark with field solvers in the loop.
          </span>
        </li>
      </ul>
    </div>
  );
}

function InfoBox() {
  return (
    <div className="term my-6 p-4 text-xs leading-relaxed">
      <div className="mb-2 text-text-dim">
        <span className="text-amber glow-amber">[ info ]</span>{" "}scope
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        <dt className="text-green-dim">who</dt>
        <dd className="text-text">
          a systems EE at a big hardware company, ex Tesla, using an agent
          every working day
        </dd>
        <dt className="text-green-dim">covers</dt>
        <dd className="text-text">schematic, layout, and the work around them</dd>
        <dt className="text-green-dim">skips</dt>
        <dd className="text-text">firmware, which has been covered to death</dd>
        <dt className="text-green-dim">tools</dt>
        <dd className="text-text">Claude Code, KiCad at home, my employer&apos;s tools at work</dd>
        <dt className="text-green-dim">shelf life</dt>
        <dd className="text-amber glow-amber">written October 2026. parts will be wrong by Christmas</dd>
      </dl>
    </div>
  );
}

function HeaderFile() {
  const rows: [string, string, string][] = [
    ["parts", "kb/parts/index.md", "one line per part; open the one you need"],
    ["datasheets", "kb/datasheets/<mpn>.md", "OCR'd markdown, never the PDF"],
    ["system", "kb/system/interconnect.md", "what this board plugs into"],
    ["tools", "parts · tracker · gerber-diff", "run --help to learn each one"],
    ["rule", "cite the datasheet page for every pin claim", "the CSA lesson, below"],
  ];
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ cat CLAUDE.md · declarations, not definitions
      </div>
      <div className="space-y-2 p-4 text-xs leading-relaxed">
        <div className="text-green-dim">{"// always loaded. about forty lines. each one points somewhere."}</div>
        {rows.map(([k, v, c]) => (
          <div key={k} className="grid gap-x-3 sm:grid-cols-[6rem_1fr]">
            <span className="text-cyan">{k}:</span>
            <span>
              <span className="text-text">{v}</span>{" "}
              <span className="text-green-dim">{"//"} {c}</span>
            </span>
          </div>
        ))}
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span>{" "}the files on the right
        stay on disk until a question needs them. a pointer costs one line.
      </figcaption>
    </figure>
  );
}

function VisionPipeline() {
  const step = (n: string, children: ReactNode, sub?: string) => (
    <div className="flex items-start gap-3">
      <span className="w-5 flex-none pt-1 text-green-dim">{n}</span>
      <div>
        <div className={box}>{children}</div>
        {sub && <div className="mt-1 text-text-dim">{sub}</div>}
      </div>
    </div>
  );
  const down = <div className="pl-8 text-green-dim">↓</div>;
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ ./datasheet-to-tokens.sh · top to bottom
      </div>
      <div className="space-y-2 p-4 text-xs">
        {step("1", "datasheet.pdf")}
        {down}
        {step("2", "Unlimited-OCR on my laptop (MLX)", "reads every page; flags what it can't handle")}
        {down}
        <div className="grid gap-3 pl-8 sm:grid-cols-2">
          <div className="rounded border border-line-bright p-3">
            <div className="mb-1 text-green">body text</div>
            <div className="text-text">written straight out as markdown</div>
          </div>
          <div className="rounded border border-amber/60 p-3">
            <div className="mb-1 text-amber">tables + figures it flagged</div>
            <div className="text-text">
              cropped to an image, sent to a headless{" "}
              <span className="text-cyan">claude -p</span>, written back as
              markdown
            </div>
          </div>
        </div>
        {down}
        {step("3", "kb/datasheets/<mpn>.md", "merged, greppable, a fraction of the tokens")}
        {down}
        {step("4", "one new line in the index", "so the model knows it exists")}
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span>{" "}the free local model
        does the bulk. the expensive one only sees the parts that need eyes.
      </figcaption>
    </figure>
  );
}

const SPATIAL: {
  task: string;
  source: string;
  href: string;
  baseline: string;
  human: number;
  model: number;
  who: string;
  can: boolean;
  note?: string;
}[] = [
  {
    task: "abstract grid puzzles",
    source: "ARC-AGI-3",
    href: "https://arcprize.org/leaderboard",
    baseline: "solvable",
    human: 100,
    model: 99.9,
    who: "GPT-6 Astra · Sep 2026",
    can: true,
    note: "100% means every game beaten as efficiently as a human",
  },
  {
    task: "2D mental rotation",
    source: "SpatialViz",
    href: "https://arxiv.org/abs/2507.07610",
    baseline: "human",
    human: 90.0,
    model: 91.3,
    who: "GPT-5 · Dec 2025",
    can: true,
  },
  {
    task: "3D mental rotation",
    source: "SpatialViz",
    href: "https://arxiv.org/abs/2507.07610",
    baseline: "human",
    human: 79.2,
    model: 33.8,
    who: "GPT-5-mini · Dec 2025",
    can: false,
    note: "chance is 25%",
  },
  {
    task: "multi-view spatial reasoning",
    source: "MMSI-Bench",
    href: "https://arxiv.org/abs/2505.23764",
    baseline: "human",
    human: 97.2,
    model: 45.2,
    who: "Gemini 3 Pro · 2026, third-party eval",
    can: false,
  },
  {
    task: "routing real boards, nets DRC-clean",
    source: "OmniRouting",
    href: "https://arxiv.org/abs/2608.04434",
    baseline: "human",
    human: 93.6,
    model: 12.6,
    who: "best model, no tools · Aug 2026",
    can: false,
  },
];

function SpatialBars() {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ spatial.log · best model on each test vs the human baseline
      </div>
      <div className="space-y-5 p-4 text-xs">
        {SPATIAL.map((r) => (
          <div key={r.task}>
            <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-3">
              <span className="text-text">
                <span className={r.can ? "text-green" : "text-amber glow-amber"}>
                  [{r.can ? "can" : "can't"}]
                </span>{" "}
                {r.task}
              </span>
              <A href={r.href}>{r.source} ↗</A>
            </div>
            {[
              [r.baseline, r.human, "bg-text-dim", "text-text-dim"],
              ["model", r.model, r.can ? "bg-green" : "bg-amber", r.can ? "text-green" : "text-amber"],
            ].map(([label, v, bar, txt]) => (
              <div key={label as string} className="mt-1 flex items-center gap-2">
                <span className="w-16 flex-none text-text-dim">{label}</span>
                <div className="h-2.5 flex-1 bg-line/40">
                  <div className={`h-full ${bar}`} style={{ width: `${v}%` }} />
                </div>
                <span className={`w-12 flex-none text-right ${txt}`}>{v}%</span>
              </div>
            ))}
            <div className="mt-1 text-text-dim">
              {r.who}
              {r.note ? ` · ${r.note}` : ""}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span>{" "}each row is a different
        test, model, and date; there are no 2026 numbers for most of them yet.
        the pattern is what matters: flat and discrete is solved, 3D and
        routing are not.
      </figcaption>
    </figure>
  );
}

function PatchMath() {
  return (
    <Table
      title="what one visual token sees"
      head={["step", "value"]}
      rows={[
        ["the image", "a 100 mm board, shown edge to edge at 2576 px"],
        [
          "one patch",
          <>
            28 × 28 px (
            <A href="https://platform.claude.com/docs/en/build-with-claude/vision">Claude&apos;s vision docs</A>)
          </>,
        ],
        ["so one token covers", "about 1.1 × 1.1 mm of board"],
        [
          "inside that square",
          <span key="x" className="text-amber">
            a 0.1 mm trace, its clearance, and a whole 0.4 mm-pitch BGA ball
          </span>,
        ],
      ]}
    />
  );
}

const LADDER: { check: string; graded: string; tool: string }[] = [
  { check: "every net connected", graded: "OmniRouting, PCBWorld, every demo", tool: "kicad-cli" },
  { check: "DRC / ERC clean", graded: "OmniRouting, PCBWorld, every demo", tool: "kicad-cli" },
  { check: "circuit works in SPICE at tolerance corners", graded: "EEBench (schematic only)", tool: "ngspice" },
  { check: "copper balance per layer", graded: "nobody", tool: "kicad-cli exports + a script" },
  { check: "PDN impedance, DC IR drop", graded: "nobody", tool: "Elmer, ngspice" },
  { check: "impedance, crosstalk, return paths", graded: "nobody", tool: "openEMS, gerber2ems" },
  { check: "radiated emissions", graded: "nobody", tool: "openEMS (slow)" },
  { check: "works at ten thousand units", graded: "nobody", tool: "none. only reality grades this" },
];

function VerifyLadder() {
  return (
    <Table
      title="what AI benchmarks grade today, easiest first"
      head={["check", "graded by", "open, headless tool that could grade it"]}
      rows={LADDER.map((r) => [
        r.check,
        <span key="g" className={r.graded === "nobody" ? "text-amber glow-amber" : "text-text"}>
          {r.graded}
        </span>,
        <span key="t" className="text-text-dim">
          {r.tool}
        </span>,
      ])}
      note="fab DRC and commercial SI/PI tools check several of these for human designers. nobody scores a model on them."
    />
  );
}

const USES: {
  group: string;
  rows: { task: string; how: string; verdict: "great" | "good" | "meh" }[];
}[] = [
  {
    group: "office and search",
    rows: [
      { task: "issue-tracker archaeology", how: "someone hit this three years ago on another program. the agent finds it with a query instead of me with a memory", verdict: "great" },
      { task: "chat history", how: "summarize the thread I just got pulled into; have we seen this before in the tool support channels", verdict: "great" },
      { task: "email and chat drafts", how: "boring, works", verdict: "great" },
      { task: "status decks and design reviews", how: "point it at a project's chat history and files. prompt: fewer words, more visuals, keep the detail", verdict: "good" },
      { task: "questions over the KB", how: "what's the SWD pinout; what's the input leakage; table these op amps by offset voltage", verdict: "great" },
    ],
  },
  {
    group: "parts and datasheets",
    rows: [
      { task: "parts database search", how: "find an op amp that meets the spec, has an active lifecycle, and is already used in another product. subagents crawl, I pick", verdict: "great" },
      { task: "datasheets to markdown", how: "the OCR pipeline above", verdict: "good" },
      { task: "standards", how: "many are already in the weights. the rest, once out of PDF, are easy to query", verdict: "good" },
    ],
  },
  {
    group: "schematic",
    rows: [
      { task: "quick-start calculators", how: "screenshot or netlist of the skeleton, then an Excel model of the circuit to play with. Excel because every other engineer already knows how to use one", verdict: "great" },
      { task: "format translation", how: "schematic to SPICE netlist, netlist to spreadsheet, and back", verdict: "good" },
      { task: "symbols and footprints", how: "about 80% of the way from the datasheet. you check the rest", verdict: "good" },
      { task: "ERC setup and runs", how: "natural language in, rules out, then it runs them", verdict: "good" },
      { task: "DFMEA, FMEA, HARA", how: "all text. with system and board context, close to automatic. this is what sev10 is for", verdict: "great" },
      { task: "SPICE simulation", how: "hasn't gone well for me in LTspice. I also haven't put real harness work into it", verdict: "meh" },
    ],
  },
  {
    group: "layout and mechanical",
    rows: [
      { task: "flex fanout planning", how: "pinout copied from a reference flex, breakout planned, outline drawn in Matplotlib, exported as IDX", verdict: "great" },
      { task: "pin-1 interconnect chains", how: "board to flex to connector to board, checked in 3D through the bends", verdict: "great" },
      { task: "Gerber diffs", how: "overlay two revisions and report what moved. it has every coordinate", verdict: "great" },
      { task: "pictures for mechanical engineers", how: "the layout, grayed out except the one thing they need to see", verdict: "great" },
      { task: "design rules", how: "from a standard or the fab's capability sheet", verdict: "good" },
      { task: "STEP fit checks", how: "board in enclosure, at home. cuts out a round trip to an ME", verdict: "good" },
      { task: "placement and routing", how: "see section five", verdict: "meh" },
    ],
  },
  {
    group: "manufacturing and debug",
    rows: [
      { task: "DFM triage", how: "pull the supplier's comments from the tracker, check each against the design files and our guidelines, flag the few that need a human", verdict: "great" },
      { task: "log analysis", how: "update and flashing failures on a large embedded product. paste the logs, give it the context", verdict: "great" },
    ],
  },
];

function UseTable() {
  const tag = (v: "great" | "good" | "meh") =>
    v === "great" ? (
      <span className="text-green">great</span>
    ) : v === "good" ? (
      <span className="text-cyan">good</span>
    ) : (
      <span className="text-amber">meh</span>
    );
  return (
    <details open className="term my-6 overflow-hidden">
      <summary className="cursor-pointer list-none border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim transition hover:text-text [&::-webkit-details-marker]:hidden">
        ▸ cat everything-i-use-it-for.md · {USES.reduce((n, g) => n + g.rows.length, 0)} uses · click to collapse
      </summary>
      <div className="space-y-5 p-4 text-xs leading-relaxed">
        {USES.map((g) => (
          <div key={g.group}>
            <div className="mb-2 font-bold text-green glow">
              <span className="text-green-dim">##</span> {g.group}
            </div>
            <div className="divide-y divide-line border-y border-line">
              {g.rows.map((r) => (
                <div key={r.task} className="grid gap-x-3 py-1.5 sm:grid-cols-[11rem_1fr_3rem]">
                  <span className="text-text">{r.task}</span>
                  <span className="text-text-dim">{r.how}</span>
                  <span className="sm:text-right">{tag(r.verdict)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span>{" "}steal anything. the verdicts
        are mine, as of this month.
      </div>
    </details>
  );
}

const SOURCES: { group: string; links: [string, string][] }[] = [
  {
    group: "harness and context",
    links: [
      ["Claude-shaped science, Matthew Schwartz (Anthropic, Oct 2026)", "https://www.anthropic.com/research/claude-shaped-science"],
      ["BootLoops", "https://github.com/BootLoops-ai/bootloops"],
      ["Harness design for long-running application development (Anthropic)", "https://www.anthropic.com/engineering/harness-design-long-running-apps"],
      ["Effective context engineering for AI agents (Anthropic)", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"],
      ["Tobi Lütke on \"context engineering\"", "https://x.com/tobi/status/1935533422589399127"],
      ["Andrej Karpathy on \"context engineering\"", "https://x.com/karpathy/status/1937902205765607626"],
      ["Claude Code best practices", "https://code.claude.com/docs/en/best-practices"],
      ["Claude Code memory and @imports", "https://code.claude.com/docs/en/memory"],
      ["Agent Skills and progressive disclosure (Anthropic)", "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"],
      ["Writing a good CLAUDE.md (HumanLayer)", "https://www.humanlayer.dev/blog/writing-a-good-claude-md"],
      ["Code execution with MCP (Anthropic)", "https://www.anthropic.com/engineering/code-execution-with-mcp"],
      ["What if you don't need MCP at all? (Mario Zechner)", "https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/"],
      ["MCP vs CLI benchmark (Scalekit)", "https://www.scalekit.com/blog/mcp-vs-cli-use"],
      ["Prompting best practices (Anthropic)", "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"],
      ["LLM Wiki (Karpathy)", "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"],
    ],
  },
  {
    group: "datasheets",
    links: [
      ["Unlimited-OCR (Baidu)", "https://github.com/baidu/Unlimited-OCR"],
      ["Unlimited-OCR, MLX 4-bit", "https://huggingface.co/mlx-community/Unlimited-OCR-4bit"],
      ["Claude PDF support", "https://platform.claude.com/docs/en/build-with-claude/pdf-support"],
      ["Why reading PDFs is hard (LlamaIndex)", "https://www.llamaindex.ai/blog/why-reading-pdfs-is-hard"],
      ["A local-LLM datasheet extractor (Ari Mahpour, Altium)", "https://resources.altium.com/p/building-local-llm-datasheet-extractor-ic-driver-development"],
      ["Microchip's MCP server", "https://www.nasdaq.com/press-release/microchip-technology-unveils-model-context-protocol-mcp-server-power-ai-driven"],
      ["TI product information API", "https://www.ti.com/developer-api/product-information-api-suite/getting-started.html"],
      ["Hardware MCP servers, six months later (Veecle)", "https://veecle.ai/blog/hardware-mcp-servers-2026"],
      ["datasheets.md", "https://datasheets.md/"],
    ],
  },
  {
    group: "tools and people",
    links: [
      ["Backplane (i2cjak)", "https://github.com/i2cjak/Backplane"],
      ["Eli Hughes on Altium file parsing and AI design reviews", "https://podcast.altium.com/e/altium-file-parsing-ai-design-reviews-pcb-viz-tools/"],
      ["atopile", "https://github.com/atopile/atopile"],
      ["Copperhead", "https://github.com/copperheadhq/copperhead"],
      ["Quilter on the Astra demo", "https://www.quilter.ai/blog/llm-pcb-layout-gpt-6-astra"],
      ["JLCPCB's review of an Astra board", "https://jlcpcb.com/blog/gpt-6-astra-pcb-design-in-kicad"],
      ["Hackaday: Can AI now design PCBs that just work?", "https://hackaday.com/2026/09/05/can-ai-now-design-pcbs-that-just-work/"],
      ["S3-PX4-FC, the open-source FPV board", "https://github.com/hx23840/S3-PX4-FC"],
    ],
  },
  {
    group: "spatial reasoning and routing",
    links: [
      ["OmniRouting (Aug 2026)", "https://arxiv.org/abs/2608.04434"],
      ["PCBWorld (Jul 2026)", "https://arxiv.org/abs/2607.05915"],
      ["SpatialViz-Bench", "https://arxiv.org/abs/2507.07610"],
      ["MMSI-Bench", "https://arxiv.org/abs/2505.23764"],
      ["EASI: holistic spatial evaluation", "https://arxiv.org/abs/2508.13142"],
      ["Spatial Competence Benchmark", "https://arxiv.org/abs/2604.09594"],
      ["ARC Prize leaderboard", "https://arcprize.org/leaderboard"],
      ["Claude vision docs", "https://platform.claude.com/docs/en/build-with-claude/vision"],
    ],
  },
  {
    group: "benchmarks and verification",
    links: [
      ["EEBench", "https://eebench.org/"],
      ["EEBench methodology", "https://eebench.org/methodology.html"],
      ["Can AI design circuit boards yet? (EEBench)", "https://eebench.org/blog/can-ai-design-circuit-boards-yet/"],
      ["HWE-Bench (Mar 2026)", "https://arxiv.org/abs/2603.18102"],
      ["KiCad 10 release notes", "https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/"],
      ["openEMS", "https://github.com/thliebig/openEMS"],
      ["gerber2ems (Antmicro)", "https://github.com/antmicro/gerber2ems"],
      ["Elmer FEM", "https://github.com/ElmerCSC/elmerfem"],
      ["PyAEDT", "https://github.com/ansys/pyaedt"],
    ],
  },
];

function Sources() {
  return (
    <details className="term my-6 overflow-hidden">
      <summary className="cursor-pointer list-none border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim transition hover:text-text [&::-webkit-details-marker]:hidden">
        ▸ cat sources.md · every link in this post · click to expand
      </summary>
      <div className="space-y-4 p-4 text-xs leading-relaxed">
        {SOURCES.map((g) => (
          <div key={g.group}>
            <div className="mb-1 text-green-dim">{"//"} {g.group}</div>
            <ul className="space-y-0.5">
              {g.links.map(([t, h]) => (
                <li key={h}>
                  <A href={h}>{t} ↗</A>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

// ------------------------------------------------------------------ //
//  The post                                                          //
// ------------------------------------------------------------------ //

export default function VibeHardwarePost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          path="~/blog"
          command="cat vibe-hardware.md"
          title="It reads the netlist, it can't route the board, and nobody grades the physics"
        >
          Vibe hardware, from someone who designs boards with AI every day ·
          2026-10-04
        </SectionHeader>

        <article>
          <div className="term my-6 px-4 py-3 text-xs leading-relaxed text-text-dim">
            <span className="text-amber glow-amber">[ note ]</span>{" "}written in
            a personal capacity. Work examples are kept generic on purpose: no
            products, no internal systems by name. Nothing here is my
            employer&apos;s view.
          </div>

          <P>
            On September 3rd OpenAI launched GPT-6 Astra. One of the launch
            demos was fifteen seconds of the model doing PCB layout in KiCad.
            Within a week my feed was wall to wall circuit boards, and the name
            for all of it is vibe hardware.
          </P>

          <TweetCarousel dir={IMAGE_DIR} tweets={TWEETS} title="vibe-hardware" />

          <P>
            I design production hardware at a big company, and I use AI to do
            it every working day. I have an opinion on this, and it isn&apos;t
            the one the feed suggests.
          </P>

          <TLDR />
          <InfoBox />

          <H2>1. Know what your model is good at</H2>

          <P>Two terms do most of the work in this post:</P>

          <UL>
            <LI>
              <span className="text-green">Harness:</span>{" "}everything wrapped
              around the model. The tools it can call, the files it can read,
              the instructions it starts with, the loop it runs in.
            </LI>
            <LI>
              <span className="text-green">Context:</span>{" "}what&apos;s in front
              of it when it answers. Which schematic, which datasheet, which
              slice of the system. (
              <A href="https://x.com/tobi/status/1935533422589399127">Tobi Lütke</A>{" "}
              and{" "}
              <A href="https://x.com/karpathy/status/1937902205765607626">Andrej Karpathy</A>{" "}
              made &ldquo;context engineering&rdquo; the name for this last
              year.)
            </LI>
          </UL>

          <P>
            Everyone gets the same model. The harness and the context are
            yours, and they account for nearly all of the difference between a
            great result and a frustrating one.
          </P>

          <P>
            The best thing I&apos;ve read on this is{" "}
            <A href="https://www.anthropic.com/research/claude-shaped-science">
              Claude-shaped science
            </A>
            , by Matthew Schwartz, a Harvard physicist who spent months trying
            to make Claude do physics his way. It didn&apos;t work. What worked
            was turning it around:
          </P>

          <Pull>
            Instead of treating Claude like the collaborator I wanted it to
            be, I started to treat it like the collaborator it actually is.
          </Pull>

          <P>
            He found the problems that suited it, built a harness called{" "}
            <A href="https://github.com/BootLoops-ai/bootloops">BootLoops</A>{" "}
            to steer it there, and got thirty-six manuscripts out. That&apos;s
            the whole skill in EE too: know where the model is superhuman and
            where it&apos;s worse than an intern, and keep it on the right side
            of that line. The line moves every few months.
          </P>

          <H2>2. Harness: get the model close to the files</H2>

          <P>
            Models are best at text. Everything else is a translation layer
            that costs accuracy and tokens. Three rules follow:
          </P>

          <Table
            title="three harness rules"
            head={["rule", "why", "evidence"]}
            rows={[
              [
                "Store designs as text",
                "The agent reads the schematic, netlist, and board directly, and can patch the tool itself.",
                <>
                  KiCad; i2cjak&apos;s{" "}
                  <A href="https://github.com/i2cjak/Backplane">Backplane</A>{" "}
                  shows every agent edit to a board live
                </>,
              ],
              [
                "Prefer CLIs to MCP",
                "Every MCP server loads its tool definitions into context on every turn.",
                <>
                  Playwright MCP:{" "}
                  <A href="https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/">13.7k tokens</A>{" "}
                  before you&apos;ve done anything. MCP costs{" "}
                  <A href="https://www.scalekit.com/blog/mcp-vs-cli-use">4–32×</A>{" "}
                  more tokens
                </>,
              ],
              [
                "Write CLAUDE.md like a header file",
                "Declarations stay in context; definitions stay on disk until something calls them.",
                <>
                  Anthropic&apos;s{" "}
                  <A href="https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills">progressive disclosure</A>
                  ; HumanLayer&apos;s{" "}
                  <A href="https://www.humanlayer.dev/blog/writing-a-good-claude-md">&ldquo;prefer pointers to copies&rdquo;</A>
                </>,
              ],
            ]}
          />

          <P>
            If I were starting a hardware company tomorrow, I wouldn&apos;t pick
            an ECAD tool that stores designs as binaries. The counterexample is{" "}
            <A href="https://podcast.altium.com/e/altium-file-parsing-ai-design-reviews-pcb-viz-tools/">
              Eli Hughes
            </A>
            , who wrote open-source parsers to crack Altium files open for
            Claude and Codex. So binary isn&apos;t impossible. Someone just has
            to build the bridge first, and in KiCad it&apos;s already built.
          </P>

          <P>
            The other extreme is{" "}
            <A href="https://github.com/atopile/atopile">atopile</A>, which
            describes the whole circuit as code. At Tesla there was a real push
            to use it. My problem with it then and now: there&apos;s no
            schematic. Models love that. Electronics engineers want a
            schematic.
          </P>

          <P>
            On CLIs: at work, a lot of my harness is small command-line tools
            the agent wrote for our internal web tools. The parts database, the
            issue tracker, the place suppliers post DFM comments. I describe
            what I want; it builds the command. Anthropic&apos;s{" "}
            <A href="https://code.claude.com/docs/en/best-practices">own docs</A>{" "}
            agree: &ldquo;CLI tools are the most context-efficient way to
            interact with external services.&rdquo;
          </P>

          <P>And here&apos;s the header file. Mine looks roughly like this:</P>

          <HeaderFile />

          <P>
            One gotcha: Claude Code&apos;s{" "}
            <span className="text-cyan">@path</span>{" "}import{" "}
            <A href="https://code.claude.com/docs/en/memory">loads the whole file at launch</A>
            . That&apos;s an #include, not a pointer. A plain sentence saying
            where the file lives works better.
          </P>

          <H2>3. Context: the model is an expert in a box</H2>

          <P>
            The mistake I see most, from good engineers: paste a circuit
            question into a chat window, get a wrong answer, decide the model
            is dumb.
          </P>

          <P>
            Try this instead. You&apos;re a very good EE. Someone locks you in a
            box, slides a schematic you&apos;ve never seen under the door, and
            asks if the current-sense amp is hooked up right. No datasheet, no
            system diagram. You&apos;d guess, you&apos;d mostly be right, and
            sometimes you&apos;d be confidently wrong. That&apos;s the model,
            every time you ask it something cold.
          </P>

          <P>
            I did exactly this to myself this week. I was designing a
            current-sense amplifier circuit without the part&apos;s datasheet
            in my knowledge base, and the model told me, with total confidence,
            that the ground pin could go to a negative rail. It can&apos;t. The
            model didn&apos;t change between that answer and the right one. The
            datasheet did.
          </P>

          <P>For a board, &ldquo;context&rdquo; means:</P>

          <UL>
            <LI>
              <span className="text-green">Every datasheet on the sheet</span>,
              as text. More on that below.
            </LI>
            <LI>
              <span className="text-green">The system around the board.</span>{" "}
              Every connector, harness, and module on the other end. At Tesla I
              could export that from an in-house tool. Most places, it lives in
              your systems engineer&apos;s head, so go get it.
            </LI>
            <LI>
              <span className="text-green">History.</span>{" "}Past issues, design
              rules, the last three revisions.
            </LI>
            <LI>
              <span className="text-green">An index on top</span>, so it only
              opens what it needs. I use a version of Karpathy&apos;s{" "}
              <A href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f">LLM wiki</A>
              . It works; it&apos;s also a chore to keep current.
            </LI>
          </UL>

          <P>
            My biggest pet peeve is the raw datasheet PDF dropped into a chat.
            Three things go wrong:
          </P>

          <UL>
            <LI>
              <span className="text-amber">It isn&apos;t really text.</span>{" "}A
              PDF stores instructions for drawing glyphs. Reading order and
              tables have to be reconstructed (
              <A href="https://www.llamaindex.ai/blog/why-reading-pdfs-is-hard">LlamaIndex explains why</A>
              ).
            </LI>
            <LI>
              <span className="text-amber">It&apos;s expensive.</span>{" "}Claude{" "}
              <A href="https://platform.claude.com/docs/en/build-with-claude/pdf-support">sees each page</A>{" "}
              as an image plus text, 1,500 to 3,000 tokens a page. One
              datasheet can eat your context before you&apos;ve asked anything.
            </LI>
            <LI>
              <span className="text-amber">Agents grep it.</span>{" "}The ones that
              shell out to a text extractor are searching a document that was
              never meant to be searched.
            </LI>
          </UL>

          <P>
            So I pre-digest every datasheet, with Baidu&apos;s{" "}
            <A href="https://github.com/baidu/Unlimited-OCR">Unlimited-OCR</A>{" "}
            running locally through{" "}
            <A href="https://huggingface.co/mlx-community/Unlimited-OCR-4bit">MLX</A>{" "}
            and Claude for the hard parts. Ari Mahpour at Altium{" "}
            <A href="https://resources.altium.com/p/building-local-llm-datasheet-extractor-ic-driver-development">
              built something similar
            </A>
            .
          </P>

          <VisionPipeline />

          <P>
            This won&apos;t be necessary forever. Datasheets are written for
            people, and their main reader is becoming a model. Where the
            vendors are, as of this fall:
          </P>

          <Table
            title="machine-readable datasheets, october 2026"
            head={["who", "what exists"]}
            rows={[
              [
                "Microchip",
                <A key="m" href="https://www.nasdaq.com/press-release/microchip-technology-unveils-model-context-protocol-mcp-server-power-ai-driven">
                  a free, public MCP server for its catalog
                </A>,
              ],
              [
                "TI",
                <A key="t" href="https://www.ti.com/developer-api/product-information-api-suite/getting-started.html">
                  a JSON product API, approved customers only
                </A>,
              ],
              [
                "ST, Infineon, Renesas",
                <A key="s" href="https://veecle.ai/blog/hardware-mcp-servers-2026">
                  no official server as of August
                </A>,
              ],
              ["datasheets.md", <A key="d" href="https://datasheets.md/">a startup re-extracting the PDFs</A>],
              ["a standard", "none for a whole datasheet, graphs and all"],
            ]}
          />

          <P>
            I&apos;d bet heavily on that last row changing. Machine-readable
            datasheets were the backup idea on my{" "}
            <Link href="/blog/yc-interview" className="tlink">
              YC application
            </Link>
            .
          </P>

          <H2>4. What it&apos;s actually good at: translation</H2>

          <P>
            With the harness and context in place, the surprise isn&apos;t any
            one task. It&apos;s that the model is a universal adapter. Hardware
            is full of files that were never meant to talk to each other, and I
            used to spend a lot of my day carrying information between them by
            hand.
          </P>

          <P>
            The best example is a test flex I designed recently. A board has a
            36-signal board-to-board connector, and we wanted every signal
            broken out to 2.54 mm headers for bench probing. The reference flex
            has a bend; this one had to come out straight. I gave the agent the
            reference pinout and the four-layer FCCL stackup.
          </P>

          <P>
            It assigned every net, planned the fanout, drew the outline in
            Matplotlib, and exported IDX for the mechanical side. (A board
            outline is the same problem as an SVG, which these models are
            great at.) I checked every pin by hand and changed nothing. It
            isn&apos;t fabbed yet, but an afternoon became a prompt.
          </P>

          <Table
            title="translations I run every week"
            head={["from", "to", "what it catches"]}
            rows={[
              ["reference flex pinout", "new flex breakout + IDX outline", "an afternoon of manual pin mapping"],
              ["board → flex → connector → board", "interconnect table, checked in 3D", "mirrored footprints, flips through a bend, pin 1 landing on pin 36"],
              ["Gerber rev A + rev B", "an overlay diff", "what actually moved, without flicking between windows"],
              ["the layout", "a picture for the mechanical engineer", "everything grayed out except the one thing they need"],
              ["supplier DFM comments", "a triage list against our guidelines", "which comments are real. most aren't"],
              ["schematic", "an Excel quick-start calculator", "the design math, in a format every engineer can poke at"],
            ]}
          />

          <P>
            The gap is simulation. Even with text netlists, I haven&apos;t had
            good results getting it to build and run LTspice models, though I
            haven&apos;t put real harness work into it. Here&apos;s everything
            else, sorted by where it sits in the job:
          </P>

          <UseTable />

          <H2>5. It can rotate a shape. It can&apos;t route a board.</H2>

          <P>
            Back to the feed. Everyone is excited about layout, and layout is
            where the models are weakest.
          </P>

          <P>
            &ldquo;LLMs aren&apos;t shape rotators&rdquo; turns out to be too
            blunt. They&apos;ve gotten very good at flat, discrete spatial
            problems. What they still can&apos;t do is continuous geometry in
            3D, or hundreds of constraints over a large area at once. That is a
            description of a circuit board.
          </P>

          <SpatialBars />

          <P>
            The board-specific numbers are worse.{" "}
            <A href="https://arxiv.org/abs/2608.04434">OmniRouting</A>{" "}gave
            routers 1,681 real industrial boards with placements engineers had
            already proven routable:
          </P>

          <Table
            title="OmniRouting, Aug 2026: share of nets connected and DRC-clean"
            head={["who routed it", "nets clean"]}
            rows={[
              ["human engineers", "93.6%"],
              ["a classic algorithmic router (PcbRouter)", "56.2%"],
              ["best model, with every tool", "28.0%"],
              [<span key="b" className="text-amber">best model, on its own</span>, <span key="v" className="text-amber">12.6%</span>],
            ]}
            note="the models also routed ground as ordinary traces instead of pours."
          />

          <P>
            <A href="https://arxiv.org/abs/2607.05915">PCBWorld</A>{" "}found the
            same shape: a GPT-5.4 agent cleanly routed 65% of small real boards
            and none of the medium ones. A tiny RL policy trained only against
            a DRC checker beat it on both.
          </P>

          <P>Two reasons, as far as I can tell:</P>

          <UL>
            <LI>
              <span className="text-green">It can&apos;t see the copper.</span>{" "}
              Images arrive as 28-pixel patches. The arithmetic is below.
            </LI>
            <LI>
              <span className="text-green">It has no picture to update.</span>{" "}
              The board exists to the model as a list of coordinates, and
              nothing redraws a mental map when one moves. The{" "}
              <A href="https://arxiv.org/abs/2604.09594">Spatial Competence Benchmark</A>{" "}
              calls the result &ldquo;locally plausible geometry that breaks
              global constraints.&rdquo; Every segment looks fine. The board is
              shorted.
            </LI>
          </UL>

          <PatchMath />

          <P>Here&apos;s what experienced EEs piled on in the feed:</P>

          <UL>
            <LI>connectors you can&apos;t physically reach (i2cjak)</LI>
            <LI>screw terminals you can&apos;t get a wire into (blind_via)</LI>
            <LI>USB and camera differential pairs wandering across the board (Luke Weston, Michael W.)</LI>
            <LI>9 of 32 vias in pads, and five track widths under one empty net class, so DRC had nothing to check them against (DeepPCB)</LI>
            <LI>&ldquo;the most awful buck converter layout I have ever seen&rdquo; (Michael W.)</LI>
          </UL>

          <P>
            And that&apos;s only what shows up in a screenshot. Most of these
            boards would work on a bench. Think about ESD, EMC, SI and PI, or
            building ten thousand, and they fall apart. The bucks are the worst:
            sprawling hot loops, giant switch nodes, inductors on the far side
            of the board.
          </P>

          <P>
            What I&apos;d do instead is let the model drive the tool that was
            built for geometry:
          </P>

          <OL
            items={[
              "The model reads the stackup, the datasheets, and the fab's capability sheet.",
              "It writes the net classes, widths, clearances, and layer rules. Nobody likes doing this, which is why autorouters get a bad name.",
              "The autorouter does the geometry. Given good constraints it will escape a BGA with dogbones on the layers you pick (there's an old EEVblog video on exactly this).",
              "The model checks DRC and diffs the result; a human routes or reviews the critical nets.",
            ]}
          />

          <P>
            JLCPCB&apos;s{" "}
            <A href="https://jlcpcb.com/blog/gpt-6-astra-pcb-design-in-kicad">review of an Astra board</A>{" "}
            suggests the model already does a version of this: it hand-routed
            the power and switching nets and gave the rest to Freerouting. I
            haven&apos;t run the loop end to end myself yet. It&apos;s next.
          </P>

          <H2>6. Taste is scar tissue</H2>

          <P>
            The usual answer to all this is that models lack taste. That&apos;s
            half right, so start with the half that is.
          </P>

          <P>
            Taste comes from doing it wrong once. A board fails EMC, you spend
            days in the chamber learning about orientation, loop area, and
            field geometry, and after that you check every board for that
            extreme. A fab explains what an unbalanced stackup does in reflow,
            and now you can glance at a layout and tell whether the designer
            thought about how much copper the acid takes off each layer.
          </P>

          <P>
            Here&apos;s the same board both ways, and the six places I look in
            the first thirty seconds. Flip the toggle.
          </P>

          <BoardTaste />

          <P>
            A newbie can look at a board from a top-tier company and see that
            it&apos;s good, but can&apos;t say why. The model is the opposite.
            It has the words: the loop-area rules, the EMC textbooks, every buck
            layout app note. It doesn&apos;t have the analogies, the reflex
            that says this looks like the board that failed in the chamber. It
            designs from first principles every time, because it&apos;s still
            in the box.
          </P>

          <H2>7. Half of taste is physics nobody grades</H2>

          <P>
            Now the half I don&apos;t buy. Look at those six callouts again.
            Most of them aren&apos;t taste. They&apos;re physics with a number
            attached:
          </P>

          <Table
            title="what an EE glances at vs what it actually is"
            head={["the glance", "the physics", "what measures it"]}
            rows={[
              ["① ESD placement", "inductance of the clamp path", "partly rules, partly extraction"],
              ["② buck input loop", "hot-loop inductance", "parasitic extraction"],
              ["③ switch node size", "radiating copper area at the switching edge", "EM solver"],
              ["④ decoupling placement", "PDN impedance vs frequency", "PDN analysis"],
              ["⑤ slot in the ground", "return-path discontinuity", "SI field solve"],
              ["⑥ copper balance", "copper area ratio per layer", "a twenty-line script"],
            ]}
            note="we call it taste because nobody can run a field solver in their head, so we compress years of results into a glance."
          />

          <P>
            Models get good at whatever can be checked automatically. That&apos;s
            why they got good at code first: you can run the tests. Here&apos;s
            what gets checked in EE today:
          </P>

          <VerifyLadder />

          <P>
            <A href="https://eebench.org/">EEBench</A>, from the atopile team, is
            the best EE benchmark there is: real parts, ngspice at tolerance
            corners, BOM cost, no LLM judge. Claude Opus 5.5 leads at 75%. But
            its{" "}
            <A href="https://eebench.org/methodology.html">methodology</A>{" "}
            puts layout out of scope, and the routing benchmarks only check
            connectivity and DRC.
          </P>

          <P>
            I couldn&apos;t find one published example of a language model doing
            layout against a PDN or field-solver reward. So the Astra demo was
            optimized for what it showed, a board that connects, because
            that&apos;s all anyone grades.
          </P>

          <P>
            I can&apos;t see the labs building this on their own. Solvers are
            slow, the commercial ones are license-gated, and EE is a small
            market next to code. Models also need to get better at physics
            first:{" "}
            <A href="https://arxiv.org/abs/2603.18102">HWE-Bench</A>, which
            checks from-scratch schematics in simulation, tops out at 8%.
          </P>

          <P>
            So here&apos;s my ask. Look at the right-hand column of that
            table: every &ldquo;nobody&rdquo; row already has an open-source
            tool that runs headless. Someone should wire them into one
            benchmark that scores a layout on copper balance, PDN impedance, IR
            drop, and return paths, on top of DRC. atopile already showed that
            if you build the environment, labs will train on it.
          </P>

          <P>
            Build the one that measures the part we actually ship. If
            you&apos;re building it, I&apos;d like to help.
          </P>

          <H2>Two boxes</H2>

          <P>
            Vibe hardware is real, and it&apos;s going to be huge for people
            next to EE: firmware, software, and mechanical engineers who need a
            bench tool and no longer have to ask someone like me. The serious
            end will look like software did. Anyone can build an app; few can
            run a platform, and the ones who do use AI to go faster, not to go
            away.
          </P>

          <P>
            Maybe I&apos;m biased. I&apos;ve spent my adult life getting good at
            this. But code fails in seconds, and a board fails in the chamber
            six weeks after you sent it out. Until a model can run that loop, it
            learns the parts of the job that can be checked, and those
            aren&apos;t the hard ones.
          </P>

          <P>
            There are two boxes in this post. The first is the one we put the
            model in when we ask it something cold, and it&apos;s easy to open:
            hand it the datasheet, the system, the pointers. The second is the
            one it was trained in, where the only thing graded is whether the
            board connects. That one has to be opened from the outside, with a
            field solver. Until then, I&apos;ll do the layout and let it do
            everything else.
          </P>

          <Sources />

          <div className="mt-10 text-sm">
            <Link href="/blog" className="tlink">
              ← cd ~/blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
