"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench } from "lucide-react";
import { FaJava, FaAws } from "react-icons/fa";
import { 
  SiSpringboot, SiNodedotjs, SiTypescript, SiJavascript, SiPython, 
  SiNextdotjs, SiReact, SiVite, SiDocker, SiLinux, 
  SiVercel, SiRailway, SiPostgresql, SiMysql, SiGit, SiGithubactions, SiMiro 
} from "react-icons/si";

const CATEGORIES = [
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-primary" />,
    techs: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    techs: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Infra & DBs",
    icon: <Database className="w-6 h-6 text-primary" />,
    techs: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & OS",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    techs: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Miro", icon: <SiMiro /> },
    ],
  },
];

export function TechStack() {
  return (
    <section className="w-full max-w-5xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 md:snap-start md:snap-always">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Stack Tcnico
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Las tecnologas y herramientas con las que trabajo para construir software de principio a fin, desde la infraestructura hasta la interfaz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.1  }}
            className="relative group overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5"
          >
            {/* Gradiente giratorio de fondo */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Contenido de la tarjeta */}
            <div className="relative z-10 bg-card h-full w-full p-8 rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-2 p-3 min-w-[80px] bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-xl transition-colors cursor-default group/tech"
                  >
                    <span className="text-3xl text-primary transition-transform group-hover/tech:scale-110">{tech.icon}</span>
                    <span className="text-xs font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
