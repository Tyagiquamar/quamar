import { ImageResponse } from "next/og"
import { siteConfig } from "@/data/portfolio"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#111110",
          color: "#f5f2ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#f5a623", fontFamily: "monospace" }}>$ whoami</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 32, color: "#f5a623", marginTop: 12, fontFamily: "monospace" }}>
          Founding Engineer @ Takkada
        </div>
        <div style={{ fontSize: 24, color: "#a3a39a", marginTop: 24, maxWidth: 900 }}>
          Building PaySaathi — a standalone Tally-replacement ERP · Ex-Zomato SDE-1 · Codeforces
          Candidate Master
        </div>
      </div>
    ),
    size
  )
}
