export type OssStatus = "MERGED" | "IN REVIEW" | "MAINTAINER REVIEW" | "OPEN"

export interface OpenSourceContribution {
  repo: string
  title: string
  detail: string
  language: string
  domain: string
  prNumber: number
  href: string
  status: OssStatus
  featured: boolean
}

// Verified against GitHub Pull Request API on 2026-09-06.
export const openSource = {
  positioning:
    "Selected production-code fixes in unfamiliar upstream systems: runtimes, databases, market math, and protocol clients.",
  verifiedOn: "2026-09-06",
  contributions: [
    {
      repo: "qdrant/go-client",
      title: "Caller-owned gRPC config",
      detail:
        "Stopped NewGrpcClient from mutating Config.GrpcOptions so reused configs no longer accumulate internal dial options.",
      language: "Go",
      domain: "gRPC client",
      prNumber: 151,
      href: "https://github.com/qdrant/go-client/pull/151",
      status: "MERGED",
      featured: true,
    },
    {
      repo: "HelixDB/helix-db",
      title: "Typed datetime parity",
      detail:
        "Accepted every value type in typed datetime parameters at the Go SDK boundary instead of rejecting valid widths.",
      language: "Go",
      domain: "Database SDK",
      prNumber: 1058,
      href: "https://github.com/HelixDB/helix-db/pull/1058",
      status: "MERGED",
      featured: true,
    },
    {
      repo: "thrasher-corp/gocryptotrader",
      title: "RemainingAmount correctness",
      detail:
        "Stopped UpdateOrderFromDetail from re-deriving remaining amount from trades, which could desync live order state.",
      language: "Go",
      domain: "Exchange orders",
      prNumber: 2357,
      href: "https://github.com/thrasher-corp/gocryptotrader/pull/2357",
      status: "MERGED",
      featured: true,
    },
    {
      repo: "gitmono-dev/mega",
      title: "pkt-line receive-pack framing",
      detail:
        "Parsed receive-pack bodies by Git pkt-line structure instead of ad-hoc boundaries in a Rust monorepo server.",
      language: "Rust",
      domain: "Git protocol",
      prNumber: 2174,
      href: "https://github.com/gitmono-dev/mega/pull/2174",
      status: "MERGED",
      featured: true,
    },
    {
      repo: "c9s/bbgo",
      title: "Fixed-point truncation",
      detail:
        "Corrected Trunc to truncate toward zero for negative values so price/quantity math cannot inflate a negative quantity.",
      language: "Go",
      domain: "Fixed-point math",
      prNumber: 2621,
      href: "https://github.com/c9s/bbgo/pull/2621",
      status: "MAINTAINER REVIEW",
      featured: true,
    },
    {
      repo: "coder/coder",
      title: "Terraform logging deadlock",
      detail:
        "Stopped the provisioner from deadlocking when Terraform log lines exceed 64 KiB.",
      language: "Go",
      domain: "Provisioning",
      prNumber: 28824,
      href: "https://github.com/coder/coder/pull/28824",
      status: "IN REVIEW",
      featured: true,
    },
    {
      repo: "temporalio/sdk-go",
      title: "Query failure-cause propagation",
      detail:
        "Set WorkflowTaskFailedCause on remaining legacy query failure paths so clients see classified causes, not empty failures.",
      language: "Go",
      domain: "Durable execution",
      prNumber: 2663,
      href: "https://github.com/temporalio/sdk-go/pull/2663",
      status: "IN REVIEW",
      featured: true,
    },
    {
      repo: "rivet-dev/actors",
      title: "Graceful shutdown lifecycle",
      detail:
        "Tracked the active serverless listener so shutdown drains in-flight work instead of returning while serveListener is still running.",
      language: "TypeScript",
      domain: "Runtime lifecycle",
      prNumber: 5673,
      href: "https://github.com/rivet-dev/actors/pull/5673",
      status: "OPEN",
      featured: true,
    },
    {
      repo: "GreptimeTeam/greptimedb",
      title: "Prometheus TimeSeries merge",
      detail:
        "Merged duplicate Prometheus TimeSeries across RecordBatches during remote read so split batches no longer emit duplicate series.",
      language: "Rust",
      domain: "Time-series",
      prNumber: 9032,
      href: "https://github.com/GreptimeTeam/greptimedb/pull/9032",
      status: "OPEN",
      featured: true,
    },
    {
      repo: "connectrpc/connect-go",
      title: "EndStream vs sendMaxBytes",
      detail:
        "Stopped applying sendMaxBytes to EndStream control frames so oversized error JSON cannot silently drop the end-of-stream status.",
      language: "Go",
      domain: "RPC protocol",
      prNumber: 971,
      href: "https://github.com/connectrpc/connect-go/pull/971",
      status: "OPEN",
      featured: true,
    },
    {
      repo: "openmeterio/openmeter",
      title: "Namespace pricing precedence",
      detail:
        "Ordered namespace DESC NULLS LAST in ResolvePrice so PostgreSQL NULL ordering cannot invert namespace-specific pricing.",
      language: "Go",
      domain: "Billing",
      prNumber: 5084,
      href: "https://github.com/openmeterio/openmeter/pull/5084",
      status: "OPEN",
      featured: false,
    },
    {
      repo: "GreptimeTeam/greptimedb",
      title: "WAL replay without time index",
      detail:
        "Decoded mutations without panicking when the time index is missing, so WAL replay cannot crash on incomplete schemas.",
      language: "Rust",
      domain: "Storage / WAL",
      prNumber: 9033,
      href: "https://github.com/GreptimeTeam/greptimedb/pull/9033",
      status: "OPEN",
      featured: false,
    },
    {
      repo: "SigNoz/signoz",
      title: "Rules manager readiness",
      detail:
        "Propagated Manager.Start initiation errors so a failed ruler provider cannot report ready.",
      language: "Go",
      domain: "Observability",
      prNumber: 12773,
      href: "https://github.com/SigNoz/signoz/pull/12773",
      status: "OPEN",
      featured: false,
    },
    {
      repo: "feldera/feldera",
      title: "NATS replay/control ordering",
      detail:
        "Stopped abandoning an in-flight NATS replay when control commands arrive, keeping checkpoint state aligned with the controller.",
      language: "Rust",
      domain: "Streaming adapters",
      prNumber: 7011,
      href: "https://github.com/feldera/feldera/pull/7011",
      status: "OPEN",
      featured: false,
    },
    {
      repo: "h0x91b/dev-3.0",
      title: "Cross-process port lock",
      detail:
        "Released assigned ports under the same cross-process lock that allocates them, closing a stale-port race.",
      language: "TypeScript",
      domain: "Dev tooling",
      prNumber: 1530,
      href: "https://github.com/h0x91b/dev-3.0/pull/1530",
      status: "MERGED",
      featured: false,
    },
  ] satisfies OpenSourceContribution[],
}

export const featuredOpenSource = openSource.contributions.filter((item) => item.featured)
