export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "MERN Stack Intern",
    company: "TechnomancerAI",
    location: "Remote (Based in Indore, MP — open to on-site/hybrid)",
    period: "May 2026 – Present",
    points: [
      "Delivered 10+ responsive UI components and 3 full feature pages using React.js, TypeScript, and Tailwind CSS — directly improving UI consistency and reducing frontend rework across 2 production releases",
      "Built and integrated 8+ RESTful API endpoints with Node.js and Express.js, cutting average API response time by ~20% through query optimization and Redis caching",
      "Implemented state management across 5+ modules using Redux and Context API, reducing state-related bugs by ~30% and improving component reusability",
      "Resolved 15+ bugs and shipped enhancements across 3 concurrent projects in Agile sprints, consistently meeting deadlines and improving overall team delivery velocity",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Indore, India",
    period: "2021 – Present",
    points: [
      "Delivered 40+ projects across web apps, booking platforms, and AI-powered tools for startups and agencies",
      "Owned architecture, implementation, and deployment end-to-end, working directly with clients on scope and timeline",
    ],
  },
];
