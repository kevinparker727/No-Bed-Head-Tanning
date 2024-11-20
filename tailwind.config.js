/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-montserrat)",
      secondary: "var(--font-dancingScript)",
    },
    extend: {
      colors: {
        // primary: "#AE7761",
        primary: "#2E2B2B",
        accent: {
          DEFAULT: "#4FB7A7",
          hover: "#399688",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "home-video": "url(/assets/home-hero.mp4)",
        "home-image": "url(/assets/home-image.jpg)",
        "gallery-hero": "url(/assets/gallery-hero.jpg)",
        "about-hero-image": "url(/assets/about-hero.jpg)",
        "pricing-hero-image": "url(/assets/palm-trees.png)",
        "heather-portrait": "url(/assets/heather-portrait.jpg)",
        "tanning-tips-hero": "url(/assets/tanning-tips-hero.jpg)",
        "disclosures-hero": "url(/assets/disclosures-hero.jpg)",
        "prom-lights": "url(/assets/prom-lights.jpg)",
        "wedding-thumbnail": "url(/assets/wedding-hero.jpg)",
        "before-and-after": "url(/assets/makeup.jpg)",
        "contact-hero": "url(/assets/contact-hero.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
