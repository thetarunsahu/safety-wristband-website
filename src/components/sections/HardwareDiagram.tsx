"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const annotations = [
  { id: "esp32", x: 45, y: 30, label: "ESP32 Core", desc: "Dual-core processor handling encryption and routing.", colorClass: "label-processor" },
  { id: "gps", x: 65, y: 40, label: "NEO-6M GPS", desc: "Dedicated satellite tracking module.", colorClass: "label-processor" },
  { id: "gsm", x: 30, y: 60, label: "SIM800L GSM", desc: "Cellular connection independent of phone.", colorClass: "label-gsm" },
  { id: "vitals", x: 50, y: 75, label: "Max30100", desc: "Continuous Heart Rate & SpO2 sensor.", colorClass: "label-sensor" },
  { id: "button", x: 75, y: 50, label: "Tactile SOS", desc: "Hardware interrupt trigger.", colorClass: "label-battery" },
];

export default function HardwareDiagram() {
  const { ref, inView } = useInView(0.3);

  return (
    <section id="hardware" className="relative bg-[#080808]">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          {/* ✅ KEEP cyan — "Anatomy of Safety" is one of the 3 allowed */}
          <h2 className="tracking-tight mb-4">
            Anatomy of <span className="text-cyan">Safety.</span>
          </h2>
          <p className="section-description mx-auto text-center">
            Inside the compact casing is a complete standalone IoT system.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden glass border border-white/10 p-4">
          <div className="absolute inset-0 bg-[url('/images/exploded-view.png')] bg-cover bg-center opacity-40 mix-blend-screen" />

          {/* Overlay Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Annotations with color-coded labels */}
          {annotations.map((item, i) => (
            <motion.div
              key={item.id}
              className="absolute"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <div className="relative group cursor-crosshair">
                <div className="w-4 h-4 rounded-full bg-cyan flex items-center justify-center animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>

                {/* Connecting Line — thicker */}
                <div className="absolute top-2 left-2 w-16 h-[1.5px] bg-cyan/40 -rotate-45 origin-left opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Color-coded tooltip */}
                <div className={`absolute top-0 left-8 component-label ${item.colorClass} p-3 rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 backdrop-blur-md`}>
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-[#888] text-xs">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Scanning Line Effect */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-cyan/50 shadow-[0_0_20px_#00E5FF] z-10 pointer-events-none"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
