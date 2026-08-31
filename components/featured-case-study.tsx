import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { caseStudy } from "@/data/portfolio"

export const takkadaPreview = {
  descriptor: "Founding Engineer · Production ERP",
  summary:
    "Production accounting & ERP platform built end-to-end as first engineer: a double-entry accounting core in PostgreSQL, filing-ready GST compliance, WhatsApp automation, and an AI document-import pipeline — replacing Tally workflows for real businesses.",
  visual: {
    src: "/images/takkada-invoice-detail.png",
    alt: "PaySaathi GST sales invoice: line items with HSN and GST split, e-invoice and e-way bill actions, share over WhatsApp",
  },
} as const

export function FeaturedCaseStudy() {
  return (
    <section id={caseStudy.id} className="editorial-section scroll-mt-20 border-t">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <p className="section-kicker">Featured case study</p>
          <p className="mt-4 max-w-40 text-sm text-muted-foreground">
            Real production, real customers, full ownership.
          </p>
        </div>
        <div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">
                {caseStudy.title}
              </h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {takkadaPreview.descriptor}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {takkadaPreview.summary}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {caseStudy.growthNote}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-px border border-border/80 bg-border/80">
                {caseStudy.metrics.map((metric) => {
                  const [value, ...rest] = metric.split(" · ")
                  return (
                    <div key={metric} className="bg-background px-4 py-4">
                      <p className="font-display text-2xl leading-tight">{value}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {rest.join(" · ")}
                      </p>
                    </div>
                  )
                })}
              </div>

              <p className="mt-6 font-mono text-xs text-muted-foreground">
                {caseStudy.tech.join(" / ")}
              </p>
              <div className="mt-6">
                <Link
                  href="/work/takkada"
                  className="quiet-link inline-flex items-center gap-2 text-sm"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <Link
              href="/work/takkada"
              aria-label="Read the Takkada case study"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border/80 bg-card/30">
                <Image
                  src={takkadaPreview.visual.src}
                  alt={takkadaPreview.visual.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                GST sales invoice in PaySaathi — HSN/GST split, e-invoice and e-way bill actions, WhatsApp delivery.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
