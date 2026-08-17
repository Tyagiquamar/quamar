import { cpProfiles } from "@/data/portfolio"

/**
 * GitHub contribution graph, rendered by a third-party image service
 * (github-readme-activity-graph). Shows real commit activity — NOT a
 * competitive-programming graph. The CP cards above link out to the
 * actual Codeforces/LeetCode/CodeChef profiles.
 */
export function CpGraph() {
  return (
    <div className="space-y-4">
      {/* CP profile links */}
      <div className="flex flex-wrap gap-3">
        {cpProfiles.map((p) => (
          <a
            key={p.platform}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 rounded-lg border bg-card px-4 py-3 transition-colors hover:border-primary/50"
          >
            <div>
              <p className="font-mono text-sm font-medium">{p.platform}</p>
              <p className="font-mono text-xs text-muted-foreground">{p.rating}</p>
            </div>
            <span className="font-mono text-xs text-primary">→</span>
          </a>
        ))}
      </div>

      {/* GitHub commit activity (real data via image service) */}
      <div className="rounded-lg border bg-card p-4">
        <p className="mb-3 font-mono text-xs text-muted-foreground">
          GitHub commit activity
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=Tyagiquamar&theme=github-compact&hide_border=true&area=true"
          alt="GitHub contribution graph for Tyagiquamar"
          className="w-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}
