export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  points: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "devin-ai-clone",
    name: "Devin AI Clone",
    tagline: "Autonomous AI Software Engineer",
    tags: ["Next.js", "Node.js", "TypeScript", "Docker", "Redis", "LLM APIs"],
    points: [
      "Problem: Built an autonomous AI coding agent that plans, writes, tests, and debugs full development tasks end-to-end, cutting manual prompting for routine engineering work",
      "Tech Stack: Node.js, TypeScript, and LLM APIs power the agent's orchestration/reasoning layer, with Redis for session caching and a Next.js dashboard for live task tracking",
      "How It Works: Spins up isolated Docker containers per session to safely run and test AI-generated code, supporting 50+ concurrent sandboxes with GitHub integration and live demo previews",
    ],
    github: "https://github.com/AtulPatidar1709/DevinAi_Clone",
    demo: "https://youtu.be/EUoytJB7XV8?si=4KcdV2Wfyy1KiSTM",
    featured: true,
  },
  {
    slug: "openrouter-clone",
    name: "OpenRouter Clone",
    tagline: "AI Gateway",
    tags: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "LLM APIs"],
    points: [
      "Built a unified AI gateway enabling developers to access multiple LLMs via a single API, reducing per-provider integration time by an estimated 60% for new users",
      "Designed REST API endpoints for prompt submission, model routing, and response streaming, supporting high-concurrency requests with consistent sub-200ms latency",
      "Implemented a dynamic provider abstraction layer, enabling zero-downtime model provider switches without any client-side code changes",
      "Developed a lightweight TypeScript SDK that cut developer onboarding time and reduced integration boilerplate by ~40%",
    ],
    github: "https://github.com/AtulPatidar1709/OpenRouter",
    demo: "https://openrouterclone.netlify.app/",
    featured: true,
  },
  {
    slug: "tour-trove",
    name: "Tour Trove",
    tagline: "Travel Booking Platform",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Docker", "AWS"],
    points: [
      "Prevented concurrent booking conflicts and race conditions using atomic MongoDB operations and transaction-safe logic",
      "Reduced API calls by 40% through client-side debouncing, intelligent caching, and optimized client-server communication protocols",
      "Improved transaction throughput by 45% by designing efficient, failure-tolerant cancellation and rebooking workflows",
      "Cut page load time by 30% by integrating Cloudinary CDN for optimized image delivery and lazy loading",
    ],
    github: "https://github.com/AtulPatidar1709/TourTrove",
    demo: "https://tour-trove-eight.vercel.app/",
    featured: true,
  },
  {
    slug: "vision-space",
    name: "VisionSpace",
    tagline: "Real-Time Collaborative Workspace",
    tags: ["Next.js", "TypeScript", "Socket.IO", "Express.js", "MongoDB"],
    points: [
      "Built a real-time multi-user collaboration platform with bi-directional WebSocket sync, enabling teams of 5+ to edit simultaneously with zero data loss",
      "Reduced multi-user sync errors by 60% through granular event handling and delta-based state transformation, improving session reliability",
      "Implemented session-based authentication and RBAC, securing workspace access for multiple user roles and reducing unauthorized access incidents to zero",
      "Cut WebSocket payload size by 35% via binary compression and delta updates, improving performance by 2x on low-bandwidth connections",
    ],
    github: "https://github.com/AtulPatidar1709/visonspace",
    demo: "https://visonspace.vercel.app/",
    featured: true,
  },
];
