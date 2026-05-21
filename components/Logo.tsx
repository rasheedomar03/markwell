interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizes = {
  sm: { mark: 24, fontSize: 16 },
  md: { mark: 22, fontSize: 14 },
  lg: { mark: 28, fontSize: 19 },
};

export default function Logo({ size = "md", color = "var(--gold)" }: LogoProps) {
  const s = sizes[size];

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      {/* WM lettermark */}
      <span
        style={{
          fontSize: s.mark,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color,
          fontFamily: "var(--font-heading, 'Playfair Display', serif)",
          lineHeight: 1,
          display: "inline-block",
        }}
      >
        WM
      </span>

      {/* Divider */}
      <span style={{ width: 1, height: s.mark * 0.7, background: "var(--border)", display: "inline-block" }} />

      {/* WEARMILL wordmark */}
      <span
        style={{
          fontSize: s.fontSize,
          fontWeight: 400,
          letterSpacing: "0.3em",
          color,
          fontFamily: "var(--font-sans, 'Inter', sans-serif)",
          lineHeight: 1,
          textTransform: "uppercase" as const,
          display: "inline-block",
        }}
      >
        WEARMILL
      </span>
    </span>
  );
}
