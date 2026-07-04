import Image from "next/image";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section>
      <div className="text-sm">
        <span className="text-green-dim">$</span>{" "}
        <span className="text-green glow">cat education.txt</span>
      </div>
      <h2 className="mt-1.5 mb-3 text-2xl font-bold tracking-tight text-green glow sm:text-3xl">
        education
      </h2>
      <p className="mb-6 max-w-2xl text-sm text-text-dim">{profile.educationBlurb}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {profile.education.map((e) => (
          <article key={e.school} className="term flex items-start gap-4 p-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-panel">
              {e.logo ? (
                <Image
                  src={e.logo}
                  alt={e.short}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain p-1"
                />
              ) : (
                <span className="text-lg font-bold text-green glow">{e.abbr}</span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-green glow">{e.short}</h3>
              <div className="text-sm text-text">{e.degree}</div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-text-dim">
                <span className="tag">{e.detail}</span>
                <span>{e.period}</span>
              </div>
              <p className="mt-2 font-sans text-xs leading-relaxed text-text-dim">{e.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
