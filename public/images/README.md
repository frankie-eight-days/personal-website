# Images — drop your photos here

The site is **data-driven**. Every project/achievement/role has an `imageDir`
in `src/data/*.ts`. Drop photos into the matching folder below, then point the
`cover` field at the file. Until you do, the site shows a neon placeholder that
literally prints the folder path — so nothing looks broken.

## Folder map

| Folder | Used by | Set `cover` to |
|---|---|---|
| `hero/` | landing headshot | `profile.headshot` in `src/data/profile.ts` |
| `_nav/<section>.jpg` | landing nav cards | `cover` in `src/data/nav.ts` |
| `achievements/<slug>/` | "most proud of" wall | `cover` in `src/data/achievements.ts` |
| `software/<slug>/` | software cards | `cover` in `src/data/software.ts` |
| `hardware/<slug>/` | hardware cards | `cover` in `src/data/hardware.ts` |
| `experience/{apple,tesla,internships}/` | experience page | `cover` in `src/data/experience.ts` |
| `resources/textbooks/` | library covers | `cover` in `src/data/resources.ts` |
| `gallery/` | overflow / misc | — |

## Example

1. Drop `kicad-board.jpg` into `public/images/hardware/auv-capstone/`
2. In `src/data/hardware.ts`, find the `auv-capstone` entry and add:
   ```ts
   cover: "/images/hardware/auv-capstone/kicad-board.jpg",
   ```
3. Save — the card now shows your photo (optimized automatically by Next.js).

> Tip: any image format works (jpg/png/webp/avif). Next.js optimizes on the fly,
> so you don't need to pre-resize — but keep originals under ~3 MB for fast builds.
