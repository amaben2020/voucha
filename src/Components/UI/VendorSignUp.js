import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VendorSignUp from "../../assets/vendorSignup.png";
import VendorSignUp2 from "../../assets/vendorSignup2.png";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VenorSignupForm from "../UI/VendorSignupForm";

import "./App.module.css";

const useStyles = makeStyles((theme) => ({
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	background: {
		background: `url(${VendorSignUp})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${VendorSignUp2})`,
		},
	},

	donorSignupForm: {
		background: "linear-gradient(#fff)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
	},

	callToAction: {
		backgroundImage: `url(${VendorSignUp})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${VendorSignUp2})`,
		},
	},
	estimateBtn: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 50,
		width: 205,
		backgroundColor: "#3E3B6B",
		fontSize: "1.5rem",

		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	estimateBtn2: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 50,
		width: 205,
		backgroundColor: "#CE338C",
		fontSize: "1.5rem",

		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function DonorSignUp(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid
			container
			alignItems="center"
			className={classes.callToAction}
			justify="space-between"
		>
			<Grid item container md={2} style={{ marginLeft: "5em" }}></Grid>
			<Grid
				item
				container
				md={4}
				style={{ marginLeft: matchesXS ? "1em" : "5em", paddingBottom: "20em" }}
			>
				<Grid container direction="column">
					<Grid
						item
						container
						style={{ marginBottom: matchesXS ? "0.5em" : "6em" }}
					>
						<Grid item style={{ marginTop: matchesMD ? "1em" : undefined }}>
							<Typography variant="h2" style={{ color: "#fff" }}>
								{" "}
								Vendor
							</Typography>
						</Grid>
						<Grid style={{ marginTop: matchesMD ? "1em" : undefined }}>
							<Typography
								variant="h2"
								style={{
									color: "#fff",
									padding: matchesXS ? "1em" : undefined,
									marginLeft: matchesXS ? 0 : matchesMD ? "10em" : "1em",
								}}
							>
								{" "}
								Sign Up{" "}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						align={matchesXS ? "center" : matchesMD ? "center" : "right"}
					>
						<Typography
							variant="h2"
							style={{
								color: "#fff",
								fontSize: matchesXS ? "2rem" : undefined,
							}}
						>
							Are you <br />
							ready to be the <br />
							<Typography
								variant="h1"
								style={{
									color: "#fff",

									fontSize: matchesXS ? "2em" : "5rem",
								}}
							>
								{" "}
								<span>Conduit of Goodwill?</span>{" "}
							</Typography>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container md={4}>
				<Grid container direction="column">
					<Grid
						item
						align="center"
						style={{
							padding: "2em",
							paddingTop: "3em",

							background: "#F8E7EE",
							marginTop: matchesXS ? "-15em" : "-10em",
						}}
					>
						<VenorSignupForm />
						<Button variant="contained" component={Link} to="/vendorprofile">
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
