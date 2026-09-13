import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.role} | React, Node.js, TypeScript`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full-stack developer specializing in React, Node.js, and TypeScript. 5+ projects delivered for startups and agencies. Available for freelance projects and full-time roles.",
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  robots: { index: true, follow: true },
  icons: {
    icon:
      "data:image/svg+xml," +
      "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E" +
      "%3Crect width='64' height='64' rx='8' fill='%2317181B'/%3E" +
      "%3Ctext x='14' y='42' font-family='Georgia,serif' font-size='28' fill='%23F6F3EA'%3EAP%3C/text%3E" +
      "%3C/svg%3E",
  },
  openGraph: {
    type: "website",
    siteName: `${profile.name} — ${profile.role}`,
    url: profile.siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

// Applies the saved/system theme before paint to avoid a light/dark flash.
const THEME_INIT = `
(function(){
  try {
    var stored = localStorage.getItem('ap-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.stackoverflow, profile.socials.leetcode],
  knowsAbout: profile.skills,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <meta name="google-site-verification" content="7Nd6kI90fo2ZHojVwOhZrgOmYzBOzqHzn9wd1AL20l0" />
      </head>
      <body className="bg-[var(--bg)] font-sans text-[var(--ink)] antialiased transition-colors duration-200">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-2 rounded-sm bg-[var(--accent)] px-4 py-2.5 text-[var(--accent-ink)] opacity-0 focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
