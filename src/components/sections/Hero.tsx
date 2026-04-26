"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useAnimations";
import Image from "next/image";

export default function Hero() {
  const { x, y } = useMousePosition();

  // Calculate subtle parallax
  const xOffset = typeof window !== "undefined" ? (x / window.innerWidth - 0.5) * 20 : 0;
  const yOffset = typeof window !== "undefined" ? (y / window.innerHeight - 0.5) * 20 : 0;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden !pt-[80px] !pb-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/5 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-glow/10 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-breathe" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-[live-pulse_2s_infinite]" />
            <span className="text-xs font-mono text-cyan uppercase tracking-wider">V1.0 Ready</span>
          </div>

          {/* H1 — DOMINATES the screen via globals.css clamp(56px, 10vw, 96px) */}
          <h1 className="mb-6">
            Safety.<br />
            <span className="text-gradient">Reinvented.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#888] max-w-md mb-8">
            One press. GPS location sent to 3 emergency contacts in under 2 seconds. The intelligent IoT wearable built for peace of mind.
          </p>

          {/* CTA Buttons — clear visual hierarchy */}
          <div className="flex flex-wrap items-center gap-4 mb-0">
            <a href="#how-it-works" className="btn-primary">
              See How It Works
            </a>
            <button className="btn-secondary flex items-center gap-2">
              <span className="w-3 h-3 bg-red-alert rounded-full animate-pulse" />
              Test SOS
            </button>
          </div>

          {/* Stats Row — 12s / 8% / 2s with proper sizing */}
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">12s</div>
              <div className="hero-stat-label">Avg. Phone Unlock</div>
            </div>
            <div>
              <div className="hero-stat-number">8%</div>
              <div className="hero-stat-label">Complete the Call</div>
            </div>
            <div>
              <div className="hero-stat-number">2s</div>
              <div className="hero-stat-label">SafeWrist SOS</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Wristband with Parallax */}
        <motion.div
          className="relative w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          {/* Main Product Visual — large, glowing, floating */}
          <div
            className="hero-wristband-container z-20"
            style={{
              transform: `translate3d(${xOffset * -1}px, ${yOffset * -1}px, 0)`,
            }}
          >
            {/* The breathing cyan aura is applied via ::before in CSS */}
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/hero-band.jpg"
                alt="Smart Safety Wristband"
                fill
                className="object-cover hero-wristband-img opacity-90"
                priority
              />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            className="absolute right-0 lg:-right-4 top-12 glass p-4 rounded-xl border border-white/10 shadow-2xl z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-[#666] font-mono mb-1">GPS Lock</p>
            <p className="text-green-safe font-mono font-bold">Acquired &lt; 2s</p>
          </motion.div>

          <motion.div
            className="absolute left-0 lg:-left-4 bottom-20 glass p-4 rounded-xl border border-white/10 shadow-2xl z-30 flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-8 h-8 rounded-full bg-red-alert/20 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-red-alert animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-[#666] font-mono mb-1">Status</p>
              <p className="text-white font-mono font-bold text-sm">Monitoring</p>
            </div>
          </motion.div>

          {/* Concentric rings behind the product */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-[120%] aspect-square rounded-full border border-cyan/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[90%] aspect-square rounded-full border border-cyan/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[60%] aspect-square rounded-full border border-cyan/30 animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
