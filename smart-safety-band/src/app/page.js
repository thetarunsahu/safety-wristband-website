"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";

// Dynamic imports for code splitting
const ParticleField = dynamic(
  () => import("@/components/effects/ParticleField"),
  { ssr: false }
);
const Scene01 = dynamic(
  () => import("@/components/scenes/Scene01_DarkBeginning"),
  { ssr: false }
);
const Scene02 = dynamic(
  () => import("@/components/scenes/Scene02_RawReality"),
  { ssr: false }
);
const Scene03 = dynamic(
  () => import("@/components/scenes/Scene03_Transformation"),
  { ssr: false }
);
const Scene04 = dynamic(
  () => import("@/components/scenes/Scene04_HeroReveal"),
  { ssr: false }
);
const Scene05 = dynamic(
  () => import("@/components/scenes/Scene05_Intelligence"),
  { ssr: false }
);
const Scene06 = dynamic(
  () => import("@/components/scenes/Scene06_SOSMoment"),
  { ssr: false }
);
const Scene07 = dynamic(
  () => import("@/components/scenes/Scene07_Connectivity"),
  { ssr: false }
);
const Scene08 = dynamic(
  () => import("@/components/scenes/Scene08_AppExperience"),
  { ssr: false }
);
const Scene09 = dynamic(
  () => import("@/components/scenes/Scene09_InsideDevice"),
  { ssr: false }
);
const Scene10 = dynamic(
  () => import("@/components/scenes/Scene10_DesignVariants"),
  { ssr: false }
);
const Scene11 = dynamic(
  () => import("@/components/scenes/Scene11_HumanTouch"),
  { ssr: false }
);
const Scene12 = dynamic(
  () => import("@/components/scenes/Scene12_Creator"),
  { ssr: false }
);
const Scene13 = dynamic(
  () => import("@/components/scenes/Scene13_DemoVideo"),
  { ssr: false }
);
const Scene14 = dynamic(
  () => import("@/components/scenes/Scene14_CallToAction"),
  { ssr: false }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* App content only renders and scrolls after loading */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 1s ease-in-out" }}>
        <SmoothScroll>
          {/* Global effects */}
          <CustomCursor />
          <ParticleField count={60} color="rgba(0, 229, 255, 0.4)" speed={0.2} />

          {/* Cinematic scenes */}
          <main className="relative">
            <Scene01 />
            <Scene02 />
            <Scene03 />
            <Scene04 />
            <Scene05 />
            <Scene06 />
            <Scene07 />
            <Scene08 />
            <Scene09 />
            <Scene10 />
            <Scene11 />
            <Scene12 />
            <Scene13 />
            <Scene14 />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
}
