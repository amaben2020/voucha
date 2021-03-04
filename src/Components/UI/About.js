import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import about1 from "../../assets/about1.png";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
	AccordionDetails,
	AccordionSummary,
	Accordion,
} from "@material-ui/core";
import about2 from "../../assets/about2.png";
import ButtonArrow from "../../Components/UI/061 ButtonArrow";
const useStyles = makeStyles((theme) => ({
	missionStatement: {
		fontWeight: 300,
		fontStyle: "italic",
		fontSize: "1.5em",
		maxWidth: "50em",
		lineHeight: 1.4,
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
		background: "linear-gradient(#e66465, #9198e5)",

		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	gradient1: {
		background: "linear-gradient(#e66465, #9198e5)",

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

	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",

		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
	},
	avatar: {
		height: "25em",
		width: "25em",
		[theme.breakpoints.down("sm")]: {
			maxWidth: 300,
			maxHeight: 300,
		},
	},
}));

export default function About(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	const [expanded, setExpanded] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
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
											convinently provide financial subsidy and donations in the
											form of digital vouchers, gift cards and disbursements to
											individuals, groups and communities of interest. <br />
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
										<Typography className={classes.heading}>Benefit</Typography>
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
													are involved in generating the services for which the
													vouchers seek to provide
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
	);
}
