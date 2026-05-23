"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What's the minimum order quantity?",
    a: "Most products start at 24 units. Some items like stadium cups and tote bags can go lower. Reach out with your project details and we'll find the right fit.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard orders ship in 5 to 7 business days after proof approval. Need it faster? Rush orders (under 7 days) are available for a 15% surcharge.",
  },
  {
    q: "Can I see a proof before production?",
    a: "Every order includes a free digital proof. We won't start printing or embroidering until you approve it. No surprises.",
  },
  {
    q: "Are there any setup fees?",
    a: "Screen printing has a $25 setup per color, waived at 144+ units. Embroidery has a one-time $35 digitizing fee, waived at 96+ units. DTG printing has no setup fee.",
  },
  {
    q: "What file formats do you accept for logos?",
    a: "Vector files work best: .AI, .EPS, .SVG, or high-resolution .PDF. We can also work with high-res .PNG or .JPG files (300 DPI minimum).",
  },
  {
    q: "Do you offer free shipping?",
    a: "Orders over $500 ship free. For smaller orders, shipping is calculated at checkout based on weight and destination.",
  },
  {
    q: "What if I need to reorder the same design?",
    a: "Reorders are simple. We keep your artwork and settings on file. Repeat orders also get a 5% loyalty discount.",
  },
  {
    q: "Can I mix sizes and colors in one order?",
    a: "Yes. You can mix sizes and colors within the same product. The total unit count across all variations determines your price tier.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 500, color: "var(--text)", lineHeight: 1.5 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: 22,
            color: "var(--gold)",
            flexShrink: 0,
            lineHeight: 1,
            fontWeight: 300,
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              paddingBottom: 24,
              maxWidth: 640,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <p style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontFamily: "var(--font-geist-mono)",
          marginBottom: 16,
        }}>
          Frequently Asked Questions
        </p>

        <h2 style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: 56,
        }}>
          Everything you need to know.
        </h2>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {faqs.map(f => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 40, textAlign: "center" }}>
          Still have questions?{" "}
          <a href="#contact" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Send us a message
          </a>
          {" "}and we'll get back to you within 24 hours.
        </p>

      </div>
    </section>
  );
}
