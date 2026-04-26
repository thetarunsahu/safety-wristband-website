"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import Image from "next/image";

const cases = [
  {
    title: "Women's Safety",
    desc: "Late-night commutes or unsafe environments. A discrete button press is faster and safer than pulling out a phone.",
    image: "/images/hero-band.jpg", // Using an available image as a placeholder for the aesthetic
  },
  {
    title: "Elderly Care",
    desc: "Built-in fall detection and vitals monitoring. Instant alerts to family members if an anomaly is detected.",
    image: "/images/real-hardware-app.jpg",
  },
  {
    title: "Outdoor Adventures",
    desc: "Hiking or cycling in remote areas. Independent GSM means you're connected even if your phone dies.",
    image: "/images/variants-dark.jpg",
  }
];

export default function UseCases() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="relative bg-[#080808]">
      <div className="section-container" ref={ref}>
        <div className="mb-16 md:w-1/2">
          <h2 className="tracking-tight mb-4">
            Built for real life.
          </h2>
          <p className="section-description">
            Safety isn&apos;t one-size-fits-all. SafeWrist adapts to different vulnerabilities through flexible hardware and intelligent software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
