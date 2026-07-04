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
      <div className="mx-auto max-w-2xl">
      <SectionHeader
        path="~/blog"
        command="cat one-hour-hackathon.md"
        title="one hour on the clock"
      >
        Winning the Agent Forge hackathon — 2026-07-03
      </SectionHeader>

      <article>
        <P>
          Last week I took first place at a hackathon with exactly one hour of
          hacking time. The win was nice. The format is what stuck with me: a
          one-hour hackathon is not a smaller version of a normal one.
          It&apos;s a different game.
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
          Credit where it&apos;s due. I&apos;d stopped going to hackathons for
          years, and the person who pulled me back in is my friend{" "}
          <A href="https://www.linkedin.com/in/ali-amjad-a80732137/">
            Ali Amjad
          </A>
          . He dropped everything to move to the Bay Area for three months to
          chase his dream of being a founder, and he&apos;s documented every day
          of it in{" "}
          <A href="https://www.linkedin.com/in/ali-amjad-a80732137/recent-activity/all/">
            daily posts
          </A>
          . I made my first appearance in the series on day 67. Ali is an
          absolute gem, the rare person whose ambition makes everyone around him
          more ambitious. Follow him. He&apos;s going to do great things.
        </P>

        <Shot
          file="venue.jpg"
          alt="Ali and Frank in front of the Agent Forge Hackathon kickoff screen at Digital Jungle SF"
          caption="day 67 — Ali and me at kickoff. his shirt does the recruiting"
          aspect="4 / 3"
        />

        <H2>The one-hour format is a bet, not a gimmick</H2>
        <P>
          The event was built around Tencent&apos;s new EdgeOne Makers platform:
          frontend, backend, and agent runtime in one place, deployment
          collapsed to a click. The one-hour cap was the pitch. Tencent bet that
          idea-to-deployed-agent now fits in sixty minutes, and let a room full
          of strangers test it live.
        </P>
        <P>
          It held. Clean HTML docs my agents could read, CLI and MCP tooling
          that worked first try. People shipped real demos: an inbox agent that
          turns review comments into PRs, a radiologist&apos;s assistant, an
          in-browser accessibility agent.
        </P>

        <H2>The competition moved to the week before</H2>
        <P>
          Compressing execution doesn&apos;t remove the competition. It
          relocates it to preparation. When everyone gets the same sixty
          minutes, the edge is what you carry in the door.
        </P>
        <P>
          My prep, a couple of evenings after my kiddo went to bed: reps on the
          platform, accounts and console ready, an idea chosen for the judges
          and sponsors actually in the room. I ran deep research on those people
          and turned it into a briefing page. I built a local knowledge base of
          the platform docs so my agents could grep disk instead of fetching
          docs live.
        </P>
        <P>
          None of that is cheating. It was available to everyone. A hard clock
          just makes preparation most of the job.
        </P>

        <H2>Write for the reader you actually have</H2>
        <P>
          Only the top five teams pitched, and the screening pass was done by an
          AI agent reading the submissions. So my repo&apos;s first reader was a
          model, not a person. I structured it accordingly: a README table
          mapping each feature to the EdgeOne primitive it uses, claims stated
          where a grep lands on them. When machines do the first pass, machine
          legibility is table stakes. That&apos;s true well beyond hackathons
          now.
        </P>

        <H2>Notes from the hour</H2>
        <div className="sm:flex sm:items-start sm:gap-5">
          <ul className="mb-4 min-w-0 flex-1 space-y-2">
            <LI>
              Orchestration wins. Three tmux sessions of multi-agent teams,
              Claude in fast mode, Opus agents pinned to medium reasoning.
              Latency compounds; a good answer now beats a great one in ninety
              seconds.
            </LI>
            <LI>
              Solo, on purpose. Team coordination has a fixed cost that one hour
              never pays back.
            </LI>
            <LI>
              Leave margin for submission logistics. I hit a 10MB video cap
              late, installed FFmpeg, and compressed the demo with three minutes
              left.
            </LI>
            <LI>
              Respect the hardware floor. My laptop ran the whole hour with a
              swap warning in the status line. The tooling has outgrown the
              machine.
            </LI>
          </ul>
          <Shot
            file="IMG_6794.jpeg"
            alt="Laptop running multiple terminal agent sessions on a hackathon table, Diet Coke alongside"
            caption="the battle station"
            aspect="3 / 4"
            className="my-2 sm:w-56 sm:shrink-0"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>

        <H2>Pitch short</H2>
        <P>
          I used half my allotted pitch time and would do it again. A pitch is
          conviction per second, not coverage.
        </P>

        {/* pitch photo + video, one row on desktop */}
        <div className="sm:flex sm:items-stretch sm:gap-5">
          <Shot
            file="pitch.jpg"
            alt="Pitching Closing Time on stage with the dashboard projected behind"
            caption="demoing live"
            aspect="3 / 4"
            className="my-2 sm:my-6 sm:w-52 sm:shrink-0"
            sizes="(max-width: 768px) 100vw, 208px"
          />
          <div className="term my-6 flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
              ▶ play pitch_video.mp4
            </div>
            <div className="relative aspect-video w-full sm:aspect-auto sm:flex-1">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/tB7Gf_azlG0"
                title="Closing Time — Agent Forge hackathon pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <H2>What I built</H2>
        <P>
          <A href="https://github.com/frankie-eight-days/closing-time">
            Closing Time
          </A>
          : an AI data analyst for small businesses. Payments live in one
          system, books in another, and the questions that keep an owner up at
          night sit in the join. A real analyst costs more than many small
          operators clear in a month. Acute problem, underserved niche, and a
          demo that writes and executes live Python on EdgeOne&apos;s sandbox.
        </P>
        <P>
          The fundamentals held: go deep on the sponsors, demo first and polish
          later, pick a problem that actually hurts. Day one back. See you at
          the next one.
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
    </div>
  );
}
