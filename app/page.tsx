import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ninja-black">
      <Hero />
      <div className="section-divider" />
      <Benefits />
      <div className="section-divider" />
      <Testimonials />
      <FinalCTA />
      <FloatingCTA />
    </main>
  );
}
