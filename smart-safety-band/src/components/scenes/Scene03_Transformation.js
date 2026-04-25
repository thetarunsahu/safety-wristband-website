"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const ease = [0.16, 1, 0.3, 1];

export default function Scene03_Transformation() {
  return (
    <section className="scene" id="scene-transformation">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-white font-light text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          Turned into something{" "}
          <span className="text-cyan-glow text-glow-cyan">powerful.</span>
        </motion.p>

        {/* Step 2: Side-by-side comparison */}
        <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Prototype */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            <div className="cinematic-image aspect-[4/3]">
              <Image src="/images/real-sos-active.jpg" alt="Hardware prototype" width={600} height={450} className="w-full h-full object-cover" style={{ filter: "saturate(0.8) brightness(0.9)" }} />
            </div>
            <p className="text-center mt-3 text-[11px] tracking-[0.15em] uppercase text-white-subtle">The Prototype</p>
          </motion.div>

          {/* Right: Product */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            <div className="cinematic-image aspect-[4/3]">
              <Image src="/images/hero-band.jpg" alt="Smart Safety Wristband - Final Product" width={600} height={450} className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-3 text-[11px] tracking-[0.15em] uppercase text-cyan-glow/60">The Product</p>
          </motion.div>
        </div>

        {/* Step 3: Before/After slider */}
        <div className="mt-16 w-full">
          <BeforeAfterSlider beforeSrc="/images/real-workspace-close.jpg" afterSrc="/images/hero-band.jpg" />
        </div>
      </div>
    </section>
  );
}
