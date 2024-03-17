/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1025px",
			xl: "1200px",
		},
		colors: {
			"black-main": "#000000",
			"red": "#b70000",
			"white-main": "#FAFAF9",
			"green": "#38af48",
			gray: {
				200: "#b9b9ba",
				500: "#171619"
			}
		},
		extend: {},
	},
	plugins: [],
}
