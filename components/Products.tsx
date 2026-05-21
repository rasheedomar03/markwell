"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Shirt, Coffee, HardHat, Backpack, PenLine } from "lucide-react";

const products = [
  { Icon: Shirt,       name: "Apparel",       desc: "T-shirts, hoodies, polos. Your logo, your colors, screen printed or embroidered at any quantity." },
  { Icon: HardHat,     name: "Hats & Caps",   desc: "Embroidered beanies, snapbacks, and dad hats. Clean branding your team will actually wear." },
  { Icon: Coffee,      name: "Drinkware",     desc: "Mugs, tumblers, water bottles, koozies. Perfect for events, corporate gifts, and retail." },
  { Icon: Backpack,    name: "Bags",          desc: "Branded backpacks, duffels, canvas totes, and drawstring bags. Built for conferences, teams, and giveaways." },
  { Icon: ShoppingBag, name: "Branded Merch", desc: "Patches, lanyards, keychains, notepads — everything your brand needs for events and giveaways." },
  { Icon: PenLine,     name: "Promo Items",   desc: "Pens, stickers, magnets, and more. Minimum quantities, maximum shelf life." },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
              What We Print
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1 }}>
              Everything your<br />brand needs.
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 360, lineHeight: 1.7 }}>
            100+ customizable products. One reliable supplier. No setup fees, no minimums on most items.
          </p>
        </div>

        {/* Asymmetric grid: first item spans 2 cols + 2 rows */}
        <div className="products-grid">
          {products.map(({ Icon, name, desc }, i) => {
            const featured = i === 0;
            return (
              <motion.div
                key={name}
                whileHover={{
                  y: -3,
                  boxShadow: "0 12px 40px rgba(228,184,77,0.07)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                style={{
                  background: "var(--bg)",
                  padding: featured ? "48px" : "32px",
                  borderRadius: 2,
                  border: "1px solid transparent",
                  gridColumn: featured ? "span 2" : "span 1",
                  gridRow: featured ? "span 2" : "span 1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: featured ? "flex-end" : "flex-start",
                  minHeight: featured ? 320 : "auto",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.18)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
              >
                {featured && (
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    background: "radial-gradient(ellipse at 20% 30%, rgba(228,184,77,0.04) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }} />
                )}

                <div style={{
                  width: featured ? 52 : 40,
                  height: featured ? 52 : 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--gold-dim)", borderRadius: featured ? 12 : 8,
                  marginBottom: featured ? 32 : 20,
                }}>
                  <Icon size={featured ? 22 : 18} color="var(--gold)" strokeWidth={1.75} />
                </div>

                <h3 style={{ fontSize: featured ? 26 : 16, fontWeight: 600, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {name}
                </h3>
                <p style={{ fontSize: featured ? 15 : 14, color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: featured ? 360 : undefined }}>
                  {desc}
                </p>

                {featured && (
                  <div style={{ marginTop: 32 }}>
                    <a href="#contact" style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", fontWeight: 500, letterSpacing: "0.02em" }}>
                      Get a quote →
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
