import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import roots from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data.json";
import uxAnimation from "../../animations/uxAnimation/data";
import Hidden from "@material-ui/core/Hidden";
import happykids from "../../assets/happykids.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import mobile from "../../assets/mobilee.png";

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
}));

export default function CustomSoftware(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const documentsOptions = {
		loop: true,
		autoplay: true,
		animationData: documentsAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const scaleOptions = {
		loop: true,
		autoplay: true,
		animationData: scaleAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const automationOptions = {
		loop: true,
		autoplay: true,
		animationData: automationAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const uxOptions = {
		loop: true,
		autoplay: true,
		animationData: uxAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid container direction="row" className={classes.kids}>
			<Grid container direction="row" className={classes.mainContainer}>
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
								style={{ backgroundColor: "transparent", marginTop: "8em" }}
								component={Link}
								to="/services"
								onClick={() => props.setSelectedIndex(0)}
							>
								<img src={backArrow} alt="Back To Services " />
							</IconButton>
						</Grid>
					</Hidden>
					<Grid item container direction="column" className={classes.heading}>
						<Grid item style={{ marginBottom: "5em" }}>
							<Typography align={matchesMD ? "center" : undefined} variant="h2">
								How it works
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								style={{ marginLeft: "3em" }}
								align={matchesMD ? "center" : undefined}
								variant="h4"
								paragraph
							>
								STEP 1
							</Typography>
							<Grid item container>
								<Grid
									item
									style={{
										marginLeft: matchesMD ? "1em" : "3em",
										marginTop: "3em",
									}}
								>
									<Card
										style={{
											maxWidth: "15em",

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
											<Grid align="center" style={{ padding: "2em" }}>
												<Typography variant="h5" color="white" gutterBottom>
													Simply{" "}
													<Button
														component={Link}
														to="/estimate"
														onClick={() => props.setValue(6)}
														variant="contained"
														color="secondary"
														component={Link}
														to="/estimate"
														style={{ backgroundColor: "blue" }}
													>
														SIGN UP
													</Button>{" "}
													to create an account to get started
												</Typography>
											</Grid>
										</Grid>
									</Card>
									<Grid
										item
										container
										direction="column"
										style={{ maxWidth: "3em" }}
									>
										<Grid item>
											<img
												src={mobile}
												style={{
													maxHeight: "54em",
													padding: "5em",

													marginTop: "-43em",
												}}
											/>

											<Grid item>
												<Grid item>
													<Typography>
														Lorem, ipsum dolor sit amet consectetur adipisicing
														elit. Quo, ab! Repellat aspernatur suscipit, quidem
														adipisci asperiores fugiat iste quia in sit itaque
														pariatur sapiente aut, incidunt dignissimos, maiores
														eum odit!
													</Typography>
													<Grid container direction="row">
														<Card
															style={{
																maxWidth: "15em",

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
																<Grid align="center" style={{ padding: "2em" }}>
																	<Typography
																		variant="h5"
																		color="white"
																		gutterBottom
																	>
																		Simply{" "}
																		<Button
																			component={Link}
																			to="/estimate"
																			onClick={() => props.setValue(6)}
																			variant="contained"
																			color="secondary"
																			component={Link}
																			to="/estimate"
																			style={{ backgroundColor: "blue" }}
																		>
																			SIGN UP
																		</Button>{" "}
																		to create an account to get started
																	</Typography>
																</Grid>
															</Grid>
														</Card>
														<Card
															style={{
																maxWidth: "15em",

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
																<Grid align="center" style={{ padding: "2em" }}>
																	<Typography
																		variant="h5"
																		color="white"
																		gutterBottom
																	>
																		Simply{" "}
																		<Button
																			component={Link}
																			to="/estimate"
																			onClick={() => props.setValue(6)}
																			variant="contained"
																			color="secondary"
																			component={Link}
																			to="/estimate"
																			style={{ backgroundColor: "blue" }}
																		>
																			SIGN UP
																		</Button>{" "}
																		to create an account to get started
																	</Typography>
																</Grid>
															</Grid>
														</Card>
														<Card
															style={{
																maxWidth: "15em",

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
																<Grid align="center" style={{ padding: "2em" }}>
																	<Typography
																		variant="h5"
																		color="white"
																		gutterBottom
																	>
																		Simply{" "}
																		<Button
																			component={Link}
																			to="/estimate"
																			onClick={() => props.setValue(6)}
																			variant="contained"
																			color="secondary"
																			component={Link}
																			to="/estimate"
																			style={{ backgroundColor: "blue" }}
																		>
																			SIGN UP
																		</Button>{" "}
																		to create an account to get started
																	</Typography>
																</Grid>
															</Grid>
														</Card>
														<Card
															style={{
																maxWidth: "15em",

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
																<Grid align="center" style={{ padding: "2em" }}>
																	<Typography
																		variant="h5"
																		color="white"
																		gutterBottom
																	>
																		Simply{" "}
																		<Button
																			component={Link}
																			to="/estimate"
																			onClick={() => props.setValue(6)}
																			variant="contained"
																			color="secondary"
																			component={Link}
																			to="/estimate"
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
												</Grid>
											</Grid>
										</Grid>{" "}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{
									backgroundColor: "transparent",
									marginLeft: "27em",
									marginTop: "8em",
								}}
								component={Link}
								to="/mobileapps"
								onClick={() => props.setSelectedIndex(2)}
							>
								<img src={forwardArrow} alt="Forward to iOS/Android Section" />
							</IconButton>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
		</Grid>
	);
}
