import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-[84rem] flex-col justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center">
        <div className="text-text-dim">
          <span className="text-green-dim">$</span> echo &quot;thanks for stopping by&quot;
          <span className="cursor" />
        </div>
        <div className="flex flex-wrap gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="tlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
