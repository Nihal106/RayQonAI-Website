import { useEffect, useState } from 'react'
import NeuralBackground from './components/NeuralBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceDivisions from './components/ServiceDivisions'
import CaseStudies from './components/CaseStudies'
import DeliveryProcess from './components/DeliveryProcess'
import TechStackMatrix from './components/TechStackMatrix'
import EngagementModels from './components/EngagementModels'
import TrainingInternships from './components/TrainingInternships'
import InteractiveEstimator from './components/InteractiveEstimator'
import BrandKitShowcase from './components/BrandKitShowcase'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { ArrowRight, ArrowUp } from 'lucide-react'

const pages = {
  '/': { label: 'Home', title: 'Technology that moves your business forward.', description: 'From ambitious idea to dependable product, meet the team that makes complex technology feel clear.' },
  '/services': { label: 'Services', title: 'The right expertise, right when you need it.', description: 'A focused set of engineering capabilities to help you design, build, secure, and grow.' },
  '/work': { label: 'Our work', title: 'Built for the real world.', description: 'Explore the challenges, decisions, and measurable outcomes behind our work.' },
  '/approach': { label: 'How we work', title: 'A clear path from idea to impact.', description: 'Collaborative delivery, practical architecture, and a team that stays accountable.' },
  '/academy': { label: 'Academy', title: 'Make room for what’s next.', description: 'Practical training and early career programmes built around real technology work.' },
  '/estimate': { label: 'Project planner', title: 'Shape your next project.', description: 'A few thoughtful questions can turn a big idea into a useful first conversation.' },
  '/brand': { label: 'Brand', title: 'The Rayqon identity.', description: 'A mark inspired by cloud systems, continuous automation, and connected intelligence.' },
  '/contact': { label: 'Contact', title: 'Let’s make something matter.', description: 'Tell us what you’re working on. We’ll help you figure out a practical next step.' },
}

function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rayqon-theme') || 'dark' } catch { return 'dark' }
  })
  const [showTopButton, setShowTopButton] = useState(false)
  const [contactPrefill, setContactPrefill] = useState({ service: '', scope: '' })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try { localStorage.setItem('rayqon-theme', theme) } catch { /* Storage can be disabled by the browser. */ }
  }, [theme])
  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => { window.scrollTo(0, 0) }, [path])
  useEffect(() => {
    const title = path === '/' ? 'Rayqon AI | Thoughtful technology. Great engineering.' : `${pages[path]?.label || 'Rayqon AI'} | Rayqon AI`
    document.title = title
    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = pages[path]?.description || pages['/'].description
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${path}`
    const socialUrl = document.querySelector('meta[property="og:url"]')
    if (socialUrl) socialUrl.content = canonical.href
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'light' ? '#f5f7f3' : '#090c0c'
  }, [path, theme])
  useEffect(() => {
    const targets = document.querySelectorAll('.page-heading, main > section:not(.hero-shell), main > section:not(.hero-shell) .glass-panel-hover')
    targets.forEach((target) => target.classList.add('motion-reveal'))
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('motion-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible')
        } else {
          entry.target.classList.remove('motion-visible')
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [path])

  const go = (href) => {
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return
    window.history.pushState({}, '', url.pathname)
    setPath(url.pathname.replace(/\/$/, '') || '/')
  }
  const selectService = (service) => { setContactPrefill((prev) => ({ ...prev, service })); go('/contact') }
  const selectScope = (scope, service) => { setContactPrefill({ service: service || 'Software Development & Digital Engineering', scope }); go('/contact') }
  const page = pages[path] || pages['/']

  return <div data-theme={theme} className="site-shell relative min-h-screen bg-[#090c0c] text-slate-100 font-sans">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <NeuralBackground />
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar path={path} navigate={go} theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main id="main-content" className="flex-grow" tabIndex="-1">
        {path === '/' ? <>
          <Hero onContactClick={() => go('/contact')} />
          <section className="home-intro mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:px-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div><div className="section-eyebrow">A PARTNER FOR WHAT’S NEXT</div><h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Technology should make progress feel possible.</h2></div>
            <div><p className="max-w-2xl text-base leading-8 text-slate-400">Rayqon AI partners with startups and growing businesses to build useful digital products, resilient cloud platforms, and responsible AI solutions. Clear advice, careful engineering, no unnecessary complexity.</p><a className="inline-flex items-center gap-2 pt-5 text-sm text-lime-200" href="/services" onClick={(e) => { e.preventDefault(); go('/services') }}>Meet your technology team <ArrowRight size={16}/></a></div>
          </section>
          <ServiceDivisions onSelectServiceForContact={selectService} />
          <CaseStudies onSelectCaseForContact={(title) => selectService(`Case Discussion: ${title}`)} />
          <section className="page-cta mx-auto my-20 max-w-7xl px-5 sm:px-8"><div><div className="section-eyebrow">HAVE SOMETHING IN MIND?</div><h2>Let’s find a good way forward.</h2></div><a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Start a conversation <ArrowRight size={16}/></a></section>
        </> : <>
          <header className="page-heading mx-auto max-w-7xl px-5 sm:px-8"><div className="section-eyebrow">RAYQON AI <span> / </span> {page.label.toUpperCase()}</div><h1>{page.title}</h1><p>{page.description}</p></header>
          {path === '/services' && <ServiceDivisions onSelectServiceForContact={selectService} />}
          {path === '/work' && <CaseStudies onSelectCaseForContact={(title) => selectService(`Case Discussion: ${title}`)} />}
          {path === '/approach' && <><DeliveryProcess /><EngagementModels onSelectModelForContact={selectService} /><TechStackMatrix /></>}
          {path === '/academy' && <TrainingInternships onApplyForProgram={selectService} />}
          {path === '/estimate' && <InteractiveEstimator onScopeCalculated={selectScope} />}
          {path === '/brand' && <BrandKitShowcase />}
          {path === '/contact' && <ContactSection key={`${contactPrefill.service}:${contactPrefill.scope}`} prefilledService={contactPrefill.service} prefilledScope={contactPrefill.scope} />}
          <section className="page-cta mx-auto my-20 max-w-7xl px-5 sm:px-8"><div><div className="section-eyebrow">A GOOD NEXT STEP</div><h2>Have a question or an idea?</h2></div><a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Talk with our team <ArrowRight size={16}/></a></section>
        </>}
      </main>
      <Footer />
      {showTopButton && <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" title="Back to top"><ArrowUp size={18}/></button>}
    </div>
  </div>
}

export default App
