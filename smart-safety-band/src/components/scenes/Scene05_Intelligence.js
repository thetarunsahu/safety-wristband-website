"use client";
import { motion } from "framer-motion";
import CinematicImage from "@/components/ui/CinematicImage";

const ease = [0.16, 1, 0.3, 1];

const features = [
  {
    icon: "❤️",
    title: "Heart Rate",
    value: "72 BPM",
    desc: "Continuous pulse monitoring",
    color: "#ff1744",
  },
  {
    icon: "📍",
    title: "GPS Tracking",
    value: "Live",
    desc: "Real-time location sharing",
    color: "#00e676",
  },
  {
    icon: "🚨",
    title: "SOS Alert",
    value: "Ready",
    desc: "One-tap emergency trigger",
    color: "#ff1744",
  },
  {
    icon: "🫁",
    title: "SpO2",
    value: "98%",
    desc: "Blood oxygen detection",
    color: "#7c4dff",
  },
];

export default function Scene05_Intelligence() {
  return (
    <section className="scene" id="scene-intelligence">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-center font-light"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          Real-time{" "}
          <span className="text-cyan-glow text-glow-cyan">awareness.</span>
        </motion.p>

        {/* Step 2: Product + cards in 2-col layout */}
        <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          {/* Left: Product */}
          <div className="flex justify-center">
            <div className="w-[200px] md:w-[260px]">
              <CinematicImage
                src="/images/hero-band.jpg"
                alt="Smart Safety Wristband"
                width={280} height={340}
                direction="left" delay={0.3}
              />
            </div>
          </div>

          {/* Right: Feature cards — 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="interactive-card p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-[10px] tracking-[0.1em] uppercase text-white-subtle">{f.title}</span>
                </div>
                <p className="text-xl font-semibold text-white" style={{ color: f.color }}>
                  {f.value}
                </p>
                <p className="text-[11px] text-white-subtle mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
