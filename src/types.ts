export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  stack: string[];
  repository?: string;
  live?: string;
  featured?: boolean;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  technologies: string[];
};
