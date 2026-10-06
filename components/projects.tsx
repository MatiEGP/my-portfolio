"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Fuimonos: Travel Planner",
    description: "App web para organizar planificaciones de viajes. Permite crear itinerarios dia a dia, asignar actividades y gestionar gastos. Proyecto full-stack académico, maneja autenticacion, autorizacion y persistencia.",
    stack: ["Java", "Spring Boot", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/MatiEGP/travel-planner",
    liveUrl: "https://fuimonos-project.vercel.app/",
    imageUrl: "/images/fuimonos.png", // Ej: "/images/fuimonos.png" (guarda la imagen en la carpeta public/images)
  },
  {
    title: "DeporteX: Gestor de Canchas Deportivas",
    description: "Aplicación full-stack para gestión de canchas deportivas. Manejo completo de ABMC de canchas, turnos y reservas. También incluye un sistema basico de gestion de torneos.",
    stack: ["Python", "FastAPI", "React", "Vite", "Tailwind CSS", "SQLite"],
    repoUrl: "https://github.com/MatiEGP/DeporteX",
    liveUrl: "#",
    imageUrl: "/images/deportex.png", // Ej: "/images/proyecto-2.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 md:snap-start md:snap-always">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Proyectos Destacados
        </h2>
        {/* <p className="text-lg text-muted-foreground max-w-2xl">
          Una selección de mis mejores desarrollos. Me enfoco en escribir código limpio, 
          arquitecturas escalables y buenas experiencias de usuario.
        </p> */}
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.1  }}
            className="relative group overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5"
          >
            {/* Gradiente giratorio de fondo */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Contenido de la tarjeta */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center bg-card p-6 md:p-8 h-full w-full rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors">
              {/* Project Image */}
              <div className="w-full lg:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5">
                {/* Si tenes una imagen, la renderiza optimizada con Next Image */}
                {project.imageUrl ? (
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  /* Placeholder por si todavia no pusiste la imagen */
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <p className="text-muted-foreground font-medium z-10">Mockup Proyecto {index + 1}</p>
                  </>
                )}
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
                  {project.repoUrl !== "#" && (
                    <Button nativeButton={false} variant="default" className="rounded-full font-semibold" render={<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" />}>
                      Ver Código
                    </Button>
                  )}
                  {project.liveUrl !== "#" && (
                    <Button nativeButton={false} variant="outline" className="rounded-full font-semibold bg-background hover:bg-secondary" render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
                      Ver Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
