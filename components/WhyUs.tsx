"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Eye, HandCoins, Repeat } from "lucide-react";

const reasons = [
  {
    Icon: Eye,
    title: "Transparent from day one",
    desc: "You see the price before you commit. No hidden fees, no surprise surcharges, no minimums on most items.",
  },
  {
    Icon: Zap,
    title: "Fast, reliable turnaround",
    desc: "Quote back in 24 hours. Production starts the day you approve. Most orders ship within a week.",
  },
  {
    Icon: HandCoins,
    title: "Pricing that scales with you",
    desc: "The more you order, the less you pay per unit. Volume discounts built into every tier.",
  },
  {
    Icon: Repeat,
    title: "Reorder in seconds",
    desc: "Once your art is set up, reorders are one message away. Same quality, same pricing, no re-setup.",
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
