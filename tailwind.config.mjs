/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'darkModeColor': '#252238',
				'lightModeOrange': '#DA5B00',
				'darkModeOrange': '#FF9040',
				'lightModeBlue': '#3C3B6E',
				'lightModeExperienceHover': '#FF8C39',
				'tagsBgColor': '#FFE1CC',
				'lightTagIconColor': '#FFAB6D'
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
