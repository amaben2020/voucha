import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import upload from "../../assets/upload.svg";
import DialogContent from "@material-ui/core/DialogContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import specific from "../../assets/specific.png";
import specific_groups from "../../assets/specific_groups.png";
import campaign from "../../assets/campaign.png";
import do_you from "../../assets/do_you.png";
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
							style={{ margin: "0.5em" }}
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
										WHO DO YOU WANT <br /> TO DISTRIBUTE TO?
									</Typography>
								</Grid>
								<Grid
									item
									style={{ marginLeft: "3em" }}
									container
									direction="row"
								>
									<Grid item container direction="column" lg>
										<Grid item container>
											<Grid>
												<Grid>
													<img
														src={specific}
														style={{ maxHeight: 50, padding: "1em" }}
													/>
												</Grid>
												<Grid>
													<Button
														component={Link}
														to="/generatevoucher"
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
														SPECIFIC RECIPIENTS
													</Button>
												</Grid>
											</Grid>
										</Grid>
										<Grid>
											<Grid>
												<img
													src={campaign}
													style={{
														maxHeight: 50,
														padding: "1em",
														paddingTop: "2em",
														marginRight: "10em",
													}}
												/>
											</Grid>
											<Grid>
												<Button
													component={Link}
													to="/generatevoucher"
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
													GIVE TO A CAMPAIGN
												</Button>
											</Grid>
										</Grid>
									</Grid>
									<Grid>
										<Grid>
											<img
												src={specific_groups}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>

										<Grid>
											<Button
												component={Link}
												to="/generatevoucher"
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
												SPECIFIC GROUPS
											</Button>
										</Grid>
										<Grid>
											<Grid style={{ display: "flex" }}>
												<Grid>
													<img
														src={do_you}
														style={{
															maxHeight: 50,
															padding: "1em",
															paddingTop: "2em",
														}}
													/>
												</Grid>
												<Grid style={{ marginTop: "2em" }}>
													<Typography
														variant="h2"
														style={{
															fontSize: "0.7rem",
															fontWeight: 900,
															color: "#0077A7",
														}}
													>
														Do you want to give <br /> and don't have a cause{" "}
														<br /> in mind?
													</Typography>
												</Grid>
											</Grid>
											<Grid>
												<Button
													component={Link}
													to="/generatevoucher"
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
													LET'S HELP YOU
												</Button>
												<Typography style={{ fontSize: "0.8rem" }}>
													We apply data science to filter <br /> and target your
													beneficaries.
												</Typography>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container direction="column" lg={7}>
										<Grid>
											<TableContainer component={Paper}>
												<Table
													className={classes.table}
													aria-label="customized table"
												>
													<TableHead>
														<TableRow>
															<StyledTableCell></StyledTableCell>
															<StyledTableCell align="right">
																VOUCHERS VALUE N
															</StyledTableCell>
															<StyledTableCell align="right">
																VOUCHERS QUANTITY
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
