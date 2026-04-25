export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              <span className="text-xl font-[family-name:var(--font-outfit)] font-bold tracking-tight text-white">
                SafeWrist
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              An open-source IoT initiative designed to provide accessible, reliable safety tech when it matters most.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium mb-4">Project</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-cyan transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-cyan transition-colors">How it Works</a></li>
                <li><a href="#tech-specs" className="hover:text-cyan transition-colors">Tech Specs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="https://github.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com/in/thetarunsahu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Tarun Kumar Sahu. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js, Tailwind, and ESP32.</p>
        </div>
      </div>
    </footer>
  );
}
