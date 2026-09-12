"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type CarouselPhoto = {
  file: string;
  alt: string;
  caption: string;
};

// A photo carousel framed as a terminal window, matching the blog's Shot
// figure: title bar, main image, comment-style caption, thumbnail strip.
// Keyboard arrows and touch swipe both work.
export default function PhotoCarousel({
  dir,
  photos,
  title = "photos",
  aspect = "3 / 2",
  fit = "cover",
}: {
  dir: string;
  photos: CarouselPhoto[];
  title?: string;
  aspect?: string;
  fit?: "cover" | "contain";
}) {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = photos.length;

  const go = useCallback(
    (d: number) => setI((cur) => (cur + d + n) % n),
    [n],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const p = photos[i];

  return (
    <figure className="term my-6 overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        <span>
          ▸ view {title}/{p.file}
        </span>
        <span>
          [{i + 1}/{n}]
        </span>
      </div>

      <div
        className="group relative w-full select-none bg-black"
        style={{ aspectRatio: aspect }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <Image
          key={p.file}
          src={dir + p.file}
          alt={p.alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          priority={i === 0}
        />
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="previous photo"
          className="absolute left-0 top-0 h-full w-1/5 cursor-w-resize text-left opacity-0 transition hover:opacity-100 focus:opacity-100"
        >
          <span className="ml-2 rounded bg-black/60 px-2 py-1 text-sm text-green">
            ◀
          </span>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="next photo"
          className="absolute right-0 top-0 h-full w-1/5 cursor-e-resize text-right opacity-0 transition hover:opacity-100 focus:opacity-100"
        >
          <span className="mr-2 rounded bg-black/60 px-2 py-1 text-sm text-green">
            ▶
          </span>
        </button>
      </div>

      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> {p.caption}
      </figcaption>

      <div className="flex gap-1.5 overflow-x-auto border-t border-line px-3 py-2">
        {photos.map((ph, idx) => (
          <button
            key={ph.file}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`view photo ${idx + 1}: ${ph.alt}`}
            className={`relative h-11 w-14 shrink-0 overflow-hidden rounded border transition ${
              idx === i
                ? "border-green box-glow"
                : "border-line opacity-50 hover:opacity-100"
            }`}
          >
            <Image
              src={dir + ph.file}
              alt=""
              fill
              sizes="56px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </figure>
  );
}
