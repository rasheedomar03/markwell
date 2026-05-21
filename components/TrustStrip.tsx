"use client";
import { motion } from "framer-motion";
import { Shield, Clock, Truck, BadgeCheck } from "lucide-react";

const badges = [
  { Icon: Shield,     label: "100% Satisfaction Guarantee" },
  { Icon: BadgeCheck,  label: "No Setup Fees, Ever" },
  { Icon: Truck,      label: "Ships in 5–7 Business Days" },
  { Icon: Clock,      label: "Quote Back in 24 Hours" },
];

export default function TrustStrip() {
  return (
    <section style={{ padding: "48px 24px", borderBottom: "1px solid var(--border)" }}>
      <div className="trust-grid" style={{ maxWidth: 1120, margin: "0 auto" }}>
        {badges.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--gold-dim)",
              borderRadius: 8,
              flexShrink: 0,
            }}>
              <Icon size={16} color="var(--gold)" strokeWidth={1.75} />
            </div>
            <span style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--text-secondary)",
              lineHeight: 1.4,
            }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
