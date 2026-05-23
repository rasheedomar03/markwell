import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wearmill — Custom Printed Products for Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 80px",
          background: "#070709",
          position: "relative",
        }}
      >
        {/* Subtle gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#E4B84D",
          }}
        />

        {/* WM lettermark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#E4B84D",
              letterSpacing: "0.08em",
              fontFamily: "serif",
            }}
          >
            WM
          </div>
          <div
            style={{
              width: 1,
              height: 28,
              background: "rgba(255,255,255,0.12)",
            }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(240,240,245,0.5)",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
            }}
          >
            Wearmill
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#F0F0F5",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            fontFamily: "serif",
          }}
        >
          Custom printed products
          <br />
          <span style={{ color: "#E4B84D" }}>for your business.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(240,240,245,0.5)",
            lineHeight: 1.6,
          }}
        >
          Screen printing, embroidery, branded merch. Houston, TX.
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            gap: 48,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          {[
            { num: "100+", label: "Products" },
            { num: "$6.49", label: "Shirts from" },
            { num: "$0", label: "Setup fees" },
            { num: "wearmill.com", label: "" },
          ].map((s) => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#F0F0F5", letterSpacing: "-0.02em" }}>
                {s.num}
              </div>
              {s.label && (
                <div style={{ fontSize: 12, color: "rgba(240,240,245,0.35)", letterSpacing: "0.04em" }}>
                  {s.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
