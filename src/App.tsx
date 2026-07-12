 import { motion, useScroll, useSpring } from "motion/react";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Credentials } from "./components/Credentials";
import { FeaturedProject } from "./components/FeaturedProject";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectGrid } from "./components/ProjectGrid";
import { SectionIntro } from "./components/SectionIntro";
import { projects } from "./data/projects";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  const featured = projects.find((project) => project.featured) ?? projects[0];
  const autoPulse = projects.find((project) => project.id === "autopulse");

  const showcaseIds = new Set(
    [featured.id, autoPulse?.id].filter(Boolean) as string[]
  );

  const remaining = projects.filter((project) => !showcaseIds.has(project.id));

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-mint"
      />

      <Navbar />

      <main>
        <Hero />

        <section id="work" className="section-pad site-shell">
          <SectionIntro
            label="Selected work"
            title="Systems and projects that show the engineering work."
            description="The portfolio is intentionally selective. The emphasis is on end-to-end implementation, technical responsibility, and what each project demonstrates."
          />

          <FeaturedProject project={featured} />

          {autoPulse ? <FeaturedProject project={autoPulse} /> : null}

          <ProjectGrid projects={remaining} />
        </section>

        <Capabilities />
        <About />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
