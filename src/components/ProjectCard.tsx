import { motion } from "framer-motion";
import type { Project } from "../types";
import "./ProjectCard.css";

const STATUS_LABEL: Record<Project["status"], string> = {
  active: "active",
  wip: "in progress",
  archived: "archived",
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="pcard"
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="pcard__image-wrap">
        <img src={project.image} alt="" loading="lazy" className="pcard__image" />
        <span className={`pcard__status pcard__status--${project.status}`}>
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <div className="pcard__body">
        <p className="pcard__commit mono">
          <span className="pcard__commit-plus">+</span>
          {project.commitMessage}
        </p>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>

        <ul className="pcard__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="pcard__tag mono">
              {tag}
            </li>
          ))}
        </ul>

        <div className="pcard__links">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="pcard__link">
              Código
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="pcard__link pcard__link--primary"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
