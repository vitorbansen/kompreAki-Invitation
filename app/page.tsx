import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg-primary">
      <Hero />
      <div className="section-divider" />
      <Benefits />
      <div className="section-divider" />
      <HowItWorks />
      <FinalCTA />
      <FloatingCTA />
    </main>
  );
}
