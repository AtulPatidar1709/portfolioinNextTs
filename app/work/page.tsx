import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { btnPrimary, container, eyebrow, sectionAlt, sectionPad } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Work — Case Studies: AI Gateway, Booking Platform, Real-Time App",
  description:
    "Case studies on production builds: a multi-provider LLM gateway, a travel booking platform, a real-time collaborative workspace, and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Work &mdash; 04</span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1]">
            Selected
            <br />
            case studies.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17.5px] text-[var(--ink-soft)]">
            A closer look at recent builds &mdash; the problem, the approach, and the measured outcome.
          </p>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={container}>
          {projects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      </section>

      <section className={`${sectionPad} ${sectionAlt} text-center`}>
        <div className={container}>
          <h2 className="text-[clamp(30px,4vw,44px)] font-semibold">Have something similar in mind?</h2>
          <p className="mx-auto mt-4.5 max-w-[46ch] text-[var(--ink-soft)]">
            I take on a limited number of projects at a time, so timelines stay realistic and every client gets full attention.
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="/contact" className={btnPrimary}>Start a project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
