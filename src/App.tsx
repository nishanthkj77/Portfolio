 import { motion, useScroll, useSpring } from "motion/react";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Credentials } from "./components/Credentials";
import { FeaturedProject } from "./components/FeaturedProject";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductGrid } from "./components/ProjectGrid";
import { ProductLab } from "./components/ProductLab";
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
  const productProjects = projects.filter((project) =>
    ["dayflow", "autopulse"].includes(project.id)
  );

  const reservedIds = new Set(
    [featured.id, ...productProjects.map((project) => project.id)]
  );

  const remaining = projects.filter((project) => !reservedIds.has(project.id));

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
            title="Systems and products that show the engineering work."
            description="The portfolio is intentionally selective. CampusSync AI is the flagship system, while DayFlow and AutoPulse show mobile product thinking with offline-first Android architecture."
          />

          <FeaturedProject project={featured} />

          <ProductLab projects={productProjects} />

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
