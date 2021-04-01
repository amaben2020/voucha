import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/voucha_logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid, Typography } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import JSONpretty from "react-json-pretty";
import StarIcon from "@material-ui/icons/Star";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//This is the elevation scroll function
function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

//using the makeStyles component in useStyles()

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "1em", //pushes it below the logo
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
			marginTop: "1em",
		},
	},
	logo: {
		height: "4em",

		marginLeft: "1em",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},

	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		fontSize: "0.777rem",
		width: "115px",
		marginLeft: "90px",
		cursor: "pointer",
		boxShadow: "1px 1px 5px rgba(0,0,0, 0.75)",
		border: "1px solid #fff",
		marginRight: "50px",
		height: "45px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	menu: {
		background: theme.palette.common.blue,
		color: "white",
		borderRadius: 1,
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: "1",
		},
	},
	drawerIcon: {
		height: "50px",
		width: "50px",
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawer: { backgroundColor: theme.palette.common.blue },
	drawerItem: {
		...theme.typography.tab,
		color: "black", //drawer font
		opacity: 0.7,
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
	},
	drawerItemSelected: {
		...theme.typography.tab,
		"& .MuiListItemText-root": {
			opacity: 1, //root classe with opacity of 1
		},
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
}));

//we then use the elevationScroll function in MaterialUI
function Header(props) {
	const { logout, isAuthenticated, user } = useAuth0();
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

	const [anchorEl, setAnchorEl] = useState(null);

	const ITEM_HEIGHT = 48;

	const open = Boolean(anchorEl);
	const [openMenu, setOpenMenu] = useState(false);

	const [openDrawer, setOpenDrawer] = useState(false);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	};
	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	};

	//when you hover on services
	const menuOptions = [
		{ name: "HOME", link: "/", activeIndex: 1, selectedIndex: 0 },
		{
			name: " ABOUT US",
			link: "/about-us",
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: "WHY VOUCHA",
			link: "/why-voucha",
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: "HOW IT  WORKS",
			link: "/howitworks",
			activeIndex: 1,
			selectedIndex: 3,
		},
		{
			name: "FAQ",
			link: "/faq",
			activeIndex: 1,
			selectedIndex: 4,
		},
	];

	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },

		{ name: "Why Voucha", link: "/why-voucha", activeIndex: 2 },
		{ name: "About Us", link: "/about-us", activeIndex: 3 },
		{ name: "How It Works", link: "/howitworks1", activeIndex: 4 },
		{ name: "FAQ", link: "/faq", activeIndex: 5 },
		{ name: "Help Desk", link: "/blog", activeIndex: 5 },
	];

	const tabs = (
		<React.Fragment>
			<IconButton
				style={{ color: "blue", marginLeft: "2em", paddingTop: "1em" }}
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onMouseOver={(event) => handleClick(event)}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "20ch",
					},
				}}
			>
				{menuOptions.map((option) => (
					<MenuItem
						key={option}
						selected={option === "Pyxis"}
						onClick={handleClose}
					></MenuItem>
				))}
			</Menu>

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={openMenu}
				onClose={handleClose}
				classes={{ paper: classes.menu }}
				elevation={0}
				style={{ zIndex: 1302 }} //1 above the appBar
				MenuListProps={{ onMouseLeave: handleClose }}
			>
				{menuOptions.map((options, i) => (
					<MenuItem
						key={`${options}${i}`} //option and the index
						selected={i === props.selectedIndex && props.value === 0}
						onClick={(e) => {
							handleMenuItemClick(e, i);
							props.setValue(1);
							handleClose();
						}}
						style={{ color: "black" }}
						classes={{ root: classes.menuItem }}
						component={Link}
						to={options.link}
					>
						{options.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />

				<List disablePadding>
					{routes.map((route) => (
						<ListItem
							key={`${route}${route.activeIndex}`}
							to={route.link}
							onClick={() => {
								setOpenDrawer(false);
								props.setValue(route.activeIndex);
							}}
							selected={props.value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
							component={Link}
							button
							divider
						>
							<ListItemText disableTypography className={classes.drawerItem}>
								{route.name}
							</ListItemText>
						</ListItem>
					))}

					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(6);
						}}
						selected={props.value === 6}
						divider
						button
						style={{ background: "#3E3B6B", color: "#fff" }}
						component={Link}
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						to="/signindonorvendor"
					>
						<ListItemText
							className={classes.drawerItemSelected}
							disableTypography
						>
							Sign In
						</ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(6);
						}}
						selected={props.value === 6}
						divider
						button
						component={Link}
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						to="/signup"
					>
						<ListItemText
							className={classes.drawerItemSelected}
							disableTypography
						>
							Sign Up
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" className={classes.appbar}>
					<Toolbar disableGutters>
						{" "}
						{/** //disableGutters is a boolean that removes all padding*/}
						{matches ? drawer : tabs}
						<Button
							component={Link}
							style={{
								marginLeft: matchesXS
									? "7em"
									: matchesMD
									? "10em"
									: matchesLG
									? "5em"
									: undefined,
								padding: matchesXS ? "0.6em" : matchesMD ? "-2em" : undefined,
							}}
							to="/"
							className={classes.logoContainer}
							onClick={() => props.setValue(0)}
							disableRipple
						>
							<img
								src={logo}
								style={{ height: matchesXS ? "4em" : undefined }}
								alt={logo}
								className={classes.logo}
							/>
						</Button>
						<Button
							style={{ marginLeft: "55em", marginTop: "8px" }}
							component={Link}
							to="/signindonorvendor"
							onClick={() => props.setValue(6)}
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							SIGN IN
						</Button>
						{!isAuthenticated ? (
							<Button
								component={Link}
								to="/signup"
								onClick={() => props.setValue(6)}
								variant="contained"
								color="secondary"
								style={{ backgroundColor: "#2E2E5F" }}
								className={classes.button}
							>
								SIGN UP
							</Button>
						) : null}
						{/** FOR AUTH */}
						{isAuthenticated ? (
							<Grid style={{ marginLeft: "-30px", display: "flex" }}>
								<Grid>
									<Grid style={{ marginLeft: "20px" }}>
										{" "}
										<img
											style={{
												borderRadius: "20px",
												height: "40px",
												width: "60px",
												marginTop: "5px",
											}}
											src={user.picture}
											alt="image per"
										/>
										<Typography
											style={{
												fontSize: "10px",
												fontStyle: "italics",
											}}
										>
											{/**<JSONpretty data={user} /> */}
											<span style={{ fontSize: "10px", color: "#2E2E5F" }}>
												{" "}
												Welcome{" "}
											</span>
											, {user.name}{" "}
										</Typography>
									</Grid>
								</Grid>
								<Grid style={{ marginRight: "20px", marginTop: "28px" }}>
									<Button
										component={Link}
										onClick={() => logout()}
										variant="contained"
										color="secondary"
										style={{ backgroundColor: "#2E2E5F", width: "100px" }}
										className={classes.button}
									>
										SIGN OUT
									</Button>
								</Grid>
							</Grid>
						) : null}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
