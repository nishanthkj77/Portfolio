import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { id: "client", label: "React client", meta: "UI · state · API calls", className: "left-[6%] top-[12%]" },
  { id: "api", label: "Express API", meta: "REST · auth · logic", className: "right-[6%] top-[36%]" },
  { id: "ai", label: "Python engine", meta: "Optimization workflow", className: "left-[11%] bottom-[9%]" },
  { id: "db", label: "MongoDB", meta: "Persistent records", className: "right-[8%] bottom-[7%]" },
];

export function SystemMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom_right,black,transparent_86%)]" />
      <div className="absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-blue/10 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 430" preserveAspectRatio="none" aria-hidden="true">
        <motion.path d="M180 95 C310 95 360 150 470 190" fill="none" stroke="rgba(124,240,197,.45)" strokeWidth="1.2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={reduceMotion ? undefined : { pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
        <motion.path d="M470 210 C390 265 300 285 190 340" fill="none" stroke="rgba(112,167,255,.42)" strokeWidth="1.2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={reduceMotion ? undefined : { pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .15 }} />
        <motion.path d="M470 215 C510 270 505 310 480 360" fill="none" stroke="rgba(196,146,255,.38)" strokeWidth="1.2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={reduceMotion ? undefined : { pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .3 }} />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.14 * index }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className={`absolute z-10 min-w-[145px] rounded-xl border border-white/12 bg-[#10151f]/92 p-4 backdrop-blur ${node.className}`}
        >
          <span className="font-mono text-[10px] tracking-[.16em] text-mint uppercase">{String(index + 1).padStart(2, "0")}</span>
          <strong className="mt-2 block font-display text-sm tracking-[-0.02em] text-white">{node.label}</strong>
          <small className="mt-1 block text-[11px] text-ink-dim">{node.meta}</small>
        </motion.div>
      ))}
    </div>
  );
}
