"use client";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <Logo variant="full" size="sm" />
        </a>

        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Wearmill. Custom printed products for businesses.
        </p>

        <a
          href="mailto:hello@wearmill.com"
          style={{ fontSize: 13, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          hello@wearmill.com
        </a>

      </div>
    </footer>
  );
}
