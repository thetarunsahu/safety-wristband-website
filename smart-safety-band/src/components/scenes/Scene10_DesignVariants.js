"use client";
import { motion } from "framer-motion";
import CinematicImage from "@/components/ui/CinematicImage";

const ease = [0.16, 1, 0.3, 1];

export default function Scene10_DesignVariants() {
  return (
    <section className="scene" id="scene-design-variants">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          Designed for{" "}
          <span className="text-cyan-glow text-glow-cyan">everyone.</span>
        </motion.p>

        {/* Step 2: 2-col image grid */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <CinematicImage
            src="/images/variants-dark.jpg"
            alt="Smart Safety Wristband color variants"
            width={600} height={400}
            direction="left" delay={0.4}
          />
          <CinematicImage
            src="/images/variants-blue.jpg"
            alt="Smart Safety Wristband futuristic variants"
            width={600} height={400}
            direction="right" delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
