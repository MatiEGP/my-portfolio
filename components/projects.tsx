"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Proyecto 1: Sistema de Gestión",
    description: "Breve descripción del problema que resolviste y cómo. Por ejemplo: API RESTful desarrollada con Java y Spring Boot, conectada a un frontend de React. Dockerizado para despliegues fáciles.",
    stack: ["Next.js", "Java", "Docker", "PostgreSQL"],
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Proyecto 2: E-Commerce Dashboard",
    description: "Aplicación full-stack para métricas en tiempo real. Manejo complejo de estado global y optimización de renderizado para gráficos pesados.",
    stack: ["React", "Python", "Tailwind CSS", "Redis"],
    repoUrl: "#",
    liveUrl: "#",
  }
];

export function Projects() {
  return (
    <section className="w-full max-w-5xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 md:snap-start md:snap-always">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Una selección de mis mejores desarrollos. Me enfoco en escribir código limpio, 
          arquitecturas escalables y buenas experiencias de usuario.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col lg:flex-row gap-8 items-center bg-card p-6 md:p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-primary/5"
          >
            {/* Project Image Placeholder */}
            <div className="w-full lg:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <p className="text-muted-foreground font-medium z-10">Mockup Proyecto {index + 1}</p>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="default" className="rounded-full font-semibold">
                  Ver Código
                </Button>
                <Button variant="outline" className="rounded-full font-semibold">
                  Ver Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
