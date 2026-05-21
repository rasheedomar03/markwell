"use client";
import { motion } from "framer-motion";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  };
}

const lineItems = [
  { item: "T-Shirts · Screen Print", qty: "150 units", price: "$525.00", detail: "1-color imprint, front chest" },
  { item: "Hats · Embroidery",       qty: "50 units",  price: "$237.50", detail: "Custom thread color" },
  { item: "Tote Bags",               qty: "100 units", price: "$310.00", detail: "Silk-screen, 1 side" },
];

export default function Hero() {
  return (
    <section className="hero-noise hero-glow" style={{ padding: "140px 24px 100px", overflow: "hidden" }}>
      <div className="hero-grid" style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Left: content */}
        <div>
          <motion.div
            {...fadeUp(0)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold-dim)", border: "1px solid rgba(228,184,77,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 40 }}
          >
            <div className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-geist-mono)" }}>
              Custom Promotional Products
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 28 }}
          >
            Your brand,<br />
            <span style={{ color: "var(--gold)" }}>on everything.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 480, marginBottom: 48 }}
          >
            Custom apparel, hats, drinkware, and branded merch — screen printed and embroidered. Better quality, better pricing than you&apos;re paying now.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72 }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              style={{ background: "var(--gold)", color: "#07070A", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}
            >
              Get a Free Quote
            </motion.a>
            <a
              href="#pricing"
              style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--text)", fontWeight: 500, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}
            >
              View Pricing →
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            style={{ borderTop: "1px solid var(--border)", paddingTop: 40, display: "flex", gap: 48, flexWrap: "wrap" }}
          >
            {[
              { num: "100+", label: "Products available" },
              { num: "$3.50", label: "Shirts from / unit" },
              { num: "Fast",  label: "Turnaround" },
              { num: "$0",    label: "Setup fees" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 26, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: order mockup */}
        <motion.div
          className="hero-order-card"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(228,184,77,0.07)",
          }}
        >
          {/* Header */}
          <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px rgba(228,184,77,0.5)" }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-geist-mono)" }}>
              Order Confirmed
            </span>
          </div>

          {/* Line items */}
          <div style={{ padding: "24px" }}>
            {lineItems.map((li, i) => (
              <div
                key={li.item}
                style={{
                  paddingBottom: i < lineItems.length - 1 ? 20 : 0,
                  marginBottom: i < lineItems.length - 1 ? 20 : 0,
                  borderBottom: i < lineItems.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{li.item}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)" }}>{li.price}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>{li.qty}</span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{li.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ borderTop: "1px solid var(--border)", padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Subtotal</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>$1,072.50</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Setup fee</span>
              <span style={{ fontSize: 12, color: "var(--gold)" }}>$0.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>Total</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>$1,072.50</span>
            </div>
          </div>

          {/* Footer badge */}
          <div style={{ padding: "14px 24px", background: "rgba(228,184,77,0.04)", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="var(--gold)" strokeWidth="1.5"/>
              <path d="M4 7l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>No setup fees. Ships in 5–7 business days.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
