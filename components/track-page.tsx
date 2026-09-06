import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { ExperienceList } from "@/components/experience-list"
import { ProjectGrid } from "@/components/project-card"
import { TrackSelector } from "@/components/track-selector"
import { siteConfig } from "@/data/portfolio"
import { additionalProjects, projectsForTrack } from "@/lib/projects"
import { tracks, type EngineeringTrack } from "@/data/tracks"

const earlierExperiments = [
  {
    title: "order-book-sim",
    href: "https://github.com/Tyagiquamar/order-book-sim",
    detail: "Earlier order-book simulation experiment, superseded by ApexBook and QuantXecute.",
  },
  {
    title: "order-matching-cp",
    href: "https://github.com/Tyagiquamar/order-matching-cp",
    detail: "Earlier matching experiment, superseded by ApexBook.",
  },
] as const

export function trackMetadata(track: EngineeringTrack): Metadata {
  const meta = tracks[track]
  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: meta.href },
    openGraph: {
      title: `${meta.title} · ${siteConfig.name}`,
      description: meta.summary,
      url: `${siteConfig.url}${meta.href}`,
    },
  }
}

export function TrackPage({ track }: { track: EngineeringTrack }) {
  const meta = tracks[track]
  const primary = projectsForTrack(track)
  const extra = track === "fullstack" ? additionalProjects() : []

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="editorial-section pt-28">
        <Link
          href="/"
          className="quiet-link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Home
        </Link>
        <p className="section-kicker mt-10">{meta.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{meta.summary}</p>
        {track === "quant" ? (
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            This is trading-systems and performance engineering on public market data and
            simulated execution, not employment quant experience, and not live-money trading.
          </p>
        ) : null}

        <section className="mt-16" aria-labelledby="track-projects">
          <h2 id="track-projects" className="section-kicker">
            Selected projects
          </h2>
          <div className="mt-6">
            <ProjectGrid projects={primary} />
          </div>
        </section>

        {track === "quant" ? (
          <section className="mt-16 border-t pt-10" aria-labelledby="earlier-experiments">
            <h2 id="earlier-experiments" className="section-kicker">
              Earlier market-systems experiments
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              GitHub-only precursors. They are not flagship work.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {earlierExperiments.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col border border-border/80 p-5 transition-colors hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    GitHub
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm">
                    Repository
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </p>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {extra.length > 0 ? (
          <section className="mt-16 border-t pt-10" aria-labelledby="additional-work">
            <h2 id="additional-work" className="section-kicker">
              Additional engineering work
            </h2>
            <div className="mt-6">
              <ProjectGrid projects={extra} />
            </div>
          </section>
        ) : null}

        <section className="mt-16 border-t pt-10" aria-labelledby="track-experience">
          <h2 id="track-experience" className="section-kicker">
            Experience
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            Shared history across tracks. Roles are not rewritten to match the page.
          </p>
          <div className="mt-6">
            <ExperienceList />
          </div>
        </section>
      </div>

      <TrackSelector active={track} />
      <SiteFooter />
    </main>
  )
}
