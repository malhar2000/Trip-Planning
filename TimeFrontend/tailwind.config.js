/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			label: {
				backgroundColor: "white", // Same color as background
				alignSelf: "flex-start", // Have View be same width as Text inside
				paddingHorizontal: 3, // Amount of spacing between border and first/last letter
				marginStart: 10, // How far right do you want the label to start
				zIndex: 1, // Label must overlap border
				elevation: 1, // Needed for android
				shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
				position: "absolute", // Needed to be able to precisely overlap label with border
				top: -12,
			},
		},
	},
	plugins: [],
};
