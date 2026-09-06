import type { Metadata } from "next"
import { TrackPage, trackMetadata } from "@/components/track-page"

export const metadata: Metadata = trackMetadata("systems")

export default function SystemsPage() {
  return <TrackPage track="systems" />
}
