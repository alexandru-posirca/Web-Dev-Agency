const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1025px",
			xl: "1200px",
			"md-media": { raw: "(min-width: 768px)" },
			"lg-media": { raw: "(min-width: 1025px)" },
			"xl-media": { raw: "(min-width: 1200px)" },
		},
		colors: {
			"black-main": "#000000",
			"white-main": "#FAFAF9",
			"green": "#38af48",
			gray: {
				200: "#b9b9ba",
				500: "#171619"
			},
			red: {
				200: "#b70000",
				500: "#6c001a"
			}
		},
		fontFamily: {
			montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
		},
		extend: {},
	},
	plugins: [],
}
