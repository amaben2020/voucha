import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import background from "../../assets/girl.jpg";
import mobileBackground from "../../assets/mobg.PNG";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import callToAction from "../../assets/callToAction.png";

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
		backgroundImage: `url(${background})`,
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
		backgroundImage: `url(${callToAction})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${mobileBackground})`,
		},
	},
	estimateBtn: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 80,
		width: 205,
		cursor: "pointer",
		boxShadow: "1px 1px 5px rgba(0,0.95,0, 0.95)",
		border: "1.65px solid #fff",
		backgroundColor: theme.palette.common.orange,
		fontSize: "1.5rem",
		marginRight: "5em",
		"&:hover": {
			backgroundColor: "#A21856",
			color: "#fff",
			border: "3.65px solid #fff",
			fontSize: "1.6rem",
			width: 210,
			height: 85,
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
			<Grid item style={{ marginLeft: matchesSM ? "3em" : "5em" }}>
				<Grid container direction="column">
					<Grid item>
						<Typography variant="h2">
							With <span style={{ fontSize: "1.4em" }}> Voucha </span> you can
							be <br />
						</Typography>
						<Typography
							variant="subtitle2"
							style={{
								fontSize: matchesSM ? "2rem" : "2.4rem",
								color: "white",
							}}
						>
							a <span style={{ fontSize: "1.4em" }}>SUPERHERO, </span>
							<span style={{ fontSize: "1.4em" }}>CHANGEMAKER </span> <br />
							and <span style={{ fontSize: "1.4em" }}>CATALYST </span> for good
							- all in one.
						</Typography>
						<Grid
							container
							item
							style={{ marginTop: matchesXS ? "1em" : "2em" }}
						>
							<Button
								onClick={() => props.setValue(6)}
								component={Link}
								to="/signup"
								variant="contained"
								className={classes.estimateBtn}
							>
								START NOW
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
