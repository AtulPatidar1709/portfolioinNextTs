import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
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
} from "@/lib/styles";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role} (React & Node.js) | ${profile.location}`,
  description:
    "Full-stack developer specializing in React, Node.js, and TypeScript. 40+ projects delivered for startups and agencies. Available for freelance projects and full-time roles.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const topServices = services.slice(0, 3);

  return (
    <>
      <section className="pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-[76px]">
        <div className={`${container} grid grid-cols-1 items-start gap-10 md:grid-cols-[1.6fr_0.4fr]`}>
          <div>
            <span className={eyebrow}>Full-stack developer &middot; focused on React &amp; Node</span>
            <h1 className="text-[clamp(40px,6vw,68px)] font-semibold leading-[1.1]">
              Web products,
              <br />
              <em className="font-medium italic text-[var(--accent)]">engineered</em>
              <br />
              to convert.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17.5px] text-[var(--ink-soft)]">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/contact" className={btnPrimary}>Start a project</Link>
              <Link href="/work" className={btnOutline}>View selected work</Link>
              <Link href="/about" className={btnOutline}>Download resume</Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-[var(--line)] bg-[var(--bg-raised)] p-4.5">
                <h4 className="mb-1 font-semibold">For recruiters</h4>
                <p className="mb-2.5 text-[13px] text-[var(--ink-soft)]">Resume, skills, and project history at a glance.</p>
                <Link href="/about" className="text-[13px] font-medium text-[var(--accent)]">View resume &rarr;</Link>
              </div>
              <div className="rounded-md border border-[var(--line)] bg-[var(--bg-raised)] p-4.5">
                <h4 className="mb-1 font-semibold">For clients</h4>
                <p className="mb-2.5 text-[13px] text-[var(--ink-soft)]">Services, engagement models, and case studies.</p>
                <Link href="/services" className="text-[13px] font-medium text-[var(--accent)]">View services &rarr;</Link>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-auto max-w-[230px] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--bg-raised)]">
              <div className="aspect-square overflow-hidden border-b border-[var(--line)] bg-[var(--accent-soft)]">
                <img src="/images/profile.png" alt={profile.name} width={460} height={460} className="h-full w-full object-cover" />
              </div>
              <div className="flex items-center gap-2.5 px-4.5 py-4 text-[13.5px]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
                Available now
              </div>
            </div>
          </div>
        </div>

        <div className={`${container} mt-16 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-9 sm:grid-cols-4`}>
          {profile.stats.map((s) => (
            <div key={s.label}>
              <b className="block font-serif text-[clamp(26px,3vw,34px)] font-semibold">{s.value}</b>
              <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionPad} ${sectionAlt}`}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>What I can build for you</h2>
            <p className={sectionHeadSub}>End-to-end product development, from the first line of code to the deployment pipeline.</p>
          </div>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((s) => (
              <div className={card} key={s.num}>
                <span className={cardNum}>{s.num}</span>
                <h3 className="mb-2.5 text-xl font-semibold">{s.title}</h3>
                <p className="text-[14.5px] text-[var(--ink-soft)]">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className={btnOutline}>See all services</Link>
          </div>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={container}>
          <div className={sectionHead}>
            <h2 className={sectionHeadTitle}>Selected work</h2>
            <p className={sectionHeadSub}>Real projects — an AI gateway, a booking platform, and a real-time collaboration tool.</p>
          </div>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div className={card} key={p.slug}>
                <h3 className="mb-2.5 text-xl font-semibold">{p.name}</h3>
                <p className="text-[14.5px] text-[var(--ink-soft)]">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span className={tag} key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/work" className={btnOutline}>View full case studies</Link>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} text-center`}>
        <div className={container}>
          <h2 className="mx-auto max-w-[22ch] text-[clamp(30px,4vw,44px)] font-semibold">
            Have a project in mind, or hiring for a role?
          </h2>
          <p className="mx-auto mt-4.5 max-w-[46ch] text-[var(--ink-soft)]">
            I reply within one business day. Tell me a bit about the project or the team, and I&rsquo;ll follow up with next steps.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className={btnPrimary}>Start a project</Link>
            <Link href="/about" className={btnOutline}>View resume</Link>
          </div>
        </div>
      </section>
    </>
  );
}
