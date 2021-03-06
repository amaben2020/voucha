import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
	table: {
		maxWidth: "10em",
		padding: "1em",
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
const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#1e4187",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [createData("Name", "#", "#"), createData("", "#", "#")];

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
							component={NavLink}
							activeStyle={{
								color: "#000",
								background: "#fff",
								height: "5em",
								width: "19em",
							}}
							activeClassName={"active"}
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
								<Grid style={{ margin: "2em", marginLeft: "4em" }}>
									<Typography style={{ color: "#1e4187", fontSize: "2rem" }}>
										{" "}
										SPECIFIC RECIPIENTS
									</Typography>
								</Grid>
								<Grid
									item
									style={{ marginLeft: "3em", marginRight: "3em" }}
									container
									direction="row"
								>
									<Grid item container direction="column">
										<Grid>
											<TableContainer style={{ maxWidth: "44em" }}>
												<Table
													className={classes.table}
													aria-label="customized table"
												>
													<TableHead>
														<TableRow>
															<StyledTableCell>NAME</StyledTableCell>
															<StyledTableCell align="right">
																PHONE NUMBER
															</StyledTableCell>
															<StyledTableCell align="right">
																EMAIL OPTIONAL
															</StyledTableCell>
															<StyledTableCell align="right">
																TYPE OF VOUCHERS
															</StyledTableCell>
															<StyledTableCell align="right">
																VOUCHERS VALUE
															</StyledTableCell>
															<StyledTableCell align="right">
																NUMBER OF VOUCHERS
															</StyledTableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{rows.map((row) => (
															<StyledTableRow key={row.name}>
																<StyledTableCell component="th" scope="row">
																	{row.name}
																</StyledTableCell>
																<StyledTableCell align="center">
																	{row.calories}
																</StyledTableCell>
																<StyledTableCell align="center">
																	{row.fat}
																</StyledTableCell>
																<StyledTableCell align="center">
																	{row.carbs}
																</StyledTableCell>
																<StyledTableCell align="center">
																	{row.protein}
																</StyledTableCell>
															</StyledTableRow>
														))}
													</TableBody>
												</Table>
											</TableContainer>
											<Grid>
												<Button
													component={Link}
													to="/distributevouchers2"
													variant="contained"
													style={{
														background: "#1e4187",
														marginLeft: "42em",
														fontWeight: "3rem",
														marginTop: "-1em",
														borderRadius: "1.5em",
														color: "#fff",
													}}
												>
													{" "}
													+ ADD MORE RECIPIENTS
												</Button>
											</Grid>
											<Grid style={{ marginLeft: "25em", marginTop: "8em" }}>
												<Grid item container>
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
															SEND TOKEN
														</Button>
													</Grid>
													<Grid>
														<Grid style={{ marginTop: "-1em" }}>
															<input
																style={{
																	maxWidth: "8em",
																	border: "1px solid black",
																}}
																type="text"
																placeholder=" -  -  -  -  -  -  -  -  -"
															/>
														</Grid>
														<Typography style={{ fontSize: "0.7rem" }}>
															Enter validation code sent to your <br /> phone or
															email
														</Typography>
													</Grid>
													<Grid>
														<Button
															component={Link}
															to="/specificdemography"
															variant="contained"
															style={{
																background: "#1e4187",
																marginLeft: "12em",
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
