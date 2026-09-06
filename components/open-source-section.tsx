import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredOpenSource, openSource, type OpenSourceContribution, type OssStatus } from "@/data/opensource"

const statusClass: Record<OssStatus, string> = {
  MERGED: "text-primary",
  "IN REVIEW": "text-foreground",
  "MAINTAINER REVIEW": "text-foreground",
  OPEN: "text-muted-foreground",
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
      className="oss-card group flex h-full flex-col border border-border/80 bg-card/20 p-5 transition-colors duration-300 hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
      </p>
    </a>
  )
}

export function OpenSourceSection({
  contributions = featuredOpenSource,
  showAllLink = true,
}: {
  contributions?: OpenSourceContribution[]
  showAllLink?: boolean
}) {
  return (
    <section id="open-source" className="editorial-section scroll-mt-20 border-t">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <p className="section-kicker">Selected open source engineering</p>
          <p className="mt-4 max-w-40 text-sm text-muted-foreground">
            Curated upstream work. Status checked against GitHub on {openSource.verifiedOn}.
          </p>
          {showAllLink ? (
            <Link href="/open-source" className="quiet-link mt-8 inline-flex items-center gap-2 text-sm">
              View all contributions
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
        <div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {openSource.positioning}
          </p>
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2">
            {contributions.map((contribution) => (
              <OssCard key={contribution.href} contribution={contribution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
