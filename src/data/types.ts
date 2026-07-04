// Shared content types. The whole site is data-driven: to add something,
// edit the relevant file in src/data and drop images in the matching
// public/images/<section>/<slug>/ folder.
//
// `date` is "YYYY-MM" (or "YYYY") and is used ONLY to sort newest → oldest.
// `tab` is the short label shown in the landing-page tab strip.

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tab?: string;
  tagline: string;
  description?: string;
  tags: string[];
  year?: string;
  date?: string;
  /** Pin to the front regardless of date (kept in array order among pinned). */
  pinned?: boolean;
  status?: string; // e.g. "shipped", "in production", "competition"
  links?: Link[];
  /** Cover image, e.g. "/images/software/donezo/cover.jpg". Leave undefined to show a placeholder. */
  cover?: string;
  /** Extra images for the click-through gallery. First entry doubles as the cover if `cover` is unset. */
  images?: string[];
  /** How the image sits in its frame. "cover" (default) crops to fill — good for photos. "contain" shows the whole image — good for screenshots/UI. */
  fit?: "cover" | "contain";
  /** CSS aspect-ratio for the media frame, e.g. "2 / 1" for a wide screenshot. Defaults to "16 / 10". */
  mediaAspect?: string;
  /** Folder where images for this item live (used by the placeholder hint). */
  imageDir: string;
};

export type Achievement = {
  tag: string; // short terminal-style badge, e.g. "1ST", "WIN", "TOP"
  title: string;
  detail: string;
  year: string;
  date?: string;
  links?: Link[];
  cover?: string;
  imageDir: string;
};

export type Role = {
  company: string;
  tab?: string;
  title: string;
  period: string;
  date?: string;
  location?: string;
  bullets: string[];
  tags?: string[];
  cover?: string;
  fit?: "cover" | "contain";
  mediaAspect?: string;
  imageDir: string;
};

export type Book = {
  title: string;
  author: string;
  note?: string;
  cover?: string;
};

// newest → oldest, by `date` (falls back to empty string = sorts last)
export function byDateDesc<T extends { date?: string }>(a: T, b: T): number {
  return (b.date ?? "").localeCompare(a.date ?? "");
}

// pinned items first (kept in array order), then newest → oldest
export function byPinnedDate<T extends { pinned?: boolean; date?: string }>(
  a: T,
  b: T,
): number {
  if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
  if (a.pinned && b.pinned) return 0;
  return byDateDesc(a, b);
}
