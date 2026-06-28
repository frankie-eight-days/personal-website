import type { Book } from "./types";

// Full-width banner on the resources page.
export const benchImage = "/images/resources/bench/IMG_4434.JPG";

// Your engineering library. TODO Frank: edit this to match the textbooks you
// actually own, and drop cover/shelf photos in public/images/resources/.
export const books: Book[] = [
  {
    title: "The Art of Electronics",
    author: "Horowitz & Hill",
    note: "The desk reference. Lives within arm's reach.",
  },
  {
    title: "Fundamentals of Power Electronics",
    author: "Erickson & Maksimović",
    note: "Magnetics, converters, control — my power-electronics bible.",
  },
  {
    title: "Design of Analog CMOS Integrated Circuits",
    author: "Behzad Razavi",
    note: "Where analog intuition comes from.",
  },
  {
    title: "Microelectronic Circuits",
    author: "Sedra & Smith",
    note: "The classic that started it all.",
  },
];

// Tools / EDAs I reach for. Doubles as the seed for a "favorite EDAs" blog post.
export const tools: { name: string; kind: string; note: string }[] = [
  { name: "Altium Designer", kind: "EDA", note: "Production PCB design at scale." },
  { name: "KiCAD", kind: "EDA", note: "Go-to for personal & hackathon boards." },
  { name: "LTSpice", kind: "Simulation", note: "Quick analog & power circuit sims." },
  { name: "STM32CubeIDE", kind: "Embedded", note: "Firmware for STM32 projects." },
];
