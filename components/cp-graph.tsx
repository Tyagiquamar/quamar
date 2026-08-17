"use client"

import { useState } from "react"
import { cpProfiles } from "@/data/portfolio"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Simulated contribution graph — intensity levels 0-4
// In a real implementation, this would come from the Codeforces/LeetCode API
function generateContribData(): number[][] {
  const weeks: number[][] = []
  for (let w = 0; w < 52; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      // Higher intensity for recent months (simulating consistency)
      const base = w > 40 ? 0.7 : w > 20 ? 0.5 : 0.3
      week.push(Math.random() < base ? Math.floor(Math.random() * 4) + 1 : 0)
    }
    weeks.push(week)
  }
  return weeks
}

const intensityColors = [
  "bg-muted",           // 0 — no activity
  "bg-primary/20",      // 1 — light
  "bg-primary/40",      // 2 — moderate
  "bg-primary/70",      // 3 — high
  "bg-primary",         // 4 — very high
]

export function CpGraph() {
  const [activeTab, setActiveTab] = useState(0)
  const [data] = useState(generateContribData)
  const profile = cpProfiles[activeTab]

  return (
    <div className="space-y-4">
      {/* Tab bar */}
      <div className="flex gap-1 rounded-lg border bg-muted/40 p-1">
        {cpProfiles.map((p, i) => (
          <button
            key={p.platform}
            onClick={() => setActiveTab(i)}
            className={`flex-1 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
              i === activeTab
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {p.platform}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 rounded-lg border bg-card p-4">
        <div>
          <p className="font-mono text-2xl font-semibold">{profile.rating.split("·")[1]?.trim() || profile.rating}</p>
          <p className="font-mono text-xs text-muted-foreground">Current rating</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold">{profile.detail}</p>
          <p className="font-mono text-xs text-muted-foreground">Global rank</p>
        </div>
        <div>
          <a
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-primary hover:underline"
          >
            View profile →
          </a>
        </div>
      </div>

      {/* Contribution graph */}
      <div className="rounded-lg border bg-card p-4">
        <p className="mb-3 font-mono text-xs text-muted-foreground">Consistency over the last 12 months</p>
        <div className="overflow-x-auto">
          <div className="inline-grid grid-flow-col gap-[3px]">
            {data.map((week, wi) => (
              <div key={wi} className="grid grid-rows-7 gap-[3px]">
                {week.map((level, di) => (
                  <div
                    key={di}
                    className={`h-[10px] w-[10px] rounded-sm ${intensityColors[level]}`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1">
            {months.slice(0, 6).map((m) => (
              <span key={m} className="font-mono text-[10px] text-muted-foreground">{m}</span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-mono text-[10px] text-muted-foreground">Less</span>
            {intensityColors.map((c, i) => (
              <div key={i} className={`h-[10px] w-[10px] rounded-sm ${c}`} />
            ))}
            <span className="font-mono text-[10px] text-muted-foreground">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
