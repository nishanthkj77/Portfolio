 import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../types";
import { AutoPulseMap } from "./AutoPulseMap";
import { SystemMap } from "./SystemMap";

export function FeaturedProject({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const isAutoPulse = project.id === "autopulse";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.02] p-5 shadow-[0_30px_100px_rgba(0,0,0,.25)] sm:p-7 lg:grid-cols-[.9fr_1.1fr] lg:p-8"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-ink-dim">{project.index}</span>
          <span className="rounded-full border border-mint/20 bg-mint/5 px-3 py-1 text-[10px] font-semibold tracking-[.13em] text-mint uppercase">
            {isAutoPulse ? "Active product concept" : "Flagship system"}
          </span>
        </div>

        <p className="mt-10 text-xs font-semibold tracking-[.14em] text-blue uppercase">
          {project.category}
        </p>

        <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
          {project.summary}
        </p>

        <ul className="mt-7 space-y-3">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-6 text-ink-muted">
              <span className="mt-[.7rem] h-px w-3 shrink-0 bg-mint/70" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {project.repository ? (
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-mint"
          >
            View repository <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="mt-8 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[.12em] text-ink-dim uppercase">
            Repository coming soon
          </span>
        )}
      </div>

      {isAutoPulse ? <AutoPulseMap /> : <SystemMap />}
    </motion.article>
  );
}
