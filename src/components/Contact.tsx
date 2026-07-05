import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="site-shell py-28 text-center sm:py-36">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Contact</p>
        <h2 className="mx-auto mt-4 max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[.9] font-semibold tracking-[-0.07em] text-white">Available for software development opportunities.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-ink-muted">Open to entry-level software development and full-stack engineering roles where I can contribute to real systems and keep growing through execution.</p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="mailto:kjwork298@gmail.com" className="button-primary"><Mail size={16} /> Email</a>
          <a href="https://www.linkedin.com/in/nishanth-k-j/" target="_blank" rel="noreferrer" className="button-outline">LinkedIn <ArrowUpRight size={16} /></a>
          <a href="https://github.com/nishanthkj77" target="_blank" rel="noreferrer" className="button-outline">GitHub <ArrowUpRight size={16} /></a>
        </div>
      </motion.div>
    </section>
  );
}
