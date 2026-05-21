"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px 0 8px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <Logo variant="full" size="sm" />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Products", "How It Works", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: hoveredLink === l ? "var(--text)" : "var(--text-secondary)",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.15s",
                position: "relative",
                paddingBottom: 3,
              }}
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {l}
              <AnimatePresence>
                {hoveredLink === l && (
                  <motion.span
                    layoutId="nav-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "var(--gold)",
                      opacity: 0.7,
                    }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ opacity: 0.88, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              background: "var(--gold)", color: "#07070A", fontSize: 14, fontWeight: 600,
              padding: "8px 20px", borderRadius: 8, textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get a Quote
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
