export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative">
      {/* Step 12: EKG heartbeat line above the footer */}
      <div className="footer-ekg-container">
        <svg className="ekg-line w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 L200,30 L220,30 L240,5 L260,55 L280,5 L300,30 L320,30 L500,30 L520,30 L540,5 L560,55 L580,5 L600,30 L620,30 L1200,30"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1.5"
            className="ekg-path"
          />
        </svg>
      </div>

      <div className="section-container pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              <span className="text-xl font-[family-name:var(--font-outfit)] font-bold tracking-tight text-white">
                SafeWrist
              </span>
            </a>
            <p className="text-[#555] text-sm leading-relaxed">
              An open-source IoT initiative designed to provide accessible, reliable safety tech when it matters most.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Project</h4>
              <ul className="space-y-2 text-sm text-[#555]">
                <li><a href="#features" className="hover:text-cyan transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-cyan transition-colors">How it Works</a></li>
                <li><a href="#tech-specs" className="hover:text-cyan transition-colors">Tech Specs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-[#555]">
                <li><a href="https://github.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com/in/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A1A] text-xs text-[#444]">
          <p>© {new Date().getFullYear()} Tarun Kumar Sahu. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js, Tailwind, and ESP32.</p>
        </div>
      </div>
    </footer>
  );
}
