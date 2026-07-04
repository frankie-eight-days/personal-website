import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Browser-tab icon: a tiny terminal window — dark rounded tile, green
// glowing prompt. Matches the site's terminal/neon theme.
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
          background: "#060a07",
          borderRadius: 7,
          border: "1.5px solid rgba(77,255,145,0.55)",
          color: "#4dff91",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: -1,
          textShadow: "0 0 6px rgba(77,255,145,0.9)",
        }}
      >
        &gt;_
      </div>
    ),
    { ...size },
  );
}
