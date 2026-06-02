export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          style={{ animation: "spin 1.2s linear infinite" }}
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="var(--border)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M44 24c0-11.046-8.954-20-20-20"
            stroke="var(--gold)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
