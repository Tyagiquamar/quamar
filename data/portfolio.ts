export const siteConfig = {
  name: "Mohd Quamar Tyagi",
  title: "Mohd Quamar Tyagi · Founding Engineer @ Takkada",
  description:
    "Founding Engineer at Takkada building PaySaathi, a standalone Tally-replacement accounting & ERP platform with 139 businesses onboarded. Previously SDE-1 at Zomato. Candidate Master on Codeforces (2038), top 0.6% on LeetCode.",
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
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
] as const

export const hero = {
  name: "Mohd Quamar Tyagi",
  role: "Founding Engineer @ Takkada",
  tagline:
    "Building PaySaathi, a standalone Tally-replacement accounting & ERP platform with 139 businesses onboarded. Previously SDE-1 at Zomato. Candidate Master on Codeforces.",
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
  { label: "Takkada", detail: "Founding engineer", logo: "/logos/takkada-icon.png" },
  { label: "Zomato", detail: "SDE-1", logo: "/logos/zomato-logo.png" },
  { label: "Linux Foundation", detail: "SDE intern", logo: "/logos/linux-foundation-logo.png" },
  { label: "Codeforces", detail: "2038 CM", logo: "/logos/codeforces-logo.png" },
  { label: "LeetCode", detail: "Guardian · 2400+", logo: "/logos/leetcode-logo.png" },
]

export const about = {
  heading: "Systems over demos.",
  body: "I got into engineering through competitive programming. Years of Codeforces rounds taught me to reason about correctness and complexity before writing a line of code. That habit stuck: I'm drawn to systems where getting it wrong is expensive, which is how I ended up building accounting software. Money, ledgers, GST filings: correctness isn't a nice-to-have, it's the product. Outside of work I still do CP rounds, tinker with systems projects in Go and C++, and care a lot about the craft of shipping software that real people depend on every day.",
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
    detail: "Top 0.6% globally",
    href: "https://leetcode.com/u/Altair_4/",
  },
  {
    platform: "CodeChef",
    rating: "5★ · 2017",
    detail: "5-star rating",
    href: "https://www.codechef.com/users/tyagiquamar",
  },
] as const
export type CpProfile = (typeof cpProfiles)[number]

export interface Experience {
  role: string
  company: string
  location: string
  dates: string
  logo?: string
  mark?: string
  current?: boolean
  bullets: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: "Founding Engineer",
    company: "Takkada",
    location: "Remote",
    dates: "May 2026 - Present",
    logo: "/logos/takkada-icon.png",
    current: true,
    bullets: [
      "Building PaySaathi end-to-end as the first engineer across Flutter, Supabase, PostgreSQL, Edge Functions, Next.js admin tooling, Tally connector paths, integrations, and production infrastructure",
      "Rebuilt standalone accounting surfaces across app and backend: voucher-family schemas, register RPCs, bill-wise settlements, ageing/analytics, financial statements, journal/note/FY flows, and line-money contracts",
      "Shipped production workflows for GRN/Receipt Note, stock journals, purchase/credit/debit note lines, GST return exports, e-invoice/e-way bill enablement, invoice PDFs, and WhatsApp delivery",
      "Hardened access and operations through RBAC/voucher-type grants, tenant-write guards, license/feature gates, partner tier controls, assisted onboarding, and admin wallet/payment reconciliation",
      "Improved sync performance and reliability: statement-level rewrite of hot sales-invoice aggregate triggers, fresh-before-retry tally job claiming, per-company sync status in the Tally loader, and hardened auth/payment boundaries",
    ],
    tech: ["Flutter", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
  },
  {
    role: "RLHF Trainer",
    company: "Caudal AI",
    location: "Contract · Remote",
    dates: "Apr 2026 - Present",
    current: true,
    bullets: [
      "Evaluate coding-agent and LLM outputs against detailed specifications, tests, expected behavior, and scoring rubrics",
      "Review model-generated patches and technical reasoning for functional correctness, regressions, edge cases, and instruction compliance",
      "Produce structured preference/corrective feedback for RLHF workflows while analyzing recurring model failure modes and improving evaluation consistency through reproducible verification",
    ],
    tech: ["RLHF", "LLM Evaluation", "Coding Agents", "Code Review", "Rubric Evaluation"],
  },
  {
    role: "SDE-1",
    company: "Zomato",
    location: "Gurgaon, India",
    dates: "Jul 2025 - Dec 2025",
    logo: "/logos/zomato-logo.png",
    bullets: [
      "Reduced API round-trip overhead by removing redundant gRPC/MySQL calls, improving p90 latency 5x at massive scale",
      "Automated ticket workflows and chatbot link-ticket generation, cutting manual ops by 80% and reducing support load by 35%",
      "Integrated external CX platforms (Zendesk, Freshdesk) with ticketing, data-sync, and callback handling",
    ],
    tech: ["Golang", "gRPC", "MySQL", "MongoDB"],
  },
  {
    role: "SDE Intern",
    company: "The Linux Foundation",
    location: "Seoul (Remote)",
    dates: "Nov 2023 - Mar 2024",
    logo: "/logos/linux-foundation-logo.png",
    bullets: [
      "Replaced HTTPS calls with gRPC architecture, achieving 60% faster data transfer",
      "Implemented CloudForet development images supporting 50+ microservices",
      "Streamlined development lifecycle with advanced container orchestration",
    ],
    tech: ["Docker", "Nginx", "gRPC", "Linux", "Minikube"],
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
      detail: "Live product marketing site — real businesses, real receivables",
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
    skills: ["Go", "TypeScript", "C++", "Python", "Dart", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Platforms",
    skills: ["Flutter", "Next.js", "React", "Node.js", "gRPC"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Supabase", "Docker", "AWS", "GitHub Actions", "Vercel"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Backend & Systems",
    skills: [
      "API Design",
      "Database Design",
      "Event-driven Workflows",
      "Distributed Systems",
    ],
  },
] as const
export type SkillGroup = (typeof skillGroups)[number]
