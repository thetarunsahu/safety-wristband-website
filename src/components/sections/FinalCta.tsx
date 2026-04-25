export default function FinalCta() {
  return (
    <section className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="section-container relative z-10 text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Ready to build<br />
          <span className="text-gradient">your own?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          The SafeWrist project is completely open-source. Grab the schematics, flash the firmware, and take control of your safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/thetarunsahu" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            View on GitHub
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
          >
            Contact the Maker
          </a>
        </div>
      </div>
    </section>
  );
}
