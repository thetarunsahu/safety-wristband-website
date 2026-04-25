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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/5 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-glow/10 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-breathe" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20">
            <span className="w-2 h-2 rounded-full bg-cyan animate-[live-pulse_2s_infinite]" />
            <span className="text-xs font-mono text-cyan uppercase tracking-wider">V1.0 Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Safety.<br />
            <span className="text-gradient">Reinvented.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-md">
            One press. GPS location sent to 3 emergency contacts in under 2 seconds. The intelligent IoT wearable built for peace of mind.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              See How It Works
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2">
              <span className="w-3 h-3 bg-red-alert rounded-full animate-pulse-ring" />
              Test SOS
            </button>
          </div>
        </motion.div>

        {/* Right Column: Hero Image with Parallax */}
        <motion.div
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          style={{
            transform: `translate3d(${xOffset * -1}px, ${yOffset * -1}px, 0) rotateX(${yOffset * 0.5}deg) rotateY(${xOffset * -0.5}deg)`,
          }}
        >
          {/* Main Product Image */}
          <div className="relative w-full max-w-md aspect-square z-20">
            {/* Fallback box if image doesn't exist yet, but using the path we will have */}
            <div className="absolute inset-0 rounded-full bg-cyan/5 border border-cyan/20 flex items-center justify-center glow-border">
                <Image 
                  src="/images/band_display.jpg" 
                  alt="Smart Safety Wristband" 
                  fill 
                  className="object-cover rounded-full mix-blend-screen opacity-80 shadow-[0_0_50px_rgba(0,229,255,0.2)]"
                  priority
                />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              className="absolute -right-12 top-20 glass p-4 rounded-xl border border-white/10 shadow-2xl z-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-gray-400 font-mono mb-1">GPS Lock</p>
              <p className="text-green-safe font-mono font-bold">Acquired &lt; 2s</p>
            </motion.div>

            <motion.div 
              className="absolute -left-8 bottom-32 glass p-4 rounded-xl border border-white/10 shadow-2xl z-30 flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-8 h-8 rounded-full bg-red-alert/20 flex items-center justify-center">
                 <span className="w-3 h-3 rounded-full bg-red-alert animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono mb-1">Status</p>
                <p className="text-white font-mono font-bold text-sm">Monitoring</p>
              </div>
            </motion.div>
          </div>

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
