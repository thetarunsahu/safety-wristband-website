"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Scene01_DarkBeginning() {
  return (
    <section className="scene" id="scene-dark-beginning">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full animate-breathe pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="section-inner flex flex-col items-center text-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-white font-light"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          Every second matters.
        </motion.p>

        {/* Step 2: Decorative dot */}
        <motion.div
          className="mt-10 w-1.5 h-1.5 rounded-full bg-cyan-glow"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white-subtle">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
