export type ProjectCategory = "product" | "systems" | "frontend"

export const categoryLabels: Record<ProjectCategory, string> = {
  product: "Product & AI",
  systems: "Systems & Infrastructure",
  frontend: "Frontend engineering",
}

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
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  descriptor: string
  description: string
  tech: string[]
  featured: boolean
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
    category: "product",
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
            "Paste a policy and the generator drafts structured rules with verbatim source excerpts. Proposals stay inert until a human approves them and a set version is activated — model output can never silently change compliance behavior.",
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
            "Documents persist to S3-compatible storage (MinIO locally, Backblaze B2 in production) through a hand-rolled SigV4 signer — no SDK dependency at the storage boundary.",
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
    category: "systems",
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
            "A Next.js console distinguishes deterministic Demo evidence from an unavailable, empty, partial or populated Live API response — it never replaces an unavailable response with fixture data.",
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
            "Automated scenes SIGKILL workers mid-execution and drive crash recovery, stale fencing, duplicate starts and retry exhaustion — the proof is the point, not an afterthought.",
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
    category: "product",
    descriptor: "Supervised AI support operations",
    description:
      "Traced agent pipeline: injection scan, intent classification, grounded cited drafts — and financial write actions queued behind an explicit human approval gate. Not a chatbot; a supervised ops system.",
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
    category: "systems",
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
        "Databases change and everything downstream finds out late: caches drift, search indexes fall behind, invoices wait on batch jobs. Polling misses deletes and double-reads race transactions — and nobody can prove what was delivered, or to whom.",
      built: [
        {
          title: "WAL capture with pgoutput",
          detail:
            "Reads committed changes from a PostgreSQL publication through pgoutput logical decoding, with TOAST awareness for unchanged large values.",
        },
        {
          title: "The capture invariant",
          detail:
            "Capture persists the transaction's normalized events and advances the metadata checkpoint in one transaction. Only after that commit may capture report the flushed LSN back to PostgreSQL — a crash before acknowledgement replays WAL without creating a second durable event identity.",
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
            "Live mode never substitutes fixtures when the API is unavailable or empty — unavailable reads stay visibly unavailable. Demo mode is opt-in deterministic evidence, clearly labeled.",
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
    slug: "liveboard",
    title: "LiveBoard",
    category: "product",
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
    category: "systems",
    descriptor: "Durable execution for MCP tool calls",
    description:
      "MCP server where every tool call is persisted before dispatch, executed under fencing-token leases, and inspectable from Postgres. The hosted demo kills its own executor to generate genuine crash-recovery events.",
    tech: ["Go", "MCP", "PostgreSQL", "Next.js"],
    featured: true,
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
    category: "frontend",
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
    category: "frontend",
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

export interface OpenSourceContribution {
  repo: string
  title: string
  detail: string
  language: string
  pr: string
}

// Verified via `gh search prs --author Tyagiquamar --merged` on 2026-08-31:
// 6 merged PRs across 4 upstream repositories (helix-db x2, mega x2, dev-3.0, studio).
export const openSource = {
  positioning:
    "Production fixes contributed upstream across Go, Rust and TypeScript codebases — databases, Git infrastructure, and developer tooling.",
  mergedPRs: 6,
  upstreamRepos: 4,
  contributions: [
    {
      repo: "gitmono-dev/mega",
      title: "Frame receive-pack bodies by pkt-line structure",
      detail:
        "Git-protocol correctness fix in a Rust monorepo server: parse receive-pack bodies by pkt-line framing instead of ad-hoc boundaries.",
      language: "Rust",
      pr: "https://github.com/gitmono-dev/mega/pull/2174",
    },
    {
      repo: "h0x91b/dev-3.0",
      title: "Release task ports under the cross-process assignment lock",
      detail:
        "Concurrency fix: port assignment released under the same cross-process lock that allocates it, closing a stale-port race across processes.",
      language: "TypeScript",
      pr: "https://github.com/h0x91b/dev-3.0/pull/1530",
    },
    {
      repo: "HelixDB/helix-db",
      title: "Accept every integer width in typed float parameters",
      detail:
        "Go SDK type fix: typed float parameters previously rejected valid integer widths at the boundary.",
      language: "Go",
      pr: "https://github.com/HelixDB/helix-db/pull/1032",
    },
    {
      repo: "decocms/studio",
      title: "Fall back to Decopilot when the hosted sandbox is unavailable",
      detail:
        "Task-board resilience: degrade to Decopilot instead of failing when the hosted sandbox path is down.",
      language: "TypeScript",
      pr: "https://github.com/decocms/studio/pull/6540",
    },
  ] satisfies OpenSourceContribution[],
}

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
