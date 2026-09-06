import { ContactHandshakeLink } from "@/components/contact-handshake-link"
import { CpGraph } from "@/components/cp-graph"
import { Greeting } from "@/components/greeting"
import { HeroStats } from "@/components/hero-stats"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { CapabilityStrip } from "@/components/capability-strip"
import { OpenSourceSection } from "@/components/open-source-section"
import { ProjectGrid } from "@/components/project-card"
import { ExperienceList } from "@/components/experience-list"
import { TrackSelector } from "@/components/track-selector"
import { SiteFooter } from "@/components/site-footer"
import { ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  about,
  cpProfiles,
  hero,
  proofMarks,
  siteConfig,
  skillGroups,
  stats,
} from "@/data/portfolio"
import { homeSelectedProjects, homeSystemsProjects } from "@/lib/projects"

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
          className="object-contain p-1 grayscale transition duration-300 group-hover:grayscale-0"
        />
      ) : (
        mark ?? label.slice(0, 2)
      )}
    </span>
  )
}

export default function Portfolio() {
  const systems = homeSystemsProjects()
  const selected = homeSelectedProjects()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="editorial-section flex min-h-[92vh] flex-col justify-center pt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
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
              <a href="#contact" className="quiet-link">
                Contact
              </a>
              <a href="#systems" className="quiet-link">
                Systems work
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
                      <p className="mt-0.5 truncate font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <HeroStats role={hero.role} stats={stats} />
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

      <section id="systems" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Flagship systems</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Durable execution, CDC, and reorg-safe indexing.
            </p>
            <p className="mt-6 max-w-44 font-mono text-xs leading-5 text-muted-foreground">
              Live dashboards on free-tier hosting may take 30–60s to wake.
            </p>
            <Link href="/systems" className="quiet-link mt-8 inline-flex items-center gap-2 text-sm">
              Systems track
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectGrid projects={systems} />
        </div>
      </section>

      <TrackSelector />

      <section id="experience" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Experience</p>
            <p className="mt-4 max-w-36 text-sm text-muted-foreground">Most recent first.</p>
          </div>
          <ExperienceList />
        </div>
      </section>

      <OpenSourceSection />

      <section id="work" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Selected product and market systems</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Full-stack product work and the trading-systems flagship.
            </p>
            <Link href="/work" className="quiet-link mt-8 inline-flex items-center gap-2 text-sm">
              All work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectGrid projects={selected} />
        </div>
      </section>

      <FeaturedCaseStudy />

      <CapabilityStrip />

      <section id="signals" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <p className="section-kicker">Competitive programming</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Supporting evidence, not the engineering story.
            </p>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-3">
              {cpProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col border border-border/80 p-4 transition-colors hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {profile.platform}
                  </p>
                  <p className="mt-3 text-sm text-foreground">{profile.rating}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{profile.detail}</p>
                </a>
              ))}
            </div>
            <div className="mt-8">
              <CpGraph />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="editorial-section border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <p className="section-kicker">Toolkit</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="contact" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <p className="section-kicker">Contact</p>
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Reach out.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Open to focused backend and systems conversations, founding-team work, and software that
              needs careful shipping.
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
