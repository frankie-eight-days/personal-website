import { byDateDesc, type Achievement } from "./types";

// Hackathon wins — shown in their own section on the landing page.
// Images live in public/images/hackathons/<slug>/.
export const hackathons: Achievement[] = [
  {
    tag: "1ST",
    title: "Agent Forge (Tencent EdgeOne)",
    detail:
      "1st place — built \"Closing Time\", an AI data analyst for small businesses that writes and runs live Python on Tencent EdgeOne Makers.",
    year: "2026",
    date: "2026-07",
    links: [
      { label: "live ↗", href: "https://closing-time-attsv7yf.edgeone.cool" },
      { label: "demo ↗", href: "https://www.youtube.com/watch?v=tB7Gf_azlG0" },
      { label: "repo ↗", href: "https://github.com/frankie-eight-days/closing-time" },
      { label: "event ↗", href: "https://luma.com/agentforgesf" },
    ],
    imageDir: "/images/hackathons/agentforge-2026/",
    cover: "/images/hackathons/agentforge-2026/DSC06332.JPG",
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
    links: [{ label: "PaulieBlart ↗", href: "https://github.com/megalphian/PaulieBlart" }],
    imageDir: "/images/hackathons/sf-hacks-2018/",
    cover: "/images/hackathons/sf-hacks-2018/IMG_20180318_1621467.jpg",
  },
].sort(byDateDesc);
