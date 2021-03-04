import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MainSignupForm from "../UI/MainSignupForm";
import hand from "../../assets/hand.png";

const useStyles = makeStyles((theme) => ({
	callToAction: {
		backgroundImage: "linear-gradient(#6ACBE1, #6ACBE1)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			background: "linear-gradient(#6ACBE1, #6ACBE1)",
			height: "60em",
		},
		[theme.breakpoints.down("xs")]: {
			background: "linear-gradient(#6ACBE1, #6ACBE1)",
			height: "60em",
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

export default function CallToAction(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Grid
			container
			alignItems="center"
			className={classes.callToAction}
			justify="space-between"
		>
			<Grid item container md={2} style={{ marginLeft: "2em" }}>
				<Grid container direction="column">
					<Hidden mdDown>
						<Grid item>
							<img
								alt="hand of person"
								src={hand}
								style={{ maxHeight: "25em" }}
							/>
						</Grid>{" "}
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				item
				container
				md={4}
				style={{ marginLeft: "2em", paddingBottom: "20em" }}
			>
				<Grid container direction="column">
					<Hidden mdDown>
						<Grid item>
							<Typography variant="h2" style={{ color: "#373435" }}>
								Hassle Free, Transparent, <br />
								Accountable giving that
							</Typography>
						</Grid>{" "}
					</Hidden>
					<Grid>
						<Hidden mdDown>
							<Typography style={{ color: "#373435" }}>
								<ul>
									<li>Empowers Individuals</li>
									<li>Strengthens communities</li>
									<li>Drive economic growth & prosperity</li>
								</ul>
							</Typography>
						</Hidden>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container md={4} style={{ marginRight: "5em" }}>
				<Grid container direction="column">
					<Grid
						item
						align="center"
						style={{
							paddingBottom: matchesXS ? "10em" : matchesMD ? "20em" : "30em",
						}}
					>
						<Typography
							variant="h2"
							style={{
								color: "#373435",
								marginTop: matchesXS
									? "-17em"
									: matchesSM
									? "-5em"
									: matchesMD
									? "-5em"
									: undefined,
								paddingBottom: matchesXS ? "4em" : undefined,
							}}
						>
							SIGN UP
						</Typography>

						<Grid
							style={{
								marginLeft: matchesXS
									? "2.5em"
									: matchesSM
									? "5em"
									: matchesMD
									? "15em"
									: undefined,
								marginTop: matchesXS ? "-10em" : undefined,
							}}
						>
							<MainSignupForm />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
