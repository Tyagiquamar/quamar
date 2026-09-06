import { ContactHandshakeLink } from "@/components/contact-handshake-link"
import { CpGraph } from "@/components/cp-graph"
import { Greeting } from "@/components/greeting"
import { HeroStats } from "@/components/hero-stats"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { CapabilityStrip } from "@/components/capability-strip"
import { OpenSourceSection } from "@/components/open-source-section"
import { ProjectGrid } from "@/components/project-card"
import { ExperienceList } from "@/components/experience-list"
import { SectionHeading } from "@/components/section-heading"
import { TrackSelector } from "@/components/track-selector"
import { SiteFooter } from "@/components/site-footer"
import { ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  about,
  hero,
  proofMarks,
  siteConfig,
  skillGroups,
  stats,
} from "@/data/portfolio"
import { featuredOpenSource, openSource } from "@/data/opensource"
import { trackOrder, tracks } from "@/data/tracks"
import { homeFeaturedProjects } from "@/lib/projects"

function BrandMark({
  label,
  logo,
  mark,
  size = "md",
}: {
  label: string
  logo?: string
  mark?: string
  size?: "sm" | "md"
}) {
  const classes = size === "sm" ? "h-8 w-8 text-[10px]" : "h-11 w-11 text-xs"

  return (
    <span
      className={`${classes} brand-mark relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-border/80 bg-card font-mono font-medium text-foreground`}
      aria-hidden="true"
    >
      {logo ? (
        <Image
          src={logo}
          alt=""
          fill
          sizes={size === "sm" ? "32px" : "44px"}
          className="object-contain p-1"
        />
      ) : (
        mark ?? label.slice(0, 2)
      )}
    </span>
  )
}

export default function Portfolio() {
  const selected = homeFeaturedProjects()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="editorial-section flex flex-col justify-center pt-28 lg:min-h-[80vh]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <Greeting />
            <h1 className="cool-title mt-8 max-w-5xl text-balance font-display text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
              {hero.name.split(" ").map((word, i) => (
                <span key={i} className={`word-reveal word-reveal-delay-${i + 1}`}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              {hero.role}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {hero.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{hero.current}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="/resume.pdf" download className="quiet-link inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a href="#experience" className="quiet-link">
                Experience
              </a>
              <a href="#contact" className="quiet-link">
                Contact
              </a>
            </div>
            <div className="mt-12 border-y py-4">
              <p className="section-kicker">Current engineering focus</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {proofMarks.map((item) => (
                  <div
                    key={item.label}
                    className="group motion-row flex items-center gap-3 border border-transparent p-2"
                  >
                    <BrandMark label={item.label} logo={item.logo} mark={item.mark} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-sm text-foreground">{item.label}</p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase leading-4 tracking-[0.16em] text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <HeroStats
            role={hero.role}
            stats={stats}
            facts={[
              { label: "Current", value: "Founding Engineer · Takkada" },
              { label: "Previous", value: hero.previous },
              { label: "Focus", value: hero.focus },
              {
                label: "Open Source",
                value: `${openSource.mergedTotal} upstream PRs merged`,
              },
              { label: "Location", value: siteConfig.location },
            ]}
          />
        </div>
      </section>

      <section id="experience" className="editorial-section scroll-mt-20 border-t">
        <SectionHeading
          kicker="Experience"
          title="Professional Experience"
          description="Most recent first. Summaries here; the Takkada case study carries the detail."
        />
        <div className="mt-8">
          <ExperienceList variant="home" />
        </div>
      </section>

      <FeaturedCaseStudy />

      <section id="work" className="editorial-section scroll-mt-20 border-t">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading
            kicker="Selected Work"
            title="Selected Engineering Work"
            description="A sample across systems, trading infrastructure, and product. The full project sets live on the track pages."
            className="max-w-2xl"
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-1 text-sm">
            {trackOrder.map((slug) => (
              <Link
                key={slug}
                href={tracks[slug].href}
                className="quiet-link group inline-flex items-center gap-2"
              >
                {tracks[slug].title}
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <ProjectGrid projects={selected} />
        </div>
      </section>

      <TrackSelector />

      <OpenSourceSection contributions={featuredOpenSource.slice(0, 6)} />

      <CapabilityStrip />

      <section id="signals" className="editorial-section scroll-mt-20 border-t">
        <SectionHeading
          kicker="Signals"
          title="Engineering Signals"
          description="Competitive programming as supporting evidence, not the engineering story, and the day-to-day toolkit."
        />
        <div className="mt-10 space-y-10">
          <CpGraph />
          <div id="skills" className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-t pt-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground">{group.skills.join(" / ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <p className="section-kicker">About</p>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">{about.heading}</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{about.body}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <p className="section-kicker">Contact</p>
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Reach out.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Open to software engineering and founding-team opportunities, especially where
              backend depth, product ownership and reliable systems matter.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <ContactHandshakeLink email={siteConfig.email} />
              <Link href="https://github.com/Tyagiquamar" className="quiet-link flex items-center gap-3">
                <Github className="h-4 w-4" />
                github.com/Tyagiquamar
              </Link>
              <Link
                href="https://linkedin.com/in/mohd-quamar-tyagi"
                className="quiet-link flex items-center gap-3"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/mohd-quamar-tyagi
              </Link>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </p>
              <a href="/resume.pdf" download className="quiet-link inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
