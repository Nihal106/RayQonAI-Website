import { useState } from 'react'
import { Sparkles, Eye, X } from 'lucide-react'

export default function BrandKitShowcase() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-12 bg-slate-950/70 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl glass-panel border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-display font-bold text-white">
                  Rayqon AI Brand Identity & Logo Kit
                </h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Official Visual Theme
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Symbolizing the convergence of Cloud Platforms (Cloud Contour), Infinite Automation (Infinity Loop), and Neural Intelligence (Constellation Mesh).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 text-slate-200 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Inspect Official Brand Kit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Brand Kit Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-cyan-500/30 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                BRAND SYSTEM &bull; RAYQON AI
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Official Logo & Watermark Kit
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Primary gradient (#38bdf8 to #22c55e), Monochrome White, Icon Mark, and Watermark transparency system.
            </p>

            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-black/60 flex items-center justify-center p-2">
              <img
                src="/rayqon-brandkit.jpg"
                alt="Rayqon AI Logo & Watermark Kit"
                className="w-full h-auto max-h-[550px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
