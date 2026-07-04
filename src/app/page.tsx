import Hero from "@/components/Hero";
import LsTabs from "@/components/LsTabs";
import ProjectPanel from "@/components/ProjectPanel";
import RolePanel from "@/components/RolePanel";
import AchievementCard from "@/components/AchievementCard";
import Education from "@/components/Education";
import { software } from "@/data/software";
import { hardware } from "@/data/hardware";
import { hackathons } from "@/data/hackathons";
import { current, headline, internships } from "@/data/experience";
import { highlights } from "@/data/achievements";

export default function Home() {
  return (
    <div className="wrap space-y-14 py-10 sm:py-14">
      <Hero />

      <LsTabs
        command="ls"
        title="software/"
        labels={software.map((p) => p.tab ?? p.title)}
        viewAllHref="/software"
      >
        {software.map((p) => (
          <ProjectPanel key={p.slug} project={p} />
        ))}
      </LsTabs>

      <section>
        <div className="mb-4">
          <div className="text-sm">
            <span className="text-green-dim">frank@walsh</span>
            <span className="text-text-dim">:</span>
            <span className="text-cyan">~</span>
            <span className="text-text-dim">$ </span>
            <span className="text-green glow">grep -i &quot;1st&quot; hackathons.log</span>
            <span className="cursor" />
          </div>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-green glow sm:text-3xl">
            hackathon_wins
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {hackathons.map((a) => (
            <AchievementCard key={a.title} a={a} />
          ))}
        </div>
      </section>

      <div className="space-y-6">
        <LsTabs
          command="cd /hardware; ls"
          title="hardware/"
          labels={hardware.map((p) => p.tab ?? p.title)}
          viewAllHref="/hardware"
        >
          {hardware.map((p) => (
            <ProjectPanel key={p.slug} project={p} />
          ))}
        </LsTabs>

        <div>
          <div className="mb-3 text-xs uppercase tracking-wider text-cyan">
            // highlights — the hands-on stuff
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {highlights.map((a) => (
              <AchievementCard key={a.title} a={a} />
            ))}
          </div>
        </div>
      </div>

      <LsTabs
        command="cd /experience; ls"
        title="experience/"
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
    </div>
  );
}
