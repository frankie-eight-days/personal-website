import Image from "next/image";

// Renders an optimized image if `src` is set; otherwise shows an intentional
// neon placeholder that tells you exactly which folder to drop a photo into.
export default function ImageFrame({
  src,
  alt,
  dir,
  className = "aspect-[16/10]",
  bare = false,
  fit = "cover",
  mediaAspect,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 460px",
}: {
  src?: string;
  alt: string;
  dir?: string;
  className?: string;
  bare?: boolean;
  fit?: "cover" | "contain";
  mediaAspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-panel ${className} ${
        bare ? "" : "rounded-md border border-line"
      }`}
      style={mediaAspect ? { aspectRatio: mediaAspect } : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(45,200,110,0.05) 0 10px, transparent 10px 20px)",
          }}
        >
          <span className="text-2xl text-green-dim" aria-hidden>
            ▦
          </span>
          <span className="text-xs text-text-dim">no image yet</span>
          {dir && (
            <code className="max-w-full break-all text-[10px] leading-tight text-green-dim">
              drop → {dir}
            </code>
          )}
        </div>
      )}
    </div>
  );
}
