import { Reveal } from "@/components/reveal"

export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: {
  kicker: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <Reveal className={className}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-3">
        {title}
        <span className="section-title-rule" aria-hidden="true" />
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
