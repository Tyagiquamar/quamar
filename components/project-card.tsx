import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { trackLabels, type Project } from "@/data/projects"

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = project.caseStudy ? `/work/${project.slug}` : undefined
  const primaryHref = caseStudyHref ?? project.liveHref ?? project.github
  const primaryExternal = !caseStudyHref && primaryHref.startsWith("http")

  return (
    <article className="project-card group">
      <Link
        href={primaryHref}
        {...(primaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        aria-label={
          caseStudyHref
            ? `Read the ${project.title} case study`
            : `Open ${project.title}`
        }
        className={`block ${focusRing}`}
      >
        <div className="card-visual relative aspect-[16/9] w-full overflow-hidden border-b border-border/80 bg-card/30">
          {project.visual ? (
            <Image
              src={project.visual.src}
              alt={project.visual.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top grayscale-[45%] transition duration-500 group-hover:scale-[1.015] group-hover:grayscale-0 motion-reduce:transform-none"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {project.title}
            </div>
          )}
        </div>
      </Link>

      <div className="flex min-h-0 flex-1 flex-col p-5">
        <div className="card-header">
          <Link
            href={primaryHref}
            {...(primaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`${focusRing} transition-colors group-hover:text-primary`}
          >
            <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
          </Link>
        </div>
        <p className="card-descriptor mt-1.5 font-mono text-xs text-muted-foreground">
          {trackLabels[project.track]} · {project.descriptor}
        </p>
        <p className="card-description mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <p className="card-tech mt-3 line-clamp-2 min-h-[2.5rem] font-mono text-xs leading-5 text-muted-foreground">
          {project.tech.join(" / ")}
        </p>

        <div className="card-spacer flex-1" aria-hidden />

        <div className="card-actions mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/60 pt-4">
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className={`quiet-link inline-flex min-h-9 items-center gap-1.5 text-sm ${focusRing}`}
            >
              Case study
              <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          ) : null}
          {project.liveHref ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-9 items-center gap-1.5 border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary ${focusRing}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {project.liveLabel ?? "Live"}
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className={`inline-flex min-h-9 items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid grid items-stretch gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
