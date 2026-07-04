import { byDateDesc, type Achievement } from "./types";

// Hands-on highlights shown under the hardware section on the landing page.
// (Hackathon wins live in hackathons.ts.)
export const highlights: Achievement[] = [
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
].sort(byDateDesc);
