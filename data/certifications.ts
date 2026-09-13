export type Certification = {
  year: string;
  title: string;
  description: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    year: "2025",
    title: "TakeUForward — Full SDE & DSA Series",
    description: "Solved 500+ complex DSA problems across data structures, algorithms, and system design fundamentals.",
  },
  {
    year: "2023",
    title: "The Complete JavaScript Course — Udemy",
    description: "Mastered JavaScript ES6+ features, applying best practices in web development.",
  },
  {
    year: "2021",
    title: "Database Management Systems — NPTEL (IIT Kharagpur)",
    description: "Explored relational databases, indexing, transactions, and query optimization.",
    url: "https://drive.google.com/file/d/1YmxFod6iBKkN98WBVVO8c0qcrJaOd8Zi/view",
  },
];
