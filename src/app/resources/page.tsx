import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ImageFrame from "@/components/ImageFrame";
import { books, tools, benchImage } from "@/data/resources";

export const metadata: Metadata = { title: "resources" };

export default function ResourcesPage() {
  return (
    <div className="wrap space-y-12 py-10 sm:py-14">
      <SectionHeader path="~/resources" command="ls library/ tools/">
        The textbooks I actually reach for, and the EDA / bench tools I build with.
        A living shelf — edit freely.
      </SectionHeader>

      <figure>
        <ImageFrame
          src={benchImage}
          alt="My electronics bench"
          dir="/images/resources/bench/"
          className="aspect-[2/1] sm:aspect-[21/9]"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
        <figcaption className="mt-2 text-xs text-text-dim">
          <span className="text-green-dim">$</span> cat ~/bench.txt — where it all
          happens
        </figcaption>
      </figure>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-wider text-cyan">
          // library
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.title} className="term flex flex-col">
              <ImageFrame
                src={b.cover}
                alt={b.title}
                dir="/images/resources/textbooks/"
                bare
                className="aspect-[3/4]"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold leading-tight text-green">
                  {b.title}
                </h3>
                <div className="text-xs text-text-dim">{b.author}</div>
                {b.note && (
                  <p className="mt-1 text-xs leading-relaxed text-text-dim">
                    {b.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-wider text-cyan">
          // tools &amp; EDAs
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {tools.map((t) => (
            <div key={t.name} className="term flex items-start gap-3 p-4">
              <span className="tag shrink-0">{t.kind}</span>
              <div>
                <div className="text-sm font-semibold text-green">{t.name}</div>
                <p className="text-xs text-text-dim">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
