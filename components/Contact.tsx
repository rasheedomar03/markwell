"use client";
import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = { name?: string; email?: string; message?: string };

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  padding: "12px 16px",
  color: "var(--text)",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function validate(form: HTMLFormElement): FieldErrors {
    const errors: FieldErrors = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name) errors.name = "Name is required.";
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!message) errors.message = "Tell us what you need.";

    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;

    // Honeypot check
    const hp = (form.elements.namedItem("hp_website") as HTMLInputElement).value;
    if (hp) {
      setStatus("success");
      return;
    }

    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Focus the first field with an error
      const order: (keyof FieldErrors)[] = ["name", "email", "message"];
      for (const key of order) {
        if (errors[key]) {
          (form.elements.namedItem(key) as HTMLElement)?.focus();
          break;
        }
      }
      return;
    }

    setStatus("loading");
    const fileInput = form.elements.namedItem("attachment") as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file && file.size > 4 * 1024 * 1024) {
      setErrorMsg("File must be under 4 MB.");
      setStatus("error");
      return;
    }

    const data: Record<string, string> = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      business: (form.elements.namedItem("business") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    if (file) {
      data.attachmentName = file.name;
      data.attachmentData = await readFileAsBase64(file);
    }

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

  function inputStyle(hasError: boolean): React.CSSProperties {
    return {
      ...inputBase,
      borderColor: hasError ? "#f87171" : "var(--border)",
    };
  }

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <style>{`
        .wm-input:focus-visible {
          border-color: rgba(228,184,77,0.4) !important;
          box-shadow: 0 0 0 3px rgba(228,184,77,0.1);
        }
        .wm-input.is-error:focus-visible {
          border-color: #f87171 !important;
          box-shadow: 0 0 0 3px rgba(248,113,113,0.1);
        }
        .wm-btn:focus-visible {
          box-shadow: 0 0 0 3px rgba(228,184,77,0.25);
          outline: none;
        }
        .wm-btn:active:not(:disabled) {
          transform: translateY(1px);
          opacity: 0.85 !important;
        }
        .wm-upload:focus-within {
          border-color: rgba(228,184,77,0.4);
          box-shadow: 0 0 0 3px rgba(228,184,77,0.1);
        }
      `}</style>

      <div className="contact-grid" style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Left: Copy */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
            Get Started
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 24 }}>
            Get your free quote.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 48 }}>
            Tell us what you need — product, quantity, and your logo — and we&apos;ll send a quote back within 24 hours. No back-and-forth, no surprises.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { label: "Quick turnaround", desc: "Quote in under 24 hours, production starts same day." },
              { label: "Transparent pricing", desc: "What you see is what you pay. Setup fees waived at 96+ units." },
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

          {/* Guarantee */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--gold-dim)", borderRadius: 8, flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 1.5L2.5 4.5V8.5C2.5 12.36 5.28 15.95 9 16.5C12.72 15.95 15.5 12.36 15.5 8.5V4.5L9 1.5Z" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M6 9L8 11L12 7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>100% Satisfaction Guarantee</p>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Not happy with your order? We&apos;ll reprint it or refund you. No questions asked.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
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
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          noValidate
        >
          {/* Honeypot — hidden from real users */}
          <div aria-hidden="true" tabIndex={-1} style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, overflow: "hidden" }}>
            <label>
              Website
              <input type="text" name="hp_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label htmlFor="wm-name" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
                Your Name <span style={{ color: "#f87171" }}>*</span>
              </label>
              <input
                id="wm-name"
                className={`wm-input${fieldErrors.name ? " is-error" : ""}`}
                type="text"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Jane Smith"
                style={inputStyle(!!fieldErrors.name)}
                onChange={() => fieldErrors.name && setFieldErrors(prev => ({ ...prev, name: undefined }))}
              />
              {fieldErrors.name && (
                <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{fieldErrors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="wm-business" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
                Business Name
              </label>
              <input
                id="wm-business"
                className="wm-input"
                type="text"
                name="business"
                maxLength={100}
                autoComplete="organization"
                placeholder="Acme Co."
                style={inputStyle(false)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="wm-email" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
              Email <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              id="wm-email"
              className={`wm-input${fieldErrors.email ? " is-error" : ""}`}
              type="email"
              name="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="jane@yourbusiness.com"
              style={inputStyle(!!fieldErrors.email)}
              onChange={() => fieldErrors.email && setFieldErrors(prev => ({ ...prev, email: undefined }))}
            />
            {fieldErrors.email && (
              <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="wm-message" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
              What do you need? <span style={{ color: "#f87171" }}>*</span>
            </label>
            <textarea
              id="wm-message"
              className={`wm-input${fieldErrors.message ? " is-error" : ""}`}
              name="message"
              required
              maxLength={2000}
              rows={5}
              placeholder="e.g. 150 screen-printed shirts and 50 embroidered hats for our team..."
              style={{
                ...inputStyle(!!fieldErrors.message),
                resize: "none",
                lineHeight: 1.6,
              }}
              onChange={() => fieldErrors.message && setFieldErrors(prev => ({ ...prev, message: undefined }))}
            />
            {fieldErrors.message && (
              <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{fieldErrors.message}</p>
            )}
          </div>

          {/* File upload */}
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.02em" }}>
              Attach your logo or design <span style={{ color: "var(--text-muted)" }}>(optional, max 4 MB)</span>
            </label>
            <label
              className="wm-upload"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 16px", border: "1px solid var(--border)", borderRadius: 8,
                cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s",
                background: "var(--bg)",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(228,184,77,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.75 6L9 2.25L5.25 6" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 2.25V11.25" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 14, color: fileName ? "var(--text)" : "var(--text-muted)" }}>
                {fileName || "Choose a file…"}
              </span>
              <input
                type="file"
                name="attachment"
                accept=".png,.jpg,.jpeg,.svg,.ai,.eps,.pdf"
                style={{ display: "none" }}
                onChange={e => {
                  const f = e.target.files?.[0];
                  setFileName(f ? f.name : null);
                }}
              />
            </label>
          </div>

          {status === "error" && (
            <div role="alert" style={{ fontSize: 13, color: "#f87171", margin: 0, padding: "10px 14px", background: "rgba(248,113,113,0.06)", borderRadius: 8, border: "1px solid rgba(248,113,113,0.15)" }}>
              {errorMsg} If this keeps happening, email us at{" "}
              <a href="mailto:hello@wearmill.com" style={{ color: "#f87171", textDecoration: "underline" }}>hello@wearmill.com</a>.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="wm-btn"
            style={{
              background: "var(--gold)", color: "#07070A", fontWeight: 600, fontSize: 15,
              padding: "15px 28px", borderRadius: 10, border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
              transition: "opacity 0.15s, transform 0.1s", letterSpacing: "-0.01em",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.opacity = "1"; }}
          >
            {status === "loading" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                <circle cx="8" cy="8" r="6" stroke="rgba(7,7,10,0.25)" strokeWidth="2" fill="none" />
                <path d="M14 8a6 6 0 0 0-6-6" stroke="#07070A" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            )}
            {status === "loading" ? "Sending…" : "Send My Quote Request"}
          </button>

          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </form>
        )}

      </div>
    </section>
  );
}
