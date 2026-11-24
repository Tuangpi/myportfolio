/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f8fafc",
        surface: "#ffffff",
        accent: "#2563eb",
        ink: "#0f172a",
        muted: "#475569",
        faint: "#64748b",
        line: "#e2e8f0",
        soft: "#eff6ff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
        "display-1": [
          "clamp(2.6rem, 6.4vw, 5.75rem)",
          { lineHeight: "0.96", letterSpacing: "-0.045em" }
        ],
        "display-2": [
          "clamp(2rem, 4.2vw, 3.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" }
        ],
        "display-3": [
          "clamp(1.5rem, 2.6vw, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" }
        ]
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" }
        }
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
