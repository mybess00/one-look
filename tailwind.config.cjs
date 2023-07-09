/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {},
		screens: {
			'mobile': {'max': '768px'},
			'tablet': {'min': '769px', 'max': '1023px'},
			'desktop': '1024px',
			'no-mobile': '769px',
		}
	},
	plugins: [
		require('daisyui'),
		require("tw-elements/dist/plugin.cjs")
	],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		  ],
	},
}