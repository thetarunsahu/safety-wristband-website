"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Thermometer, Battery } from "lucide-react";

export default function LiveDashboard() {
  const [data, setData] = useState({
    bpm: 72,
    spo2: 98,
    temp: 36.5,
    battery: 85
  });

  // Simulate incoming IoT data
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        bpm: prev.bpm + (Math.random() * 4 - 2), // fluctuate by +/- 2
        spo2: Math.min(100, Math.max(90, prev.spo2 + (Math.random() * 2 - 1))),
        temp: prev.temp + (Math.random() * 0.2 - 0.1),
        battery: prev.battery > 10 ? prev.battery - 0.01 : 100
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/5 blur-[120px] rounded-[100%]" />

      <div className="section-container relative z-10">
        <div className="mb-16 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Command <span className="text-cyan">Center.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A dedicated web dashboard allows emergency contacts to monitor real-time vitals and precise location during an active SOS event.
          </p>
        </div>

        {/* Dashboard UI Mockup */}
        <div className="glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-alert animate-pulse" />
              <span className="font-mono text-sm tracking-widest text-red-alert font-bold">SOS EVENT ACTIVE</span>
            </div>
            <div className="text-xs font-mono text-gray-500">ID: SFB-0992</div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Map Area */}
            <div className="lg:col-span-2 relative h-[300px] md:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              {/* Map Placeholder Graphic */}
              <div className="absolute inset-0 bg-[url('/images/app-tracking.png')] bg-cover bg-center opacity-60 mix-blend-luminosity" />
              
              <div className="absolute inset-0 bg-black/40" />

              {/* Radar Sweep */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -mt-[200px] -ml-[200px] rounded-full border border-cyan/20 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Target Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-cyan rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-cyan rounded-full border-2 border-black relative z-10" />
              </div>

              {/* Coordinates */}
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg border border-white/10">
                <p className="text-xs text-cyan font-mono mb-1">LIVE COORDINATES</p>
                <p className="text-sm text-white font-mono">18°31'12.4"N 73°51'22.1"E</p>
              </div>
            </div>

            {/* Vitals Sidebar */}
            <div className="flex flex-col gap-4">
              {/* Heart Rate */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-red-alert/10 text-red-alert rounded-lg">
                    <Heart size={20} className="animate-pulse" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">bpm</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold font-mono tracking-tighter">
                    {Math.round(data.bpm)}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">NORMAL</span>
                </div>
                {/* EKG Graph purely decorative */}
                <svg className="absolute bottom-0 left-0 right-0 w-full h-12 opacity-20 text-red-alert" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <polyline fill="none" stroke="currentColor" strokeWidth="1" points="0,10 20,10 25,5 30,18 35,2 40,10 60,10 65,5 70,18 75,2 80,10 100,10" />
                </svg>
              </div>

              {/* SpO2 */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-cyan/10 text-cyan rounded-lg">
                    <Activity size={20} />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">%</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold font-mono tracking-tighter">
                    {Math.round(data.spo2)}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">OPTIMAL</span>
                </div>
              </div>

              {/* Two column stats */}
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <Thermometer size={16} className="text-gray-400 mb-2" />
                  <div>
                    <span className="text-xl font-bold font-mono block">{data.temp.toFixed(1)}°</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Body Temp</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <Battery size={16} className="text-green-safe mb-2" />
                  <div>
                    <span className="text-xl font-bold font-mono block text-green-safe">{Math.round(data.battery)}%</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Band Power</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
