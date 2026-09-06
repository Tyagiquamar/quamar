import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
      className="brand-mark relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border border-border bg-card text-xs font-mono font-medium text-foreground"
      aria-hidden="true"
    >
      {logo ? (
        <Image
          src={logo}
          alt=""
          fill
          sizes="44px"
          className="object-contain p-1"
        />
      ) : (
        mark ?? label.slice(0, 2)
      )}
    </span>
  )
}

export function ExperienceList({
  jobs = experience,
  variant = "full",
}: {
  jobs?: readonly Experience[]
  variant?: "full" | "home"
}) {
  return (
    <div className="row-stack divide-y divide-border">
      {jobs.map((job) => {
        const bullets = variant === "home" ? (job.homeBullets ?? job.bullets) : job.bullets
        return (
          <article
            key={`${job.company}-${job.dates}`}
            className="group motion-row grid gap-x-8 gap-y-5 px-4 py-8 md:px-6 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,230px)_minmax(0,1fr)_minmax(0,200px)]"
          >
            <div className="flex gap-4 lg:block">
              <BrandMark label={job.company} logo={job.logo} mark={job.mark} />
              <div>
                <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-primary">
                  {job.company}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {job.dates}
                  {job.current && <span className="text-primary"> · Current</span>}
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-medium text-foreground md:text-lg">{job.role}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {job.location}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-foreground/85">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-start-2 xl:col-start-3 xl:border-l xl:border-border xl:pl-5">
              <p className="font-mono text-xs leading-6 text-muted-foreground">
                {job.tech.join(" / ")}
              </p>
              {variant === "home" && job.caseStudyHref ? (
                <Link
                  href={job.caseStudyHref}
                  className="quiet-link group mt-4 inline-flex items-center gap-2 text-sm"
                >
                  Case study
                  <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </Link>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
