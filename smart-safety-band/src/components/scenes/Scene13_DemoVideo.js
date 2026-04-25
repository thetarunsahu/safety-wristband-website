"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function Scene13_DemoVideo() {
  const sectionRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasPlayed) setHasPlayed(true); },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section ref={sectionRef} className="scene" id="scene-demo-video">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Title */}
        <motion.p
          className="text-subtitle mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          See it in action
        </motion.p>

        <motion.h2
          className="text-scene text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          The <span className="text-cyan-glow text-glow-cyan">demo.</span>
        </motion.h2>

        {/* Step 2: Video — phone frame */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <div
            className="relative p-2.5"
            style={{
              borderRadius: "var(--radius-xl)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "177.78%", borderRadius: "calc(var(--radius-xl) - 10px)" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/fGpsOybUv2M?rel=0&modestbranding=1&color=white&playsinline=1${hasPlayed ? "&autoplay=1&mute=1" : ""}`}
                title="Smart Safety Wristband Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Step 3: Caption */}
        <motion.p
          className="mt-6 text-[10px] text-white-subtle tracking-[0.12em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Real working prototype • Live demonstration
        </motion.p>
      </div>
    </section>
  );
}
