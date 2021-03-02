import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import seo from "../../assets/seo.svg";
import analytics from "../../assets/analytics.svg";
import outreach from "../../assets/outreach.svg";
import Hidden from "@material-ui/core/Hidden";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonArrow from "../UI/061 ButtonArrow";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import ecommerce from "../../assets/ecommerce.svg";

const initialState = {
	post: {},
	error: "",
	loading: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				post: action.payload,
				error: "",
				loading: false,
			};
		case "FETCH_ERROR":
			return {
				post: {},
				error: "SOMETHING WENT WRONG",
				loading: false,
			};
		default:
			return initialState;
	}
};

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},

	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
	},

	paragraphContainer: {
		maxWidth: "30em",
	},
	button: {
		backgroundColor: theme.palette.common.orange,
		"&:hover": {
			backgroundColor: theme.palette.common.blue,
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
	revolutionCard: {
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "10em",
	},
}));

function WebsiteDevelopment(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [id, setId] = useState(1);
	const [fetchId, setFetchId] = useState(1);
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
			.then((response) => {
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_ERROR", payload: {} });
			});
	}, [fetchId]);

	const fetchAmabenData = () => {
		setFetchId(id);
	};

	return (
		<Grid container direction="column">
			<Grid
				item
				container
				direction="row"
				className={classes.rowContainer}
				alignItems={matchesMD ? "center" : undefined}
				style={{ marginTop: matchesXS ? "1em" : "2em" }}
				justify={matchesMD ? "center" : undefined}
			>
				<Hidden mdDown>
					<Grid
						item
						className={classes.arrowContainer}
						style={{ marginRight: "1em", marginLeft: "-3.5em" }}
					>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							to="/mobileapps"
							onClick={() => props.setSelectedIndex(1)}
						>
							<img
								src={backArrow}
								alt="CBack to iOS and Android Application "
							/>
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography align={matchesMD ? "center" : undefined} variant="h2">
							iOS/Android App Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Mobile apps allow you to take your tools on the go.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Whether you want an app for your customers, employees, or
							yourself, we can build cross-platform native solutions for any
							part of your business process. This opens you up to a whole new
							world of possibilities by taking advantage of phone features like
							the camera, GPS, push notifications, and more.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Convenience. Connection.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							to="/training"
							onClick={() => props.setSelectedIndex(3)}
						>
							<img src={forwardArrow} alt="Training" />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid
				item
				justify="flex-end"
				container
				style={{
					marginTop: "10em",
					marginBottom: matchesSM ? "3em" : undefined,
				}}
				direction={matchesSM ? "column" : "row"}
				alignItems="center"
				className={classes.rowContainer}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								align={matchesSM ? "center" : undefined}
								variant="h4"
								gutterBottom
							>
								{" "}
								Analytics
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={analytics}
								style={{ marginLeft: "-2.75em" }}
								alt="Graph with magnifying glass "
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}>
					<Typography align={matchesSM ? "center" : undefined} variant="body1">
						Knowledge is power, and data is 21st Century gold. Analyzing this
						data can reveal hidden patterns and trends in your business,
						empowering you to make smarter decisions with measurable effects.
					</Typography>
				</Grid>
			</Grid>
			{/** //API BASED PROJECTS */}

			<Grid item style={{ marginTop: 0 }}>
				<Grid
					className={classes.revo}
					container
					direction={matchesSM ? "column" : "row"}
					alignItems="center"
					justify="center"
					style={{
						height: "70em",
						marginTop: "2em",
					}}
				>
					<Card className={classes.revolutionCard}>
						<CardContent>
							<Grid
								container
								direction="column"
								style={{
									textAlign: "center",
								}}
							>
								<Grid
									item
									style={{ minWidth: matchesSM ? "11em" : undefined }}
									align={matchesSM ? "center" : undefined}
								>
									<Typography variant="h3" gutterBottom>
										Excellent With Handling API Based Projects
									</Typography>
								</Grid>
								<Grid item>
									<input
										placeholder="Input Random Number"
										type="text"
										onChange={(e) => setId(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
									<Button className={classes.button} onClick={fetchAmabenData}>
										{" "}
										FETCH DATA
									</Button>
								</Grid>
								<Grid item align="center">
									<Typography
										variant="body1"
										style={{
											maxWidth: "20em",
											color: theme.palette.common.blue,
										}}
									>
										{" "}
										{state.loading ? "Please Wait..." : state.post.title}{" "}
									</Typography>
								</Grid>
								<Grid align="center">
									<Typography
										variant="body1"
										paragraph
										style={{
											maxWidth: "18em",
											color: theme.palette.common.orange,
										}}
									>
										{" "}
										{state.loading ? "Please Wait..." : state.post.body}
									</Typography>
								</Grid>
								<Grid align="center">
									<Typography
										variant="body1"
										paragraph
										style={{
											maxWidth: "18em",
											color: theme.palette.common.orange,
										}}
									>
										{" "}
										{state.error ? state.error : null}
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>{" "}
					<div className={classes.revolutionBackground} />
				</Grid>
			</Grid>
			<Grid
				style={{ marginTop: "5em", marginBottom: "5em" }}
				item
				container
				direction={matchesSM ? "column" : "row"}
				justify="flex-end"
				alignItems="center"
				className={classes.rowContainer}
			>
				<Grid item style={{ marginBottom: "10em" }}>
					<Grid container direction="column">
						<Grid item>
							<Typography align="center" variant="h4" gutterBottom>
								{" "}
								E - Commerce
							</Typography>
						</Grid>
						<Grid item>
							<img src={ecommerce} alt="World Outline Made of Dollar Sign " />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					style={{
						marginLeft: matchesSM ? 0 : "1em",
						marginTop: matchesSM ? "-9em" : undefined,
						marginBottom: matchesSM ? "1em" : undefined,
					}}
					align={matchesSM ? "center" : undefined}
				>
					<Typography className={classes.paragraphContainer} variant="body1">
						It’s no secret that people like to shop online.
					</Typography>
					<Grid item style={{ marginTop: "1em" }}>
						<Typography className={classes.paragraphContainer} variant="body1">
							In 2017 over $2.3 trillion was spent in e-commerce,
							<br /> and it’s time for your slice of that pie.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction={matchesSM ? "column" : "row"}
				alignItems="center"
				className={classes.rowContainer}
			>
				<Grid
					item
					style={{
						marginBottom: matchesSM ? 0 : "10em",
						marginTop: matchesSM ? "4em" : undefined,
					}}
				>
					<Grid container direction="column">
						<Grid item>
							<Typography
								align={matchesSM ? "center" : undefined}
								variant="h4"
								gutterBottom
							>
								{" "}
								Outreach
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={outreach}
								style={{ marginLeft: matchesSM ? 0 : "-2.75em" }}
								alt="Graph with magnifying glass "
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					style={{
						marginLeft: matchesSM ? 0 : "1em",
						marginBottom: matchesSM ? "12em" : undefined,
					}}
				>
					<Typography
						align={matchesSM ? "center" : undefined}
						className={classes.paragraphContainer}
						variant="body1"
					>
						Draw people in with a dazzling website. Showing off your products
						online is a great way to help customers decide what’s right for them
						before visiting in person.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				justify="flex-end"
				container
				direction={matchesSM ? "column" : "row"}
				alignItems="center"
				className={classes.rowContainer}
			>
				<Grid item style={{ marginBottom: "10em" }}>
					<Grid container direction="column">
						<Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }}>
							<Typography
								align={matchesSM ? "center" : undefined}
								variant="h4"
								gutterBottom
							>
								{" "}
								Search Engine
							</Typography>
						</Grid>
						<Grid item>
							<img src={seo} alt="Website standing on winner's podium" />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					style={{
						marginLeft: matchesSM ? 0 : "1em",
						marginTop: matchesSM ? "-9em" : undefined,
						marginBottom: matchesSM ? "9em" : undefined,
					}}
				>
					<Typography
						align={matchesSM ? "center" : undefined}
						className={classes.paragraphContainer}
						variant="body1"
					>
						How often have you ever been to the second page of Google results?
					</Typography>
					<Typography
						align={matchesSM ? "center" : undefined}
						className={classes.paragraphContainer}
						variant="body1"
					>
						If you’re like us, probably never.
					</Typography>
					<Typography
						align={matchesSM ? "center" : undefined}
						className={classes.paragraphContainer}
						variant="body1"
					>
						{" "}
						Customers don’t go there either, so we make sure your website is
						designed to end up on top.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default WebsiteDevelopment;
