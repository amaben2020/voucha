import React, { useEffect } from "react";
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
import Howitworksp3 from "../../assets/Howitworksp2.png";

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

export default function HowItWorks2(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Grid
			item
			container
			direction="row"
			className={classes.kid}
			style={{ height: matchesSM ? "59em" : matchesMD ? "58em" : " 48em" }}
		>
			<Grid item container direction="row">
				<Grid item container>
					<Grid item>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{ backgroundColor: "transparent", marginTop: "8em" }}
								component={Link}
								to="/howItWorks1"
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

					<Grid container direction="row" md={7}>
						<Grid item container direction="column">
							<Grid
								item
								style={{
									marginTop: matchesXS ? "-29em" : matchesSM ? "-18em" : "4em",
									marginLeft: "1em",
								}}
							>
								<Typography
									style={{
										marginLeft: matchesXS
											? "1.2em"
											: matchesSM
											? "1.5em"
											: "2em",
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
															style={{
																backgroundColor: "blue",
																borderRadius: "3em",
															}}
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
								<Grid
									item
									style={{
										marginLeft: matchesXS
											? "3em"
											: matchesSM
											? "4em"
											: matchesMD
											? "3em"
											: "1em",
										marginTop: matchesXS
											? "-2em"
											: matchesSM
											? "-6em"
											: matchesMD
											? "-5em"
											: "0.2em",
									}}
								>
									<Typography style={{ padding: "1em" }} variant="h5">
										Step2
									</Typography>
									<Card
										style={{
											maxWidth: matchesXS
												? "8em"
												: matchesLG
												? "15em"
												: matchesXL
												? "20em"
												: "7em",
											maxHeight: matchesXS
												? "15em"
												: matchesLG
												? "25em"
												: matchesXL
												? "25em"
												: "15em",
											marginLeft: "0.1em",
											height: matchesLG
												? "20em"
												: matchesXL
												? "25em"
												: undefined,
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
												textAlign: "center",
											}}
											title="UPDATE PROFILE"
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
							</Grid>
						</Grid>
					</Grid>
					<Grid item container direction="column" md={1}>
						<Grid
							item
							style={{
								marginRight: "1em",
								marginLeft: matchesXS
									? "11em"
									: matchesSM
									? "21em"
									: matchesMD
									? "15em"
									: undefined,
								marginTop: matchesXS
									? "-33em"
									: matchesSM
									? "-32em"
									: matchesMD
									? "5em"
									: "2em",
							}}
						>
							<img
								src={Howitworksp3}
								style={{
									height: matchesXS
										? "20em"
										: matchesSM
										? "28em"
										: matchesMD
										? "30em"
										: "35em",
									width: matchesXS
										? "9em"
										: matchesSM
										? "19em"
										: matchesMD
										? "15em"
										: undefined,
									maxWidth: "20em",
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Hidden mdDown>
				<Grid
					item
					style={{
						marginLeft: matchesLG ? "0.5em" : "3em",
						marginRight: matchesLG ? "0.5em" : "3em",
						marginTop: "6em",
					}}
				>
					<Typography style={{ padding: "1em" }} variant="h5">
						Step3
					</Typography>
					<Card
						style={{
							minHeight: "5em",
							maxWidth: matchesLG ? "10em" : "13em",
							marginLeft: "1em",
							bottom: 0,
							height: "15em",
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
								fontSize: 800,
							}}
							title="Fund Wallet"
						/>
						<Grid>
							<Grid align="center" style={{ padding: "1em" }}>
								<Typography
									style={{ paddingTop: "2em" }}
									variant="h6"
									color="white"
									gutterBottom
								>
									Fund your customized Wallet
								</Typography>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Hidden>
			<Grid container md={5}>
				<Hidden mdDown>
					<Grid item>
						<Grid item container style={{ marginTop: "7em" }}>
							<Grid item>
								<Typography
									style={{
										marginBottom: "1em",
										marginLeft: matchesLG ? "3em" : "5em",
									}}
									variant="h5"
								>
									Step 4
								</Typography>
								<Card
									style={{
										maxWidth: matchesLG ? "9em" : "12em",
										minHeight: "13.6em",
										bottom: 0,
										backgroundColor: "grey",
										color: "white",
										width: "100%",
										marginLeft: matchesLG ? "2em" : "5em",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "70%",
											fontSize: 800,
										}}
										title="Buy Vouchers"
									/>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												variant="h6"
												style={{ color: "black" }}
												gutterBottom
											>
												Select the voucher category amount and units to
												distribute
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
							<Grid item>
								<Typography
									style={{
										marginBottom: "1em",
										marginLeft: matchesLG ? "0.5em" : "2em",
									}}
									variant="h5"
								>
									Step5
								</Typography>
								<Card
									style={{
										maxWidth: matchesLG ? "8em" : "12em",
										marginLeft: "0.4em",
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
										}}
										title="Distribute Vouchers"
									/>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography variant="h6" color="white" gutterBottom>
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

							<Grid item style={{ marginTop: matchesLG ? "2em" : "5em" }}>
								<Typography variant="h4">
									We also provide end-to-end account management solutions on
									request.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			</Grid>

			<Grid item>
				<IconButton
					style={{
						backgroundColor: "transparent",
						marginTop: "8em",
						padding: matchesXS ? 0 : undefined,
					}}
					component={Link}
					to="/howitworks3"
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
