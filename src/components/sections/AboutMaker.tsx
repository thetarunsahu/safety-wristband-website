"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function AboutMaker() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative bg-[#080808]">
      <div className="section-container" ref={ref}>
        <div className="rounded-3xl border border-[#1A1A1A] overflow-hidden max-w-5xl mx-auto relative bg-[#0D0D0D]">
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] md:h-auto bg-[#111]">
              <Image 
                src="/images/creator-photo.png" 
                alt="Tarun Kumar Sahu" 
                fill 
                className="object-cover object-top opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono uppercase tracking-widest mb-6">
                  The Maker
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Tarun Kumar Sahu</h2>
                <p className="text-[13px] text-[#888] mb-6 font-[family-name:var(--font-outfit)]">Developer & Hardware Engineer</p>
                
                <p className="text-[14px] text-[#777] mb-8 leading-[1.75]">
                  I built SafeWrist because I believe personal safety technology shouldn't rely on expensive smartphones or unreliable bluetooth connections. By bridging the gap between embedded systems and modern web technologies, we can create tools that actually save lives.
                </p>

                <div className="flex gap-4">
                  <a href="https://github.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-cyan border border-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="https://twitter.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-cyan border border-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/thetarunsahu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-cyan border border-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="mailto:contact@example.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-cyan border border-white/10">
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
