"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const steps = [
  {
    num: "01",
    title: "Press & Hold",
    desc: "Long press the tactile SOS button for 3 seconds to prevent accidental triggers.",
  },
  {
    num: "02",
    title: "GPS Lock",
    desc: "The NEO-6M module instantly acquires coordinates from up to 4 satellites.",
  },
  {
    num: "03",
    title: "Cloud Sync",
    desc: "ESP32 pushes encrypted payload to Firebase via integrated WiFi/GSM.",
  },
  {
    num: "04",
    title: "Alert Dispatch",
    desc: "Live tracking link SMS and notification sent to your emergency circle.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="how-it-works" className="relative bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          {/* ✅ KEEP cyan — "Under 2 Seconds" is one of the 3 allowed */}
          <h2 className="tracking-tight mb-4">
            Under <span className="text-cyan">2 Seconds.</span>
          </h2>
          <p className="section-description mx-auto text-center">
            From the moment you press the button, the hardware executes a hardcoded sequence to guarantee message delivery.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-white/10 hidden md:block">
            <motion.div 
              className="h-full bg-cyan"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative pt-8 md:pt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-auto md:top-10 w-4 h-4 rounded-full bg-black border-2 border-cyan z-10">
                  <div className="absolute inset-1 bg-cyan rounded-full animate-ping" />
                </div>

                <div className="md:mt-20 text-center md:text-left">
                  <span className="text-6xl font-mono font-bold text-white/5 block mb-4">{step.num}</span>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#777]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
