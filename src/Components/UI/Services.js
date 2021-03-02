import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./061 ButtonArrow";
import { useMediaQuery } from "@material-ui/core";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
	specialText: {
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	subtitle: {
		marginBottom: "1em",
	},
	icon: {
		marginLeft: "2em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: "10em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
	},
}));

export default function Services(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid container direction="column">
			<Grid item style={{ marginLeft: matchesSM ? 0 : "5em" }}>
				<Typography
					align={matchesSM ? "center" : undefined}
					gutterBottom
					variant="h2"
				>
					Services
				</Typography>
			</Grid>
			<Grid item>
				<Grid
					container
					justify={matchesSM ? "center" : "flex-end"}
					direction="row"
					style={{ marginTop: matchesSM ? "1em" : "5em" }}
					className={classes.serviceContainer}
				>
					<Grid
						item
						style={{
							textAlign: matchesSM ? "center" : undefined,
							width: matchesSM ? undefined : "35em",
						}}
					>
						<Typography variant="h4">iOS/ Android App Development</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Extend Functionality. Extend Access. Increase Engagement.
						</Typography>
						<Typography variant="subtitle1">
							Increase Your Web Experience or Create A Standalone App
							{matchesSM ? null : <br />} With Either Mobile Platform.
						</Typography>
						<Button
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(2);
							}}
							component={Link}
							to="/mobileapps"
							variant="outlined"
							className={classes.learnButton}
						>
							<span style={{ marginRight: 10 }}> Learn More</span>
							<ButtonArrow
								height={15}
								width={15}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid
						item
						className={classes.icon}
						style={{ marginRight: matchesSM ? 0 : "5em" }}
					>
						<img src={mobileAppsIcon} alt="mobile phone icon" width="250em" />
					</Grid>
				</Grid>
				<Grid item>
					<Grid
						container
						justify={matchesSM ? "center" : undefined}
						direction="row"
						className={classes.serviceContainer}
					>
						<Grid
							item
							style={{
								marginLeft: matchesSM ? 0 : "5em",
								textAlign: matchesSM ? "center" : undefined,
							}}
						>
							<Typography variant="h4">Custom Software Development</Typography>
							<Typography variant="subtitle1" className={classes.subtitle}>
								Save Energy. Save Time. Save Money
							</Typography>
							<Typography variant="subtitle1">
								Complete Digital Solutions, from investigation to{" "}
								<span className={classes.specialText}> Celebration</span>
							</Typography>
							<Button
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
								component={Link}
								to="/customsoftware"
								variant="outlined"
								className={classes.learnButton}
							>
								<span style={{ marginRight: 10 }}> Learn More</span>
								<ButtonArrow
									height={15}
									width={15}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
						<Grid item className={classes.icon}>
							<img src={customSoftwareIcon} alt="custom Software Development" />
						</Grid>
					</Grid>
				</Grid>

				{/*-----Website Development-----*/}
				<Grid item>
					<Grid
						container
						justify={matchesSM ? "center" : "flex-end"}
						direction="row"
						style={{ marginBottom: "10em" }}
						className={classes.serviceContainer}
					>
						<Grid
							item
							style={{
								textAlign: matchesSM ? "center" : undefined,
								width: matchesSM ? undefined : "35em",
							}}
						>
							<Typography variant="h4">Website Development</Typography>
							<Typography variant="subtitle1" className={classes.subtitle}>
								Reach More. Discover More. Sell More.
							</Typography>
							<Typography variant="subtitle1">
								Optimized for Search Engines, built for
								<span className={classes.specialText}> Speed.</span>
							</Typography>
							<Button
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
								component={Link}
								to="/websitedevelopment"
								variant="outlined"
								className={classes.learnButton}
							>
								<span style={{ marginRight: 10 }}> Learn More</span>
								<ButtonArrow
									height={10}
									width={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
						<Grid
							item
							style={{ marginRight: matchesSM ? 0 : "5em" }}
							className={classes.icon}
						>
							<img src={websiteIcon} alt="Website Development" width="250em" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
