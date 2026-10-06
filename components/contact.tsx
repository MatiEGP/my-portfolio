"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";


function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "matiasgalindo3521@gmail.com"; // TODO: Cambiar por tu email real

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-background hover:bg-secondary/50 border border-border/50 p-1 pl-4 rounded-full transition-colors h-11">
      <span className="text-sm font-medium text-foreground select-all">{email}</span>
      <Button 
        size="icon" 
        variant="ghost" 
        className="rounded-full w-9 h-9 shrink-0 hover:bg-background" 
        onClick={handleCopy}
        title="Copiar email"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
      </Button>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto min-h-[100dvh] md:min-h-screen flex flex-col justify-center py-12 px-4 text-center md:snap-start md:snap-always">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.85, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8  }}
        className="relative group overflow-hidden rounded-3xl p-[1px] shadow-sm hover:shadow-primary/5 w-full"
      >
        {/* Gradiente giratorio de fondo */}
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 bg-card p-8 md:p-16 flex flex-col items-center h-full w-full rounded-[calc(1.5rem-1px)] border border-border/50 group-hover:border-transparent transition-colors overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/10 blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 z-10">
            ¿Construimos algo juntos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-10 z-10">
            Actualmente estoy buscando mi primera oportunidad en el sector IT. 
            Si tenés una propuesta, un proyecto interesante o simplemente querés hablar de 
            algun tema sobre tecnología, no dudes en contactarme.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 z-10">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto items-center justify-center">
              <Button nativeButton={false} size="lg" className="rounded-full gap-2 font-semibold h-11 px-6" render={<a href="mailto:matiasgalindo3521@gmail.com" />}>
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
              <CopyEmail />
            </div>
            
            <Button nativeButton={false} size="lg" variant="outline" className="rounded-full gap-2 font-semibold bg-background hover:bg-secondary transition-colors" render={<a href="https://linkedin.com/in/matiepg" target="_blank" rel="noopener noreferrer" />}>
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </Button>

            <Button nativeButton={false} size="lg" variant="outline" className="rounded-full gap-2 font-semibold bg-background hover:bg-secondary transition-colors" render={<a href="https://github.com/MatiEGP" target="_blank" rel="noopener noreferrer" />}>
              <FaGithub className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
