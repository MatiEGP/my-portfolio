import type { Profile } from "../types";

/**
 * Editá estos datos con tu información profesional.
 * Este es el único lugar que necesitás tocar para la sección "About Me".
 */
export const profile: Profile = {
  name: "Tu Nombre",
  role: "Desarrollador/a Full Stack",
  location: "Córdoba, Argentina",
  bio: "Construyo productos web prolijos, de punta a punta. Me gusta el código legible, los commits chicos y los sistemas que no se caen a las 3am. Actualmente enfocado en React, TypeScript y arquitecturas escalables en Node.",
  avatarUrl: "https://api.dicebear.com/9.x/identicon/svg?seed=portfolio&backgroundType=gradientLinear",
  status: "Disponible para nuevos proyectos",
  socials: [
    { label: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/tu-usuario", icon: "linkedin" },
    { label: "Email", url: "mailto:tu@email.com", icon: "mail" },
  ],
};
