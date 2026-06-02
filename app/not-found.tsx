import Link from "next/link";

export default function NotFound() {
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
          404
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
          Page not found
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
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--bg)",
            background: "var(--gold)",
            padding: "12px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
