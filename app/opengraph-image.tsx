import { ImageResponse } from "next/og";

// Dynamically-generated social preview card (shown on WhatsApp, LinkedIn, X…).
// Next.js wires this up as og:image automatically — no manual <meta> needed.
export const runtime = "edge";
export const alt = "Muhamad Ramdhani — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#5DCAA5";
const INK = "#1a1a1a";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: INK,
          color: "#f5f5f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow in the corner */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: ACCENT,
            opacity: 0.22,
            filter: "blur(120px)",
          }}
        />

        {/* Availability pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#a3a3a3",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "10px 22px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: ACCENT,
            }}
          />
          available for work
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            marginTop: 40,
            letterSpacing: -2,
          }}
        >
          Muhamad&nbsp;<span style={{ color: ACCENT }}>Ramdhani</span>
        </div>

        <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#d4d4d4" }}>
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#a3a3a3",
            maxWidth: 900,
          }}
        >
          Enterprise-scale web apps with Next.js, Node.js & Laravel.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: "auto",
            color: ACCENT,
            fontWeight: 600,
          }}
        >
          ramdhani.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
