"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    q: "Does it require a smartphone to work?",
    a: "No. SafeWrist has a built-in SIM800L GSM module. It connects directly to cellular networks to send SOS SMS and coordinates, completely independent of a smartphone."
  },
  {
    q: "What is the battery life?",
    a: "With the 500mAh LiPo battery and aggressive deep-sleep optimizations on the ESP32, it lasts approximately 48 hours on a single charge under normal standby conditions."
  },
  {
    q: "How accurate is the GPS?",
    a: "The NEO-6M module provides accuracy within 2.5 meters in open sky conditions. It requires a few seconds for a 'cold start' lock, but we maintain 'hot start' readiness for instant SOS."
  },
  {
    q: "Can I build this myself?",
    a: "Yes! This is an open-source hardware project. All schematics, code, and 3D printable STL files for the casing will be available on the GitHub repository."
  },
  {
    q: "How does the fall detection work?",
    a: "The MPU6050 IMU constantly monitors acceleration. If it detects a sudden spike (impact) followed by lack of movement, it triggers a pre-alert vibration. If not cancelled, the SOS is sent."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(search.toLowerCase()) || 
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-32 relative bg-black border-t border-white/5">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-cyan">Questions.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Everything you need to know about the hardware, software, and deployment.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search questions..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-cyan/50 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyan shrink-0"
                >
                  <ChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 py-8">No questions found matching your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
