import type { Profile } from "../types";

/**
 * Editá estos datos con tu información profesional.
 * Este es el único lugar que necesitás tocar para la sección "About Me".
 */
export const profile: Profile = {
  name: "Matías Ezequiel Palomeque Galindo",
  role: "Desarrollador Full Stack",
  location: "Córdoba, Argentina",
  bio: "Construyo productos web prolijos, de punta a punta. Me gusta el código legible, los commits chicos y los sistemas que no se caen a las 3am. Actualmente enfocado en React, TypeScript y arquitecturas escalables en Node.",
  avatarUrl: "/src/assets/104948945.png",
  status: "Disponible para mi primera experiencia laboral",
  socials: [
    { label: "GitHub", url: "https://github.com/MatiEGP", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/matias-ezequiel-palomeque-galindo-0a775b2a9", icon: "linkedin" },
    { label: "Email", url: "mailto:matiasgalindo3521@gmail.com", icon: "mail" },
  ],
};
