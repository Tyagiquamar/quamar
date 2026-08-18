"use client"

import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { cpProfiles } from "@/data/portfolio"

const cpEggs: Record<string, { title: string; detail: string }> = {
  Codeforces: {
    title: "Candidate Master unlocked",
    detail: "2038",
  },
  LeetCode: {
    title: "Accepted ✓",
    detail: "Guardian · Top 0.6%",
  },
}

const ratingToneClasses: Record<string, string> = {
  Codeforces: "rating-codeforces",
  LeetCode: "rating-leetcode",
}

function CpProfileRow({ profile }: { profile: (typeof cpProfiles)[number] }) {
  const [revealed, setRevealed] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const egg = cpEggs[profile.platform]

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!egg || revealed) return
    event.preventDefault()
    setRevealed(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setRevealed(false), 1800)
  }

  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className="group motion-row grid gap-2 border border-transparent px-3 py-4 transition-colors hover:text-primary sm:grid-cols-[180px_1fr_auto] sm:items-baseline"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {profile.platform}
      </p>
      <p className={`text-sm ${ratingToneClasses[profile.platform] ?? "text-foreground"}`}>
        {revealed && egg ? egg.title : profile.rating}
      </p>
      <span className={`font-mono text-xs transition duration-300 group-hover:translate-x-1 ${ratingToneClasses[profile.platform] ?? "text-muted-foreground group-hover:text-primary"}`}>
        {revealed && egg ? egg.detail : profile.detail} -&gt;
      </span>
    </a>
  )
}

/**
 * GitHub contribution graph, rendered by a third-party image service
 * (github-readme-activity-graph). Shows real commit activity — NOT a
 * competitive-programming graph. The CP cards above link out to the
 * actual Codeforces/LeetCode/CodeChef profiles.
 */
export function CpGraph() {
  return (
    <div className="space-y-6">
      <div className="divide-y divide-border border border-border/80">
        {cpProfiles.map((p) => (
          <CpProfileRow key={p.platform} profile={p} />
        ))}
      </div>

      <div className="border border-border/80 bg-card/30 p-3">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          GitHub commit activity
        </p>
        <div className="min-h-36 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Tyagiquamar&theme=github-dark-dimmed&hide_border=true&area=true&bg_color=0a0a0a&color=9ca3af&line=22c7a9&point=e5e7eb&area_color=22c7a9"
            alt="GitHub contribution graph for Tyagiquamar"
            className="w-full min-w-[620px] opacity-85 grayscale-[20%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
