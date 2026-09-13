# Atul Patidar — Portfolio (Next.js + Tailwind CSS)

Full-stack portfolio + job-hunting site built with Next.js 16 (App Router), TypeScript, and
Tailwind CSS v4. Light/dark mode via CSS variables in `app/globals.css` + a custom Tailwind
`dark:` variant keyed off `data-theme` (not a `.dark` class), toggled in `components/Header.tsx`.

Repeated utility patterns (buttons, cards, section spacing, form fields, etc.) live in
`lib/styles.ts` as small exported class strings — keeps JSX readable without duplicating the
same long Tailwind class list on every page.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. To build for production:

```bash
npm run build
npm start
```

Deploys as-is on Vercel (or any Node host) — just `git push` / import the repo.

## Where everything lives

All real content is in **`/data`**, not scattered across pages:

- `data/profile.ts` — name, bio, contact info, socials, skills, stats
- `data/projects.ts` — all 5 projects (OpenRouter Clone, Tour Trove, VisionSpace, YouTube4U, Nike Clone)
- `data/services.ts` — the 6 services shown on the Services page
- `data/certifications.ts` — TUF / Udemy / NPTEL credentials
- `data/testimonials.ts` — **placeholder quotes**, replace before publishing
- `data/blogs.ts` — all 10 blog posts (title, date, category, excerpt, body, external link)

Edit these files and every page that uses them updates automatically — nothing is hardcoded twice.

## Contact form (email delivery)

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which sends the message
straight to your inbox via nodemailer. To enable it:

1. Copy `.env.example` to `.env.local` and fill in real SMTP credentials.
2. For Gmail: turn on 2-Step Verification, then generate an **App Password** at
   https://myaccount.google.com/apppasswords — use that as `SMTP_PASS`, not your normal
   password. Or use any SMTP provider (Resend, SendGrid, Mailgun, etc).
3. On Vercel, add the same variables under Project Settings → Environment Variables.

If the API call fails for any reason (env vars not set yet, network issue), the form
automatically falls back to opening the visitor's email client with the message pre-filled,
so it never silently breaks.

A hidden honeypot field and a basic per-IP rate limit are included to cut down on spam; for
anything beyond a personal portfolio's traffic, swap the in-memory rate limit for something
like Upstash Redis.

**WhatsApp button (optional):** set `whatsapp` in `data/profile.ts` to your number
(international format, digits only, e.g. `"919876543210"`) to show a "Message on WhatsApp"
button next to the contact form. Leave it blank to keep it hidden — note that whatever you
put there becomes visible in the page's HTML source to anyone who looks.

## Blog

`app/blog/[slug]/page.tsx` is a dynamic route that statically generates one page per entry in
`data/blogs.ts` via `generateStaticParams`, each with its own SEO metadata and `BlogPosting`
JSON-LD. To add a post, just add an object to the `blogPosts` array — no new files needed.

**Before you publish:** two posts ("How to Use GitHub Issues…" and the Popover API one) read
like they might be leftover demo content from a Next.js blog starter template rather than your
own writing — worth checking so nothing looks copied. Each post's `body` field is currently a
placeholder paragraph; replace it with your real write-up for the best SEO value (thin content
with just a link out won't rank well).

## SEO

- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` dynamically —
  every blog slug in `data/blogs.ts` is automatically included, no manual list to maintain.
- Every page sets its own `<title>`, meta description, and canonical URL via the Metadata API.
- `Person` JSON-LD in the root layout, `BlogPosting` JSON-LD on each post.
- Update `siteUrl` in `data/profile.ts` if you move off `atulpatidar.vercel.app`.

## Things to finish before launch

1. Replace testimonials in `data/testimonials.ts` with real client quotes.
2. Add real `github` / `demo` URLs to each project in `data/projects.ts` (currently `#`).
3. Drop a real resume PDF at `public/resume.pdf` (the Resume page already links to it).
4. Decide on the two blog posts flagged above, and fill in real `body` content for all posts.
5. Wire `components/ContactForm.tsx` to a real backend (Formspree, EmailJS, etc.) if you don't
   want it to rely on opening the visitor's email client.
