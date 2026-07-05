import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "campussync-ai",
    index: "01",
    title: "CampusSync AI",
    category: "Full-stack system · Applied AI",
    summary:
      "Academic operations and timetable planning platform with real API integration, role-based access, persistent data, and a Python optimization engine.",
    details: [
      "React client connected to an Express REST API",
      "MongoDB persistence for operational data",
      "JWT-backed role flows for Admin, HOD, Faculty, and Student users",
      "Python AI engine integrated into the timetable generation workflow",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Python", "JWT"],
    repository: "https://github.com/nishanthkj77/CampusSync-AI",
    featured: true,
  },
  {
    id: "nodejs-web",
    index: "02",
    title: "Node.js Web Project",
    category: "Backend · Web fundamentals",
    summary:
      "A Node.js project developed to strengthen server setup, routing, project structure, and local development workflow.",
    details: [
      "Server-side application structure",
      "JavaScript runtime and request handling practice",
      "Reusable project organization for local development",
    ],
    stack: ["Node.js", "JavaScript", "HTML", "CSS"],
    repository: "https://github.com/nishanthkj77/nodejs-simple-static-website",
  },
  {
    id: "portfolio-platform",
    index: "03",
    title: "Portfolio Platform",
    category: "Frontend engineering",
    summary:
      "A typed React portfolio built as a production-ready Vite application with reusable components, responsive behavior, and motion-driven interactions.",
    details: [
      "React + TypeScript component architecture",
      "Tailwind CSS v4 design system",
      "Motion-based interaction and scroll transitions",
      "GitHub Pages deployment workflow",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    repository: "https://github.com/nishanthkj77/Portfolio",
    live: "https://nishanthkj77.github.io/Portfolio/",
  },
  {
    id: "roberta-research",
    index: "04",
    title: "Implicit Hate Speech Detection",
    category: "NLP research",
    summary:
      "Academic research work on binary hate-speech classification using a RoBERTa-based transformer pipeline.",
    details: [
      "Transformer-based text classification",
      "NLP preprocessing and model evaluation",
      "Research-oriented experimentation and reporting",
    ],
    stack: ["Python", "NLP", "RoBERTa", "Transformers", "Google Colab"],
  },
];
