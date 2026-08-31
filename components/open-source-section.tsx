import { ArrowUpRight } from "lucide-react"
import { openSource } from "@/data/projects"

export function OpenSourceSection() {
  return (
    <section id="open-source" className="editorial-section scroll-mt-20 border-t">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <p className="section-kicker">Open source</p>
          <p className="mt-4 max-w-40 text-sm text-muted-foreground">
            Proof of landing fixes in unfamiliar production codebases.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <p className="font-display text-3xl leading-tight sm:text-4xl">
              {openSource.mergedPRs} merged PRs · {openSource.upstreamRepos} upstream repositories
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {openSource.positioning}
          </p>

          <div className="mt-8 divide-y divide-border border border-border/80">
            {openSource.contributions.map((contribution) => (
              <a
                key={contribution.pr}
                href={contribution.pr}
                target="_blank"
                rel="noreferrer"
                aria-label={`Merged PR in ${contribution.repo}: ${contribution.title}`}
                className="group motion-row grid gap-2 border border-transparent px-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {contribution.repo}
                    </p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {contribution.language}
                    </p>
                  </div>
                  <h3 className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-primary">
                    {contribution.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {contribution.detail}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary sm:block" />
              </a>
            ))}
          </div>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Merged counts verified against GitHub, Aug 2026
          </p>
        </div>
      </div>
    </section>
  )
}
