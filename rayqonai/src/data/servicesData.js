export const serviceDivisions = [
  {
    id: 'software-engineering',
    category: 'Engineering & Code',
    number: '01',
    title: 'Software Development & Digital Engineering',
    tagline: 'We design, develop, integrate, and maintain digital products and business applications.',
    icon: 'Code2',
    accent: 'from-sky-500 to-cyan-400',
    borderGlow: 'hover:border-cyan-400/50',
    subsections: [
      {
        name: 'Application Development',
        items: [
          'Corporate websites, landing pages, and web applications',
          'Mobile applications and e-commerce platforms',
          'Custom business software, SaaS products, and startup MVPs',
          'API development, third-party integrations, and database design'
        ]
      },
      {
        name: 'Product Engineering',
        items: [
          'UI/UX design, design systems, and rapid prototyping',
          'Application modernisation and legacy cloud migration',
          'Application testing, performance optimisation, and maintenance'
        ]
      }
    ],
    tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'REST / GraphQL', 'Tailwind CSS'],
    metrics: { stat: '99.9%', label: 'Code Quality Standard' }
  },
  {
    id: 'cloud-networking',
    category: 'Cloud & Infrastructure',
    number: '02',
    title: 'Cloud Solutions, Architecture & Networking',
    tagline: 'We plan, deploy, migrate, secure, and optimise cloud environments.',
    icon: 'Cloud',
    accent: 'from-cyan-400 to-blue-600',
    borderGlow: 'hover:border-blue-400/50',
    subsections: [
      {
        name: 'Cloud Services',
        items: [
          'AWS, Microsoft Azure, and Google Cloud architecture & implementation',
          'Cloud migration, landing zones, compute, storage, and database services',
          'High availability, backup, disaster recovery, and cloud monitoring',
          'Cloud cost reviews, FinOps optimisation, and infrastructure documentation'
        ]
      },
      {
        name: 'Remote Cloud Networking',
        items: [
          'AWS VPC, Azure VNet, and Google Cloud VPC design and configuration',
          'Subnetting, route tables, routing, peering, and private connectivity',
          'VPN planning and configuration, including supported hybrid connectivity',
          'Firewall rules, network security groups, segmentation, and access controls',
          'DNS, load balancers, application gateways, NAT gateways, and private endpoints',
          'Network diagnostics, performance troubleshooting, monitoring, and documentation',
          'Remote configuration of supported routers, switches, and firewalls'
        ]
      }
    ],
    deliveryBoundary: {
      remote: 'Cloud networking and supported remotely managed equipment can be handled remotely with customer-authorised access.',
      onsite: 'Physical cabling, hardware installation or replacement, rack work, and on-site surveys require customer-side personnel or a local delivery partner.'
    },
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud', 'CloudFlare', 'VPC / VNet', 'VPN / Direct Connect', 'Route 53'],
    metrics: { stat: 'Multi-Cloud', label: 'AWS, Azure & GCP' }
  },
  {
    id: 'devops-platform',
    category: 'DevOps & GitOps',
    number: '03',
    title: 'DevOps & Platform Engineering',
    tagline: 'We automate software delivery and infrastructure operations to improve release speed, consistency, and reliability.',
    icon: 'Terminal',
    accent: 'from-blue-500 to-emerald-400',
    borderGlow: 'hover:border-emerald-400/50',
    subsections: [
      {
        name: 'Automated Platform Services',
        items: [
          'CI/CD pipeline design and implementation',
          'Infrastructure as Code using Terraform and cloud-native templates',
          'Docker, Kubernetes, and container platform implementation',
          'Configuration management and automation using Ansible',
          'GitOps, release automation, and deployment standardisation',
          'Monitoring, logging, alerting, and platform engineering foundations'
        ]
      }
    ],
    tools: [
      'Git', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Azure DevOps',
      'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Bicep', 'Ansible',
      'Argo CD', 'Flux', 'Prometheus', 'Grafana', 'ELK / OpenSearch'
    ],
    metrics: { stat: '10x Faster', label: 'Automated Deployments' }
  },
  {
    id: 'ai-automation',
    category: 'AI & Intelligence',
    number: '04',
    title: 'AI Engineering & Business Automation',
    tagline: 'We develop AI-enabled applications and automate repeatable business workflows with appropriate controls and human oversight.',
    icon: 'Cpu',
    accent: 'from-emerald-400 to-green-500',
    borderGlow: 'hover:border-green-400/50',
    subsections: [
      {
        name: 'AI Engineering',
        items: [
          'Generative AI application development and AI API integration',
          'AI chatbots, internal knowledge assistants, and RAG solutions',
          'Document extraction, classification, summarisation, and recommendations',
          'Bounded AI-agent workflows, prototypes, and solution evaluation'
        ]
      },
      {
        name: 'Business Automation',
        items: [
          'Workflow, approval, CRM, and customer-support automation',
          'Invoice, document, email, HR, and reporting automation',
          'Application integrations and low-code/no-code automation',
          'RPA solutions where appropriate'
        ]
      }
    ],
    tools: ['OpenAI / Gemini', 'LangChain', 'LlamaIndex', 'RAG Pipelines', 'Vector DBs', 'Make / n8n', 'Python AI SDKs'],
    metrics: { stat: 'Human-in-Loop', label: 'Governed AI Automation' }
  },
  {
    id: 'cybersecurity-devsecops',
    category: 'Security & Governance',
    number: '05',
    title: 'Cybersecurity & DevSecOps',
    tagline: 'We help reduce technology risk by embedding security practices into cloud infrastructure, applications, and delivery pipelines.',
    icon: 'ShieldCheck',
    accent: 'from-green-400 to-cyan-500',
    borderGlow: 'hover:border-cyan-400/50',
    subsections: [
      {
        name: 'Security Services',
        items: [
          'Cloud security posture reviews and infrastructure hardening',
          'Identity and access management, MFA, RBAC, and least-privilege reviews',
          'Network security architecture and firewall policy reviews',
          'Vulnerability assessments and web application security reviews',
          'Security logging, monitoring, backup, and recovery security reviews'
        ]
      },
      {
        name: 'DevSecOps Automation',
        items: [
          'SAST, dependency, and software composition scanning',
          'Container image and Infrastructure as Code security scanning',
          'Secret detection, secrets management, and CI/CD security gates'
        ]
      }
    ],
    authorisationNotice: 'Security testing is performed only with written authorisation and agreed scope. Specialist penetration testing, incident response, and formal compliance audits are offered only where suitable qualifications, approvals, and delivery capability are in place.',
    tools: ['Trivy', 'SonarQube', 'Gitleaks', 'Checkov', 'HashiCorp Vault', 'Wazuh', 'OWASP Top 10', 'IAM / RBAC'],
    metrics: { stat: 'Zero Trust', label: 'Embedded DevSecOps' }
  },
  {
    id: 'data-bi',
    category: 'Data & Analytics',
    number: '06',
    title: 'Data Analytics & Business Intelligence',
    tagline: 'We turn business data into clear reports, dashboards, and insights that support better decisions.',
    icon: 'BarChart3',
    accent: 'from-cyan-400 to-emerald-400',
    borderGlow: 'hover:border-emerald-400/50',
    subsections: [
      {
        name: 'BI & Data Engineering Services',
        items: [
          'Power BI dashboards, KPI reporting, and data visualisation',
          'Data analysis, cleaning, transformation, and integration',
          'ETL/ELT pipeline development and data warehouse solutions',
          'Database reporting and automated management reports',
          'Cloud data platforms and predictive analytics prototypes',
          'AI-assisted analytics use cases'
        ]
      }
    ],
    tools: [
      'Power BI', 'Excel Advanced', 'SQL', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server',
      'Microsoft Fabric', 'Azure Data Services', 'AWS Analytics', 'Google Cloud BigQuery'
    ],
    metrics: { stat: 'Real-time', label: 'Actionable Insights' }
  },
  {
    id: 'it-consulting',
    category: 'Strategy & Ops',
    number: '07',
    title: 'IT Consulting & Managed Services',
    tagline: 'We provide technology guidance and ongoing operational support for organisations that need flexible engineering expertise.',
    icon: 'Compass',
    accent: 'from-blue-400 to-emerald-300',
    borderGlow: 'hover:border-blue-400/50',
    subsections: [
      {
        name: 'IT Consulting',
        items: [
          'IT strategy, technology roadmaps, and digital transformation planning',
          'Cloud adoption, solution architecture, and infrastructure assessments',
          'DevOps maturity, AI readiness, and cybersecurity improvement assessments',
          'Technology selection, vendor evaluation, and build-versus-buy guidance'
        ]
      },
      {
        name: 'Managed Services',
        items: [
          'Cloud, server, database, and application administration',
          'Monitoring, maintenance, patch coordination, and backup checks',
          'Deployment support, log review, incident triage, and escalation',
          'Performance optimisation, documentation, and operational handover'
        ]
      }
    ],
    tools: ['Architecture Review', 'FinOps Audits', 'SLA Monitoring', 'Runbook Automation', 'Disaster Recovery'],
    metrics: { stat: 'Flexible SLA', label: 'Dedicated Support' }
  },
  {
    id: 'training-internships',
    category: 'Education & Talent',
    number: '08',
    title: 'Technical Training & Internship Programmes',
    tagline: 'Practical, project-oriented technology learning and structured internship opportunities to help learners develop job-relevant technical skills.',
    icon: 'GraduationCap',
    accent: 'from-emerald-400 to-teal-400',
    borderGlow: 'hover:border-teal-400/50',
    subsections: [
      {
        name: 'Technical Training Tracks',
        items: [
          'Cloud Computing: AWS, Microsoft Azure, and GCP fundamentals & admin',
          'DevOps: Linux, Git, CI/CD, Docker, Kubernetes, Terraform & automation',
          'Cybersecurity & DevSecOps fundamentals',
          'Data Analytics: SQL, Python, Excel, and Power BI',
          'AI Engineering and business automation fundamentals',
          'Hands-on labs, guided projects, workshops, and technical mentoring',
          'Corporate technical upskilling tailored to team requirements'
        ]
      },
      {
        name: 'Structured Internship Programmes',
        items: [
          'Structured learning paths for software dev, cloud, DevOps, AI, cyber & data',
          'Practical assignments and supervised project work',
          'Mentor guidance, progress reviews, and technical feedback',
          'Portfolio-building activities and project demonstrations',
          'Internship completion documentation based on participation & criteria'
        ]
      }
    ],
    formats: [
      'Instructor-led online sessions and workshops',
      'Remote project-based internship programmes',
      'Corporate or team-specific training engagements',
      'Short-term bootcamps and practical skill development'
    ],
    tools: ['Hands-on Labs', 'Live Projects', 'Mentorship', 'Portfolio Reviews', 'Verified Completion'],
    metrics: { stat: '100% Hands-on', label: 'Job-Ready Competency' }
  }
]

export const deliveryFramework = [
  {
    step: '01',
    title: 'Discover Requirements',
    desc: 'Deep-dive discovery to understand business objectives, technical boundaries, and agree on measurable outcomes.',
    badge: 'Discovery Phase'
  },
  {
    step: '02',
    title: 'Assess Environment & Scope',
    desc: 'Audit the existing infrastructure, map out architecture dependencies, and define clear scope, assumptions, and risks.',
    badge: 'Architecture & Design'
  },
  {
    step: '03',
    title: 'Implement & Deliver',
    desc: 'Agile execution in defined milestones using secure customer-authorised access, automated pipelines, and continuous review.',
    badge: 'Milestone Execution'
  },
  {
    step: '04',
    title: 'Test, Benchmark & Handover',
    desc: 'Rigorous QA, security scans, performance benchmarking, comprehensive documentation, and seamless operational knowledge transfer.',
    badge: 'Validation & Handover'
  },
  {
    step: '05',
    title: 'Ongoing Support & Mentoring',
    desc: 'Proactive SLA monitoring, incident triage, continuous optimization, or corporate mentoring based on agreed contract.',
    badge: 'Operational SLA'
  }
]

export const engagementModels = [
  {
    title: 'Fixed-Scope Project Delivery',
    desc: 'Defined deliverables, fixed timeline, and transparent pricing. Best for greenfield MVPs, cloud migrations, and structured builds.',
    badge: 'Fixed Scope'
  },
  {
    title: 'Time & Materials Engineering',
    desc: 'Agile sprints with transparent hour-by-hour reporting. Ideal for evolving architectures, exploratory AI, and dynamic products.',
    badge: 'Agile Sprints'
  },
  {
    title: 'Monthly Engineering Retainer',
    desc: 'Guaranteed senior engineering hours reserved each month for platform maintenance, feature development, and infrastructure.',
    badge: 'Predictable Monthly'
  },
  {
    title: 'Managed Services with SLAs',
    desc: 'Ongoing cloud administration, 24/7 uptime monitoring, backup verification, and incident triage under defined SLA commitments.',
    badge: 'Managed SLA'
  },
  {
    title: 'Dedicated Engineering Resources',
    desc: 'Embedded cloud, DevOps, AI, or full-stack engineers working directly as an extension of your in-house product team.',
    badge: 'Staff Augmentation'
  },
  {
    title: 'Corporate Upskilling Bootcamps',
    desc: 'Tailored enterprise training workshops in Cloud, DevOps, AI, and Cybersecurity customized to your team stack.',
    badge: 'Enterprise Upskilling'
  },
  {
    title: 'Project-Based Internships',
    desc: 'Rigorous structured internship tracks for emerging talent with hands-on labs, mentor supervision, and portfolio builds.',
    badge: 'Talent Programme'
  },
  {
    title: 'Time-Bound Consulting Audits',
    desc: 'High-impact technical audits: Cloud architecture reviews, DevOps maturity assessments, and DevSecOps gap analysis.',
    badge: 'Strategic Assessment'
  }
]

export const techStackCategories = [
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'CloudFlare', 'VPC / VNet', 'Route 53', 'IAM']
  },
  {
    name: 'DevOps & Containers',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Flux']
  },
  {
    name: 'AI Engineering & Automation',
    items: ['Generative AI', 'OpenAI API', 'LangChain', 'LlamaIndex', 'RAG Pipelines', 'Vector DBs', 'Make / n8n']
  },
  {
    name: 'Cybersecurity & DevSecOps',
    items: ['Trivy', 'SonarQube', 'Gitleaks', 'Checkov', 'HashiCorp Vault', 'Wazuh', 'OWASP Top 10']
  },
  {
    name: 'Data & Analytics',
    items: ['Power BI', 'Microsoft Fabric', 'Python Data', 'PostgreSQL', 'SQL Server', 'AWS Analytics', 'BigQuery']
  },
  {
    name: 'Software & Frontend',
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'GraphQL']
  }
]
