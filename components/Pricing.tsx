"use client";
import { motion } from "framer-motion";

const tiers = [
  { qty: "24",  unit: "$5.99",  total: "$144",   badge: null },
  { qty: "96",  unit: "$4.49",  total: "$431",   badge: "Most Popular" },
  { qty: "288", unit: "$3.69",  total: "$1,063", badge: null },
  { qty: "576", unit: "$3.49",  total: "$2,010", badge: "Best Value" },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
          Transparent Pricing
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1 }}>
            Custom printed shirts.<br />No surprises.
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 360, lineHeight: 1.7 }}>
            1-color imprint included. No setup fees. The more you order, the more you save.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, marginBottom: 48 }}>
          {tiers.map((t) => (
            <motion.div
              key={t.qty}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 48px rgba(228,184,77,0.09)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              style={{
                position: "relative",
                background: t.badge === "Most Popular" ? "var(--surface-2)" : "var(--surface)",
                border: t.badge === "Most Popular" ? "1px solid rgba(228,184,77,0.3)" : "1px solid var(--border)",
                borderRadius: 2,
                padding: "40px 32px",
                cursor: "default",
              }}
            >
              {t.badge && (
                <span style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--gold)",
                  color: "#07070A",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 100,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-geist-mono)",
                }}>
                  {t.badge}
                </span>
              )}
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>
                Quantity
              </p>
              <p style={{ fontSize: 48, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 32 }}>
                {t.qty}
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-geist-mono)", marginBottom: 8 }}>
                  Per unit
                </p>
                <p style={{ fontSize: 28, fontWeight: 700, color: "var(--gold)", letterSpacing: "-0.03em", marginBottom: 6 }}>
                  {t.unit}
                </p>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Total: {t.total}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>
          Pricing shown for custom t-shirts with 1-color imprint. Other products quoted on request.{" "}
          <a href="#contact" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Get a custom quote →
          </a>
        </p>

      </div>
    </section>
  );
}
