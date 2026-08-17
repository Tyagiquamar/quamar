import { cpProfiles } from "@/data/portfolio"

/**
 * GitHub contribution graph, rendered by a third-party image service
 * (github-readme-activity-graph). Shows real commit activity — NOT a
 * competitive-programming graph. The CP cards above link out to the
 * actual Codeforces/LeetCode/CodeChef profiles.
 */
export function CpGraph() {
  return (
    <div className="space-y-6">
      <div className="divide-y divide-border border-y">
        {cpProfiles.map((p) => (
          <a
            key={p.platform}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-2 py-4 transition-colors hover:text-primary sm:grid-cols-[180px_1fr_auto] sm:items-baseline"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {p.platform}
            </p>
            <p className="text-sm text-foreground">{p.rating}</p>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
              {p.detail} -&gt;
            </span>
          </a>
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
