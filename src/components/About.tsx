import { motion, useReducedMotion } from "motion/react";
import { SectionIntro } from "./SectionIntro";

const principles = [
  ["01", "Build", "End-to-end applications, not static demonstrations."],
  ["02", "Connect", "Interfaces, APIs, databases, authentication, and AI."],
  ["03", "Improve", "Architecture, DSA, testing, deployment, and code quality."],
];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-pad">
      <div className="site-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <SectionIntro label="About" title="Engineering mindset first. Tools second." />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-8 text-ink-soft">
            I am an MCA student focused on software development through practical project work. My strongest learning happens when I move beyond isolated screens and connect the entire system: user interface, API, authentication, data, and application logic.
          </p>
          <p className="mt-5 text-lg leading-8 text-ink-soft">
            My current direction is full-stack engineering, with a strong interest in backend architecture, Java and Python development, database-driven products, and AI integration that serves a real workflow.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {principles.map(([index, title, text]) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.018] p-5">
                <span className="font-mono text-[10px] text-mint">{index}</span>
                <strong className="mt-7 block font-display text-lg text-white">{title}</strong>
                <small className="mt-2 block text-xs leading-5 text-ink-dim">{text}</small>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
