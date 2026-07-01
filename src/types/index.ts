export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "web";
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  bio: string;
  avatarUrl: string;
  status: string;
  socials: SocialLink[];
}

export interface TechItem {
  name: string;
  /** slug from simpleicons.org, e.g. "react", "typescript", "docker" */
  icon: string;
  /** 0-100, nivel de dominio propio (opcional, se usa para el borde de progreso) */
  level?: number;
  /** color hexadecimal opcional para el icono (por defecto se usa el color oficial de simpleicons) */
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  status: "active" | "archived" | "wip";
  commitMessage: string;
}
