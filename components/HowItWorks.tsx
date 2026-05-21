const steps = [
  { num: "01", title: "Tell us what you need", desc: "Send your logo, the product you want, and your quantity. We'll get back with a quote in under 24 hours." },
  { num: "02", title: "Approve your quote", desc: "Clear pricing, no hidden fees. Once you approve, we put the order into production immediately." },
  { num: "03", title: "Receive your order", desc: "Fully printed, quality-checked, and shipped direct to your door. Ready to hand out or stock your shelves." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
          The Process
        </p>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 72 }}>
          Three steps.<br />That&apos;s it.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0, borderTop: "1px solid var(--border)" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "48px 40px",
                borderRight: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ display: "block", fontSize: 11, fontWeight: 500, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.08em", marginBottom: 32 }}>
                {step.num}
              </span>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
