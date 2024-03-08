import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import music from "../public/ProjectImages/spotify.png";
import weather from "../public/ProjectImages/weather.png"
import youtube from "../public/ProjectImages/youtube.png";

import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor of Technology B-Tech (C S E)",
    location: "IES IPS ACADEMY INDORE",
    description:
      "I completed my Bachelor's degree in Computer Science and Engineering from IES IPS Academy Indore.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2018 - May 2021 ",
  },
  {
    title: "3 Year Diploma, CSE",
    location: "S. V. Polytechnic College, Bhopal ",
    description:
      "I completed my 3 Year Engineering Diploma From S. V. Polytechnic College, Bhopal.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2015 - May 2018",
  },
  {
    title: "10th",
    location: "Modern Public Higher Secoundary School, Ashta",
    description:
      "I completed my class 10 education at MPS School, Ashta.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const CertificatesData = [
  {
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    location: "Udemy",
    description:
      "The Complete JavaScript Course 2023: From Zero to Expert! on 07/18/2023 as taught by Jonas Schmedtmann on Udemy.",
    icon: React.createElement(TbBrandJavascript ),
    skills: " JavaScript, NodeJs , Html ,Css",
  },
  {
    title: "javascript-algorithms-and-data-structures",
    location: "FreeCodeCamp.org",
    description:
      "Complete javascript-algorithms-and-data-structures",
    icon: React.createElement(TbBrandJavascript),
    skills: "HTML,CSS,JavaScript,Es6",
  }
] as const;

export const projectsData = [
  {
    title: "Music Lyriks",
    description:
      "MusicLyriks is a Music app similar like Spotify.",
    tags: ["React", "Tailwind", "Vite", "Netlify"],
    imageUrl: music,
    gitHub: "https://github.com/AtulPatidar1709/music_clone_app",
    liveLink: "https://musiclyriks.netlify.app/"
  },
  {
    title: "Youtube4U",
    description:
      "YouTube Clone",
    tags: ["React", "Tailwind", "RapidApi", "Netlify"],
    imageUrl: youtube,
    gitHub: "https://github.com/AtulPatidar1709/youtube_clone",
    liveLink: "https://youtube4u.netlify.app/"
  },
  {
    title: "Weether For Week",
    description:
      "Display weekly Weather",
    tags: ["React", "Rapid API"],
    imageUrl: weather,
    gitHub: "https://github.com/AtulPatidar1709/weatherapp",
    liveLink: "https://weatherforweek.netlify.app/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
