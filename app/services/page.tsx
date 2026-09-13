import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { engagementModels } from "@/data/profile";
import {
  btnPrimary,
  card,
  cardNum,
  container,
  eyebrow,
  sectionAlt,
  sectionHead,
  sectionHeadSub,
  sectionHeadTitle,
  sectionPad,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services — Frontend, Backend, Full-Stack & AI Development",
  description:
    "Frontend development, backend APIs, full-stack builds, LLM integration, SEO audits, and ongoing maintenance. Fixed-scope, retainer, or hourly engagements.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Services &mdash; 03</span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1]">
            Where I can
            <br />
            help your team.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17.5px] text-[var(--ink-soft)]">
            Fixed-scope projects, retainers, or hourly consulting &mdash; whichever fits how your
            team works. I also welcome conversations about full-time roles.
          </p>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={container}>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div className={card} key={s.num}>
                <span className={cardNum}>{s.num}</span>
                <h3 className="mb-2.5 text-xl font-semibold">{s.title}</h3>
                <p className="text-[14.5px] text-[var(--ink-soft)]">{s.description}</p>
                <ul className="mt-4 grid gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="relative pl-4.5 text-[14.5px] text-[var(--ink-soft)] before:absolute before:left-0 before:content-['—'] before:text-[var(--accent)]">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} ${sectionAlt}`}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>Engagement models</h2>
            <p className={sectionHeadSub}>Pick whatever fits the shape of the work.</p>
          </div>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((m) => (
              <div className={card} key={m.title}>
                <h3 className="mb-2.5 text-xl font-semibold">{m.title}</h3>
                <p className="text-[14.5px] text-[var(--ink-soft)]">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} text-center`}>
        <div className={container}>
          <h2 className="text-[clamp(30px,4vw,44px)] font-semibold">Not sure which fits?</h2>
          <p className="mx-auto mt-4.5 max-w-[46ch] text-[var(--ink-soft)]">
            Tell me about the project and I&rsquo;ll suggest the right engagement model &mdash; no pressure, no obligation.
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="/contact" className={btnPrimary}>Start a project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
