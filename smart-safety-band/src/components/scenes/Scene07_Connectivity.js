"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const nodes = [
  { label: "Wristband", icon: "⌚", color: "#00e5ff" },
  { label: "Mobile", icon: "📱", color: "#3d8bff" },
  { label: "Cloud", icon: "☁️", color: "#7c4dff" },
  { label: "Guardian", icon: "🛡️", color: "#00e676" },
];

export default function Scene07_Connectivity() {
  return (
    <section className="scene" id="scene-connectivity">
      <div className="section-inner flex flex-col items-center">
        {/* Step 1: Heading */}
        <motion.p
          className="text-scene text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          Connected when it{" "}
          <span className="text-cyan-glow text-glow-cyan">matters most.</span>
        </motion.p>

        {/* Step 2: 4-col node grid */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease }}
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 glass-strong flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 hover:scale-105"
                style={{ boxShadow: `0 0 15px ${node.color}10` }}
              >
                {node.icon}
              </div>
              <span className="text-[11px] tracking-[0.12em] uppercase text-white-subtle">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
