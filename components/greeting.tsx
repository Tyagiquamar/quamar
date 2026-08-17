import { headers } from "next/headers"

function timeGreeting(hour: number): string {
  if (hour < 5) return "Up late?"
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

export async function Greeting() {
  const headerList = await headers()
  const city = headerList.get("x-visitor-city")

  const greeting = timeGreeting(new Date().getHours())

  return (
    <p className="font-mono text-sm text-muted-foreground">
      {greeting}
      {city ? (
        <>
          {" "}
          — thanks for stopping by from <span className="text-primary">{city}</span>
        </>
      ) : (
        ", visitor"
      )}
    </p>
  )
}
