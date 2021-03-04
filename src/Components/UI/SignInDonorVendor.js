import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import hand from "../../assets/hand.png";
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

	callToAction: {
		backgroundImage: "linear-gradient(#6ACBE1, #6ACBE1)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: "linear-gradient(#6ACBE1, #6ACBE1)",
		},
	},
	estimateBtn: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 50,
		width: 205,
		backgroundColor: "#3E3B6B",
		cursor: "pointer",
		boxShadow: "1px 1px 5px rgba(0,0,0, 15)",
		fontSize: "1.5rem",

		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	estimateBtn2: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 50,
		cursor: "pointer",
		boxShadow: "1px 1px 5px rgba(0,0,0, 15)",
		width: 205,
		backgroundColor: "#CE338C",
		fontSize: "1.5rem",

		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function CallToAction(props) {
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
			<Grid item container md={2} style={{ marginLeft: "2em" }}>
				<Hidden mdDown>
					<Grid container direction="column">
						<Grid item>
							<img src={hand} alt="hand-one" style={{ maxHeight: "22em" }} />
						</Grid>
					</Grid>
				</Hidden>
			</Grid>
			<Grid
				item
				container
				md={4}
				style={{
					marginLeft: "1em",
					paddingBottom: matchesXS ? 0 : matchesSM ? 0 : "20em",
				}}
			>
				<Grid container direction="column">
					<Hidden mdDown>
						<Grid item>
							<Typography variant="h2" style={{ color: "#373435" }}>
								Hassle Free, Transparent, <br />
								Accountable giving that
							</Typography>
						</Grid>
					</Hidden>
					<Hidden mdDown>
						<Grid>
							<Typography style={{ color: "#373435" }}>
								<ul>
									<li>Empowers Individuals</li>
									<li>Strengthens communities</li>
									<li>Drive economic growth & prosperity</li>
								</ul>
							</Typography>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				item
				container
				md={4}
				style={{ marginRight: matchesXS ? "0.7em" : matchesSM ? "1em" : "5em" }}
			>
				<Grid container direction="column">
					<Grid
						item
						align="center"
						style={{
							paddingBottom: matchesXS ? 0 : matchesSM ? 0 : "30em",
							marginTop: matchesXS ? "-45em" : matchesSM ? 0 : undefined,
						}}
					>
						<Typography variant="h2" style={{ color: "#373435" }}>
							Choose your <br /> Sign In <br /> identity
						</Typography>
						<Grid>
							<Button
								component={Link}
								to="/donorsignin"
								variant="contained"
								style={{ marginBottom: "2em", marginTop: "4em" }}
								className={classes.estimateBtn}
							>
								{" "}
								DONOR
							</Button>
						</Grid>
						<Grid>
							<Button
								variant="contained"
								component={Link}
								to="/vendorsignin"
								className={classes.estimateBtn2}
							>
								{" "}
								VENDOR
							</Button>{" "}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
