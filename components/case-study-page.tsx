import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Camera, Layers3 } from "lucide-react"
import { categoryLabels, type Project } from "@/data/projects"
import { caseStudy } from "@/data/portfolio"

function CaseStudyHeader({
  kicker,
  title,
  headline,
  liveHref,
  liveLabel,
  github,
}: {
  kicker: string
  title: string
  headline: string
  liveHref?: string
  liveLabel?: string
  github?: string
}) {
  return (
    <header>
      <Link
        href="/work"
        className="quiet-link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All work
      </Link>
      <p className="section-kicker mt-10">{kicker}</p>
      <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{title}</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {headline}
      </p>
      {liveHref || github ? (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {liveLabel ?? "Live"}
            </a>
          ) : null}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="quiet-link inline-flex items-center gap-1.5"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}

function BlockGrid({
  kicker,
  note,
  blocks,
}: {
  kicker: string
  note?: string
  blocks: { title: string; detail: string }[]
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div>
        <p className="section-kicker">{kicker}</p>
        {note ? (
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{note}</p>
        ) : null}
      </div>
      <div className="grid gap-px border border-border/80 bg-border/80 sm:grid-cols-2">
        {blocks.map((block) => (
          <div key={block.title} className="motion-row border border-transparent bg-background px-4 py-5">
            <h3 className="font-display text-xl leading-tight">{block.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{block.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenshotGrid({
  screenshots,
}: {
  screenshots: { title: string; detail: string; src: string }[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <figure
          key={shot.title}
          className="group overflow-hidden border border-border/80 bg-card/20"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={shot.src}
              alt={shot.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-2xl leading-tight">{shot.title}</p>
              <Camera className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{shot.detail}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function ProjectCaseStudyPage({ project }: { project: Project }) {
  const cs = project.caseStudy
  if (!cs) return null

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="editorial-section pt-28">
        <CaseStudyHeader
          kicker={`Case study · ${categoryLabels[project.category]}`}
          title={project.title}
          headline={cs.headline}
          liveHref={project.liveHref}
          liveLabel={project.liveLabel}
          github={project.github}
        />

        {project.visual ? (
          <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden border border-border/80 bg-card/30">
            <Image
              src={project.visual.src}
              alt={project.visual.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        ) : null}

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
          <p className="section-kicker">The problem</p>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{cs.problem}</p>
        </div>

        <div className="mt-14">
          <BlockGrid kicker="What I built" blocks={cs.built} />
        </div>

        <div className="mt-14">
          <BlockGrid kicker="Engineering decisions" blocks={cs.decisions} />
        </div>

        {cs.architecture ? (
          <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
            <p className="section-kicker">Architecture</p>
            <div>
              {cs.architecture.image ? (
                <Image
                  src={cs.architecture.image}
                  width={640}
                  height={440}
                  alt={cs.architecture.caption}
                  className="w-full border border-border/80 bg-card/30"
                />
              ) : null}
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {cs.architecture.caption}
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
          <p className="section-kicker">Testing & CI</p>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{cs.testing}</p>
        </div>

        {cs.screenshots && cs.screenshots.length > 0 ? (
          <div className="mt-14">
            <p className="section-kicker mb-6">Screenshots</p>
            <ScreenshotGrid screenshots={cs.screenshots} />
          </div>
        ) : null}

        <p className="mt-14 border-t pt-6 font-mono text-xs text-muted-foreground">
          {project.tech.join(" / ")}
        </p>
      </article>
    </main>
  )
}

export function TakkadaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="editorial-section pt-28">
        <CaseStudyHeader
          kicker="Case study · Founding Engineer · Production ERP"
          title={caseStudy.title}
          headline={caseStudy.subtitle}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              {caseStudy.description}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-primary">
              {caseStudy.growthNote}
            </p>
          </div>
          <div className="border-y py-4">
            {caseStudy.metrics.map((metric) => (
              <p key={metric} className="border-b py-3 font-mono text-sm last:border-b-0">
                {metric}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="section-kicker">Stack</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {caseStudy.tech.join(" / ")}
            </p>
          </div>
          <div>
            <Image
              src="/images/paysaathi-architecture.svg"
              width={640}
              height={440}
              alt="PaySaathi architecture: Flutter app to Supabase Edge Functions to PostgreSQL double-entry ledger to external GSTN, WhatsApp, and Gemini services"
              className="w-full border border-border/80 bg-card/30"
            />
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {caseStudy.architecture.caption}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="section-kicker mb-6">Product surfaces</p>
          <ScreenshotGrid screenshots={[...caseStudy.screenshots]} />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="section-kicker">What I owned</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              The work spans product surfaces, data model, backend functions, admin operations,
              and the desktop sync edge.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {caseStudy.ownership.map((item) => (
              <div key={item.title} className="motion-row border border-transparent border-t px-3 py-4">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <BlockGrid
            kicker="What shipped"
            note="Mined from the local PaySaathi/Takkada app, backend, admin dashboard, and loader histories."
            blocks={[...caseStudy.proofTrail]}
          />
        </div>
      </article>
    </main>
  )
}
