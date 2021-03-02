import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";

import moment from "moment";
import upload from "../../assets/naira.png";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

const rows = [createData("Food", 0, 0), createData("Grocery", 0, 0)];

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
							to="/generatevouchers"
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
									minWidth: "30em",
									minHeight: "35em",
									borderRadius: "3em",
								}}
							>
								<Grid item container direction="row">
									<Grid item>
										<Typography
											style={{
												paddingTop: "3em",
												color: "#1e4187",
												marginLeft: "4em",
											}}
											variant="h5"
											gutterBottom
										>
											WALLET BALANCE
										</Typography>
									</Grid>
									<Grid
										item
										style={{ paddingTop: "3em", marginLeft: "2em" }}
										container
										md={6}
									>
										<img src={upload} style={{ maxHeight: 65 }} />
									</Grid>
									<Grid item container direction="column">
										<TableContainer
											style={{
												maxWidth: "30em",
												maxHeight: "20em",
												padding: "1em",
												marginLeft: "3em",
											}}
											component={Paper}
										>
											<Table
												className={classes.table}
												aria-label="customized table"
											>
												<TableHead>
													<TableRow>
														<StyledTableCell>TYPE OF VOUCHERS</StyledTableCell>
														<StyledTableCell align="right">
															VOUCHER WORTH
														</StyledTableCell>
														<StyledTableCell align="right">
															QUANTITY
														</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{rows.map((row) => (
														<StyledTableRow key={row.name}>
															<StyledTableCell component="th" scope="row">
																{row.name}
															</StyledTableCell>
															<StyledTableCell align="right">
																{row.calories}
															</StyledTableCell>
															<StyledTableCell align="right">
																{row.fat}
															</StyledTableCell>
														</StyledTableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
										<Grid>
											<Button
												component={Link}
												to="/"
												variant="contained"
												style={{
													background: "#1e4187",
													marginTop: "1em",
													borderRadius: "1.5em",
													color: "#fff",
													marginLeft: "25em",
												}}
											>
												{" "}
												+ TO ADD MORE VOUCHERS
											</Button>
											<input
												style={{
													maxWidth: "15em",
													marginLeft: "25em",
													marginTop: "1em",
												}}
												placeholder="N"
												type="text"
											/>
										</Grid>
										<Grid style={{ marginTop: "4em", marginLeft: "8em" }}>
											<Button
												component={Link}
												to="/generatevouchers2"
												variant="contained"
												style={{
													background: "#1e4187",
													marginTop: "1em",
													borderRadius: "0.5em",
													color: "#fff",
													marginLeft: "25em",
												}}
											>
												{" "}
												NEXT
											</Button>
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
