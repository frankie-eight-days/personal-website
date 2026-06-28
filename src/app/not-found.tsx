import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24">
      <div className="term box-glow mx-auto max-w-xl p-6">
        <div className="text-sm">
          <span className="text-green-dim">frank@walsh</span>
          <span className="text-text-dim">:</span>
          <span className="text-cyan">~</span>
          <span className="text-text-dim">$ </span>cd ./that-page
        </div>
        <div className="mt-3 text-amber glow-amber">
          [ error ] 404 — no such file or directory
        </div>
        <p className="mt-2 font-sans text-sm text-text-dim">
          That path doesn&apos;t exist (or never did). <span className="cursor" />
        </p>
        <Link href="/" className="btn mt-6 inline-flex">
          cd ~ →
        </Link>
      </div>
    </div>
  );
}
