import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Wearmill | Custom Printing Guides & Pricing",
  description: "Guides on screen printing, embroidery, DTG, custom t-shirt pricing, and promotional products for businesses. By Wearmill, Houston TX.",
};

const posts = [
  {
    slug: "screen-printing-vs-embroidery-vs-dtg",
    title: "Screen Printing vs. Embroidery vs. DTG: Which Is Right for Your Order?",
    excerpt: "Each printing method has trade-offs in cost, durability, and minimum order size. Here's how to pick the right one for your project.",
    date: "June 2, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-to-order-custom-t-shirts",
    title: "How to Order Custom T-Shirts for Your Company (Step-by-Step)",
    excerpt: "A clear walkthrough of the ordering process: from choosing a blank to approving your proof to receiving the finished product.",
    date: "June 2, 2026",
    readTime: "5 min read",
  },
  {
    slug: "promotional-products-for-trade-shows",
    title: "Promotional Products for Trade Shows: What Actually Gets Kept",
    excerpt: "Most trade show swag ends up in the trash. Here are the products people actually keep, use, and remember your brand by.",
    date: "June 2, 2026",
    readTime: "5 min read",
  },
  {
    slug: "custom-t-shirt-pricing-2026",
    title: "How Much Do Custom T-Shirts Cost in 2026? Real Pricing Breakdown",
    excerpt: "Actual per-unit costs for screen printing, DTG, and embroidery across different quantities and blank tiers.",
    date: "June 2, 2026",
    readTime: "5 min read",
  },
  {
    slug: "screen-printing-houston-tx",
    title: "Where to Get Custom Screen Printing in Houston, TX",
    excerpt: "What to look for in a Houston screen printer: turnaround times, pricing, minimums, and what questions to ask before you order.",
    date: "June 2, 2026",
    readTime: "5 min read",
  },
];

export default function BlogIndex() {
  return (
    <main style={{ padding: "60px 24px 100px", maxWidth: 720, margin: "0 auto" }}>

      <p style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--gold)",
        fontFamily: "var(--font-geist-mono)",
        marginBottom: 16,
      }}>
        Wearmill Blog
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
        Guides, pricing, and answers.
      </h1>

      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 48 }}>
        Practical information about custom printing, branded merch, and ordering for your business.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              padding: "28px 32px",
              background: "var(--surface)",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={undefined}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, fontFamily: "var(--font-sans)" }}>
                {post.title}
              </h2>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 8 }}>
              {post.excerpt}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
              {post.date} &middot; {post.readTime}
            </p>
          </Link>
        ))}
      </div>

    </main>
  );
}
