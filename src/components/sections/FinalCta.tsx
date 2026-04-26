export default function FinalCta() {
  return (
    <section className="relative bg-[#080808] overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="section-container relative z-10 text-center max-w-3xl">
        <h2 className="tracking-tighter mb-8">
          Ready to build<br />
          your own?
        </h2>
        
        <p className="section-description mx-auto text-center text-xl mb-12">
          The SafeWrist project is completely open-source. Grab the schematics, flash the firmware, and take control of your safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/thetarunsahu" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-primary"
          >
            View on GitHub
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="w-full sm:w-auto btn-secondary"
          >
            Contact the Maker
          </a>
        </div>
      </div>
    </section>
  );
}
