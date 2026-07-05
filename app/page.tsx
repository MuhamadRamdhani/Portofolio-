import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
