import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig, socials } from "@/data/portfolio"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono uppercase tracking-[0.2em]">{siteConfig.name}</p>
        <p>
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
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-4 w-4" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
