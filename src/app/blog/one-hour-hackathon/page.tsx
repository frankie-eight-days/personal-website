import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "one hour on the clock",
  description:
    "Winning the Agent Forge mini hackathon (Tencent EdgeOne) — one hour of hacking, an AI agent picking the finalists, and why the real hack happened the week before.",
};

const IMAGE_DIR = "/images/blog/one-hour-hackathon/";

// Photos placed by hand in the article below. Anything else dropped into
// public/images/blog/one-hour-hackathon/ collects in the gallery at the end
// on the next build — no code change needed.
const PLACED = new Set(["venue.jpg", "pitch.jpg", "DSC06332.JPG", "IMG_6794.jpeg"]);

function extraImages(): string[] {
  const dir = path.join(process.cwd(), "public", IMAGE_DIR);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f) && !PLACED.has(f))
      .sort()
      .map((f) => IMAGE_DIR + f);
  } catch {
    return [];
  }
}

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

function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-sm leading-relaxed text-text">
      <span className="shrink-0 text-green-dim">▸</span>
      <span>{children}</span>
    </li>
  );
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
  sizes = "(max-width: 768px) 100vw, 672px",
}: {
  file: string;
  alt: string;
  caption: string;
  aspect?: string;
  className?: string;
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
          className="object-cover"
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> {caption}
      </figcaption>
    </figure>
  );
}

export default function OneHourHackathonPost() {
  const extras = extraImages();

  return (
    <div className="wrap py-10 sm:py-14">
      <SectionHeader
        path="~/blog"
        command="cat one-hour-hackathon.md"
        title="one hour on the clock"
      >
        Winning the Agent Forge hackathon — 2026-07-03
      </SectionHeader>

      <article className="max-w-2xl">
        <P>
          My first hackathon back in a long while. Somehow it ended with a
          first-place finish.
        </P>

        {/* event info screen — details preserved here in case the event page disappears */}
        <div className="term my-6 p-4 text-xs leading-relaxed">
          <div className="mb-2 text-text-dim">
            <span className="text-amber glow-amber">[ info ]</span> event details
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <dt className="text-green-dim">event</dt>
            <dd className="text-text">
              Agent Forge Mini Hackathon: One-click Agent Deploy
            </dd>
            <dt className="text-green-dim">hosts</dt>
            <dd className="text-text">
              AI Builders · Tencent EdgeOne · Digital Jungle SF
            </dd>
            <dt className="text-green-dim">where</dt>
            <dd className="text-text">
              Digital Jungle, 972 Mission St, San Francisco
            </dd>
            <dt className="text-green-dim">when</dt>
            <dd className="text-text">July 3, 2026 · one (1) hour of hacking</dd>
            <dt className="text-green-dim">result</dt>
            <dd className="text-amber glow-amber">1st place — “Closing Time”</dd>
            <dt className="text-green-dim">links</dt>
            <dd className="flex flex-wrap gap-x-3">
              <A href="https://luma.com/agentforgesf">event page ↗</A>
              <A href="https://www.youtube.com/watch?v=tB7Gf_azlG0">pitch video ↗</A>
              <A href="https://github.com/frankie-eight-days/closing-time">repo ↗</A>
            </dd>
          </dl>
        </div>

        <H2>Blame Ali</H2>
        <P>
          Credit where it&apos;s due: I only started going to hackathons again
          because of my friend{" "}
          <A href="https://www.linkedin.com/in/ali-amjad-a80732137/">
            Ali Amjad
          </A>
          . He dropped everything to move to the Bay Area for three months to
          chase his dream of being a founder, and he&apos;s been documenting the
          whole thing in{" "}
          <A href="https://www.linkedin.com/in/ali-amjad-a80732137/recent-activity/all/">
            daily posts
          </A>
          . Spoiler: I finally made it into one on day 67. He&apos;s an absolute
          gem, and if you&apos;re not already following him, I&apos;d really
          recommend it. He&apos;s going to do great things.
        </P>

        <H2>The format: one hour. That&apos;s it.</H2>
        <P>
          The hackathon itself was a little strange: one hour of hacking. Not
          one day. One hour.
        </P>

        <Shot
          file="venue.jpg"
          alt="Two attendees in front of the Agent Forge Hackathon kickoff screen at Digital Jungle SF"
          caption="kickoff at Digital Jungle — sixty minutes on the clock"
          aspect="4 / 3"
        />

        <P>
          It fit the theme, though. The event was built around Tencent&apos;s
          new EdgeOne Makers platform, basically a one-stop shop for frontend,
          backend, and (most importantly) putting agents in the cloud. The whole
          point was to show how fast you could get a working demo running on it.
          One hour to build something real is a pretty bold way to advertise
          your platform, and honestly, it worked.
        </P>
        <P>
          And the platform held up. Great HTML docs that Claude could peruse,
          solid CLI and MCP tooling. I was genuinely impressed with what people
          shipped in sixty minutes: an agent that scans your email inbox for git
          comments and generates PRs (or something like that, I&apos;m not a
          SWE), a radiologist&apos;s agent (I&apos;ll be honest, I kind of
          blacked out for that one since it was the demo right after mine), and
          an in-browser agent that helps with accessibility.
        </P>

        <H2>The real hack happened before the hackathon</H2>
        <P>
          With only an hour on the clock, I knew the actual work had to happen
          ahead of time. So a couple of evenings that week, after my kiddo went
          to bed, I prepped:
        </P>
        <ul className="mb-4 space-y-2">
          <LI>
            Toyed around with the platform and got my accounts and console set
            up (the hackathon really did its job of advertising the platform,
            LOL)
          </LI>
          <LI>Settled on an idea I knew would appeal to the judges and sponsors</LI>
          <LI>Planned how I&apos;d divide the work and prompts among my agents</LI>
          <LI>
            Built a local knowledge base of the platform docs, so during the
            hour Claude could grep over files I already had instead of fetching
            docs live
          </LI>
        </ul>
        <P>
          Claude was really, really good for this. I ran /deep-research on the
          judges, sponsors, and founders, then turned the results into an HTML
          page I could review, links and all.
        </P>
        <P>
          I don&apos;t consider any of this cheating. Anybody else could have
          done the same prep beforehand. The one-hour constraint just moves the
          competition to the week before.
        </P>

        <H2>The AI gatekeeper</H2>
        <P>
          Another quirk: only the top five teams got to pitch, and the five were
          screened and ranked by an AI agent. That was a bit daunting. How could
          I make sure the agent saw everything I wanted it to see?
        </P>
        <P>
          My answer was to write for the reader I actually had. I asked Claude
          to put things in the GitHub repo that I knew would appeal to the
          judges, like a README table mapping every feature directly to the
          EdgeOne primitives it used. If an agent is doing the first pass, make
          your repo greppable.
        </P>

        <H2>The hour itself</H2>
        <div className="sm:flex sm:items-start sm:gap-5">
          <ul className="mb-4 min-w-0 flex-1 space-y-2">
            <LI>
              Claude&apos;s /fast mode was a godsend, and I ran Opus agents on
              medium reasoning to keep the speed up. I had three Ghostty tmux
              sessions going with multi-agent orchestration teams dividing the
              work, and I still barely had time.
            </LI>
            <LI>
              I had to make a diving catch on the submission video: 10MB upload
              limit, so I installed FFmpeg and compressed it with about three
              minutes to spare.
            </LI>
            <LI>
              I went solo on purpose. In one hour you&apos;d barely have time to
              divide up the work, let alone conquer it.
            </LI>
            <LI>
              My laptop almost didn&apos;t make it. My git status line showed
              SWAP/MEM:Warning for the entire hackathon. I think it&apos;s time
              to upgrade the personal machine, LOL.
            </LI>
          </ul>
          <Shot
            file="IMG_6794.jpeg"
            alt="Laptop running multiple terminal agent sessions on a hackathon table, Diet Coke alongside"
            caption="the battle station — agents running, swap warning not pictured"
            aspect="3 / 4"
            className="my-2 sm:w-56 sm:shrink-0"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>

        <H2>The pitch</H2>
        <div className="sm:flex sm:flex-row-reverse sm:items-start sm:gap-5">
          <div className="min-w-0 flex-1">
            <P>
              My pitch only took half the time allotted, and honestly, I think
              that was fine. Short, succinct, and punchy lands harder than a
              pitch drawn out for no reason other than filling time.
            </P>
            <P>
              The whole thing is on YouTube if you want to see what a
              half-length pitch looks like:
            </P>
          </div>
          <Shot
            file="pitch.jpg"
            alt="Pitching Closing Time on stage with the dashboard projected behind"
            caption="demoing Closing Time live"
            aspect="3 / 4"
            className="my-2 sm:w-56 sm:shrink-0"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>

        {/* pitch video */}
        <div className="term my-6 overflow-hidden">
          <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
            ▶ play pitch_video.mp4
          </div>
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/tB7Gf_azlG0"
              title="Closing Time — Agent Forge hackathon pitch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <H2>What going back reminded me</H2>
        <P>The basics:</P>
        <ul className="mb-4 space-y-2">
          <LI>
            Dive hard into the sponsor stuff. The event exists because of them,
            and they&apos;re the ones judging.
          </LI>
          <LI>
            It&apos;s all about the demo. Get to a working demo first, polish
            later.
          </LI>
          <LI>
            The founder-pitch framing works: solve an acute problem, ideally for
            a niche.
          </LI>
        </ul>
        <P>
          I built{" "}
          <A href="https://github.com/frankie-eight-days/closing-time">
            Closing Time
          </A>
          , an AI data analyst for small businesses that writes and runs live
          Python on EdgeOne. It took first. Day one back. See you at the next
          one.
        </P>

        <Shot
          file="DSC06332.JPG"
          alt="First place announcement slide for Closing Time at the Agent Forge Mini Hackathon"
          caption="1st place — Closing Time"
          aspect="3 / 2"
        />

        {/* anything else dropped into the folder lands here on next build */}
        {extras.length > 0 && (
          <>
            <H2>More photos</H2>
            <Gallery images={extras} alt="Agent Forge hackathon photos" />
          </>
        )}

        <div className="mt-10 text-sm">
          <Link href="/blog" className="tlink">
            ← cd ~/blog
          </Link>
        </div>
      </article>
    </div>
  );
}
