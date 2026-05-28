import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070709",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#E4B84D",
            letterSpacing: "-0.02em",
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          WM
        </div>
      </div>
    ),
    { ...size }
  );
}
