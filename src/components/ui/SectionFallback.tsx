interface SectionFallbackProps {
  variant?: "default" | "dark";
  rows?: number;
  withHeader?: boolean;
}

export function SectionFallback({
  variant = "default",
  rows = 3,
  withHeader = true,
}: SectionFallbackProps) {
  const isDark = variant === "dark";
  const blockBg = isDark ? "rgba(247,246,242,0.08)" : "var(--color-skeleton)";

  return (
    <section
      className={`section${isDark ? " section--dark" : ""}`}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="container">
        {withHeader ? (
          <div className="fallback-header">
            <span
              className="skeleton"
              style={{ display: "block", width: 120, height: 10, background: blockBg }}
            />
            <span
              className="skeleton"
              style={{ display: "block", width: "55%", height: 34, marginTop: 16, background: blockBg }}
            />
            <span
              className="skeleton"
              style={{ display: "block", width: "70%", height: 12, marginTop: 14, background: blockBg }}
            />
          </div>
        ) : null}

        <div className="fallback-rows">
          {Array.from({ length: rows }).map((_, i) => (
            <span
              key={i}
              className="skeleton"
              style={{
                display: "block",
                width: "100%",
                height: 96,
                background: blockBg,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}