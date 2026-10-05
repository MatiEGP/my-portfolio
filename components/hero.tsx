"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 md:snap-start md:snap-always">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Main Text Card (2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8  }}
          className="relative group md:col-span-2 overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5"
        >
          {/* Gradiente giratorio de fondo */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 bg-card p-8 md:p-12 flex flex-col justify-center h-full w-full rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors">
            <p className="text-primary font-medium mb-2 tracking-wide">
              Hola, soy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-text-gradient bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Matias Palomeque Galindo.
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Software Engineer.
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-xl mb-8 leading-relaxed">
              Estudiante de Ingeniería en Sistemas. Me especializo en construir 
              aplicaciones robustas, uniendo la solidez del backend con 
              experiencias web modernas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-semibold" render={<a href="#contact" />} nativeButton={false}>
                Contactame
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full font-semibold" render={<a href="#projects" />} nativeButton={false}>
                Ver Proyectos
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Avatar / Photo Card (1 col) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.1  }}
          className="relative group overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5 min-h-[300px]"
        >
          {/* Gradiente giratorio de fondo */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 bg-card flex flex-col items-center justify-center h-full w-full p-8 rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            
            {/* Placeholder Avatar */}
            <div className="w-32 h-32 rounded-full bg-secondary border-4 border-background flex items-center justify-center z-10 shadow-xl group-hover:scale-105 transition-transform duration-300">
              <span className="text-4xl text-muted-foreground font-bold">MP</span>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground text-center z-10 font-medium">
              Espacio para foto
            </p>
          </div>
        </motion.div>

        {/* Status / Quick Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2  }}
          className="relative group md:col-span-3 overflow-hidden rounded-3xl p-[1px]"
        >
          {/* Gradiente giratorio de fondo */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 bg-card p-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 h-full w-full rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Disponible para nuevas oportunidades (Junior / Intern)
              </span>
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Enfocado en Node, React & Java
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

