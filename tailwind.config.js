export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dots: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "24px 24px",
      },
      animation: {
        dots: "dotsMove 60s linear infinite",
      },
      keyframes: {
        dotsMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 1000px" },
        },
      },
    },
  },
  plugins: [],
};
