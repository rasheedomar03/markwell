export default function Hero() {
  return (
    <section className="hero-noise hero-glow" style={{ paddingTop: 160, paddingBottom: 120, padding: "160px 24px 120px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold-dim)", border: "1px solid rgba(228,184,77,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 40 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
          <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-geist-mono)" }}>
            Custom Promotional Products
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 28, maxWidth: 820 }}>
          Your brand,<br />
          <span style={{
              background: "linear-gradient(90deg, #C9973A 0%, #E4B84D 35%, #F5D890 65%, #E4B84D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>on everything.</span>
        </h1>

        {/* Subheading */}
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 520, marginBottom: 48 }}>
          Custom apparel, hats, drinkware, and branded merch — screen printed and embroidered. Better quality, better pricing than you&apos;re paying now.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 80 }}>
          <a
            href="#contact"
            style={{ background: "var(--gold)", color: "#07070A", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}
          >
            Get a Free Quote
          </a>
          <a
            href="#pricing"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", fontWeight: 500, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}
          >
            View Pricing →
          </a>
        </div>

        {/* Stats row */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 40, display: "flex", gap: 64, flexWrap: "wrap" }}>
          {[
            { num: "100+", label: "Products available" },
            { num: "$3.50", label: "Shirts from / unit" },
            { num: "Fast", label: "Turnaround & fulfillment" },
            { num: "$0", label: "Setup or hidden fees" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.01em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
