import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Do Custom T-Shirts Cost in 2026? Real Pricing Breakdown — Wearmill",
  description: "Actual per-unit costs for custom screen printed, DTG, and embroidered t-shirts in 2026 across different quantities and blank garment tiers.",
};

export default function Post() {
  return (
    <article style={{ padding: "60px 24px 100px", maxWidth: 680, margin: "0 auto" }}>

      <Link href="/blog" style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-geist-mono)" }}>
        &larr; All posts
      </Link>

      <h1 style={{
        fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "var(--text)",
        lineHeight: 1.15,
        marginTop: 24,
        marginBottom: 16,
        fontFamily: "var(--font-heading)",
      }}>
        How Much Do Custom T-Shirts Cost in 2026? Real Pricing Breakdown
      </h1>

      <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 40 }}>
        By Rasheed Omar, Founder of Wearmill &middot; June 2, 2026 &middot; 5 min read &middot; Last updated June 2026
      </p>

      <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>A custom screen printed t-shirt costs between $6.49 and $14.49 per unit in 2026, depending on the blank garment, print method, number of colors, and quantity.</strong> The two biggest price drivers are the blank you choose and how many you order. Below is a real pricing breakdown with actual numbers.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Screen printing pricing (1-color imprint)
        </h2>
        <p style={{ marginBottom: 16 }}>
          Screen printing is the most affordable method for orders of 48 or more. Here's what it costs per unit across different blanks and quantities, including the blank garment:
        </p>

        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Blank garment</th>
                <th style={{ textAlign: "center", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>24 units</th>
                <th style={{ textAlign: "center", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>96 units</th>
                <th style={{ textAlign: "center", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>288 units</th>
                <th style={{ textAlign: "center", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>576+ units</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gildan Heavy Cotton", "$10.99", "$8.49", "$6.99", "$6.49"],
                ["Bella+Canvas 3001", "$12.49", "$9.49", "$8.49", "$7.49"],
                ["Comfort Colors", "$14.49", "$10.99", "$9.49", "$8.49"],
                ["Nike Dri-FIT", "$34.99", "$29.99", "$27.49", "$24.99"],
              ].map(([blank, q24, q96, q288, q576], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--text)", fontWeight: 500 }}>{blank}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center" }}>{q24}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center" }}>{q96}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center" }}>{q288}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center" }}>{q576}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          What affects the price
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Number of print colors</p>
            <p>Each additional color in a screen printed design adds roughly $2.00 per unit. A 1-color logo is the cheapest. A 4-color design on a Gildan tee at 96 units would run approximately $14.49/unit ($8.49 base + $6.00 for 3 extra colors).</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Setup fees</p>
            <p>Screen printing requires a setup fee of $25 per color per design. This fee is waived at 144+ units. So for a 1-color design at 48 units, add $25 to your total. At 144+ units, there's no setup fee at all.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Print locations</p>
            <p>Front only is cheapest. Adding a back print or sleeve print is essentially a second job, so it roughly doubles the print cost (not the blank cost). A front + back print on Gildan at 96 units runs about $12.99/unit.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Blank garment quality</p>
            <p>The blank is the single biggest variable. A Gildan Heavy Cotton runs about $3-4 wholesale. A Bella+Canvas 3001 runs $5-6. A Comfort Colors runs $7-8. The print cost stays roughly the same across all of them.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          DTG pricing (no setup fee)
        </h2>
        <p style={{ marginBottom: 16 }}>
          DTG (direct-to-garment) printing has no setup fee and supports unlimited colors, making it better for small orders or complex designs. The per-unit cost is higher than screen printing at volume:
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>1-11 units: $20-30/unit (varies by design size)</li>
          <li style={{ marginBottom: 8 }}>12-47 units: $15-22/unit</li>
          <li style={{ marginBottom: 8 }}>48+ units: $12-18/unit</li>
        </ul>
        <p style={{ marginBottom: 32 }}>
          <strong style={{ color: "var(--text)" }}>The crossover point</strong> is around 48-72 units. Below that, DTG is usually cheaper (no setup fee). Above that, screen printing wins on per-unit cost.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Other costs to factor in
        </h2>
        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Fee</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Amount</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Screen print setup", "$25/color", "Waived at 144+ units"],
                ["Pantone color matching", "$10/color", "Optional, for exact brand colors"],
                ["Rush order (under 7 days)", "+15% surcharge", "Subject to availability"],
                ["Shipping", "Varies", "Free on orders over $500"],
                ["Repeat orders", "5% discount", "We keep your files on hand"],
              ].map(([fee, amount, notes], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--text)", fontWeight: 500 }}>{fee}</td>
                  <td style={{ padding: "10px 14px" }}>{amount}</td>
                  <td style={{ padding: "10px 14px" }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Why is there such a wide price range?</p>
            <p>The blank garment, print method, number of colors, and quantity all affect the price. A 1-color Gildan at 576 units ($6.49) and a 4-color Comfort Colors at 24 units ($20+) are completely different jobs.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Can I get exact pricing without a full order?</p>
            <p>Yes. Send us your logo, product choice, and estimated quantity. We'll send back an itemized quote within 24 hours with no obligation.</p>
          </div>
        </div>

        <div style={{ padding: "24px 28px", background: "var(--surface)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, marginBottom: 8 }}>
            Get exact pricing for your order
          </p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            These are general ranges. Your actual price depends on the specific blank, colors, and quantity. Send us the details and we'll give you an exact number.
          </p>
          <a href="/#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
            Get a free quote &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
