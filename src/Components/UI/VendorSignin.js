import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VendorSignUp from "../../assets/vendorSignup.png";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VenorSigninForm from "../UI/VendorSigninForm";
import "./App.module.css";
import Hidden from "@material-ui/core/Hidden";

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
			backgroundImage: `url(${VendorSignUp})`,
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
		height: "50em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${VendorSignUp})`,
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
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
				style={{ marginLeft: "5em", paddingBottom: "20em" }}
			>
				<Grid container direction="column">
					<Grid
						item
						container
						style={{
							marginBottom: "6em",
							marginTop: matchesSM ? "2em" : undefined,
						}}
					>
						<Grid item>
							<Typography variant="h2" style={{ color: "#fff" }}>
								{" "}
								Vendor
							</Typography>
						</Grid>
						<Grid>
							<Typography
								variant="h2"
								style={{ color: "#fff", marginLeft: "1em" }}
							>
								{" "}
								Sign In{" "}
							</Typography>
						</Grid>
					</Grid>
					<Hidden smDown>
						<Grid item align="right">
							<Typography variant="h2" style={{ color: "#fff" }}>
								Are you <br />
								ready to be the <br />
								<Typography
									variant="h1"
									style={{ color: "#fff", fontSize: "5rem" }}
								>
									{" "}
									<span>Conduit of Goodwill?</span>{" "}
								</Typography>
							</Typography>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Grid item container md={4}>
				<Grid container direction="column">
					<Grid
						item
						align="center"
						style={{
							padding: "1em",
							background: "#F8E7EE",
							paddingTop: "5em",
							marginTop: matchesXS ? "-22em" : undefined,
						}}
					>
						<VenorSigninForm />
						<Button variant="contained" component={Link} to="/vendorprofile">
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
