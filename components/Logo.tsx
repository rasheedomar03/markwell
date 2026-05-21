interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizes = {
  sm: { fontSize: 11 },
  md: { fontSize: 14 },
  lg: { fontSize: 19 },
};

export default function Logo({ size = "md", color = "var(--gold)" }: LogoProps) {
  const s = sizes[size];

  return (
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
  );
}
