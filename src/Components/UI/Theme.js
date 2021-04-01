import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#fff";
const arcBlack = "black";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`,
			black: `${arcBlack}`,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	}, //this closes the palette option for typography and enables font-size change
	typography: {
		tab: {
			fontFamily: "Raleway, sans-serif",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Raleway, sans-serif",
			fontSize: "1rem",
			textTransform: "none",
			color: arcBlue,
		},
		h2: {
			fontFamily: "Raleway, sans-serif",
			fontWeight: 700,
			fontSize: "2.5rem",
			color: `${arcBlue}`,
			lineHeight: 1.5,
		},
		h6: {
			fontWeight: 300,
			fontFamily: "Raleway, sans-serif",
			color: arcBlack,
			lineHeight: 1,
			fontSize: "1.1rem",
		},

		body1: {
			fontSize: "1.25em",
			color: arcBlack,
			fontWeight: 300,
		},
		caption: {
			fontSize: "1rem",
			fontWeight: 300,
			color: arcGrey,
		},
		h3: {
			fontFamily: "Raleway, sans-serif",
			color: arcBlue,
			fontSize: "2.5rem",
		},
		h5: {
			fontFamily: "Raleway, sans-serif",
			color: "#000",
			fontSize: "1.4rem",
			fontWeight: 700,
		},

		h4: {
			fontFamily: "Raleway, sans-serif",
			fontWeight: 700,
			fontSize: "1.75rem",
			color: arcBlue,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: "300",
			color: arcGrey,
		},
		learnButton: {
			borderColor: arcBlue,
			borderWidth: 2,
			color: arcBlue,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Raleway",
			fontWeight: "bold",
		},
	},
	overrides: {
		MuiInputLabel: {
			root: {
				color: arcBlue,
				fontSize: "1rem",
			},
		},

		MuiInput: {
			root: {
				color: arcGrey,
				fontWeight: 300,
			},
			underline: {
				"&:before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
			},
		},
	},
});
