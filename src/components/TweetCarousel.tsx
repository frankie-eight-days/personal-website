"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export type CarouselTweet = {
  name: string;
  handle: string;
  url: string;
  text: string;
  date: string;
  views?: string;
  image?: string;
  caption: string;
  kind: "built" | "critique";
  translated?: boolean;
};

// A carousel of X posts framed as a terminal window. Each card is rebuilt in
// the site palette and links out to the original post. Arrow keys work while
// the carousel has focus; touch swipe works everywhere.
export default function TweetCarousel({
  dir,
  tweets,
  title = "feed",
}: {
  dir: string;
  tweets: CarouselTweet[];
  title?: string;
}) {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = tweets.length;
  const go = useCallback(
    (d: number) => setI((cur) => (cur + d + n) % n),
    [n],
  );
  const t = tweets[i];

  return (
    <figure
      className="term my-6 overflow-hidden outline-none focus-visible:box-glow"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Posts about AI-designed circuit boards"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
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
      <div className="flex items-center justify-between border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        <span>
          ▸ tail -f {title} ·{" "}
          {t.kind === "built" ? (
            <span className="text-green">what it built</span>
          ) : (
            <span className="text-amber glow-amber">what the EEs said</span>
          )}
        </span>
        <span>
          [{i + 1}/{n}]
        </span>
      </div>

      <a
        href={t.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 no-underline transition hover:bg-black/10"
        aria-label={`Post by ${t.name} on X, opens in a new tab`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-panel text-base font-bold text-green">
            {t.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-bold text-text">{t.name}</span>
            <span className="text-xs text-text-dim">@{t.handle}</span>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="ml-auto h-5 w-5 flex-none text-text"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </div>
        <p className="mt-3 whitespace-pre-line text-sm leading-snug text-text">
          {t.text}
        </p>
        {t.translated && (
          <p className="mt-1 text-xs text-text-dim">
            (translated from Chinese)
          </p>
        )}
        {t.image && (
          <div
            className="relative mt-3 w-full overflow-hidden rounded border border-line bg-black"
            style={{ aspectRatio: "16 / 10" }}
          >
            <Image
              key={t.image}
              src={dir + t.image}
              alt={`Image from ${t.name}'s post`}
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        )}
        <p className="mt-3 text-xs text-text-dim">
          {t.views && (
            <>
              <span className="text-text">{t.views}</span> views ·{" "}
            </>
          )}
          {t.date} · open on X ↗
        </p>
      </a>

      <figcaption className="border-t border-line px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> {t.caption}
      </figcaption>

      <div className="flex items-center gap-2 border-t border-line px-3 py-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="previous post"
          className="rounded border border-line px-2 py-0.5 text-xs text-green transition hover:border-green-dim"
        >
          ◀
        </button>
        <div className="flex flex-1 flex-wrap justify-center gap-1.5">
          {tweets.map((tw, idx) => (
            <button
              key={tw.url}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`post ${idx + 1}: ${tw.name}`}
              className={`h-2 w-2 rounded-full transition ${
                idx === i
                  ? tw.kind === "built"
                    ? "bg-green box-glow"
                    : "bg-amber"
                  : tw.kind === "built"
                    ? "bg-green-dim/40 hover:bg-green-dim"
                    : "bg-amber/30 hover:bg-amber/70"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="next post"
          className="rounded border border-line px-2 py-0.5 text-xs text-green transition hover:border-green-dim"
        >
          ▶
        </button>
      </div>
    </figure>
  );
}
