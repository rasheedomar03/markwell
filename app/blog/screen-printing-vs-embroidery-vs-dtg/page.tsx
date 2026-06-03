import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Screen Printing vs. Embroidery vs. DTG: Which Is Right for Your Order? — Wearmill",
  description: "Compare screen printing, embroidery, and DTG printing by cost, durability, and best use case. Real pricing and minimums from Wearmill, Houston TX.",
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
        Screen Printing vs. Embroidery vs. DTG: Which Is Right for Your Order?
      </h1>

      <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 40 }}>
        By Rasheed Omar, Founder of Wearmill &middot; June 2, 2026 &middot; 6 min read &middot; Last updated June 2026
      </p>

      <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Screen printing, embroidery, and DTG (direct-to-garment) are the three main ways to put a logo on a product.</strong> Each method has trade-offs in cost per unit, durability, color range, and minimum order size. The right choice depends on what you're printing, how many you need, and what the final product needs to look like.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Quick comparison
        </h2>

        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--text)", fontWeight: 600 }}></th>
                <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--gold)", fontWeight: 600 }}>Screen Printing</th>
                <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--gold)", fontWeight: 600 }}>Embroidery</th>
                <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--gold)", fontWeight: 600 }}>DTG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Best for", "Bulk orders, simple designs", "Hats, polos, professional look", "Small runs, photo-quality art"],
                ["Cost per unit (100 units)", "$7.99", "$12.99+", "$15-25"],
                ["Setup fee", "$25/color (waived at 144+)", "$35 digitizing (waived at 96+)", "None"],
                ["Minimum order", "24 units", "24 units", "1 unit"],
                ["Colors", "1-6 colors (per screen)", "Up to 15 thread colors", "Unlimited (full color)"],
                ["Durability", "50+ washes", "Outlasts the garment", "30-50 washes"],
                ["Best products", "T-shirts, hoodies, tote bags", "Hats, polos, jackets", "T-shirts, hoodies"],
                ["Turnaround", "5-7 business days", "5-7 business days", "5-7 business days"],
              ].map(([label, sp, em, dtg], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 16px", color: "var(--text)", fontWeight: 500, fontSize: 13 }}>{label}</td>
                  <td style={{ padding: "10px 16px" }}>{sp}</td>
                  <td style={{ padding: "10px 16px" }}>{em}</td>
                  <td style={{ padding: "10px 16px" }}>{dtg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Screen printing
        </h2>
        <p style={{ marginBottom: 16 }}>
          Screen printing pushes ink through a mesh stencil onto the fabric. Each color in your design requires a separate screen. This makes it the cheapest option for large runs with simple designs (1-3 colors), but the per-screen setup cost means it gets expensive for small quantities or designs with many colors.
        </p>
        <p style={{ marginBottom: 16 }}>
          <strong style={{ color: "var(--text)" }}>Use screen printing when:</strong> you need 48+ units with a 1-3 color logo. The unit price drops significantly at higher quantities. At 576+ units, a Gildan tee with a 1-color print runs about $6.49/unit.
        </p>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Skip screen printing when:</strong> you have a full-color photo, need fewer than 24 units, or want a different design on every shirt.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Embroidery
        </h2>
        <p style={{ marginBottom: 16 }}>
          Embroidery stitches your design directly into the fabric with thread. It looks more polished and professional than printing, which is why it's the standard for hats, polos, and corporate wear. The texture and dimension of stitched thread gives a premium feel that ink can't match.
        </p>
        <p style={{ marginBottom: 16 }}>
          <strong style={{ color: "var(--text)" }}>Use embroidery when:</strong> you're branding hats, polos, quarter-zips, or jackets. It's also the right choice when you want a logo that looks upscale, like for corporate gifts or uniforms.
        </p>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Skip embroidery when:</strong> your design has fine detail, gradients, or more than 15 colors. Small text (under 6pt) doesn't stitch well. It's also more expensive per unit than screen printing at high volumes.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          DTG (direct-to-garment)
        </h2>
        <p style={{ marginBottom: 16 }}>
          DTG works like an inkjet printer for fabric. It sprays ink directly onto the garment, which means it can reproduce full-color photos, gradients, and complex artwork with no color limitations. There's no setup fee, so it's the most cost-effective option for small runs.
        </p>
        <p style={{ marginBottom: 16 }}>
          <strong style={{ color: "var(--text)" }}>Use DTG when:</strong> you have a complex, full-color design, need fewer than 48 units, or want each shirt to be different (like personalized names).
        </p>
        <p style={{ marginBottom: 24 }}>
          <strong style={{ color: "var(--text)" }}>Skip DTG when:</strong> you need 100+ units of a simple 1-2 color design. Screen printing will be cheaper per unit at that volume.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          Decision guide
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>100 t-shirts, 1-color logo:</strong> Screen printing. Cheapest per unit, most durable.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>48 embroidered hats for a team:</strong> Embroidery. The only method that works well on structured hats.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>12 shirts with a full-color photo:</strong> DTG. No setup fee, unlimited colors, low quantity.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>500 polos for corporate uniforms:</strong> Embroidery. Looks professional, outlasts the garment.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "var(--text)" }}>200 event tees, 2-color design:</strong> Screen printing. Best price-to-quality ratio at this volume.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginTop: 40, marginBottom: 16, fontFamily: "var(--font-heading)" }}>
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Can I combine methods on the same order?</p>
            <p>Yes. You can screen print the back of a t-shirt and embroider the front left chest, for example. Each method is priced separately.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Which method lasts the longest?</p>
            <p>Embroidery is the most durable. The thread is stitched into the fabric and won't fade with washing. Screen printing holds up for 50+ washes when properly cured. DTG lasts 30-50 washes with proper care (wash inside out, cold water).</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>What if I don't know which method to use?</p>
            <p>Send us your logo and tell us what product and quantity you're thinking. We'll recommend the best method and quote all applicable options so you can compare.</p>
          </div>
        </div>

        <div style={{ padding: "24px 28px", background: "var(--surface)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, marginBottom: 8 }}>
            Not sure which method is right?
          </p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            Send us your design and quantity. We'll recommend the best printing method and send back a quote within 24 hours.
          </p>
          <a href="/#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
            Get a free quote &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
