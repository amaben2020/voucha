import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import upload from "../../assets/upload.svg";
import DialogContent from "@material-ui/core/DialogContent";

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
					marginBottom: matchesMD ? "5em" : "5em",
				}}
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								style={{
									paddingTop: "0.5em",
									color: "#fff",
									marginLeft: "2em",
								}}
								variant="h5"
							>
								31/10/2020
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
							component={Link}
							to="/wallet"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							WALLET
						</Button>{" "}
						<Button
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
							component={Link}
							to="/generatevouchers"
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
							onClick={() => setOpen(true)}
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
						minWidth: "60em",
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
						<Grid item container lg={10}>
							<Grid item container>
								<Card
									style={{
										borderRadius: "2em",
										minHeight: "25em",
										minWidth: "30em",
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
												<img
													src={upload}
													style={{ maxHeight: 30, maxHeight: 30 }}
												/>
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
					style={{ marginTop: "1em" }}
					alignItems={"center"}
				>
					<Grid>
						<Grid item container>
							<Card
								style={{
									minWidth: "60em",
									minHeight: "35em",
									borderRadius: "3em",
								}}
							>
								<Grid item container direction="row">
									<Grid style={{ padding: "5em" }}>
										<Typography
											gutterBottom
											variant="h1"
											style={{
												color: "#3E3B6B",
												fontSize: "2rem",
												marginTop: "0.5em",
											}}
										>
											WITHDRAWING FROM <br /> THE WALLET
										</Typography>
										<Grid>
											<Typography
												gutterBottom
												variant="h1"
												style={{
													color: "#3E3B6B",
													fontSize: "2rem",
													marginTop: "2em",
												}}
											>
												WALLET BALANCE
											</Typography>
										</Grid>

										<Grid item style={{ marginTop: "2em" }} container md={6}>
											<img src={upload} style={{ maxHeight: 45 }} />
										</Grid>
									</Grid>
									<Grid style={{ padding: "5em" }}>
										<Grid>
											{" "}
											<Typography
												gutterBottom
												variant="h6"
												style={{ color: "#3E3B6B", fontSize: "1rem" }}
											>
												NAME OF RECIPIENT
											</Typography>
											<input
												type="text"
												placeholder="SAME AS PROFILE"
												required
											/>
										</Grid>
										<Grid>
											<Typography
												gutterBottom
												variant="h6"
												style={{
													color: "#3E3B6B",
													fontSize: "1rem",
													marginTop: "0.5em",
												}}
											>
												CONFIRM ACCOUNT NUMBER
											</Typography>
											<input
												type="text"
												placeholder="SAME AS PROFILE"
												required
											/>
										</Grid>
										<Grid>
											<Typography
												gutterBottom
												variant="h6"
												style={{
													color: "#3E3B6B",
													fontSize: "1rem",
													marginTop: "0.5em",
												}}
											>
												AMOUNT TO WITHDRAW
											</Typography>
											<input type="text" required />
											<Typography
												gutterBottom
												variant="h6"
												style={{ color: "#000", fontSize: "1rem" }}
											>
												Whatever money is left stays in your wallet
											</Typography>
										</Grid>
										<Button
											component={Link}
											to="/#"
											variant="contained"
											style={{
												background: "#1e4187",
												marginTop: "1em",
												borderRadius: "1.5em",
												minWidth: "14em",
												color: "#fff",
												fontSize: "1rem",
												marginBottom: "2em",
											}}
										>
											WITHDRAW
										</Button>

										<Grid item>
											<Typography
												style={{ lineHeight: 0.9, paddingBottom: "0.5em" }}
											>
												Enter validation code sent <br /> to your phone or email
											</Typography>
											<input
												placeholder=" -  -  -  -  -  -  -   - "
												type="password"
												required
												style={{
													maxWidth: "10em",
													border: "0.5px solid black",
												}}
											/>
											<Grid item>
												<Button
													component={Link}
													to="/"
													variant="contained"
													style={{
														background: "#1e4187",
														marginTop: "1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													CONFIRM
												</Button>{" "}
												<Button
													component={Link}
													to="/"
													variant="contained"
													style={{
														background: "#1e4187",
														marginTop: "1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													FINISH
												</Button>
												<Typography
													style={{ fontSize: "0.8rem", marginTop: "1em" }}
												>
													*The transaction may take up to 48hrs to appear in
													your bank account
												</Typography>
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
