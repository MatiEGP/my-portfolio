"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench } from "lucide-react";

const CATEGORIES = [
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 mb-4 text-primary" />,
    techs: ["Java + Spring Boot", "Node.js", "TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 mb-4 text-primary" />,
    techs: ["Next.js", "React", "Vite"],
  },
  {
    title: "Infra & DBs",
    icon: <Database className="w-6 h-6 mb-4 text-primary" />,
    techs: ["Docker", "Linux", "AWS", "Vercel", "Railway", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & OS",
    icon: <Wrench className="w-6 h-6 mb-4 text-primary" />,
    techs: ["Git", "GitHub Actions", "Linux", "Miro"],
  },
];

export function TechStack() {
  return (
    <section className="w-full max-w-5xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 md:snap-start md:snap-always">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Stack Técnico
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Las tecnologías y herramientas con las que trabajo para construir software de principio a fin, desde la infraestructura hasta la interfaz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5"
          >
            {/* Gradiente giratorio de fondo */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Contenido de la tarjeta */}
            <div className="relative z-10 bg-card h-full w-full p-8 rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors">
              {category.icon}
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
