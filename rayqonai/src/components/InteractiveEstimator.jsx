import { useState } from 'react'
import { Sparkles, Check, ArrowRight, Calculator, Users, Clock, Shield } from 'lucide-react'

export default function InteractiveEstimator({ onScopeCalculated }) {
  const [selectedObjective, setSelectedObjective] = useState('Greenfield SaaS / Web Application MVP')
  const [selectedServices, setSelectedServices] = useState([
    'Software Development & Digital Engineering',
    'Cloud Solutions, Architecture & Networking'
  ])
  const [engagementModel, setEngagementModel] = useState('Fixed-scope project delivery')
  const [timeline, setTimeline] = useState('8-12 Weeks (4-6 Sprints)')

  const objectiveOptions = [
    { title: 'Greenfield SaaS / Web Application MVP', time: '6-10 Weeks (3-5 Sprints)', squad: '1 Lead Architect, 2 Full-Stack Engineers, 1 DevOps' },
    { title: 'Enterprise Multi-Cloud Migration & FinOps', time: '8-14 Weeks (4-7 Sprints)', squad: '1 Principal Cloud Architect, 2 Platform Engineers, 1 SecOps' },
    { title: 'DevOps & GitOps Pipeline Automation', time: '4-8 Weeks (2-4 Sprints)', squad: '1 Lead DevOps Architect, 1 Kubernetes Specialist' },
    { title: 'Generative AI & Bounded Agent Integration', time: '6-10 Weeks (3-5 Sprints)', squad: '1 AI/ML Engineer, 1 Backend Integration Specialist' },
    { title: 'DevSecOps Posture & Zero-Trust Audit', time: '3-6 Weeks (2-3 Sprints)', squad: '1 DevSecOps Lead, 1 Security Assessment Engineer' },
    { title: 'Corporate Technical Team Upskilling', time: '2-4 Weeks Bootcamp / Workshops', squad: 'Senior Tech Mentors & Lab Coordinators' },
  ]

  const availableServices = [
    'Software Development & Digital Engineering',
    'Cloud Solutions, Architecture & Networking',
    'DevOps & Platform Engineering',
    'AI Engineering & Business Automation',
    'Cybersecurity & DevSecOps',
    'Data Analytics & Business Intelligence',
    'IT Consulting & Managed Services',
    'Technical Training & Internship Programmes'
  ]

  const engagementOptions = [
    'Fixed-scope project delivery',
    'Dedicated engineering squad',
    'Monthly engineering or support retainer',
    'Managed services with agreed service levels',
    'Time-and-materials engineering',
    'Corporate training workshops'
  ]

  const handleObjectiveSelect = (obj) => {
    setSelectedObjective(obj.title)
    setTimeline(obj.time)
  }

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service))
      }
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const currentObj = objectiveOptions.find(o => o.title === selectedObjective) || objectiveOptions[0]

  const handleExportToContact = () => {
    const summary = `Primary Objective: ${selectedObjective}\nDivisions: ${selectedServices.join(', ')}\nCommercial Model: ${engagementModel}\nEstimated Timeline: ${timeline}\nRecommended Squad: ${currentObj.squad}`
    if (onScopeCalculated) {
      onScopeCalculated(summary, selectedServices[0])
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[#06080e] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SOLUTION CONFIGURATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Scope Your Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Engagement &amp; Squad
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Define your technical goals to calculate recommended engineering squad composition, milestones, and commercial model.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/60">
            {/* Step 1: Primary Objective */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-cyan-400 mb-3 flex items-center gap-2">
                <span>01. Primary Technical Objective</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {objectiveOptions.map((obj, idx) => {
                  const isSelected = selectedObjective === obj.title
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleObjectiveSelect(obj)}
                      className={`p-3.5 rounded-xl text-left text-xs font-mono transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-950/40 font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-cyan-400">OBJ 0{idx + 1}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                      </div>
                      <div className="leading-snug">{obj.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Service Divisions Involved */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-cyan-400 mb-3 flex items-center justify-between">
                <span>02. Engineering Divisions Required</span>
                <span className="text-[11px] text-slate-400">({selectedServices.length} Selected)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableServices.map((service, idx) => {
                  const isChecked = selectedServices.includes(service)
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-start gap-2.5 border cursor-pointer ${
                        isChecked
                          ? 'bg-slate-900 border-cyan-400 text-cyan-200'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{service}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Commercial Structure */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-cyan-400 mb-2.5">
                03. Commercial &amp; Contracting Model
              </label>
              <select
                value={engagementModel}
                onChange={(e) => setEngagementModel(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono focus:border-cyan-400 focus:outline-none"
              >
                {engagementOptions.map((model, i) => (
                  <option key={i} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Blueprint Sheet */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-[#070b14] space-y-6 lg:sticky lg:top-28 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">PROJECT BLUEPRINT SPEC</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-800 font-semibold">
                CONFIGURED
              </span>
            </div>

            {/* Calculated Output Cards */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>ESTIMATED DELIVERY CADENCE</span>
                </div>
                <div className="text-white text-sm font-display font-bold">{timeline}</div>
                <div className="text-[11px] text-slate-400">Bi-weekly milestone sprint demos &amp; automated GitOps deploys.</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Users className="w-3.5 h-3.5" />
                  <span>RECOMMENDED SQUAD COMPOSITION</span>
                </div>
                <div className="text-white text-xs font-medium">{currentObj.squad}</div>
                <div className="text-[11px] text-slate-400">Led by a Senior Solutions Architect with dedicated delivery management.</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-teal-400 font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>DELIVERY &amp; GOVERNANCE</span>
                </div>
                <div className="text-slate-300 text-[11px]">
                  Remote-first engineering squad &bull; UAE client coordination &bull; Mutual NDA &amp; written scope authorization.
                </div>
              </div>
            </div>

            <button
              onClick={handleExportToContact}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-display font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <span>Transfer Blueprint To Proposal Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
