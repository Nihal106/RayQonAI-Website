import RayqonLogo from './RayqonLogo'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Our work', href: '/work' },
  { label: 'How we work', href: '/approach' },
  { label: 'Academy', href: '/academy' },
  { label: 'Project planner', href: '/estimate' },
  { label: 'Brand identity', href: '/brand' },
]

export default function Footer() {
  return <footer className="border-t border-white/[.08] bg-[#070a09] text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_.7fr] md:items-end">
      <div><a href="/" aria-label="Rayqon AI home"><RayqonLogo size="md" /></a><p className="mt-5 max-w-md text-sm leading-7 text-slate-500">A technology partner for teams building what’s next. Thoughtful software, cloud, AI, and engineering.</p><p className="mt-5 text-[11px] tracking-wide text-slate-600">REMOTE FIRST <span className="px-2">·</span> UAE & GLOBAL</p></div>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4 text-sm">{footerLinks.map((link) => <a key={link.href} href={link.href} className="transition hover:text-lime-200">{link.label}</a>)}<a href="/contact" className="inline-flex items-center gap-1 text-lime-200 hover:text-lime-100">Get in touch <ArrowUpRight size={13}/></a></div>
    </div>
    <div className="border-t border-white/[.06]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-[11px] text-slate-600 sm:px-8"><span>© {new Date().getFullYear()} Rayqon AI. All rights reserved.</span><span>Technology with intention.</span></div></div>
  </footer>
}
