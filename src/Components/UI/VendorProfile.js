import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import VendorForm from "./VendorForm.js";
import BasicVendorForm from "./BasicVendorForm";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
	background: {
		background: "linear-gradient( #8f076c, #A21856)",
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
		height: 70,
		color: "#8f076c",
		width: 255,
		backgroundColor: "#fff",
		fontSize: "1.2rem",
		marginRight: "5em",
		"&:hover": {
			backgroundColor: "#8f076c",
			color: "#fff",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 0,
			marginRight: 0,
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

	return (
		<Grid container direction="row" className={classes.background}>
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
							to="/vendorredeemvoucher"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							REDEEM VOUCHERS
						</Button>
						<Button
							component={Link}
							to="/vendorwallet"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
						>
							WALLET
						</Button>{" "}
						<Button
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
							style={{ margin: "0.5em" }}
							component={Link}
							to="/vendorprofile"
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
											<BasicVendorForm />
											<Grid item container>
												<Grid>
													<Button
														variant="contained"
														style={{
															background: "#8f076c",
															marginRight: "1em",
															fontWeight: "3rem",
															fontSize: "0.7rem",
															marginTop: "2em",
															borderRadius: "1.5em",
															color: "#fff",
														}}
													>
														{" "}
														UPDATE INFORMATION
													</Button>
												</Grid>
												<Grid>
													<input
														style={{
															border: "1px solid black",
															height: "1.5em",
															marginTop: "2em",
														}}
														placeholder=" -  -  -  -  -  -  -  -  -  -"
													/>
													<Typography
														style={{ fontSize: "0.6rem", fontWeight: "2rem" }}
													>
														{" "}
														Enter validation code sent to your phone <br /> or
														email{" "}
													</Typography>
												</Grid>
												<Grid>
													<Button
														variant="contained"
														style={{
															background: "#8f076c",
															marginLeft: "1em",
															fontWeight: "3rem",
															fontSize: "0.7rem",
															marginTop: "2em",
															borderRadius: "1.5em",
															color: "#fff",
														}}
													>
														{" "}
														ENTER
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
												<VendorForm />
												<Grid item container>
													<Grid style={{ marginTop: "2em" }}>
														<Button
															variant="contained"
															style={{
																background: "#8f076c",
																marginRight: "2em",
																fontWeight: "3rem",
																fontSize: "0.7rem",
																marginTop: "-1em",
																borderRadius: "1.5em",
																color: "#fff",
															}}
														>
															{" "}
															SECURITY VERIFICATION
														</Button>
													</Grid>
													<Grid style={{ marginTop: "2em" }}>
														<input
															style={{
																border: "1px solid black",
																height: "1.5em",
															}}
															placeholder=" -  -  -  -   -   -"
														/>
														<Typography
															style={{ fontSize: "0.6rem", fontWeight: "2rem" }}
														>
															{" "}
															Enter validation code sent to your phone <br /> or
															email{" "}
														</Typography>
													</Grid>

													<Grid style={{ marginTop: "2em", marginLeft: "1em" }}>
														<Button
															variant="contained"
															style={{
																background: "#8f076c",
																marginRight: "2em",
																fontWeight: "3rem",
																fontSize: "0.7rem",
																marginTop: "-1em",
																borderRadius: "1.5em",
																color: "#fff",
															}}
														>
															{" "}
															ENTER
														</Button>
													</Grid>
												</Grid>
											</Grid>
											<Grid
												style={{
													marginLeft: "25em",
													marginTop: "2em",
													padding: "1em",
												}}
											>
												<Button
													component={Link}
													to="/vendorwallet"
													variant="contained"
													style={{
														background: "#8f076c",
														marginRight: "2em",
														fontWeight: "3rem",
														marginTop: "-1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													FINISH
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
