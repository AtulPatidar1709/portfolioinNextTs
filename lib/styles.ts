// Shared Tailwind class strings for patterns repeated across many pages.
// Colors reference the CSS variables defined in app/globals.css, so light/dark
// theming stays centralized there — these strings never need a dark: variant
// for color, only for the few spots where the *rule* differs between themes.

export const container = "mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-16";

export const sectionPad = "py-12 sm:py-16 lg:py-24";
export const sectionAlt = "border-y border-[var(--line)] bg-[var(--bg-raised)]";

export const eyebrow =
  "mb-7 inline-flex items-center gap-2.5 border-b-2 border-[var(--accent)] pb-2.5 font-mono text-[11.5px] uppercase tracking-wider text-[var(--accent)]";

const btnBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent px-5 py-3 text-sm font-medium transition-colors";

export const btnPrimary = `${btnBase} bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] dark:bg-[var(--accent)] dark:text-[var(--accent-ink)]`;
export const btnOutline = `${btnBase} border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]`;
export const btnSm = "px-3.5 py-2 text-[13.5px]";

export const card = "rounded-md border border-[var(--line)] bg-[var(--bg-raised)] p-7";
export const cardNum = "mb-4 block font-mono text-xs tracking-wide text-[var(--accent)]";

export const tag =
  "rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--ink-soft)]";

export const timelineRow = "grid grid-cols-[90px_1fr] gap-6 border-t border-[var(--line)] py-5 last:border-b";
export const timelineYear = "pt-0.5 font-mono text-sm text-[var(--accent)]";

export const sectionHead = "mb-10 flex flex-wrap items-end justify-between gap-6";
export const sectionHeadTitle = "max-w-[20ch] text-[clamp(28px,3.4vw,40px)] font-semibold";
export const sectionHeadSub = "max-w-[40ch] text-[var(--ink-soft)]";

export const formLabel = "font-mono text-[13px] tracking-wide text-[var(--ink-soft)]";
export const formInput =
  "w-full rounded-sm border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 text-[15px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none";

export const proseHeading = "mb-3.5 mt-10 text-2xl font-semibold first:mt-0";
export const proseP = "mb-3.5 text-[15px] text-[var(--ink-soft)]";
export const proseList = "mb-3.5 grid list-disc gap-2 pl-5 text-[15px] text-[var(--ink-soft)]";

export function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}
