import { ImageResponse } from "next/og";

export const alt =
  "Frank Walsh — EE who ships hardware and software, and wins hackathons";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#060a07",
          color: "#c6f6d8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", color: "#2f9a5d", fontSize: 30 }}>
          frank@walsh:~$ whoami
        </div>
        <div
          style={{
            display: "flex",
            color: "#4dff91",
            fontSize: 104,
            fontWeight: 800,
            marginTop: 8,
          }}
        >
          Frank Walsh
        </div>
        <div style={{ display: "flex", color: "#6f9a80", fontSize: 30, marginTop: 10 }}>
          Electrical Engineer · Systems EE @ Apple · founder
        </div>
        <div
          style={{
            display: "flex",
            color: "#9bffc4",
            fontSize: 44,
            fontWeight: 700,
            marginTop: 44,
            maxWidth: 1040,
          }}
        >
          EE who ships hardware and software — and wins hackathons.
        </div>
        <div style={{ display: "flex", color: "#2f9a5d", fontSize: 26, marginTop: 52 }}>
          frankwalsh.tech
        </div>
      </div>
    ),
    { ...size },
  );
}
