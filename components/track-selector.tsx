import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { trackOrder, tracks, type EngineeringTrack } from "@/data/tracks"
import { SectionHeading } from "@/components/section-heading"

export function TrackSelector({
  active,
}: {
  active?: EngineeringTrack
}) {
  return (
    <section id="tracks" className="editorial-band scroll-mt-20 border-t">
      <SectionHeading
        kicker="Tracks"
        title="Explore by Focus"
        description="Same site, same design. Emphasis changes; identity does not."
      />
      <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3">
        {trackOrder.map((slug) => {
          const track = tracks[slug]
          const isActive = active === slug
          return (
            <Link
              key={slug}
              href={track.href}
              aria-current={isActive ? "page" : undefined}
              className={`group flex h-full flex-col border p-4 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive
                  ? "border-foreground/25 bg-card"
                  : "border-border bg-card hover:border-foreground/25 hover:bg-card-hover"
              }`}
            >
              <h3 className="flex items-center justify-between gap-3 font-display text-xl leading-tight transition-colors group-hover:text-primary">
                {track.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{track.homeNote}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
