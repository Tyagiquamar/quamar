"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/data/portfolio"

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (href.startsWith("/#")) return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <Link
          href="/"
          className={`shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary ${focusRing}`}
        >
          MQT
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-border/70 bg-background/80 px-2 py-1.5 text-xs text-muted-foreground shadow-sm xl:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`${focusRing} rounded-full px-2.5 py-1.5 transition-colors hover:text-foreground ${
                  active ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-4 border border-border/70 bg-background/95 p-2 shadow-sm backdrop-blur xl:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`${focusRing} min-h-11 px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
