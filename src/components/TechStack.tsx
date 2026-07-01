import { motion } from "framer-motion";
import { techStack } from "../data/techStack";
import "./TechStack.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function TechStack() {
  return (
    <section id="stack" className="section stack">
      <div className="container">
        <p className="eyebrow">stack.json</p>
        <h2 className="section-title">Tecnologías con las que trabajo</h2>
        <p className="section-subtitle">
          Herramientas y lenguajes que uso habitualmente en producción y proyectos personales.
        </p>

        <motion.ul
          className="stack__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech) => (
            <motion.li
              key={tech.name}
              className="stack__item"
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              style={
                {
                  "--level": `${tech.level ?? 70}%`,
                } as React.CSSProperties
              }
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}/d7dce2`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="stack__icon"
              />
              <span className="stack__name mono">{tech.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
