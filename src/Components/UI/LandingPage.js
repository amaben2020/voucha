import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "../../Components/UI/061 ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../../Components/UI/CallToAction";
import Card from "@material-ui/core/Card";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import forwardArrow from "../../assets/forwardArrow.svg";
import Vouchaimg from "../../assets/Vouchaimg.png";
import low from "../../assets/low.png";
import safe from "../../assets/safe.png";
import valuebased from "../../assets/valuebased.png";
import socialimpact from "../../assets/social_impact.png";
import cardbg from "../../assets/cardsbg.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import Howitworksp1 from "../../assets/Howitworksp1.png";
import overhead from "../../assets/lowoverhead.png";
import anonymous from "../../assets/anonymous.png";
import accordion11 from "../../assets/accordion.png";
import plus from "../../assets/plus.png";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles((theme) => ({
	estimateButton: {
		...theme.typography.estimate,
		color: "#000",
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		cursor: "pointer",
		boxShadow: "1px 1px 5px rgba(0,0,0, 0.95)",
		height: 40,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	buttonContainer: {
		marginTop: "1em",
	},
	learnButtonHero: {
		...theme.typography.learnButton,
		fontSize: "0.9rem",
		height: 45,
		width: 145,
	},
	mainContainer: {
		//i removed marginTop of 5em
		[theme.breakpoints.down("md")]: {
			marginTop: 0,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 0,
		},
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",

		[theme.breakpoints.down("xs")]: {
			marginTop: "0",
		},
	},
	specialText: {
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	subtitle: {
		marginBottom: "1em",
	},
	icon: {
		marginLeft: "2em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: "12em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
	},
	revolutionBackground: {
		backgroundImage: `url(${revolutionBackground})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	kids: {
		backgroundImage: `url(${cardbg})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	about1: {
		backgroundImage: `url(${about1})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	kid: {
		background: "linear-gradient(#333399, #e66465, #9198e5, #333399, #333399 )",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			background:
				"linear-gradient(#333399, #e66465, #9198e5, #333399, #9198e5, #e66465 )",
		},
	},
	gradient1: {
		backgroundImage: `url(${accordion11})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},

	volutionBackground: {
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	revolutionCard: {
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "10em",
	},
	about2: {
		backgroundImage: `url(${about2})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	landingg: {
		backgroundImage: `url(${Vouchaimg})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
}));

const LandingPage = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXL = useMediaQuery(theme.breakpoints.down("lg"));
	//this enables the use of ternary to set conditions for screen

	const Button = require("@material-ui/core/Button").default;
	const [expanded, setExpanded] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const { loginWithRedirect, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		props.history.push("/donordashboard");
	}

	return (
		<Grid
			container
			direction="column"
			style={{ width: matchesXS ? "120%" : undefined }}
			className={classes.mainContainer}
		>
			<Grid item>
				<Grid
					className={classes.landingg}
					style={{
						height: matchesXS ? "62em" : matchesMD ? "70em" : "50em",
						marginTop: matchesXS ? "-15em" : undefined,
					}}
					container
					fullWidth
					justify="flex-end"
					alignItems="center"
					direction="column"
				>
					<Grid
						item
						sm
						className={classes.heroTextContainer}
						style={{
							marginTop: matchesSM ? "1em" : "4em",
						}}
					>
						<Typography align="center" variant="h2">
							A digital platform <br />
							for Transparent, Efficient <br />& Accountable giving
						</Typography>
						{/**** */}
						<Grid align="center" style={{ padding: "2em" }}>
							<Hidden xsDown>
								<Typography variant="h4">
									{" "}
									<li> Inspire Change </li>
								</Typography>
								<Typography variant="h4">
									{" "}
									<li> Invest in Individuals & Communities </li>
								</Typography>
								<Typography variant="h4">
									{" "}
									<li>Drive Economic Growth & Development</li>
								</Typography>{" "}
							</Hidden>
						</Grid>

						<Grid
							item
							align="center"
							style={{ padding: matchesMD ? "1em" : undefined }}
						>
							<Typography variant="h5" style={{ color: "#fff" }}>
								{" "}
								<span> Voucha</span> is an innovative digital platform that
								gives everyone the opportunity to
								<br /> provide (subsidies, food, groceries and specific items to
								targeted individuals or groups)
								<br /> without worrying about the logistics to do so.
							</Typography>
						</Grid>
						<Grid
							justify="center"
							className={classes.buttonContainer}
							style={{
								marginBottom: matchesMD ? "3em" : "3em",
								paddingBottom: "1em",
							}}
						>
							<Grid item align="center">
								<Button
									style={{ backgroundColor: "#FFF212" }}
									onClick={() => props.setValue(6)}
									component={Link}
									to="/signup"
									variant="contained"
									className={classes.estimateButton}
								>
									{" "}
									GET STARTED
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/*-----ABOUT 1-----*/}
			<Grid item container direction={matchesSM ? "column" : "row"}>
				<Grid
					item
					container
					direction="column"
					style={{
						height: "60em",
						minWidth: matchesXS ? "33.5em" : undefined,
					}}
					lg={6}
					className={classes.about1}
				>
					<Grid
						item
						style={{
							padding: matchesXS ? "2em" : matchesMD ? "3em" : "3em",
							marginTop: matchesXS ? "2em" : matchesMD ? "3em" : "3em",
						}}
					>
						<Typography variant="h2">About Us</Typography>
						<Grid item>
							<Grid item direction="column">
								<Grid item>
									<Grid item style={{ marginBottom: "3em" }}></Grid>
									<Accordion
										expanded={expanded === "panel1"}
										onChange={handleChange("panel1")}
									>
										<AccordionSummary
											aria-controls="panel1bh-content"
											id="panel1"
											expandIcon={
												<ButtonArrow
													height={20}
													width={20}
													fill={theme.palette.common.orange}
												/>
											}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<Typography className={classes.heading}>
												Overview
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography style={{ color: "#868686" }}>
												<span style={{ fontWeight: 900 }}>Voucha</span> is a
												simple and secure collaborative platform that helps you
												convinently provide financial subsidy and donations in
												the form of digital vouchers, gift cards and
												disbursements to individuals, groups and communities of
												interest. <br />
												Whether as a business or individual, <span>
													Voucha
												</span>{" "}
												provides end-to-end and personalized giving experience
												that delivers financial and social value in an
												interactive, intuitive and integrated manner.
											</Typography>
										</AccordionDetails>
									</Accordion>
									<Accordion
										expanded={expanded === "panel2"}
										onChange={handleChange("panel2")}
									>
										<AccordionSummary
											aria-controls="panel2bh-content"
											id="panel2bh-header"
											expandIcon={
												<ButtonArrow
													height={20}
													width={20}
													fill={theme.palette.common.orange}
												/>
											}
										>
											<Typography className={classes.heading}>
												Benefit
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography style={{ color: "#868686" }}>
												The platform offers you the opportunity to channel your
												social investments and donations to vetted recipients
												without undergoing the conventional hassle of running
												donation programs. <br />
												Through this platform, you: <br />
												<ul>
													<li>
														Improve the livelihood of individuals, families and
														communities
													</li>
													<li>
														Strengthen economic profiles of communities as they
														are involved in generating the services for which
														the vouchers seek to provide
													</li>
													<li>
														Benefit from lower operational overhead usually
														associated with donation programs so your investment
														actually goes into doing more good{" "}
													</li>{" "}
												</ul>
											</Typography>
										</AccordionDetails>
									</Accordion>
									<Accordion
										expanded={expanded === "panel3"}
										onChange={handleChange("panel3")}
									>
										<AccordionSummary
											expandIcon={
												<ButtonArrow
													height={20}
													width={20}
													fill={theme.palette.common.orange}
												/>
											}
											aria-controls="panel3a-content"
											id="panel3a-header"
										>
											<Typography className={classes.heading}>
												Our Value Promise
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography style={{ color: "#868686" }}>
												We offer various types of donation vouchers which can be
												redeemed through our network of providers. <br />
												You can give from any part of the world and on the go
												targeting individuals and communities in Nigeria. <br />
												All transactions are transparent and secured from
												end-to-end.
											</Typography>
										</AccordionDetails>
									</Accordion>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/******ABOUT 2 */}
				<Grid
					item
					container
					direction="column"
					lg={6}
					style={{ height: "60em", minWidth: matchesXS ? "33.5em" : undefined }}
					className={classes.about2}
				>
					<Grid
						item
						align="center"
						justify="center"
						style={{
							minWidth: matchesXS ? "33.5em" : undefined,
							padding: matchesMD ? "3em" : "5em",
							marginTop: matchesMD ? "15em" : "20em",
							maxWidth: matchesMD ? "95em" : "95em",
						}}
					>
						<Typography variant="h4">
							Our mission is to foster transparent and collaborative giving that
							empowers individuals and communities.
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			{/**<Grid item style={{ marginBottom: "-15em" }}>
				<CustomSoftware setValue={props.setValue} />
							</Grid>**/}

			{/***WHY Voucha */}

			<Grid
				item
				container
				style={{
					height: matchesSM ? "120em" : matchesMD ? "80em" : "60em",
					minWidth: matchesXS ? "33.5em" : undefined,
				}}
				className={classes.kids}
			>
				<Grid
					item
					container
					direction="column"
					style={{
						marginLeft: matchesXS
							? "4em"
							: matchesSM
							? "6em"
							: matchesMD
							? "6em"
							: undefined,
					}}
				>
					<Grid
						item
						style={{
							marginLeft: "7em",
							marginRight: "3em",
							marginTop: matchesSM ? "1em" : "1.9em",
							paddingTop: matchesXL ? "7em" : undefined,
						}}
					>
						<Typography
							style={{
								marginRight: matchesXS ? "1.5em" : undefined,
							}}
							variant="h2"
						>
							Why Voucha?{" "}
						</Typography>
					</Grid>
					<Grid item container>
						<Grid
							item
							style={{
								marginLeft: matchesMD ? "0.4em" : "7em",
								marginTop: "1em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",
									bottom: 0,
									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="low sign 3"
										src={low}
										style={{ maxWidth: "20em", maxHeight: "20em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											variant="h5"
											style={{ color: "white" }}
											gutterBottom
										>
											You can send multiple vouchers of whatever amount and
											volume, to countless number of recipient at one click
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
						<Grid
							item
							style={{
								marginLeft: matchesMD ? "1em" : "3em",
								marginTop: "1em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",
									bottom: 0,

									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="social impact"
										src={socialimpact}
										style={{ maxWidth: "20em", height: "3.9em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "0.2em" }}>
										<Typography
											variant="h5"
											style={{ color: "white" }}
											gutterBottom
										>
											We are a conduit for social impact by helping you empower
											communities with the flexibility to meet their specific
											need in a replicable and scalable manner
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
						<Grid
							item
							style={{
								marginLeft: matchesMD ? "1em" : "3em",
								marginTop: "1em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",
									bottom: 0,

									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="value based"
										src={valuebased}
										style={{ width: "20em", height: "3em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											variant="h5"
											style={{ color: "white" }}
											gutterBottom
										>
											We apply a value-driven approach that puts the individuals
											and communities at the center and you in charge
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
					<Grid item container>
						<Grid
							item
							style={{
								marginLeft: matchesMD ? "1em" : "7em",
								marginTop: "3em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",

									bottom: 0,

									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="overhead 2"
										src={overhead}
										style={{ maxWidth: "20em", maxHeight: "20em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											variant="h5"
											style={{ color: "white" }}
											gutterBottom
										>
											We save you the stress and hassle in exchange for a small
											fee, while all your funds reach target beneficiaries as
											intended
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
						<Grid
							item
							style={{
								marginLeft: matchesMD ? "1em" : "3em",
								marginTop: "3em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",

									bottom: 0,

									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="safe"
										src={safe}
										style={{ maxWidth: "20em", height: "4.2em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											variant="h5"
											style={{ color: "white" }}
											gutterBottom
										>
											We remove the guess work in philanthropy and put you in
											control. You can be sure that your funds go towards the
											specific cause intended
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>

						<Grid
							item
							style={{
								marginLeft: matchesMD ? "1em" : "3em",
								marginTop: "3em",
							}}
						>
							<Card
								style={{
									maxWidth: "20em",

									bottom: 0,

									background: "rgba(0, 0, 0, 0.1)",
									color: "white",
									width: "100%",
								}}
							>
								<Grid item>
									<img
										alt="anonymous"
										src={anonymous}
										style={{ maxWidth: "20em", height: "4.2em" }}
									/>
								</Grid>
								<Grid>
									<Grid align="center" style={{ padding: "1em" }}>
										<Typography
											variant="h5"
											style={{ paddingBottom: "1.5em", color: "white" }}
											gutterBottom
										>
											We've got you covered, whether you choose to give
											anonymously or generate customized vouchers
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/**HOW IT WORKS SECTION */}
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
					<Grid item style={{ marginLeft: matchesXS ? "1.8em" : "3em" }}>
						<Typography
							style={{ marginLeft: "1em", marginTop: "3em", padding: "1em" }}
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
								We also provide end-to-end account <br /> management solutions
								on request.
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

			{/*-----FAQ-----*/}
			<Grid
				item
				container
				className={classes.gradient1}
				style={{ height: "60em", minWidth: matchesXS ? "33.5em" : undefined }}
				alignItems="center"
			>
				<Grid item direction="column">
					<Grid
						item
						style={{
							marginLeft: matchesMD ? 25 : "10em",
							marginRight: matchesMD ? 25 : "10em",
						}}
					>
						<Grid item align="center" style={{ marginBottom: "3em" }}>
							<Typography
								style={{ color: "white", fontWeight: 700, fontSize: "3em" }}
							>
								Frequently Asked Questions
							</Typography>
						</Grid>
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleChange("panel1")}
						>
							<AccordionSummary
								expandIcon={
									<img alt="plus 3" src={plus} style={{ height: "0.7em" }} />
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={classes.heading}>
									How can I join?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									Simply create an account, update your profile and the rest is
									up to you
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel2"}
							onChange={handleChange("panel2")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography className={classes.heading}>
									What is the Maximum and Minimum transaction amount?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									You can send multiple vouchers of whatever amount and volume,
									to countless number of recipients at once with a single click.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel3"}
							onChange={handleChange("panel3")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel3a-content"
								id="panel3a-header"
							>
								<Typography className={classes.heading}>
									How much is a voucher unit worth and what does it cover?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									You can determine what each voucher would cost, you are
									entirely in control. You can generate multiple vouchers with
									varying value.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel4"}
							onChange={handleChange("panel4")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel4a-content"
								id="panel4a-header"
							>
								<Typography className={classes.heading}>
									How is the impact of my voucher captured
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									The value of your donation is reported both in financial and
									social value including lives reached and communities
									empowered.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel5"}
							onChange={handleChange("panel5")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel5a-content"
								id="panel5a-header"
							>
								<Typography className={classes.heading}>
									Do I pay any service charge?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									Yes, Voucha charges a small administrative fee which helps
									keep our operations running to impact more lives.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel6"}
							onChange={handleChange("panel6")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel6a-content"
								id="panel6a-header"
							>
								<Typography className={classes.heading}>
									What are the benefits of using Voucha?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									Apart from giving to empower communities, you can generate
									gifts certificates with which you can file relevant
									administrative tax refunds and document to your stakeholder.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel7"}
							onChange={handleChange("panel7")}
						>
							<AccordionSummary
								expandIcon={
									<img
										alt="plus sign 2"
										src={plus}
										style={{ height: "0.7em" }}
									/>
								}
								aria-controls="panel7a-content"
								id="panel7a-header"
							>
								<Typography className={classes.heading}>
									Do I get a detailed report?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ color: "#868686" }}>
									Yes, we can generate a financial and social impact report
									which is sent to your email.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
};

export default LandingPage;
