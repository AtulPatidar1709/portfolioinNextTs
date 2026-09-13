import type { Metadata } from "next";
import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";
import { container, eyebrow, sectionPad } from "@/lib/styles";

export const metadata: Metadata = {
  title: `Contact ${profile.name} — ${profile.role}`,
  description: `Get in touch to start a project or discuss a full-time role. Based in ${profile.location}, available for freelance and remote work.`,
  alternates: { canonical: "/contact" },
};

const linkCls = "text-[15px] text-[var(--ink)]";

export default function ContactPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Contact &mdash; 08</span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1]">
            Let&rsquo;s build
            <br />
            something.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17.5px] text-[var(--ink-soft)]">
            Tell me about the project or role, and I&rsquo;ll reply within one business day.
          </p>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={`${container} grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr]`}>
          <div>
            <ContactForm />
          </div>
          <div>
            <h3 className="mb-3.5 text-[19px] font-semibold">Direct contact</h3>
            <p className="mb-6 text-[var(--ink-soft)]">
              Prefer email or a call? Reach out directly &mdash; I usually respond within a business day.
            </p>
            <div>
              <div className="grid grid-cols-[110px_1fr] gap-6 border-t border-[var(--line)] py-5">
                <span className="text-[13px] text-[var(--accent)]">Email</span>
                <a href={`mailto:${profile.email}`} className={linkCls}>{profile.email}</a>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-6 border-t border-[var(--line)] py-5">
                <span className="text-[13px] text-[var(--accent)]">Location</span>
                <p className={linkCls}>{profile.location} ({profile.timezone})</p>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-6 border-t border-b border-[var(--line)] py-5">
                <span className="text-[13px] text-[var(--accent)]">Elsewhere</span>
                <div className={linkCls}>
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
                  &middot; <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}
                  &middot; <a href={profile.socials.stackoverflow} target="_blank" rel="noopener noreferrer">Stack Overflow</a>{" "}
                  &middot; <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
