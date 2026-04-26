"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const specs = {
  core: {
    title: "Core System",
    data: [
      { label: "Microcontroller", value: "ESP32 Dual-Core @ 240MHz" },
      { label: "Memory", value: "520KB SRAM / 4MB Flash" },
      { label: "Logic Level", value: "3.3V" },
      { label: "Encryption", value: "Hardware AES/RSA" }
    ]
  },
  comms: {
    title: "Communications",
    data: [
      { label: "Cellular", value: "SIM800L GSM/GPRS" },
      { label: "Positioning", value: "NEO-6M GPS (2.5m accuracy)" },
      { label: "Local", value: "Wi-Fi 802.11 b/g/n & BLE 4.2" },
      { label: "Antenna", value: "Ceramic active patch" }
    ]
  },
  sensors: {
    title: "Sensors & Power",
    data: [
      { label: "Biometrics", value: "Max30100 (HR & SpO2)" },
      { label: "Motion", value: "MPU6050 6-Axis IMU" },
      { label: "Battery", value: "3.7V 500mAh LiPo" },
      { label: "Management", value: "TP4056 with protection" }
    ]
  }
};

type TabKey = keyof typeof specs;

export default function TechSpecs() {
  const [activeTab, setActiveTab] = useState<TabKey>("core");

  return (
    <section id="tech-specs" className="relative bg-black">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Headers & Tabs */}
          <div className="w-full md:w-1/3">
            <h2 className="tracking-tight mb-8">
              Technical Specifications.
            </h2>
            
            <div className="flex flex-col gap-2">
              {(Object.keys(specs) as TabKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-left px-6 py-4 rounded-xl font-mono text-sm transition-all duration-300 ${
                    activeTab === key 
                      ? "bg-cyan/10 text-cyan border border-cyan/30" 
                      : "bg-white/5 text-gray-500 border border-transparent hover:text-white hover:bg-white/10"
                  }`}
                >
                  {specs[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Data Display */}
          <div className="w-full md:w-2/3 glass rounded-3xl p-8 md:p-12 border border-white/10 min-h-[400px] flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-cyan/5 rounded-full blur-[100px]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full relative z-10"
              >
                <h3 className="text-2xl font-bold mb-8 text-white">{specs[activeTab].title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {specs[activeTab].data.map((item, i) => (
                    <div key={i} className="border-l-2 border-white/10 pl-4">
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg text-gray-200 font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
