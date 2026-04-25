"use client";
import { motion } from "framer-motion";
import CinematicImage from "@/components/ui/CinematicImage";

const ease = [0.16, 1, 0.3, 1];

export default function Scene04_HeroReveal() {
  return (
    <section className="scene" id="scene-hero-reveal">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none animate-breathe"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)", filter: "blur(30px)" }}
      />

      <div className="section-inner flex flex-col items-center text-center">
        {/* Step 1: Product image — centered, fixed size */}
        <div className="w-[240px] md:w-[340px] lg:w-[400px]">
          <CinematicImage
            src="/images/hero-band.jpg"
            alt="Smart Safety Wristband"
            width={500} height={600}
            direction="up" delay={0.2} priority
          />
        </div>

        {/* Step 2: Title */}
        <motion.h1
          className="text-hero mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
        >
          Smart Safety Wristband
        </motion.h1>

        {/* Step 3: Subtitle */}
        <motion.p
          className="text-subtitle mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Safety. Reinvented.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.3 }}
        />
      </div>
    </section>
  );
}
