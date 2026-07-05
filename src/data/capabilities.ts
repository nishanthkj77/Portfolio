import type { Capability } from "../types";

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Frontend systems",
    description: "Responsive interfaces, component architecture, client-side state, and API integration.",
    technologies: ["React", "TypeScript", "Vite", "JavaScript", "HTML", "CSS"],
  },
  {
    index: "02",
    title: "Backend development",
    description: "RESTful services, authentication flows, request validation, and application-layer logic.",
    technologies: ["Node.js", "Express", "REST APIs", "JWT", "Django"],
  },
  {
    index: "03",
    title: "Programming",
    description: "Object-oriented and general-purpose development across backend, academic, and automation work.",
    technologies: ["Java", "Python", "JavaScript", "C"],
  },
  {
    index: "04",
    title: "Data systems",
    description: "Persistent application data, relational queries, document models, and database-backed workflows.",
    technologies: ["MongoDB", "MySQL", "SQL", "SQLite"],
  },
  {
    index: "05",
    title: "Applied AI",
    description: "AI integration in web workflows and research work with NLP and transformer-based models.",
    technologies: ["Machine Learning", "NLP", "RoBERTa", "Transformers"],
  },
  {
    index: "06",
    title: "Engineering workflow",
    description: "Version control, collaborative development, local tooling, and iterative project delivery.",
    technologies: ["Git", "GitHub", "VS Code", "Eclipse", "Google Colab"],
  },
];
