import { useState } from 'react'
import { 
  Building2, 
  TrendingUp, 
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function CaseStudies({ onSelectCaseForContact }) {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      id: 'fintech-cloud',
      category: 'Cloud & Infrastructure',
      title: 'Enterprise Multi-Cloud Architecture & DevSecOps for FinTech',
      client: 'Middle East FinTech & Digital Payments Provider',
      challenge: 'Migrating legacy transactional systems into a high-availability, multi-region cloud topology while complying with regional financial data residency and stringent security audit regulations.',
      solution: 'Designed and deployed AWS `me-central-1` (UAE) landing zones with Terraform IaC, configured secure private VPC peering, automated Kubernetes (EKS) clusters, and embedded Trivy & Vault security gates into CI/CD.',
      impacts: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Cloud Cost FinOps Saving', value: '38%' },
        { label: 'Release Cadence', value: 'Daily Automated' },
      ],
      tools: ['AWS', 'Terraform', 'Kubernetes', 'HashiCorp Vault', 'Trivy', 'PostgreSQL'],
      badge: 'Multi-Cloud FinOps'
    },
    {
      id: 'logistics-ai',
      category: 'AI & Business Automation',
      title: 'Autonomous Document Intelligence & RAG Pipeline for Global Logistics',
      client: 'Cross-Border Supply Chain & Freight Enterprise',
      challenge: 'Over 14,000 monthly multi-lingual bills of lading, customs declarations, and freight invoices were being manually reconciled, leading to costly shipment delays and human errors.',
      solution: 'Developed an end-to-end Generative AI pipeline utilizing custom document OCR, semantic vector embeddings, and bounded AI workflows that automatically sync approved records into the ERP system.',
      impacts: [
        { label: 'Processing Speed', value: '8x Faster' },
        { label: 'Monthly Hours Saved', value: '140+ hrs' },
        { label: 'Extraction Accuracy', value: '99.4%' },
      ],
      tools: ['Python AI SDK', 'LangChain', 'Vector DB', 'FastAPI', 'ERP Webhooks', 'Docker'],
      badge: 'Generative AI'
    },
    {
      id: 'saas-mvp',
      category: 'Software Engineering',
      title: 'High-Velocity SaaS Product MVP Build & Scale Architecture',
      client: 'B2B Analytics Startup',
      challenge: 'The founding team needed to transition from prototype sketches to an enterprise-grade multi-tenant web application ready for institutional pilot customers within 8 weeks.',
      solution: 'Delivered an end-to-end modern stack using Next.js, Node.js, and PostgreSQL with robust role-based access control (RBAC), multi-tenant isolation, real-time analytics, and automated CI/CD pipelines.',
      impacts: [
        { label: 'Time to Market', value: '7 Weeks' },
        { label: 'Pilot Onboarding', value: '100% Zero-Downtime' },
        { label: 'Lighthouse Score', value: '98/100' },
      ],
      tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      badge: 'Rapid Product MVP'
    },
    {
      id: 'devsecops-shield',
      category: 'Cybersecurity & DevSecOps',
      title: 'Zero-Trust Pipeline Hardening & Vulnerability Remediation',
      client: 'Growing E-Commerce & Healthcare SaaS Platform',
      challenge: 'Rapid feature releases created technical debt with unchecked container vulnerabilities and manual configuration drift across cloud environments.',
      solution: 'Implemented automated DevSecOps pipelines with SAST scanning, Checkov IaC compliance, SonarQube code quality gates, and Wazuh endpoint detection across all delivery branches.',
      impacts: [
        { label: 'Critical Vulnerabilities', value: '0 in Production' },
        { label: 'Automated CI/CD Gate', value: '100% Coverage' },
        { label: 'Audit Readiness', value: 'SOC2 Ready' },
      ],
      tools: ['Trivy', 'SonarQube', 'Checkov', 'GitHub Actions', 'Wazuh', 'Docker'],
      badge: 'Zero-Trust DevSecOps'
    }
  ]

  const current = cases[activeCase]

  return (
    <section id="blueprints" className="py-24 relative overflow-hidden bg-[#06080e] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL-WORLD ARCHITECTURE BLUEPRINTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Proven Outcomes Across{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              High-Stakes Environments
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real architectural solutions engineered for startups, scale-ups, and established enterprises. Transparent challenges, pragmatic engineering, and measurable ROI.
          </p>
        </div>

        {/* Case Studies Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {cases.map((c, i) => {
            const isActive = activeCase === i
            return (
              <button
                key={c.id}
                onClick={() => setActiveCase(i)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'glass-panel border-cyan-400/60 shadow-lg shadow-cyan-950/40 bg-slate-900/90'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    BLUEPRINT 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {c.badge}
                  </span>
                </div>
                <h4 className="text-xs font-display font-bold text-white line-clamp-2">
                  {c.title}
                </h4>
              </button>
            )
          })}
        </div>

        {/* Active Blueprint Feature Showcase Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-[#070b14]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Building2 className="w-4 h-4" />
                  <span>{current.client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {current.title}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
                    The Business &amp; Engineering Challenge:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                    Rayqon AI Implementation:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* Tools chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
                {current.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Quantifiable Business Impact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Validated Deliverable Metrics</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3">
                  {current.impacts.map((imp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-300">{imp.label}</span>
                      <span className="text-lg font-display font-extrabold text-emerald-400">{imp.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (onSelectCaseForContact) {
                      onSelectCaseForContact(current.title)
                    }
                    const contactEl = document.querySelector('#contact')
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <span>Discuss a Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
