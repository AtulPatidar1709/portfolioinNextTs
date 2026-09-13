import Link from "next/link";
import { profile } from "@/data/profile";

const linkCls = "text-[15px] text-[var(--inv-ink)]/85 hover:text-[var(--accent)]";
const colTitle = "mb-4 font-mono text-[11px] uppercase tracking-wide text-[var(--inv-ink)]/55";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--inv-bg-deep)] text-[var(--inv-ink)]">
      <div className="mx-auto max-w-[1180px] px-5 pb-8 pt-16 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-9 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-baseline gap-0.5 font-serif text-xl font-semibold">
              AP<span className="font-normal text-[var(--accent)]">|</span>
            </Link>
            <p className="mt-3.5 max-w-[32ch] text-sm text-[var(--inv-ink)]/60">
              Full-stack developer based in {profile.location}, building fast, reliable web
              products for startups, agencies, and product teams — and open to full-time roles.
            </p>
          </div>

          <div>
            <h5 className={colTitle}>Sitemap</h5>
            <ul className="grid gap-2.5">
              <li><Link href="/" className={linkCls}>Home</Link></li>
              <li><Link href="/about" className={linkCls}>About</Link></li>
              <li><Link href="/services" className={linkCls}>Services</Link></li>
              <li><Link href="/work" className={linkCls}>Work</Link></li>
              <li><Link href="/blog" className={linkCls}>Blog</Link></li>
            </ul>
          </div>

          <div>
            <h5 className={colTitle}>More</h5>
            <ul className="grid gap-2.5">
              <li><Link href="/contact" className={linkCls}>Contact</Link></li>
              <li><Link href="/privacy" className={linkCls}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkCls}>Terms</Link></li>
            </ul>
          </div>

          <div>
            <h5 className={colTitle}>Contact</h5>
            <ul className="grid gap-2.5">
              <li><a href={`mailto:${profile.email}`} className={linkCls}>{profile.email}</a></li>
              <li className="text-sm text-[var(--inv-ink)]/85">{profile.location} ({profile.timezone})</li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={linkCls}>GitHub</a>
                {" · "}
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>LinkedIn</a>
              </li>
              <li>
                <a href={profile.socials.stackoverflow} target="_blank" rel="noopener noreferrer" className={linkCls}>Stack Overflow</a>
                {" · "}
                <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className={linkCls}>LeetCode</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--inv-ink)]/15 pt-5 text-[13px] text-[var(--inv-ink)]/55">
          <span>&copy; {year} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <Link href="/privacy" className="hover:text-[var(--inv-ink)]">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[var(--inv-ink)]">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
