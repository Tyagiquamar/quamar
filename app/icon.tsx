import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111110",
          color: "#f5a623",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        QT
      </div>
    ),
    size
  )
}
