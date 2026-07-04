import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { hardware } from "@/data/hardware";

export const metadata: Metadata = { title: "hardware" };

export default function HardwarePage() {
  return (
    <div className="wrap py-10 sm:py-14">
      <SectionHeader path="~/hardware" command="ls -la --boards" title="hardware/">
        PCBs, power electronics, and embedded systems — from 800V powertrains to
        Tesla&apos;s first 48V USB-C hub. Photos and teardowns incoming.
      </SectionHeader>
      <p className="-mt-4 mb-8 max-w-2xl text-xs text-text-dim">
        <span className="text-green-dim">※</span> Everything here is from shipped, publicly
        released products — the photos are publicly available and contain nothing confidential.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hardware.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
