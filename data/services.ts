export type Service = {
  num: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Frontend Development",
    description: "Responsive, accessible interfaces built with React and Next.js — pixel-close to design, fast on real devices, not just in dev tools.",
    points: ["Component-driven React / Next.js builds", "Responsive layouts across breakpoints", "Accessibility (WCAG) and keyboard support", "Design-to-code from Figma"],
  },
  {
    num: "02",
    title: "Backend Development",
    description: "Node.js and Express services with APIs designed for the load you actually expect, and the load you might not.",
    points: ["REST and GraphQL API design", "PostgreSQL / MongoDB schema design", "Authentication, authorization, and RBAC", "Caching, queues, and rate limiting"],
  },
  {
    num: "03",
    title: "Full-Stack Product Builds",
    description: "End-to-end delivery from architecture through deployment, for products that need one owner across the whole stack.",
    points: ["Technical architecture and planning", "Frontend + backend implementation", "CI/CD and cloud deployment (AWS, Docker)", "Post-launch monitoring and handover"],
  },
  {
    num: "04",
    title: "AI & LLM Integration",
    description: "Practical LLM features — gateways, SDKs, and streaming interfaces — built on production-grade infrastructure.",
    points: ["Multi-provider LLM gateway design", "Prompt routing and response streaming", "Lightweight client SDKs", "Cost and latency optimization"],
  },
  {
    num: "05",
    title: "Performance & SEO Audits",
    description: "A technical pass on speed, Core Web Vitals, and on-page SEO, with a prioritized list of fixes you can act on.",
    points: ["Lighthouse and Core Web Vitals audit", "Technical SEO (meta, schema, sitemap)", "Bundle size and load-time optimization", "Actionable, prioritized fix list"],
  },
  {
    num: "06",
    title: "Maintenance & Support",
    description: "Ongoing support for an existing product — bug fixes, small features, and monitoring, on a retainer or as-needed basis.",
    points: ["Bug fixes and small feature requests", "Dependency and security updates", "Uptime and error monitoring", "Monthly or as-needed retainer"],
  },
];
