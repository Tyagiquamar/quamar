import Image from "next/image"
import { experience, type Experience } from "@/data/portfolio"

function BrandMark({
  label,
  logo,
  mark,
}: {
  label: string
  logo?: string
  mark?: string
}) {
  return (
    <span
      className="brand-mark relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border border-border/80 bg-card text-xs font-mono font-medium text-foreground"
      aria-hidden="true"
    >
      {logo ? (
        <Image
          src={logo}
          alt=""
          fill
          sizes="44px"
          className="object-contain p-1 grayscale transition duration-300 group-hover:grayscale-0"
        />
      ) : (
        mark ?? label.slice(0, 2)
      )}
    </span>
  )
}

export function ExperienceList({ jobs = experience }: { jobs?: readonly Experience[] }) {
  return (
    <div className="divide-y divide-border border border-border/80">
      {jobs.map((job) => (
        <article
          key={`${job.company}-${job.dates}`}
          className="group motion-row grid gap-5 border border-transparent px-3 py-7 lg:grid-cols-[minmax(0,240px)_1fr]"
        >
          <div className="flex gap-4 lg:block">
            <BrandMark label={job.company} logo={job.logo} mark={job.mark} />
            <div>
              <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-primary">
                {job.company}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {job.dates}
              </p>
              {job.current && (
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Current
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {job.role} / {job.location}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{job.tech.join(" / ")}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
