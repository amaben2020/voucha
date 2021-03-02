import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import DonorFundWalletForm from "./DonorFundWalletForm";
import upload from "../../assets/naira.png";
import flutterwave from "../../assets/flutterwave.png";
import verve from "../../assets/verve.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
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

	//const [open, setOpen] = useState(false);
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
									<Button>BACK</Button>
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
													<Typography> WALLET BALANCE </Typography>
												</Grid>
												<Grid>
													<img
														src={upload}
														style={{ maxHeight: 40, padding: "0.5em" }}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item container style={{ marginTop: "10em" }}>
											<Grid>
												<img
													src={flutterwave}
													style={{ maxHeight: 32, padding: "0.5em" }}
												/>
											</Grid>
											<Grid>
												<img
													src={mastercard}
													style={{ maxHeight: 32, padding: "0.5em" }}
												/>
											</Grid>
											<Grid>
												<img
													src={visa}
													style={{ maxHeight: 32, padding: "0.5em" }}
												/>
											</Grid>
											<Grid>
												<img
													src={verve}
													style={{
														maxHeight: 32,
														padding: "0.5em",
													}}
												/>
											</Grid>
										</Grid>
									</Grid>

									<Grid item container direction="column" lg={7}>
										<Grid>
											{" "}
											<DonorFundWalletForm />{" "}
										</Grid>
										<Grid>
											<Typography
												style={{ fontSize: "1rem", paddingTop: "1em" }}
											>
												{" "}
												* You would be directed to the bank and relevant payment{" "}
												<br />
												portal to complete your transaction
											</Typography>
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
