import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import ProfileForm from "./ProfileForm";
import moment from "moment";
// import DonorProfileForm2 from "../UI/DonorProfileForm2";

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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Food", 0, 0),
	createData("Medicine", 0, 0),
	createData("Education", 0, 0),
	createData("Finance", 0, 0),
];

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
							component={Link}
							to="/wallet"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
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
							component={NavLink}
							activeStyle={{
								color: "#000",
								background: "#fff",
								height: "5em",
								width: "19em",
							}}
							activeClassName={"active"}
							to="/profile"
						>
							PROFILE
						</Button>
					</Grid>
				</Grid>
			</Grid>

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
									minWidth: "67em",
									minHeight: "35em",
									borderRadius: "3em",
								}}
							>
								{" "}
								<Grid style={{ margin: "1em", marginLeft: "4em" }}>
									<Typography style={{ color: "#1e4187", fontSize: "2rem" }}>
										{" "}
										BASIC <br /> INFORMATION
									</Typography>
								</Grid>
								<Grid
									item
									style={{ marginLeft: "3em" }}
									container
									direction="row"
								>
									<Grid item container direction="column" lg>
										<Grid item container direction="column">
											<ProfileForm />
											<Grid item container style={{ marginTop: "3em" }}>
												<Grid>
													<Button
														component={Link}
														to="/distributevouchers2"
														variant="contained"
														style={{
															background: "#1e4187",
															marginRight: "1em",
															fontSize: "0.7rem",
															marginTop: "-1em",
															borderRadius: "1.5em",
															color: "#fff",
														}}
													>
														{" "}
														Update Information
													</Button>
												</Grid>
												<Grid>
													<input placeholder=" -  -  -  -   -   -" />
												</Grid>
												<Grid>
													<Button
														component={Link}
														to="/distributevouchers2"
														variant="contained"
														style={{
															background: "#1e4187",
															marginLeft: "1em",
															fontSize: "0.7rem",
															marginTop: "-1em",
															borderRadius: "1.5em",
															color: "#fff",
														}}
													>
														{" "}
														Enter
													</Button>
												</Grid>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container direction="column" lg={7}>
										<Grid style={{ marginTop: "-6em" }}>
											{" "}
											<Grid item container>
												<Typography
													style={{
														color: "#1e4187",
														fontSize: "2rem",
													}}
												>
													BANK <br /> ACCOUNT
												</Typography>{" "}
												<Typography
													style={{ fontSize: "0.9rem", marginLeft: "5em" }}
												>
													(This information is required in order <br /> to
													receive funds in wallet)
												</Typography>
											</Grid>{" "}
										</Grid>

										<Grid>
											<Grid item container direction="column">
												{/* <DonorProfileForm2 /> */}
												<Grid item container style={{ marginTop: "1em" }}>
													<Grid>
														<Button
															component={Link}
															to="/distributevouchers2"
															variant="contained"
															style={{
																background: "#1e4187",
																marginRight: "2em",
																fontWeight: "3rem",
																marginTop: "-1em",
																borderRadius: "1.5em",
																color: "#fff",
															}}
														>
															{" "}
															Security Verification
														</Button>
													</Grid>
													<Grid>
														<input placeholder=" -  -  -  -   -   -" />
													</Grid>
													<Grid>
														<Button
															component={Link}
															to="/distributevouchers2"
															variant="contained"
															style={{
																background: "#1e4187",
																marginLeft: "2em",
																fontWeight: "3rem",
																marginTop: "-1em",
																borderRadius: "1.5em",
																color: "#fff",
															}}
														>
															{" "}
															Enter
														</Button>
													</Grid>
												</Grid>
											</Grid>
											<Grid style={{ marginLeft: "25em", marginTop: "3em" }}>
												<Button
													component={Link}
													to="/distributevouchers2"
													variant="contained"
													style={{
														background: "#1e4187",
														marginRight: "2em",
														fontWeight: "3rem",
														marginTop: "-1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													NEXT
												</Button>
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
