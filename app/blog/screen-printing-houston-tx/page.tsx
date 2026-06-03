import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Get Custom Screen Printing in Houston, TX — Wearmill",
  description: "What to look for in a Houston screen printer: turnaround times, pricing transparency, minimums, and the questions to ask before placing your order.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Where to Get Custom Screen Printing in Houston, TX",
  description: "What to look for in a Houston screen printer: turnaround times, pricing transparency, minimums, and the questions to ask before placing your order.",
  author: { "@type": "Person", name: "Rasheed Omar", jobTitle: "Founder", worksFor: { "@type": "Organization", name: "Wearmill" } },
  publisher: { "@type": "Organization", name: "Wearmill", url: "https://wearmill.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: "https://wearmill.com/blog/screen-printing-houston-tx",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need to pick up my order from a Houston screen printer?", acceptedAnswer: { "@type": "Answer", text: "Most Houston printers ship nationwide. At Wearmill, every order ships direct to your address. Free shipping on orders over $500." } },
    { "@type": "Question", name: "Can Houston screen printers handle rush orders?", acceptedAnswer: { "@type": "Answer", text: "Most shops offer rush turnaround for a 15% surcharge. Availability depends on the shop's current production schedule." } },
    { "@type": "Question", name: "Does Wearmill have a physical location?", acceptedAnswer: { "@type": "Answer", text: "Wearmill operates as an online-first business based in Houston. The quoting, proofing, and ordering process happens entirely online, which keeps overhead low and prices competitive." } },
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
        Where to Get Custom Screen Printing in Houston, TX
      </h1>

      <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 40 }}>
        By Rasheed Omar, Founder of Wearmill &middot; June 2, 2026 &middot; 5 min read &middot; Last updated June 2026
      </p>

      <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Houston has dozens of screen printing companies, but they vary widely in pricing, turnaround, communication, and quality.</strong> Whether you're ordering shirts for a company event, a sports team, or a product launch, here's what to look for in a Houston screen printer and the questions to ask before you place an order.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          What to look for in a screen printer
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Transparent, itemized pricing</p>
            <p>A good printer gives you a per-unit price that includes the blank garment and print. If a quote just says "$800 for 100 shirts" without a breakdown, you can't tell if you're overpaying for the blank, the print, or both. Ask for itemized pricing.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Quote turnaround under 48 hours</p>
            <p>If a printer takes a week to send a quote, imagine how long production will take. Most professional shops respond within 24 hours. If they don't, that's a signal about how they'll handle your order.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Free digital proofs</p>
            <p>Never approve an order without seeing a proof. A proof shows you exactly how your logo will look on the product, including placement, size, and colors. Any printer who charges for proofs or skips them entirely is cutting corners.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Clear setup fee structure</p>
            <p>Screen printing requires screens, and those have a setup cost. The standard is $25-50 per color. Some shops waive the fee at higher quantities. Some hide it. Some roll it into the per-unit price. Ask upfront: "What are the setup fees and at what quantity are they waived?"</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Multiple printing methods</p>
            <p>A shop that only does screen printing will recommend screen printing for everything, even when DTG or embroidery would be better for your project. Look for a printer that offers multiple methods and can recommend the right one for your specific order.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Questions to ask before ordering
        </h2>
        <ol style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"What's the per-unit price including the blank?"</strong> Some quotes show print-only pricing and add the garment cost separately. You want the all-in number.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"Are there setup fees? At what quantity are they waived?"</strong> Standard screen print setup is $25/color. Most shops waive it at 100-200+ units.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"What's your turnaround after proof approval?"</strong> The standard is 5-7 business days. Anything over 10 days is slow for a screen print job.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"Do you include a digital proof?"</strong> It should be free and provided before production starts.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"What blank garments do you carry?"</strong> A good shop offers Gildan, Bella+Canvas, Comfort Colors, and at least one performance brand.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"Can I mix sizes and colors in one order?"</strong> You should be able to. The total unit count should determine your price tier, not individual size runs.</li>
          <li style={{ marginBottom: 12 }}><strong style={{ color: "var(--text)" }}>"What's your reorder process?"</strong> A shop that stores your files and order details makes reordering painless. Ask if they keep art on file.</li>
        </ol>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          What screen printing costs in Houston
        </h2>
        <p style={{ marginBottom: 16 }}>
          Houston pricing is competitive compared to other major metros. Here's what you can expect for a standard 1-color screen print job on Gildan Heavy Cotton:
        </p>
        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Quantity</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Typical Houston price range</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Wearmill price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["24 units", "$10-15/unit", "$10.99/unit"],
                ["48 units", "$9-13/unit", "$9.49/unit"],
                ["96 units", "$7-10/unit", "$8.49/unit"],
                ["288 units", "$6-8/unit", "$6.99/unit"],
                ["576+ units", "$5-7/unit", "$6.49/unit"],
              ].map(([qty, range, wm], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--text)", fontWeight: 500 }}>{qty}</td>
                  <td style={{ padding: "10px 14px" }}>{range}</td>
                  <td style={{ padding: "10px 14px", color: "var(--gold)" }}>{wm}</td>
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
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Do I need to pick up my order in Houston?</p>
            <p>Most Houston printers ship nationwide. At Wearmill, every order ships direct to your address. Free shipping on orders over $500.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Do you have a physical location I can visit?</p>
            <p>Wearmill operates as an online-first business based in Houston. The quoting, proofing, and ordering process happens entirely online, which keeps overhead low and prices competitive.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Can Houston printers handle rush orders?</p>
            <p>Most shops offer rush turnaround for a surcharge (typically 15%). Availability depends on the shop's current production schedule. If you have a hard deadline, mention it upfront in your quote request.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Related guides
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/custom-t-shirt-pricing-2026" style={{ color: "var(--gold)" }}>Custom T-Shirt Pricing in 2026</Link> — full pricing breakdown by quantity</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/screen-printing-vs-embroidery-vs-dtg" style={{ color: "var(--gold)" }}>Screen Printing vs. Embroidery vs. DTG</Link> — compare all three methods</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/how-to-order-custom-t-shirts" style={{ color: "var(--gold)" }}>How to Order Custom T-Shirts (Step-by-Step)</Link> — the full ordering process</li>
        </ul>

        <div style={{ padding: "24px 28px", background: "var(--surface)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, marginBottom: 8 }}>
            Get a quote from Wearmill
          </p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            Houston-based. Online ordering. Quote within 24 hours. Free digital proof. Ships in 5-7 business days.
          </p>
          <a href="/#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
            Get a free quote &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
