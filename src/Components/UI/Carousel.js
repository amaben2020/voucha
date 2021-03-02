import React from "react";
import Carousel from "react-elastic-carousel";
import "./styles.css";
import CarouselCard from "../UI/CarouselCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core";
import pup from "./../../assets/puppy.svg";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

function Carousell() {
	const breakpoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];

	const letter = { a: "amara" };

	return (
		<div className="App">
			<Carousel breakpoints={breakpoints}>
				<CarouselCard letter="amara" />

				<CarouselCard number="2" />
				<CarouselCard number="3" />
				<CarouselCard number="4" />
				<CarouselCard number="5" />
				<CarouselCard number="6" />
				<CarouselCard number="7" />
				<CarouselCard number="8" />
			</Carousel>
		</div>
	);
}

export default Carousell;

{
	/******   <Grid item style={{ position: "relative", width: "100%", height: 500 }}>
	<Carousell />
</Grid>;

<Grid item>
	<div style={{ position: "relative", width: "100%", height: 500 }}>
		<Button onClick={() => setState({ open: true })}>Open carousel</Button>
		<AutoRotatingCarousel
			label="Get started"
			open={state.open}
			onClose={() => setState({ open: false })}
			onStart={() => setState({ open: false })}
			mobile
			autoplay={false}
			style={{ position: "absolute" }}
		>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: "red" }}
				style={{ backgroundColor: "red" }}
				title="1 This is a very cool feature"
				subtitle="Just using this will blow your mind."
			/>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: blue[400] }}
				style={{ backgroundColor: blue[600] }}
				title="2 Ever wanted to be popular?"
				subtitle="Well just mix two colors and your are good to go!"
			/>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: green[400] }}
				style={{ backgroundColor: green[600] }}
				title="3 May the force be with you"
				subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
			/>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: "green" }}
				style={{ backgroundColor: "green" }}
				title="4 May the force be with you"
				subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
			/>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: "green" }}
				style={{ backgroundColor: "green" }}
				title="5 May the force be with you"
				subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
			/>
			<Slide
				media={
					<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
				}
				mediaBackgroundStyle={{ backgroundColor: "green" }}
				style={{ backgroundColor: "green" }}
				title="6 May the force be with you"
				subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
			/>
		</AutoRotatingCarousel>
	</div>
</Grid>;
   */
}
