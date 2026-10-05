"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border/50 rounded-3xl p-8 md:p-16 flex flex-col items-center relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/10 blur-[80px] pointer-events-none" />

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 z-10">
          ¿Construimos algo juntos?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-10 z-10">
          Actualmente estoy buscando nuevas oportunidades como Software Engineer Intern / Junior. 
          Si tenés una propuesta, un proyecto interesante o simplemente querés hablar de código, 
          mi bandeja de entrada siempre está abierta.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 z-10">
          <Button size="lg" className="rounded-full gap-2 font-semibold" asChild>
            <a href="mailto:tu-email@ejemplo.com">
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="rounded-full gap-2 font-semibold bg-background hover:bg-secondary transition-colors" asChild>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button size="lg" variant="outline" className="rounded-full gap-2 font-semibold bg-background hover:bg-secondary transition-colors" asChild>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
