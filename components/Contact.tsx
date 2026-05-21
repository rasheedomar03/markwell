"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>

        {/* Left: Copy */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
            Get Started
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 24 }}>
            Ready to order?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 48 }}>
            Tell us what you need — product, quantity, and your logo — and we&apos;ll send a quote back within 24 hours. No back-and-forth, no surprises.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { label: "Quick turnaround", desc: "Quote in under 24 hours, production starts same day." },
              { label: "Transparent pricing", desc: "What you see is what you pay. No setup fees." },
              { label: "Ships to your door", desc: "Fully printed, quality-checked, delivered directly." },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", marginTop: 7, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>Or email us directly</p>
            <a href="mailto:hello@wearmill.com" style={{ fontSize: 15, color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}>
              hello@wearmill.com
            </a>
          </div>
        </div>

        {/* Right: Form */}
        {status === "success" ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 16, padding: "48px 0" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(228,184,77,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11L9 16L18 7" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Quote request sent.</h3>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
              We&apos;ll send your quote back within 24 hours. Keep an eye on your inbox.
            </p>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                style={{
                  width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8,
                  padding: "12px 16px", color: "var(--text)", fontSize: 14, outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.4)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
                Business Name
              </label>
              <input
                type="text"
                name="business"
                placeholder="Acme Co."
                style={{
                  width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8,
                  padding: "12px 16px", color: "var(--text)", fontSize: 14, outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.4)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="jane@yourbusiness.com"
              style={{
                width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8,
                padding: "12px 16px", color: "var(--text)", fontSize: 14, outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.15s",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.4)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
              What do you need?
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="e.g. 150 screen-printed shirts and 50 embroidered hats for our team..."
              style={{
                width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8,
                padding: "12px 16px", color: "var(--text)", fontSize: 14, outline: "none",
                boxSizing: "border-box",
                resize: "none", lineHeight: 1.6,
                transition: "border-color 0.15s",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.4)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          {status === "error" && (
            <p style={{ fontSize: 13, color: "#f87171", margin: 0 }}>{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              background: "var(--gold)", color: "#07070A", fontWeight: 600, fontSize: 15,
              padding: "15px 28px", borderRadius: 10, border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
              transition: "opacity 0.15s", letterSpacing: "-0.01em",
            }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.opacity = "1"; }}
          >
            {status === "loading" ? "Sending…" : "Send My Quote Request"}
          </button>
        </form>
        )}

      </div>
    </section>
  );
}
