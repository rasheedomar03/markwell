import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotional Products for Trade Shows: What Actually Gets Kept — Wearmill",
  description: "Which trade show giveaways people actually keep vs throw away. Practical guide with real pricing from Wearmill, Houston TX.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Promotional Products for Trade Shows: What Actually Gets Kept",
  description: "Which trade show giveaways people actually keep vs throw away. Practical guide with real pricing from Wearmill, Houston TX.",
  author: { "@type": "Person", name: "Rasheed Omar", jobTitle: "Founder", worksFor: { "@type": "Organization", name: "Wearmill" } },
  publisher: { "@type": "Organization", name: "Wearmill", url: "https://wearmill.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: "https://wearmill.com/blog/promotional-products-for-trade-shows",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How far in advance should I order for a trade show?", acceptedAnswer: { "@type": "Answer", text: "At least 3-4 weeks. Standard production is 5-7 business days, but you need time for quoting, proof approval, and shipping to the venue." } },
    { "@type": "Question", name: "Should I put my logo on the front or back of trade show shirts?", acceptedAnswer: { "@type": "Answer", text: "A small logo on the left chest and your website or tagline on the back. People are more likely to wear a shirt that doesn't look like a billboard." } },
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
        Promotional Products for Trade Shows: What Actually Gets Kept
      </h1>

      <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 40 }}>
        By Rasheed Omar, Founder of Wearmill &middot; June 2, 2026 &middot; 5 min read &middot; Last updated June 2026
      </p>

      <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>The average trade show attendee collects 3-5 bags of swag. Most of it goes in the trash within a week.</strong> The items people keep are the ones they'd use even without the logo. If you're spending money on promotional products for a trade show, pick items that earn shelf life.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Products people keep (and why)
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
          <div style={{ padding: "20px 24px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>T-shirts (if they're soft enough to wear)</p>
            <p style={{ fontSize: 14 }}>A Bella+Canvas or Comfort Colors tee with a clean, small logo gets worn. A stiff Gildan with a giant full-front ad print does not. Spend the extra $2-3 per unit on a nicer blank and keep the branding tasteful. Cost: $7.49-$14.49/unit at volume.</p>
          </div>

          <div style={{ padding: "20px 24px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>Quality drinkware (not the cheap stuff)</p>
            <p style={{ fontSize: 14 }}>A stainless steel tumbler or insulated water bottle sits on someone's desk for months. A cheap plastic cup gets tossed at the hotel. The difference in cost ($7.49/unit vs $2.00/unit) is the difference between a daily brand impression and a landfill contribution.</p>
          </div>

          <div style={{ padding: "20px 24px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>Branded hats</p>
            <p style={{ fontSize: 14 }}>An embroidered hat is one of the highest-ROI trade show items. People wear them in public, which turns one attendee into a walking billboard. Richardson snapbacks and structured baseball caps work best. Cost: $9.49-$17.99/unit at volume.</p>
          </div>

          <div style={{ padding: "20px 24px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>Canvas tote bags</p>
            <p style={{ fontSize: 14 }}>People literally use these to carry the rest of their swag home. A tote bag with your logo becomes the container for the entire show. Durable canvas bags get reused for groceries and errands for months. Cost: $6.99-$10.99/unit.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Products people throw away
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>Pens.</strong> Every booth has pens. Nobody is keeping yours. The cost is low, but so is the impact.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>Stress balls and fidget toys.</strong> Fun for 30 seconds. In the trash by dinner.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>Cheap sunglasses.</strong> Break on the first day. Your logo is now associated with something broken.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>Flyers and brochures.</strong> People take them to be polite. They get recycled with the hotel newspaper.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>USB drives.</strong> Nobody uses these anymore. They're a security concern for most companies.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          How to plan your trade show merch budget
        </h2>
        <p style={{ marginBottom: 16 }}>
          A common mistake is spreading the budget thin across many cheap items. A better approach: pick <strong style={{ color: "var(--text)" }}>one or two high-quality items</strong> and give those away selectively rather than handing out cheap pens to everyone who walks by.
        </p>

        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Budget tier</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Recommendation</th>
                <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--gold)", fontWeight: 600 }}>Approx. cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Under $500", "100 branded tote bags", "~$8.50/unit"],
                ["$500-$1,000", "50 embroidered hats + 100 totes", "$12.99 + $8.49/unit"],
                ["$1,000-$2,500", "100 soft tees + 50 hats + 100 totes", "Mix of $9.49-$12.99/unit"],
                ["$2,500+", "Quality tees + hats + tumblers for key prospects", "Focus on fewer, better items"],
              ].map(([tier, rec, cost], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--text)", fontWeight: 500 }}>{tier}</td>
                  <td style={{ padding: "10px 14px" }}>{rec}</td>
                  <td style={{ padding: "10px 14px" }}>{cost}</td>
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
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>How far in advance should I order for a trade show?</p>
            <p>At least 3-4 weeks. Standard production is 5-7 business days, but you need time for quoting, proof approval, and shipping. If the show is in another city, add shipping time to the venue.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Should I put my logo on the front or back?</p>
            <p>For trade show tees, a small logo on the left chest (front) and your website or tagline on the back works well. People are more likely to wear a shirt that doesn't look like a billboard.</p>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Related guides
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/custom-t-shirt-pricing-2026" style={{ color: "var(--gold)" }}>Custom T-Shirt Pricing in 2026</Link> — see what shirts cost at different quantities</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/screen-printing-vs-embroidery-vs-dtg" style={{ color: "var(--gold)" }}>Screen Printing vs. Embroidery vs. DTG</Link> — which method is right for your products</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/how-to-order-custom-t-shirts" style={{ color: "var(--gold)" }}>How to Order Custom T-Shirts (Step-by-Step)</Link> — the full ordering process</li>
        </ul>

        <div style={{ padding: "24px 28px", background: "var(--surface)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, marginBottom: 8 }}>
            Need trade show merch?
          </p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            Tell us about your event and budget. We'll recommend the right products and get you a quote within 24 hours.
          </p>
          <a href="/#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
            Get a free quote &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
