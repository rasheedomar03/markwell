"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Send your logo, the product you want, and your quantity. We'll get back with a quote in under 24 hours.",
  },
  {
    num: "02",
    title: "Approve your quote",
    desc: "Clear pricing, no hidden fees. Once you approve, we put the order into production immediately.",
  },
  {
    num: "03",
    title: "Receive your order",
    desc: "Fully printed, quality-checked, and shipped direct to your door. Ready to hand out or stock your shelves.",
  },
];

function StepItem({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="step-item"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      style={{ paddingBottom: isLast ? 0 : 64, position: "relative" }}
    >
      {/* Step number */}
      <div className="step-num" style={{ textAlign: "right", paddingTop: 2 }}>
        <span style={{
          fontSize: 52, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1,
          color: inView ? "rgba(228,184,77,0.22)" : "rgba(228,184,77,0.06)",
          fontFamily: "var(--font-geist-mono)",
          transition: "color 0.6s ease",
          display: "block",
        }}>
          {step.num}
        </span>
      </div>

      {/* Timeline column */}
      <div className="step-timeline-col" style={{ position: "relative" }}>
        {/* vertical line */}
        {!isLast && (
          <div style={{ position: "absolute", left: 0, top: 20, bottom: -64, width: 1, background: "var(--border)" }} />
        )}
        {/* dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2, ease: "backOut" }}
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--gold)",
            position: "absolute",
            left: -3.5, top: 10,
            boxShadow: "0 0 12px rgba(228,184,77,0.4)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ paddingBottom: 8 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 14, lineHeight: 1.2 }}>
          {step.title}
        </h3>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 480 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-geist-mono)", marginBottom: 16 }}>
          The Process
        </p>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 80 }}>
          Three steps.<br />That&apos;s it.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
