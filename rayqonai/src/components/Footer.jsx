import RayqonLogo from './RayqonLogo'
import { ArrowUpRight, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Our work', href: '/work' },
  { label: 'How we work', href: '/approach' },
  { label: 'Academy', href: '/academy' },
  { label: 'Project planner', href: '/estimate' },
  { label: 'Brand identity', href: '/brand' },
]

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.65-1.66 1.65 1.65 0 0 0-1.65-1.66Z" />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Footer() {
  return <footer className="border-t border-white/[.08] bg-[#070a09] text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_.7fr] md:items-end">
      <div>
        <a href="/" aria-label="Rayqon AI home"><RayqonLogo size="md" /></a>
        <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">A technology partner for teams building what’s next. Thoughtful software, cloud, AI, and engineering.</p>
        <p className="mt-5 text-[11px] tracking-wide text-slate-600">REMOTE FIRST <span className="px-2">·</span> UAE & GLOBAL</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
          <span className="text-slate-500 font-mono text-[11px]">CONNECT</span>
          <a href="https://www.linkedin.com/company/rayqonai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-lime-200">
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700">·</span>
          <a href="https://github.com/Nihal106/RayQonAI-Website" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-lime-200">
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">·</span>
          <a href="mailto:contact@rayqonai.com" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-lime-200">
            <Mail size={14} />
            <span>contact@rayqonai.com</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4 text-sm">
        {footerLinks.map((link) => <a key={link.href} href={link.href} className="transition hover:text-lime-200">{link.label}</a>)}
        <a href="/contact" className="inline-flex items-center gap-1 text-lime-200 hover:text-lime-100">Get in touch <ArrowUpRight size={13}/></a>
      </div>
    </div>
    <div className="border-t border-white/[.06]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-[11px] text-slate-600 sm:px-8">
        <span>© {new Date().getFullYear()} Rayqon AI. All rights reserved.</span>
        <span>Technology with intention.</span>
      </div>
    </div>
  </footer>
}
