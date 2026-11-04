import { useState } from 'react'
import { serviceDivisions } from '../data/servicesData'
import ServiceModal from './ServiceModal'
import { 
  Code2, 
  Cloud, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Compass, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  LayoutGrid,
  Layers,
  Server,
  ShieldAlert,
  ChevronRight
} from 'lucide-react'

const iconMap = {
  Code2,
  Cloud,
  Terminal,
  Cpu,
  ShieldCheck,
  BarChart3,
  Compass,
  GraduationCap
}

export default function ServiceDivisions({ onSelectServiceForContact }) {
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0)
  const [viewMode, setViewMode] = useState('studio') // 'studio' or 'grid'
  const [activeModalService, setActiveModalService] = useState(null)

  const activeService = serviceDivisions[activeDivisionIndex]
  const ActiveIcon = iconMap[activeService.icon] || Code2

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>CORE CAPABILITIES &bull; 8 SERVICE DIVISIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Enterprise Engineering{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Services Studio
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              We design, build, deploy, and support production-ready systems. Explore our 8 dedicated divisions spanning software engineering, multi-cloud, AI, and cybersecurity.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('studio')}
              aria-pressed={viewMode === 'studio'}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'studio'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400 text-cyan-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Studio View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400 text-cyan-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All 8 Grid</span>
            </button>
          </div>
        </div>

        {/* 1. STUDIO VIEW: Interactive, Ergonomic & Deeply Informative */}
        {viewMode === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Quick Navigation List of 8 Divisions */}
            <div className="lg:col-span-5 space-y-2.5">
              {serviceDivisions.map((service, index) => {
                const Icon = iconMap[service.icon] || Code2
                const isActive = activeDivisionIndex === index
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveDivisionIndex(index)}
                    aria-pressed={isActive}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg border transition-colors ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                            DIVISION {service.number}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400">
                            {service.metrics.stat}
                          </span>
                        </div>
                        <h4 className="text-sm font-display font-bold text-white leading-snug">
                          {service.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </button>
                )
              })}
            </div>

            {/* Right Column: Deep Realistic Showcase Panel for Selected Division */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl bg-gradient-to-b from-slate-900/80 to-[#070b14] space-y-6 lg:sticky lg:top-28">
              {/* Header of Active Service */}
              <div className="flex items-start justify-between pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-400 shadow-inner">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-0.5 rounded">
                        DIVISION {activeService.number}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {activeService.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:flex px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-semibold">
                  {activeService.metrics.label}: {activeService.metrics.stat}
                </div>
              </div>

              {/* Tagline / Overview */}
              <p className="text-slate-300 text-base leading-relaxed">
                {activeService.tagline}
              </p>

              {/* Detailed Subsections Grid */}
              <div className="space-y-4">
                {activeService.subsections.map((sub, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{sub.name}</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sub.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Delivery Boundary or Authorisation Notice if present */}
              {activeService.deliveryBoundary && (
                <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/40 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-blue-400 font-mono font-semibold">
                    <Server className="w-3.5 h-3.5" />
                    <span>DELIVERY BOUNDARY PROTOCOL</span>
                  </div>
                  <p className="text-slate-300">
                    <strong className="text-white">Remote Delivery:</strong> {activeService.deliveryBoundary.remote}
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    <strong className="text-slate-300">Physical Tasks:</strong> {activeService.deliveryBoundary.onsite}
                  </p>
                </div>
              )}

              {activeService.authorisationNotice && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-3 text-xs">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono font-semibold text-amber-300 mb-0.5">AUTHORISATION &amp; TESTING COMPLIANCE</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {activeService.authorisationNotice}
                    </p>
                  </div>
                </div>
              )}

              {/* Tools chips */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2.5">
                  Production Tooling &amp; Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Studio Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalService(activeService)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  View Full Architecture Blueprint
                </button>

                <button
                  onClick={() => {
                    if (onSelectServiceForContact) {
                      onSelectServiceForContact(activeService.title)
                    }
                    const contactEl = document.querySelector('#contact')
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <span>Inquire for Division {activeService.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. BENTO GRID VIEW: For Scanning All 8 Simultaneously */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceDivisions.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2
              return (
                <div
                  key={service.id}
                  className="rounded-2xl glass-panel p-6 border border-slate-800 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      {service.metrics.stat}
                    </span>
                    <button
                      onClick={() => {
                        setActiveDivisionIndex(index)
                        setViewMode('studio')
                      }}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Deep-dive service modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectServiceForContact={(serviceName) => {
            if (onSelectServiceForContact) onSelectServiceForContact(serviceName)
            const contactEl = document.querySelector('#contact')
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      )}
    </section>
  )
}
