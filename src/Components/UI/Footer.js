import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import playstore from "../../assets/playstore.png";
import whatsapp from "../../assets/whatsapp.png";
import appstore from "../../assets/appstore.png";
import websitee from "../../assets/websitee.jpg";
import mail from "../../assets/mail.png";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { CURRENT_YEAR } from "../UI/config";
import poweredby from "../../assets/poweredby.png";
import phone_end from "../../assets/phone_end.png";
const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.orange,
		width: "100%",
		zIndex: 1302,
		position: "relative",
	},

	image: {
		minWidth: "15em",
		maxHeight: "28em",
		paddingTop: "2em",
		margin: "2em",
	},

	playstore: {
		maxWidth: "22em",
		maxHeight: "28em",
		paddingTop: "1em",
		margin: "-2em",
	},

	appstore: {
		maxWidth: "22em",
		maxHeight: "28em",
		paddingTop: "1em",
		margin: "2em",
	},

	mainContainer: {
		position: "absolute",
	},
	link: {
		color: "white",
		fontFamily: "Gotham",
		fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
			borderRadius: "3rem",
		},
	},
	icon: {
		height: "4em",
		color: "black",
		width: "4em",
		[theme.breakpoints.down("xs")]: {
			height: "2.5em",
			width: "2.5em",
		},
	},
	socialContainer: {
		position: "absolute",
		marginTop: "-6em",
		right: "1.5em",
		[theme.breakpoints.down("xs")]: {
			right: "0.6em",
		},
	},
}));

export default function Footer(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container className={classes.mainContainer}>
					<Grid
						item
						container
						md={8}
						style={{
							paddingRight: "6em",
							paddingLeft: "3em",
							paddingTop: "3em",
						}}
					>
						<Grid container direction="row" spacing={2}>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/"
								onClick={() => props.setValue(0)}
							>
								<Typography> HOME | </Typography>
							</Grid>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/about-us"
								onClick={() => props.setValue(0)}
							>
								<Typography>ABOUT US | </Typography>
							</Grid>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/why-voucha"
								onClick={() => props.setValue(0)}
							>
								<Typography>WHY VOUCHA | </Typography>
							</Grid>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/howItWorks1"
								onClick={() => props.setValue(0)}
							>
								<Typography>HOW IT WORKS |</Typography>
							</Grid>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/faq"
								onClick={() => props.setValue(0)}
							>
								<Typography>FAQ |</Typography>
							</Grid>
							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/"
								onClick={() => props.setValue(0)}
							>
								<Typography> HELP DESK |</Typography>
							</Grid>

							<Grid
								style={{ color: "#000", fontSize: "0.7rem" }}
								item
								className={classes.link}
								component={Link}
								to="/"
								onClick={() => props.setValue(0)}
							>
								<Typography> TERM OF SERVICE </Typography>
							</Grid>
						</Grid>
						<Grid item container direction="row">
							<Grid item>
								<img className={classes.image} alt="mobilee" src={phone_end} />
							</Grid>
							<Grid item>
								<Grid item>
									<Typography
										variant="h5"
										style={{
											marginTop: matchesLG ? "-20em" : "4em",
											marginLeft: matchesLG ? "20em" : "10em",
											color: "#000",
											fontWeight: 900,
											fontSize: "1.5em",
										}}
									>
										Download the <br />
										Mobile App for <br />
										iOS and Android.
									</Typography>
								</Grid>
								<Grid>
									<img
										alt="appstore"
										className={classes.appstore}
										style={{
											height: "5em",
											marginLeft: matchesLG ? "24em" : "13em",
										}}
										src={appstore}
									/>
								</Grid>
								<Grid>
									<img
										alt="playstore"
										className={classes.playstore}
										style={{
											height: "5em",
											marginLeft: matchesLG ? "24em" : "13em",
										}}
										src={playstore}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item container md={4} direction="row">
						<Grid
							item
							container
							direction="column"
							style={{ paddingTop: "1em" }}
						>
							<Grid>
								<img
									alt="imag of sociocap"
									style={{ maxHeight: "4.2em", minWidth: "17em" }}
									src={poweredby}
								/>
							</Grid>
							<Grid item style={{ marginTop: "5em" }}>
								<Typography variant="h3" style={{ color: "black" }}>
									Contacts
								</Typography>
							</Grid>

							<Grid item container style={{ paddingTop: "2em" }}>
								<Grid>
									<img
										alt="imag of whatsapp"
										style={{ height: "3em", width: "3em" }}
										src={whatsapp}
									/>
								</Grid>
								<Grid>
									<Typography style={{ color: "black", padding: "0.5em" }}>
										+234 (0) 708 6810 000
									</Typography>
								</Grid>
							</Grid>
							<Grid item container style={{ paddingTop: "2em" }}>
								<Grid>
									<img
										alt="imag of sociocapital"
										style={{ height: "3em", width: "3em" }}
										src={mail}
									/>
								</Grid>
								<Grid>
									<Typography style={{ color: "black", padding: "0.5em" }}>
										info@myvoucha.org
									</Typography>
								</Grid>
							</Grid>
							<Grid item container style={{ paddingTop: "2em" }}>
								<Grid>
									<img
										alt="internet"
										style={{ height: "3em", width: "3em" }}
										src={websitee}
									/>
								</Grid>
								<Grid>
									<Typography style={{ color: "black", padding: "0.5em" }}>
										myvoucha.org
									</Typography>
								</Grid>
							</Grid>
							<Grid>
								<Grid
									style={{
										width: "12em",
										borderRadius: "2em",
										backgroundColor: "#000",
										height: "1.8em",
									}}
								>
									jdjdjdjdjdjkdsjkdkjjkk
								</Grid>
							</Grid>

							<Grid item>
								<Typography style={{ color: "black", padding: "0.5em" }}>
									c {CURRENT_YEAR}. voucha
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
		</footer>
	);
}

/**<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container className={classes.mainContainer} justify="center">
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/"
								onClick={() => props.setValue(0)}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(0);
								}}
								component={Link}
								to="/services"
							>
								Services
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/customsoftware"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
							>
								Custom Software Development
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
								to="/mobileapps"
							>
								iOS/ Android App Development
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
								to="/websitedevelopment"
							>
								Website Development
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(4);
								}}
								to="/gis"
							>
								Geographic Information System Consultancy
							</Grid>{" "}
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								to="/theRevolution"
							>
								The Revolution
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								to="/theRevolution"
							>
								Vision
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								to="/theRevolution"
							>
								Technology
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/theRevolution"
								onClick={() => props.setValue(2)}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/about-us"
								onClick={() => props.setValue(3)}
							>
								About Us
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/about-us"
								onClick={() => props.setValue(3)}
							>
								History
							</Grid>
							<Grid
								item
								className={classes.link}
								component={Link}
								to="/about-us"
								onClick={() => props.setValue(3)}
							>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(4)}
								to="/contact-us"
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt="footer adornment decoration"
				className={classes.adornment}
				src={FooterAdornment}
			/>
			<Grid
				container
				justify="flex-end"
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid
					item
					component={"a"}
					href="https://facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="facebook link" src={facebook} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="twitter link" src={twitter} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="instagram link" src={instagram} className={classes.icon} />
				</Grid>
			</Grid>
		</footer> */
