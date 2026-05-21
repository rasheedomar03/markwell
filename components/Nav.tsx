"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(7,7,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <Logo variant="full" size="sm" />
        </a>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Products", "How It Works", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ color: "var(--text-secondary)", fontSize: 14, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "var(--gold)", color: "#07070A", fontSize: 14, fontWeight: 600,
              padding: "8px 20px", borderRadius: 8, textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
