"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import Image from "next/image";

const timeline = [
  {
    phase: "Phase 01",
    title: "The Prototype",
    desc: "Initial breadboard testing with individual modules. Proving the NEO-6M GPS could acquire a cold lock fast enough to be viable for emergency situations.",
    image: "/images/real-workspace-full.jpg",
  },
  {
    phase: "Phase 02",
    title: "Miniaturization",
    desc: "Moving from breadboards to custom perfboards, and eventually designing a compact layout that could comfortably fit on a wrist while housing a 500mAh LiPo battery.",
    image: "/images/real-workspace-close.jpg",
  },
  {
    phase: "Phase 03",
    title: "Firmware Optimization",
    desc: "Writing the ESP32 core logic in C++. Implementing deep sleep modes to preserve battery life while keeping the interrupt pins active for instant SOS.",
    image: "/images/real-workspace-angle.jpg",
  }
];

export default function BuildJourney() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="build-journey" className="relative bg-black">
      <div className="section-container">
        <div className="mb-24 text-center md:text-left">
          <h2 className="tracking-tight mb-4">
            From Breadboard to Wrist.
          </h2>
          <p className="section-description">
            A look inside the hardware development process. Overcoming power constraints, signal interference, and miniaturization challenges.
          </p>
        </div>

        <div className="relative" ref={ref}>
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block">
            <motion.div 
              className="w-full bg-cyan"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-24">
            {timeline.map((item, i) => (
              <div key={item.phase} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-cyan items-center justify-center z-10">
                  <div className="w-2 h-2 bg-cyan rounded-full" />
                </div>

                {/* Content */}
                <motion.div 
                  className="w-full md:w-1/2 text-left"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                >
                  <span className="timeline-date">{item.phase}</span>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-[#777] text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden glass border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.3 + 0.2 }}
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                  />
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
