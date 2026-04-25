"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const images = [
  { src: "/images/real-hardware-app.jpg", alt: "ESP32 hardware with companion app" },
  { src: "/images/real-workspace-full.jpg", alt: "Full electronics workspace" },
  { src: "/images/real-workspace-close.jpg", alt: "Close-up of IoT components" },
];

const techLabels = ["ESP32", "GPS Module", "Heart Rate Sensor", "SpO2", "Breadboard", "9V Batteries"];

export default function Scene02_RawReality() {
  return (
    <section className="scene vignette" id="scene-raw-reality">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={images[0].src} alt="" fill className="object-cover" style={{ filter: "brightness(0.2) saturate(0.7)" }} priority />
      </div>

      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-white font-light text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          Started with wires… sensors… and an idea.
        </motion.p>

        {/* Step 2: Tech labels */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {techLabels.map((label, i) => (
            <motion.span
              key={label}
              className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase text-cyan-glow/60 border border-cyan-glow/15 rounded-full bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease }}
            >
              {label}
            </motion.span>
          ))}
        </div>

        {/* Step 3: Image grid — 3 equal columns */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="cinematic-image aspect-[4/3]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease }}
            >
              <Image src={img.src} alt={img.alt} width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
