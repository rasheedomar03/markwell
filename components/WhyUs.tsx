"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Eye, HandCoins, Repeat } from "lucide-react";

const reasons = [
  {
    Icon: Eye,
    title: "See your price before you commit",
    desc: "Every quote is itemized. You know exactly what you're paying per unit, per color, per product before you approve anything.",
  },
  {
    Icon: Zap,
    title: "Quote in 24 hours. Ships in a week.",
    desc: "Send us your logo and quantity. We quote within a day. Production starts the moment you approve, and most orders ship in 5-7 business days.",
  },
  {
    Icon: HandCoins,
    title: "Order 24 or 2,400. Volume pricing built in.",
    desc: "No minimums on most items. The more you order, the less you pay per unit. Volume discounts are built into every tier.",
  },
  {
    Icon: Repeat,
    title: "Same order, one message. We keep your files.",
    desc: "Need another run? We store your artwork and order details. Reorders take one message and zero re-setup.",
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        padding: "40px 0",
        borderBottom: index < reasons.length - 1 ? "1px solid var(--border)" : "none",
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: 24,
        alignItems: "start",
      }}
    >
      <div style={{
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--gold-dim)",
        borderRadius: 10,
      }}>
        <reason.Icon size={20} color="var(--gold)" strokeWidth={1.75} />
      </div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.3 }}>
          {reason.title}
        </h3>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 520 }}>
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div className="why-us-grid" style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Left: heading */}
        <div className="why-us-sticky" style={{ position: "sticky", top: 120 }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
            Why Wearmill
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 24 }}>
            Built for businesses<br />that care about<br />their brand.
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 400 }}>
            We handle the hard part so you can focus on what matters. Quality printing, fair pricing, and a process that respects your time.
          </p>
        </div>

        {/* Right: reason cards */}
        <div>
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
