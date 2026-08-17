import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  // Injected by Vercel at the edge; absent in local dev
  const city = request.headers.get("x-vercel-ip-city")
  const country = request.headers.get("x-vercel-ip-country")

  if (city) requestHeaders.set("x-visitor-city", decodeURIComponent(city))
  if (country) requestHeaders.set("x-visitor-country", country)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  // Skip static assets and internal routes
  matcher: ["/((?!_next/static|_next/image|icon|opengraph-image|favicon.ico).*)"],
}
