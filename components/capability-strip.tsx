import { capabilityAreas } from "@/data/projects"

export function CapabilityStrip() {
  return (
    <section id="stack" className="editorial-section scroll-mt-20 border-t">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <p className="section-kicker">Across the stack</p>
        <p className="text-sm text-muted-foreground">
          Ownership across the whole surface, not a skill list.
        </p>
      </div>
      <div className="capability-grid mt-8 grid grid-cols-1 gap-px border border-border/80 bg-border/80 sm:grid-cols-2 lg:grid-cols-6">
        {capabilityAreas.map((area) => (
          <div
            key={area.title}
            className="capability-cell motion-row flex h-full flex-col border border-transparent bg-background px-4 py-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">
              {area.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{area.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
