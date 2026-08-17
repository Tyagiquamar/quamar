function timeGreeting(hour: number): string {
  if (hour < 5) return "Up late?"
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

export function Greeting() {
  const greeting = timeGreeting(new Date().getHours())

  return (
    <p className="font-mono text-sm text-muted-foreground">
      {greeting}, visitor
    </p>
  )
}
