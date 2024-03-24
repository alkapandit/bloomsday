/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
		primaryGreen:"#1C4835",
		secondaryGreen:"#208459",
		lightGreen:"#9FBCAD",
        mintGreen: "#EAF1E6",
        blackishV2: "#1f1f1f",
        yellowish: "#F5F2E1",
        greyish: "#979592",
        greyishV2: "#28292A",
      },
	  fontFamily: {
		breeSerif: ["'Bree Serif'", "serif"],
		neueMontreal: ["'Neue Montreal'", "sans-serif"],
	  },
    },
  },
  plugins: [],
};
