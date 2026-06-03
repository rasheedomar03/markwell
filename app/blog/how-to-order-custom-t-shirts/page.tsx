import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Order Custom T-Shirts for Your Company (Step-by-Step) — Wearmill",
  description: "A step-by-step guide to ordering custom printed t-shirts for your business: choosing blanks, submitting artwork, approving proofs, and receiving your order.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Order Custom T-Shirts for Your Company (Step-by-Step)",
  description: "A step-by-step guide to ordering custom printed t-shirts for your business: choosing blanks, submitting artwork, approving proofs, and receiving your order.",
  author: { "@type": "Person", name: "Rasheed Omar", jobTitle: "Founder", worksFor: { "@type": "Organization", name: "Wearmill" } },
  publisher: { "@type": "Organization", name: "Wearmill", url: "https://wearmill.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: "https://wearmill.com/blog/how-to-order-custom-t-shirts",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How far in advance should I order custom t-shirts?", acceptedAnswer: { "@type": "Answer", text: "Allow 2 weeks minimum: a few days for quoting and proof approval, plus 5-7 business days for production and shipping. For events, order at least 3 weeks out." } },
    { "@type": "Question", name: "Can I order just one custom shirt?", acceptedAnswer: { "@type": "Answer", text: "With DTG printing, yes. For screen printing, the minimum is typically 24 units because of the screen setup involved." } },
    { "@type": "Question", name: "What if I need custom t-shirts faster?", acceptedAnswer: { "@type": "Answer", text: "Rush orders (under 7 business days) are usually available for a 15% surcharge. Ask your printer about availability before placing the order." } },
  ],
};

export default function Post() {
  return (
    <article style={{ padding: "60px 24px 100px", maxWidth: 680, margin: "0 auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
        How to Order Custom T-Shirts for Your Company (Step-by-Step)
      </h1>

      <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 40 }}>
        By Rasheed Omar, Founder of Wearmill &middot; June 2, 2026 &middot; 5 min read &middot; Last updated June 2026
      </p>

      <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Ordering custom t-shirts for your business takes four decisions: the blank garment, the printing method, the artwork, and the quantity.</strong> Get those right and the rest is straightforward. This guide walks through each step with real pricing so you know what to expect before you reach out to a printer.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 1: Choose your blank garment
        </h2>
        <p style={{ marginBottom: 16 }}>
          The "blank" is the shirt before anything is printed on it. The blank you pick affects the feel, fit, and price of the finished product. Here are the most common options for business orders:
        </p>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Blank</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Feel</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Price range</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gildan Heavy Cotton", "Sturdy, classic fit", "$6.49-$10.99/unit", "Events, giveaways, everyday wear"],
                ["Bella+Canvas 3001", "Soft, modern fit", "$7.49-$12.49/unit", "Retail-quality merch, brand tees"],
                ["Comfort Colors", "Pre-washed, relaxed", "$8.49-$14.49/unit", "Trendy, vintage look"],
                ["Nike Dri-FIT", "Performance, moisture-wicking", "$24.99-$34.99/unit", "Athletic teams, premium gifts"],
              ].map(([blank, feel, price, best], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--text)", fontWeight: 500 }}>{blank}</td>
                  <td style={{ padding: "10px 14px" }}>{feel}</td>
                  <td style={{ padding: "10px 14px" }}>{price}</td>
                  <td style={{ padding: "10px 14px" }}>{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginBottom: 24 }}>
          If you're ordering for the first time and want a safe choice: <strong style={{ color: "var(--text)" }}>Gildan Heavy Cotton</strong> is the industry standard for bulk orders. If you want something people will actually want to wear again: <strong style={{ color: "var(--text)" }}>Bella+Canvas</strong> is softer and fits better.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 2: Pick a printing method
        </h2>
        <p style={{ marginBottom: 16 }}>
          For most business t-shirt orders, <strong style={{ color: "var(--text)" }}>screen printing</strong> is the right choice. It's the cheapest per unit at 48+ quantities and the print lasts 50+ washes. If your design is full-color or photographic, DTG (direct-to-garment) is better. See our full <Link href="/blog/screen-printing-vs-embroidery-vs-dtg" style={{ color: "var(--gold)" }}>comparison of printing methods</Link>.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 3: Prepare your artwork
        </h2>
        <p style={{ marginBottom: 16 }}>
          The best file formats for custom printing are <strong style={{ color: "var(--text)" }}>vector files: .AI, .EPS, .SVG, or .PDF</strong>. These scale to any size without losing quality. If you only have a .PNG or .JPG, it needs to be at least 300 DPI at the print size (typically 12 inches wide for a front chest print).
        </p>
        <p style={{ marginBottom: 24 }}>
          Don't have a print-ready file? Most printers (including us) can clean up your logo for you. Send what you have and we'll let you know if it needs work.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 4: Decide on quantity and sizes
        </h2>
        <p style={{ marginBottom: 16 }}>
          Most custom printers have a minimum of 24 units. You can mix sizes and colors within the same order. The total count across all variations determines your price tier.
        </p>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Sizing tip:</strong> If you're ordering for a group and don't know everyone's size yet, a safe distribution for 100 shirts is roughly: 5 S, 25 M, 35 L, 25 XL, 10 2XL. Adjust based on your team.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 5: Request a quote and approve your proof
        </h2>
        <p style={{ marginBottom: 16 }}>
          Send your artwork, product choice, quantity, and sizes to your printer. A good printer will send back an itemized quote within 24 hours, plus a free digital proof showing exactly how your logo will look on the shirt.
        </p>
        <p style={{ marginBottom: 24 }}>
          Don't approve the proof until you're satisfied with the placement, colors, and sizing. Once you approve, production starts and changes aren't possible.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Step 6: Receive and inspect your order
        </h2>
        <p style={{ marginBottom: 32 }}>
          Standard turnaround is 5-7 business days after proof approval. When your order arrives, check a few shirts for print quality, color accuracy, and correct sizing before distributing. Any reputable printer will fix errors at no charge.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>How far in advance should I order?</p>
            <p>Allow 2 weeks minimum: a few days for quoting and proof approval, plus 5-7 business days for production and shipping. For events, order at least 3 weeks out to have a buffer.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Can I order just one custom shirt?</p>
            <p>With DTG printing, yes. For screen printing, the minimum is typically 24 units because of the screen setup involved.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>What if I need them faster?</p>
            <p>Rush orders (under 7 business days) are usually available for a 15% surcharge. Ask your printer about availability before placing the order.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Related guides
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/custom-t-shirt-pricing-2026" style={{ color: "var(--gold)" }}>Custom T-Shirt Pricing in 2026</Link> — exact per-unit costs by blank and quantity</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/promotional-products-for-trade-shows" style={{ color: "var(--gold)" }}>Promotional Products for Trade Shows</Link> — what to order beyond t-shirts</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/screen-printing-houston-tx" style={{ color: "var(--gold)" }}>Screen Printing in Houston, TX</Link> — what to look for in a local printer</li>
        </ul>

        <div style={{ padding: "24px 28px", background: "var(--surface)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, marginBottom: 8 }}>
            Ready to order?
          </p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            Send us your logo and quantity. We'll quote within 24 hours and include a free digital proof.
          </p>
          <a href="/#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
            Get a free quote &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
