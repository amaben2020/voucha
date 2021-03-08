import React, { useState } from "react";
import Header from "../Components/UI/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./UI/Theme";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./UI/Footer";
import LandingPage from "./UI/LandingPage";

// import Wallet from "./UI/Wallet";
import About from "../Components/UI/About";
import HowItWorks from "./UI/HowItWorks";
import VendorSignUp from "../Components/UI/VendorSignUp";
import FAQ from "../Components/UI/FAQ";
import HowItWorks1 from "../Components/UI/HowItWorks1";
import HowItWorks2 from "../Components/UI/HowItWorks2";
import HowItWorks5 from "../Components/UI/HowItWorks5";
import HowItWorks4 from "./UI/HowItWorks4";
import HowItWorks3 from "./UI/HowItWorks3";
import SignUp from "../Components/UI/SignUp";
// import UserSignIn from "./UI/UserSignIn";
import WhyVoucha from "../Components/UI/WhyVoucha";
import DonorDashboard from "../Components/UI/DonorDashboard";
import DonorSignUp from "../Components/UI/DonorSignup";
// import GenerateVoucher from "./UI/GenerateVoucher";
// import FundWallet from "./UI/FundWallet";
// import GenerateVouchers from "./UI/GenerateVouchers";
// import GenerateVouchers2 from "./UI/GenerateVouchers2";
// import DistributeVouchers from "./UI/DistributeVouchers";
// import DistributeVouchers2 from "./UI/DistributeVouchers2";
// import SpecificDemography from "./UI/SpecificDemography";
// import SpecificDemography2 from "./UI/SpecificDemography2";
// import Profile from "./UI/Profile";
// import VendorProfile from "./UI/VendorProfile";
// import VendorWallet from "./UI/VendorWallet";
// import DonorWithdrawingFromWallet from "./UI/DonorWithdrawingFromWallet";
// import DonorFundWallet from "./UI/DonorFundWallet";
// import VendorWithdrawingFromWallet from "./UI/VendorWithdrawingFromWallet";
// import VendorRedeemVoucher from "./UI/VendorRedeemVoucher";
import MainSignup from "./UI/MainSignup";
import SignInDonorVendor from "./UI/SignInDonorVendor";
import DonorSignin from "./UI/DonorSignin";
import VendorSignin from "./UI/VendorSignin";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./UI/PrivateRoute";
// function App({ setCurrentUser, currentUser }) {
function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);
	const { isAuthenticated } = useAuth0();
	return (
		<ThemeProvider theme={theme}>
			{" "}
			<BrowserRouter>
				<Header
					// name={user.name}
					// user={}
					// currentUser={setCurrentUser}
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>

				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/signup"
						render={(props) => (
							<SignUp
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					{/* <Route
							exact
							path="/donordashboard"
							render={(props) =>
								!isAuthenticated ? (
									<Redirect to="/" />
								) : (
									<DonorDashboard
										{...props}
										setValue={setValue}
										setSelectedIndex={setSelectedIndex}
									/>
								)
							}
						/> */}
					<Route
						exact
						path="/donordashboard"
						render={(props) => (
							<DonorDashboard
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/donorsignup"
						render={(props) => (
							<DonorSignUp
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					{/* <Route
						exact
						path="/wallet"
						render={(props) => (
							<Wallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "} */}
					{/* <Route
						exact
						path="/profile"
						render={(props) => (
							<Profile
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/fundwallet"
						render={(props) => (
							<FundWallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/donorfundwallet"
						render={(props) => (
							<DonorFundWallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/generatevoucher"
						render={(props) => (
							<GenerateVoucher
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/vendorwallet"
						render={(props) => (
							<VendorWallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/generatevouchers"
						render={(props) => (
							<GenerateVouchers
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "} */}
					{/* <Route
						exact
						path="/generatevouchers2"
						render={(props) => (
							<GenerateVouchers2
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/distributevouchers"
						render={(props) => (
							<DistributeVouchers
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "} */}
					{/* <Route
						exact
						path="/vendorprofile"
						render={(props) => (
							<VendorProfile
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/distributevouchers2"
						render={(props) => (
							<DistributeVouchers2
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "} */}
					{/* <Route
						exact
						path="/specificdemography"
						render={(props) => (
							<SpecificDemography
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "} */}
					{/* <Route
						exact
						path="/vendorredeemvoucher"
						render={(props) => (
							<VendorRedeemVoucher
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					<Route
						exact
						path="/donorsignin"
						render={(props) =>
							isAuthenticated ? (
								<Redirect to="/" />
							) : (
								<DonorSignin
									{...props}
									setValue={setValue}
									setSelectedIndex={setSelectedIndex}
								/>
							)
						}
					/>
					{/* <Route
							exact
							path="/donorsignin"
							render={(props) =>
								user ? (
									<Redirect to="/" />
								) : (
									<DonorSignin
										setValue={setValue}
										setSelectedIndex={setSelectedIndex}
									/>
								)
							}
						/> */}
					<Route
						exact
						path="/vendorsignin"
						render={(props) =>
							isAuthenticated ? (
								<Redirect to="/" />
							) : (
								<VendorSignin
									{...props}
									setValue={setValue}
									setSelectedIndex={setSelectedIndex}
								/>
							)
						}
					/>
					{/* <Route
						exact
						path="/specificdemography2"
						render={(props) => (
							<SpecificDemography2
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					<Route
						exact
						path="/vendorsignup"
						render={(props) => (
							<VendorSignUp
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					{/* <Route
						exact
						path="/usersignin"
						render={(props) => (
							<UserSignIn
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					<Route
						exact
						path="/signindonorvendor"
						render={(props) => (
							<SignInDonorVendor
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/howItWorks"
						render={(props) => (
							<HowItWorks
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/howItWorks1"
						render={(props) => (
							<HowItWorks1
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/howitworks2"
						render={(props) => (
							<HowItWorks2
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "}
					<Route
						exact
						path="/howitworks5"
						render={(props) => (
							<HowItWorks5
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "}
					<Route
						exact
						path="/howitworks4"
						render={(props) => (
							<HowItWorks4
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "}
					<Route
						exact
						path="/mainsignup"
						render={(props) => (
							<MainSignup
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "}
					<Route
						exact
						path="/howitworks3"
						render={(props) => (
							<HowItWorks3
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>{" "}
					{/* <Route
						exact
						path="/vendorwithdrawingfromwallet"
						render={(props) => (
							<VendorWithdrawingFromWallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					{/* <Route
						exact
						path="/donorwithdrawingfromwallet"
						render={(props) => (
							<DonorWithdrawingFromWallet
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/> */}
					<Route
						exact
						path="/howitworks3"
						render={(props) => (
							<HowItWorks3
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/howitworks5"
						render={(props) => (
							<HowItWorks5
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/about-us"
						render={(props) => (
							<About
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/why-voucha"
						render={(props) => (
							<WhyVoucha
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/faq"
						render={(props) => (
							<FAQ
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
