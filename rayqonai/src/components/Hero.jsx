import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Cloud, Cpu, ShieldCheck } from 'lucide-react'

const capabilities = [
  { icon: Code2, label: 'Digital products' },
  { icon: Cloud, label: 'Cloud & platform' },
  { icon: Cpu, label: 'AI & automation' },
  { icon: ShieldCheck, label: 'Security by design' },
]

export default function Hero({ onContactClick = () => { window.location.href = '/contact' } }) {

  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="hero-orbit" aria-hidden="true"><span /><span /><span /><i /></div>
      <div className="hero-content relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT TECHNOLOGY PARTNER <span className="eyebrow-line" /> UAE · GLOBAL</div>
          <h1>Good ideas deserve<br /> <span>great engineering.</span></h1>
          <p className="hero-lede">We help ambitious teams turn complex technology into products and platforms people can rely on.</p>
          <div className="hero-actions">
            <a className="button-primary" href="/contact" onClick={(event) => { event.preventDefault(); onContactClick() }}>Let us talk about your project <ArrowRight size={17} /></a>
            <a className="button-quiet" href="#blueprints">See how we work <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-proof"><span className="proof-mark">R.</span><span>One thoughtful team, from first sketch<br className="hidden sm:block" /> to production and beyond.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract glowing orbital illustration">
          <div className="art-kicker"><span>RAYQON / SYSTEMS</span><span>01 — 04</span></div>
          <div className="art-core"><div className="core-ring ring-one"/><div className="core-ring ring-two"/><div className="core-ring ring-three"/><div className="core-center"><span>R</span></div><b className="orbit-dot dot-a"/><b className="orbit-dot dot-b"/><b className="orbit-dot dot-c"/></div>
          <div className="art-caption"><span className="caption-line"/><div><strong>Thoughtful by design.</strong><small>Built to move your business forward.</small></div><span className="caption-index">01</span></div>
        </div>
      </div>
      <div className="hero-bottom mx-auto max-w-7xl px-5 sm:px-8">
        <div className="capability-label">WHAT WE DO</div>
        <div className="capability-list">{capabilities.map(({ icon: Icon, label }) => <div key={label}><Icon size={17} strokeWidth={1.6}/><span>{label}</span></div>)}</div>
        <a href="#services" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></a>
      </div>
    </section>
  )
}
