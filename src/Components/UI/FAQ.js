import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import background from "../../assets/background.jpg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Vouchaimg from "../../assets/Vouchaimg.png";
import cardbg from "../../assets/cardsbg.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import plus from "../../assets/plus.png";
import accordion11 from "../../assets/accordion.png";
const useStyles = makeStyles((theme) => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em",
		},
	},

	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 55,
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
	gradient1: {
		backgroundImage: `url(${accordion11})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
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
		background: "linear-gradient(#e66465, #9198e5)",

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

const FAQ = (props) => {
	const classes = useStyles();
	const theme = useTheme();

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	//this enables the use of ternary to set conditions for screen

	const [expanded, setExpanded] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
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
								<img alt="plus sign" src={plus} style={{ height: "0.7em" }} />
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
								Simply create an account, update your profile and the rest is up
								to you
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign2" src={plus} style={{ height: "0.7em" }} />
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
								You can send multiple vouchers of whatever amount and volume, to
								countless number of recipients at once with a single click.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign 3" src={plus} style={{ height: "0.7em" }} />
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
								You can determine what each voucher would cost, you are entirely
								in control. You can generate multiple vouchers with varying
								value.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel4"}
						onChange={handleChange("panel4")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign 4" src={plus} style={{ height: "0.7em" }} />
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
								social value including lives reached and communities empowered.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel5"}
						onChange={handleChange("panel5")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign 4" src={plus} style={{ height: "0.7em" }} />
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
								Yes, Voucha charges a small administrative fee which helps keep
								our operations running to impact more lives.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel6"}
						onChange={handleChange("panel6")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign 5" src={plus} style={{ height: "0.7em" }} />
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
								Apart from giving to empower communities, you can generate gifts
								certificates with which you can file relevant administrative tax
								refunds and document to your stakeholder.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel7"}
						onChange={handleChange("panel7")}
					>
						<AccordionSummary
							expandIcon={
								<img alt="plus sign 7" src={plus} style={{ height: "0.7em" }} />
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
								Yes, we can generate a financial and social impact report which
								is sent to your email.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FAQ;
