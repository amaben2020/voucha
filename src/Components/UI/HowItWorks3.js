import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import Hidden from "@material-ui/core/Hidden";
import happykids from "../../assets/happykids.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import mobile from "../../assets/howitworksp3.png";

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
	kids: {
		backgroundImage: `url(${happykids})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
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
	mobile: {
		padding: "5em",
	},
	kid: {
		background: "linear-gradient(#333399,#e66465, #9198e5)",

		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
		flexWrap: "nowrap",
	},
}));

export default function HowItWorks3(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid
			item
			container
			direction="row"
			className={classes.kid}
			style={{ height: matchesXS ? " 45em" : matchesMD ? "58em" : "50em" }}
		>
			<Grid item container direction="row">
				<Grid item container>
					<Grid item>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{ backgroundColor: "transparent", marginTop: "8em" }}
								component={Link}
								to="/howitworks2"
								onClick={() => props.setSelectedIndex(0)}
							>
								<img
									src={backArrow}
									style={{ color: "orange" }}
									alt="Back To Services "
								/>
							</IconButton>
						</Grid>
					</Grid>

					<Grid container direction="row" md={8}>
						<Grid item container direction="column">
							<Grid
								item
								style={{
									marginTop: matchesXS
										? "-19em"
										: matchesSM
										? "-22em"
										: matchesMD
										? "2em"
										: "4em",
									marginLeft: "1em",
								}}
							>
								<Typography
									style={{
										marginLeft: matchesXS ? "1em" : matchesMD ? "5em" : "2em",
									}}
									variant="h2"
								>
									HOW IT WORKS
								</Typography>
							</Grid>{" "}
							<Grid item container style={{ marginTop: "3em" }}>
								<Hidden mdDown>
									<Grid item style={{ marginLeft: "1em", marginTop: "3em" }}>
										<Typography style={{ padding: "1em" }} variant="h5">
											Step1
										</Typography>
										<Card
											style={{
												maxWidth: "9em",
												maxHeight: "15em",
												marginLeft: "0.3em",
												bottom: 0,
												backgroundColor: "grey",
												color: "white",
												width: "100%",
											}}
										>
											<CardHeader
												style={{
													backgroundColor: "grey",
													color: "black",
													width: "100%",
													fontSize: 800,
												}}
												title="Create Account"
											/>
											<Grid>
												<Grid align="center" style={{ padding: "1em" }}>
													<Typography variant="h6" gutterBottom>
														Simply{" "}
														<Button
															component={Link}
															to="/signup"
															onClick={() => props.setValue(6)}
															variant="contained"
															color="secondary"
															component={Link}
															style={{ backgroundColor: "blue" }}
														>
															SIGN UP
														</Button>{" "}
														to create an account to get started
													</Typography>
												</Grid>
											</Grid>
										</Card>
									</Grid>
									<Grid item style={{ marginLeft: "1em", marginTop: "3em" }}>
										<Typography style={{ padding: "1em" }} variant="h5">
											Step2
										</Typography>
										<Card
											style={{
												maxWidth: "8em",
												minHeight: "15em",
												marginLeft: "0.1em",
												bottom: 0,
												backgroundColor: "grey",

												color: "white",
												width: "100%",
											}}
										>
											<CardHeader
												style={{
													backgroundColor: "grey",
													color: "black",
													width: "100%",
													fontSize: 800,
												}}
												title="Update Profile"
											/>
											<Grid>
												<Grid align="center" style={{ padding: "0.5em" }}>
													<Typography variant="h6" gutterBottom>
														Enter relevant details to fully setup your account
													</Typography>
												</Grid>
											</Grid>
										</Card>
									</Grid>
								</Hidden>
								<Grid
									item
									style={{
										marginLeft: matchesXS ? "1.2em" : matchesMD ? "5em" : "1em",
										marginTop: matchesXS ? "1em" : matchesSM ? "-1em" : "-3em",
									}}
								>
									<Typography
										style={{ padding: "1em", marginLeft: "1em" }}
										variant="h5"
									>
										Step3
									</Typography>
									<Card
										style={{
											minHeight: matchesXS
												? "7em"
												: matchesSM
												? "11em"
												: "25em",
											maxWidth: matchesXS
												? "7em"
												: matchesSM
												? "12em"
												: "11.1em",
											marginLeft: "1em",
											bottom: 0,
											backgroundColor: "grey",
											color: "white",
											width: "100%",
										}}
									>
										<CardHeader
											style={{
												backgroundColor: "grey",
												color: "black",
												width: "80%",
												fontSize: 800,
												textAlign: "center",
											}}
											title="FUND WALLET"
										/>
										<Grid>
											<Grid align="center" style={{ padding: "1em" }}>
												<Typography
													style={{
														paddingTop: matchesXS ? "0.5em" : "2em",
														fontSize: matchesXS ? "1rem" : undefined,
														color: "#000",
													}}
													variant="h4"
													gutterBottom
												>
													Fund your customized wallet
												</Typography>
											</Grid>
										</Grid>
									</Card>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item container direction="column" md={1}>
						<Grid
							item
							style={{
								marginRight: matchesXS ? undefined : "1em",
								marginTop: matchesXS
									? "-25em"
									: matchesSM
									? "-28em"
									: matchesMD
									? "1em"
									: "2em",
								marginLeft: matchesXS
									? "10em"
									: matchesSM
									? "20em"
									: matchesMD
									? "5.5em"
									: "-10em",
							}}
						>
							<img
								alt="mobile dev"
								src={mobile}
								style={{
									height: matchesXS ? "20em" : matchesSM ? "35em" : "35em",
									maxWidth: matchesSM ? "38em" : "20em",
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container md={3}>
				<Hidden mdDown>
					<Grid item style={{ marginTop: "3em" }}>
						<Typography variant="h4">
							We also provide end-to-end account management solutions on
							request.
						</Typography>
					</Grid>
				</Hidden>
				<Hidden mdDown>
					<Grid item style={{ marginLeft: "-10em", marginTop: "-20em" }}>
						<Typography style={{ padding: "1em" }} variant="h5">
							Step4
						</Typography>
						<Card
							style={{
								maxWidth: "10em",
								minHeight: "15em",
								marginLeft: "0.1em",
								bottom: 0,
								backgroundColor: "grey",
								color: "white",
								width: "100%",
							}}
						>
							<CardHeader
								style={{
									backgroundColor: "grey",
									color: "black",
									width: "100%",
									fontSize: 800,
								}}
								title="Buy Vouchers"
							/>
							<Grid>
								<Grid align="center" style={{ padding: "0.5em" }}>
									<Typography variant="h6" gutterBottom>
										Select the Voucher category, amount and units to disribute
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Hidden>
				<Hidden mdDown>
					<Grid item>
						<Grid item container style={{ marginTop: "-15em" }}>
							<Grid item>
								<Typography
									style={{ marginBottom: "1em", marginLeft: "2em" }}
									variant="h5"
								>
									Step5
								</Typography>
								<Card
									style={{
										maxWidth: "10em",
										minHeight: "13.6em",
										bottom: 0,
										backgroundColor: "grey",
										marginLeft: "1em",
										color: "white",
										width: "100%",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "100%",
											fontSize: 800,
										}}
										title="Distribute Vouchers"
									/>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												variant="h6"
												style={{ color: "black" }}
												gutterBottom
											>
												Send your vouchers to individuals or groups
											</Typography>
											<Typography
												variant="h6"
												style={{ color: "black", fontSize: "0.8rem" }}
											>
												We can help to set up distribution to specific
												demography
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			</Grid>

			<Grid item>
				<IconButton
					style={{ backgroundColor: "transparent", marginTop: "8em" }}
					component={Link}
					to="/howitworks4"
					onClick={() => props.setSelectedIndex(0)}
				>
					<img
						src={forwardArrow}
						style={{ color: "orange" }}
						alt="Back To Services "
					/>
				</IconButton>
			</Grid>
		</Grid>
	);
}
