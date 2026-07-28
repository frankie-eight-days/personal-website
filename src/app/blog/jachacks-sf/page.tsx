import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "a language I couldn't stand",
  description:
    "JacHacks SF 2026 — thirteen hours in the building, five to finish the project. I built OrgMem, learned graph theory, fought the Jac docs, and got taken apart in Q&A.",
};

const IMAGE_DIR = "/images/blog/jachacks-sf/";

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

// A photo framed as a little terminal window, with a title bar and a
// comment-style caption.
function Shot({
  file,
  alt,
  caption,
  aspect = "3 / 2",
  className = "",
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, 672px",
}: {
  file: string;
  alt: string;
  caption: string;
  aspect?: string;
  className?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <figure className={`term my-6 overflow-hidden ${className}`}>
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ view {file}
      </div>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image
          src={IMAGE_DIR + file}
          alt={alt}
          fill
          sizes={sizes}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> {caption}
      </figcaption>
    </figure>
  );
}

// The demo video, framed in the same terminal window as a photo.
function YouTubeEmbed() {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ play orgmem-demo.mp4
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src="https://www.youtube.com/embed/P5S63SVar1o"
          title="OrgMem demo — JacHacks SF 2026"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> the demo I submitted: graph
        view, animated traversals, chat panel
      </figcaption>
    </figure>
  );
}

// A post from the floor, rebuilt in the terminal palette. Links out to the
// original.
function Tweet() {
  return (
    <a
      href="https://x.com/jizarr_coins/status/2039479665539084341"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Post by Ji'zarr Has Coins on X: middle managers realizing their entire career was just being a lossy compression algorithm"
      className="term my-6 block p-4 no-underline transition hover:border-green-dim"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-panel text-base font-bold text-green">
          J
        </div>
        <div className="min-w-0 leading-tight">
          <span className="flex items-center gap-1 font-bold text-text">
            Ji&apos;zarr Has Coins
          </span>
          <span className="text-xs text-text-dim">@jizarr_coins</span>
        </div>
        <svg
          viewBox="0 0 24 24"
          className="ml-auto h-5 w-5 flex-none text-text"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </div>
      <p className="mt-3 text-base leading-snug text-text">
        middle managers realizing their entire career was just being a lossy
        compression algorithm for information that an agent can summarize
        perfectly in 4 seconds
      </p>
      <p className="mt-3 text-xs text-text-dim">
        <span className="text-text">419</span> views · Apr 1, 2026
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-dim">
        <span>
          <b className="text-text">2</b> Likes
        </span>
      </div>
    </a>
  );
}

// What the graph shape hands you for free, once the data is in it.
function GraphToolbox() {
  const box =
    "rounded border border-line bg-black/20 px-2.5 py-1 text-text whitespace-nowrap";
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ what a graph buys you
      </div>
      <div className="space-y-3 p-4 text-xs">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className={box}>pathfinding</span>
          <span className={box}>connectedness</span>
          <span className={box}>bottlenecks</span>
          <span className={box}>orphans / hanging nodes</span>
          <span className={box}>reachability</span>
        </div>

        <div className="pt-1 text-text-dim">
          <span className="text-green-dim">//</span> the ECAD version: a netlist
          is a graph, and a design rule check is just orphan-node detection
        </div>
      </div>
    </figure>
  );
}

export default function JacHacksSfPost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
      <SectionHeader
        path="~/blog"
        command="cat jachacks-sf.md"
        title="Twelve hours, a language I couldn't stand, and a graph I couldn't defend"
      >
        JacHacks SF 2026 — 2026-07-26
      </SectionHeader>

      <article>
        <P>
          I was in the building for thirteen hours and I finished my project in
          five. That gap is most of what I have to say about JacHacks SF.
        </P>

        <P>
          Doors at eight. The opening keynote from Dr. Jason Mars, who created
          the Jac language, ran until 10:30, so that&apos;s when I actually
          started building. I had a working MVP by four. Judging was at seven.
          Finalists weren&apos;t announced until nine. Which means I spent three
          hours polishing and rehearsing a pitch — a luxury I have never once had
          at a hackathon, and more time than I needed. The venue is a 42,000
          square foot campus on paper; in practice there were people standing at
          tables because there was nowhere to sit. I skipped the lunch line
          entirely and bought food from the farmers market out front, because it
          was faster.
        </P>

        {/* event info screen — details preserved here in case the event page disappears */}
        <div className="term my-6 p-4 text-xs leading-relaxed">
          <div className="mb-2 text-text-dim">
            <span className="text-amber glow-amber">[ info ]</span> event details
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <dt className="text-green-dim">event</dt>
            <dd className="text-text">JacHacks SF 2026</dd>
            <dt className="text-green-dim">where</dt>
            <dd className="text-text">
              Founders, Inc. — Fort Mason Center, San Francisco
            </dd>
            <dt className="text-green-dim">when</dt>
            <dd className="text-text">July 26, 2026 · 8:00 AM – 10:00 PM</dd>
            <dt className="text-green-dim">track</dt>
            <dd className="text-text">
              Agentic AI ($2,000 / $1,000 — the biggest pool of three)
            </dd>
            <dt className="text-green-dim">rule</dt>
            <dd className="text-text">at least 40% of your code in Jac</dd>
            <dt className="text-green-dim">built</dt>
            <dd className="text-text">
              OrgMem — organizational memory as a graph
            </dd>
            <dt className="text-green-dim">result</dt>
            <dd className="text-amber glow-amber">
              didn&apos;t place — learned graphs instead
            </dd>
            <dt className="text-green-dim">links</dt>
            <dd className="flex flex-wrap gap-x-3">
              <A href="https://devpost.com/software/orgmem">devpost ↗</A>
              <A href="https://github.com/frankie-eight-days/orgmem">repo ↗</A>
              <A href="https://www.youtube.com/watch?v=P5S63SVar1o">demo ↗</A>
              <A href="https://jachacks.org/sf-guide/">event ↗</A>
            </dd>
          </dl>
        </div>

        <Shot
          file="venue-sign.jpg"
          alt="A framed JacHacks SF sign with an orange arrow, on a stand at the top of a stairwell"
          caption="the sign at the top of the stairs. doors at eight."
          aspect="3 / 4"
        />

        <H2>What I built</H2>
        <P>
          OrgMem. The one-line version I came in with: graphRAG that
          doesn&apos;t suck. The real version: a digital twin of an
          organization, so an agent can have the kind of organizational insight
          a decent middle manager has — who knows what, where it&apos;s written
          down, and where it isn&apos;t.
        </P>

        <Tweet />

        <P>
          I took the orgforge dataset off Hugging Face — 46 people, about 5,000
          artifacts, 11,000 events across 60 working days of a simulated company
          — and used the metadata already sitting in it to build a graph. Then I
          wrote traversal tools on top of that graph, and handed the tools to an
          LLM in a chat panel.
        </P>

        <Shot
          file="mvp-morning.jpg"
          alt="The OrgMem app at 11:48 AM showing a 400-node graph and a list of suggested questions"
          caption="11:48am — 400 nodes, 2,313 edges, and a question box. the shape of it existed before lunch."
          aspect="2400 / 1502"
        />

        <P>
          The thesis I liked then and still like: a graph can prove a negative,
          and top-k similarity can&apos;t. Vector search finds you the most
          similar thing that exists. It cannot tell you that a postmortem was
          never written — a miss and an absence look identical. Walk a bounded
          region of a graph, count zero, and you have established genuine
          absence. On the benchmark&apos;s silence category that was 96.3%
          against a 55.6% baseline.
        </P>

        <P>
          I also built graph visualization with artifacts rendering out of the
          nodes, animated the traversals so you could watch a walker move, and
          put a marketing site on the front that doubled as something I could
          scroll through to introduce the project. All of that was aimed
          squarely at a wow moment in front of judges, and it worked — they
          liked the animations, the chat panel, the site.
        </P>

        <YouTubeEmbed />

        <H2>What I actually took home: graphs</H2>
        <P>
          At my last hackathon I learned what observability means. At this one I
          learned graphs.
        </P>

        <P>
          That wasn&apos;t an accident. In the week of nights leading up to
          this, I went through the previous JacHacks winners and noticed that
          every single one of them put the graph primitive at the center. So I
          spent those evenings on graph theory instead of on my idea.
        </P>

        <P>
          Two things made it click. First, asking Claude to build me animated
          demo pages — watching a traversal run beats reading about one. Second,
          asking it to map graphs onto something I already know cold. It walked
          me through how design rule checks in ECAD tools represent a netlist as
          a graph and use that to find hanging nets, and that landed instantly,
          because I&apos;ve stared at that exact failure a hundred times.
        </P>

        <P>
          What I believe now: turning your data into a graph doesn&apos;t solve
          a problem, it hands you a toolbox. Pathfinding, connectedness,
          bottlenecks, orphans, reachability — all of it comes free the moment
          the shape is right. You reach for a graph when the questions
          you&apos;re asking are about relationships rather than contents.
        </P>

        <GraphToolbox />

        <H2>The Jac language</H2>
        <P>
          The pitch is genuinely good, and I want to say that first. One
          language for backend, frontend, and AI — Python and JavaScript and C
          all landing in the same environment. Graphs as a first-class
          primitive, with nodes, edges, and walkers built into the syntax. byLLM
          as a language-level thing, so calling a model is a function call
          instead of a glue layer. Persistence for free, keyed to
          reachability from root — no database, no ORM, no save calls. If
          you&apos;re building agentic systems, that&apos;s a real reduction in
          moving parts, and fewer tokens burned gluing them together. One
          language to rule them all. We&apos;ve heard that before, but the graph
          and byLLM primitives are a genuinely fresh argument for it.
        </P>

        <P>The implementation fought me for twelve hours.</P>

        <P>
          The docs and the compiler did not agree. Repeatedly, and not on edge
          cases — on signatures, on behavior, on features that flat out did not
          exist in the thing I was compiling against. I had spent evenings that
          week pulling and distilling the entire doc set into an LLM wiki so my
          agents would have clean reference material, and it turned out to be
          worthless, because I had very carefully distilled a pile of errors.
          The MCP server didn&apos;t help. There was no editor language support
          pack. So the loop became: read the docs, get it wrong, read the
          compiler source, guess, build, repeat.
        </P>

        <Shot
          file="celsius-terminal.jpg"
          alt="A can of Celsius resting on a laptop screen running an agent session in the terminal"
          caption="11:54am — three agents going at once (main, site, appui), and the fuel for it"
          aspect="3 / 4"
        />

        <P>
          Here&apos;s the part I can&apos;t get past. This is a language whose
          entire pitch is that it is AI-native. The primary consumer of your
          documentation is a model. And the documentation is wrong. Put an agent
          on CI that regenerates the docs when the compiler changes. That is an
          afternoon of work sitting directly under your whole value proposition.
        </P>

        <P>
          I also wasn&apos;t alone in this. The sentiment was everywhere on the
          floor. One team wrote their entire project in Python and ran it
          through a Python-to-Jac converter they found on the internet.
        </P>

        <P>
          Hosting had its own version of this. The event pushed you toward
          JacHammer, their all-in-one platform, so that judges could open a live
          URL instead of crowding around a laptop. I never got it to work. My
          build died on their infrastructure with an import error thrown by
          their own error reporter, and after enough rounds of that I gave up
          and pushed to Railway instead — which handed me a 502 about an hour
          before judging.
        </P>

        <Shot
          file="jachammer-fail.jpg"
          alt="A JacHammer preview URL showing a jac-error-reporter overlay reading: Importing binding name 'app' is not found"
          caption="JacHammer, the platform we were encouraged to ship on, declining to build my app"
          aspect="2400 / 1502"
        />

        <Shot
          file="railway-502.jpg"
          alt="A Railway error page reading Application failed to respond for the orgmem production deployment"
          caption="the fallback, forty minutes later"
          aspect="2400 / 1502"
        />

        <P>
          What I think a new language like this actually needs isn&apos;t better
          docs — it&apos;s a fine-tuned model that already knows the language.
          Give me something that writes Jac natively and I never have to open a
          page. Until that exists, every hour I spend on your syntax is an hour
          I&apos;m not spending on my idea.
        </P>

        <P>
          I have never created a programming language or started a community
          around one, so take that for what it&apos;s worth. Maybe it gets
          there. I&apos;d bet against it.
        </P>

        <H2>Where I lost it</H2>
        <P>
          The judges liked the demo. Then they started asking questions.
        </P>

        <P>
          &ldquo;If you had to edit data in the graph, how would you do
          it?&rdquo; My answer was that nodes only ever get added, never edited.
          They did not love that answer. Then they asked how the traversals were
          implemented, and I couldn&apos;t really answer, because I don&apos;t
          know graph algorithms that deeply and I hadn&apos;t written them. I
          got a chuckle when I admitted it was Claude that wrote them.
        </P>

        <P>
          It was a real laugh, and it was also the entire problem. I had learned
          enough graph theory to know why a graph was the right shape for my
          problem. I had not learned enough to defend the implementation when
          someone pushed on it. The demo is what gets you into the conversation.
          The questions are the actual test, and that&apos;s where I got taken
          apart.
        </P>

        <H2>Losing to ants</H2>
        <P>
          There were ten judging groups with eight projects each. Trails came
          out of mine.
        </P>

        <P>
          Three high schoolers built it. The idea is stigmergy — five agents
          walking an evidence graph like ants, leaving pheromone trails on the
          connections they find useful instead of talking to each other, pointed
          at fraud investigation. Traction took first in the Agentic AI track;
          Trails took second.
        </P>

        <P>
          Do I know exactly why it beat mine? No, and that&apos;s the part
          I&apos;m still chewing on, because I can&apos;t fix what I can&apos;t
          name. My best guess is that theirs was one idea, in one domain, with a
          reason the graph had to be a graph. Mine was a very good graph looking
          for a room. Or maybe I just answered the questions badly. Probably
          some of both.
        </P>

        <P>
          I still think OrgMem is a strong project and could be a real product
          for small and mid-sized companies if someone executed it properly.
          That belief and two dollars gets you nothing at a hackathon.
        </P>

        <H2>A room full of high schoolers</H2>

        <P>
          A lot of this event was high schoolers and incoming freshmen, and I
          mean that as a compliment. Wirejac was four of them: a coordinator
          agent that takes a change request, builds an impact plan, and routes
          work through separate client, server, device, deployment, and
          monitoring workspaces — down to an ESP32 running MicroPython and
          collecting accelerometer data. Full stack plus firmware, in a day.
        </P>

        <P>
          That&apos;s not a toy. They are better with these tools than most
          working engineers I know, and I don&apos;t think it&apos;s a fluke.
          They started here.
        </P>

        <H2>What I&apos;m taking</H2>
        <P>
          Didn&apos;t place, again. What I walk out with is graph theory, a very
          strong opinion about developer experience, and one specific correction
          to make: build the wow, yes — but know the thing underneath it well
          enough to survive four minutes of a stranger poking at it. The demo
          opens the conversation. It doesn&apos;t finish it.
        </P>

        <P>
          Also, thirteen hours is too long. Whatever the eight-hour version of
          this event looks like, it&apos;s better.
        </P>

        <P>See you at the next one.</P>

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
