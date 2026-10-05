import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center p-4 md:p-8">
      <Hero />
      <Projects />
      <TechStack />
    </main>
  );
}
