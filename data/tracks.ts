export type EngineeringTrack = "systems" | "quant" | "fullstack"

export const tracks: Record<
  EngineeringTrack,
  {
    slug: EngineeringTrack
    href: `/${EngineeringTrack}`
    navLabel: string
    title: string
    kicker: string
    summary: string
    homeNote: string
  }
> = {
  systems: {
    slug: "systems",
    href: "/systems",
    navLabel: "Systems",
    title: "Backend & Systems",
    kicker: "Primary track",
    summary:
      "Durable execution, change-data capture, and crypto-infra indexing — Go, PostgreSQL, failure scenes, and proof.",
    homeNote: "Distributed systems, leases, checkpoints, and crash recovery.",
  },
  quant: {
    slug: "quant",
    href: "/quant",
    navLabel: "Quant",
    title: "Quant / Trading & Performance",
    kicker: "Market systems",
    summary:
      "Market-data correctness, paper execution, and deterministic replay — not live-money trading.",
    homeNote: "Order books, execution simulation, and performance engineering.",
  },
  fullstack: {
    slug: "fullstack",
    href: "/fullstack",
    navLabel: "Full-Stack",
    title: "Full-Stack & Product",
    kicker: "Product engineering",
    summary:
      "Production product work: workflows, auth, realtime, and the surfaces people actually use.",
    homeNote: "Product ownership across app, API, and production operations.",
  },
}

export const trackOrder: EngineeringTrack[] = ["systems", "quant", "fullstack"]
