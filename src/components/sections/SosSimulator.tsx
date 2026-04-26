"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, MapPin, Radio, Smartphone, Activity } from "lucide-react";

type Stage = "idle" | "pressing" | "transmitting" | "alerted";

export default function SosSimulator() {
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stage === "pressing") {
      interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setStage("transmitting");
            return 100;
          }
          return p + 2.5; // 2 seconds: 2000ms / 50ms = 40 ticks, 100/40 = 2.5
        });
      }, 50);
    } else if (stage === "idle") {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [stage]);

  useEffect(() => {
    if (stage === "transmitting") {
      const timer = setTimeout(() => setStage("alerted"), 2500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handlePointerDown = () => {
    if (stage === "idle" || stage === "alerted") setStage("pressing");
  };
  const handlePointerUp = () => {
    if (stage === "pressing") setStage("idle");
  };
  const reset = () => setStage("idle");

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background glow when alerted */}
      <motion.div
        className="absolute inset-0 bg-red-alert/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === "alerted" ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="tracking-tight mb-4">
            Experience the <span className="text-red-alert">Response</span>
          </h2>
          <p className="section-description mx-auto text-center">
            Hold the button for 2 seconds to simulate the emergency sequence.
          </p>
        </div>

        {/* Step 3: SOS Simulator gets a proper container frame */}
        <div className="sos-simulator-wrap max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Hardware Device Panel */}
            <div className="w-full lg:w-1/3 bg-[#0A0A0A] p-8 rounded-2xl border border-[#1A1A1A] relative flex flex-col items-center">
              <h3 className="text-sm font-mono text-[#555] uppercase tracking-widest mb-12">Hardware Layer</h3>

              <div className="relative mb-12">
                <motion.button
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  className="w-32 h-32 rounded-full bg-[#111] border-4 border-[#222] shadow-[inset_0_4px_10px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.3)] relative z-10 flex items-center justify-center group active:scale-95 transition-transform cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-red-alert/50 font-bold tracking-widest uppercase transition-colors group-hover:text-red-alert">SOS</span>

                  {stage === "pressing" && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                      <circle
                        cx="64" cy="64" r="60"
                        fill="none" stroke="#FF3B3B" strokeWidth="4"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * progress) / 100}
                        className="transition-all duration-75"
                      />
                    </svg>
                  )}
                </motion.button>

                {stage === "alerted" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="absolute w-32 h-32 bg-red-alert/20 rounded-full animate-pulse-ring" />
                    <span className="absolute w-32 h-32 bg-red-alert/20 rounded-full animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
                  </div>
                )}
              </div>

              <div className="w-full bg-black/50 p-4 rounded-xl border border-[#1A1A1A] font-mono text-xs">
                <div className="flex justify-between mb-2">
                  <span className="text-[#555]">Status:</span>
                  <span className={stage === "idle" ? "text-cyan" : stage === "pressing" ? "text-yellow-500" : "text-red-alert"}>
                    {stage === "idle" ? "MONITORING" : stage === "pressing" ? "ARMING..." : "SOS ACTIVE"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">GPS:</span>
                  <span className="text-white">LOCKED (4 Sats)</span>
                </div>
              </div>
            </div>

            {/* Connection Animation */}
            <div className="hidden lg:flex flex-col items-center justify-center w-32 relative h-full">
              <div className="w-px h-24 border-l-2 border-dashed border-white/10" />
              <motion.div
                className="absolute text-cyan"
                animate={{
                  y: stage === "transmitting" ? [20, -20] : 0,
                  opacity: stage === "transmitting" ? [0, 1, 0] : 0
                }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <Radio size={24} />
              </motion.div>
            </div>

            {/* Cloud / App Panel */}
            <div className="w-full lg:w-1/2 bg-[#0A0A0A] p-8 rounded-2xl border border-[#1A1A1A] relative overflow-hidden">
              <h3 className="text-sm font-mono text-[#555] uppercase tracking-widest mb-6">Cloud & Contacts</h3>

              <div className="h-[280px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {stage === "idle" || stage === "pressing" ? (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-[#555] h-full">
                      <Activity size={48} className="mb-4 opacity-50" />
                      <p className="text-[#555]">Awaiting Emergency Signal</p>
                    </motion.div>
                  ) : stage === "transmitting" ? (
                    <motion.div key="transmitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-cyan h-full">
                      <div className="w-16 h-16 border-4 border-t-cyan border-white/10 rounded-full animate-spin mb-4" />
                      <p className="font-mono text-sm tracking-widest animate-pulse text-cyan">TRANSMITTING PAYLOAD...</p>
                    </motion.div>
                  ) : (
                    <motion.div key="alerted" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col justify-between">
                      <div className="bg-red-alert/10 border border-red-alert/30 p-4 rounded-xl flex items-start gap-4 mb-4">
                        <AlertTriangle className="text-red-alert shrink-0" />
                        <div>
                          <h4 className="text-red-alert font-bold text-base">CRITICAL ALERT DISPATCHED</h4>
                          <p className="text-sm text-[#777] mt-1">SMS and App notifications sent to 3 emergency contacts.</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { icon: Smartphone, text: "Mom (SMS Sent)" },
                          { icon: Smartphone, text: "Dad (App Notification)" },
                          { icon: MapPin, text: "Live Tracking Link Active" }
                        ].map((item, i) => (
                          <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/5 p-3 rounded-lg border border-[#1A1A1A] flex items-center gap-3">
                            <item.icon size={16} className="text-green-safe" />
                            <span className="text-sm text-[#AAA]">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <button onClick={reset} className="mt-4 text-xs text-[#555] hover:text-white underline text-center w-full transition-colors">
                        Reset Simulator
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
