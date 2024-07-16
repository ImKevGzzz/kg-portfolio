/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'darkModeColor': '#252238',
				'lightModeOrange': '#DA5B00',
				'darkModeOrange': '#FF9040',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
