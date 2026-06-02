"use client";
import Logo from "./Logo";

const linkStyle: React.CSSProperties = {
  fontSize: 13,
  color: "var(--text-muted)",
  textDecoration: "none",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "48px 24px 40px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Top row: logo, location, email */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 28 }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <Logo variant="full" size="sm" />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.02em" }}>
              Houston, TX
            </span>
            <a
              href="mailto:hello@wearmill.com"
              style={{ ...linkStyle, color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              hello@wearmill.com
            </a>
          </div>
        </div>

        {/* Bottom row: copyright + legal links */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Wearmill. Custom printed products for businesses. Last updated June 2026.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="/privacy"
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
