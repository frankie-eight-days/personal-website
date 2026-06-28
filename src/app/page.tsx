import Hero from "@/components/Hero";
import LsTabs from "@/components/LsTabs";
import ProjectPanel from "@/components/ProjectPanel";
import RolePanel from "@/components/RolePanel";
import AchievementCard from "@/components/AchievementCard";
import Education from "@/components/Education";
import { software } from "@/data/software";
import { hardware } from "@/data/hardware";
import { current, headline, internships } from "@/data/experience";
import { achievements } from "@/data/achievements";

export default function Home() {
  return (
    <div className="wrap space-y-14 py-10 sm:py-14">
      <Hero />

      <LsTabs
        command="ls"
        labels={software.map((p) => p.tab ?? p.title)}
        viewAllHref="/software"
      >
        {software.map((p) => (
          <ProjectPanel key={p.slug} project={p} />
        ))}
      </LsTabs>

      <LsTabs
        command="cd /hardware; ls"
        labels={hardware.map((p) => p.tab ?? p.title)}
        viewAllHref="/hardware"
      >
        {hardware.map((p) => (
          <ProjectPanel key={p.slug} project={p} />
        ))}
      </LsTabs>

      <LsTabs
        command="cd /experience; ls"
        labels={[current.tab ?? current.company, headline.tab ?? headline.company, "Internships"]}
        viewAllHref="/experience"
      >
        <RolePanel role={current} />
        <RolePanel role={headline} />
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-cyan">
            // internships &amp; earlier
          </div>
          {internships.map((r) => (
            <div key={r.company + r.title} className="rounded-md border border-line p-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-sm font-semibold text-green">{r.company}</h4>
                <span className="text-xs text-text-dim">
                  {r.title} · {r.period}
                </span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-xs text-text-dim">
                    <span className="shrink-0 text-green-dim">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LsTabs>

      <Education />

      {/* most proud of — now below the listings */}
      <section>
        <div className="mb-6 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold text-green glow">
            <span className="text-green-dim">$</span> ./most_proud_of
          </h2>
          <span className="text-xs text-text-dim">// off-resume highlights</span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {achievements.map((a) => (
            <AchievementCard key={a.title} a={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
