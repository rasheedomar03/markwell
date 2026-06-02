/* Hallmark · component: marquee · genre: atmospheric · theme: brand-token */

const items = [
  "Screen Printing",
  "Embroidery",
  "Custom Apparel",
  "Branded Hats",
  "Corporate Merch",
  "Drinkware",
  "Promo Items",
  "Free Shipping $500+",
  "Ships in 5–7 Days",
  "Quote in 24 hrs",
];

export default function Marquee() {
  const Track = () => (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              paddingRight: 20,
            }}
          >
            {item}
          </span>
          <span
            style={{
              color: "var(--gold)",
              opacity: 0.35,
              fontSize: 12,
              paddingRight: 20,
              lineHeight: 1,
            }}
          >
            ·
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className="marquee-container"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "13px 0",
        overflow: "hidden",
        background: "var(--surface)",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "inline-flex", whiteSpace: "nowrap", willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>
    </div>
  );
}
