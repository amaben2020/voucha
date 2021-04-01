import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../../assets/backArrow.svg";
import Hidden from "@material-ui/core/Hidden";
import happykids from "../../assets/happykids.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import mobile from "../../assets/Howitworksp4.png";

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
		background: "linear-gradient(#333399,#e66465, #9198e5, #333399 )",

		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
		flexWrap: "nowrap",
	},
}));

export default function HowItWorks5(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Grid
			item
			container
			direction="row"
			className={classes.kid}
			style={{
				height: matchesXS
					? "50em"
					: matchesSM
					? "58em"
					: matchesMD
					? "45em"
					: "48em",
			}}
		>
			<Grid item container direction="row">
				<Grid item container>
					<Grid item>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{ backgroundColor: "transparent", marginTop: "8em" }}
								component={Link}
								to="/howitworks4"
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
										? "-25em"
										: matchesSM
										? "-15em"
										: matchesMD
										? "1em"
										: "4em",
									marginLeft: "1em",
								}}
							>
								<Typography style={{ marginLeft: "2em" }} variant="h2">
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
									</Grid>{" "}
								</Hidden>
								<Hidden mdDown>
									<Grid item style={{ marginLeft: "1em", marginTop: "3em" }}>
										<Typography style={{ padding: "1em" }} variant="h5">
											Step2
										</Typography>
										<Card
											style={{
												maxWidth: "7em",
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
									</Grid>{" "}
								</Hidden>
								<Hidden mdDown>
									<Grid item style={{ marginLeft: "1em", marginTop: "3em" }}>
										<Typography style={{ padding: "1em" }} variant="h5">
											Step3
										</Typography>
										<Card
											style={{
												maxWidth: "7em",
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
														Fund your customized wallet
													</Typography>
												</Grid>
											</Grid>
										</Card>
									</Grid>
								</Hidden>
								<Hidden mdDown>
									<Grid item style={{ marginLeft: "0.2em", marginTop: "3em" }}>
										<Typography style={{ padding: "1em" }} variant="h5">
											Step4
										</Typography>
										<Card
											style={{
												maxWidth: "7em",
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
												title="Fund Wallet"
											/>
											<Grid>
												<Grid align="center" style={{ padding: "0.5em" }}>
													<Typography variant="h6" gutterBottom>
														Select the voucher category amount and units to
														distribute
													</Typography>
												</Grid>
											</Grid>
										</Card>
									</Grid>
								</Hidden>
							</Grid>
						</Grid>
					</Grid>
					<Grid item container direction="column" md={1}>
						<Grid
							item
							style={{
								marginRight: matchesSM ? "4em" : matchesMD ? "5em" : "1em",
								marginTop: matchesXS ? "-32em" : matchesSM ? "-34em" : "2em",
								marginLeft: matchesXS ? "13em" : matchesSM ? "25em" : "-3em",
								paddingRight: matchesSM ? "2em" : "-5em",
							}}
						>
							<img
								src={mobile}
								style={{
									height: matchesXS ? "25em" : matchesSM ? "32em" : "35em",
									maxWidth: matchesXS ? "10em" : matchesSM ? "19em" : "20em",
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				style={{
					marginLeft: matchesXS ? "2em" : matchesMD ? "5em" : "-4em",
					marginTop: matchesSM ? "-1em" : matchesMD ? "0.5em" : "9em",
				}}
			>
				<Typography
					style={{ padding: "1em", marginLeft: "0.3em" }}
					variant="h5"
				>
					Step5
				</Typography>
				<Card
					style={{
						//minHeight: matchesXS ? "5em" : "5em",
						maxHeight: matchesXS ? "16em" : undefined,
						maxWidth: matchesXS ? "10em" : matchesLG ? "10em" : undefined,
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
							width: "90%",
							textAlign: matchesXS ? undefined : "center",
							fontSize: 800,
						}}
						title="DISTRIBUTE VOUCHERS"
					/>
					<Grid>
						<Grid align="center" style={{ padding: "1em" }}>
							<Typography
								style={{ fontSize: matchesXS ? "1rem" : undefined }}
								variant="h5"
								color="#000"
								gutterBottom
							>
								Send your vouchers to individuals or groups
							</Typography>
							<Typography
								style={{
									paddingTop: "0.5em",
									fontSize: matchesXS ? "0.6rem" : undefined,
								}}
								variant="h6"
								color="black"
								gutterBottom
							>
								We can help to set up distribution to specific demography
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</Grid>
			<Hidden mdDown>
				<Grid container md={3} style={{ paddingLeft: "2em" }}>
					<Grid item style={{ marginTop: "2em" }}>
						<Typography variant="h4">
							Select an <span> OPTION. </span> <br />
							Key in your desired voucher value and <br />
							quantity then proceed.
						</Typography>
					</Grid>
				</Grid>
			</Hidden>
		</Grid>
	);
}
