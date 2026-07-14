import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../types";

function DayFlowVisual() {
  return (
    <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#080b11] p-4">
      <div className="absolute right-[-20%] top-[-40%] h-40 w-40 rounded-full bg-blue/15 blur-3xl" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[.16em] text-mint uppercase">
              Today
            </span>
            <strong className="mt-1 block font-display text-2xl tracking-[-0.05em] text-white">
              76%
            </strong>
          </div>
          <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-[10px] font-semibold tracking-[.12em] text-mint uppercase">
            On track
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-[76%] rounded-full bg-mint" />
        </div>

        <div className="mt-5 grid gap-3">
          {[
            ["Gym", "6:00 PM", "Workout"],
            ["Study", "8:30 PM", "Focus block"],
            ["Routine", "Daily", "Streak active"],
          ].map(([title, time, meta]) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div>
                <strong className="block text-sm text-white">{title}</strong>
                <span className="text-xs text-ink-dim">{meta}</span>
              </div>
              <span className="text-xs font-semibold text-blue">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutoPulseVisual() {
  return (
    <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#080b11] p-4">
      <div className="absolute left-[-20%] top-[-40%] h-40 w-40 rounded-full bg-mint/15 blur-3xl" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[.16em] text-mint uppercase">
              Vehicle health
            </span>
            <strong className="mt-1 block font-display text-2xl tracking-[-0.05em] text-white">
              82%
            </strong>
          </div>
          <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-[10px] font-semibold tracking-[.12em] text-mint uppercase">
            Good
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-[82%] rounded-full bg-mint" />
        </div>

        <div className="mt-5 grid gap-3">
          {[
            ["Insurance", "24 days left", "Alert"],
            ["PUC", "41 days left", "Valid"],
            ["Service", "850 km", "Due soon"],
          ].map(([title, value, meta]) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div>
                <strong className="block text-sm text-white">{title}</strong>
                <span className="text-xs text-ink-dim">{value}</span>
              </div>
              <span className="text-xs font-semibold text-blue">{meta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductVisual({ id }: { id: string }) {
  if (id === "dayflow") return <DayFlowVisual />;
  if (id === "autopulse") return <AutoPulseVisual />;
  return null;
}

export function ProductLab({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mt-14">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[.16em] text-mint uppercase">
            Product lab
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
            Android products with real application depth.
          </h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-ink-muted">
          Mobile-first systems focused on offline use, clean workflows, useful reminders,
          and practical daily problem-solving.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-mint/20 hover:bg-white/[0.035] sm:p-6"
          >
            <div className="absolute right-[-18%] top-[-22%] h-56 w-56 rounded-full bg-blue/10 blur-3xl transition-opacity group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-dim">{project.index}</span>
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-semibold tracking-[.13em] text-ink-dim uppercase">
                  {project.category}
                </span>
              </div>

              <h4 className="mt-8 font-display text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                {project.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-ink-muted">
                {project.summary}
              </p>

              <ProductVisual id={project.id} />

              <ul className="mt-6 space-y-2">
                {project.details.slice(0, 3).map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-ink-muted">
                    <span className="mt-[.7rem] h-px w-3 shrink-0 bg-mint/70" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
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
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-mint"
                >
                  View repository <ArrowUpRight size={15} />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
