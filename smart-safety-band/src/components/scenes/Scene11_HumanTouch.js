"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: "24/7", label: "Monitoring" },
  { value: "<3s", label: "SOS Response" },
  { value: "Real-time", label: "GPS Tracking" },
];

export default function Scene11_HumanTouch() {
  return (
    <section className="scene vignette" id="scene-human-touch">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/real-hardware-app.jpg" alt="" fill className="object-cover" style={{ filter: "brightness(0.2) saturate(1.1)" }} />
      </div>

      <div className="section-inner flex flex-col items-center text-center">
        {/* Step 1: Text */}
        <motion.p
          className="text-scene text-white font-light"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          When technology meets{" "}
          <span className="text-cyan-glow text-glow-cyan">reality.</span>
        </motion.p>

        {/* Step 2: Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="interactive-card px-4 py-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, ease }}
            >
              <div className="text-lg font-bold text-cyan-glow">{stat.value}</div>
              <div className="text-[10px] text-white-subtle mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
