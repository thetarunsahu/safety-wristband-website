"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const indicators = [
  { icon: "🔴", text: "Red LED Alert Triggered" },
  { icon: "🔊", text: "Buzzer Alarm Activated" },
  { icon: "📱", text: "Guardian Notified via App" },
  { icon: "📍", text: "GPS Location Shared" },
];

export default function Scene06_SOSMoment() {
  const [triggered, setTriggered] = useState(false);

  return (
    <section className="scene" id="scene-sos-moment">
      {/* Red flash */}
      {triggered && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0, 0.3, 0] }}
          transition={{ duration: 1 }}
          style={{ background: "rgba(255, 23, 68, 0.5)" }}
          onAnimationComplete={() => setTriggered(false)}
        />
      )}

      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/real-sos-active.jpg" alt="" fill className="object-cover" style={{ filter: "brightness(0.15) contrast(1.2)" }} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Content: 2-col grid */}
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          onClick={() => setTriggered(true)}
          whileTap={{ scale: 0.98 }}
        >
          <div className="cinematic-image aspect-[4/3]">
            <Image src="/images/real-sos-active.jpg" alt="SOS activated" width={600} height={450} className="w-full h-full object-cover" style={{ filter: "brightness(0.8) contrast(1.1) saturate(1.2)" }} />
          </div>
          <p className="text-center mt-3 text-[10px] tracking-[0.15em] uppercase text-white-subtle opacity-60">
            Tap image to trigger SOS
          </p>
        </motion.div>

        {/* Right: Text + indicators */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.p
            className="text-scene text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            One tap can{" "}
            <span className="text-red-sos text-glow-red">save a life.</span>
          </motion.p>

          <motion.p
            className="mt-5 text-white-muted text-sm font-light leading-relaxed max-w-md text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Press and hold the SOS button for 3 seconds. The wristband triggers
            an emergency alert — flashing red LED, buzzer activation, and
            instant notification to your guardian&apos;s phone.
          </motion.p>

          <div className="mt-6 flex flex-col gap-2.5 items-center lg:items-start">
            {indicators.map((item, i) => (
              <motion.div
                key={item.text}
                className="interactive-card flex items-center gap-3 px-4 py-2"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1, ease }}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs text-white-muted tracking-wider">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
