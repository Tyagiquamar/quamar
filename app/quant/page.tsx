import type { Metadata } from "next"
import { TrackPage, trackMetadata } from "@/components/track-page"

export const metadata: Metadata = trackMetadata("quant")

export default function QuantPage() {
  return <TrackPage track="quant" />
}
