import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { container, eyebrow, proseHeading, proseList, proseP, sectionPad } from "@/lib/styles";

export const metadata: Metadata = {
  title: `Privacy Policy | ${profile.name}`,
  description: `Privacy policy for ${profile.siteUrl.replace("https://", "")}, covering what information is collected through the contact form and how it is used.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Legal &mdash; 09</span>
          <h1 className="text-[clamp(30px,4.4vw,44px)] font-semibold">Privacy Policy</h1>
          <p className="mt-3.5 font-mono text-xs text-[var(--ink-soft)]">Last updated: September 2026</p>
        </div>
      </section>
      <section className={sectionPad}>
        <div className={`${container} max-w-[72ch]`}>
          <p className={proseP}>
            This is a starting template, not legal advice. Review it with a qualified
            professional before relying on it, and adjust it to match how this site actually
            collects and uses data (for example, if you add analytics, a newsletter, or a
            different contact form backend).
          </p>

          <h2 className={proseHeading}>1. Information I collect</h2>
          <p className={proseP}>
            This site collects information you provide directly through the contact form &mdash;
            your name, email address, and message content &mdash; which is sent to my email
            address when you submit the form. This site does not use cookies for tracking and
            does not sell or share your information with third parties.
          </p>

          <h2 className={proseHeading}>2. How information is used</h2>
          <ul className={proseList}>
            <li>To respond to your inquiry about a project or role</li>
            <li>To keep a record of past correspondence</li>
            <li>Never for marketing without your explicit consent</li>
          </ul>

          <h2 className={proseHeading}>3. Analytics</h2>
          <p className={proseP}>
            If analytics tools (such as Google Analytics or Plausible) are added to this site in
            the future, this section will be updated to describe what is collected and how to opt out.
          </p>

          <h2 className={proseHeading}>4. Third-party links</h2>
          <p className={proseP}>
            This site links to external services such as GitHub, LinkedIn, Stack Overflow, and
            LeetCode. Those services have their own privacy policies, which are not covered by this one.
          </p>

          <h2 className={proseHeading}>5. Your rights</h2>
          <p className={proseP}>You can request that any information you&rsquo;ve submitted be deleted at any time by emailing {profile.email}.</p>

          <h2 className={proseHeading}>6. Contact</h2>
          <p className={proseP}>Questions about this policy can be sent to {profile.email}.</p>
        </div>
      </section>
    </>
  );
}
