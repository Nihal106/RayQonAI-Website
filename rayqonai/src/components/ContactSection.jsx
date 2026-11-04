import { useState } from 'react'
import { 
  Mail, 
  MapPin, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
} from 'lucide-react'

export default function ContactSection({ prefilledService, prefilledScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: prefilledService || 'Software Development & Digital Engineering',
    timeline: 'Immediate (Within 2-4 weeks)',
    message: prefilledScope || '',
    ndaAgreement: true
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const serviceOptions = [
    'Software Development & Digital Engineering',
    'Cloud Solutions, Architecture & Networking',
    'DevOps & Platform Engineering',
    'AI Engineering & Business Automation',
    'Cybersecurity & DevSecOps',
    'Data Analytics & Business Intelligence',
    'IT Consulting & Managed Services',
    'Technical Training & Internship Programmes',
    'Corporate Upskilling / Bootcamps'
  ]

  const timelineOptions = [
    'Immediate (Within 2-4 weeks)',
    'Next Quarter (1-3 months)',
    'Planning & Budgeting Phase',
    'Ongoing Managed Support / Retainer'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmissionError('')
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey || accessKey === 'your_access_key_here') {
      setSubmissionError('Online form delivery is not configured. Set VITE_WEB3FORMS_ACCESS_KEY in rayqonai/.env.local and restart the dev server, or email contact@rayqonai.com.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Rayqon AI inquiry: ${formData.service}`,
          from_name: 'Rayqon AI Website',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          timeline: formData.timeline,
          message: formData.message,
          nda_requested: formData.ndaAgreement ? 'Yes' : 'No',
          botcheck: '',
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Your inquiry could not be sent. Please try again.')
      }
      setIsSubmitted(true)
    } catch (error) {
      setSubmissionError(error.message || 'We could not send your inquiry. Please email contact@rayqonai.com instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DISCOVERY &amp; CONSULTATION HUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Initiate Your Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Engagement
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your technical roadmap, infrastructure bottlenecks, or talent upskilling requirements. An engineering director will respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Consultation Booking & Liaison Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick 15-Minute Architecture Discovery Box */}
            <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 to-cyan-950/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>DIRECT TECHNICAL DIALOGUE</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Book a 15-Minute Architecture Discovery Call
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer a direct technical discussion before submitting a written RFP? Speak directly with a Senior Solutions Architect to evaluate feasibility, cloud costs, and milestone pacing.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:contact@rayqonai.com?subject=Architecture%20Discovery%20Session%20Request"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-mono font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Request Discovery Invite via Email</span>
                </a>
              </div>
            </div>

            {/* Office & Delivery Footprint */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-5">
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                Operating Footprint &amp; Delivery SLA
              </h4>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">UAE Client Engagement</div>
                    <div className="text-slate-400 mt-0.5 text-[11px]">
                      Client relations, discovery, and governance coordination across Dubai &amp; Abu Dhabi.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Remote-First Delivery</div>
                    <div className="text-slate-400 mt-0.5 text-[11px]">
                      Dedicated senior engineering squads supporting clients across MENA, Europe, and international markets.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Guaranteed Response SLA</div>
                    <div className="text-slate-400 mt-0.5 text-[11px]">
                      Formal proposal feedback or introductory scheduling within 1 business day.
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & NDA Protocol */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mutual NDA &amp; customer-authorized data governance as standard.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Intuitive Inquiry Form */}
          <div id="contact-form" className="lg:col-span-7 scroll-mt-28">
            <div className="p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-950/80 relative shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-cyan-400 bg-cyan-950/70 px-3 py-1 rounded-full inline-block border border-cyan-800">
                      INQUIRY SENT TO THE RAYQON AI TEAM
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Scope Received Successfully
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry was delivered successfully. Our team will follow up at <strong className="text-cyan-300">{formData.email}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Software Development & Digital Engineering',
                        timeline: 'Immediate (Within 2-4 weeks)',
                        message: '',
                        ndaAgreement: true
                      })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono hover:text-white cursor-pointer"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Tech or Independent"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                      >
                        {timelineOptions.map((t, idx) => (
                          <option key={idx} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                      Primary Service Division
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase">
                      Project Scope &amp; Architecture Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building, existing infrastructure, or training requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.ndaAgreement}
                      onChange={(e) => setFormData({ ...formData, ndaAgreement: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-0"
                    />
                    <label htmlFor="nda" className="text-xs text-slate-400 font-mono">
                      Request mutual NDA before technical exchange
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-display font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        <span>Transmitting Scope...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Scope For Review</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  {submissionError && <p className="text-sm text-rose-500" role="alert">{submissionError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
