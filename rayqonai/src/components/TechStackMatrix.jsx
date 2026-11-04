import { useState } from 'react'
import { techStackCategories } from '../data/servicesData'
import { Terminal } from 'lucide-react'

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#070a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENTERPRISE TOOLING MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Battle-Tested{' '}
            <span className="gradient-rayqon-text">Technologies & Ecosystems</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We use industry standard, open-source, and cloud-native frameworks to ensure zero vendor lock-in, uncompromising security, and infinite scalability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStackCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)] font-semibold'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="p-8 rounded-2xl glass-panel border border-slate-800/80 bg-slate-900/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400">DOMAIN CATEGORY</span>
              <h3 className="text-2xl font-display font-bold text-white">
                {techStackCategories[activeCategory].name}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
              Verified Production Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStackCategories[activeCategory].items.map((tech, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-2">
            <span>&bull; Full CI/CD automation & IaC integration for all stacks</span>
            <span className="text-emerald-400">&bull; SOC2 & ISO27001 readiness considerations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
