"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const tags = ["Hardware Engineer", "IoT Developer", "App Developer"];

export default function Scene12_Creator() {
  return (
    <section className="scene" id="scene-creator">
      <div className="section-inner flex flex-col items-center text-center">
        {/* Step 1: Photo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto"
            style={{ boxShadow: "0 0 20px rgba(0,229,255,0.1), 0 12px 30px rgba(0,0,0,0.4)" }}
          >
            <Image src="/images/creator-real.jpg" alt="Tarun Kumar Sahu" width={200} height={200} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Step 2: Name */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          Built by{" "}
          <span className="text-cyan-glow text-glow-cyan">Tarun Kumar Sahu</span>
        </motion.h2>

        {/* Step 3: Subtext */}
        <motion.p
          className="mt-4 text-white-subtle text-base md:text-lg font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          From hardware to mobile app — built from scratch.
        </motion.p>

        {/* Step 4: Tags */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, ease }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase text-white-subtle border border-white/10 rounded-full bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
