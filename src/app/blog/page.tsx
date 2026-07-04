import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "blog" };

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
        Notes, teardowns, and opinions. Nothing published yet — here&apos;s what&apos;s
        queued up.
      </SectionHeader>

      <div className="term p-5">
        <div className="text-sm text-text-dim">
          <span className="text-amber glow-amber">[ warn ]</span> no posts compiled
          yet <span className="cursor" />
        </div>
        <ul className="mt-5 space-y-3">
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
