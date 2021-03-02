import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import vision from "../../assets/vision.svg";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import technologyAnimation from "../../animations/technologyAnimation/data.json";
import consultation from "../../assets/consultationIcon.svg";
import mockup from "../../assets/mockupIcon.svg";
import review from "../../assets/reviewIcon.svg";
import design from "../../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/svgs/launch.png";
import maintain from "../../assets/maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../UI/CallToAction";

const useStyles = makeStyles((theme) => ({
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
	},
}));

export default function Revolution(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: technologyAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid direction="column">
			<Grid item className={classes.rowContainer}>
				<Typography
					align={matchesMD ? "center" : undefined}
					variant="h2"
					style={{
						fontFamily: "pacifico",
						marginBottom: matchesMD ? "2em" : undefined,
					}}
				>
					The Revolution
				</Typography>
			</Grid>
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				className={classes.rowContainer}
				alignItems="center"
			>
				<Grid item lg>
					<img
						style={{
							maxWidth: matchesSM ? 300 : "40em",
							marginRight: "5em",
							marginBottom: matchesMD ? "3em" : 0,
						}}
						src={vision}
						alt="Mountain through Binoculars"
					/>
				</Grid>
				<Grid
					item
					container
					direction="column"
					lg
					style={{ maxWidth: "40em", marginRight: "5em" }}
				>
					<Grid item>
						<Typography
							style={{ marginTop: "5em" }}
							align={matchesMD ? "center" : "right"}
							variant="h4"
							gutterBottom
						>
							Vision
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : "right"}
							variant="body1"
							gutterBottom
						>
							The rise of computers, and subsequently the Internet, has
							completely altered every aspect of human life. This has increased
							our comfort, broadened our connections, and reshaped how we view
							the world
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							variant="body1"
							gutterBottom
						>
							What once was confined to huge rooms and teams of engineers now
							resides in every single one of our hands. Harnessing this
							unlimited potential by using it to solve problems and better lives
							is at the heart of everything we do.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							variant="body1"
							gutterBottom
						>
							We want to help businesses capitalize on the latest and greatest
							technology. The best way to predict the future is to be the one
							building it, and we want to help guide the world into this next
							chapter of technological expansion, exploration, and innovation.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							variant="body1"
							gutterBottom
						>
							By holding ourselves to rigorous standards and pristine quality,
							we can ensure you have the absolute best tools necessary to thrive
							in this new frontier.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							variant="body1"
							gutterBottom
						>
							We see a future where every individual has personalized software
							custom tailored to their lifestyle, culture, and interests,
							helping them overcome life’s obstacles. Each project is a step
							towards that
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				style={{ marginTop: "10em", marginBottom: "10em" }}
				className={classes.rowContainer}
				alignItems="center"
			>
				<Grid
					item
					container
					direction="column"
					lg
					style={{ maxWidth: "40em", marginRight: "5em" }}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
						>
							Technology
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							In 2013, Facebook invented a new way of building websites. This
							new system, React.js, completely revolutionizes the process and
							practice of website development.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							Instead of chaining together long individual pages, like
							traditional websites, React websites are built with little chunks
							of code called components. These components are faster, easier to
							maintain, and are easily reused and customized, each serving a
							singular purpose.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							Two years later they shocked the world by releasing a similar
							system, React Native, for producing iOS and Android apps. Instead
							of having to master two completely separate development platforms,
							you can leverage the knowledge you already possessed from building
							websites and reapply it directly! This was a huge leap forward.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							This technology is now being used by companies like AirBnB,
							Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
							Facebook purchased Instagram large portions of it were even
							rebuilt using React.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							Developers have since built on top of these systems by automating
							project setup and deployment, allowing creators to focus as much
							as possible on their work itself.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							These technical advancements translate into savings by
							significantly reducing the workload and streamlining the workflow
							for developing new pieces of software, while also lowering the
							barrier to entry for mobile app development.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							gutterBottom
						>
							This puts personalization in your pocket — faster, better, and
							more affordable than ever before.
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg justify={matchesMD ? "center" : "flex-end"}>
					<Lottie
						width="100%"
						align={matchesSM ? "center" : undefined}
						style={{ maxWidth: matchesMD ? "20em" : "40em", margin: 0 }}
						options={defaultOptions}
					/>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction="row"
				justify="center"
				className={classes.rowContainer}
			>
				<Grid item>
					<Typography variant="h4" gutterBottom>
						Process
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#b3b3b3", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					alignItems={matchesMD ? "center" : undefined}
					lg
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Consultation
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Our process begins the moment you realize you need a piece of
								technology for your business. Whether you already have an idea
								for where to start and what to do, or if you just know you want
								to step things up, our initial consultation will help you
								examine your business holistically to find the best solutions.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Detailed notes will be taken on your requirements and
								constraints, while taking care to identify other potential areas
								for consideration.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Cutting-edge advancements in machine learning like object
								detection and natural language processing allow computers to do
								things previously unimaginable, and our expertise and intuition
								will help usher you into this new future of possibilities.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						src={consultation}
						width="100%"
						style={{ maxWidth: matchesMD ? 400 : 600 }}
						alt="handshake"
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#ff7373", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Mockup
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								After we settle on the best path forward and decide on a
								solution to pursue, details like the cost and timeline will be
								finalized.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Then it’s time for us to start on your minimum viable product.
								That’s just a fancy term for a mockup, which doesn’t include
								colors, images, or any other polished design elements, but
								captures the essential layout structure and functionality.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Cutting-edge advancements in machine learning like object
								detection and natural language processing allow computers to do
								things previously unimaginable, and our expertise and intuition
								will help usher you into this new future of possibilities.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						src={mockup}
						width="100%"
						alt="handshake"
						style={{ maxWidth: matchesMD ? 500 : 1000 }}
					/>
				</Grid>
			</Grid>
			<Grid
				align={matchesMD ? "center" : undefined}
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#39b54a", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Review
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								A second round of review is essential to our goal of creating
								exactly what you want, exactly how you want it.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								This time we’ll be going over the finalized designs in another
								fully interactive demonstration. Again this gives you an
								opportunity to tweak things and make sure we get everything
								right the first time.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						src={review}
						alt="handshake"
						width="100%"
						style={{ maxWidth: matchesMD ? 400 : 700 }}
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#967c52", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Design
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Using the mockups and notes taken during the consultation as
								guides, we will start ironing out what the final product will
								look like. This also involves using any brand material like
								fonts, colors, and logos to extend the experience you’re already
								familiar with.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								No aspect is superfluous, and care will be taken with every
								decision.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						style={{ maxWidth: matchesMD ? 500 : 1000 }}
						src={design}
						width="100%"
						alt="handshake"
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#fbb03b", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Build
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Here’s where we get down to business.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Engineering begins after your approval on the final designs. We
								start by scaffolding out the project on a high level,
								prioritizing some areas over others.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Each area is then developed in order of importance until ready
								to be connected to the next piece.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Typically the backend, behind the scenes operations are
								completed first. Once all the services are in place we can then
								create the front end, user side of things.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Finishing the application doesn’t mean we’re done though,
								because we use extensive testing to guarantee compatibility with
								all intended devices.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Only after our rigorous examinations will we accept a product as
								finished, then pushing it through the production pipeline. This
								produces an optimized, compressed, consumer version of the code
								and assets ready for deployment.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						src={build}
						width="100%"
						style={{ maxWidth: matchesMD ? 400 : 1000 }}
						alt="handshake"
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#c1272d", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Launch
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								The moment we’ve all been waiting for.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								When construction comes to a close you’re the first one to know.
								We’ll give our final demonstration to show off your shiny new
								software in the wild so you know exactly how it will look to
								your users.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								When you say the word, we press the button and launch your
								project out to the public. We’re there to ensure everything goes
								to plan so you can start reaping the rewards of your
								technological investment immediately.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						src={launch}
						style={{ maxWidth: matchesMD ? 400 : 700 }}
						alt="handshake"
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#8e45ce", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Maintain
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Our work doesn’t end there.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								After a successful launch we keep in close contact to listen to
								feedback and hear how the project is being received.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								From there on out we make sure your application is kept up to
								date and taking advantage of the best features and practices
								available. When new developments arise or new techniques are
								discovered in future projects, we will implement those
								advancements in your project as part of our routine maintenance.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img
						width="100%"
						style={{ maxWidth: matchesMD ? 500 : 1000 }}
						src={maintain}
						alt="handshake"
					/>
				</Grid>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				container
				style={{ backgroundColor: "#29abe2", height: "90em" }}
				direction={matchesMD ? "column" : "row"}
			>
				<Grid
					item
					container
					direction="column"
					lg
					alignItems={matchesMD ? "center" : undefined}
				>
					<Grid item align={matchesMD ? "center" : undefined}>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="h4"
							gutterBottom
							style={{ marginTop: "5em", color: "#000" }}
						>
							Iterate
						</Typography>
						<Grid item align={matchesMD ? "center" : undefined}>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								The cycle repeats whenever you come up with a new idea for
								extending your current project, or come up with a brand new
								system entirely.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								By planning for future features and changes we can build and
								evolve your application over time. As new use cases and customer
								needs develop we can respond with continuous integration of new
								content.
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="body1"
								style={{ maxWidth: "20em", color: "#fff" }}
								gutterBottom
							>
								Our iterative process will keep you current and competitive,
								allowing you to quickly implement changes instead of waiting
								months for a single update.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg style={{ alignSelf: "center" }}>
					<img src={iterate} alt="handshake" width="100%" />
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
}
