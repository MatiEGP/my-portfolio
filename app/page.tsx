import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <main className="w-full flex flex-col items-center p-4 md:p-8 flex-1">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <footer className="w-full py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Matias Palomeque Galindo. Construido con Next.js y Tailwind.
      </footer>
    </div>
  );
}
