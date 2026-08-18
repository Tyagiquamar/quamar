"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface MicroEasterEggProps {
  normal: ReactNode
  reveal: ReactNode
  className?: string
  revealClassName?: string
  duration?: number
  ariaLabel?: string
  onBeforeReveal?: () => void
}

export function MicroEasterEgg({
  normal,
  reveal,
  className,
  revealClassName,
  duration = 1800,
  ariaLabel,
  onBeforeReveal,
}: MicroEasterEggProps) {
  const [revealed, setRevealed] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  function trigger() {
    onBeforeReveal?.()
    setRevealed(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setRevealed(false), duration)
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={trigger}
      className={`micro-egg ${revealed ? "is-revealed" : ""} ${className ?? ""}`}
    >
      <span className="micro-egg-normal" aria-hidden={revealed}>
        {normal}
      </span>
      <span className={`micro-egg-reveal ${revealClassName ?? ""}`} aria-hidden={!revealed}>
        {reveal}
      </span>
    </button>
  )
}
