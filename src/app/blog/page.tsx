import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "blog" };

const posts = [
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
