import ContactForm from "@/components/contact-form"
import { CpGraph } from "@/components/cp-graph"
import { Greeting } from "@/components/greeting"
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  about,
  caseStudy,
  experience,
  hero,
  proofMarks,
  projects,
  siteConfig,
  skillGroups,
  socials,
  stats,
} from "@/data/portfolio"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const

function NumberedLabel({ index }: { index: number }) {
  return (
    <span className="font-mono text-xs text-muted-foreground">
      {String(index + 1).padStart(2, "0")}
    </span>
  )
}

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
          className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
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
              <Link href="/resume.pdf" download className="quiet-link inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Link>
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

          <aside className="border-y py-5 text-sm text-muted-foreground lg:border-l lg:border-y-0 lg:pl-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground">
              {hero.role}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
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
          <div className="divide-y divide-border border-y">
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
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
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

      <section id={caseStudy.id} className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <p className="section-kicker">Takkada</p>
          <div>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <h2 className="font-display text-4xl leading-tight sm:text-6xl">
                  {caseStudy.title}
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {caseStudy.subtitle}
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {caseStudy.description}
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

            <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">
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
          </div>
        </div>
      </section>

      <section id="work" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-kicker">Selected work</p>
            <p className="mt-4 max-w-40 text-sm text-muted-foreground">
              Products and systems with the proof still visible.
            </p>
          </div>
          <div className="divide-y divide-border border-y">
            {projects.map((project, index) => {
              const isCaseStudy = project.kind === "case-study"
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  {...(isCaseStudy ? {} : { target: "_blank", rel: "noreferrer" })}
                  className="group motion-row grid gap-4 border border-transparent px-3 py-6 transition-colors hover:text-primary sm:grid-cols-[42px_1fr_auto]"
                >
                  <NumberedLabel index={index} />
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">
                      {project.tech.join(" / ")}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="signals" className="editorial-section scroll-mt-20 border-t">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">Reach out.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                I&apos;m open to focused engineering conversations, founding-team work, and systems that need careful shipping.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <Link href={`mailto:${siteConfig.email}`} className="quiet-link flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </Link>
                <Link href="https://github.com/Tyagiquamar" className="quiet-link flex items-center gap-3">
                  <Github className="h-4 w-4" />
                  github.com/Tyagiquamar
                </Link>
                <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="quiet-link flex items-center gap-3">
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/mohd-quamar-tyagi
                </Link>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </p>
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
            <ContactForm />
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
