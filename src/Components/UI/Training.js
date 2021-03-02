import React from "react";

import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import react from "../../assets/svgs/react-js.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";

import programmer from "../../assets/svgs/programmer.svg";

import js from "../../assets/svgs/javascript.svg";
import firstmedal from "../../assets/svgs/first-medal.svg";
import materialui from "../../assets/svgs/material-ui.svg";

import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
	mainContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		paddingTop: "2em",
		paddingBottom: "10em",
	},
	itemSpacer: {
		maxWidth: "40em",
	},
}));

export default function Training(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid container direction="column" className={classes.mainContainer}>
			<Grid
				item
				direction="row"
				container
				className={classes.rowContainer}
				style={{ marginTop: matchesXS ? "1em" : "2em" }}
				alignItems={matchesMD ? "center" : undefined}
				justify={matchesMD ? "center" : undefined}
			>
				<Hidden mdDown>
					<Grid
						item
						className={classes.arrowContainer}
						style={{ marginRight: "1em", marginLeft: "-3.5em" }}
					>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							to="/services"
							onClick={() => props.setSelectedIndex(0)}
						>
							<img src={backArrow} alt="Back To Services " />
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography align={matchesMD ? "center" : undefined} variant="h2">
							Training
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Welcome to our training section where you would see the training
							services we render.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Our Training service extends to several organizations such as
							governments agencies/ministries, educational instituitions, ICT
							centers, start-ups and estblishments that require technology.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Our custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							We create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							to="/mobileapps"
							onClick={() => props.setSelectedIndex(2)}
						>
							<img src={forwardArrow} alt="Forward to iOS/Android Section" />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid
				item
				container
				direction="row"
				justify="center"
				style={{ marginTop: "15em", marginBottom: "20em" }}
			>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography
							alignItems={matchesMD ? "center" : undefined}
							variant="h4"
						>
							Algorithms
						</Typography>
					</Grid>
					<Grid item>
						<img src={lightbulb} alt="lightbulb" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{
						maxWidth: "40em",
						marginTop: matchesSM ? "10em" : 0,
						marginBottom: matchesSM ? "10em" : 0,
					}}
				>
					<Grid item>
						<Typography variant="h4">Efficiency</Typography>
					</Grid>
					<Grid item>
						<img src={stopwatch} alt="Time" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography variant="h4">SaaS</Typography>
					</Grid>
					<Grid item>
						<img src={cash} alt="Money" />
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				alignItems={matchesMD ? "center" : undefined}
				direction={matchesMD ? "column" : "row"}
				justify="space-around"
			>
				<Grid
					item
					container
					direction={matchesMD ? "column" : "row"}
					md
					className={classes.itemSpacer}
				>
					<Grid
						item
						container
						direction="column"
						style={{ marginBottom: matchesSM ? "5em" : 0 }}
					>
						<Grid item>
							<Typography variant="h4">Learn Javascript</Typography>
						</Grid>
						<Typography paragraph variant="body1">
							{" "}
							Master JavaScript. Change the World.
						</Typography>
						<Typography paragraph variant="body1">
							{" "}
							JavaScript is known as the language of the web. This is because it
							is the most powerful language for building websites. Node JS which
							is a powerful server side framework uses Javascript for its
							applications. React JS which is the most powerful client-side /
							Front end framework for building excellent UI is also powered by
							JavaScript. <br />
							What are you
						</Typography>
						<Typography paragraph variant="body1">
							{" "}
							By utilizing digital forms and documents you can remove these
							obsolete expenses, accelerate your communication, and help the
							Earth.
						</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<img src={js} alt="Javascript" />
				</Grid>
				<Grid item md style={{ marginLeft: "2em" }}>
					<img src={react} alt="react" />
				</Grid>
				<Grid item container md style={{ maxWidth: "40em" }}>
					<Grid item container direction="column">
						<Grid item>
							<Typography align="right" variant="h4">
								Be a React Expert
							</Typography>
						</Grid>
						<Typography align="right" paragraph variant="body1">
							{" "}
							Whether you’re a large brand, just getting started, or taking off
							right now, our application architecture ensures pain-free growth
							and reliability.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				md
				item
				container
				align="center"
				direction="row"
				style={{ marginTop: "20em", marginBottom: "20em" }}
			>
				<Grid item container direction="column" alignItems="center">
					<Grid item md align="center">
						<img
							src={materialui}
							alt="Material-Ui"
							height="450em"
							width="450em"
						/>
					</Grid>
					<Grid item container alignItems="center" style={{ maxWidth: "40em" }}>
						<Grid item align="center">
							<Typography align="center" variant="h4" gutterBottom>
								Master Material - UI
							</Typography>
						</Grid>
						<Typography align="center" variant="body1" paragraph>
							Many problems are merely symptoms of larger, underlying issues.
						</Typography>
						<Typography align="center" variant="body1" paragraph>
							We can help you thoroughly examine all areas of your business to
							develop a holistic plan for the most effective implementation of
							technology.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				alignItems={matchesMD ? "center" : undefined}
				style={{ marginBottom: "10em" }}
				direction={matchesMD ? "column" : "row"}
				justify="space-around"
			>
				<Grid item container md className={classes.itemSpacer}>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? "center" : "left"}>
								Become a world-class developer
							</Typography>
						</Grid>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							Why waste time when you don’t have to?
						</Typography>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							We can help you identify processes with time or event based
							actions which can now easily be automated.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							Increasing efficiency increases profits, leaving you more time to
							focus on your business, not busywork
						</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<img src={programmer} alt="programmer" style={{ maxWidth: "15em" }} />
				</Grid>
				<Grid
					item
					md
					style={{ maxWidth: matchesMD ? "3em" : "11em", maxHeight: "1em" }}
				>
					<img
						alt="best"
						src={firstmedal}
						style={{ maxWidth: "20em", maxHeight: "40em" }}
					/>
				</Grid>
				<Grid item container md style={{ maxWidth: "40em" }}>
					<Grid item container direction="column">
						<Grid item>
							<Typography align={matchesMD ? "center" : "right"} variant="h4">
								From Zero to Hero
							</Typography>
						</Grid>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							A good design that isn’t usable isn’t a good design.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							So why are so many pieces of software complicated, confusing, and
							frustrating?
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							By prioritizing users and the real ways they interact with
							technology we’re able to develop unique, personable experiences
							that solve problems rather than create new ones.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
