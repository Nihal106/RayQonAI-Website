import { useState } from 'react'
import { deliveryFramework } from '../data/servicesData'
import { 
  CheckCircle, 
  Search, 
  FileCheck, 
  Code, 
  ClipboardCheck, 
  LifeBuoy, 
  ArrowRight,
  Sparkles,
  Globe2
} from 'lucide-react'

const stepIcons = [Search, FileCheck, Code, ClipboardCheck, LifeBuoy]

export default function DeliveryProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="delivery" className="py-24 relative overflow-hidden bg-[#06080e] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE DELIVER &bull; 5-STEP FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Predictable, Milestoned{' '}
            <span className="gradient-rayqon-text">Engineering Execution</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Rayqon AI follows a remote-first delivery approach. Client engagement and business coordination can be managed in the UAE, while engineering and suitable training activities are delivered remotely.
          </p>
        </div>

        {/* Remote Delivery & UAE Engagement Banner */}
        <div className="mb-14 p-5 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-emerald-950/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white flex items-center gap-2">
                <span>Remote-First Engineering Delivery</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  UAE Client Hub
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                On-site surveys and physical cabling are seamlessly coordinated with local delivery partners.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-300 shrink-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>International Projects Coverage</span>
          </div>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-10">
          {deliveryFramework.map((item, index) => {
            const Icon = stepIcons[index] || CheckCircle
            const isActive = activeStep === index
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'glass-panel border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.25)] bg-slate-900/90'
                    : 'bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    PHASE {item.step}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
                </div>
                <h4 className="text-sm font-display font-bold text-white mb-1">
                  {item.title}
                </h4>
                <div className="text-[11px] font-mono text-slate-400">
                  {item.badge}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-900/40">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 border border-cyan-800 text-cyan-300">
                  PHASE {deliveryFramework[activeStep].step}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {deliveryFramework[activeStep].badge}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                {deliveryFramework[activeStep].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {deliveryFramework[activeStep].desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % deliveryFramework.length)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Next Stage &rarr;</span>
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>Initiate Phase 01</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
