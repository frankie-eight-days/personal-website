import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "blog" };

const posts = [
  {
    slug: "china-personal",
    title: "A tunnel has two openings",
    date: "2026-09-12",
    note: "Personal growth, my first trip to China: something like agoraphobia, a river tunnel every day, a Zeekr 009, and a question about dynamism versus central planning that sixteen days can't answer.",
  },
  {
    slug: "yc-interview",
    title:
      "YC F26: twenty-four hours' notice, ten minutes in the room, and the proof point I didn't have",
    date: "2026-08-07",
    note: "My YC interview for sev10: solo, pre-product, rejected by 9 PM with the best free advice I've ever gotten.",
  },
  {
    slug: "jachacks-sf",
    title: "Twelve hours, a language I couldn't stand, and a graph I couldn't defend",
    date: "2026-07-26",
    note: "JacHacks SF — I learned graph theory, built OrgMem, and got taken apart in Q&A.",
  },
  {
    slug: "research-agency-hackathon",
    title: "1,247 applied, 50 of us got in, and I brought the wrong strategy",
    date: "2026-07-11",
    note: "Reflections from the Hermes Buildathon — I built a real AI research agency in the cloud, and learned more from losing.",
  },
  {
    slug: "one-hour-hackathon",
    title: "One hour on the clock: winning the Agent Forge hackathon",
    date: "2026-07-04",
    note: "1st place at a one-hour hackathon — prep, AI judges, and a diving FFmpeg catch.",
  },
];

const planned = [
  {
    title: "My favorite EDAs (and when I reach for each)",
    note: "Altium vs KiCAD vs LTSpice — the working engineer's take.",
  },
  {
    title: "Designing a 48V USB-C hub: what surprised me",
    note: "draft",
  },
  {
    title: "Hackathon hardware kit: what's in my bag",
    note: "draft",
  },
];

export default function BlogPage() {
  return (
    <div className="wrap py-10 sm:py-14">
      <SectionHeader path="~/blog" command="tail -f posts.log" title="blog">
        Notes, teardowns, and opinions.
      </SectionHeader>

      <div className="term p-5">
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug} className="flex items-start gap-2 text-sm">
              <span className="text-green-dim">▸</span>
              <div>
                <span className="text-xs text-text-dim">{p.date}</span>{" "}
                <Link href={`/blog/${p.slug}`} className="tlink">
                  {p.title}
                </Link>
                <span className="ml-2 text-xs text-text-dim">// {p.note}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-sm text-text-dim">
          <span className="text-amber glow-amber">[ queued ]</span> up next{" "}
          <span className="cursor" />
        </div>
        <ul className="mt-3 space-y-3">
          {planned.map((p) => (
            <li key={p.title} className="flex items-start gap-2 text-sm">
              <span className="text-green-dim">▸</span>
              <div>
                <span className="text-green">{p.title}</span>
                <span className="ml-2 text-xs text-text-dim">// {p.note}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
