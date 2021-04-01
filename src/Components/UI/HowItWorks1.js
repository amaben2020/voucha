import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import forwardArrow from "../../assets/forwardArrow.svg";
import Hidden from "@material-ui/core/Hidden";
import happykids from "../../assets/happykids.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Howitworksp1 from "../../assets/Howitworksp1.png";

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
	kids: {
		backgroundImage: `url(${happykids})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	mainContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		paddingTop: "2em",
		paddingBottom: "10em",
	},
	itemSpacer: {
		maxWidth: "40em",
	},
	mobile: {
		padding: "5em",
	},
	kid: {
		background: "linear-gradient(#333399,#e66465, #9198e5)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
		flexWrap: "nowrap",
	},
}));

export default function HowItWorks1(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Grid
			item
			container
			className={classes.kid}
			style={{
				height: matchesMD ? "70em" : " 60em",
				minWidth: matchesXS ? "33.5em" : undefined,
			}}
		>
			<Grid container direction="column" md={3}>
				<Typography
					style={{
						marginLeft: matchesXS ? "2.5em" : "3em",
						fontSize: matchesXS ? "3rem" : matchesMD ? "3rem" : undefined,
						marginTop: matchesSM ? "1em" : "3em",
					}}
					variant="h4"
				>
					HOW IT WORKS
				</Typography>
				<Hidden mdDown>
					<Button
						component={Link}
						to="/"
						onClick={() => props.setValue(6)}
						variant="contained"
						color="secondary"
						style={{
							backgroundColor: "#f4f4f4",
							borderRadius: "1em",
							marginLeft: "3em",
							width: "7em",
							marginTop: "2em",
						}}
					>
						&#x1F3E0; HOME
					</Button>{" "}
				</Hidden>
				<Grid item style={{ marginLeft: matchesXS ? "1.8em" : "3em" }}>
					<Typography
						style={{ marginLeft: "1em", marginTop: "2em", padding: "1em" }}
						variant="h4"
					>
						Step 1
					</Typography>
					<Card
						style={{
							maxWidth: "13em",
							bottom: 0,
							backgroundColor: "grey",
							color: "white",
							width: "100%",
						}}
					>
						<CardHeader
							style={{
								backgroundColor: "grey",
								color: "#000",
								width: "100%",
								fontSize: 800,
							}}
							title="Create Account"
						/>
						<Grid>
							<Grid align="center" style={{ padding: "1.5em" }}>
								<Typography variant="h6" color="#000" gutterBottom>
									Simply
									<Button
										component={Link}
										to="/signup"
										onClick={() => props.setValue(6)}
										variant="contained"
										color="secondary"
										style={{
											backgroundColor: "blue",
											borderRadius: "3em",
											marginLeft: "0.3em",
										}}
									>
										SIGN UP
									</Button>{" "}
									to create an account to get started
								</Typography>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Grid>
			<Grid item container direction="column" align="center" md={1}>
				<Grid
					item
					style={{
						marginRight: "1em",
						marginLeft: matchesMD ? "12em" : undefined,
						marginTop: matchesSM ? "-30em" : "2em",
					}}
				>
					<img
						alt="how it works 1"
						src={Howitworksp1}
						style={{
							height: matchesXS ? "29em" : "35em",
							maxWidth: matchesXS ? "19em" : "20em",
						}}
					/>
				</Grid>
			</Grid>
			<Grid container direction="row" align="center" md={7}>
				<Grid item container direction="column">
					<Grid
						item
						style={{
							marginTop: matchesSM ? "-5em" : matchesMD ? "40em" : "4em",
							marginLeft: matchesXS
								? "-5em"
								: matchesSM
								? "-15em"
								: matchesMD
								? "-18em"
								: "15em",
						}}
					>
						<Typography
							style={{ fontSize: matchesSM ? "2rem" : undefined }}
							variant="h4"
						>
							Sign up as a {matchesSM ? <br /> : undefined}
							<span style={{ fontSize: "2rem", fontWeight: "4rem" }}>
								{" "}
								DONOR{" "}
							</span>{" "}
							or{" "}
							<span style={{ fontSize: "2rem", fontWeight: "4rem" }}>
								{" "}
								VENDOR{" "}
							</span>{" "}
						</Typography>
					</Grid>{" "}
					<Hidden mdDown>
						<Grid item container style={{ marginTop: "5em" }}>
							<Grid item style={{ marginLeft: "12em" }}>
								<Typography style={{ marginBottom: "1em" }} variant="h5">
									Step2
								</Typography>
								<Card
									style={{
										maxWidth: "9em",
										marginLeft: "0.3em",
										bottom: 0,
										backgroundColor: "grey",

										color: "white",
										width: "100%",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "50%",
										}}
										title="Update Profile"
									/>
									<Grid>
										<Grid align="center" style={{ padding: "1em" }}>
											<Typography
												variant="h6"
												style={{ color: "black" }}
												gutterBottom
											>
												Enter relevant details to fully setup your account
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
							<Grid item>
								<Typography style={{ marginBottom: "1em" }} variant="h5">
									Step3
								</Typography>
								<Card
									style={{
										maxWidth: "9em",
										marginLeft: "0.1em",
										bottom: 0,
										backgroundColor: "grey",

										color: "white",
										width: "100%",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "50%",
											fontSize: 800,
										}}
										title="Fund Wallet"
									/>
									<Grid>
										<Grid
											align="center"
											style={{ padding: "1em", paddingBottom: "2.1em" }}
										>
											<Typography variant="h6" color="white" gutterBottom>
												Fund your customized wallet
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
							<Grid item>
								<Typography style={{ marginBottom: "1em" }} variant="h5">
									Step4
								</Typography>
								<Card
									style={{
										maxWidth: "9em",
										marginLeft: "0.1em",
										bottom: 0,
										backgroundColor: "grey",

										color: "white",
										width: "100%",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "50%",
											fontSize: 800,
										}}
										title="Buy Vouchers"
									/>
									<Grid>
										<Grid
											align="center"
											style={{ padding: "0.4em", marginBottom: "1.2em" }}
										>
											<Typography variant="h6" color="white" gutterBottom>
												Select the voucher category, amount and units to
												distribute
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
							<Grid item>
								<Typography style={{ marginBottom: "1em" }} variant="h5">
									Step5
								</Typography>
								<Card
									style={{
										maxWidth: "9em",
										marginLeft: "0.1em",
										bottom: 0,
										backgroundColor: "grey",

										color: "white",
										width: "100%",
									}}
								>
									<CardHeader
										style={{
											backgroundColor: "grey",
											color: "black",
											width: "50%",
											textAlign: "center",
											fontSize: 800,
										}}
										title="Distribute Vouchers"
									/>
									<Grid>
										<Grid align="center" style={{ padding: "0.37em" }}>
											<Typography variant="h6" color="white" gutterBottom>
												Send your vouchers to individuls or groups
												<p style={{ fontSize: "0.55em", fontWeight: 200 }}>
													{" "}
													We can help to set up distribution to specific
													demography
												</p>
											</Typography>
										</Grid>
									</Grid>
								</Card>
							</Grid>
						</Grid>
					</Hidden>
					<Grid
						item
						style={{
							marginTop: "3em",
							marginLeft: matchesSM ? "-15em" : matchesMD ? "-18em" : "15em",
						}}
					>
						<Typography
							style={{
								fontSize: matchesSM ? "1rem" : undefined,
							}}
							variant="h4"
						>
							We also provide end-to-end account <br /> management solutions on
							request.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction="column" md={1}>
				<Grid
					item
					style={{
						marginTop: matchesSM ? "-15em" : undefined,
						marginLeft: matchesXS ? "25em" : matchesSM ? "35em" : "3em",
					}}
				>
					<IconButton
						style={{
							backgroundColor: "transparent",
							height: "2em",
							marginTop: "8em",
						}}
						component={Link}
						to="/howItWorks2"
						onClick={() => props.setSelectedIndex(0)}
					>
						<img src={forwardArrow} alt="Back To Services " />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
}
