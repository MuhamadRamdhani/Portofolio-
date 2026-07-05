import { ImageResponse } from "next/og";

// Favicon — an accent "R" monogram, generated at build time so there is no
// binary asset to maintain. Next.js serves it as the site icon.
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5DCAA5",
          color: "#1a1a1a",
          fontSize: 22,
          fontWeight: 800,
          borderRadius: 7,
          fontFamily: "sans-serif",
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
