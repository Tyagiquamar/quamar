import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { Greeting } from "@/components/greeting"
import { CpGraph } from "@/components/cp-graph"
import {
  ArrowRight,
  Code2,
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
  cpProfiles,
  experience,
  hero,
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <Greeting />
            <div className="space-y-3">
              <p className="font-mono text-sm text-primary">$ whoami</p>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                {hero.name.split(" ").map((word, i) => (
                  <span key={i} className={`word-reveal word-reveal-delay-${i + 1}`}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="font-mono text-lg text-primary sm:text-xl">{hero.role}</p>
              <p className="max-w-[560px] text-muted-foreground md:text-lg">{hero.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#work">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/resume.pdf" download aria-label="Download resume">
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <div className="relative h-72 w-72 overflow-hidden rounded-full ring-2 ring-border">
              <Image
                src={hero.photo}
                width={400}
                height={400}
                alt={hero.name}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y bg-muted/40">
        <div className="container grid grid-cols-2 gap-px px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 md:py-8">
              <p className="font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container scroll-mt-16 px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{about.body}</p>
          <div className="mt-8">
            <CpGraph />
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="scroll-mt-16 border-t bg-muted/40">
        <div className="container px-4 py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-sm text-primary">Experience</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Where I&apos;ve been shipping.
            </h2>
            <p className="mt-2 text-muted-foreground">Most recent first.</p>
            <div className="relative mt-10 space-y-10 border-l pl-8">
              {experience.map((job) => (
                <article key={`${job.company}-${job.dates}`} className="relative">
                  <span
                    className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ${
                      job.current ? "bg-primary ring-4 ring-primary/20" : "bg-muted-foreground/40"
                    }`}
                  />
                  <div
                    className={`rounded-lg border bg-card p-6 ${
                      job.current ? "border-primary/60 shadow-sm" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold">
                        {job.role} · {job.company}
                      </h3>
                      {job.current && <Badge>Current</Badge>}
                    </div>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {job.dates} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {job.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PaySaathi case study */}
      <section id={caseStudy.id} className="container scroll-mt-16 px-4 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm text-primary">Case study</p>
          <div className="mt-2 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {caseStudy.title}
              </h2>
              <p className="mt-1 text-lg text-muted-foreground">{caseStudy.subtitle}</p>
              <p className="mt-4 text-muted-foreground">{caseStudy.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-md border bg-muted/60 px-3 py-1.5 font-mono text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {caseStudy.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/paysaathi-architecture.svg"
                width={640}
                height={440}
                alt="PaySaathi architecture: Flutter app to Supabase Edge Functions to PostgreSQL double-entry ledger to external GSTN, WhatsApp, and Gemini services"
                className="w-full rounded-lg border bg-card"
              />
              <p className="mt-2 font-mono text-xs text-muted-foreground">{caseStudy.architecture.caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="scroll-mt-16 border-t bg-muted/40">
        <div className="container px-4 py-20 md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-sm text-primary">Selected work</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Products, not demos.
            </h2>
            <p className="mt-2 text-muted-foreground">
              A small selection of systems I&apos;ve designed and shipped. More on request.
            </p>
            <div className="mt-10 space-y-0">
              {projects.map((project, index) => {
                const isCaseStudy = project.kind === "case-study"
                return (
                  <Link
                    key={project.title}
                    href={project.href}
                    {...(isCaseStudy ? {} : { target: "_blank", rel: "noreferrer" })}
                    className="group block"
                  >
                    <div
                      className={`flex items-baseline gap-6 border-t py-6 transition-colors group-hover:bg-muted/30 ${
                        index === projects.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="font-mono text-sm text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                            {project.title}
                          </h3>
                          {isCaseStudy && <Badge variant="default">Case study</Badge>}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span key={tech} className="font-mono text-xs text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container scroll-mt-16 px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-sm text-primary">Toolkit</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What I reach for.
          </h2>
          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-sm text-muted-foreground">{group.title}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t bg-muted/40">
        <div className="container px-4 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-sm text-primary">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Reach out.
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground">
                  I&apos;m always interested in new opportunities and collaborations. Whether you have a project in
                  mind or just want to chat about systems and competitive programming, feel free to reach out.
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{siteConfig.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-primary" />
                    <Link href="https://github.com/Tyagiquamar" className="hover:underline">
                      github.com/Tyagiquamar
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="hover:underline">
                      linkedin.com/in/mohd-quamar-tyagi
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="font-display text-sm font-semibold">{siteConfig.name}</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}
