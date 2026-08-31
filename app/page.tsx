import { ContactHandshakeLink } from "@/components/contact-handshake-link"
import { CpGraph } from "@/components/cp-graph"
import { Greeting } from "@/components/greeting"
import { HeroStats } from "@/components/hero-stats"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { CapabilityStrip } from "@/components/capability-strip"
import { OpenSourceSection } from "@/components/open-source-section"
import { ProjectGrid } from "@/components/project-card"
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  about,
  experience,
  hero,
  proofMarks,
  siteConfig,
  skillGroups,
  socials,
  stats,
} from "@/data/portfolio"
import { featuredProjects } from "@/data/projects"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const

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
  const classes =
    size === "sm"
      ? "h-8 w-8 text-[10px]"
      : "h-11 w-11 text-xs"

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
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {hero.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="/resume.pdf" download className="quiet-link inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
              <Link href="#contact" className="quiet-link">
                Contact
              </Link>
              <Link href="#work" className="quiet-link">
                Selected work
              </Link>
            </div>
            <div className="mt-12 border-y py-4">
              <p className="section-kicker">Proof marks</p>
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

      <section id="experience" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Experience</p>
            <p className="mt-4 max-w-36 text-sm text-muted-foreground">Most recent first.</p>
          </div>
          <div className="divide-y divide-border border border-border/80">
            {experience.map((job) => (
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
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    {job.tech.join(" / ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCaseStudy />

      <section id="work" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Selected work</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Products and systems with the proof still visible.
            </p>
            <p className="mt-6 max-w-44 font-mono text-xs leading-5 text-muted-foreground">
              The Go systems run live on free-tier hosting with self-generating traffic; first
              request may wake the instance (~30-60s).
            </p>
            <Link
              href="/work"
              className="quiet-link mt-8 inline-flex items-center gap-2 text-sm"
            >
              All work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <CapabilityStrip />

      <OpenSourceSection />

      <section id="signals" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <p className="section-kicker">Signals</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Competitive programming and repository activity, kept quiet.
            </p>
          </div>
          <CpGraph />
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
              I&apos;m open to focused engineering conversations, founding-team work, and systems that need careful shipping.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <ContactHandshakeLink email={siteConfig.email} />
              <Link href="https://github.com/Tyagiquamar" className="quiet-link flex items-center gap-3">
                <Github className="h-4 w-4" />
                github.com/Tyagiquamar
              </Link>
              <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="quiet-link flex items-center gap-3">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/mohd-quamar-tyagi
              </Link>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </p>
              <Link href="/resume.pdf" download className="quiet-link inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.2em]">{siteConfig.name}</p>
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </main>
  )
}
