"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { btnOutline, btnPrimary, btnSm, cn } from "@/lib/styles";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Resume" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setIsDark(next === "dark");
    try {
      localStorage.setItem("ap-theme", next);
    } catch {
      /* storage blocked — theme still applies for this session */
    }
  }

  return (
    <>
      <div className="bg-[var(--inv-bg-deep)] font-mono text-[11px] tracking-wide text-[var(--inv-ink)]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-5 py-2.5 sm:px-8 lg:px-16">
          <span>{profile.availability.toUpperCase()}</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ok)] shadow-[0_0_0_3px_rgba(29,138,76,0.25)]" />
            AVAILABLE NOW
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]">
        <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-16">
          <Link href="/" className="flex items-baseline gap-0.5 font-serif text-xl font-semibold">
            AP<span className="font-normal text-[var(--accent)]">|</span>
          </Link>

          <div
            id="navlinks"
            className={cn(
              "absolute inset-x-0 top-full flex-col items-start gap-1 border-t border-[var(--line)] bg-[var(--bg)] px-5 py-6 sm:px-8",
              "md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0",
              menuOpen ? "flex" : "hidden"
            )}
          >
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "w-full border-b border-[var(--line)] py-3 text-base md:w-auto md:border-0 md:border-b-2 md:py-1 md:text-[14.5px]",
                    active
                      ? "text-[var(--ink)] md:border-[var(--accent)]"
                      : "text-[var(--ink-soft)] md:border-transparent hover:text-[var(--ink)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
              className="inline-flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-raised)] text-[var(--ink)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={cn("h-[17px] w-[17px]", isDark ? "hidden" : "block")}>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={cn("h-[17px] w-[17px]", isDark ? "block" : "hidden")}>
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
              </svg>
            </button>

            <Link href="/about" className={cn(btnOutline, btnSm)}>
              Resume
            </Link>
            <Link href="/contact" className={btnPrimary}>
              Start a project
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="inline-flex h-[38px] w-[38px] flex-none items-center justify-center rounded-sm border border-[var(--line)] bg-[var(--bg-raised)] md:hidden"
            >
              <span className="relative block h-[1.5px] w-4 bg-[var(--ink)] before:absolute before:-top-[5px] before:block before:h-[1.5px] before:w-4 before:bg-[var(--ink)] before:content-[''] after:absolute after:top-[5px] after:block after:h-[1.5px] after:w-4 after:bg-[var(--ink)] after:content-['']" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
