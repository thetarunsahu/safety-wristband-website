"use client";
import { motion } from "framer-motion";
import CinematicImage from "@/components/ui/CinematicImage";

const ease = [0.16, 1, 0.3, 1];

const components = [
  { name: "ESP32", desc: "Wi-Fi & Bluetooth microcontroller", icon: "🧠" },
  { name: "Heart Rate Sensor", desc: "Real-time BPM monitoring", icon: "❤️" },
  { name: "GPS Module", desc: "Satellite-based location tracking", icon: "📍" },
  { name: "SpO2 Sensor", desc: "Blood oxygen level detection", icon: "🫁" },
  { name: "Buzzer & LED", desc: "SOS alert output system", icon: "🔊" },
  { name: "Li-Po Battery", desc: "Rechargeable power source", icon: "🔋" },
];

export default function Scene09_InsideDevice() {
  return (
    <section className="scene" id="scene-inside-device">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Title */}
        <motion.p
          className="text-subtitle mb-3 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          Under the hood
        </motion.p>

        <motion.h2
          className="text-scene text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          Inside the{" "}
          <span className="text-cyan-glow text-glow-cyan">intelligence.</span>
        </motion.h2>

        {/* Step 2: 2-col grid — images left, cards right */}
        <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Hardware images stacked */}
          <div className="flex flex-col gap-5">
            <CinematicImage
              src="/images/real-workspace-close.jpg"
              alt="Close-up of ESP32, sensors, and IoT components"
              width={600} height={400}
              direction="left" delay={0.3}
            />
            <CinematicImage
              src="/images/exploded-view.png"
              alt="Exploded view of Smart Safety Wristband components"
              width={600} height={400}
              direction="up" delay={0.5}
            />
          </div>

          {/* Right: Component cards */}
          <div className="flex flex-col gap-3">
            {components.map((comp, i) => (
              <motion.div
                key={comp.name}
                className="interactive-card p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease }}
              >
                <span className="text-lg flex-shrink-0">{comp.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white text-sm">{comp.name}</p>
                  <p className="text-[11px] text-white-subtle mt-0.5">{comp.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.p
              className="mt-3 text-xs text-white-subtle italic text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              &ldquo;Built from real components. Not just design.&rdquo;
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
