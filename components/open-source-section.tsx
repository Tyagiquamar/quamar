import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  activeContributions,
  featuredOpenSource,
  openSource,
  type ActiveContribution,
  type OpenSourceContribution,
  type OssStatus,
} from "@/data/opensource"
import { SectionHeading } from "@/components/section-heading"

const statusClass: Record<OssStatus, string> = {
  MERGED: "text-primary font-medium",
  "IN REVIEW": "text-foreground",
  "MAINTAINER REVIEW": "text-foreground",
  OPEN: "text-amber-500 font-medium",
}

export function OssCard({
  contribution,
}: {
  contribution: OpenSourceContribution
}) {
  return (
    <a
      href={contribution.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`PR #${contribution.prNumber} in ${contribution.repo}: ${contribution.title}`}
      className="oss-card group flex h-full flex-col border border-border bg-card p-5 transition-colors duration-300 hover:border-foreground/25 hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {contribution.repo}
      </p>
      <h3 className="mt-3 font-display text-xl leading-tight transition-colors group-hover:text-primary">
        {contribution.title}
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
        {contribution.detail}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {contribution.language} · {contribution.domain}
      </p>
      <p className="mt-auto pt-4 font-mono text-xs">
        <span className="text-muted-foreground">PR #{contribution.prNumber}</span>
        {" · "}
        <span className={statusClass[contribution.status]}>{contribution.status}</span>
        {contribution.mergedAt ? (
          <span className="text-muted-foreground"> · {contribution.mergedAt}</span>
        ) : null}
      </p>
    </a>
  )
}

export function ActiveOssCard({
  contribution,
}: {
  contribution: ActiveContribution
}) {
  return (
    <a
      href={contribution.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Active PR #${contribution.prNumber} in ${contribution.repo}: ${contribution.title}`}
      className="oss-card group flex h-full flex-col border border-border/70 bg-card/60 p-5 transition-colors duration-300 hover:border-foreground/25 hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {contribution.repo}
        </p>
        <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-500">
          {contribution.status}
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg leading-tight transition-colors group-hover:text-primary">
        {contribution.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
        {contribution.detail}
      </p>
      <div className="mt-4 flex items-center justify-between font-mono text-xs">
        <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {contribution.language} · {contribution.domain}
        </span>
        <span className="text-muted-foreground">PR #{contribution.prNumber}</span>
      </div>
    </a>
  )
}

export function OpenSourceSection({
  contributions = featuredOpenSource,
  active = activeContributions,
  showAllLink = true,
  mergedCount,
}: {
  contributions?: OpenSourceContribution[]
  active?: ActiveContribution[]
  showAllLink?: boolean
  mergedCount?: string
}) {
  const displayCount = mergedCount ?? "100+"

  return (
    <section id="open-source" className="editorial-section scroll-mt-20 border-t">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="section-kicker">Open Source</span>
            <span className="inline-flex items-center rounded border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
              {displayCount} Merged Pull Requests
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Selected Open Source Contributions
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            {openSource.positioning} Status verified against GitHub on {openSource.verifiedOn}.
          </p>
        </div>
        {showAllLink ? (
          <Link
            href="/open-source"
            className="quiet-link group inline-flex items-center gap-2 pb-1 text-sm"
          >
            View all contributions
            <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </Link>
        ) : null}
      </div>

      <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {contributions.map((contribution) => (
          <OssCard key={contribution.href} contribution={contribution} />
        ))}
      </div>

      {active && active.length > 0 ? (
        <div className="mt-12 border-t border-border/60 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Active Work · In Review
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Current open pull requests under active review in C++ and systems software repositories.
              </p>
            </div>
          </div>
          <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {active.map((item) => (
              <ActiveOssCard key={item.href} contribution={item} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
