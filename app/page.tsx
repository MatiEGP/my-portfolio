import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth">
      <main className="w-full flex flex-col items-center flex-1">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}
