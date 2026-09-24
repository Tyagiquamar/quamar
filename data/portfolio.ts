export const siteConfig = {
  name: "Mohd Quamar Tyagi",
  title: "Mohd Quamar Tyagi · Software Engineer",
  description:
    "Software Engineer with experience at Zomato, startup engineering at Takkada, Linux Foundation mentorship and extensive open-source contributions across backend, full-stack, infrastructure and systems software.",
  url: "https://quamar.vercel.app",
  email: "mohdquamartyagi@gmail.com",
  location: "Remote · UTC+5:30",
} as const

export const socials = [
  { label: "GitHub", href: "https://github.com/Tyagiquamar", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mohd-quamar-tyagi", icon: "linkedin" },
  { label: "Email", href: "mailto:mohdquamartyagi@gmail.com", icon: "mail" },
] as const
export type Social = (typeof socials)[number]

export const navLinks = [
  { label: "Systems", href: "/systems" },
  { label: "Quant", href: "/quant" },
  { label: "Full-Stack", href: "/fullstack" },
  { label: "Experience", href: "/#experience" },
  { label: "Open Source", href: "/#open-source" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume.pdf" },
] as const

export const hero = {
  name: "Mohd Quamar Tyagi",
  role: "Software Engineer",
  tagline:
    "Building production software across backend, full-stack, infrastructure and open source.",
  current: "Founding Engineer at Takkada · Previously SDE-1 at Zomato.",
  previous: "SDE-1 (Backend) · Zomato",
  focus: "Backend · Full-Stack · Infrastructure · Systems",
  photo: "/images/profile-rose.jpg",
} as const

export const stats = [
  { value: "5x", label: "p90 latency improvement at Zomato scale" },
  { value: "139", label: "businesses onboarded to PaySaathi" },
  { value: "2038", label: "Codeforces rating · Candidate Master" },
  { value: "2400+", label: "LeetCode rating · Guardian · Top 0.6%" },
] as const
export type Stat = (typeof stats)[number]

export interface ProofMark {
  label: string
  detail: string
  logo?: string
  mark?: string
}

export const proofMarks: ProofMark[] = [
  { label: "Takkada", detail: "Founding Engineer", logo: "/logos/takkada-icon.png" },
  { label: "Zomato", detail: "SDE-1 (Backend)", logo: "/logos/zomato-logo.png" },
  { label: "Linux Foundation", detail: "Cloudforet", logo: "/logos/linux-foundation-logo.png" },
  { label: "ITJOBS", detail: "SDE Intern", logo: "/logos/itjobs-logo.jpg" },
  { label: "Codeforces", detail: "2038 CM", logo: "/logos/codeforces-logo.png" },
  { label: "LeetCode", detail: "Guardian · 2400+", logo: "/logos/leetcode-logo.png" },
]

export const about = {
  heading: "Systems over demos.",
  body: "I got into engineering through competitive programming. Years of Codeforces rounds taught me to reason about correctness and complexity before writing a line of code. That habit stuck: I am drawn to systems where getting it wrong is expensive: durable execution, data capture, and production backends. Day-to-day I also ship product surfaces people depend on. Outside of work I still do CP rounds and tinker with systems projects in Go and C++.",
} as const

export const cpProfiles = [
  {
    platform: "Codeforces",
    rating: "Candidate Master · 2038",
    detail: "Top 1% globally",
    href: "https://codeforces.com/profile/altair_45",
  },
  {
    platform: "LeetCode",
    rating: "Guardian · 2400+",
    detail: "Top 0.6% globally · 1,000+ solved",
    href: "https://leetcode.com/u/Altair_4/",
  },
  {
    platform: "CodeChef",
    rating: "5★ · 2017",
    detail: "5-star rating (peak)",
    href: "https://www.codechef.com/users/tyagiquamar",
  },
] as const
export type CpProfile = (typeof cpProfiles)[number]

export const education = {
  institution: "Chandigarh Engineering College",
  degree: "B.Tech in Computer Science and Engineering",
  dates: "2021 - 2025",
  score: "7.9 CGPA",
} as const


export interface Experience {
  role: string
  company: string
  location: string
  dates: string
  logo?: string
  mark?: string
  current?: boolean
  bullets: string[]
  /** Shortest strong subset for the homepage; full bullets stay for detail contexts. */
  homeBullets?: string[]
  caseStudyHref?: string
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: "Founding Engineer / Software Engineer",
    company: "Takkada",
    location: "Remote",
    dates: "May 2026 - Present",
    logo: "/logos/takkada-icon.png",
    current: true,
    bullets: [
      "Built and shipped production features across frontend, backend, and database layers in a lean engineering team with direct product ownership.",
      "Worked on e-way bill workflows, including routing fixes and standalone e-way bill generation.",
      "Implemented ledger and balance-period functionality, partner-facing CSV data views, and Supabase RPC database procedures.",
      "Implemented administrative controls including plan-tier filtering and operational checklists.",
      "Managed staging and production deployments on Railway and Supabase, and executed domain and DNS infrastructure migrations using Cloudflare.",
      "Integrated GA4 product analytics and debugged production issues across the full application stack.",
    ],
    homeBullets: [
      "Built and shipped production features across frontend, backend, and database layers as a founding engineer with end-to-end product ownership.",
      "Implemented e-way bill generation, ledger/balance-period workflows, partner-facing CSV data views, and Supabase RPC database functions.",
      "Engineered admin tooling, plan-tier controls, GA4 analytics, and production deployment pipelines on Railway, Supabase, and Cloudflare.",
    ],
    caseStudyHref: "/work/takkada",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Railway",
      "Cloudflare",
    ],
  },
  {
    role: "SDE-1 (Backend)",
    company: "Zomato",
    location: "Gurgaon, India",
    dates: "Jul 2025 - Dec 2025",
    logo: "/logos/zomato-logo.png",
    bullets: [
      "Worked on production backend services for Zomato's customer-experience and support platform using Go and gRPC.",
      "Improved backend and API performance, resulting in approximately 5x improvement in p90 latency for relevant customer support flows.",
      "Automated support and ticket workflows, reducing manual operational effort by approximately 80% and overall support load by 35%.",
      "Worked on live-status API behavior and reduced redundant initializations by approximately 60%.",
      "Built and maintained backend functionality using Go and gRPC with MySQL- and MongoDB-backed services.",
    ],
    homeBullets: [
      "Optimized latency-sensitive Go/gRPC backend paths, achieving an approximate 5x improvement in p90 latency for customer support flows.",
      "Automated support and ticketing workflows, reducing manual operational effort by ~80% and support workload by ~35%.",
      "Refactored live-status API behaviors, cutting redundant initializations by ~60% across MySQL and MongoDB microservices.",
    ],
    tech: ["Go", "gRPC", "MySQL", "MongoDB"],
  },
  {
    role: "Open Source / Cloud-Native Engineering Mentee",
    company: "The Linux Foundation (Cloudforet)",
    location: "Remote",
    dates: "Nov 2023 - Mar 2024",
    logo: "/logos/linux-foundation-logo.png",
    bullets: [
      "Contributed to Cloudforet open-source and cloud-native engineering work through the Linux Foundation Mentorship program.",
      "Migrated service communication to gRPC architecture, improving data-transfer performance by approximately 60%.",
      "Built containerized development environments and local Kubernetes-style setups supporting 50+ microservices using Docker, Nginx, and Minikube.",
      "Utilized Git and GitHub collaborative open-source workflows to streamline local orchestration and distributed service testing.",
    ],
    homeBullets: [
      "Contributed to Cloudforet open-source cloud-native infrastructure through the Linux Foundation Mentorship program.",
      "Migrated service communication to gRPC, improving service-to-service data-transfer performance by approximately 60%.",
      "Built containerized development environments supporting 50+ microservices using Docker, Nginx, and Minikube.",
    ],
    tech: ["Docker", "Nginx", "gRPC", "Minikube", "Kubernetes", "Linux", "Git/GitHub"],
  },
  {
    role: "Software Engineering Intern",
    company: "ITJOBS",
    location: "Remote",
    dates: "Jul 2023 - Sep 2023",
    logo: "/logos/itjobs-logo.jpg",
    bullets: [
      "Worked on web application development using React.js, Node.js, and MongoDB.",
      "Built and updated frontend functionality using React.js and integrated components with backend REST APIs.",
      "Implemented backend API logic and database queries using Node.js and MongoDB within a collaborative Git/GitHub workflow.",
    ],
    homeBullets: [
      "Built and updated web application interfaces using React.js and JavaScript.",
      "Implemented backend REST API endpoints with Node.js and managed application data in MongoDB.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "JavaScript", "REST APIs", "Git/GitHub"],
  },
]


export const caseStudy = {
  id: "case-study",
  title: "Takkada",
  subtitle: "Standalone Tally-Replacement ERP",
  description:
    "A production accounting & ERP platform built end-to-end as founding engineer at Takkada. 139 businesses onboarded, 83 actively syncing their books from Tally, 716K+ vouchers mirrored and 196K receipts in production. Native double-entry accounting core in PostgreSQL, filing-ready GST compliance (GSTR-1/GSTR-3B GSTN JSON export, e-invoice, e-way bill), WhatsApp Business automation, and an AI document-import pipeline, replacing Tally workflows for real businesses.",
  // Verified against the production Supabase project on 2026-08-26 (companies NOT is_demo; trn_voucher; paysathi_receipts; tally_ingest_events seen_at).
  growthNote: "+23 businesses in 7 days · +62 in 30 days",
  metrics: [
    "139 · Businesses onboarded",
    "83 · Active Tally syncs",
    "716K+ · Vouchers mirrored",
    "196K · Receipts",
  ],
  tech: ["Flutter", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
  architecture: {
    caption: "Four layers: Flutter app → Supabase Edge Functions → PostgreSQL (double-entry ledger, RLS) → External (GSTN, WhatsApp API, Gemini/Vertex)",
    layers: [
      { name: "Flutter App", detail: "Mobile + desktop client" },
      { name: "Supabase Edge Functions", detail: "Business logic, integrations" },
      { name: "PostgreSQL", detail: "Double-entry ledger, RLS" },
      { name: "External", detail: "GSTN · WhatsApp API · Gemini/Vertex" },
    ],
  },
  screenshots: [
    {
      title: "Marketing site",
      detail: "Live product marketing site: real businesses, real receivables",
      src: "/images/takkada-landing.png",
    },
    {
      title: "Mobile purchase flow",
      detail: "Add purchase on mobile: pick a party to create or update a draft invoice",
      src: "/images/takkada-import-pdf.png",
    },
    {
      title: "GST invoicing",
      detail: "Line items with HSN and GST split, e-invoice / e-way bill actions, share over WhatsApp",
      src: "/images/takkada-invoice-detail.png",
    },
    {
      title: "Admin & revenue ops",
      detail: "Partner workspace: payouts, commissions, targets, dealer tiers",
      src: "/images/takkada-admin.png",
    },
  ],
  ownership: [
    {
      title: "App surface",
      detail: "Flutter client flows for registers, parties, vouchers, imports, reminders, reports, and mobile-first operations.",
    },
    {
      title: "Backend core",
      detail: "Supabase Edge Functions, PostgreSQL schema, RLS-aware services, voucher state, and integration contracts.",
    },
    {
      title: "Admin and ops",
      detail: "Next.js CRM for partner/admin workflows, plan controls, assisted customer setup, and production support paths.",
    },
    {
      title: "Tally connector",
      detail: "Desktop sync layer with IPC control, connection testing, company selection, incremental export, and status monitoring.",
    },
  ],
  proofTrail: [
    {
      title: "Standalone accounting core",
      detail: "Backend migration arc replaced inherited table/RPC assumptions with app-native voucher families, register periods, bill-wise settlement, ageing, analytics, and financial-statement surfaces.",
    },
    {
      title: "Voucher and compliance workflows",
      detail: "App and backend commits added GRN/Receipt Note, stock journals, GST return exports, e-invoice/e-way bill tables, invoice-detail columns, PDF rendering, and WhatsApp delivery paths.",
    },
    {
      title: "Access, tenant safety, and gates",
      detail: "RBAC work covered voucher-type grants, restricted-member behavior, tenant-write guards, license checks, feature gates, granular permission fallbacks, and safer deployment targets.",
    },
    {
      title: "Admin revenue operations",
      detail: "Admin dashboard commits added MD rate cards, usage views, assisted customer creation, wallet reconciliation, partner/dealer tier controls, onboarding caps, and production Cloudflare deployment constraints.",
    },
    {
      title: "Tally loader reliability",
      detail: "Loader work covered IPC sync control, GRN/Material In-Out writeback, resumable first sync, checkpoints, per-company last-run status with a live syncing overlay, queue-scoped wait-instead-of-skip scheduling, and SSRF/path-traversal hardening of the download path.",
    },
    {
      title: "Customer-facing automation",
      detail: "Delivery paths included public buyer orders, payment links, WhatsApp own-number onboarding, template status trails, attached-PDF template provisioning, and polished failure messaging.",
    },
  ],
} as const

export const featuredRepos = [
  {
    title: "Durable Workflow Engine",
    language: "Go",
    detail: "Durable execution · leases · recovery",
    href: "https://github.com/Tyagiquamar/durablego",
    animation: "workflow",
  },
  {
    title: "Durable MCP Tool Server",
    language: "Go",
    detail: "Fencing tokens · self-driving demo",
    href: "https://github.com/Tyagiquamar/durablemcp",
    animation: "mcp",
  },
  {
    title: "PostgreSQL CDC Platform",
    language: "Go",
    detail: "WAL · checkpoints · replay",
    href: "https://github.com/Tyagiquamar/relaydb",
    animation: "cdc",
  },
] as const

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "C++", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    skills: ["gRPC", "REST", "Node.js", "Express", "FastAPI"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Infrastructure / Cloud",
    skills: ["Docker", "AWS", "Cloudflare", "Railway", "Vercel", "Nginx", "Minikube"],
  },
  {
    title: "Engineering",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Distributed systems concepts",
      "API design",
    ],
  },
] as const
export type SkillGroup = (typeof skillGroups)[number]

