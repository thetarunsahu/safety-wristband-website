"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SosSimulator from "@/components/sections/SosSimulator";
import UseCases from "@/components/sections/UseCases";
import HardwareDiagram from "@/components/sections/HardwareDiagram";
import TechSpecs from "@/components/sections/TechSpecs";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Fallback to remove preloader if something goes wrong
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          
          <main className="flex flex-col min-h-screen">
            <Hero />
            <Problem />
            <Features />
            <HowItWorks />
            <SosSimulator />
            <UseCases />
            <HardwareDiagram />
            <TechSpecs />
            {/* Phase 3 sections will go here */}
          </main>
          
          <Footer />
        </>
      )}
    </>
  );
}
