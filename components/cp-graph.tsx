"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cpProfiles, featuredRepos } from "@/data/portfolio"

const cpEggs: Record<string, { title: string; detail: string }> = {
  Codeforces: {
    title: "Candidate Master unlocked",
    detail: "2038",
  },
  LeetCode: {
    title: "Accepted ✓",
    detail: "Guardian · Top 0.6%",
  },
}

const ratingToneClasses: Record<string, string> = {
  Codeforces: "rating-codeforces",
  LeetCode: "rating-leetcode",
}

const ACTIVITY_GRAPH_URL =
  "https://github-readme-activity-graph.vercel.app/graph?username=Tyagiquamar&theme=github-dark-dimmed&hide_border=true&area=true&bg_color=0a0a0a&color=9ca3af&line=22c7a9&point=e5e7eb&area_color=22c7a9"
const FALLBACK_GRAPH_URL = "https://ghchart.rshah.org/22c7a9/Tyagiquamar"

function CpProfileRow({ profile }: { profile: (typeof cpProfiles)[number] }) {
  const [revealed, setRevealed] = useState(false)
  const egg = cpEggs[profile.platform]

  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => egg && setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onFocus={() => egg && setRevealed(true)}
      onBlur={() => setRevealed(false)}
      className="group motion-row grid gap-2 border border-transparent px-3 py-4 transition-colors hover:text-primary sm:grid-cols-[180px_1fr_auto] sm:items-baseline"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {profile.platform}
      </p>
      <p className={`text-sm ${ratingToneClasses[profile.platform] ?? "text-foreground"}`}>
        {revealed && egg ? egg.title : profile.rating}
      </p>
      <span className={`font-mono text-xs transition duration-300 group-hover:translate-x-1 ${ratingToneClasses[profile.platform] ?? "text-muted-foreground group-hover:text-primary"}`}>
        {revealed && egg ? egg.detail : profile.detail} -&gt;
      </span>
    </a>
  )
}

function RepoTrace({ animation }: { animation: (typeof featuredRepos)[number]["animation"] }) {
  if (animation === "workflow") {
    return (
      <div className="repo-trace repo-trace-workflow" aria-hidden>
        {["RUNNING", "WORKER LOST", "RECLAIMED", "COMPLETED"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    )
  }

  if (animation === "cdc") {
    return (
      <div className="repo-trace repo-trace-cdc" aria-hidden>
        {["WAL", "LSN", "EVENT", "CONSUMER"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    )
  }

  if (animation === "mcp") {
    return (
      <div className="repo-trace repo-trace-workflow" aria-hidden>
        {["PERSIST", "CLAIM", "EXECUTE", "FENCED"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    )
  }

  return null
}

function FeaturedRepoRow({ repo }: { repo: (typeof featuredRepos)[number] }) {
  const content = (
    <>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-sm text-foreground">{repo.title}</p>
          <span className="font-mono text-xs text-muted-foreground">{repo.language}</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{repo.detail}</p>
      </div>
      <RepoTrace animation={repo.animation} />
      <span className="font-mono text-xs text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">
        -&gt;
      </span>
    </>
  )

  if (repo.href) {
    return (
      <a
        href={repo.href}
        target="_blank"
        rel="noreferrer"
        className="featured-repo-row group"
      >
        {content}
      </a>
    )
  }

  return <div className="featured-repo-row group">{content}</div>
}

/**
 * GitHub contribution graph, rendered by a third-party image service
 * (github-readme-activity-graph). Shows real commit activity — NOT a
 * competitive-programming graph. The CP cards above link out to the
 * actual Codeforces/LeetCode/CodeChef profiles.
 */
export function CpGraph() {
  const [expanded, setExpanded] = useState(false)
  const [drawerMounted, setDrawerMounted] = useState(false)
  const [commandTitle, setCommandTitle] = useState(false)
  const [proofPinged, setProofPinged] = useState(false)
  const [graphSrc, setGraphSrc] = useState(ACTIVITY_GRAPH_URL)
  const titleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const expandTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pingTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onBusinessProofPing() {
      setProofPinged(true)
      if (pingTimer.current) clearTimeout(pingTimer.current)
      pingTimer.current = setTimeout(() => setProofPinged(false), 1800)
    }

    window.addEventListener("business-proof-ping", onBusinessProofPing)

    return () => {
      window.removeEventListener("business-proof-ping", onBusinessProofPing)
      if (titleTimer.current) clearTimeout(titleTimer.current)
      if (expandTimer.current) clearTimeout(expandTimer.current)
      if (pingTimer.current) clearTimeout(pingTimer.current)
    }
  }, [])

  function toggleFeaturedRepos() {
    if (titleTimer.current) clearTimeout(titleTimer.current)
    if (expandTimer.current) clearTimeout(expandTimer.current)

    if (expanded) {
      setExpanded(false)
      titleTimer.current = setTimeout(() => setCommandTitle(false), 220)
      expandTimer.current = setTimeout(() => setDrawerMounted(false), 280)
      return
    }

    setDrawerMounted(true)
    setCommandTitle(true)
    expandTimer.current = setTimeout(() => setExpanded(true), 220)
  }

  return (
    <div className="space-y-6">
      <div className="divide-y divide-border border border-border/80">
        {cpProfiles.map((p) => (
          <CpProfileRow key={p.platform} profile={p} />
        ))}
      </div>

      <div
        className={`github-activity-card ${expanded ? "is-expanded" : ""} ${
          proofPinged ? "is-highlighted" : ""
        }`}
      >
        <button
          type="button"
          onClick={toggleFeaturedRepos}
          aria-expanded={expanded}
          className="group mb-3 flex w-full items-center justify-between gap-4 text-left"
        >
          <span className="github-activity-title">
            {commandTitle ? "$ git log --featured" : "GitHub commit activity"}
          </span>
          <span className="font-mono text-xs text-muted-foreground transition group-hover:text-primary">
            {expanded ? "Collapse" : "View engineering activity ->"}
          </span>
        </button>
        <button
          type="button"
          onClick={toggleFeaturedRepos}
          aria-label="Toggle featured GitHub repositories"
          className="github-graph-button"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={graphSrc}
            onError={() => setGraphSrc(FALLBACK_GRAPH_URL)}
            alt="GitHub contribution graph for Tyagiquamar"
            className="w-full min-w-[620px] opacity-85 grayscale-[20%]"
            loading="lazy"
          />
          <span
            className="graph-hotspot left-[22%] top-[58%]"
            title="probably should've been 3 commits"
          />
          <span
            className="graph-hotspot left-[55%] top-[39%]"
            title="fix -> deploy -> fix the fix"
          />
          <span
            className="graph-hotspot left-[73%] top-[22%]"
            title="this one broke production."
          />
        </button>
        {drawerMounted ? (
          <div className={`repo-drawer ${expanded ? "is-open" : ""}`} aria-hidden={!expanded}>
            <div className="repo-drawer-inner">
              <p className="mb-3 font-mono text-xs text-muted-foreground">
                $ git log --featured
              </p>
              <div className="divide-y divide-border/70 border border-border/80">
                {featuredRepos.map((repo) => (
                  <FeaturedRepoRow key={repo.title} repo={repo} />
                ))}
              </div>
              <a
                href="https://github.com/Tyagiquamar"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition hover:text-primary"
              >
                View GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
