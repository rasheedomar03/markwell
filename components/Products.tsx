"use client";
import { ShoppingBag, Shirt, Coffee, HardHat, Backpack, PenLine } from "lucide-react";

const products = [
  { Icon: Shirt, name: "Apparel", desc: "T-shirts, hoodies, polos. Your logo, your colors, screen printed or embroidered at any quantity." },
  { Icon: HardHat, name: "Hats & Caps", desc: "Embroidered beanies, snapbacks, and dad hats. Clean branding your team will actually wear." },
  { Icon: Coffee, name: "Drinkware", desc: "Mugs, tumblers, water bottles, koozies. Perfect for events, corporate gifts, and retail." },
  { Icon: Backpack, name: "Bags", desc: "Branded backpacks, duffels, canvas totes, and drawstring bags. Built for conferences, teams, and giveaways." },
  { Icon: ShoppingBag, name: "Branded Merch", desc: "Patches, lanyards, keychains, notepads — everything your brand needs for events and giveaways." },
  { Icon: PenLine, name: "Promo Items", desc: "Pens, stickers, magnets, and more. Minimum quantities, maximum shelf life." },
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2 }}>
          {products.map(({ Icon, name, desc }) => (
            <div
              key={name}
              style={{
                background: "var(--bg)", padding: "32px", borderRadius: 2,
                transition: "background 0.15s",
                cursor: "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
            >
              <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--gold-dim)", borderRadius: 8, marginBottom: 20 }}>
                <Icon size={18} color="var(--gold)" strokeWidth={1.75} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.01em" }}>{name}</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
