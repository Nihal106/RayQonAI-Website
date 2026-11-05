import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')

const routes = [
  {
    path: '/services',
    title: 'Services | Rayqon AI - Enterprise Engineering & Technology Solutions',
    description: 'Explore Rayqon AI engineering services: Software development, cloud architecture, DevOps, applied AI, cybersecurity, and data intelligence.',
    heading: 'The right expertise, right when you need it.',
    eyebrow: 'RAYQON AI / SERVICES',
    summary: 'A focused set of engineering capabilities to help ambitious teams design, build, secure, and scale high-reliability digital platforms.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Our 8 Engineering Divisions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Software Development &amp; Digital Engineering</h3>
            <p class="text-sm text-slate-400">Full-stack web applications, microservices, mobile apps, and enterprise systems built with React, Node.js, Python, and PostgreSQL.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Cloud Solutions, Architecture &amp; Networking</h3>
            <p class="text-sm text-slate-400">AWS, Azure, and GCP multi-cloud infrastructure, Terraform IaC, Kubernetes container orchestration, and FinOps cloud spend optimization.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">DevOps &amp; Platform Engineering</h3>
            <p class="text-sm text-slate-400">Automated CI/CD pipelines, GitOps with ArgoCD, Docker containerization, infrastructure monitoring, and 99.99% uptime SLAs.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">AI Engineering &amp; Business Automation</h3>
            <p class="text-sm text-slate-400">Generative AI workflows, Retrieval-Augmented Generation (RAG) pipelines, custom LLMs, vector search, and business intelligence bots.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Cybersecurity, DevSecOps &amp; Compliance</h3>
            <p class="text-sm text-slate-400">Zero-Trust architecture, automated vulnerability scanning, Trivy/SonarQube/Checkov integration, and ISO 27001/SOC 2 compliance.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Data Analytics &amp; Business Intelligence</h3>
            <p class="text-sm text-slate-400">Modern data pipelines, Snowflake and BigQuery warehousing, dbt, real-time analytics dashboards, and executive reporting.</p>
          </article>
        </div>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Discuss Your Project &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/work',
    title: 'Our Work | Rayqon AI - Case Studies & Engineering Solutions',
    description: 'Explore the engineering challenges, architectural decisions, and measurable outcomes behind Rayqon AI client projects.',
    heading: 'Built for the real world.',
    eyebrow: 'RAYQON AI / OUR WORK',
    summary: 'Explore the challenges, decisions, and measurable outcomes behind our enterprise engineering engagements.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Proven Architectural Blueprints</h2>
        <div class="space-y-6">
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Enterprise Multi-Cloud Architecture &amp; DevSecOps for FinTech</h3>
            <p class="text-sm text-slate-400">Multi-region AWS UAE landing zones, Terraform IaC, and Kubernetes EKS delivering 99.99% uptime and 38% FinOps cost reduction.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">Autonomous Document Intelligence &amp; RAG Pipeline for Global Logistics</h3>
            <p class="text-sm text-slate-400">Generative AI document intelligence processing 14,000+ monthly customs bills with 99.4% accuracy, cutting turnaround by 8x.</p>
          </article>
          <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-xl font-bold text-white mb-2">High-Velocity SaaS Product MVP Build &amp; Scale Architecture</h3>
            <p class="text-sm text-slate-400">Multi-tenant B2B analytics platform built in 8 weeks with Next.js, Node.js, and PostgreSQL, scaling to 15,000 daily active users.</p>
          </article>
        </div>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Start Your Case Discussion &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/approach',
    title: 'How We Work | Rayqon AI - Delivery Process & Architecture',
    description: 'A clear path from idea to impact. Collaborative delivery, practical architecture, and an engineering team that stays accountable.',
    heading: 'A clear path from idea to impact.',
    eyebrow: 'RAYQON AI / HOW WE WORK',
    summary: 'Collaborative delivery, practical architecture, and an engineering team that stays accountable every step of the way.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">4-Phase Delivery Framework</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Phase 1: Discovery &amp; Architecture</h3>
            <p class="text-sm text-slate-400">System audit, tech stack selection, security scoping, and technical blueprinting.</p>
          </div>
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Phase 2: Sprint Zero &amp; Setup</h3>
            <p class="text-sm text-slate-400">CI/CD pipelines, staging environments, infrastructure as code, and database schema setup.</p>
          </div>
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Phase 3: Iterative Delivery</h3>
            <p class="text-sm text-slate-400">Two-week sprint cadences, automated tests, milestone demos, and transparent code reviews.</p>
          </div>
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Phase 4: Production &amp; SLA Support</h3>
            <p class="text-sm text-slate-400">Zero-downtime cutover, observability dashboards, SLA monitoring, and handover training.</p>
          </div>
        </div>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Work With Us &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/academy',
    title: 'Academy | Rayqon AI - Engineering Training & Internships',
    description: 'Practical training and early career programmes built around real technology work and production engineering standards.',
    heading: 'Make room for what’s next.',
    eyebrow: 'RAYQON AI / ACADEMY',
    summary: 'Practical training and early career programmes built around real production technology and commercial standards.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Hands-On Engineering Curriculums</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Full-Stack Engineering</h3>
            <p class="text-sm text-slate-400">Modern React, Node.js, TypeScript, REST &amp; GraphQL APIs, and database modeling.</p>
          </div>
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Cloud &amp; DevOps</h3>
            <p class="text-sm text-slate-400">AWS/Azure cloud engineering, Docker containers, Kubernetes, and CI/CD automation.</p>
          </div>
          <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 class="text-lg font-bold text-white mb-2">Applied AI &amp; Data</h3>
            <p class="text-sm text-slate-400">Python data engineering, LLM integration, LangChain, vector databases, and machine learning pipelines.</p>
          </div>
        </div>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Apply for Academy &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/estimate',
    title: 'Project Planner | Rayqon AI - Scope & Timeline Estimator',
    description: 'Shape your next technology project with our interactive estimator for engineering scope, milestones, and tech stack.',
    heading: 'Shape your next project.',
    eyebrow: 'RAYQON AI / ESTIMATOR',
    summary: 'A few thoughtful questions can turn a big idea into a useful first conversation and clear technical roadmap.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Plan Your Project Architecture</h2>
        <p class="text-slate-400 max-w-2xl mb-8">Calculate approximate milestone pacing, team configuration, and technology architecture for your next digital product, cloud platform, or AI initiative.</p>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Request Architecture Session &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/brand',
    title: 'Brand Identity | Rayqon AI - Brand Assets & Design Language',
    description: 'The Rayqon AI brand identity, logo assets, design principles, and engineering philosophy.',
    heading: 'The Rayqon identity.',
    eyebrow: 'RAYQON AI / BRAND',
    summary: 'A mark inspired by cloud systems, continuous automation, and connected intelligence.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Design Philosophy &amp; Assets</h2>
        <p class="text-slate-400 max-w-2xl mb-8">Rayqon AI represents thoughtful design, precision engineering, and technological clarity for ambitious teams worldwide.</p>
        <div class="mt-8">
          <a href="/contact" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Connect With Us &rarr;</a>
        </div>
      </section>
    `
  },
  {
    path: '/contact',
    title: 'Contact Us | Rayqon AI - Let’s Build Something That Matters',
    description: 'Contact Rayqon AI to discuss software development, cloud infrastructure, AI solutions, or request a 15-minute architecture call.',
    heading: 'Let’s make something matter.',
    eyebrow: 'RAYQON AI / CONTACT',
    summary: 'Tell us what you’re working on. We’ll help you figure out a practical next step and architectural roadmap.',
    content: `
      <section class="py-12 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 class="text-2xl font-bold text-white mb-6">Direct Technical Dialogue</h2>
        <p class="text-slate-300 max-w-2xl mb-4">Book a 15-minute discovery call with a Solutions Architect or reach out directly via email.</p>
        <div class="p-6 rounded-xl border border-slate-800 bg-slate-900/40 max-w-xl mb-8">
          <p class="text-sm text-slate-300 mb-2"><strong>Email:</strong> <a href="mailto:contact@rayqonai.com" class="text-lime-300">contact@rayqonai.com</a></p>
          <p class="text-sm text-slate-300 mb-2"><strong>Operating Footprint:</strong> UAE Client Engagement (Dubai &amp; Abu Dhabi) &bull; Global Remote Delivery</p>
          <p class="text-sm text-slate-300"><strong>Response SLA:</strong> Technical triage within 24 hours.</p>
        </div>
        <a href="mailto:contact@rayqonai.com?subject=Project%20Discovery%20Inquiry" class="inline-block px-6 py-3 bg-lime-300 text-slate-950 font-semibold rounded-md">Send Discovery Email &rarr;</a>
      </section>
    `
  }
]

function prerender() {
  const indexPath = path.join(distDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error(`dist/index.html not found at ${indexPath}. Run vite build first.`)
    process.exit(1)
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8')

  for (const route of routes) {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''))
    fs.mkdirSync(routeDir, { recursive: true })

    const fullUrl = `https://www.rayqonai.com${route.path}`

    let html = baseHtml
      // Replace titles and descriptions
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`)
      // Open Graph
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
      // Twitter
      .replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${fullUrl}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
      .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`)

    // Replace <main id="main-content"> ... </main> with the route's specific content
    const pageMain = `
      <main id="main-content">
        <header class="page-heading mx-auto max-w-7xl px-5 sm:px-8 py-16 border-b border-slate-800">
          <p class="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">${route.eyebrow}</p>
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">${route.heading}</h1>
          <p class="text-lg text-slate-300 max-w-3xl leading-relaxed">${route.summary}</p>
        </header>
        ${route.content}
      </main>
    `

    html = html.replace(/<main id="main-content">[\s\S]*?<\/main>/, pageMain.trim())

    const targetFile = path.join(routeDir, 'index.html')
    fs.writeFileSync(targetFile, html, 'utf-8')
    console.log(`Prerendered: ${route.path} -> ${targetFile}`)
  }

  console.log('Static route pre-rendering complete!')
}

prerender()
