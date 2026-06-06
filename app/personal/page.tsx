import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Orders — Custom Shirts, Hoodies & Mugs | Wearmill",
  description: "Order custom printed t-shirts, hoodies, and mugs starting at 1 unit. DTG full-color printing, no setup fees, no minimums. Houston, TX.",
};

const products = [
  {
    name: "Custom T-Shirt",
    desc: "Gildan or Bella+Canvas. Full-color DTG print. Front, back, or both.",
    prices: [
      { qty: "1-5 units", price: "$28" },
      { qty: "6-11 units", price: "$22" },
      { qty: "12-23 units", price: "$18" },
    ],
    note: "24+ units? You qualify for screen print pricing — starts at $10.99/unit.",
  },
  {
    name: "Custom Hoodie",
    desc: "Gildan or Jerzees pullover. Full-color DTG print.",
    prices: [
      { qty: "1-5 units", price: "$45" },
      { qty: "6-11 units", price: "$38" },
      { qty: "12-23 units", price: "$32" },
    ],
    note: "24+ units? Screen print pricing starts at $27.99/unit.",
  },
  {
    name: "Custom Mug",
    desc: "11oz ceramic. Full-color wraparound print.",
    prices: [
      { qty: "1-5 units", price: "$18" },
      { qty: "6-11 units", price: "$14" },
      { qty: "12-23 units", price: "$11" },
    ],
    note: "24+ units? Volume pricing starts at $7.49/unit.",
  },
  {
    name: "Custom Tote Bag",
    desc: "Cotton canvas. 1-color screen print or full-color DTG.",
    prices: [
      { qty: "1-5 units", price: "$22" },
      { qty: "6-11 units", price: "$16" },
      { qty: "12-23 units", price: "$13" },
    ],
    note: "24+ units? Volume pricing starts at $8.99/unit.",
  },
];

export default function PersonalOrders() {
  return (
    <main style={{ padding: "60px 24px 100px", maxWidth: 760, margin: "0 auto" }}>

      <p style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--gold)",
        fontFamily: "var(--font-geist-mono)",
        marginBottom: 16,
      }}>
        Personal Orders
      </p>

      <h1 style={{
        fontSize: "clamp(32px, 4vw, 44px)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "var(--text)",
        lineHeight: 1.1,
        marginBottom: 16,
        fontFamily: "var(--font-heading)",
      }}>
        Need just a few? We do small runs too.
      </h1>

      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
        Custom printed shirts, hoodies, mugs, and tote bags with no minimum order. Full-color DTG printing, no setup fees. Send us your design and we'll get you a quote within 24 hours.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 48 }}>
        Ordering 24+ units? Check our <Link href="/#pricing" style={{ color: "var(--gold)", textDecoration: "none" }}>bulk pricing</Link> for significantly lower per-unit rates via screen printing.
      </p>

      {/* Product cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
        {products.map(product => (
          <div key={product.name} style={{ background: "var(--surface)", padding: "28px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                {product.name}
              </h2>
              <span style={{ fontSize: 22, fontWeight: 700, color: "var(--gold)", fontFamily: "var(--font-geist-mono)" }}>
                from {product.prices[product.prices.length - 1].price}
              </span>
            </div>

            <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
              {product.desc}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
              {product.prices.map(p => (
                <div key={p.qty} style={{
                  padding: "8px 16px",
                  background: "var(--bg)",
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 2 }}>{p.qty}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-geist-mono)" }}>{p.price}/unit</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{product.note}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <h2 style={{
        fontSize: 24,
        fontWeight: 700,
        color: "var(--text)",
        marginBottom: 24,
        fontFamily: "var(--font-heading)",
      }}>
        How it works
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
        {[
          { num: "1", title: "Send us your design", desc: "Upload your logo, artwork, or photo. We accept .PNG, .JPG, .SVG, .AI, and .PDF files." },
          { num: "2", title: "Get a quote and proof", desc: "We'll send back pricing and a free digital mockup within 24 hours so you can see exactly how it'll look." },
          { num: "3", title: "Approve and receive", desc: "Once you approve, we print and ship. Most orders arrive within 7-10 business days." },
        ].map(step => (
          <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "var(--gold-dim)", color: "var(--gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-geist-mono)",
              flexShrink: 0,
            }}>
              {step.num}
            </span>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{step.title}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 style={{
        fontSize: 24,
        fontWeight: 700,
        color: "var(--text)",
        marginBottom: 24,
        fontFamily: "var(--font-heading)",
      }}>
        FAQ
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
        {[
          { q: "Is there a minimum order?", a: "No. You can order as few as 1 unit with DTG printing. No setup fees." },
          { q: "What's the difference between DTG and screen printing?", a: "DTG (direct-to-garment) prints full-color designs directly onto fabric, like an inkjet printer. It's ideal for small orders and complex artwork. Screen printing is cheaper per unit at 24+ quantities but requires setup. We'll recommend the best method for your order." },
          { q: "Can I order different designs on each shirt?", a: "Yes. DTG printing doesn't require screens, so every shirt can have a different design at the same price." },
          { q: "What if I need more than 24 units?", a: "You'll get better pricing through our bulk screen printing tiers. Check our main pricing page or just tell us what you need and we'll quote both options." },
        ].map(item => (
          <div key={item.q}>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{item.q}</p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: "28px 32px", background: "var(--surface)", borderRadius: 12, border: "1px solid var(--border)" }}>
        <p style={{ fontSize: 18, color: "var(--text)", fontWeight: 600, marginBottom: 8 }}>
          Ready to get started?
        </p>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 20, lineHeight: 1.6 }}>
          Send us your design, tell us the product and quantity, and we'll have a quote and mockup back to you within 24 hours. No commitment required.
        </p>
        <a
          href="/#contact"
          style={{
            display: "inline-block",
            background: "var(--gold)",
            color: "#07070A",
            fontSize: 15,
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Get a Free Quote
        </a>
      </div>

    </main>
  );
}
