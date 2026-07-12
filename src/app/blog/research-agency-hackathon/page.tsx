import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "the wrong strategy",
  description:
    "Reflections from the World's Largest Hermes Buildathon (GrowthX, SF) — 1,247 applied, 50 got in. I built a real AI research agency in the cloud and learned more from losing than a trophy would have taught me.",
};

const IMAGE_DIR = "/images/blog/research-agency-hackathon/";

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

// The tweet we frame on the lab-bench marketing site, rebuilt in the terminal
// palette. Links out to the original post.
function Tweet() {
  return (
    <a
      href="https://x.com/Star_Knight12/status/2026925661689114813"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Post by Prasenjit on X: to keep up with AI, you need to be unemployed"
      className="term my-6 block p-4 no-underline transition hover:border-green-dim"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-panel text-base font-bold text-green">
          P
        </div>
        <div className="min-w-0 leading-tight">
          <span className="flex items-center gap-1 font-bold text-text">
            Prasenjit
            <svg
              viewBox="0 0 22 22"
              className="h-[18px] w-[18px] flex-none"
              aria-label="Verified account"
              role="img"
            >
              <path
                fill="#1d9bf0"
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.749 1.688.878.633.13 1.29.08 1.896-.144.274.586.705 1.086 1.245 1.44.54.355 1.17.554 1.816.572.647-.018 1.276-.217 1.817-.572.54-.354.972-.854 1.245-1.44.604.239 1.266.303 1.906.184.64-.12 1.231-.417 1.705-.859.442-.474.739-1.066.858-1.706.12-.64.055-1.301-.184-1.906.586-.274 1.086-.705 1.44-1.245.356-.54.555-1.17.574-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              />
            </svg>
          </span>
          <span className="text-xs text-text-dim">@Star_Knight12</span>
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
        to keep up with AI, you need to be unemployed
      </p>
      <p className="mt-3 text-xs text-text-dim">
        <span className="text-text">499.7K</span> views · Feb 26, 2026
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-dim">
        <span>
          <b className="text-text">11,251</b> Likes
        </span>
        <span>
          <b className="text-text">1,364</b> Reposts
        </span>
        <span>
          <b className="text-text">780</b> Replies
        </span>
      </div>
    </a>
  );
}

// "Pulling focus" — how I explained the product to the judges: open on the
// abstract shape, then zoom into the stack.
function FocusPull() {
  const box =
    "rounded border border-line bg-black/20 px-2.5 py-1 text-text whitespace-nowrap";
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ how I explained it
      </div>
      <div className="space-y-3 p-4 text-xs">
        <div className="text-green-dim">// start abstract</div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className={box}>your repo</span>
          <span className="text-green-dim">→</span>
          <span className={box}>agents do the work</span>
          <span className="text-green-dim">→</span>
          <span className={box}>PRs with measured gains</span>
        </div>

        <div className="pl-1 text-green-dim">⤵ then zoom into the stack</div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <span className={box}>read the repo</span>
          <span className="text-green-dim">→</span>
          <span className={box}>pull &amp; rank papers</span>
          <span className="text-green-dim">→</span>
          <span className={box}>run experiments in the cloud</span>
          <span className="text-green-dim">→</span>
          <span className={box}>open the PR</span>
        </div>

        <div className="pt-1 text-text-dim">
          <span className="text-green-dim">//</span> orchestrated by Hermes,
          running on Cloudflare
        </div>
      </div>
    </figure>
  );
}

export default function ResearchAgencyHackathonPost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
      <SectionHeader
        path="~/blog"
        command="cat research-agency-hackathon.md"
        title="1,247 applied, 50 of us got in, and I brought the wrong strategy"
      >
        The World&apos;s Largest Hermes Buildathon — 2026-07-11
      </SectionHeader>

      <article>
        <P>
          Twelve hundred and forty-seven people applied to this thing. They took
          fifty. I still don&apos;t totally know how I landed in that fifty, and
          that feeling ended up mattering more than I expected, so let me start
          there.
        </P>

        {/* event info screen — details preserved here in case the event page disappears */}
        <div className="term my-6 p-4 text-xs leading-relaxed">
          <div className="mb-2 text-text-dim">
            <span className="text-amber glow-amber">[ info ]</span> event details
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <dt className="text-green-dim">event</dt>
            <dd className="text-text">World&apos;s Largest Hermes Buildathon</dd>
            <dt className="text-green-dim">host</dt>
            <dd className="text-text">GrowthX</dd>
            <dt className="text-green-dim">where</dt>
            <dd className="text-text">San Francisco</dd>
            <dt className="text-green-dim">when</dt>
            <dd className="text-text">July 11, 2026 · 8-hour sprint</dd>
            <dt className="text-green-dim">track</dt>
            <dd className="text-text">
              AI as an Agency (of 3: Virality · Revenue · Agency)
            </dd>
            <dt className="text-green-dim">scale</dt>
            <dd className="text-text">1,247 applied · 50 built</dd>
            <dt className="text-green-dim">built on</dt>
            <dd className="text-text">Hermes Agent (Nous Research) + OpenAI</dd>
            <dt className="text-green-dim">result</dt>
            <dd className="text-amber glow-amber">
              did not place — and worth every minute
            </dd>
            <dt className="text-green-dim">links</dt>
            <dd className="flex flex-wrap gap-x-3">
              <A href="https://lab-bench.app">live build ↗</A>
              <A href="https://demo.lab-bench.app">demo ↗</A>
              <A href="https://luma.com/hermesbuildathonSF">event ↗</A>
              <A href="https://growthx.club/docs/hermes-buildathon-builder-handbook">
                handbook ↗
              </A>
              <A href="https://github.com/frankie-eight-days/watson">repo ↗</A>
            </dd>
          </dl>
        </div>

        <P>
          The night before, the organizers dropped a message with the stats on
          the room. Median 8.3 years of experience. 31% active founders, a lot
          of them ex-FAANG or YC. Nearly half were engineers, half of those
          staff or above. Sixty percent already building on LLMs day to day. I
          read that on my couch after my kid went down and thought, pretty
          clearly, that I did not belong in that room. I&apos;m a hardware guy. I
          design electronics. I don&apos;t ship software for a living, I&apos;ve
          never broken four figures in MRR, and I&apos;ve never raised a dollar.
          The next morning I met someone doing over a million in ARR who, when I
          asked him about it, was so relaxed and humble about the whole thing
          that it kind of reset my idea of what confident looks like. He
          wasn&apos;t there to win anything. He just wanted to build something
          fun and meet some people.
        </P>

        <Shot
          file="organizer-announcement.png"
          alt="Organizer announcement the night before with statistics on the builders in the room"
          caption="the message the night before. I read this on the couch and thought: I don't belong here"
          fit="contain"
          aspect="9 / 19.5"
          className="mx-auto sm:max-w-[300px]"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        <P>
          I did not have that energy. I had something to prove. Hold that
          thought, because it&apos;s the whole story.
        </P>

        <Shot
          file="hermes-agent-screen.jpg"
          alt="The buildathon floor mid-sprint with the Hermes Buildathon splash projected on the screen"
          caption="the room, mid-sprint. that's the buildathon splash up on the screen"
          aspect="3 / 4"
        />

        <H2>What I built</H2>
        <P>
          The pitch, roughly how I gave it to the judges: builders are too busy
          shipping to keep up with frontier research, so I built{" "}
          <A href="https://lab-bench.app">
            a research agency staffed by AI agents
          </A>
          . You point it at your repo, the agents pull the newest papers, pick
          the ones that actually fit your code, run real experiments in the
          cloud, and open pull requests with measured performance gains
          attached.
        </P>

        <Tweet />

        <P>
          I was on the &ldquo;AI as an Agency&rdquo; track, one of three. The
          other two were Virality and Revenue. The track is what it sounds like:
          a team of agents standing in for a whole human function. A manager
          agent that plans, specialists that execute, work handed between them,
          memory that persists. My system mapped onto that cleanly, and the part
          I&apos;m proud of is that none of it was faked. It ran real experiments
          and opened{" "}
          <A href="https://github.com/frankie-eight-days/watson-vending-bench/pulls">
            two real PRs
          </A>{" "}
          against a real benchmark.
        </P>

        <Shot
          file="tool-lab.png"
          alt="The Lab view of the tool showing total assets baseline versus candidate runs, with the winning run at plus fifty percent"
          caption="the Lab view: baseline vs candidates, live. the winner cleared +50% on this recorded run"
          aspect="2670 / 1488"
        />

        <H2>They literally gave us the answer key</H2>
        <P>
          Here&apos;s the thing that still gets me. GrowthX{" "}
          <A href="https://growthx.club/docs/hermes-buildathon-builder-handbook">
            published the entire scoring rubric
          </A>{" "}
          ahead of time. Points equal (level minus one) times a weight, every
          parameter scored one to five. The root parameter, &ldquo;a working
          product shipping real output,&rdquo; was worth up to 80 and kept
          paying past the ceiling. Observability was 28 points, and the handbook
          flat out said most teams skip it, so, free points. Then the partner
          power-ups: wire up each of the six sponsors for real, 25 apiece, all
          six worth 150. A hundred and fifty. That&apos;s almost the entire
          technical base of the rubric, sitting there for anyone willing to
          integrate some tools and screenshot the dashboards.
        </P>

        <Shot
          file="prizes-whats-at-stake.png"
          alt="Prize breakdown showing what first place was worth at the Hermes Buildathon"
          caption="what first place was worth. $10k+ and the whole sponsor stack"
          fit="contain"
          aspect="9 / 19.5"
          className="mx-auto sm:max-w-[300px]"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        <P>
          I knew all of this. I read the handbook twice. And I still walked in
          and pointed almost all of my energy at the hardest, deepest 80-point
          parameter, because the imposter thing had me trying to out-engineer the
          room.
        </P>

        <H2>What actually went well</H2>
        <P>
          Not all of it was a lesson in humility. A few evenings that week, after
          bedtime, I knocked out the two things most likely to kill me on the
          day. I found an agent benchmark light enough to run over and over in
          the cloud, cheap and fast, and I proved out that I could run the whole
          thing inside Cloudflare containers before I ever showed up. When the
          clock started, those weren&apos;t question marks anymore. That prep is
          the only reason I had anything real to show.
        </P>

        <Shot
          file="pizza-and-terminal.jpg"
          alt="A slice of pizza beside a laptop running terminal experiments during the buildathon"
          caption="dinner and the experiments, same lap"
          aspect="3 / 4"
        />

        <P>
          I also finally learned what &ldquo;observability&rdquo; means, and it
          happened in the least glamorous way possible. Deep in the crunch, a
          Cloudflare mentor said the word to me and it just clicked. It&apos;s
          being able to see what your system is doing while it runs in the cloud,
          instead of staring at a black box and hoping. I&apos;d never run real
          infrastructure before, so this was genuinely new to me. Watching each
          agent, the cost of every step, where things stall, turns out to be its
          own discipline, and you don&apos;t have to build it from scratch. There
          are tools for exactly this. Sounds obvious written down. It changed how
          I think about anything that runs on its own.
        </P>

        <P>
          On top of that I got a lot better at pitching something technical.{" "}
          <Link href="/blog/one-hour-hackathon" className="tlink">
            My last hackathon project
          </Link>{" "}
          fit in a sentence. This one didn&apos;t. So I built the explanation
          like pulling focus: open on the most abstract version, what goes in,
          what happens, what comes out, then slowly zoom into the stack. The old
          founder framing still carried it. Here&apos;s a specific pain,
          here&apos;s how I take it away.
        </P>

        <FocusPull />

        <H2>Where I got it wrong</H2>
        <P>
          I broke my own number one rule, which is get to a working demo first
          and polish later. I know this rule. I&apos;ve won on this rule. But
          intimidation is a terrible project manager, and mine kept telling me to
          build something more ambitious to justify my seat. So I over-scoped.
        </P>
        <P>
          It cost me in the most concrete way possible. That 150 in power-ups
          needed a submission page with screenshots proving I&apos;d used each
          tool. I was assembling that page at 3:58 for a 4:00 deadline and had to
          skip it entirely just to get my submission in on time. I left the
          biggest, easiest bucket of points on the table. Not because I
          couldn&apos;t do it, but because I spent my hours on the hardest thing
          instead of the smartest thing. My pitch was under-rehearsed for the
          same reason. Too much scope, no minutes left to practice.
        </P>
        <P>
          The other miss was the idea. I came in married to the research-agency
          concept. But two of the three tracks were Virality and Revenue, and the
          whole room was chasing traction and money in eight hours. There were
          moments I could&apos;ve read that and bent toward something simpler and
          sharper. I didn&apos;t. Falling for your solution instead of the
          problem is the oldest mistake there is, and I made it in front of
          exactly the crowd you&apos;d least want to make it in front of.
        </P>

        <H2>Reading the room</H2>
        <P>
          This is the part I keep coming back to. Three of the five finalist
          demos were dialed straight into what people want, and they proved it in
          real time. One was an end-to-end clipper that raced to publish the
          first clip of a livestream, since the first clip is the one that goes
          viral, and it pulled 600-plus views on TikTok during the event. Wild.
        </P>

        <P>
          But the one that really got me: somebody took r/AmIOverreacting, that
          subreddit where people post a screenshot of a fight and ask strangers
          to judge who started it, and turned it into an app you drop straight
          into your group chat. That&apos;s such a good read on how people
          actually behave. Obvious the second you see it, invisible until someone
          builds it.
        </P>
        <P>
          For years I&apos;d watch VCs tweet about founders who just get what
          people want, and I never really understood what they meant by it. I
          think I do now. It is genuinely hard to unhook yourself from the thing
          you want to build and look honestly at the thing people would actually
          use. That gap is the whole skill. None of these demos were the most
          technically complicated builds in the room. They were the most aware. I
          optimized for depth. They optimized for whether anyone would care, and
          the day rewarded theirs.
        </P>

        <H2>Is it even a good product?</H2>
        <P>
          Here&apos;s the harder question, honestly asked. Is this even a good
          product? I think the need is real. There are founders, small teams, and
          solo builders who genuinely can&apos;t keep up with how fast AI
          research moves, and an auto-researcher that reads new papers and turns
          them into working improvements would help those people a lot. The field
          matters and the pain is real.
        </P>
        <P>
          I just don&apos;t think what I built is the right shape for it. The
          tools are right. Cloudflare is a great home for this. Hermes is
          genuinely impressive. And there&apos;s something special in an
          assistant with persistent memory that dreams between runs, builds its
          own skills, and gets better at researching over time. Pulling papers
          nightly, writing and testing code in the cloud, cross-referencing what
          it read against what it actually shipped. You point it at your repo and
          let it run forever. Run it nightly against a sales agent you want to
          push further, or a model you&apos;re fine-tuning against some in-house
          benchmark, and let the improvements stack up.
        </P>
        <P>
          But{" "}
          <A href="https://demo.lab-bench.app">the form factor I demoed</A>{" "}
          isn&apos;t it. I built a whole GUI, a kanban board with cards sliding
          across columns, and if I&apos;m honest, most of that was there so I
          could wire in the Convex sponsor. In real life this thing wants to be a
          CLI, or an MCP with a thin dashboard you can log into to check on it.
          Something you point and forget. The catch is that a bare command line
          doesn&apos;t give you great steering over an agent loop like this, and
          steering matters here, so I don&apos;t fully know where it lands.
          That&apos;s the part I&apos;m still chewing on. What I am sure of is
          that the auto-researcher is a real and important idea, that builders
          would benefit from it, and that I brought the wrong container for it to
          a room that was grading the container.
        </P>

        <Shot
          file="library-view.png"
          alt="The Library view of the tool, a kanban board of research papers moving from discovered to screened to cited"
          caption="the kanban I'm talking about: papers moving discovered → screened → cited. pretty, but probably the wrong form factor"
          aspect="2816 / 1762"
        />

        <H2>The small, human stuff</H2>
        <P>
          For the record, and because I do actually replay these days: carry
          mints. I ran on diet energy drinks the whole time and my breath paid
          for it, which is not the edge you want when you&apos;re pitching two
          feet from a judge. I laughed when I clocked it, then wrote it down,
          because that&apos;s the point of going back through the tape.
        </P>
        <P>
          So where do I land. I think I built something legitimately good. A real
          system, real experiments, real output, solo, on a clock, on a stack
          I&apos;d mostly just learned. The quality wasn&apos;t the problem. I
          brought the right build to the wrong scoreboard, and I let feeling out
          of place push me toward proving instead of winning. I can do the hard
          technical thing. The muscle I need to grow is the other one: reading a
          room, picking the metric that matters, and being honest about what
          people actually want instead of what I feel like making. I know which
          of those I&apos;m good at, and I know which one I owe myself.
          That&apos;s worth more to me than the trophy would&apos;ve been.
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
