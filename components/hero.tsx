"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Main Text Card (2 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-card border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col justify-center"
        >
          <p className="text-primary font-medium mb-2 tracking-wide">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-foreground">
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
            <Button size="lg" className="rounded-full font-semibold">
              Contactame
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full font-semibold">
              Ver Proyectos
            </Button>
          </div>
        </motion.div>

        {/* Avatar / Photo Card (1 col) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          
          {/* Placeholder Avatar */}
          <div className="w-32 h-32 rounded-full bg-secondary border-4 border-background flex items-center justify-center z-10 shadow-xl">
            <span className="text-4xl text-muted-foreground font-bold">MP</span>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground text-center z-10 font-medium">
            {/* TODO: Reemplazar este bloque por una etiqueta <Image /> de Next.js cuando tengas la foto */}
            Espacio para foto
          </p>
        </motion.div>

        {/* Status / Quick Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 bg-card border border-border/50 rounded-3xl p-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
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
        </motion.div>

      </div>
    </section>
  );
}

