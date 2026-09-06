import type { Metadata } from "next"
import { TrackPage, trackMetadata } from "@/components/track-page"

export const metadata: Metadata = trackMetadata("fullstack")

export default function FullStackPage() {
  return <TrackPage track="fullstack" />
}
