"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070709",
          color: "#F0F0F5",
          fontFamily: "Inter, system-ui, sans-serif",
          margin: 0,
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#E4B84D",
              marginBottom: "16px",
            }}
          >
            Critical Error
          </p>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Something broke
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#8A8A9A",
              lineHeight: 1.6,
              margin: "0 0 32px",
            }}
          >
            The application encountered a critical error. Try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#070709",
              background: "#E4B84D",
              padding: "12px 28px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
