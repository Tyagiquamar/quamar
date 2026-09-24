/**
 * Live GitHub merged PR counter.
 * Fetches raw merged PR count for Tyagiquamar via GitHub Search API.
 * Uses 1-hour server-side cache revalidation (next: { revalidate: 3600 }).
 * Falls back to "100+" if the API is unreachable, rate limited, times out, or errors.
 */

export interface MergedPrStats {
  count: string
  label: string
  isFallback: boolean
}

const FALLBACK_COUNT = "100+"
const USERNAME = "Tyagiquamar"

export async function getMergedPrStats(): Promise<MergedPrStats> {
  // Allow test simulation of failure mode via env var if requested
  if (process.env.SIMULATE_GITHUB_FAILURE === "true") {
    return {
      count: FALLBACK_COUNT,
      label: "Merged Pull Requests",
      isFallback: true,
    }
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const headers: Record<string, string> = {
      "User-Agent": "mohd-quamar-portfolio",
      Accept: "application/vnd.github+json",
    }

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const url = `https://api.github.com/search/issues?q=type:pr+author:${USERNAME}+is:merged`
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
      next: { revalidate: 3600 },
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      console.warn(`GitHub API returned HTTP ${res.status}. Falling back to ${FALLBACK_COUNT}.`)
      return {
        count: FALLBACK_COUNT,
        label: "Merged Pull Requests",
        isFallback: true,
      }
    }

    const data = await res.json()
    if (typeof data.total_count === "number" && data.total_count > 0) {
      return {
        count: String(data.total_count),
        label: "Merged Pull Requests",
        isFallback: false,
      }
    }

    return {
      count: FALLBACK_COUNT,
      label: "Merged Pull Requests",
      isFallback: true,
    }
  } catch (err) {
    console.warn(`GitHub API request failed (${err instanceof Error ? err.message : String(err)}). Falling back to ${FALLBACK_COUNT}.`)
    return {
      count: FALLBACK_COUNT,
      label: "Merged Pull Requests",
      isFallback: true,
    }
  }
}
