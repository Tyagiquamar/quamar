export const siteConfig = {
  name: "Mohd Quamar Tyagi",
  title: "Mohd Quamar Tyagi — Founding Engineer @ Takkada",
  description:
    "Founding Engineer at Takkada building PaySaathi, a standalone Tally-replacement accounting & ERP platform used by 112 businesses. Previously SDE-1 at Zomato. Candidate Master on Codeforces (2038), top 0.6% on LeetCode.",
  url: "https://quamar.vercel.app",
  email: "mohdquamartyagi@gmail.com",
  phone: "+91-8279581337",
  location: "New Delhi, India",
} as const

export const socials = [
  { label: "GitHub", href: "https://github.com/Tyagiquamar", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mohd-quamar-tyagi", icon: "linkedin" },
  { label: "Email", href: "mailto:mohdquamartyagi@gmail.com", icon: "mail" },
] as const
export type Social = (typeof socials)[number]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  name: "Mohd Quamar Tyagi",
  role: "Founding Engineer @ Takkada",
  tagline:
    "Building PaySaathi — a standalone Tally-replacement accounting & ERP platform used by 112 businesses. Previously SDE-1 at Zomato. Candidate Master on Codeforces.",
  photo: "/images/profile-rose.jpg",
} as const

export const stats = [
  { value: "5x", label: "p90 latency improvement" },
  { value: "112", label: "Businesses run their books on it" },
  { value: "2038", label: "Codeforces · Candidate Master" },
  { value: "2400+", label: "LeetCode · Guardian · Top 0.6%" },
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
  { label: "Zomato", detail: "SDE-1", logo: "/logos/zomato-logo.jpg" },
  { label: "Linux Foundation", detail: "SDE intern", logo: "/logos/linux-foundation-logo.jpg" },
  { label: "Codeforces", detail: "2038 CM", logo: "/logos/codeforces-logo.png" },
  { label: "LeetCode", detail: "Guardian · 2400+", logo: "/logos/leetcode-logo.png" },
]

export const about = {
  heading: "Systems over demos.",
  body: "I'm a Founding Engineer at Takkada, where I'm building PaySaathi across Flutter, Supabase, PostgreSQL, Edge Functions, and admin tooling. Previously an SDE-1 at Zomato optimizing high-scale CX services in Go, and an SDE Intern at The Linux Foundation working on gRPC and containerized microservices. I'm a Candidate Master on Codeforces and ranked top 0.6% on LeetCode.",
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
    dates: "May 2026 — Present",
    logo: "/logos/takkada-icon.png",
    current: true,
    bullets: [
      "Building PaySaathi end-to-end as the first engineer across Flutter, Supabase, PostgreSQL, Edge Functions, Next.js admin tooling, Tally connector paths, integrations, and production infrastructure",
      "Rebuilt standalone accounting surfaces across app and backend: voucher-family schemas, register RPCs, bill-wise settlements, ageing/analytics, financial statements, journal/note/FY flows, and line-money contracts",
      "Shipped production workflows for GRN/Receipt Note, stock journals, purchase/credit/debit note lines, GST return exports, e-invoice/e-way bill enablement, invoice PDFs, and WhatsApp delivery",
      "Hardened access and operations through RBAC/voucher-type grants, tenant-write guards, license/feature gates, partner tier controls, assisted onboarding, and admin wallet/payment reconciliation",
      "Improved sync and reliability edges across Tally loader behavior, own-number WhatsApp onboarding, public buyer order flow, error states, report assertions, and deployment fences",
    ],
    tech: ["Flutter", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
  },
  {
    role: "SDE-1",
    company: "Zomato",
    location: "Gurgaon, India",
    dates: "Jul 2025 — Dec 2025",
    logo: "/logos/zomato-logo.jpg",
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
    dates: "Nov 2023 — Mar 2024",
    logo: "/logos/linux-foundation-logo.jpg",
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
    "A production accounting & ERP platform built end-to-end as founding engineer at Takkada. Now used by 112 businesses, with 603K+ vouchers mirrored and 172K receipts in production. Native double-entry accounting core in PostgreSQL, filing-ready GST compliance (GSTR-1/GSTR-3B GSTN JSON export, e-invoice, e-way bill), WhatsApp Business automation, and an AI document-import pipeline — replacing Tally workflows for real businesses.",
  growthNote: "Grew from 87 → 112 businesses in five weeks (Jul–Aug 2026); 81 joined in the last 90 days.",
  metrics: ["600K+ vouchers synced", "172K receipts", "Founding Engineer", "Production ERP"],
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
      title: "Product & traction",
      detail: "Live marketing site and mobile app — real businesses, real receivables",
      src: "/images/takkada-landing.png",
    },
    {
      title: "App home",
      detail: "Receivables, payables, daybook, PDF import, bank import, reminders",
      src: "/images/takkada-home.png",
    },
    {
      title: "AI document import",
      detail: "Supplier invoice PDF → extracted line items, supplier, and totals for review",
      src: "/images/takkada-import-pdf.png",
    },
    {
      title: "GST invoicing",
      detail: "Line items with HSN and GST split, e-invoice / e-way bill actions, share over WhatsApp",
      src: "/images/takkada-invoice-detail.png",
    },
    {
      title: "Admin & revenue ops",
      detail: "Partner wallet, pipeline, targets, dealer tiers, assisted onboarding",
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
      detail: "Loader work covered IPC sync control, GRN writeback, export report cleanup, foreground/busy detection, resumable first sync, checkpoints, response byte ceilings, and terminal-state guarantees.",
    },
    {
      title: "Customer-facing automation",
      detail: "Delivery paths included public buyer orders, payment links, WhatsApp own-number onboarding, template status trails, attached-PDF template provisioning, and polished failure messaging.",
    },
  ],
} as const

export interface Project {
  title: string
  kind: "case-study" | "repo"
  description: string
  tech: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: "DurableGo",
    kind: "repo",
    description:
      "Durable workflow engine with leases, fencing tokens, idempotent starts, retry recovery, event history, and failure-proof scenes.",
    tech: ["Go", "PostgreSQL", "Workers"],
    href: "https://github.com/Tyagiquamar/durablego",
  },
  {
    title: "QuantXecute",
    kind: "repo",
    description:
      "Real-time trade-cost estimator for crypto futures — streams OKX Level 2 orderbook data over WebSocket and models execution costs in C++.",
    tech: ["C++", "WebSocket", "Orderbook"],
    href: "https://github.com/Tyagiquamar/QuantXecute",
  },
  {
    title: "AI Interviewer Agent",
    kind: "repo",
    description:
      "Structured AI interviewer — conducts technical interviews over chat, enforces coverage, and generates transcript-grounded hiring evaluation reports.",
    tech: ["Next.js", "TypeScript", "Gemini", "Supabase"],
    href: "https://github.com/Tyagiquamar/ai-interviewer-agent",
  },
  {
    title: "NexLink",
    kind: "repo",
    description:
      "URL shortener with real-time analytics — click tracking, geographic and referrer data, custom aliases, and QR sharing.",
    tech: ["Next.js", "MongoDB", "Analytics"],
    href: "https://github.com/Tyagiquamar/NexLink-URL-Shortener",
  },
]

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "TypeScript", "C++", "Python", "Dart", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Platforms",
    skills: ["Flutter", "Next.js", "React", "Node.js", "gRPC", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Supabase", "Docker", "AWS", "GitHub Actions", "Vercel", "Nginx", "Linux"],
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
      "Authentication & Authorization",
      "Event-driven Workflows",
      "Observability",
      "Distributed Systems",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
] as const
export type SkillGroup = (typeof skillGroups)[number]
