import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import low from "../../assets/low.png";
import safe from "../../assets/safe.png";
import valuebased from "../../assets/valuebased.png";
import socialimpact from "../../assets/social_impact.png";
import overhead from "../../assets/lowoverhead.png";
import anonymous from "../../assets/anonymous.png";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import background from "../../assets/background.jpg";
import Vouchaimg from "../../assets/Vouchaimg.png";
import cardbg from "../../assets/cardsbg.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";

const useStyles = makeStyles((theme) => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em",
		},
	},

	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 55,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	buttonContainer: {
		marginTop: "1em",
	},
	learnButtonHero: {
		...theme.typography.learnButton,
		fontSize: "0.9rem",
		height: 45,
		width: 145,
	},
	mainContainer: {
		//i removed marginTop of 5em
		[theme.breakpoints.down("md")]: {
			marginTop: 0,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
		},
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",

		[theme.breakpoints.down("xs")]: {
			marginTop: "0",
		},
	},
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
		marginTop: "12em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
	},
	revolutionBackground: {
		backgroundImage: `url(${revolutionBackground})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	kids: {
		backgroundImage: `url(${cardbg})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	about1: {
		backgroundImage: `url(${about1})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	kid: {
		background: "linear-gradient(#e66465, #9198e5)",

		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	gradient1: {
		background: "linear-gradient(#e66465, #9198e5)",

		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},

	volutionBackground: {
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	revolutionCard: {
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "10em",
	},
	about2: {
		backgroundImage: `url(${about2})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	landingg: {
		backgroundImage: `url(${Vouchaimg})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
}));

const WhyVoucha = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXL = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Grid
			item
			container
			style={{
				height: matchesSM ? "120em" : matchesMD ? "80em" : "60em",
				minWidth: matchesXS ? "33.5em" : undefined,
			}}
			className={classes.kids}
		>
			<Grid
				item
				container
				direction="column"
				style={{
					marginLeft: matchesXS
						? "4em"
						: matchesSM
						? "6em"
						: matchesMD
						? "6em"
						: undefined,
				}}
			>
				<Grid
					item
					style={{
						marginLeft: "7em",
						marginRight: "3em",
						marginTop: matchesSM ? "1em" : "1.9em",
						paddingTop: matchesXL ? "7em" : undefined,
					}}
				>
					<Typography
						style={{
							marginRight: matchesXS ? "1.5em" : undefined,
						}}
						variant="h2"
					>
						Why Voucha?{" "}
					</Typography>
				</Grid>
				<Grid item container>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? "0.4em" : "7em",
							marginTop: "1em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",
								bottom: 0,
								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="low sign 3"
									src={low}
									style={{ maxWidth: "20em", maxHeight: "20em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "1em" }}>
									<Typography
										variant="h5"
										style={{ color: "white" }}
										gutterBottom
									>
										You can send multiple vouchers of whatever amount and
										volume, to countless number of recipient at one click
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? "1em" : "3em",
							marginTop: "1em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",
								bottom: 0,

								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="social impact"
									src={socialimpact}
									style={{ maxWidth: "20em", height: "3.9em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "0.2em" }}>
									<Typography
										variant="h5"
										style={{ color: "white" }}
										gutterBottom
									>
										We are a conduit for social impact by helping you empower
										communities with the flexibility to meet their specific need
										in a replicable and scalable manner
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? "1em" : "3em",
							marginTop: "1em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",
								bottom: 0,

								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="value based"
									src={valuebased}
									style={{ width: "20em", height: "3em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "1em" }}>
									<Typography
										variant="h5"
										style={{ color: "white" }}
										gutterBottom
									>
										We apply a value-driven approach that puts the individuals
										and communities at the center and you in charge
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid item container>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? "1em" : "7em",
							marginTop: "3em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",

								bottom: 0,

								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="overhead 2"
									src={overhead}
									style={{ maxWidth: "20em", maxHeight: "20em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "1em" }}>
									<Typography
										variant="h5"
										style={{ color: "white" }}
										gutterBottom
									>
										We save you the stress and hassle in exchange for a small
										fee, while all your funds reach target beneficiaries as
										intended
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? "1em" : "3em",
							marginTop: "3em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",

								bottom: 0,

								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="safe"
									src={safe}
									style={{ maxWidth: "20em", height: "4.2em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "1em" }}>
									<Typography
										variant="h5"
										style={{ color: "white" }}
										gutterBottom
									>
										We remove the guess work in philanthropy and put you in
										control. You can be sure that your funds go towards the
										specific cause intended
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>

					<Grid
						item
						style={{
							marginLeft: matchesMD ? "1em" : "3em",
							marginTop: "3em",
						}}
					>
						<Card
							style={{
								maxWidth: "20em",

								bottom: 0,

								background: "rgba(0, 0, 0, 0.1)",
								color: "white",
								width: "100%",
							}}
						>
							<Grid item>
								<img
									alt="anonymous"
									src={anonymous}
									style={{ maxWidth: "20em", height: "4.2em" }}
								/>
							</Grid>
							<Grid>
								<Grid align="center" style={{ padding: "1em" }}>
									<Typography
										variant="h5"
										style={{ paddingBottom: "1.5em", color: "white" }}
										gutterBottom
									>
										We've got you covered, whether you choose to give
										anonymously or generate customized vouchers
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WhyVoucha;
