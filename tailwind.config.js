/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E0A",
        coal: "#101314",
        panel: "#14171A",
        line: "#23262A",
        lime: "#D4FF3F",
        blue: "#3D5CFF",
        paper: "#F5F5F2",
        muted: "#9A9A95"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(212,255,63,.24)",
        blueGlow: "0 0 34px rgba(61,92,255,.22)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 24s linear infinite"
      }
    }
  },
  plugins: []
};
