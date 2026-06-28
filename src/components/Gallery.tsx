"use client";

import { useState } from "react";
import Image from "next/image";

// Main image + clickable thumbnail strip. Expects at least one image.
export default function Gallery({
  images,
  alt,
  fit = "cover",
  aspect = "16 / 10",
}: {
  images: string[];
  alt: string;
  fit?: "cover" | "contain";
  aspect?: string;
}) {
  const [i, setI] = useState(0);

  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-md border border-line bg-panel"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={images[i]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      {images.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {images.map((img, idx) => (
            <button
              key={img}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`view image ${idx + 1}`}
              className={`relative h-12 w-16 overflow-hidden rounded border transition ${
                idx === i
                  ? "border-green box-glow"
                  : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
