"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Products", href: "/#products" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: scrolled || mobileOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled || mobileOpen ? "rgba(7,7,9,0.92)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <Logo variant="full" size="sm" />
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: hoveredLink === l.label ? "var(--text)" : "var(--text-secondary)",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.15s",
                position: "relative",
                paddingBottom: 3,
              }}
              onMouseEnter={() => setHoveredLink(l.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {l.label}
              <AnimatePresence>
                {hoveredLink === l.label && (
                  <motion.span
                    layoutId="nav-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: 1, background: "var(--gold)", opacity: 0.7,
                    }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}

          <motion.a
            href="/#contact"
            whileHover={{ opacity: 0.88, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              background: "var(--gold)", color: "#07070A", fontSize: 14, fontWeight: 600,
              padding: "8px 20px", borderRadius: 8, textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get a Free Quote
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            padding: 8, color: "var(--text)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="5" y1="5" x2="17" y2="17" />
                <line x1="17" y1="5" x2="5" y2="17" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--border)",
              background: "rgba(7,7,9,0.98)",
            }}
          >
            <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "var(--text-secondary)", fontSize: 16, textDecoration: "none",
                    padding: "12px 0", borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "var(--gold)", color: "#07070A", fontSize: 15, fontWeight: 600,
                  padding: "14px 24px", borderRadius: 10, textDecoration: "none",
                  display: "block", textAlign: "center", marginTop: 12,
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
