import type { Metadata } from "next";
import Link from "next/link";
import { profile, howIWork } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import {
  btnOutline,
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
  tag,
  timelineRow,
  timelineYear,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: `About ${profile.name} — ${profile.role} | Experience, Education & Resume`,
  description:
    "Full-stack developer with 5+ years of experience shipping 40+ projects, plus a MERN Stack internship at TechnomancerAI. B.Tech CSE, IES IPS Academy. Based in Indore, India — open to freelance and full-time roles.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>About &amp; Resume &mdash; 02</span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1]">
            The developer
            <br />
            behind the work.
          </h1>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <a href="/resume.pdf" className={btnPrimary}>Download resume (PDF)</a>
            <Link href="/contact" className={btnOutline}>Start a project</Link>
          </div>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={`${container} grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr]`}>
          <div>
            <div className="max-w-[230px] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--bg-raised)]">
              <div className="aspect-square overflow-hidden bg-[var(--accent-soft)]">
                <img src="/images/profile.png" alt={profile.name} width={460} height={460} className="h-full w-full object-cover" />
              </div>
            </div>
            <h3 className="mt-5 text-[19px] font-semibold">{profile.name}</h3>
            <p className="mt-1 text-[14.5px] text-[var(--ink-soft)]">
              {profile.role} &middot; {profile.location}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold">I turn complex ideas into simple, reliable software.</h3>
            <p className="text-[var(--ink-soft)]">{profile.bio}</p>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} ${sectionAlt}`}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>Experience</h2>
          </div>
          <div>
            {experience.map((job) => (
              <div className={timelineRow} key={`${job.company}-${job.role}`}>
                <span className={timelineYear}>{job.period}</span>
                <div>
                  <h4 className="font-semibold">{job.role} &mdash; {job.company}</h4>
                  <p className="mb-1.5 mt-1 text-sm text-[var(--ink-soft)]">{job.location}</p>
                  <ul className="mt-2 grid gap-2">
                    {job.points.map((point) => (
                      <li key={point} className="text-[14.5px] text-[var(--ink-soft)]">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={`${container} grid grid-cols-1 gap-12 md:grid-cols-2`}>
          <div>
            <h3 className="mb-4.5 text-[19px] font-semibold">Education</h3>
            <div>
              {education.map((ed) => (
                <div className={timelineRow} key={ed.institution}>
                  <span className={timelineYear}>{ed.period}</span>
                  <div>
                    <h4 className="font-semibold">{ed.institution}</h4>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{ed.degree}</p>
                    <p className="text-sm text-[var(--ink-soft)]">{ed.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4.5 text-[19px] font-semibold">Certifications</h3>
            <div>
              {certifications.map((c) => (
                <div className={timelineRow} key={c.title}>
                  <span className={timelineYear}>{c.year}</span>
                  <div>
                    <h4 className="font-semibold">{c.title}</h4>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{c.description}</p>
                    {c.url && (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-[var(--accent)]">
                        View certificate &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} ${sectionAlt}`}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>How I work</h2>
            <p className={sectionHeadSub}>A predictable process, so you always know what happens next.</p>
          </div>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {howIWork.map((step) => (
              <div className={card} key={step.num}>
                <span className={cardNum}>{step.num}</span>
                <h3 className="mb-2.5 text-xl font-semibold">{step.title}</h3>
                <p className="text-[14.5px] text-[var(--ink-soft)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>Core skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span className={tag} key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} text-center`}>
        <div className={container}>
          <h2 className="text-[clamp(30px,4vw,44px)] font-semibold">Hiring, or have a project?</h2>
          <p className="mx-auto mt-4.5 max-w-[46ch] text-[var(--ink-soft)]">
            Recruiters can grab the resume PDF above. If you&rsquo;re a client with a project in mind, let&rsquo;s talk scope and timeline instead.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a href="/resume.pdf" className={btnPrimary}>Download resume</a>
            <Link href="/contact" className={btnOutline}>Start a project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
