import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const playfairFont = await fetch(
    "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qC0s.woff"
  ).then((res) => res.arrayBuffer());

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
            fontFamily: "Playfair Display",
            lineHeight: 1,
          }}
        >
          WM
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairFont,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
