import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import moment from "moment";
import upload from "../../assets/naira.png";

const useStyles = makeStyles((theme) => ({
	background: {
		background: "linear-gradient(#3E3B6B)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		paddingBottom: "10em",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${mobileBackground})`,
			height: "80em",
		},
	},
	estimateBtn: {
		...theme.typography.estimate,
		borderRadius: 20,
		border: "solid black 1px",
		height: 50,
		color: "#000",
		width: 205,
		backgroundColor: "#6ACBE1",
		fontSize: "1rem",
		marginRight: "5em",
		"&:hover": {
			backgroundColor: "#fff",
		},

		[theme.breakpoints.down("md")]: {
			marginLeft: 0,
			marginRight: 0,
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			marginRight: 0,
			height: "5em",
			width: "8em",
			fontSize: "0.6rem",
		},
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
			marginLeft: "14.95em",
		},
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: "5em",
		borderRadius: 5,
	},
	sendButton: {
		...theme.typography.estimate,
		fontSize: "1rem",
		borderRadius: 50,
		backgroundColor: theme.palette.common.orange,
		height: 45,
		width: "245",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down("sm")]: {
			height: 40,
			width: 225,
		},
	},
}));

export default function DonorDashboard() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Grid
			container
			direction="row"
			style={{ background: "#3E3B6B" }}
			className={classes.background}
		>
			<Grid
				item
				container
				direction="column"
				lg={4}
				xl={3}
				style={{
					marginTop: matchesXS
						? "-8em"
						: matchesSM
						? "1em"
						: matchesMD
						? "1em"
						: 0,

					marginBottom: matchesMD ? "5em" : 0,
				}}
				justify="center"
				alignItems="center"
			>
				<Grid item style={{ marginTop: -130 }}>
					<Grid
						container
						direction={matchesXS ? "row" : matchesMD ? "row" : "column"}
						style={{
							padding: matchesMD ? "3em" : undefined,
						}}
					>
						<Grid item>
							<Typography
								style={{
									color: "#fff",
									marginLeft: "1em",
								}}
								variant="h5"
							>
								{moment().format("MMMM Do, YYYY")}
							</Typography>
						</Grid>
						<Button
							to="/donordashboard"
							component={NavLink}
							activeStyle={{
								color: "#000",
								background: "#fff",
								height: "5em",
								width: "19em",
							}}
							activeClassName={"active"}
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							MY VOUCHERS
						</Button>
						<Button
							component={Link}
							to="/wallet"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							WALLET
						</Button>{" "}
						<Button
							component={Link}
							to="/generatevoucher"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							GENERATE VOUCHERS
						</Button>{" "}
						<Button
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
							component={Link}
							to="/distributevouchers"
						>
							DISTRIBUTE <br /> VOUCHERS
						</Button>{" "}
						<Button
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
							component={Link}
							to="/profile"
						>
							PROFILE
						</Button>
					</Grid>
				</Grid>
			</Grid>

			<Grid>
				<Grid
					direction={matchesSM ? "column" : "row"}
					item
					container
					style={{ marginTop: "3em" }}
					alignItems={"center"}
				>
					<Grid
						item
						container
						lg={8}
						style={{
							marginLeft: matchesXS
								? "-1em"
								: matchesSM
								? 0
								: matchesMD
								? "15em"
								: undefined,
							marginTop: matchesXS
								? "-18em"
								: matchesSM
								? "-10em"
								: matchesMD
								? "-10em"
								: undefined,
						}}
					>
						<Grid item>
							<Card
								style={{
									borderRadius: "2em",
									minHeight: matchesSM ? "10em" : matchesMD ? "18em" : "28em",
									marginBottom: matchesSM ? "1.9em" : undefined,
									minWidth: matchesXS ? "10.9em" : matchesSM ? "29em" : "25em",
									marginLeft: matchesSM ? "7.0em" : "1em",
									bottom: 0,
									backgroundColor: "white-smoke",
									width: matchesXS ? "5em" : "100%",
								}}
							>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											style={{
												paddingTop: matchesSM ? "0.1em" : "5em",
												color: "#1e4187",
											}}
											variant="h5"
											gutterBottom
										>
											YOU HAVE NO ACTIVE <br />
											VOUCHERS
										</Typography>
										<Button
											component={Link}
											to="/generatevoucher"
											variant="contained"
											style={{
												background: "#1e4187",
												marginTop: "2em",
												borderRadius: "1em",
											}}
										>
											{" "}
											GENERATE VOUCHERS
										</Button>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
					<Grid item container lg={4}>
						<Grid
							item
							style={{
								marginLeft: matchesXS
									? "1em"
									: matchesSM
									? "1em"
									: matchesMD
									? "19em"
									: "-1em",
								marginTop: matchesXS ? "-1.1em" : matchesMD ? "1em" : undefined,
							}}
						>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "20em",
									maxWidth: matchesXS ? "10.9em" : "25em",
									marginLeft: matchesXS ? "5.9em" : matchesSM ? "10em" : "1em",
									bottom: 0,
									boxShadow: "25px solid #000",
									backgroundColor: "white",
									width: "100%",
								}}
							>
								<Grid>
									<Grid
										align="center"
										style={{
											padding: matchesXS
												? "0.1em"
												: matchesSM
												? "0.2em"
												: "1em",
											width: matchesSM ? "0.1em" : undefined,
											height: matchesXS
												? "6.9em"
												: matchesSM
												? "7.9em"
												: undefined,
										}}
									>
										<Typography
											style={{
												paddingTop: matchesXS
													? "0.1em"
													: matchesSM
													? "0.9em"
													: "2em",
												paddingLeft: matchesXS ? "0.9em" : undefined,
												color: "#3E3B6B",
											}}
											variant="h5"
											gutterBottom
										>
											Vouchers generated
										</Typography>
										<Grid
											style={{
												marginRight: "8em",
												padding: "0.5em",
											}}
										>
											<img
												alt="showing upload"
												src={upload}
												style={{ maxHeight: 30 }}
											/>
										</Grid>
									</Grid>
								</Grid>
							</Card>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "15em",
									maxWidth: matchesXS ? "12.9em" : "25em",
									marginTop: "2em",
									marginLeft: matchesXS
										? "5.3em"
										: matchesSM
										? "10.9em"
										: "1em",
									bottom: 0,
									backgroundColor: "white",
									width: "100%",
								}}
							>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											style={{
												paddingTop: matchesSM ? "0.1em" : "1em",
												color: "#3E3B6B",
												fontSize: "1rem",
											}}
											variant="h6"
											gutterBottom
										>
											IMPACT CREATED
										</Typography>
										<Grid
											item
											container
											direction="row"
											style={{ paddingTop: matchesSM ? "0.9em" : "2em" }}
										>
											<Grid item container md={6}>
												<Typography
													style={{
														marginLeft: "0.8em",
														color: "#3E3B6B",
														fontSize: "2.2rem",
													}}
												>
													0000
												</Typography>
												<Typography
													style={{ color: "#3E3B6B", fontSize: "0.9rem" }}
													variant="h6"
												>
													PERSONS REACHED
												</Typography>{" "}
											</Grid>
											<Grid item container md={6}>
												{" "}
												<Typography
													style={{
														marginLeft: "0.3em",
														color: "#3E3B6B",
														fontSize: "2.2rem",
													}}
												>
													0000
												</Typography>
												<Typography
													style={{
														color: "#3E3B6B",
														fontSize: "0.9rem",
													}}
													variant="h6"
												>
													COMMUNITIES <br /> EMPOWERED
												</Typography>{" "}
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
