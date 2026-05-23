import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Wearmill",
  description: "How Wearmill collects, uses, and protects your information.",
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

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)", marginBottom: 56 }}>
          Last updated: May 23, 2026
        </p>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Information We Collect</h2>
          <p style={paraStyle}>
            When you submit a quote request through our website, we collect your name, business name, email address, and any details you include in your message. If you upload a logo or design file, we store that file to prepare your quote.
          </p>
          <p style={paraStyle}>
            We also collect basic analytics data through standard web server logs, including your IP address, browser type, and pages visited. We do not use third-party tracking cookies.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>How We Use Your Information</h2>
          <p style={paraStyle}>
            We use the information you provide to respond to your quote requests, process orders, and communicate about your projects. Your email address may be used to send order updates and delivery confirmations. We do not send marketing emails unless you opt in.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Information Sharing</h2>
          <p style={paraStyle}>
            We do not sell, rent, or trade your personal information. We share your information only with our fulfillment partners as needed to produce and ship your orders. These partners are contractually required to protect your data.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Data Security</h2>
          <p style={paraStyle}>
            We use industry-standard security measures including encrypted connections (HTTPS), secure email handling, and access controls. While no system is 100% secure, we take reasonable steps to protect the information you share with us.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Data Retention</h2>
          <p style={paraStyle}>
            We retain your contact information and order history for as long as needed to fulfill orders and handle reorder requests. Design files are kept on file for repeat orders unless you request deletion. You can request removal of your data at any time by emailing us.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Your Rights</h2>
          <p style={paraStyle}>
            You may request access to, correction of, or deletion of your personal information at any time. To make a request, contact us at{" "}
            <a href="mailto:hello@wearmill.com" style={{ color: "var(--gold)", textDecoration: "none" }}>hello@wearmill.com</a>.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Changes to This Policy</h2>
          <p style={paraStyle}>
            We may update this policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            Questions about this policy? Email{" "}
            <a href="mailto:hello@wearmill.com" style={{ color: "var(--gold)", textDecoration: "none" }}>hello@wearmill.com</a>
          </p>
        </div>

      </div>
    </main>
  );
}
