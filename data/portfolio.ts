export const siteConfig = {
  name: "Mohd Quamar Tyagi",
  title: "Mohd Quamar Tyagi — Founding Engineer @ Takkada",
  description:
    "Founding Engineer at Takkada building PaySaathi, a standalone Tally-replacement accounting & ERP platform. Previously SDE-1 at Zomato. Candidate Master on Codeforces (2038), top 0.6% on LeetCode.",
  url: "https://v0-competitive-programmer-portfolio.vercel.app",
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
    "Building PaySaathi — a standalone Tally-replacement accounting & ERP platform. Previously SDE-1 at Zomato. Candidate Master on Codeforces.",
  photo: "/images/profile-rose.jpg",
} as const

export const stats = [
  { value: "1+", label: "Years of experience" },
  { value: "1,000+", label: "Commits @ Takkada" },
  { value: "2038", label: "Codeforces · Candidate Master" },
  { value: "2400+", label: "LeetCode · Top 0.6%" },
] as const
export type Stat = (typeof stats)[number]

export const about = {
  heading: "About",
  body: "I'm a Founding Engineer at Takkada, where I'm building PaySaathi — a standalone accounting and ERP platform that replaces Tally — across Flutter, Supabase, PostgreSQL, and Next.js. Previously an SDE-1 at Zomato optimizing high-scale CX services in Go, and an SDE Intern at The Linux Foundation working on gRPC and containerized microservices. I'm a Candidate Master on Codeforces and ranked top 0.6% on LeetCode.",
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
    current: true,
    bullets: [
      "Building PaySaathi, a standalone Tally-replacement accounting & ERP platform, end-to-end as first engineer — 1,000+ commits, lakhs of LOC in 4 months across Flutter app, Supabase backend, and Next.js admin dashboard",
      "Engineered the native double-entry accounting core in PostgreSQL: ledgers, voucher numbering, GRN/stock receipts, credit notes, payment/receipt allocations — eliminating Tally dependency",
      "Built filing-ready GST compliance: GSTR-1/GSTR-3B GSTN JSON export, e-invoice/e-way bill, PDF generation",
      "Shipped WhatsApp Business automation (template provisioning, approval reconciliation, per-template routing) and an AI document-import pipeline (Gemini/Vertex)",
    ],
    tech: ["Flutter", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
  },
  {
    role: "SDE-1",
    company: "Zomato",
    location: "Gurgaon, India",
    dates: "Jul 2025 — Dec 2025",
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
    bullets: [
      "Replaced HTTPS calls with gRPC architecture, achieving 60% faster data transfer",
      "Implemented CloudForet development images supporting 50+ microservices",
      "Streamlined development lifecycle with advanced container orchestration",
    ],
    tech: ["Docker", "Nginx", "gRPC", "Linux", "Minikube"],
  },
  {
    role: "SDE Intern",
    company: "ITJOBS",
    location: "Mumbai, Maharashtra",
    dates: "Jul 2023 — Sep 2023",
    bullets: [
      "Redesigned 12 core web pages ensuring accessibility compliance",
      "Designed automated bot detection removing 2,000+ inappropriate posts",
      "Deployed reCAPTCHA improving data integrity for 10,000+ monthly visitors",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
]

export const caseStudy = {
  id: "case-study",
  title: "PaySaathi",
  subtitle: "Standalone Tally-Replacement ERP",
  description:
    "A production accounting & ERP platform built end-to-end as founding engineer at Takkada. Native double-entry accounting core in PostgreSQL, filing-ready GST compliance (GSTR-1/GSTR-3B GSTN JSON export, e-invoice, e-way bill), WhatsApp Business automation, and an AI document-import pipeline — replacing Tally for real businesses.",
  metrics: ["1,000+ commits", "~180k LOC", "4 months", "Founding Engineer"],
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
    title: "PaySaathi",
    kind: "case-study",
    description:
      "Standalone Tally-replacement accounting & ERP — double-entry PostgreSQL core, GST filing, WhatsApp automation, AI document import.",
    tech: ["Flutter", "Supabase", "PostgreSQL"],
    href: "#case-study",
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
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "SDLC", "Computer Networks"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
] as const
export type SkillGroup = (typeof skillGroups)[number]
