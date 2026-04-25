export default function Problem() {
  return (
    <section className="py-32 relative border-t border-white/5 bg-black">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            When every second counts,<br />
            <span className="text-gray-500">a smartphone is too slow.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/30 transition-colors">
              <div className="text-4xl font-mono text-cyan mb-4 font-bold">12s</div>
              <h3 className="text-lg font-medium text-white mb-2">Average phone unlock</h3>
              <p className="text-sm text-gray-400">In an emergency, finding your phone, unlocking it, and dialing takes too long. Panic destroys fine motor skills.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-alert/30 transition-colors">
              <div className="text-4xl font-mono text-red-alert mb-4 font-bold">0%</div>
              <h3 className="text-lg font-medium text-white mb-2">Cellular reliance</h3>
              <p className="text-sm text-gray-400">Most safety apps fail without a data connection. They rely entirely on the phone's battery and active internet.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-safe/30 transition-colors">
              <div className="text-4xl font-mono text-green-safe mb-4 font-bold">2s</div>
              <h3 className="text-lg font-medium text-white mb-2">The SafeWrist solution</h3>
              <p className="text-sm text-gray-400">One physical button press. Instant hardware-level SOS transmission with precise GPS coordinates. No phone needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
