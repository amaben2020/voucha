import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import upload from "../../assets/naira.png";
import DialogContent from "@material-ui/core/DialogContent";
import moment from "moment";

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
			height: "85em",
		},
		[theme.breakpoints.down("sm")]: {
			backgroundImage: `url(${mobileBackground})`,
			height: "78em",
		},
		[theme.breakpoints.down("xs")]: {
			backgroundImage: `url(${mobileBackground})`,
			height: "70em",
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
			height: "6em",
			width: "12em",
			fontSize: "0.6rem",
			fontWeight: 900,
		},
		[theme.breakpoints.down("xs")]: {
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

export default function DonorDashboard(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
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
				lg={3}
				xl={3}
				style={{
					marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
					marginBottom: matchesXS ? "0.5em" : matchesMD ? "5em" : "5em",
				}}
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Grid
						container
						direction={matchesXS ? "row" : matchesMD ? "row" : "column"}
						style={{
							maxWidth: matchesXS ? "25em" : matchesSM ? "29em" : undefined,
						}}
					>
						<Grid item>
							<Typography
								style={{
									paddingTop: "0.5em",
									color: "#fff",
									marginLeft: "1em",
								}}
								variant="h5"
							>
								{moment().format("MMMM Do, YYYY")}
							</Typography>
						</Grid>
						<Button
							component={Link}
							to="/donordashboard"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							MY VOUCHERS
						</Button>
						<Button
							to="/wallet"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
							component={NavLink}
							activeStyle={{
								color: "#000",
								background: "#fff",
								height: "5em",
								width: "10em",
							}}
							activeClassName={"active"}
						>
							WALLET
						</Button>{" "}
						<Button
							component={Link}
							to="/generatevouchers"
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
			<Dialog
				fullScreen={matchesXS}
				style={{ zIndex: 1302 }}
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						background: "grey",
						minWidth: "45em",
						paddingTop: matchesXS ? "1em" : "5em",
						paddingBottom: matchesXS ? "1em" : "5em",
						paddingLeft: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "10em"
							: "20em",
						paddingRight: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "10em"
							: "20em",
					},
				}}
			>
				<DialogContent>
					<Grid
						direction={matchesSM ? "column" : "row"}
						item
						container
						style={{ marginTop: "2em" }}
						alignItems={"center"}
					>
						<Grid item container lg={8}>
							<Grid item container>
								<Card
									style={{
										borderRadius: "2em",
										minHeight: "25em",
										minWidth: "20em",
										marginLeft: "1em",
										bottom: 0,
										backgroundColor: "white-smoke",
										width: "100%",
									}}
								>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												style={{ paddingTop: "5em", color: "#1e4187" }}
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
							<Grid item style={{ marginLeft: "1em" }}>
								<Card
									style={{
										borderRadius: "1.5em",
										maxHeight: "10em",
										maxWidth: "17em",
										marginLeft: "1em",
										bottom: 0,
										backgroundColor: "white",
										width: "100%",
									}}
								>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												style={{ paddingTop: "2em", color: "#3E3B6B" }}
												variant="h5"
												gutterBottom
											>
												Vouchers generated
											</Typography>
											<Grid style={{ marginRight: "8em", padding: "0.5em" }}>
												<img src={upload} style={{ maxHeight: 20 }} />
											</Grid>
										</Grid>
									</Grid>
								</Card>
								<Card
									style={{
										borderRadius: "1.5em",
										maxHeight: "10em",
										minWidth: "12.5em",
										marginTop: "2em",
										marginLeft: "1em",
										bottom: 0,
										backgroundColor: "white",
										width: "100%",
									}}
								>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												style={{
													paddingTop: "1em",
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
												style={{ paddingTop: "2em" }}
											>
												<Grid item container md={6}>
													<Typography
														style={{
															marginLeft: "1.4em",
															color: "#3E3B6B",
															fontSize: "1.2rem",
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
															marginLeft: "0.5em",
															color: "#3E3B6B",
															fontSize: "1.2rem",
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
				</DialogContent>
			</Dialog>
			{/***Center Card */}
			<Grid>
				<Grid
					direction={matchesXS ? "column" : "row"}
					item
					container
					style={{ marginTop: matchesSM ? "1em" : "1em" }}
					alignItems={"center"}
				>
					<Grid>
						<Grid item container>
							<Card
								style={{
									marginLeft: matchesXS
										? "2.0em"
										: matchesSM
										? "10em"
										: matchesMD
										? "8em"
										: undefined,
									marginBottom: matchesXS ? "2.0em" : undefined,
									minWidth: matchesXS ? "6em" : matchesSM ? "25em" : "45em",
									minHeight: matchesXS
										? "8em"
										: matchesSM
										? "15em"
										: matchesMD
										? "20em"
										: "35em",
									borderRadius: "3em",
								}}
							>
								<Grid
									item
									container
									direction="row"
									style={{
										marginTop: matchesXS ? "1em" : undefined,
									}}
								>
									<Grid
										align="center"
										style={{
											padding: "1em",
											marginTop: matchesXS ? "1em" : "3em",
											marginLeft: matchesXS ? "0.3em" : "3.8em",
										}}
									>
										<Typography
											style={{
												color: "#3E3B6B",
												fontWeight: "6rem",
												fontSize: "1.6rem",
												lineHeight: 0.9,
											}}
										>
											WALLET BALANCE
										</Typography>
										<Grid item style={{ padding: "1.3em" }} container md={6}>
											<img src={upload} style={{ maxHeight: 45 }} />
										</Grid>
										<Grid>
											<Button
												component={Link}
												to="/donorfundwallet"
												variant="contained"
												style={{
													color: "white",
													height: "3.4em",
													background: "#1e4187",
													marginTop: "2em",
													borderRadius: "1em",
												}}
											>
												{" "}
												FUND WALLET
											</Button>{" "}
											<Button
												component={Link}
												to="/donorwithdrawingfromwallet"
												variant="contained"
												style={{
													color: "white",
													height: "3.4em",
													background: "#1e4187",
													marginTop: "2em",
													marginLeft: "1em",
													borderRadius: "1em",
												}}
											>
												{" "}
												WITHDRAW <br /> FROM WALLET
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
					<Grid item container lg={4}>
						<Grid item>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "9em",
									maxWidth: "25em",
									marginTop: matchesSM ? "1em" : matchesMD ? "2em" : undefined,
									marginLeft: matchesXS
										? "0.7em"
										: matchesSM
										? "10em"
										: matchesMD
										? "18em"
										: "1em",
									bottom: 0,
									boxShadow: "25px solid #000",
									backgroundColor: "white",
									width: "100%",
								}}
							>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											style={{
												paddingTop: "2em",
												color: "#3E3B6B",
												fontSize: "1rem",
											}}
											variant="h6"
											gutterBottom
										>
											TOTAL VOUCHERS GENERATED TILL DATE
										</Typography>
										<Grid
											style={{
												marginRight: "12em",
												padding: "0.5em",
											}}
										>
											<Grid item container md={6}>
												<img src={upload} style={{ maxHeight: 30 }} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Card>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "9em",
									maxWidth: "25em",
									marginTop: "1em",
									marginLeft: matchesXS
										? "0.7em"
										: matchesSM
										? "10em"
										: matchesMD
										? "18em"
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
												paddingTop: "1em",
												color: "#3E3B6B",
												fontSize: "1rem",
											}}
											variant="h6"
											gutterBottom
										>
											VALUE OF ACTIVE VOUCHERS
										</Typography>
										<Grid
											item
											container
											direction="row"
											style={{ paddingTop: "2em" }}
										>
											<Grid item container md={6}>
												<img src={upload} style={{ maxHeight: 30 }} />
											</Grid>
											<Grid
												item
												container
												md={6}
												align="center"
												style={{ marginTop: "0.1em", marginLeft: "7em" }}
											>
												<Button
													component={Link}
													to="/generatevoucher"
													variant="contained"
													style={{
														background: "#1e4187",
														marginTop: "-1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													FUND WALLET
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Card>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "9em",
									maxWidth: "25em",
									marginTop: "1em",
									marginLeft: matchesXS
										? "0.7em"
										: matchesSM
										? "10em"
										: matchesMD
										? "18em"
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
												paddingTop: "1em",
												color: "#3E3B6B",
												fontSize: "1rem",
											}}
											variant="h6"
											gutterBottom
										>
											VALUE OF DISTRIBUTED VOUCHERS
										</Typography>
										<Grid
											item
											container
											direction="row"
											style={{ paddingTop: "2em" }}
										>
											<Grid item container md={6}>
												<img src={upload} style={{ maxHeight: 30 }} />
											</Grid>
											<Grid
												item
												container
												md={6}
												align="center"
												style={{ marginTop: "0.1em", marginLeft: "7em" }}
											>
												<Button
													component={Link}
													to="/generatevoucher"
													variant="contained"
													style={{
														background: "#1e4187",
														marginTop: "-1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													FUND WALLET
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Card>
							<Card
								style={{
									borderRadius: "1.5em",
									maxHeight: "9em",
									maxWidth: "25em",
									marginTop: "1em",
									marginLeft: matchesXS
										? "0.7em"
										: matchesSM
										? "10em"
										: matchesMD
										? "18em"
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
												paddingTop: "1em",
												color: "#3E3B6B",
												fontSize: "1rem",
											}}
											variant="h6"
											gutterBottom
										>
											VALUE OF REDEEMED VOUCHERS
										</Typography>
										<Grid
											item
											container
											direction="row"
											style={{ paddingTop: "2em" }}
										>
											<Grid item container md={6}>
												<img src={upload} style={{ maxHeight: 30 }} />
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
