/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blueCustom: {
					light: "#a1faff",
					base: "#0097b2",
					dark: "#125467",
				},
				orangeCustom: {
					light: "#fde0ab",
					base: "#f79226",
					dark: "#c0550e",
				},
				lightBackground: "#e6eef9",
				darkText: "#010204",
			},
			backgroundImage: {
				homepageCustom: "url('/src/assets/images/bg-homepage.jpg')",
			},
		},
	},
	plugins: [],
});
