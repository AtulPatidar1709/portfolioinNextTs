export type Education = {
  institution: string;
  degree: string;
  period: string;
  detail: string;
};

// NOTE: the resume docx you uploaded lists 2017–2021, but you told me the
// correct start year is 2018 — using 2018–2021 as instructed. Worth double
// checking which is right before this goes live, since the two disagree.
export const education: Education[] = [
  {
    institution: "IES IPS Academy, University of Indore",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2018 – 2021",
    detail: "CGPA: 7.65 / 10.0 (76.5%)",
  },
];
