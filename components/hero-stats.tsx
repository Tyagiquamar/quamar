"use client"

import { MicroEasterEgg } from "@/components/micro-easter-egg"
import type { Stat } from "@/data/portfolio"
import type { ReactNode } from "react"

const statEggs: Record<string, ReactNode> = {
  "5x": "hot path optimized",
  "139": (
    <span className="grid gap-0.5">
      <span>production footprint</span>
      <span>83 syncing from Tally</span>
    </span>
  ),
  "2038": "top 1% globally",
  "2400+": "top 0.6% globally",
}

const statToneClasses: Record<string, string> = {
  "2038": "rating-codeforces",
  "2400+": "rating-leetcode",
}

interface HeroFact {
  label: string
  value: string
}

export function HeroStats({
  role,
  stats,
  facts,
}: {
  role: string
  stats: readonly Stat[]
  facts: readonly HeroFact[]
}) {
  function onBeforeReveal(value: string) {
    if (value !== "139") return
    window.dispatchEvent(new CustomEvent("business-proof-ping"))
  }

  return (
    <aside className="border-y py-5 text-sm text-muted-foreground lg:border-l lg:border-y-0 lg:pl-8">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground">{role}</p>
      <dl className="mt-5 space-y-3 border-b border-border/60 pb-5">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {fact.label}
            </dt>
            <dd className="mt-0.5 text-sm text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <MicroEasterEgg
              normal={stat.value}
              reveal={statEggs[stat.value] ?? stat.value}
              ariaLabel={`Reveal ${stat.label} easter egg`}
              className={`stat-egg font-mono text-xl text-foreground ${
                statToneClasses[stat.value] ?? ""
              }`}
              revealClassName="text-sm"
              onBeforeReveal={() => onBeforeReveal(stat.value)}
            />
            <p className="mt-1 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
