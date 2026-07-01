# Portfolio

Portfolio personal hecho con React + TypeScript + Vite. Incluye:

- **About Me**: sección con tu perfil profesional en formato "terminal".
- **Stack tecnológico**: mini tarjetas con el ícono de cada tecnología.
- **Proyectos**: tarjetas animadas estilo "commit de git" (con framer-motion).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Cómo cargar tu contenido

Todo el contenido editable vive en `src/data/`:

- `src/data/profile.ts` → nombre, rol, bio, avatar, redes sociales (sección About Me).
- `src/data/techStack.ts` → tu stack. El campo `icon` es el slug de simpleicons.org (ej: "react", "typescript", "docker").
- `src/data/projects.ts` → tus proyectos: título, descripción, imagen, tags, links a repo/demo.

No hace falta tocar los componentes para actualizar el contenido, solo estos tres archivos.

## Build para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deployar (Vercel, Netlify, GitHub Pages, etc).
