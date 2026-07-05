import { motion, useReducedMotion } from "motion/react";
import { SectionIntro } from "./SectionIntro";

export function Credentials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="credentials" className="section-pad border-y border-white/8 bg-white/[0.012]">
      <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
        <SectionIntro label="Credential" title="Java foundation, formally validated." />

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(124,240,197,.06),transparent_42%)] p-7 sm:p-10"
        >
          <div className="flex items-center justify-between text-[10px] font-semibold tracking-[.18em] text-mint uppercase">
            <span>Oracle University</span>
            <span>2026</span>
          </div>
          <h3 className="mt-16 font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">Java Foundations</h3>
          <p className="mt-2 font-mono text-sm text-mint">1Z0-811</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-ink-muted">Passed in May 2026, validating foundational Java programming concepts and object-oriented development knowledge.</p>
          <div className="pointer-events-none absolute -right-8 -bottom-10 font-display text-[8rem] font-semibold tracking-[-0.09em] text-white/[0.025] sm:text-[11rem]">JAVA</div>
        </motion.article>
      </div>
    </section>
  );
}
