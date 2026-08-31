import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ProjectGrid } from "@/components/project-card"
import { takkadaPreview } from "@/components/featured-case-study"
import { caseStudy, siteConfig } from "@/data/portfolio"
import { categoryLabels, projects, type ProjectCategory } from "@/data/projects"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products and systems by Mohd Quamar Tyagi: the Takkada production ERP case study, AI product workflows, and Go backend/infrastructure systems with live dashboards.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work · ${siteConfig.name}`,
    description:
      "Production ERP case study, AI product workflows, and Go systems with live dashboards.",
    url: `${siteConfig.url}/work`,
  },
}

const categoryOrder: ProjectCategory[] = ["product", "systems", "frontend"]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="editorial-section pt-28">
        <p className="section-kicker">Work</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Real products end-to-end, and the systems underneath them.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A production ERP shipped as founding engineer, AI workflows with human-in-the-loop
          safety, realtime collaboration, and Go systems built around durability, CDC and
          crash recovery.
        </p>

        <section aria-labelledby="work-featured" className="mt-16">
          <h2 id="work-featured" className="section-kicker">
            Featured case study
          </h2>
          <Link
            href="/work/takkada"
            className="group mt-6 grid gap-0 border border-border/80 bg-card/20 transition-colors hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]"
          >
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {takkadaPreview.descriptor}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight transition-colors group-hover:text-primary sm:text-4xl">
                {caseStudy.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                {takkadaPreview.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                {caseStudy.metrics.map((metric) => (
                  <p key={metric}>{metric}</p>
                ))}
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors group-hover:text-primary group-hover:decoration-primary">
                Read the case study
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden border-t border-border/80 bg-card/30 lg:aspect-auto lg:border-l lg:border-t-0">
              <Image
                src={takkadaPreview.visual.src}
                alt={takkadaPreview.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </section>

        {categoryOrder.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category)
          if (categoryProjects.length === 0) return null
          return (
            <section
              key={category}
              aria-labelledby={`work-${category}`}
              className="mt-16 border-t pt-10"
            >
              <h2 id={`work-${category}`} className="section-kicker">
                {categoryLabels[category]}
              </h2>
              <div className="mt-6">
                <ProjectGrid projects={categoryProjects} />
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
