import { byDateDesc, type Achievement } from "./types";

// Hackathon wins — shown in their own section on the landing page.
// Images live in public/images/hackathons/<slug>/.
export const hackathons: Achievement[] = [
  {
    tag: "1ST",
    title: "July 2026 Hackathon",
    detail:
      "1st place — write-up and photos coming soon. (Placeholder — fill in the event name and what we built.)",
    year: "2026",
    date: "2026-07",
    imageDir: "/images/hackathons/july-2026/",
  },
  {
    tag: "WIN",
    title: "Tesla LV-Org Hackathon",
    detail: "1st place — Tesla's 2026 Low Voltage Org hackathon (\"Supreme Debuggery\").",
    year: "2026",
    date: "2026-03",
    imageDir: "/images/hackathons/tesla-hackathon-2026/",
    cover: "/images/hackathons/tesla-hackathon-2026/IMG_5790.jpeg",
  },
  {
    tag: "1ST",
    title: "SF Hacks 2018",
    detail: "First place (+ Best Use of DJI & IBM Watson) — my first hackathon win.",
    year: "2018",
    date: "2018-03",
    link: { label: "PaulieBlart ↗", href: "https://github.com/megalphian/PaulieBlart" },
    imageDir: "/images/hackathons/sf-hacks-2018/",
    cover: "/images/hackathons/sf-hacks-2018/IMG_20180318_1621467.jpg",
  },
].sort(byDateDesc);
