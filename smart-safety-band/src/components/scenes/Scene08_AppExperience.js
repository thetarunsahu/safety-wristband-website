"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const appScreens = [
  {
    src: "/images/app-real-sos.jpg",
    alt: "SOS Emergency Active screen",
    label: "SOS Activation",
    desc: "Instant alerts to guardians with live location tracking.",
  },
  {
    src: "/images/app-real-home.jpg",
    alt: "Health and Safety Dashboard",
    label: "Health Dashboard",
    desc: "Real-time SpO2, heart rate, and safety score.",
  },
  {
    src: "/images/app-real-device.jpg",
    alt: "Device Connectivity screen",
    label: "Device Control",
    desc: "Bluetooth LE syncing and battery management.",
  },
];

export default function Scene08_AppExperience() {
  return (
    <section className="scene" id="scene-app-experience">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Title */}
        <motion.p
          className="text-subtitle mb-3 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          Companion App
        </motion.p>

        <motion.h2
          className="text-scene text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          Your safety,{" "}
          <span className="text-cyan-glow text-glow-cyan">in your pocket.</span>
        </motion.h2>

        {/* Step 2: App screens — 3-col equal grid, centered */}
        <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
          {appScreens.map((screen, i) => (
            <motion.div
              key={screen.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease }}
            >
              {/* Phone frame */}
              <div
                className="relative overflow-hidden bg-black w-full"
                style={{
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 16px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                  transform: `perspective(800px) rotateY(${i === 0 ? -4 : i === 2 ? 4 : 0}deg)`,
                }}
              >
                <div className="relative w-full aspect-[9/19]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
              </div>

              {/* Label */}
              <div className="mt-5 text-center">
                <p className="text-sm font-medium text-white">{screen.label}</p>
                <p className="text-[11px] text-white-subtle mt-1 leading-relaxed">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
