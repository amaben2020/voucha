import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import VendorSignUp from "../../assets/vendorSignup.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import yellow_flower1 from "../../assets/yellow_flower1.PNG";
import yellow_flower2 from "../../assets/yellow_flower2.PNG";
import "./App.module.css";
import Hidden from "@material-ui/core/Hidden";
import DonorSigninForm from "./DonorSigninForm";

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
		background: "linear-gradient(#ffa500,#ffa500)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "50em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			background: "linear-gradient(#ffa500,#ffa500)",
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

export default function UserSignIn({ props, setName }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid
			container
			direction={matchesXS ? "row" : matchesSM ? "row" : undefined}
			alignItems="center"
			className={classes.callToAction}
			justify="space-between"
		>
			<Grid
				item
				container
				lg
				style={{
					marginTop: matchesXS ? "1em" : matchesMD ? "5em" : undefined,
				}}
			>
				<img
					alt="yellow flower"
					src={yellow_flower1}
					style={{ maxWidth: matchesXS ? "5em" : "15em", marginLeft: "2em" }}
				/>
				<img
					alt="second yellow flower"
					src={yellow_flower2}
					style={{ maxWidth: matchesXS ? "5em" : "15em", marginLeft: "2em" }}
				/>
			</Grid>
			<Grid item container lg>
				<Grid>
					<Typography
						variant="h2"
						style={{
							color: "#fff",
							marginLeft: matchesXS ? "1em" : "8em",
							marginTop: matchesXS ? "0.5em" : matchesSM ? "2em" : "-4em",
						}}
					>
						{" "}
						<span style={{ fontSize: "4rem" }}> Donor </span> Sign In{" "}
					</Typography>
				</Grid>
				<Hidden smDown>
					<Typography
						variant="h1"
						style={{
							color: "#fff",
							fontSize: matchesXS ? "1rem" : "3rem",
							marginLeft: matchesXS ? "8em" : matchesMD ? "6em" : undefined,
							marginTop: matchesXS ? "-39em" : matchesMD ? "2em" : undefined,
						}}
					>
						Ready to be a <br />
						<br />
						<Typography
							variant="h1"
							style={{
								color: "#fff",
								fontSize: matchesXS ? "2.3rem" : "7rem",
								marginLeft: matchesXS ? "0.1em" : undefined,
							}}
						>
							{" "}
							<span>
								Change
								{matchesXS ? <br /> : undefined}
								Maker?
							</span>{" "}
						</Typography>
					</Typography>
				</Hidden>
			</Grid>
			<Grid
				item
				container
				lg
				direction="column"
				style={{
					paddingTop: "11em",
					background: matchesXS ? undefined : "#ffff99",
					marginRight: matchesXS ? "20em" : undefined,
				}}
			>
				<DonorSigninForm setName={setName} />
			</Grid>{" "}
		</Grid>
	);
}
