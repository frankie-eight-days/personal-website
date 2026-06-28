import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { hardware } from "@/data/hardware";

export const metadata: Metadata = { title: "hardware" };

export default function HardwarePage() {
  return (
    <div className="wrap py-10 sm:py-14">
      <SectionHeader path="~/hardware" command="ls -la --boards">
        PCBs, power electronics, and embedded systems — from 800V powertrains to
        Tesla&apos;s first 48V USB-C hub. Photos and teardowns incoming.
      </SectionHeader>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hardware.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
