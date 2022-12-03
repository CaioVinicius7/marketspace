import { extendTheme } from "native-base";

export const THEME = extendTheme({
	colors: {
		blue: {
			400: "#647AC7",
			700: "#364D9D"
		},
		gray: {
			700: "#1A181B",
			600: "#3E3A40",
			500: "#5F5B62",
			400: "#9F9BA1",
			300: "#D9D8DA",
			200: "#EDECEE",
			100: "#F7F7F8"
		},
		red: {
			400: "##EE7979"
		},
		white: "#FFFFFF"
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20
	},
	sizes: {
		14: 56,
		33: 148
	}
});
