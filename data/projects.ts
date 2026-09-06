import type { EngineeringTrack } from "@/data/tracks"

export type ProjectTrack = EngineeringTrack

export const trackLabels: Record<ProjectTrack, string> = {
  systems: "Backend & Systems",
  quant: "Quant / Trading & Performance",
  fullstack: "Full-Stack & Product",
}

/** @deprecated Use trackLabels. Kept for existing imports during the IA pass. */
export const categoryLabels = trackLabels

export interface ProjectVisual {
  src: string
  alt: string
}

export interface CaseStudyBlock {
  title: string
  detail: string
}

export interface CaseStudyScreenshot {
  title: string
  detail: string
  src: string
}

export interface ProjectCaseStudy {
  headline: string
  problem: string
  built: CaseStudyBlock[]
  decisions: CaseStudyBlock[]
  testing: string
  architecture?: {
    image?: string
    caption: string
  }
  screenshots?: CaseStudyScreenshot[]
  background?: {
    heading: string
    body: string
  }
}

export interface Project {
  slug: string
  title: string
  track: ProjectTrack
  priority: number
  showOnHome: boolean
  featured: boolean
  additional?: boolean
  secondaryTags?: string[]
  descriptor: string
  description: string
  tech: string[]
  github: string
  liveHref?: string
  liveLabel?: string
  visual?: ProjectVisual
  caseStudy?: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    slug: "parseflow",
    title: "ParseFlow AI",
    track: "fullstack",
    priority: 1,
    showOnHome: true,
    descriptor: "AI document review & compliance workflow",
    description:
      "Extracts invoices, POs and receipts with per-field confidence and char-accurate provenance, evaluates them against versioned compliance rules, and routes to humans only when policy says so.",
    tech: ["Next.js", "Fastify", "PostgreSQL", "Backblaze B2", "Gemini"],
    featured: true,
    github: "https://github.com/Tyagiquamar/parseflow-ai",
    liveHref: "https://parseflow-ai.vercel.app",
    liveLabel: "Live app",
    visual: {
      src: "/images/parseflow-review-workspace.png",
      alt: "ParseFlow review workspace: source document text with provenance highlighting beside editable extracted fields",
    },
    caseStudy: {
      headline: "AI review and compliance workflow for unstructured business documents",
      problem:
        "Invoices, purchase orders, receipts and vendor quotes arrive as unstructured documents. Reviewing them manually is slow, and letting a model decide compliance silently is unacceptable: every automated decision needs evidence a human can audit.",
      built: [
        {
          title: "Document pipeline",
          detail:
            "OCR/text → classification → schema-constrained extraction with per-field {value, confidence, provenance} → built-in cross-field validation → duplicate detection → routing.",
        },
        {
          title: "Compliance rule engine",
          detail:
            "Rules (field_required, numeric_threshold, allowed_value, date_relationship, total_arithmetic) live in versioned rule sets; exactly one version is active per organization and only approved rules execute. Violations surface with the offending field evidence.",
        },
        {
          title: "AI rule proposals",
          detail:
            "Paste a policy and the generator drafts structured rules with verbatim source excerpts. Proposals stay inert until a human approves them and a set version is activated. Model output can never silently change compliance behavior.",
        },
        {
          title: "Human review console",
          detail:
            "Source text with provenance highlighting beside editable fields; corrections preserve original_value, validations re-run at approval time, and an immutable audit feed records every decision per document and org-wide.",
        },
        {
          title: "Multi-tenancy + RBAC",
          detail:
            "Org-scoped rows and queries with a capability matrix enforced server-side and mirrored in the UI.",
        },
      ],
      decisions: [
        {
          title: "Deterministic by default",
          detail:
            "A heuristic provider needs no API keys and runs the full pipeline offline; a strict-schema LLM provider (Gemini) is a drop-in. Review and CI never depend on a model's mood.",
        },
        {
          title: "Human-in-the-loop over automation",
          detail:
            "Per-org review policy sets an auto-approve confidence floor, warning blocking, and high-value human review. The model proposes; policy and humans dispose.",
        },
        {
          title: "Provenance as a first-class field",
          detail:
            "Every extracted value carries a char-accurate pointer into the source text, so a reviewer can verify a field in one glance instead of trusting the extraction.",
        },
        {
          title: "Hand-rolled SigV4 object storage",
          detail:
            "Documents persist to S3-compatible storage (MinIO locally, Backblaze B2 in production) through a hand-rolled SigV4 signer. No SDK dependency sits at the storage boundary.",
        },
      ],
      testing:
        "A 36-document synthetic eval corpus gates extraction quality, with Vitest unit and integration suites covering security properties including prompt-injection handling and cross-tenant isolation. Deployed as Next.js on Vercel, Fastify on Render, Aiven PostgreSQL, Backblaze B2.",
      screenshots: [
        {
          title: "Review workspace",
          detail: "Source text with provenance highlighting beside editable extracted fields and confidence bars",
          src: "/images/parseflow-review-workspace.png",
        },
        {
          title: "Rule violations",
          detail: "Compliance violations surface with the offending field evidence",
          src: "/images/parseflow-rule-violation.png",
        },
      ],
    },
  },
  {
    slug: "durablego",
    title: "DurableGo",
    track: "systems",
    priority: 1,
    showOnHome: true,
    descriptor: "Durable workflow engine in Go",
    description:
      "PostgreSQL-backed durable workflow engine with lease/fencing semantics and idempotent starts. Failure scenes SIGKILL workers mid-execution and prove stale completions are rejected (409) through the API.",
    tech: ["Go", "PostgreSQL", "testcontainers", "Next.js"],
    featured: true,
    github: "https://github.com/Tyagiquamar/durablego",
    liveHref: "https://durablego-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    visual: {
      src: "/images/durablego-dashboard.png",
      alt: "DurableGo read-only operations dashboard showing execution totals, active leases and failure scenes",
    },
    caseStudy: {
      headline: "A small, inspectable durable-workflow engine",
      problem:
        "Background work is easy to start and hard to finish correctly: workers crash mid-execution, retries double-apply side effects, and an old worker resuming after its lease was reclaimed can silently overwrite newer state. DurableGo makes those failure modes visible and provably handled.",
      built: [
        {
          title: "Workflow engine",
          detail:
            "An application starts a workflow of dependency-aware activities. DurableGo persists the workflow, leases ready activities to workers, records every state transition, and uses fencing tokens to stop an older worker from overwriting a newer claim.",
        },
        {
          title: "Lease + fencing-token claims",
          detail:
            "Every claim carries a lease owner and a monotonically increasing fencing token. Stale heartbeats, completions and failures are rejected after a newer claim; the scheduler returns abandoned or retry-pending work to the ready queue.",
        },
        {
          title: "Idempotent starts",
          detail:
            "Reusing a namespace and idempotency key returns the original workflow instead of creating a duplicate.",
        },
        {
          title: "Read-only proof dashboard",
          detail:
            "A Next.js console distinguishes deterministic Demo evidence from an unavailable, empty, partial or populated Live API response. It never replaces an unavailable response with fixture data.",
        },
      ],
      decisions: [
        {
          title: "At-least-once, stated plainly",
          detail:
            "Activities execute at least once, not exactly once. A side effect can be attempted again after a crash, so applications supply their own idempotency key for an external charge, email or write. The engine's job is to make its own state transitions safe and explainable.",
        },
        {
          title: "PostgreSQL as the persistence contract",
          detail:
            "Workflow state, activity leases, idempotency keys and event history all live in PostgreSQL, so every guarantee is traceable from database state through ordered events into the API.",
        },
        {
          title: "Failure scenes as the product",
          detail:
            "Automated scenes SIGKILL workers mid-execution and drive crash recovery, stale fencing, duplicate starts and retry exhaustion. The proof is the point, not an afterthought.",
        },
      ],
      testing:
        "go test ./... with testcontainers; race detector runs under CGO_ENABLED=1 with a C toolchain via the Makefile. Deployed live as a single all-in-one container (API, scheduler, two workers, demo traffic driver) on free-tier hosting with Neon Postgres, dashboard on Vercel.",
      screenshots: [
        {
          title: "Operations dashboard",
          detail: "Execution totals, ready work, active leases and failure scenes for crash recovery, stale fencing, duplicate starts and retry exhaustion",
          src: "/images/durablego-dashboard.png",
        },
      ],
    },
  },
  {
    slug: "supportpilot",
    title: "SupportPilot AI",
    track: "fullstack",
    priority: 2,
    showOnHome: false,
    descriptor: "Supervised AI support operations",
    description:
      "Traced agent pipeline: injection scan, intent classification, grounded cited drafts, and financial write actions queued behind an explicit human approval gate. Not a chatbot; a supervised ops system.",
    tech: ["Next.js", "PostgreSQL", "pgvector", "Gemini"],
    featured: true,
    github: "https://github.com/Tyagiquamar/supportpilot",
    liveHref: "https://supportpilot.vercel.app",
    liveLabel: "Live demo",
    visual: {
      src: "/images/supportpilot-ticket-workspace.png",
      alt: "SupportPilot ticket workspace showing a drafted cited reply and queued write-action proposals awaiting approval",
    },
    caseStudy: {
      headline: "Supervised AI support operations with human-approved write actions",
      problem:
        "AI support tooling fails in two directions: ungrounded answers that invent policy, and agents that take financial actions nobody approved. SupportPilot treats the model as an untrusted drafter inside a supervised ops system with deterministic evaluation.",
      built: [
        {
          title: "Traced agent pipeline",
          detail:
            "Every ticket runs injection scan → 13-intent classification with calibrated confidence → context retrieval (lookup_order, check_inventory, search_policy) → grounded drafting → action proposal → confidence scoring.",
        },
        {
          title: "Grounded drafting with a post-check",
          detail:
            "The model must cite evidence inline as [POL:REF-101] / [ORD:ORD-21001]; a post-check extracts every amount, date, duration and code in the draft and flags anything not traceable to evidence.",
        },
        {
          title: "Human approval gate",
          detail:
            "WRITE-tier tools (refund_preview, cancel_order_preview) are blocked from auto-run and queued as proposals only. Approving computes a pure-math preview and records an audit event; executing is admin-only and confirm-gated. No funds ever move.",
        },
        {
          title: "Policy retrieval",
          detail:
            "Tagged policy chunks searched by pgvector cosine similarity with a lexical overlap boost, transparently falling back to deterministic in-process hashing embeddings when the extension or column is unavailable.",
        },
        {
          title: "RBAC capability map",
          detail:
            "Server-side enforcement: agent can draft/reject, senior_agent can approve, admin can execute and run evals. The approval state machine rejects double decisions (409) and refuses execution before approval.",
        },
      ],
      decisions: [
        {
          title: "Injection containment by construction",
          detail:
            "Untrusted customer text is pattern-scanned and delimited; flagged tickets run in safe mode with zero write proposals, turning prompt injection from a data-integrity risk into a routing decision.",
        },
        {
          title: "Evaluation before vibes",
          detail:
            "36 seeded cases across 13 intents plus 3 prompt-injection fixtures, scored by deterministic graders (intent match, actions correct, no auto-execution, citations present, all claims grounded, injection contained) with an LLM rubric judge grading tone separately.",
        },
        {
          title: "No financial rails by design",
          detail:
            "ALLOW_REAL_EXECUTION=false: execution is recorded as executed_simulated. The demo proves the supervision model without needing real money to move.",
        },
      ],
      testing:
        "Deterministic eval harness (task success, wrong-action rate, unsupported claim rate, cost per case, p50/p95 latency, tone) reproducible offline with the mock provider; runs persist to eval_runs. Postgres 17 + pgvector.",
      screenshots: [
        {
          title: "Ticket workspace",
          detail: "Grounded draft with inline evidence citations beside the customer thread",
          src: "/images/supportpilot-ticket-workspace.png",
        },
        {
          title: "Approval gate",
          detail: "Write actions queued as proposals; approval computes a pure-math preview and records an audit event",
          src: "/images/supportpilot-approval-gate.png",
        },
        {
          title: "Injection safe mode",
          detail: "Flagged tickets run with write tools disabled and SEC-901 cited",
          src: "/images/supportpilot-injection-safe-mode.png",
        },
      ],
    },
  },
  {
    slug: "relaydb",
    title: "RelayDB",
    track: "systems",
    priority: 2,
    showOnHome: true,
    descriptor: "PostgreSQL CDC platform in Go",
    description:
      "Change-data-capture from the Postgres WAL: pgoutput decoding with TOAST awareness, idempotent replay per source transaction, and fenced LSN checkpoints proven by crash-replay testcontainers suites.",
    tech: ["Go", "pgoutput", "gRPC", "HMAC webhooks", "Next.js"],
    featured: true,
    github: "https://github.com/Tyagiquamar/relaydb",
    liveHref: "https://relaydb-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    visual: {
      src: "/images/relaydb-architecture.svg",
      alt: "RelayDB pipeline: source PostgreSQL WAL via pgoutput into capture, persisted with fenced checkpoints, then API, dashboard and webhook delivery",
    },
    caseStudy: {
      headline: "Change data capture that can prove what it delivered",
      problem:
        "Databases change and everything downstream finds out late: caches drift, search indexes fall behind, invoices wait on batch jobs. Polling misses deletes and double-reads race transactions, and nobody can prove what was delivered, or to whom.",
      built: [
        {
          title: "WAL capture with pgoutput",
          detail:
            "Reads committed changes from a PostgreSQL publication through pgoutput logical decoding, with TOAST awareness for unchanged large values.",
        },
        {
          title: "The capture invariant",
          detail:
            "Capture persists the transaction's normalized events and advances the metadata checkpoint in one transaction. Only after that commit may capture report the flushed LSN back to PostgreSQL. A crash before acknowledgement replays WAL without creating a second durable event identity.",
        },
        {
          title: "Fenced checkpoints and consumers",
          detail:
            "Lease generation is the fencing boundary for consumer ownership: an old owner cannot advance a newer owner's cursor. Checkpoints are fenced so a standby capture cannot double-deliver.",
        },
        {
          title: "Delivery and operations surface",
          detail:
            "HMAC-signed webhook delivery with an SSRF-guarded dialer, dead letters, replay cursors, a relayctl CLI, REST + gRPC APIs, and a Next.js control room with explicit Live/Demo data modes.",
        },
      ],
      decisions: [
        {
          title: "At-least-once ingestion, honestly",
          detail:
            "RelayDB claims at-least-once ingestion, not exactly-once side effects. The safety boundary is the metadata transaction; downstream consumers use their own idempotency keys.",
        },
        {
          title: "The dashboard never fakes it",
          detail:
            "Live mode never substitutes fixtures when the API is unavailable or empty. Unavailable reads stay visibly unavailable. Demo mode is opt-in deterministic evidence, clearly labeled.",
        },
        {
          title: "Keys stay server-side",
          detail:
            "The reader API key lives in the dashboard's server-side BFF proxy; browser code calls same-origin /api/v1/* and never receives the key.",
        },
      ],
      testing:
        "Testcontainers suites prove ordered capture and crash-replay without loss or duplication. Go 1.26, PostgreSQL 16, Buf-managed protobufs; make fmt/vet/lint/test gate CI.",
      architecture: {
        image: "/images/relaydb-architecture.svg",
        caption:
          "Source PostgreSQL → pgoutput WAL → capture persists events + fenced checkpoint in one transaction → flushed LSN acknowledgement → API, control room, and HMAC-signed webhook delivery",
      },
    },
  },
  {
    slug: "chainforge",
    title: "ChainForge",
    track: "systems",
    priority: 3,
    showOnHome: true,
    descriptor: "Reorg-safe Ethereum event indexing",
    description:
      "Canonical-chain tracking with reorg detection, common-ancestor recovery, and HMAC webhook delivery. Finalized blocks are never silently rewritten.",
    tech: ["Go", "PostgreSQL", "testcontainers", "Prometheus", "HMAC webhooks"],
    featured: true,
    github: "https://github.com/Tyagiquamar/chainforge",
    visual: {
      src: "/images/chainforge-dashboard.png",
      alt: "ChainForge operator dashboard showing a labeled demo snapshot of reorg-safe indexing and delivery",
    },
    caseStudy: {
      headline: "Reorg-safe Ethereum event indexing and delivery infrastructure in Go",
      problem:
        "If a system tells a customer a deposit arrived based on a block that later gets orphaned, that is a correctness incident. Unfinalized chain data is provisional: parent-hash divergence, orphaned branches, and webhook fans-out all have to stay consistent after a reorg.",
      built: [
        {
          title: "Canonical-chain coordinator",
          detail:
            "A single writer ingests heads, detects parent-hash divergence, finds the common ancestor, orphans the dead branch and its events, then indexes the replacement, atomically with the checkpoint.",
        },
        {
          title: "Event lifecycle",
          detail:
            "Downstream deliveries are typed: event.created, event.confirmed, event.finalized, and event.removed for previously delivered non-finalized events on an orphaned branch.",
        },
        {
          title: "PostgreSQL invariants",
          detail:
            "At most one canonical block per height, parent continuity, and a halt if a reorg would rewrite finalized range instead of silently corrupting state.",
        },
        {
          title: "Delivery and backfill",
          detail:
            "HMAC-signed, idempotency-keyed webhooks with retries and a DLQ, SSRF-guarded URLs, Prometheus metrics, resumable/idempotent backfill, and RPC provider failover.",
        },
      ],
      decisions: [
        {
          title: "At-least-once delivery",
          detail:
            "Consumers must deduplicate. Stable event IDs are hashed from chain ID, block hash, tx hash, and log index. Finalized blocks are never rewritten.",
        },
        {
          title: "Deterministic fake RPC",
          detail:
            "Integration tests use an in-process Ethereum RPC and testcontainers Postgres, including a flagship reorg scene and restart-after-reorg convergence, without a live Ethereum dependency.",
        },
        {
          title: "Explicit demo vs live",
          detail:
            "The dashboard defaults to a labeled DEMO SNAPSHOT of a synthetic reorg. Switching to live RPC data is explicit and never automatic.",
        },
      ],
      testing:
        "go test ./... with testcontainers; race detector on the full suite. Coverage includes decode/HMAC/retry/SSRF unit tests plus depth-1/2 reorgs, MAX_REORG_DEPTH halt, backfill resume, webhook 500→DLQ, and finality monotonicity.",
      screenshots: [
        {
          title: "Operator dashboard",
          detail: "Labeled demo snapshot of indexing, reorg handling, and delivery, never implied to be mainnet data",
          src: "/images/chainforge-dashboard.png",
        },
      ],
    },
  },
  {
    slug: "apexbook",
    title: "ApexBook",
    track: "quant",
    priority: 1,
    showOnHome: true,
    descriptor: "Crypto execution and market-data engine",
    description:
      "Public Binance L2 data, snapshot/delta reconciliation, and a deterministic per-symbol paper matching engine. No real-money orders.",
    tech: ["Go", "PostgreSQL", "WebSocket", "Prometheus", "fixed-point int64"],
    featured: true,
    github: "https://github.com/Tyagiquamar/apexbook",
    visual: {
      src: "/images/apexbook-overview.png",
      alt: "ApexBook operator dashboard overview: feed health, paper orders, and system status",
    },
    caseStudy: {
      headline: "Crypto execution and market-data engine in Go: paper matching against public L2 data",
      problem:
        "A depth stream cannot be applied to an empty map. Missed or misordered updates silently corrupt the local book, and matching on top of that book is meaningless. ApexBook makes snapshot/delta reconciliation, determinism, and pre-trade risk inspectable. It does not place real-money orders.",
      built: [
        {
          title: "Snapshot/delta reconciliation",
          detail:
            "Buffer diffs, anchor on a REST snapshot, apply the bridging event, then require continuity. Any gap invalidates the book and forces a fresh snapshot. Stale events are discarded and counted.",
        },
        {
          title: "Per-symbol actor model",
          detail:
            "One goroutine owns mutable state. Commands enter a bounded FIFO queue. Map iteration never influences execution order. Identical command sequences produce byte-identical fills and positions.",
        },
        {
          title: "Paper matching",
          detail:
            "Price-time priority with LIMIT, MARKET, GTC, IOC, FOK, and post-only. Idempotent submissions. Pre-trade risk: kill switch, max notional, max quantity, max position.",
        },
        {
          title: "Persistence and surfaces",
          detail:
            "Append-only fills, derived positions, PostgreSQL recovery of open orders in engine_seq order, REST, WebSocket, Prometheus, and an operator dashboard with an explicit demo snapshot.",
        },
      ],
      decisions: [
        {
          title: "Fixed-point money",
          detail:
            "All prices and quantities are int64 at scale 1e8. float64 never touches an economic value.",
        },
        {
          title: "Honest durability window",
          detail:
            "Persistence is batched. A crash can lose accepted-but-unflushed events; that bound is documented rather than hidden.",
        },
        {
          title: "Measured benchmarks, not slogans",
          detail:
            "On Windows 11, i3-1315U, Go 1.26.5: ApplyLevel 28.3 ns/op (0 allocs), match single fill 1.24 µs/op, end-to-end driver 34,761 cmd/s with p99 997 µs. Reproduce with make bench.",
        },
      ],
      testing:
        "make test covers unit, API, WebSocket, and reconciliation without Docker. make test-race. make test-integration uses Postgres testcontainers including TestRestartRecovery. Property tests cover remaining ≥ 0, fill conservation, and canceled orders never filling.",
      screenshots: [
        {
          title: "Overview",
          detail: "Feed health, paper activity, and system status from the operator dashboard",
          src: "/images/apexbook-overview.png",
        },
        {
          title: "Order book",
          detail: "Local L2 book reconstructed from public Binance depth after snapshot/delta reconciliation",
          src: "/images/apexbook-orderbook.png",
        },
        {
          title: "Execution",
          detail: "Paper fills against the local book: simulated matching, not live exchange orders",
          src: "/images/apexbook-execution.png",
        },
      ],
    },
  },
  {
    slug: "crossvenue",
    title: "CrossVenue",
    track: "quant",
    priority: 2,
    showOnHome: false,
    descriptor: "Multi-venue market-data and execution simulation",
    description:
      "Binance, OKX, and Bybit feeds into local books, depth-aware VWAP, and non-atomic two-leg paper execution with inventory-aware risk. Not HFT and not a live gateway.",
    tech: ["Go", "PostgreSQL", "Prometheus", "Binance", "OKX", "Bybit"],
    featured: true,
    github: "https://github.com/Tyagiquamar/crossvenue",
    visual: {
      src: "/images/crossvenue-architecture.svg",
      alt: "CrossVenue pipeline: venue adapters into local books, opportunity engine, risk, and simulated two-leg execution",
    },
    caseStudy: {
      headline: "Multi-venue market-data and execution-simulation infrastructure",
      problem:
        "Cross-exchange “arbitrage” on best bid/ask is misleading. Venues have different sequence rules, two-leg execution is not atomic, and a restart must not resume trading from stale books. CrossVenue is a trading-systems project: simulated execution, no live funds, no profitability claims.",
      built: [
        {
          title: "Venue-specific market data",
          detail:
            "Binance, OKX, and Bybit adapters normalize into a shared event model while preserving each venue’s sequence/gap rules for local books.",
        },
        {
          title: "Depth-aware opportunity pricing",
          detail:
            "Opportunities are computed from observed depth (VWAP) after configurable fees, modeled slippage, and a latency penalty, not top-of-book spreads.",
        },
        {
          title: "Non-atomic two-leg simulation",
          detail:
            "Partial second-leg fills are first-class: residual directional exposure is journaled. Inventory-aware risk, stale quote rejection, daily loss limit, and a kill switch run before execution.",
        },
        {
          title: "Record, replay, recover",
          detail:
            "Same recording + config + seed produces identical books, executions, balances, PnL, and journal digest. Restart restores portfolio state; books resynchronize from fresh market data.",
        },
      ],
      decisions: [
        {
          title: "Three modes, one ingest path",
          detail:
            "live-market-sim (public WS, paper fills), synthetic, and replay share a single engine ingest path. ENABLE_LIVE_EXECUTION=true refuses to start rather than trade.",
        },
        {
          title: "Failure scenes as tests",
          detail:
            "Automated scenes cover sequence gap, venue disconnect, stale quote, partial second-leg fill, duplicate client order ID, restart, kill switch, and queue overload.",
        },
        {
          title: "Replay digest as proof",
          detail:
            "Verified locally on commit e9be5ea (Go 1.26.5, windows/amd64): two replay runs produced identical digest de7495fd8b25d9dbb66726d1bb5aac61045b23d5eef79b19ec0abddcfe87f33c. Benchmarks on the same machine: ApplyDelta 41.4 ns/op (0 allocs).",
        },
      ],
      testing:
        "go test ./... including integration and replay parity; go test -race; make verify (fmt, vet, staticcheck, tests, race, seed-42 replay, synthetic probe, failure scenes, docker build).",
      architecture: {
        image: "/images/crossvenue-architecture.svg",
        caption:
          "Venue adapters normalize Binance, OKX, Bybit, synthetic, and replay sources into per-book owner goroutines, then opportunity, risk, simulated execution, portfolio, and a PostgreSQL journal",
      },
    },
  },
  {
    slug: "quantxecute",
    title: "QuantXecute",
    track: "quant",
    priority: 3,
    showOnHome: false,
    descriptor: "Real-time market data & execution simulation",
    description:
      "C++20 engine that reconstructs L2 order books from live exchange snapshot/delta streams, simulates execution against observed depth, and enforces deterministic live/replay parity.",
    tech: ["C++20", "WebSocket", "CMake", "ASan+UBSan", "TSan", "Next.js"],
    featured: true,
    github: "https://github.com/Tyagiquamar/QuantXecute",
    liveHref: "https://quantxecute-dashboard.vercel.app",
    liveLabel: "Dashboard",
    visual: {
      src: "/images/quantxecute-dashboard.png",
      alt: "QuantXecute engineering console in replay mode: depth ladder, trade-simulation result with VWAP and bps cost, and book-health counters from the live engine API",
    },
    caseStudy: {
      headline: "Correctness-first market-data and execution-simulation engine in C++20",
      problem:
        "Exchange order-book feeds are incremental and stateful: a missed or misordered update silently corrupts the local book, and everything computed on top of it is wrong. Execution simulation is just as fragile: it is meaningless unless replaying a recorded session produces exactly the same book state and results as processing it live.",
      built: [
        {
          title: "L2 order-book reconstruction",
          detail:
            "Snapshot + incremental delta processing with price-level updates. The book is a pure state applier; all feed continuity semantics live in a separate sequence validator, so the correctness logic is unit-testable under sanitizers with no UI and no network.",
        },
        {
          title: "Exchange sequencing integrity",
          detail:
            "OKX books feeds use seqId/prevSeqId continuity, not dense +1 counters. A snapshot (prevSeqId = -1) establishes the baseline; an update is accepted only if its prevSeqId equals the last accepted seqId. A mismatch invalidates the book, counts a gap and requests a fresh snapshot. The bad update is never applied.",
        },
        {
          title: "Execution simulator",
          detail:
            "Simulates market execution against observed L2 depth with sound units: VWAP, basis points and USD cost, sized by notional or base quantity with an explicit taker fee. Simulations refuse to run against an unverified book.",
        },
        {
          title: "Deterministic record & replay",
          detail:
            "Recorded market events replay through the same validation/application path as live data. The parity invariant — identical event sequence, byte-identical order book, identical execution results — is enforced by qx.parity_test, a required member of make verify.",
        },
        {
          title: "Resilient feed client",
          detail:
            "The feed client drives reconnect with backoff, staleness detection and gap-triggered resync over a transport-agnostic FeedSource; the OKX source implements the production TLS WebSocket session. Reconnect policy lives in one state machine.",
        },
        {
          title: "API & engineering console",
          detail:
            "REST endpoints for /health, /book and /simulate plus a 1 Hz WebSocket /events stream. The Next.js dashboard exposes feed and book health — including parity status — and reports the engine as unavailable instead of rendering placeholder data.",
        },
      ],
      decisions: [
        {
          title: "Sequence correctness over naive counters",
          detail:
            "seqId may jump forward arbitrarily, repeat on empty keepalives, or move lower on a maintenance reset — none of those are false gaps. Continuity is judged solely on prevSeqId matching the last accepted seqId, with keepalive, stale-reject and gap-resync handled as distinct verdicts.",
        },
        {
          title: "Explicit integrity policy",
          detail:
            "OKX deprecated the books checksum on 2026-06-23 — the field still arrives but is fixed to 0 — so the engine runs OKX under an explicit SequenceOnly integrity policy and never advertises CRC32 as a live guarantee. Checksum-capable feeds can opt into SequenceAndChecksum, where a genuine mismatch takes the book offline until a fresh snapshot recovers it.",
        },
        {
          title: "One code path for live and replay",
          detail:
            "Replay drives the same decoder, validator, book and execution simulator as the live feed — there is no separate demo implementation. The parity test ships with negative controls: dropping one delta or tampering one prevSeqId must break parity.",
        },
        {
          title: "No fake availability",
          detail:
            "If live mode cannot connect, /health reports connected: false and bookReady: false, and /simulate refuses with 503. The server never silently switches between fixture replay and live data, and the dashboard says unavailable rather than showing a stale book.",
        },
      ],
      testing:
        "make verify runs three gates in a Linux container: an ASan+UBSan instrumented build of the production libraries under the full CTest suite, a ThreadSanitizer pass, and clang-tidy over core, feed and server — all enforced by GitHub Actions alongside dashboard tests, typecheck and build, plus a Docker replay smoke test. Benchmarks are measured, not claimed (GCC 12, Release -O2): applyDelta at p50 122 ns across 200k ops on a 5,000-level book, and deterministic replay sustaining ~239,656 events/s over a 100k-delta recording.",
      architecture: {
        image: "/images/quantxecute-architecture.svg",
        caption:
          "Live OKX WebSocket or a recorded JSONL log drive the same decoder → sequence validator → book → execution simulator path; the REST + WebSocket API serves the Next.js dashboard",
      },
      screenshots: [
        {
          title: "Engine console",
          detail: "Replay mode against the real engine: depth ladder, a $25,000 simulated buy with VWAP and bps cost, and live book-health counters",
          src: "/images/quantxecute-dashboard.png",
        },
      ],
      background: {
        heading: "Algorithms & performance background",
        body:
          "The habits behind this engine come from competitive programming: reasoning about invariants, edge cases and complexity before writing code. That background carries directly into correctness-sensitive C++ systems — sequence validation, deterministic replay and sanitizer-clean concurrency are the same discipline applied to market data.",
      },
    },
  },
  {
    slug: "liveboard",
    title: "LiveBoard",
    track: "fullstack",
    priority: 3,
    showOnHome: false,
    descriptor: "Realtime collaborative workspace",
    description:
      "A lightweight Linear × Notion: Kanban collaboration over Socket.IO with presence, optimistic mutations with idempotency keys, and reconnect replay from a per-workspace event log.",
    tech: ["Next.js", "Socket.IO", "MongoDB", "React Query"],
    featured: true,
    github: "https://github.com/Tyagiquamar/liveboard",
    liveHref: "https://liveboard-red.vercel.app",
    liveLabel: "Live demo",
    visual: {
      src: "/images/liveboard-kanban.png",
      alt: "LiveBoard Kanban board with seeded project issues across backlog, todo, in progress and done columns",
    },
    caseStudy: {
      headline: "Realtime collaboration with a correctness story",
      problem:
        "Collaborative tools live or die on the hard cases: two people editing at once, a laptop going offline mid-drag, a reconnect after minutes away. LiveBoard is built around making those cases converge provably instead of hopefully.",
      built: [
        {
          title: "Event-sourced sync",
          detail:
            "Every mutation appends to a per-workspace event log with a monotonic seq and fans out to room-scoped subscribers; other clients apply events to their cache without refetching.",
        },
        {
          title: "Reconnect resync",
          detail:
            "Clients keep a per-workspace seq watermark and re-subscribe with sinceSeq to receive exactly the missed events as an ordered batch. Gaps beyond 2000 events truncate and fall back to refetching.",
        },
        {
          title: "Optimistic UX with conflict handling",
          detail:
            "React Query cache patched instantly; every write carries an idempotency key; stale baseVersion writes get 409 { current } for a rebase UX; offline writes queue in a persistent outbox and flush idempotently.",
        },
        {
          title: "Presence, typing, viewers",
          detail:
            "In-memory registries keyed by socket id (multi-tab safe), membership-checked per workspace.",
        },
      ],
      decisions: [
        {
          title: "One log, three jobs",
          detail:
            "The activity event {id, seq, type, actor, entityId, data, ts} is simultaneously the realtime payload, the activity feed, and the reconnect-replay source — one source of truth instead of three drifting ones.",
        },
        {
          title: "Authz at every layer",
          detail:
            "JWT verified on the Socket.IO handshake and membership re-checked on every room join; REST routes check membership on every request; non-members get 403/404 — tested, not assumed.",
        },
        {
          title: "Cursor pagination everywhere",
          detail:
            "Keyset cursors (sort field + _id tiebreak) for issues, comments and activity keep pages stable while rows change underneath — regression-tested.",
        },
      ],
      testing:
        "A two-client consistency proof boots the real HTTP+Socket.IO server against a throwaway Mongo and asserts two concurrent clients converge to byte-identical event streams and final state. Reconnect replay is regression-tested server-side.",
      screenshots: [
        {
          title: "Kanban board",
          detail: "Seeded Acme workspace with 28 issues across projects, drag-and-drop with optimistic updates",
          src: "/images/liveboard-kanban.png",
        },
        {
          title: "Live collaboration",
          detail: "A card dragged in Alice's window moves live in Bob's; presence avatars show who's online",
          src: "/images/liveboard-collaboration.png",
        },
      ],
    },
  },
  {
    slug: "durablemcp",
    title: "DurableMCP",
    track: "systems",
    priority: 4,
    showOnHome: false,
    descriptor: "Durable execution for MCP tool calls",
    description:
      "MCP server where every tool call is persisted before dispatch, executed under fencing-token leases, and inspectable from Postgres. The hosted demo kills its own executor to generate genuine crash-recovery events.",
    tech: ["Go", "MCP", "PostgreSQL", "Next.js"],
    featured: false,
    github: "https://github.com/Tyagiquamar/durablemcp",
    liveHref: "https://durablemcp-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    visual: {
      src: "/images/durablemcp-dashboard.png",
      alt: "DurableMCP dashboard showing execution totals, crash-rate chart, recovery events and a live executions table",
    },
    caseStudy: {
      headline: "Durable execution for MCP tool calls",
      problem:
        "When an MCP client (Claude Desktop, Cursor, any agent) calls a tool, what happens if the executor crashes mid-call, the client retries, and the side effect may or may not have happened? DurableMCP makes that answer deterministic and inspectable.",
      built: [
        {
          title: "Persist-before-dispatch",
          detail:
            "The server persists every call with a unique execution_id and idempotency_key before dispatching to an executor. Resubmitting the same (namespace, tool_name, idempotency_key) returns the original execution.",
        },
        {
          title: "Fencing-token leases",
          detail:
            "Executors claim work with a monotonically increasing fencing token (execution_id, token, lease_expires, worker_id) and heartbeat while working. A stale executor resuming after lease expiry is rejected; the scheduler reaps expired leases and promotes retries.",
        },
        {
          title: "Immutable event log",
          detail:
            "Every state transition is appended to an execution_events table — the schema is the proof, inspectable from Postgres through a read-only Next.js dashboard.",
        },
        {
          title: "Real MCP protocol",
          detail:
            "JSON-RPC 2.0 / MCP 2025-03-26 over stdio and HTTP/SSE: initialize, tools/list, tools/call, ping. tools/call returns an execution_id; the executor runs work asynchronously.",
        },
      ],
      decisions: [
        {
          title: "At-least-once delivery, stated",
          detail:
            "Side-effecting tools supply their own idempotency key for external writes; the engine guarantees the state transition, not external idempotency.",
        },
        {
          title: "Failure demos as scripts",
          detail:
            "fencing-demo.sh, duplicate-demo.sh and retry-demo.sh reproduce stale-worker rejection, duplicate submission, and retry exhaustion against the running stack — and the hosted demo kills its own executor to generate genuine crash-recovery events.",
        },
        {
          title: "Raw pgx, no ORM",
          detail:
            "PostgreSQL repositories use raw pgx so the fencing and lease queries are explicit SQL a reviewer can audit.",
        },
      ],
      testing:
        "Compose stack boots Postgres (schema auto-applied), the MCP server, two executors (to demonstrate fencing), the scheduler and the dashboard; failure-scene scripts exercise the guarantees end to end.",
      screenshots: [
        {
          title: "Live executions dashboard",
          detail: "Execution totals, crash-rate chart, recovery events and the live executions table from the hosted demo",
          src: "/images/durablemcp-dashboard.png",
        },
      ],
    },
  },
  {
    slug: "componentforge",
    title: "ComponentForge",
    track: "fullstack",
    priority: 10,
    showOnHome: false,
    additional: true,
    secondaryTags: ["component-system"],
    descriptor: "Accessible React component system",
    description:
      "15 keyboard-first components with hand-rolled ARIA patterns, controlled/uncontrolled APIs, and design-token theming without a headless-UI dependency.",
    tech: ["React", "TypeScript", "ARIA", "Design tokens"],
    featured: false,
    github: "https://github.com/Tyagiquamar/componentforge",
    liveHref: "https://componentforge-kohl.vercel.app",
    liveLabel: "Live docs",
    visual: {
      src: "/images/componentforge-docs.png",
      alt: "ComponentForge documentation showing button variants, states and code examples",
    },
  },
  {
    slug: "canvasflow",
    title: "CanvasFlow",
    track: "fullstack",
    priority: 11,
    showOnHome: false,
    additional: true,
    secondaryTags: ["graph-editor"],
    descriptor: "Node-based workflow builder",
    description:
      "Normalized graph state with structural sharing, coalesced undo/redo, cycle-safe connect-time validation, deterministic canonical-JSON serialization, and an inspectable execution simulator.",
    tech: ["React Flow", "Zustand", "TypeScript"],
    featured: false,
    github: "https://github.com/Tyagiquamar/canvasflow",
    liveHref: "https://canvasflow-nine.vercel.app",
    liveLabel: "Live demo",
    visual: {
      src: "/images/canvasflow-canvas.png",
      alt: "CanvasFlow editor showing a webhook workflow as connected nodes on a dark canvas with an execution inspector",
    },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const takkadaSlug = "takkada"

export interface CapabilityArea {
  title: string
  detail: string
}

export const capabilityAreas: CapabilityArea[] = [
  {
    title: "Product Engineering",
    detail: "0→1 features, customer workflows, and iteration under real production usage.",
  },
  {
    title: "Customer-facing Engineering",
    detail: "React, Next.js, Flutter — including realtime collaborative UX.",
  },
  {
    title: "Backend & Data",
    detail: "Go, Node.js, PostgreSQL, Supabase — API design and distributed workflows.",
  },
  {
    title: "AI Systems",
    detail: "LLM integrations, document pipelines, agents, human-in-the-loop safety.",
  },
  {
    title: "Infrastructure & Reliability",
    detail: "Docker, GitHub Actions, deployment, observability, failure recovery.",
  },
]
