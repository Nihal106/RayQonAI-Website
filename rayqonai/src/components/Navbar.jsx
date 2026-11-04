import { useState } from 'react'
import RayqonLogo from './RayqonLogo'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our work', href: '/work' },
  { name: 'How we work', href: '/approach' },
  { name: 'Academy', href: '/academy' },
  { name: 'Project planner', href: '/estimate' },
]

export default function Navbar({ path = '/', navigate = (href) => { window.location.href = href }, theme = 'dark', onToggleTheme = () => {} }) {
  const [open, setOpen] = useState(false)
  const follow = (event, href) => { event.preventDefault(); setOpen(false); navigate(href) }
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-[#090c0c]/85 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
      <a href="/" aria-label="Rayqon AI home" onClick={(e) => follow(e, '/')}><RayqonLogo size="md" /></a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={(e) => follow(e, link.href)} aria-current={path === link.href ? 'page' : undefined} className={`text-[13px] transition-colors hover:text-lime-200 ${path === link.href ? 'text-lime-200' : 'text-slate-300'}`}>{link.name}</a>)}
      </nav>
      <a className="hidden items-center gap-2 rounded-md bg-lime-200 px-4 py-2.5 text-xs font-semibold text-[#172116] transition hover:bg-lime-100 sm:inline-flex" href="/contact" onClick={(e) => follow(e, '/contact')}>Let’s talk <ArrowRight size={14}/></a>
      <button type="button" onClick={onToggleTheme} className="theme-toggle rounded-md border border-white/10 p-2 text-slate-200 transition hover:border-lime-200/50 hover:text-lime-200" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <button type="button" onClick={() => setOpen(!open)} className="rounded-md border border-white/10 p-2 text-white lg:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="mobile-navigation" aria-expanded={open}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </div>
    {open && <nav id="mobile-navigation" className="border-t border-white/10 bg-[#0b100e] px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={(e) => follow(e, link.href)} aria-current={path === link.href ? 'page' : undefined} className="block border-b border-white/[.07] py-4 text-sm text-slate-200">{link.name}</a>)}<a href="/contact" onClick={(e) => follow(e, '/contact')} className="mt-4 block py-3 text-sm text-lime-200">Contact our team <ArrowRight className="ml-2 inline" size={15}/></a></nav>}
  </header>
}
