"use client"

import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

export function ContactHandshakeLink({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false)
  const armed = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (armed.current) return
    event.preventDefault()
    setRevealed(true)
    armed.current = true
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setRevealed(false)
      window.location.href = `mailto:${email}`
    }, 900)
  }

  return (
    <Link href={`mailto:${email}`} onClick={onClick} className="quiet-link contact-handshake flex items-center gap-3">
      <Mail className="h-4 w-4" />
      <span className={revealed ? "is-revealed" : ""}>
        {revealed ? "SYN → SYN-ACK → ACK" : email}
      </span>
    </Link>
  )
}
