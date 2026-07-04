import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { software } from "@/data/software";

export const metadata: Metadata = { title: "software" };

export default function SoftwarePage() {
  return (
    <div className="wrap py-10 sm:py-14">
      <SectionHeader path="~/software" command="ls -la --apps" title="software/">
        Apps and tools I&apos;ve shipped — side projects, hackathon builds, and the
        occasional thing that made it all the way to an app store.
      </SectionHeader>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {software.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
