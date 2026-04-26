"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Activity, MapPin, Radio, ShieldAlert } from "lucide-react";

const features = [
  {
    title: "Real-time GPS Tracking",
    description: "Pinpoint accuracy within 2.5 meters. Constant location updates sent to your emergency circle.",
    icon: <MapPin className="w-6 h-6 text-cyan feature-icon transition-transform" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Continuous Vitals",
    description: "Max30100 sensor tracks heart rate and SpO2. Abnormal spikes trigger silent alerts.",
    icon: <Activity className="w-6 h-6 text-green-safe feature-icon transition-transform" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Instant SOS",
    description: "Dedicated panic button bypasses all software layers for guaranteed transmission.",
    icon: <ShieldAlert className="w-6 h-6 text-red-alert feature-icon transition-transform" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Independent Connectivity",
    description: "GSM module built-in. Connects directly to cell towers. No paired phone required.",
    icon: <Radio className="w-6 h-6 text-cyan feature-icon transition-transform" />,
    colSpan: "md:col-span-2",
  },
];

export default function Features() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="features" className="relative bg-[#080808]">
      <div className="section-container">
        <div className="mb-16">
          {/* ❌ REMOVED cyan highlight — "Engineered for survival" is now all white */}
          <h2 className="tracking-tight mb-4">
            Engineered for survival.
          </h2>
          <p className="section-description">
            Every component in SafeWrist was selected for reliability. From the dual-core ESP32 to the independent GSM connectivity, it&apos;s built to work when nothing else will.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`feature-card relative overflow-hidden group ${feature.colSpan}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-bl-[100px] transition-colors group-hover:bg-cyan/10" />

              <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                {feature.icon}
              </div>

              <h3 className="text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-[#777] relative z-10 text-[15px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
