import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DonorSignupForm from "../UI/DonorSignupForm";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link, withRouter, Route, Redirect } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useAuth0 } from "@auth0/auth0-react";
import hand from "../../assets/hands.png";
import "./App.module.css";
import DonorDashboard from "./DonorDashboard";

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
		background: "linear-gradient(#e66465, #9198e5)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${mobileBackground})`,
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
		backgroundImage: "linear-gradient(#314B7F, #314B7F)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: "linear-gradient(#314B7F, #314B7F)",
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

function DonorSignUp({ props }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const { isAuthenticated } = useAuth0();

	return (
		<Grid
			container
			alignItems="center"
			className={classes.callToAction}
			justify="space-between"
		>
			<Grid
				item
				container
				md={2}
				style={{ marginLeft: "1.5em", paddingBottom: "20em" }}
			>
				<Grid container direction="column">
					<Grid item>
						<img
							alt="hand-three"
							src={hand}
							style={{
								maxHeight: matchesXS ? "10em" : "30em",
								maxWidth: matchesXS ? "20em" : undefined,
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				md={4}
				style={{ marginLeft: "2em", paddingBottom: "40em" }}
			>
				<Grid container direction="column">
					<Grid item>
						<Typography
							variant="h2"
							style={{
								color: "#fff",
								fontSize: matchesXS ? "1.7rem" : undefined,
							}}
						>
							Hassle Free, Transparent, <br />
							Accountable giving that
						</Typography>
					</Grid>
					<Grid>
						<Typography
							style={{
								color: "#fff",
								fontSize: matchesXS ? "1rem" : undefined,
							}}
						>
							<ul>
								<li>Empowers Individuals</li>
								<li>Strengthens communities</li>
								<li>Drive economic growth & prosperity</li>
							</ul>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container md={4} style={{ marginLeft: "-8em" }}>
				<Grid container direction="column">
					<Grid
						item
						align="center"
						style={{
							padding: "1em",
							background: "#EDF7F9",
							marginTop: matchesXS ? "-20em" : "-14em",
						}}
					>
						<DonorSignupForm />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default DonorSignUp;
