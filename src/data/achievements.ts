import { byDateDesc, type Achievement } from "./types";

// The "most proud of" wall on the landing page — off-resume highlights.
export const achievements: Achievement[] = [
  {
    tag: "WIN",
    title: "Tesla LV-Org Hackathon",
    detail: "1st place — Tesla's 2026 Low Voltage Org hackathon (\"Supreme Debuggery\").",
    year: "2026",
    date: "2026-03",
    imageDir: "/images/achievements/tesla-hackathon-2026/",
    cover: "/images/achievements/tesla-hackathon-2026/IMG_5790.jpeg",
  },

  {
    tag: "PWR",
    title: "Ray Ridley Power Seminar",
    detail: "5-day in-person power electronics seminar (magnetics, DC/DC, control).",
    year: "2023",
    date: "2023-12",
    imageDir: "/images/achievements/ray-ridley/",
    cover: "/images/achievements/ray-ridley/IMG_9415.jpeg",
  },
  {
    tag: "TOP",
    title: "IEEE Senior Capstone",
    detail: "Top IEEE capstone award — autonomous underwater vehicle.",
    year: "2022",
    date: "2022-04",
    imageDir: "/images/achievements/capstone-auv/",
    cover: "/images/achievements/capstone-auv/IMG_4121.JPG",
  },
  {
    tag: "2.6%",
    title: "SpaceX Hyperloop",
    detail: "Electrical lead — top 2.6% worldwide, 3rd in North America.",
    year: "2019",
    date: "2019-07",
    imageDir: "/images/achievements/hyperloop/",
    cover: "/images/achievements/hyperloop/IMG_0268.JPG",
  },
  {
    tag: "1ST",
    title: "SF Hacks 2018",
    detail: "First place (+ Best Use of DJI & IBM Watson) — my first hackathon win.",
    year: "2018",
    date: "2018-03",
    link: { label: "PaulieBlart ↗", href: "https://github.com/megalphian/PaulieBlart" },
    imageDir: "/images/achievements/sf-hacks-2018/",
    cover: "/images/achievements/sf-hacks-2018/IMG_20180318_1621467.jpg",
  },
].sort(byDateDesc);
