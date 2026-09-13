import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { container, eyebrow, proseHeading, proseP, sectionPad } from "@/lib/styles";

export const metadata: Metadata = {
  title: `Terms of Use | ${profile.name}`,
  description: `Terms of use for ${profile.siteUrl.replace("https://", "")}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Legal &mdash; 10</span>
          <h1 className="text-[clamp(30px,4.4vw,44px)] font-semibold">Terms of Use</h1>
          <p className="mt-3.5 font-mono text-xs text-[var(--ink-soft)]">Last updated: September 2026</p>
        </div>
      </section>
      <section className={sectionPad}>
        <div className={`${container} max-w-[72ch]`}>
          <p className={proseP}>This is a starting template, not legal advice. Review it with a qualified professional before relying on it.</p>

          <h2 className={proseHeading}>1. Use of this site</h2>
          <p className={proseP}>
            This website is provided for informational purposes to showcase services, past work,
            and contact details. You&rsquo;re welcome to browse and share it; content may not be
            reproduced for commercial purposes without permission.
          </p>

          <h2 className={proseHeading}>2. No guarantee of availability</h2>
          <p className={proseP}>Project availability, timelines, and pricing shown on this site are indicative and confirmed only after a direct conversation and written agreement.</p>

          <h2 className={proseHeading}>3. Intellectual property</h2>
          <p className={proseP}>Project names, descriptions, and site content belong to their respective owners. Case studies describe real work delivered for clients or personal projects and are shared for portfolio purposes.</p>

          <h2 className={proseHeading}>4. Limitation of liability</h2>
          <p className={proseP}>This site and its content are provided as-is, without warranties of any kind, to the extent permitted by law.</p>

          <h2 className={proseHeading}>5. Changes to these terms</h2>
          <p className={proseP}>These terms may be updated from time to time; the &ldquo;last updated&rdquo; date above reflects the most recent revision.</p>

          <h2 className={proseHeading}>6. Contact</h2>
          <p className={proseP}>Questions about these terms can be sent to {profile.email}.</p>
        </div>
      </section>
    </>
  );
}
