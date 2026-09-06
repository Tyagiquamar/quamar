import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { trackOrder, tracks, type EngineeringTrack } from "@/data/tracks"

export function TrackSelector({
  active,
}: {
  active?: EngineeringTrack
}) {
  return (
    <section id="tracks" className="editorial-section scroll-mt-20 border-t">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <p className="section-kicker">Explore by engineering focus</p>
          <p className="mt-4 max-w-40 text-sm text-muted-foreground">
            Same site, same design. Emphasis changes; identity does not.
          </p>
        </div>
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {trackOrder.map((slug) => {
            const track = tracks[slug]
            const isActive = active === slug
            return (
              <Link
                key={slug}
                href={track.href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex h-full flex-col border p-5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "border-border bg-card/40"
                    : "border-border/80 bg-card/20 hover:border-border"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {track.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight transition-colors group-hover:text-primary">
                  {track.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{track.homeNote}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm">
                  Open track
                  <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
