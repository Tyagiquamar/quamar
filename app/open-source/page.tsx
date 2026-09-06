import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { OpenSourceSection } from "@/components/open-source-section"
import { SiteFooter } from "@/components/site-footer"
import { openSource } from "@/data/opensource"
import { siteConfig } from "@/data/portfolio"

export const metadata: Metadata = {
  title: "Open source",
  description: openSource.positioning,
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: `Open source · ${siteConfig.name}`,
    description: openSource.positioning,
    url: `${siteConfig.url}/open-source`,
  },
}

export default function OpenSourcePage() {
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
        <p className="section-kicker mt-10">Open source</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Selected open source engineering
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {openSource.positioning} Probe PRs, README-only edits, and closed write-access tests are
          not listed.
        </p>
      </div>
      <OpenSourceSection contributions={openSource.contributions} showAllLink={false} />
      <SiteFooter />
    </main>
  )
}
