import { ArrowDownRight, ArrowUpRight, CircleDot } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const focusItems = [
  ["01", "Full-stack engineering"],
  ["02", "Backend services"],
  ["03", "Applied AI integration"],
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="site-shell relative min-h-screen pt-30 pb-20 lg:grid lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-18 -z-10 h-[42rem] bg-[radial-gradient(circle_at_22%_28%,rgba(124,240,197,.12),transparent_27%),radial-gradient(circle_at_82%_38%,rgba(112,167,255,.11),transparent_28%)]" />

      <div>
        <motion.p {...enter(0.05)} className="section-label mb-5">Nishanth K J · MCA</motion.p>
        <motion.h1 {...enter(0.11)} className="font-display max-w-5xl text-[clamp(3.8rem,8.8vw,8.4rem)] leading-[.88] font-semibold tracking-[-0.075em] text-white">
          Full-stack
          <span className="block text-ink-dim">developer.</span>
        </motion.h1>
        <motion.p {...enter(0.18)} className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
          Building end-to-end software systems across web interfaces, backend APIs, databases, and AI-assisted workflows.
        </motion.p>

        <motion.div {...enter(0.24)} className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="button-primary">View selected work <ArrowDownRight size={16} /></a>
          <a href="https://github.com/nishanthkj77" target="_blank" rel="noreferrer" className="button-outline">GitHub <ArrowUpRight size={16} /></a>
        </motion.div>

        <motion.div {...enter(0.3)} className="mt-8 flex items-center gap-3 text-sm text-ink-muted">
          <CircleDot size={15} className="text-mint" />
          <span>Open to software development opportunities</span>
        </motion.div>
      </div>

      <motion.aside
        {...enter(0.2)}
        className="mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,.35)] lg:mt-0"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <span className="text-[11px] font-medium tracking-[.16em] text-ink-dim uppercase">Current focus</span>
          <span className="font-mono text-[11px] text-mint">2026</span>
        </div>

        <div className="p-5 sm:p-7">
          {focusItems.map(([index, label], position) => (
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + position * 0.08 }}
              className="grid grid-cols-[42px_1fr] border-b border-white/8 py-5 last:border-0"
            >
              <span className="font-mono text-xs text-ink-dim">{index}</span>
              <span className="font-display text-lg tracking-[-0.025em] text-white sm:text-xl">{label}</span>
            </motion.div>
          ))}

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="metric-panel">
              <span>Core stack</span>
              <strong>React / Node</strong>
            </div>
            <div className="metric-panel">
              <span>Languages</span>
              <strong>Java / Python</strong>
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
