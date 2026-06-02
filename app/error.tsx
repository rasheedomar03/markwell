"use client";

import { useEffect } from "react";

export default function Error({
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <p
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "16px",
          }}
        >
          Something went wrong
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.1,
            margin: "0 0 16px",
          }}
        >
          Unexpected error
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: "0 0 32px",
          }}
        >
          We hit a snag loading this page. Try again, or head back to the homepage.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--bg)",
              background: "var(--gold)",
              padding: "12px 28px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text)",
              background: "transparent",
              padding: "12px 28px",
              borderRadius: "6px",
              border: "1px solid var(--border-hover)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
