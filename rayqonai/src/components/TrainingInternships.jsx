import { useState } from 'react'
import { 
  GraduationCap, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  ShieldCheck,
  Laptop
} from 'lucide-react'

export default function TrainingInternships({ onApplyForProgram }) {
  const [activeTab, setActiveTab] = useState('training')

  const trainingTracks = [
    {
      title: 'Cloud Computing Engineering',
      tech: 'AWS, Azure, Google Cloud Fundamentals & Admin',
      desc: 'Architecture design, VPC networking, compute/storage, multi-cloud administration, disaster recovery, and cost optimization.'
    },
    {
      title: 'DevOps & Infrastructure as Code',
      tech: 'Linux, Git, CI/CD, Docker, Kubernetes, Terraform',
      desc: 'Automating deployment pipelines, container orchestration, GitOps workflows with ArgoCD, and infrastructure templating.'
    },
    {
      title: 'Cybersecurity & DevSecOps',
      tech: 'Vulnerability Scanning, IAM, Secret Management, Wazuh, Trivy',
      desc: 'Integrating security gates directly into CI/CD pipelines, container security, zero-trust access controls, and compliance monitoring.'
    },
    {
      title: 'Data Analytics & Power BI',
      tech: 'SQL, Python, Excel Advanced, Power BI, Fabric',
      desc: 'Data warehousing, ETL/ELT data pipelines, interactive dashboard reporting, and business intelligence KPIs.'
    },
    {
      title: 'AI Engineering & Automation',
      tech: 'LLMs, OpenAI APIs, RAG, Prompt Engineering, Agentic Workflows',
      desc: 'Building intelligent chatbots, vector database retrieval systems, automated business workflows, and human-in-the-loop agents.'
    }
  ]

  const internshipHighlights = [
    'Structured learning paths for Software, Cloud, DevOps, AI, Cyber & Data',
    'Practical assignments and supervised project work based on real enterprise scenarios',
    '1-on-1 and group mentor guidance with weekly progress reviews and technical feedback',
    'Portfolio-building activities and live project capstone demonstrations',
    'Official internship completion documentation based on actual participation and milestones',
    'Remote project-based delivery format accommodating global students and early career pros'
  ]

  const formats = [
    'Instructor-led online sessions and workshops',
    'Remote project-based internship cohorts',
    'Corporate technical upskilling tailored to internal stacks',
    'High-intensity short-term bootcamps'
  ]

  return (
    <section id="training" className="py-24 relative overflow-hidden bg-[#06080e] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TALENT DEVELOPMENT & ACADEMY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Technical Training &{' '}
            <span className="gradient-rayqon-text">Internship Programmes</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Practical, project-oriented technology learning and structured internship opportunities to help learners and corporate teams build job-relevant technical skills.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex gap-1">
            <button
              onClick={() => setActiveTab('training')}
              className={`px-6 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'training'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical Training Tracks
            </button>
            <button
              onClick={() => setActiveTab('internship')}
              className={`px-6 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'internship'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Internship Programmes
            </button>
          </div>
        </div>

        {/* Training Tab Content */}
        {activeTab === 'training' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel p-6 border border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/60">
                      TRACK 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mt-3 mb-1">
                      {track.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mb-3">
                      {track.tech}
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {track.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>Hands-on Labs Included</span>
                    <span className="text-cyan-400">&bull; Live Mentoring</span>
                  </div>
                </div>
              ))}

              {/* Corporate Upskilling Card */}
              <div className="rounded-2xl glass-panel p-6 border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Corporate Team Upskilling
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Tailored multi-week bootcamps or weekend intensive workshops built around your engineering stack (e.g. migrating your dev team to Kubernetes, GitOps, or AI agent integration).
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onApplyForProgram) onApplyForProgram('Corporate Upskilling')
                  }}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Corporate Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Internship Tab Content */}
        {activeTab === 'internship' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                  REAL-WORLD ENGINEERING EXPERIENCE
                </span>
                <h3 className="text-3xl font-display font-bold text-white">
                  Bridging Theory and Production Engineering
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our structured internship programmes equip students, graduates, and transitioning professionals with real repository workflows, code reviews, and enterprise deployment methodologies.
                </p>
              </div>

              <div className="space-y-3">
                {internshipHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{hl}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  if (onApplyForProgram) onApplyForProgram('Internship Programme')
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold font-display text-sm hover:scale-[1.02] transition-transform flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Apply for Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
                <h4 className="text-sm font-mono uppercase text-cyan-400 font-semibold flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  <span>Cohort Delivery Formats</span>
                </h4>
                <ul className="space-y-2.5">
                  {formats.map((fmt, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{fmt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance & Governance Callout (from PDF) */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>TRANSPARENCY & COMPLIANCE NOTICE</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Offerings comply with local regulations and licensing. Certificates accurately describe completed milestones and are issued upon rigorous verification of project submissions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
