import { engagementModels } from '../data/servicesData'
import { 
  ArrowRight, 
  Layers, 
  Clock, 
  Calendar, 
  Headphones, 
  Users, 
  GraduationCap, 
  UserCheck, 
  Compass,
  Sparkles
} from 'lucide-react'

const icons = [Layers, Clock, Calendar, Headphones, Users, GraduationCap, UserCheck, Compass]

export default function EngagementModels({ onSelectModelForContact }) {
  return (
    <section id="engagement" className="py-24 relative overflow-hidden bg-[#070a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLEXIBLE CONTRACTING & ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Tailored Commercial{' '}
            <span className="gradient-rayqon-text">Engagement Models</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you need a full turnkey product build, dedicated platform engineers, an enterprise upskilling bootcamp, or a governed SLA retainer, we adapt to your operating structure.
          </p>
        </div>

        {/* Grid of Engagement Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((model, idx) => {
            const Icon = icons[idx] || Layers
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {model.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {model.desc}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (onSelectModelForContact) {
                      onSelectModelForContact(model.title)
                    }
                    const contactEl = document.querySelector('#contact')
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-emerald-500/20 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-white text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Select Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
