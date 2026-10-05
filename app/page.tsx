import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center p-4 md:p-8">
      <Hero />
      <Projects />
    </main>
  );
}
