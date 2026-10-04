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
    <h2 className="mt-10 mb-3 text-lg font-bold text-green glow">
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

const box =
  "rounded border border-line bg-black/20 px-2.5 py-1 text-text whitespace-nowrap";

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
//  Diagrams                                                          //
// ------------------------------------------------------------------ //

function InfoBox() {
  return (
    <div className="term my-6 p-4 text-xs leading-relaxed">
      <div className="mb-2 text-text-dim">
        <span className="text-amber glow-amber">[ info ]</span> scope
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        <dt className="text-green-dim">who</dt>
        <dd className="text-text">
          a systems EE who designs production hardware at a big company, ex
          Tesla, and uses an agent every working day
        </dd>
        <dt className="text-green-dim">covers</dt>
        <dd className="text-text">schematic, layout, and everything around them</dd>
        <dt className="text-green-dim">skips</dt>
        <dd className="text-text">firmware, which has been covered to death</dd>
        <dt className="text-green-dim">tools</dt>
        <dd className="text-text">
          Claude Code, KiCad at home, my employer&apos;s tools at work
        </dd>
        <dt className="text-green-dim">shelf life</dt>
        <dd className="text-amber glow-amber">
          written October 2026. parts of it will be wrong by Christmas
        </dd>
      </dl>
    </div>
  );
}

function HeaderFile() {
  const line = (k: string, v: string, c: string) => (
    <div className="whitespace-pre-wrap break-words">
      <span className="text-cyan">{k}</span>
      <span className="text-text">{v}</span>
      <span className="text-green-dim"> {"//"} {c}</span>
    </div>
  );
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ cat CLAUDE.md · declarations, not definitions
      </div>
      <div className="space-y-1 p-4 text-xs leading-relaxed">
        <div className="text-green-dim">{"// always in context. about forty lines."}</div>
        {line("parts:      ", "kb/parts/index.md", "one line per part. open the one you need")}
        {line("datasheets: ", "kb/datasheets/<mpn>.md", "OCR'd markdown. never the PDF")}
        {line("system:     ", "kb/system/interconnect.md", "what this board plugs into")}
        {line("tools:      ", "parts --help · tracker --help · gerber-diff --help", "learn on demand")}
        {line("rules:      ", "cite the datasheet page for every pin claim", "")}
      </div>
      <div className="border-t border-line p-4 text-xs">
        <div className="mb-2 text-green-dim">{"// on disk. loaded only when a question needs it."}</div>
        <div className="flex flex-wrap gap-2">
          <span className={box}>200 datasheets</span>
          <span className={box}>system interconnect</span>
          <span className={box}>DFM guidelines</span>
          <span className={box}>past issues</span>
          <span className={box}>design calcs</span>
        </div>
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> a pointer costs one
        line of context. an <span className="text-text">@import</span> is an{" "}
        <span className="text-text">#include</span>: the whole file, every
        session.
      </figcaption>
    </figure>
  );
}

function VisionPipeline() {
  const arrow = <span className="text-green-dim">→</span>;
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ ./datasheet-to-tokens.sh
      </div>
      <div className="space-y-3 p-4 text-xs">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className={box}>datasheet.pdf</span>
          {arrow}
          <span className={box}>
            Unlimited-OCR <span className="text-text-dim">· local, MLX</span>
          </span>
        </div>
        <div className="space-y-2 border-l border-line-bright pl-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="text-green-dim">body text</span>
            {arrow}
            <span className={box}>markdown</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="text-amber">tables + figures it doesn&apos;t trust</span>
            {arrow}
            <span className={box}>render to image</span>
            {arrow}
            <span className={box}>
              claude -p <span className="text-text-dim">· headless</span>
            </span>
            {arrow}
            <span className={box}>markdown</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className="text-green-dim">⤷ merge</span>
          {arrow}
          <span className={box}>kb/datasheets/&lt;mpn&gt;.md</span>
          {arrow}
          <span className={box}>one line in the index</span>
        </div>
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> the cheap local model
        does the bulk. the expensive one only sees the pages that need eyes.
      </figcaption>
    </figure>
  );
}

const SPATIAL: {
  task: string;
  source: string;
  href: string;
  human: number;
  model: number;
  who: string;
  can: boolean;
  note?: string;
}[] = [
  {
    task: "abstract grid puzzles",
    source: "ARC-AGI-3 · Sep 2026",
    href: "https://arcprize.org/leaderboard",
    human: 100,
    model: 99.9,
    who: "GPT-6 Astra",
    can: true,
  },
  {
    task: "2D mental rotation",
    source: "SpatialViz · Dec 2025",
    href: "https://arxiv.org/abs/2507.07610",
    human: 90.0,
    model: 91.3,
    who: "GPT-5",
    can: true,
  },
  {
    task: "3D mental rotation",
    source: "SpatialViz · Dec 2025",
    href: "https://arxiv.org/abs/2507.07610",
    human: 79.2,
    model: 33.8,
    who: "GPT-5-mini",
    can: false,
    note: "chance is 25%",
  },
  {
    task: "multi-view spatial reasoning",
    source: "MMSI-Bench · 2026",
    href: "https://arxiv.org/abs/2505.23764",
    human: 97.2,
    model: 45.2,
    who: "Gemini 3 Pro",
    can: false,
  },
  {
    task: "routing real boards, nets DRC-clean",
    source: "OmniRouting · Aug 2026",
    href: "https://arxiv.org/abs/2608.04434",
    human: 93.6,
    model: 12.6,
    who: "best model, no tools",
    can: false,
    note: "28.0% with tools. a classic router: 56.2%",
  },
];

function SpatialBars() {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ spatial.log · humans vs the best model on each test
      </div>
      <div className="space-y-4 p-4 text-xs">
        {SPATIAL.map((r) => (
          <div key={r.task}>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
              <span className="text-text">
                {r.task}{" "}
                <span className={r.can ? "text-green" : "text-amber glow-amber"}>
                  [{r.can ? "can" : "can't"}]
                </span>
              </span>
              <A href={r.href}>{r.source} ↗</A>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 flex-none text-text-dim">human</span>
              <div className="h-2.5 flex-1 bg-line/40">
                <div className="h-full bg-text-dim" style={{ width: `${r.human}%` }} />
              </div>
              <span className="w-12 flex-none text-right text-text-dim">{r.human}%</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="w-12 flex-none text-text-dim">model</span>
              <div className="h-2.5 flex-1 bg-line/40">
                <div
                  className={r.can ? "h-full bg-green" : "h-full bg-amber"}
                  style={{ width: `${r.model}%` }}
                />
              </div>
              <span className={`w-12 flex-none text-right ${r.can ? "text-green" : "text-amber"}`}>
                {r.model}%
              </span>
            </div>
            <div className="mt-1 text-text-dim">
              {r.who}
              {r.note ? ` · ${r.note}` : ""}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> discrete puzzles and
        flat rotations are solved. continuous 3D geometry and routing are not.
        newer models aren&apos;t on most of these yet, so read each bar with its
        date.
      </figcaption>
    </figure>
  );
}

function PatchMath() {
  return (
    <div className="term my-6 p-4 text-xs leading-relaxed">
      <div className="mb-2 text-text-dim">
        <span className="text-amber glow-amber">[ math ]</span> what one
        visual token sees
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        <span className="text-green-dim">image</span>
        <span className="text-text">100 mm board, shown edge to edge at 2576 px</span>
        <span className="text-green-dim">patch</span>
        <span className="text-text">
          28 × 28 px (<A href="https://platform.claude.com/docs/en/build-with-claude/vision">Claude&apos;s vision docs</A>)
        </span>
        <span className="text-green-dim">so</span>
        <span className="text-text">one token ≈ 1.1 × 1.1 mm of board</span>
        <span className="text-green-dim">inside it</span>
        <span className="text-amber">
          a 0.1 mm trace, its clearance, and a 0.4 mm-pitch BGA ball
        </span>
      </div>
    </div>
  );
}

const LADDER: {
  rung: string;
  status: "graded" | "partly" | "nobody";
  who: string;
}[] = [
  { rung: "works at ten thousand units", status: "nobody", who: "only reality grades this" },
  { rung: "EMC: radiated emissions", status: "nobody", who: "openEMS can, slowly" },
  { rung: "SI: impedance and crosstalk on critical nets", status: "nobody", who: "openEMS, gerber2ems" },
  { rung: "PI: PDN impedance, DC IR drop", status: "nobody", who: "Elmer, ngspice (lumped)" },
  { rung: "copper balance, DFM", status: "nobody", who: "an area ratio. trivial to compute" },
  { rung: "circuit behavior in SPICE, at tolerance corners", status: "partly", who: "EEBench, schematic only" },
  { rung: "DRC / ERC clean", status: "graded", who: "OmniRouting, PCBWorld, every demo" },
  { rung: "connectivity: every net routed", status: "graded", who: "OmniRouting, PCBWorld, every demo" },
];

function VerifyLadder() {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ what gets graded · read bottom to top
      </div>
      <div className="divide-y divide-line text-xs">
        {LADDER.map((r) => (
          <div key={r.rung} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-2">
            <span
              className={`w-16 flex-none ${
                r.status === "graded"
                  ? "text-green"
                  : r.status === "partly"
                    ? "text-cyan"
                    : "text-amber glow-amber"
              }`}
            >
              [{r.status === "graded" ? "graded" : r.status === "partly" ? "partly" : "nobody"}]
            </span>
            <span className="min-w-0 flex-1 text-text">{r.rung}</span>
            <span className="text-text-dim">{r.who}</span>
          </div>
        ))}
      </div>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> the demos are optimized
        for the bottom two rungs because those are the only ones anyone
        checks.
      </figcaption>
    </figure>
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
      <span className="text-green">[great]</span>
    ) : v === "good" ? (
      <span className="text-cyan">[good]</span>
    ) : (
      <span className="text-amber">[meh]</span>
    );
  return (
    <details className="term my-6 overflow-hidden">
      <summary className="cursor-pointer list-none border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim transition hover:text-text [&::-webkit-details-marker]:hidden">
        ▸ cat everything-i-use-it-for.md · {USES.reduce((n, g) => n + g.rows.length, 0)} uses, click to expand
      </summary>
      <div className="space-y-5 p-4 text-xs leading-relaxed">
        {USES.map((g) => (
          <div key={g.group}>
            <div className="mb-2 font-bold text-green glow">
              <span className="text-green-dim">##</span> {g.group}
            </div>
            <div className="divide-y divide-line border-y border-line">
              {g.rows.map((r) => (
                <div key={r.task} className="grid gap-x-3 py-1.5 sm:grid-cols-[11rem_1fr_auto]">
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
        <span className="text-green-dim">{"//"}</span> steal anything. the
        verdicts are mine, as of this month.
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
        ▸ cat sources.md · every link in this post, click to expand
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
            <span className="text-amber glow-amber">[ note ]</span> written in
            a personal capacity. Work examples are kept generic on purpose:
            no products, no internal systems by name. Nothing here is my
            employer&apos;s view.
          </div>

          <P>
            On September 3rd OpenAI launched GPT-6 Astra, and one of the
            launch demos was fifteen seconds of the model doing PCB layout in
            KiCad: placing parts, routing copper, &ldquo;turning an electronic
            schematic into a manufacturable PCB.&rdquo; Within a week my feed
            was wall to wall circuit boards. Flight controllers, a robot body,
            a star tracker the model ordered from JLCPCB itself. Someone gave
            it a credit card and asked for a DJ controller. The name for all
            of it is vibe hardware.
          </P>

          <TweetCarousel dir={IMAGE_DIR} tweets={TWEETS} title="vibe-hardware" />

          <P>
            I design production hardware for a living, at a big company, and I
            use AI to do it every working day. So I have an opinion on this,
            and it isn&apos;t the one the feed suggests. The demos point the
            model at layout, which is the part of the job it&apos;s worst at.
            The real gains are in the text around the board, where it&apos;s
            quietly excellent. The engineers getting the most out of it are
            the ones who know which is which, and the parts it&apos;s bad at
            are less about taste than people think. Some of them are physics
            that nobody has wired into the loop yet.
          </P>

          <InfoBox />

          <H2>1. Know what your model is good at</H2>

          <P>
            Two terms do most of the work in this post. The{" "}
            <span className="text-green">harness</span> is everything wrapped
            around the model: the tools it can call, the files it can read,
            the instructions it starts with, the loop it runs in.{" "}
            <span className="text-green">Context</span> is what&apos;s
            actually in front of it when it answers: which schematic, which
            datasheet, which slice of the system. (
            <A href="https://x.com/tobi/status/1935533422589399127">
              Tobi Lütke
            </A>{" "}
            and{" "}
            <A href="https://x.com/karpathy/status/1937902205765607626">
              Andrej Karpathy
            </A>{" "}
            popularized &ldquo;context engineering&rdquo; last year, and it
            stuck because it describes the job better than
            &ldquo;prompting&rdquo; ever did.) Everyone gets the same model.
            The harness and the context are yours, and they account for
            almost all of the difference between a great result and a
            frustrating one.
          </P>

          <P>
            The best thing I&apos;ve read on this is{" "}
            <A href="https://www.anthropic.com/research/claude-shaped-science">
              Claude-shaped science
            </A>
            , a guest post on Anthropic&apos;s blog by Matthew Schwartz, a
            Harvard physicist who spent months trying to make Claude do
            physics the way he does physics. It didn&apos;t work. What worked
            was turning it around:
          </P>

          <Pull>
            Instead of treating Claude like the collaborator I wanted it to
            be, I started to treat it like the collaborator it actually is.
          </Pull>

          <P>
            He went looking for problems that suited it, built a harness
            called{" "}
            <A href="https://github.com/BootLoops-ai/bootloops">BootLoops</A>{" "}
            to steer it toward them, and came out the other side with
            thirty-six manuscripts. That is the whole skill in electrical
            engineering too. A model in 2026 is superhuman at some parts of
            board design and worse than an intern at others, and your job is
            to know where that line is and keep it on the right side. The
            catch is that the line moves every few months, so whatever you
            learn about it has a short shelf life.
          </P>

          <H2>2. Harness: get the model as close to the files as you can</H2>

          <P>
            Models are best at text. Everything else is a translation layer
            that costs you accuracy and tokens. If I were starting a hardware
            company tomorrow, I would not pick an ECAD tool that stores its
            designs as binaries. I&apos;d pick KiCad: open source and text all
            the way down, so the agent can read the schematic, the netlist,
            and the board directly, and if you need a feature, patch the tool
            itself. I&apos;ve built it from source and added my own things.{" "}
            <A href="https://x.com/i2cjak">i2cjak</A> is much further along:{" "}
            <A href="https://github.com/i2cjak/Backplane">Backplane</A> draws
            every change an agent makes to a KiCad board live, next to the
            conversation, and there&apos;s a KiCad fork with a sketch router
            behind it.
          </P>

          <P>
            The honest counterexample is{" "}
            <A href="https://podcast.altium.com/e/altium-file-parsing-ai-design-reviews-pcb-viz-tools/">
              Eli Hughes
            </A>
            , who does the same thing in Altium. He wrote open-source parsers
            that crack the binary files open and feed the netlists to Claude
            and Codex for design reviews. So binary isn&apos;t impossible.
            Someone just has to build the bridge before the model can cross
            it, and with KiCad the bridge is already there.
          </P>

          <P>
            At the other extreme is{" "}
            <A href="https://github.com/atopile/atopile">atopile</A>, which
            describes the whole circuit as code. When I was at Tesla there was
            a real push to use it, because we wanted to move as fast as
            humanly possible. My problem with it was, and still is, that
            there&apos;s no schematic. You read code to find out how a buffer
            is hooked up. Models love it, which is the point, but electronics
            engineers want a schematic, and I don&apos;t think that changes
            because the machine would prefer otherwise.
          </P>

          <P>
            Second rule: prefer a command-line tool to an MCP server. MCP is
            how most tools advertise themselves to agents now, and it has
            gotten much better, but every server you connect loads its tool
            definitions into context on every turn. Mario Zechner{" "}
            <A href="https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/">
              measured
            </A>{" "}
            Playwright&apos;s MCP at 13.7k tokens before you&apos;ve done
            anything; Scalekit{" "}
            <A href="https://www.scalekit.com/blog/mcp-vs-cli-use">
              benchmarked
            </A>{" "}
            the same tasks both ways and found MCP cost 4 to 32 times more.
            Anthropic&apos;s own{" "}
            <A href="https://code.claude.com/docs/en/best-practices">
              best-practices docs
            </A>{" "}
            say it plainly: &ldquo;CLI tools are the most context-efficient
            way to interact with external services.&rdquo; At work, a lot of
            my harness is small CLIs the agent wrote for our internal web
            tools: the parts database, the issue tracker, the place suppliers
            post their DFM comments. I describe what I want out of the tool
            and the agent builds the command. I don&apos;t know how most of
            them work inside, and I don&apos;t need to.
          </P>

          <P>
            The third rule is the one I&apos;d most like people to steal:
            write your system prompt like a header file. In embedded C, a
            header declares what exists and where it lives; the definitions
            stay in their own files and only get pulled in when something
            calls them. My CLAUDE.md works the same way. It&apos;s a short
            list of which tools exist, where the datasheets live, where the
            system docs are, and a line on when to reach for each. The model
            reads the list on every turn and opens a file only when the
            question needs it.
          </P>

          <HeaderFile />

          <P>
            Anthropic&apos;s docs make the same argument in different words
            (&ldquo;For each line, ask: would removing this cause Claude to
            make mistakes? If not, cut it&rdquo;), their{" "}
            <A href="https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills">
              post on Agent Skills
            </A>{" "}
            calls it progressive disclosure, and HumanLayer&apos;s{" "}
            <A href="https://www.humanlayer.dev/blog/writing-a-good-claude-md">
              guide
            </A>{" "}
            has the best three-word version: &ldquo;Prefer pointers to
            copies.&rdquo; One gotcha. Claude Code&apos;s{" "}
            <span className="text-text">@path</span> import syntax{" "}
            <A href="https://code.claude.com/docs/en/memory">
              loads the whole file at launch
            </A>
            . That&apos;s an #include, not a pointer. A plain sentence saying
            where the file is works better.
          </P>

          <H2>3. Context: the model is an expert in a box</H2>

          <P>
            Here is the mistake I see most, and I see it from good engineers.
            They paste a question about their circuit into a chat window, get
            a wrong answer, and decide the model is dumb. Try this instead.
            Imagine you&apos;re a very good EE, and someone locks you in a
            box, slides a schematic for a project you&apos;ve never seen under
            the door, and asks whether the current-sense amp is hooked up
            right. No system diagram, no datasheet, no idea what the board
            plugs into. You&apos;d guess. You&apos;d guess well, because
            you&apos;re good, and some fraction of the time you&apos;d be
            confidently wrong. That&apos;s the model, every time you ask it
            something cold. Anthropic&apos;s{" "}
            <A href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
              prompting guide
            </A>{" "}
            has a politer version: &ldquo;a brilliant but new employee who
            lacks context.&rdquo; The intelligence is in the weights. The
            context is your job.
          </P>

          <P>
            I did exactly this to myself this week. I was designing a
            current-sense amplifier circuit and hadn&apos;t put the part&apos;s
            datasheet in my knowledge base yet. The model told me, with total
            confidence, that the ground pin could go to a negative rail. It
            can&apos;t. Nothing about the model changed between that answer
            and the right one. The datasheet did.
          </P>

          <P>
            Boards don&apos;t live alone either. At Tesla, on the front
            controller, my board was one node in a car, and the most useful
            context I ever gave a model was the system around it: every
            connector, every harness, every module on the other end. Tesla
            had an in-house tool where each vehicle&apos;s connections were
            defined in software, so I could export the whole system view and
            hand it over. Most places don&apos;t have that. Then it&apos;s
            legwork: go find your systems engineer and get the picture out of
            their head and onto disk. Systems love context.
          </P>

          <P>
            None of that fits in a context window, and you shouldn&apos;t try
            to make it. What you build instead is a knowledge base with an
            index on top. I use a version of Karpathy&apos;s{" "}
            <A href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f">
              LLM wiki
            </A>
            : raw sources in one folder, a markdown wiki the model maintains
            in another, and an index it reads first before drilling down.
            It&apos;s the header-file idea one level lower. It works, and
            it&apos;s a chore to keep current; the retrieval tools that
            promise to automate the upkeep mostly cost money and are early.
          </P>

          <P>
            Which brings me to my biggest pet peeve. People drop a 200-page
            datasheet PDF into the chat and ask for a design. Two things go
            wrong. First, a PDF isn&apos;t really text. It stores instructions
            for drawing glyphs, and the reading order, the tables, and
            sometimes the characters themselves have to be reconstructed
            (LlamaIndex has a{" "}
            <A href="https://www.llamaindex.ai/blog/why-reading-pdfs-is-hard">
              good explainer
            </A>{" "}
            on why). Second, when the model does read it properly, it&apos;s
            expensive: Claude{" "}
            <A href="https://platform.claude.com/docs/en/build-with-claude/pdf-support">
              sees each page
            </A>{" "}
            as an image plus the extracted text, 1,500 to 3,000 tokens a page,
            so one datasheet can eat a big slice of your context before
            you&apos;ve asked anything. Agents that shell out to a text
            extractor are worse. They&apos;re grepping a document that was
            never meant to be grepped.
          </P>

          <P>
            So I pre-digest every datasheet. Baidu&apos;s{" "}
            <A href="https://github.com/baidu/Unlimited-OCR">Unlimited-OCR</A>{" "}
            runs locally on my laptop through{" "}
            <A href="https://huggingface.co/mlx-community/Unlimited-OCR-4bit">
              MLX
            </A>{" "}
            and converts the body text. When it hits a table or a figure it
            isn&apos;t confident about, that region goes to a headless Claude
            session, which looks at it as an image and writes it back as
            markdown. Out the other end comes a datasheet that&apos;s a
            fraction of the tokens and greppable for real. Ari Mahpour at
            Altium{" "}
            <A href="https://resources.altium.com/p/building-local-llm-datasheet-extractor-ic-driver-development">
              built something similar
            </A>
            , which made me feel less crazy.
          </P>

          <VisionPipeline />

          <P>
            This won&apos;t last. Datasheets are written for people, and their
            main reader is becoming a model. Microchip already{" "}
            <A href="https://www.nasdaq.com/press-release/microchip-technology-unveils-model-context-protocol-mcp-server-power-ai-driven">
              runs a public MCP server
            </A>{" "}
            for its catalog, TI has a{" "}
            <A href="https://www.ti.com/developer-api/product-information-api-suite/getting-started.html">
              JSON product API
            </A>{" "}
            for approved customers, and startups like{" "}
            <A href="https://datasheets.md/">datasheets.md</A> are
            re-extracting the PDFs into structured data. As of August,{" "}
            <A href="https://veecle.ai/blog/hardware-mcp-servers-2026">
              ST, Infineon, and Renesas had no official server
            </A>
            , and there&apos;s no vendor-neutral standard for a whole
            datasheet, graphs and all. I&apos;d bet heavily on one arriving.
            Machine-readable datasheets were the backup idea on my{" "}
            <Link href="/blog/yc-interview" className="tlink">
              YC application
            </Link>
            , and I still think every agent that touches hardware is going to
            need them.
          </P>

          <H2>4. What it&apos;s actually good at: translation</H2>

          <P>
            Once the harness and the context are in place, the thing that
            surprised me most isn&apos;t any single task. It&apos;s that the
            model is a universal adapter. Hardware engineering is full of
            files that were never designed to talk to each other: the
            schematic, the board, the mechanical model, the flex outline, the
            supplier&apos;s DFM report, the test spreadsheet. A huge part of
            my day used to be carrying information by hand from one to the
            next. The model can carry it, and it doesn&apos;t get bored.
          </P>

          <P>
            The best example is a dumb test flex I designed recently. One of
            our boards has a 36-signal board-to-board connector, and we wanted
            a flex that breaks every signal out to 2.54 mm headers so we could
            probe it on the bench. I asked the agent to copy the pinout from
            the existing system flex and plan the breakout, with one
            complication: the reference flex has a bend, and this one had to
            come straight out. I told it the stackup was four-layer FCCL and
            let it go. It assigned every net, planned the fanout, estimated
            the traces, drew the outline in Matplotlib, and exported it as
            IDX for the mechanical side. Drawing a board outline turns out to
            be the same problem as drawing an SVG, which these models are
            extremely good at. I checked every pin by hand and changed
            nothing. It isn&apos;t fabbed yet, so the bench gets the last
            word, but an afternoon of work took one prompt.
          </P>

          <P>
            The same trick runs down the whole chain. Flex designs fail in
            boring ways: pin 1 on the board lands on pin 36 at the far
            connector because someone mirrored a footprint, or a bend flips
            the orientation. I have the model build an interconnect table from
            board to flex to connector to the other board, then check it in
            3D, bends included. It diffs two Gerber revisions by overlaying
            them, which beats me flicking between windows because it has
            every coordinate. It makes pictures for mechanical engineers: the
            layout, grayed out except the one thing I need them to look at.
            And when a supplier sends back round three of DFM comments, it
            pulls them from the tracker, checks each one against the design
            files and our guidelines, and tells me which are real. Most
            aren&apos;t. A few need a human.
          </P>

          <P>
            The gap in that list is simulation. Even with text netlists, I
            haven&apos;t had good results getting it to build and run LTspice
            models, though I also haven&apos;t put real harness work into it.
            The full list is below, sorted by where it sits in the job. Steal
            whatever&apos;s useful.
          </P>

          <UseTable />

          <H2>5. It can rotate a shape. It can&apos;t route a board.</H2>

          <P>
            Which brings us back to the feed. The thing everyone is excited
            about is layout, and layout is where the models are weakest.
          </P>

          <P>
            I used to say LLMs aren&apos;t shape rotators, and that turns out
            to be too blunt. They&apos;ve gotten very good at some spatial
            problems. GPT-6 Astra scores 99.9% on{" "}
            <A href="https://arcprize.org/leaderboard">ARC-AGI-3</A>, the
            puzzle benchmark that was supposed to be hard for them, and on 2D
            mental rotation GPT-5 already beat the human panel. What they
            still can&apos;t do is continuous geometry in three dimensions, or
            hundreds of constraints over a large area at once. That is a
            description of a circuit board.
          </P>

          <SpatialBars />

          <P>
            The PCB numbers are brutal.{" "}
            <A href="https://arxiv.org/abs/2608.04434">OmniRouting</A> took
            1,681 real industrial boards, each with a placement engineers had
            already proven routable, and asked models to finish the job.
            Humans got 93.6% of nets connected and DRC-clean. The best model
            on its own got 12.6%, and 28% with every tool they could hand it.
            A classic algorithmic router got 56%.{" "}
            <A href="https://arxiv.org/abs/2607.05915">PCBWorld</A> found the
            same shape: a GPT-5.4 agent cleanly routed 65% of small real
            boards and none of the medium ones, while a tiny RL policy trained
            only against a DRC checker beat it on both. My favorite detail is
            from the OmniRouting paper: the models routed ground as ordinary
            traces instead of pours.
          </P>

          <P>
            Part of the reason is mechanical. Claude looks at images in
            28-pixel patches, and the arithmetic is not kind to a circuit
            board:
          </P>

          <PatchMath />

          <P>
            The model gets a summary of each square millimetre, not the copper
            in it. The rest of the reason is that the board only exists to the
            model as a long list of coordinates, and nothing updates a mental
            picture when one of them moves. The{" "}
            <A href="https://arxiv.org/abs/2604.09594">
              Spatial Competence Benchmark
            </A>{" "}
            authors have the perfect phrase for what comes out:
            &ldquo;locally plausible geometry that breaks global
            constraints.&rdquo; Every segment looks fine. The board is
            shorted.
          </P>

          <P>
            On the boards in the feed, it shows up as everything experienced
            EEs immediately piled on: connectors you can&apos;t reach, screw
            terminals you can&apos;t get a wire into, USB pairs wandering
            across the board, nine vias in pads on a 27-net board that
            didn&apos;t need any. It&apos;s worse in the parts nobody
            screenshots. Most of these boards would work on a bench. Think
            about ESD, EMC, SI and PI, or building ten thousand of them, and
            they fall apart, the buck converters especially: switch nodes the
            size of a postage stamp, input loops wrapped around half the
            board, inductors on the far side from the IC. I&apos;m surprised
            some of them turn on. Michael W. had the kindest framing: he made
            all the same mistakes early in his career, and had mentors who
            made him rip the board up three or four times. Nobody makes the
            model rip anything up.
          </P>

          <P>
            What I&apos;d do instead is let the model drive the tools built
            for this. Autorouters are sophisticated. Given the right
            constraints they&apos;ll escape a BGA on the layers you want with
            dogbone fanouts; there&apos;s an old EEVblog video that walks
            through setting one up. They fail when nobody sets the
            constraints, because nobody likes setting constraints, and
            that&apos;s exactly the part a model is good at: read the stackup,
            the datasheets, and the fab&apos;s capability sheet, write the net
            classes, widths, and rules, then hand the geometry to the
            algorithm. JLCPCB&apos;s{" "}
            <A href="https://jlcpcb.com/blog/gpt-6-astra-pcb-design-in-kicad">
              review of an Astra board
            </A>{" "}
            suggests the model has already figured this out: it hand-routed
            the critical power and switching nets and gave the rest to
            Freerouting. The router underneath still decides how good the
            result is, and the{" "}
            <A href="https://www.quilter.ai/blog/llm-pcb-layout-gpt-6-astra">
              demo
            </A>{" "}
            says nothing about whether the board works. I haven&apos;t run
            this loop end to end myself. It&apos;s the next thing I&apos;m
            trying.
          </P>

          <H2>6. Taste is scar tissue</H2>

          <P>
            The usual answer to all this is that the models lack taste. I
            think that&apos;s half right, so let me start with the half that
            is.
          </P>

          <P>
            Here&apos;s where taste comes from. A board fails EMC, and you go
            to the chamber, and you spend days learning about component
            orientation, loop area, and the geometry of fields until you find
            it. After that you look for that extreme on every board you see.
            You learn to read copper balance because a fab once explained what
            an unbalanced stackup does in reflow, and now you can glance at a
            layout and tell whether the designer was thinking about how much
            copper the acid would take off each layer. None of it came from
            school. All of it came from doing it wrong once. Here&apos;s the
            same board done both ways, and the six places I look in the first
            thirty seconds:
          </P>

          <BoardTaste />

          <P>
            A newbie can look at a board from a top-tier company and see that
            it&apos;s good. They just can&apos;t tell you why. The model is in
            the opposite position. It has the vocabulary: the loop-area rules,
            the EMC textbooks, every app note on buck layout ever written are
            almost certainly in the weights. What it doesn&apos;t have is the
            analogies, the reflex that says this looks like the board that
            failed in the chamber. It designs from first principles every
            time, because it&apos;s still in the box.
          </P>

          <H2>7. Half of taste is physics nobody is grading</H2>

          <P>
            Now the half I don&apos;t buy. Look at those six callouts again.
            Most of them aren&apos;t taste. They&apos;re physics with a number
            attached. An input loop is an inductance you can extract. A switch
            node is an antenna you can simulate. Copper balance is an area
            ratio per layer. PDN impedance is a curve, and a return path is a
            field solve. We call it taste because nobody can run a field
            solver in their head, so we compress years of results into a
            glance.
          </P>

          <P>
            Models get good at whatever can be checked automatically. That is
            why they got good at code first: you can run the tests. Here&apos;s
            what EE benchmarks check today:
          </P>

          <VerifyLadder />

          <P>
            <A href="https://eebench.org/">EEBench</A>, from the atopile team,
            is the best EE benchmark there is. It uses real parts, runs ngspice
            at tolerance corners, scores BOM cost, and has no LLM judge.
            Claude Opus 5.5 leads at 75%. But its{" "}
            <A href="https://eebench.org/methodology.html">methodology</A>{" "}
            puts layout explicitly out of scope. OmniRouting and PCBWorld
            grade layout, but only on connectivity and DRC. Nobody grades
            layout on physics. I couldn&apos;t find a single published example
            of a language model laying out a board against a PDN or
            field-solver reward. So the Astra demo was optimized for exactly
            what it showed, a board that connects, because that&apos;s the
            only thing anyone checks. If I had to guess at its training
            environment, it was some version of: place, route, does
            connectivity hold.
          </P>

          <P>
            I can&apos;t see the labs standing up field solvers and power
            integrity analysis inside their RL environments on their own.
            It&apos;s slow, the commercial tools are license-gated, and EE is
            a small market next to code. The models would also need to get
            much better at physics, and at driving those tools, before the
            scores meant much.{" "}
            <A href="https://arxiv.org/abs/2603.18102">HWE-Bench</A>, which
            asks for board-level schematics from scratch and checks them in
            simulation, tops out at 8%. That&apos;s the model alone in the
            box, with no harness and no context, which is the point of section
            three.
          </P>

          <P>
            So here&apos;s my ask. The pieces for a real layout benchmark
            already exist, and they&apos;re open:{" "}
            <A href="https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/">
              KiCad 10
            </A>{" "}
            and kicad-cli, ngspice,{" "}
            <A href="https://github.com/thliebig/openEMS">openEMS</A> for
            full-wave EM, Antmicro&apos;s{" "}
            <A href="https://github.com/antmicro/gerber2ems">gerber2ems</A>{" "}
            for SI on real traces, and{" "}
            <A href="https://github.com/ElmerCSC/elmerfem">Elmer</A> for DC IR
            drop and thermal. All of it runs headless. Someone should wire
            them into a benchmark that scores a layout on PDN impedance, IR
            drop, return-path continuity, impedance on the critical nets, and
            copper balance, on top of DRC. atopile has already shown that if
            you build the environment, the labs will train on it. Build the
            one that measures the part we actually ship. If you&apos;re
            building it, I&apos;d like to help.
          </P>

          <H2>Two boxes</H2>

          <P>
            Here&apos;s where I land, for now. Vibe hardware is real, and
            it&apos;s going to be huge, mostly for people next to electrical
            engineering: firmware, software, and mechanical engineers who need
            a bench tool and no longer need to ask someone like me for one.
            That&apos;s great. The serious end will look more like software
            did. Anyone can build an app now, but very few people can run a
            platform for millions of users, and the ones who do use AI to go
            faster, not to go away. The harnesses that win in production
            hardware will be the ones that make very good engineers faster.
          </P>

          <P>
            Maybe I&apos;m biased. I&apos;ve spent my whole adult life getting
            good at this. But the difference from software is the verify loop.
            Code fails in seconds. A board fails in the chamber, six weeks
            after you sent it out. Until that loop is something a model can
            run, it will learn the parts of the job that can be checked, and
            those aren&apos;t the hard ones.
          </P>

          <P>
            There are two boxes in this post. The first is the one we put the
            model in every time we ask it something cold, and that one&apos;s
            easy to open: hand it the datasheet, the system, the pointers. The
            second is the one it was trained in, where the only question
            anyone grades is whether the board connects. That box has to be
            opened from the outside, with a field solver. Until someone does,
            I&apos;ll keep doing the layout, and let it do everything else.
          </P>

          <Sources />
        </article>

        <div className="mt-10 text-sm">
          <Link href="/blog" className="tlink">
            ← cd ~/blog
          </Link>
        </div>
      </div>
    </div>
  );
}
