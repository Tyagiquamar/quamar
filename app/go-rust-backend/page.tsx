import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Download, Github, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Go / Rust Backend & Systems | Mohd Quamar Tyagi",
  description: "Production Go/gRPC backend experience and merged Rust/Go contributions across time-series databases, distributed storage, streaming, and infrastructure.",
}

const contributions = [
  { repo: "GreptimeDB", area: "Rust · Time-series / telemetry", title: "Correct grouping of Prometheus timeseries across RecordBatches", detail: "Combined duplicate timeseries from streaming record batches during Prometheus remote reads, preserving correctness of returned data.", href: "https://github.com/GreptimeTeam/greptimedb/pull/9032" },
  { repo: "Feldera", area: "Rust · Streaming systems", title: "NATS replay and control ordering", detail: "Preserved in-flight replay and aligned checkpoints when pipeline control commands arrive.", href: "https://github.com/feldera/feldera/pull/7011" },
  { repo: "ParadeDB", area: "Rust · PostgreSQL / search", title: "Safe empty phrase-prefix queries", detail: "Handled empty search terms without constructing invalid query execution paths.", href: "https://github.com/paradedb/paradedb/pull/6308" },
  { repo: "SeaweedFS", area: "Go · Distributed storage", title: "Metadata subscription lifecycle", detail: "Prevented a filer from retaining an invalid local-only subscription after remote peers appeared.", href: "https://github.com/seaweedfs/seaweedfs/pull/11251" },
  { repo: "NetBird", area: "Go · Networking / security", title: "Network budget group deletion guards", detail: "Protected group deletion when references remain in active network-budget rules.", href: "https://github.com/netbirdio/netbird/pull/7450" },
  { repo: "Qdrant Go client", area: "Go · gRPC / vector search", title: "Caller-owned gRPC configuration", detail: "Prevented client construction from mutating reused caller configuration.", href: "https://github.com/qdrant/go-client/pull/151" },
  { repo: "Svix", area: "Rust · High-throughput webhooks", title: "Background expired-message cleaner control", detail: "Introduced a configuration switch for background purge jobs.", href: "https://github.com/svix/svix-webhooks/pull/2644" },
  { repo: "Dragonfly", area: "C++ · In-memory database", title: "Strict cluster health configuration parsing", detail: "Rejected invalid node-health states before they could enter cluster topology state.", href: "https://github.com/dragonflydb/dragonfly/pull/8306" },
]

const projects = [
  { title: "RelayDB", stack: "Go · PostgreSQL CDC", detail: "WAL ingestion, checkpoints, replay, and at-least-once delivery.", href: "https://github.com/Tyagiquamar/relaydb" },
  { title: "DurableGo", stack: "Go · Workflow orchestration", detail: "Durable execution with leases, fencing tokens, failure recovery, and an observable dashboard.", href: "https://github.com/Tyagiquamar/durablego" },
  { title: "DurableMCP", stack: "Go · Resilient tool execution", detail: "Durable MCP tools, recovery semantics, and failure-aware execution.", href: "https://github.com/Tyagiquamar/durablemcp" },
]

export default function GoRustBackendPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="editorial-section pt-28 pb-14">
        <Link href="/" className="quiet-link text-sm">← Full portfolio</Link>
        <p className="section-kicker mt-12">Backend engineering · selected proof</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl leading-tight sm:text-7xl">Go / Rust Backend & Systems</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">I build production Go services and contribute correctness and reliability fixes to real-world Rust, Go, and C++ databases and infrastructure. Particularly interested in high-volume telemetry, distributed data systems, streaming, and performance-sensitive backend platforms.</p>
        <p className="mt-4 font-mono text-sm text-muted-foreground">Mohd Quamar Tyagi · Delhi NCR, India · Available immediately</p>
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm">
          <a href="/resume.pdf" className="quiet-link inline-flex items-center gap-2"><Download size={16} /> Resume</a>
          <a href="https://github.com/Tyagiquamar" className="quiet-link inline-flex items-center gap-2"><Github size={16} /> GitHub</a>
          <a href="mailto:mohdquamartyagi@gmail.com" className="quiet-link inline-flex items-center gap-2"><Mail size={16} /> Email</a>
        </div>
      </section>
      <section className="editorial-section border-t py-12">
        <p className="section-kicker">Production engineering</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Zomato · SDE-1, Backend</h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">Jul – Dec 2025 · Go / gRPC / MySQL / MongoDB</p>
        <ul className="mt-6 max-w-4xl list-disc space-y-3 pl-5 text-base leading-7 text-muted-foreground">
          <li>Optimized latency-sensitive backend paths, improving p90 latency by approximately 5× on relevant customer-support flows.</li>
          <li>Automated support and ticket workflows, reducing manual operations by approximately 80% and support workload by 35%.</li>
          <li>Improved live-status API behavior, reducing redundant initializations by approximately 60%.</li>
        </ul>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-muted-foreground">Also worked as a founding engineer at Takkada, shipping backend workflows, PostgreSQL/Supabase RPC functionality, deployments, and product integrations. Earlier, Linux Foundation cloud-native mentorship work involved gRPC and containerized microservice development.</p>
      </section>
      <section className="editorial-section border-t py-12">
        <p className="section-kicker">Merged contributions · direct PR evidence</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Database, streaming & infrastructure fixes</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">A deliberately focused selection of merged PRs relevant to ingestion, telemetry, correctness, concurrency, networking, and backend reliability—not a list of every contribution.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contributions.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="group border border-border/80 bg-card p-6 transition-colors hover:border-foreground/40">
              <div className="flex items-center justify-between gap-3"><span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.repo} · {item.area}</span><ArrowUpRight size={17} className="shrink-0" /></div>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              <p className="mt-4 text-xs font-mono text-muted-foreground">Merged PR ↗</p>
            </a>
          ))}
        </div>
      </section>
      <section className="editorial-section border-t py-12">
        <p className="section-kicker">Independent projects · source code</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Go systems projects</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer" className="border border-border/80 p-6 hover:border-foreground/40">
              <span className="font-mono text-xs text-muted-foreground">{project.stack}</span>
              <h3 className="mt-4 text-xl font-medium">{project.title} ↗</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.detail}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="editorial-section border-t py-14">
        <p className="section-kicker">Engineering foundations</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Competitive programming & broader interests</h2>
        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">Codeforces Candidate Master (2038), LeetCode Guardian (2400+). Outside backend engineering, I enjoy scientific open-source contributions in computational chemistry and related scientific computing systems.</p>
        <p className="mt-8 text-sm"><Link href="/" className="quiet-link">View full portfolio →</Link></p>
      </section>
    </main>
  )
}
