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
import moment from "moment";
import VendorRedeemVoucherForm from "./VendorRedeemVoucherForm";
import VendorRedeemCodeForm from "./VendorRedeemCodeForm";

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
					style={{ marginTop: "2em" }}
					alignItems={"center"}
				>
					<Grid>
						<Grid item container>
							<Card
								style={{
									minWidth: "45em",
									minHeight: "35em",
									borderRadius: "3em",
								}}
							>
								<Grid item container direction="row">
									<Grid
										align="center"
										style={{ padding: "1em", marginTop: "2em" }}
									>
										<VendorRedeemVoucherForm />
										<Grid style={{ padding: "1em", marginTop: "1em" }}>
											<VendorRedeemCodeForm />
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
									maxHeight: "20em",
									maxWidth: "25em",
									marginTop: "-13em",
									marginLeft: "1em",
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
												fontSize: "1.1rem",
											}}
											variant="h5"
											gutterBottom
										>
											TOTAL VOUCHERS REDEEMED
										</Typography>
										<Grid
											style={{
												marginRight: "15em",
												padding: "0.5em",
											}}
										>
											<Typography
												style={{
													color: "#3E3B6B",
													fontWeight: "6rem",
													fontSize: "2.2rem",
												}}
											>
												000
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
