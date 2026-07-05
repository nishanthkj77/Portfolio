import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          whileHover={reduceMotion ? undefined : { y: -5 }}
          className="group flex min-h-[390px] flex-col rounded-2xl border border-white/10 bg-white/[0.018] p-6 transition-colors hover:border-mint/20 hover:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-ink-dim">{project.index}</span>
            <span className="text-[10px] font-semibold tracking-[.13em] text-ink-dim uppercase">{project.category}</span>
          </div>

          <div className="mt-auto pt-16">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-6 text-ink-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((tech) => <span key={tech} className="tech-chip">{tech}</span>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              {project.repository ? <a href={project.repository} target="_blank" rel="noreferrer" className="project-link">Source <ArrowUpRight size={14} /></a> : null}
              {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live <ArrowUpRight size={14} /></a> : null}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
