import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Nombre del Proyecto",
    description:
      "Descripción corta de qué hace el proyecto, qué problema resuelve y qué lo hace interesante.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Node.js"],
    repoUrl: "https://github.com/tu-usuario/proyecto-1",
    demoUrl: "https://tu-demo.com",
    status: "active",
    commitMessage: "feat: initial release",
  },
  {
    id: "proj-2",
    title: "Otro Proyecto",
    description:
      "Otra descripción corta y directa. Contá el stack, el desafío técnico principal y el resultado.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/tu-usuario/proyecto-2",
    status: "wip",
    commitMessage: "wip: building core features",
  },
  {
    id: "proj-3",
    title: "Proyecto Personal",
    description:
      "Un proyecto para aprender o experimentar con alguna tecnología nueva. Explicá el aprendizaje clave.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "API"],
    repoUrl: "https://github.com/tu-usuario/proyecto-3",
    demoUrl: "https://tu-demo-3.com",
    status: "archived",
    commitMessage: "chore: archive project",
  },
];
