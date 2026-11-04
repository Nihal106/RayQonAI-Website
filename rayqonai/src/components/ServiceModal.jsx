import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Server, 
  Layers, 
  Terminal, 
  Cpu, 
  Code2, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Compass, 
  GraduationCap 
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

export default function ServiceModal({ service, onClose, onSelectServiceForContact }) {
  if (!service) return null

  const IconComponent = iconMap[service.icon] || Layers

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-10">
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-400">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                DIVISION {service.number}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {service.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-slate-300 text-base leading-relaxed mb-6 pb-5 border-b border-slate-800">
          {service.tagline}
        </p>

        {/* Subsections & Detailed Items */}
        <div className="space-y-6 mb-6">
          {service.subsections.map((sub, idx) => (
            <div key={idx} className="bg-slate-950/60 rounded-xl p-5 border border-slate-800/80">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-cyan-300 mb-3 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {sub.name}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {sub.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Delivery Boundary (If applicable for Cloud) */}
        {service.deliveryBoundary && (
          <div className="mb-6 p-4 rounded-xl bg-blue-950/30 border border-blue-800/50 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
              <Server className="w-4 h-4" />
              <span>DELIVERY BOUNDARY & HYBRID ARCHITECTURE</span>
            </div>
            <p className="text-xs text-slate-300">
              <strong className="text-white">Remote Delivery:</strong> {service.deliveryBoundary.remote}
            </p>
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">On-site Coordination:</strong> {service.deliveryBoundary.onsite}
            </p>
          </div>
        )}

        {/* Security Authorisation Notice (If applicable for Cybersecurity) */}
        {service.authorisationNotice && (
          <div className="mb-6 p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono font-semibold text-amber-300 mb-1">
                COMPLIANCE & TESTING AUTHORISATION
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {service.authorisationNotice}
              </p>
            </div>
          </div>
        )}

        {/* Technologies / Tools Used */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase text-slate-400 mb-3">
            Enterprise Tooling & Frameworks
          </div>
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>UAE Client Engagement &bull; International Projects</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose()
                if (onSelectServiceForContact) {
                  onSelectServiceForContact(service.title)
                }
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-xs font-display shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <span>Consult On This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
