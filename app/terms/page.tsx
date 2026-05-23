import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Wearmill",
  description: "Terms and conditions for ordering custom printed products from Wearmill.",
};

const sectionStyle: React.CSSProperties = { marginBottom: 48 };
const headingStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: "var(--text)",
  marginBottom: 16,
  letterSpacing: "-0.01em",
};
const paraStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.8,
  color: "var(--text-secondary)",
  marginBottom: 12,
};

export default function TermsOfService() {
  return (
    <main style={{ padding: "140px 24px 100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <Link
          href="/"
          style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", display: "inline-block", marginBottom: 40 }}
        >
          &larr; Back to Wearmill
        </Link>

        <h1 style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: 16,
        }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 56 }}>
          Last updated: May 23, 2026
        </p>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Orders and Quotes</h2>
          <p style={paraStyle}>
            All pricing provided through our website or via email is an estimate until confirmed in a formal quote. Prices may vary based on final artwork, color count, garment availability, and order specifications. A confirmed quote is valid for 30 days from the date issued.
          </p>
          <p style={paraStyle}>
            Orders are considered final once you approve the digital proof and confirm payment terms. After approval, changes to artwork, quantities, or product selection may incur additional charges or delay production.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Artwork and Proofs</h2>
          <p style={paraStyle}>
            You are responsible for providing print-ready artwork or logo files. We offer a free digital proof for every order. It is your responsibility to review the proof carefully for spelling, colors, sizing, and placement before approving.
          </p>
          <p style={paraStyle}>
            Once a proof is approved, Wearmill is not responsible for errors that were present in the approved proof. If we make an error that was not in the approved proof, we will reprint the affected items at no charge.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Production and Shipping</h2>
          <p style={paraStyle}>
            Standard production time is 5 to 7 business days after proof approval. Rush orders (under 7 business days) are subject to a 15% surcharge and availability. Production timelines are estimates and not guaranteed delivery dates.
          </p>
          <p style={paraStyle}>
            Orders over $500 qualify for free standard shipping. Shipping costs for smaller orders are calculated based on weight and destination. Wearmill is not responsible for delays caused by shipping carriers.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Setup Fees</h2>
          <p style={paraStyle}>
            Screen printing orders include a $25 setup fee per color, waived for orders of 144 units or more. Embroidery orders include a one-time $35 digitizing fee, waived for orders of 96 units or more. DTG (direct-to-garment) printing has no setup fee.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Returns and Reprints</h2>
          <p style={paraStyle}>
            Custom printed products are made to order and cannot be returned for a refund unless there is a defect in materials or workmanship, or an error on our part that differs from the approved proof.
          </p>
          <p style={paraStyle}>
            If you receive defective or incorrect items, contact us within 7 business days of delivery with photos of the issue. We will reprint the affected items or issue a credit at our discretion.
          </p>
          <p style={paraStyle}>
            Minor variations in color between screen and printed output are inherent to the printing process and are not considered defects. Exact Pantone color matching is available for an additional $10 per color.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Payment</h2>
          <p style={paraStyle}>
            Payment terms are established at the time of order confirmation. For new customers, payment is due in full before production begins. Established accounts may qualify for net-30 terms at our discretion.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Intellectual Property</h2>
          <p style={paraStyle}>
            You represent that you have the right to use any logos, artwork, or designs submitted to us. Wearmill is not responsible for copyright or trademark infringement resulting from artwork provided by the customer.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Limitation of Liability</h2>
          <p style={paraStyle}>
            Wearmill's liability for any order shall not exceed the total amount paid for that order. We are not liable for indirect, incidental, or consequential damages including lost profits or business opportunities.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Changes to These Terms</h2>
          <p style={paraStyle}>
            We reserve the right to update these terms at any time. Changes take effect when posted to this page. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@wearmill.com" style={{ color: "var(--gold)", textDecoration: "none" }}>hello@wearmill.com</a>
          </p>
        </div>

      </div>
    </main>
  );
}
