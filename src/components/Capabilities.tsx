import { motion, useReducedMotion } from "motion/react";
import { capabilities } from "../data/capabilities";
import { SectionIntro } from "./SectionIntro";

export function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="capabilities" className="section-pad border-y border-white/8 bg-white/[0.012]">
      <div className="site-shell">
        <SectionIntro label="Capabilities" title="A practical stack across product, backend, data, and AI." description="Technology is grouped by the kind of engineering work it supports—not by decorative skill percentages." />

        <div className="mt-12 border-l border-t border-white/10 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.index}
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="min-h-[250px] border-r border-b border-white/10 p-6 transition-colors hover:bg-mint/[0.025] sm:p-7"
            >
              <span className="font-mono text-[11px] text-mint">{item.index}</span>
              <h3 className="mt-12 font-display text-xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{item.description}</p>
              <p className="mt-5 text-xs leading-6 text-ink-dim">{item.technologies.join(" · ")}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
