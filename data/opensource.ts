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
  mergedAt?: string
}

export interface ActiveContribution {
  repo: string
  title: string
  detail: string
  language: string
  domain: string
  prNumber: number
  href: string
  status: "OPEN" | "IN REVIEW"
}

export const openSource = {
  positioning:
    "Selected production code contributions across trading systems, distributed databases, systems software, and cloud infrastructure.",
  verifiedOn: "2026-09-24",
  contributions: [
    {
      repo: "thrasher-corp/gocryptotrader",
      title: "Order remaining amount calculation",
      detail:
        "Fixed UpdateOrderFromDetail recalculating RemainingAmount from executed trades when caller-supplied remaining quantity is already authoritative.",
      language: "Go",
      domain: "Trading infrastructure",
      prNumber: 2357,
      href: "https://github.com/thrasher-corp/gocryptotrader/pull/2357",
      status: "MERGED",
      mergedAt: "2026-09-04",
      featured: true,
    },
    {
      repo: "ArkLabsHQ/enclave",
      title: "Nitro enclave attestation validation",
      detail:
        "Enforced strict attestation certificate verification for AWS Nitro Enclaves, rejecting invalid or unsigned certificate chains at the client boundary.",
      language: "Go",
      domain: "Crypto / Enclave security",
      prNumber: 178,
      href: "https://github.com/ArkLabsHQ/enclave/pull/178",
      status: "MERGED",
      mergedAt: "2026-09-09",
      featured: true,
    },
    {
      repo: "dragonflydb/dragonfly",
      title: "Cluster node health config parser",
      detail:
        "Hardened the cluster configuration parser in C++ to strictly reject invalid node health states instead of accepting corrupted topology.",
      language: "C++",
      domain: "In-memory database",
      prNumber: 8306,
      href: "https://github.com/dragonflydb/dragonfly/pull/8306",
      status: "MERGED",
      mergedAt: "2026-09-16",
      featured: true,
    },
    {
      repo: "GreptimeTeam/greptimedb",
      title: "Prometheus remote read timeseries deduplication",
      detail:
        "Merged duplicate timeseries across streaming RecordBatches in Prometheus remote-read server paths to prevent corrupted time-series responses.",
      language: "Rust",
      domain: "Time-series database",
      prNumber: 9032,
      href: "https://github.com/GreptimeTeam/greptimedb/pull/9032",
      status: "MERGED",
      mergedAt: "2026-09-19",
      featured: true,
    },
    {
      repo: "netbirdio/netbird",
      title: "Network budget group deletion guards",
      detail:
        "Guarded group deletion in the management server to ensure groups referenced by active agent network budget rules cannot be deleted.",
      language: "Go",
      domain: "Zero-trust networking",
      prNumber: 7450,
      href: "https://github.com/netbirdio/netbird/pull/7450",
      status: "MERGED",
      mergedAt: "2026-09-12",
      featured: true,
    },
    {
      repo: "svix/svix-webhooks",
      title: "Expired message cleaner configuration",
      detail:
        "Added an expired_message_cleaner_enabled configuration option to control background purge tasks in high-throughput webhook delivery.",
      language: "Rust",
      domain: "Webhooks infrastructure",
      prNumber: 2644,
      href: "https://github.com/svix/svix-webhooks/pull/2644",
      status: "MERGED",
      mergedAt: "2026-09-22",
      featured: true,
    },
    {
      repo: "c9s/bbgo",
      title: "Twin orderbook recovery order filtering",
      detail:
        "Filtered market and non-pinned orders from twin orderbook recovery to prevent corrupted grid-trading order state restoration.",
      language: "Go",
      domain: "Quantitative trading",
      prNumber: 2645,
      href: "https://github.com/c9s/bbgo/pull/2645",
      status: "MERGED",
      mergedAt: "2026-09-15",
      featured: true,
    },
    {
      repo: "seaweedfs/seaweedfs",
      title: "Metadata subscription lifecycle",
      detail:
        "Ended local-only metadata subscriptions when remote peers appear, preventing the filer from keeping an invalid subscription mode alive.",
      language: "Go",
      domain: "Distributed storage",
      prNumber: 11251,
      href: "https://github.com/seaweedfs/seaweedfs/pull/11251",
      status: "MERGED",
      mergedAt: "2026-09-10",
      featured: true,
    },
    {
      repo: "paradedb/paradedb",
      title: "Safe empty phrase-prefix queries",
      detail:
        "Returned EmptyQuery in the phrase_prefix query builder when search terms are empty, avoiding invalid search execution in PostgreSQL.",
      language: "Rust",
      domain: "Search engine / PostgreSQL",
      prNumber: 6308,
      href: "https://github.com/paradedb/paradedb/pull/6308",
      status: "MERGED",
      mergedAt: "2026-09-14",
      featured: true,
    },
    {
      repo: "feldera/feldera",
      title: "NATS replay and control ordering",
      detail:
        "Kept an in-flight NATS replay intact when control commands arrive, preserving checkpoint state alignment with the pipeline controller.",
      language: "Rust",
      domain: "Streaming systems",
      prNumber: 7011,
      href: "https://github.com/feldera/feldera/pull/7011",
      status: "MERGED",
      mergedAt: "2026-09-09",
      featured: true,
    },
    {
      repo: "fastly/cli",
      title: "Environment fallback in service validation",
      detail:
        "Enabled service version validation to fall back to the FASTLY_SERVICE_ID environment variable when the command flag is omitted in CI.",
      language: "Go",
      domain: "Edge cloud infrastructure",
      prNumber: 1907,
      href: "https://github.com/fastly/cli/pull/1907",
      status: "MERGED",
      mergedAt: "2026-09-21",
      featured: true,
    },
    {
      repo: "moonrepo/moon",
      title: "CI-aware affected task tracking",
      detail:
        "Made affected task and project tracking honor CI environment semantics so build decisions are consistent outside a developer machine.",
      language: "Rust",
      domain: "Build tooling",
      prNumber: 2707,
      href: "https://github.com/moonrepo/moon/pull/2707",
      status: "MERGED",
      mergedAt: "2026-09-15",
      featured: true,
    },
    {
      repo: "OpenHands/OpenHands",
      title: "Safe runtime config injection",
      detail:
        "HTML-escaped injected runtime configuration and disabled caching on credential-bearing responses in the static server.",
      language: "TypeScript",
      domain: "AI agents / Security",
      prNumber: 17175,
      href: "https://github.com/OpenHands/OpenHands/pull/17175",
      status: "MERGED",
      mergedAt: "2026-09-12",
      featured: false,
    },
    {
      repo: "qdrant/go-client",
      title: "Caller-owned gRPC configuration",
      detail:
        "Stopped NewGrpcClient from mutating Config.GrpcOptions so reused configs no longer accumulate internal dial options.",
      language: "Go",
      domain: "Vector search SDK",
      prNumber: 151,
      href: "https://github.com/qdrant/go-client/pull/151",
      status: "MERGED",
      mergedAt: "2026-09-05",
      featured: false,
    },
    {
      repo: "HelixDB/helix-db",
      title: "Typed datetime parameter validation",
      detail:
        "Accepted every value type in typed datetime parameters at the Go SDK boundary instead of rejecting valid widths.",
      language: "Go",
      domain: "Database SDK",
      prNumber: 1058,
      href: "https://github.com/HelixDB/helix-db/pull/1058",
      status: "MERGED",
      mergedAt: "2026-09-04",
      featured: false,
    },
  ] satisfies OpenSourceContribution[],
}

export const activeContributions: ActiveContribution[] = [
  {
    repo: "microsoft/mimalloc",
    title: "Intel assembler dialect in thread pointer asm",
    detail:
      "Added support for the Intel assembler dialect in thread pointer inline assembly across MSVC and GCC-compatible toolchains.",
    language: "C++ / ASM",
    domain: "Memory allocator",
    prNumber: 1415,
    href: "https://github.com/microsoft/mimalloc/pull/1415",
    status: "OPEN",
  },
  {
    repo: "facebookincubator/velox",
    title: "Negative size check in HashStringAllocator",
    detail:
      "Added negative size check in HashStringAllocator InputStream to prevent integer underflow and memory corruption.",
    language: "C++",
    domain: "Query engine",
    prNumber: 19177,
    href: "https://github.com/facebookincubator/velox/pull/19177",
    status: "OPEN",
  },
  {
    repo: "typesense/typesense",
    title: "Prevent facet ID sentinel collision",
    detail:
      "Prevented collision between the int32 -1 sentinel facet_id and valid facet IDs during inverted index evaluation.",
    language: "C++",
    domain: "Search engine",
    prNumber: 3075,
    href: "https://github.com/typesense/typesense/pull/3075",
    status: "OPEN",
  },
  {
    repo: "coder/coder",
    title: "Terraform provisioner 64 KiB log line deadlock",
    detail:
      "Prevented deadlock in the terraform provisioner by safely buffering and chunking log lines exceeding 64 KiB.",
    language: "Go",
    domain: "Developer infrastructure",
    prNumber: 28824,
    href: "https://github.com/coder/coder/pull/28824",
    status: "OPEN",
  },
]

export const featuredOpenSource = openSource.contributions.filter((item) => item.featured)
