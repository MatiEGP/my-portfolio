import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">projects/</p>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Una selección de trabajos personales y profesionales. Cada tarjeta es un commit: código,
          demo y contexto.
        </p>

        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
