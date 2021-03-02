import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import food__worth from "../../assets/food__worth.png";
import medicine_worth from "../../assets/medicine_worth.png";
import fin_worth from "../../assets/fin_worth.png";
import edu_worth from "../../assets/edu_worth.png";
import other_worth from "../../assets/other_worth.png";
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
							component={Link}
							to="/distributevouchers"
							style={{ margin: "0.5em" }}
							className={classes.estimateBtn}
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
									minWidth: "50em",
									minHeight: "35em",
									borderRadius: "3em",
								}}
							>
								<Grid
									item
									style={{ padding: "3em", marginLeft: "5em" }}
									container
									direction="row"
								>
									<Grid>
										<Typography
											style={{ color: "#1e4187", fontSize: "1.5rem" }}
										>
											YOU HAVE GENERATED
										</Typography>
										<Grid>
											<Typography
												style={{ color: "#1e4187", fontSize: "1.5rem" }}
											>
												XXX VOUCHERS
											</Typography>
										</Grid>
									</Grid>{" "}
									<Grid style={{ marginLeft: "8em" }}>
										<Typography
											style={{ color: "#1e4187", fontSize: "1.5rem" }}
										>
											WORTH
										</Typography>
									</Grid>
									<Grid>
										<Typography
											style={{ color: "#1e4187", fontSize: "1.5rem" }}
										>
											XXX{" "}
										</Typography>
									</Grid>
								</Grid>
								<Grid
									style={{ marginLeft: "2em" }}
									item
									container
									direction="row"
									align="center"
								>
									<Grid item style={{ padding: "1em" }}>
										<Grid>
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
												FOOD <br /> WORTH
											</Button>
										</Grid>
										<Grid item>
											<img
												src={food__worth}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>
										<Grid item>
											<Typography>xxx</Typography>
										</Grid>
									</Grid>
									<Grid item style={{ padding: "1em" }}>
										<Grid>
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
												MEDICINE <br /> WORTH
											</Button>
										</Grid>
										<Grid item>
											<img
												src={medicine_worth}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>
										<Grid item>
											<Typography>xxx</Typography>
										</Grid>
									</Grid>
									<Grid item style={{ padding: "1em" }}>
										<Grid>
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
												EDUCATION <br /> WORTH
											</Button>
										</Grid>
										<Grid item>
											<img
												src={edu_worth}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>
										<Grid item>
											<Typography>xxx</Typography>
										</Grid>
									</Grid>
									<Grid item style={{ padding: "1em" }}>
										<Grid>
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
												FINANCE <br /> WORTH
											</Button>
										</Grid>
										<Grid item>
											<img
												src={fin_worth}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>
										<Grid item>
											<Typography>xxy</Typography>
										</Grid>
									</Grid>
									<Grid item style={{ padding: "1em" }}>
										<Grid>
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
												OTHER <br /> WORTH
											</Button>
										</Grid>
										<Grid item>
											<img
												src={other_worth}
												style={{ maxHeight: 50, padding: "1em" }}
											/>
										</Grid>
										<Grid item>
											<Typography>xxx</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid
									style={{ marginTop: "5em", marginLeft: "5em" }}
									item
									container
									direction="row"
								>
									<Grid>
										<Grid>
											<Button
												component={Link}
												to="/generatevoucher"
												variant="text"
												style={{
													background: "#fff",
													marginRight: "2em",
													fontWeight: "3rem",
													marginTop: "-1em",
													borderRadius: "1.5em",
													color: "#1e4187",
												}}
											>
												{" "}
												Back
											</Button>
										</Grid>
									</Grid>
									<Grid>
										<Button
											component={Link}
											to="/generatevoucher"
											variant="outlined"
											style={{
												background: "#1e4187",
												marginRight: "2em",
												marginTop: "-1em",
												borderRadius: "1.5em",
												color: "#fff",
											}}
										>
											{" "}
											Validate
										</Button>
									</Grid>
									<Grid>
										<input
											placeholder="-   -   -   -   -   -   -"
											style={{
												border: "1px solid black",
												maxWidth: "8em",
												marginRight: "12em",
											}}
											type="password"
										/>
										<Typography style={{ fontSize: "0.7rem" }}>
											Enter validation code sent <br /> to your phone or emai
										</Typography>
									</Grid>
									<Grid>
										<Button
											component={Link}
											to="/generatevoucher"
											variant="outlined"
											style={{
												background: "#1e4187",
												marginTop: "-1em",
												borderRadius: "1em",
												color: "#fff",
											}}
										>
											{" "}
											FINISH
										</Button>
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
