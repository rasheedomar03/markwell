"use client";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <p style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontFamily: "var(--font-geist-mono)",
          marginBottom: 16,
        }}>
          About Wearmill
        </p>

        <h2 style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: 32,
          fontFamily: "var(--font-heading)",
        }}>
          Built by someone who got tired of bad merch vendors.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
            Wearmill was started by <strong style={{ color: "var(--text)", fontWeight: 600 }}>Rasheed Omar</strong> in Houston, Texas. The idea came from a simple frustration: ordering custom merch for a business should not require three follow-up emails, a mystery quote, and a two-week wait just to find out the price.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
            Before Wearmill, Rasheed worked with small businesses, sports organizations, and nonprofits that all ran into the same wall. They needed shirts, hats, or branded gear for an event or their team, and every vendor made the process harder than it needed to be. Hidden fees showed up at checkout. Proofs took days. Communication went dark mid-order.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
            Wearmill does it differently. You send us your logo and what you need. We quote within 24 hours with real, itemized pricing. You approve a free digital proof before anything goes to print. Your order ships in 5-7 business days. If you reorder, we already have your files on hand.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
            We handle screen printing, embroidery, and DTG across t-shirts, hoodies, hats, polos, drinkware, tote bags, and more. Whether you need 24 units for a team or 2,400 for a product launch, the process is the same: fast quotes, transparent pricing, and merch that actually looks good.
          </p>
        </div>

        {/* Founder card */}
        <div style={{
          marginTop: 48,
          padding: "32px 36px",
          background: "var(--bg)",
          borderRadius: 12,
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: 28,
          flexWrap: "wrap",
        }}>
          {/* Avatar placeholder - gold circle with initials */}
          <div style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--gold), #c49a3a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--bg)",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.02em",
            }}>
              RO
            </span>
          </div>

          <div>
            <p style={{
              fontSize: 18,
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: 4,
            }}>
              Rasheed Omar
            </p>
            <p style={{
              fontSize: 14,
              color: "var(--gold)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.02em",
              marginBottom: 8,
            }}>
              Founder, Wearmill
            </p>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              Based in Houston, TX. Helping businesses put their brand on products that people actually keep.
            </p>
          </div>
        </div>

        <p style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginTop: 32,
          fontFamily: "var(--font-geist-mono)",
        }}>
          Last updated: June 2026
        </p>

      </div>
    </section>
  );
}
