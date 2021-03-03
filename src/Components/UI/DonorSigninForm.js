import React, { useContext, useEffect, useState } from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
function DonorSigninForm({ props, setName }) {
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const initialState = {
		name: "",
		email: "",
	};
	const [username, setUsername] = useState(initialState);

	const { loginWithRedirect } = useAuth0();

	const validationSchema = yup.object({
		email: yup.string().email("invalid email format"),
	});
	const handleChange = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const handleChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:4001/signin", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		});
	};

	//SENDING THE REQUEST TO GOOGLE SERVER
	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	const email = email;
	// 	const password = password;
	// 	console.log(password);
	// 	try {
	// 		const response = await axios
	// 			.post("http://localhost:4001/signin", {
	// 				email,
	// 				password,
	// 			})
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	} catch (error) {
	// 		console.log("There was an error", error);
	// 	}
	// };

	return (
		<div
			className="form-control"
			style={{
				height: matchesXS ? "20em" : "38.7em",
			}}
		>
			<Formik>
				{(formik) => {
					return (
						<Form
							onSubmit={handleSubmit}
							style={{
								padding: "2em",
								marginTop: matchesXS ? "-15em" : undefined,
								width: matchesXS ? "13em" : "25em",
								marginLeft: matchesXS
									? "0.1em"
									: matchesSM
									? "10em"
									: undefined,
								borderRadius: "1rem",
							}}
						>
							<FormikControl
								control="input"
								type="email"
								label="Email"
								name="email"
								value={email}
								onChange={handleChange}
								name="email"
								style={{
									marginLeft: matchesXS ? "0.2em" : "0.7em",
									width: matchesXS ? "20em" : "25em",
									borderRadius: "1rem",
								}}
							/>
							<FormikControl
								control="input"
								style={{
									marginLeft: matchesXS ? "0.2em" : "0.7em",
									width: matchesXS ? "20em" : "25em",
									borderRadius: "1rem",
								}}
								type="password"
								required
								label="Password"
								name="password"
								value={password}
								onChange={handleChangePassword}
							/>
							{/* <FormikControl
								control="chakrainput"
								type="password"
								required
								label="Password"
								name="password"
								value={state.password}
								onChange={handleChange}
								name="password"
								style={{
									marginLeft: matchesXS ? "0.2em" : "2em",
									width: matchesXS ? "20em" : "25em",
									borderRadius: "1rem",
								}}
							/> */}
							<Button
								type="submit"
								onClick={() => loginWithRedirect()}
								style={{
									marginTop: "2em",
									marginLeft: matchesXS ? "5em" : "8em",
									background: matchesXS ? "#ffff99" : "#ffa500",
									fontSize: "1rem",
									fontWeight: 700,
									cursor: "pointer",
									boxShadow: "1px 1px 5px rgba(0,0,0, 0.75)",
									border: "1px solid #fff",
									padding: "1em",
									borderRadius: "1.5em",
									width: "10em",
									color: matchesXS ? "#ffa500" : "#fff",
								}}
								disabled={!formik.isValid}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default DonorSigninForm;

{
	/**
 export class Signin extends Component {
	



	

	render() {
		//console.log(this.state);
		console.log(this.handleChange);
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign In with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<div className="group">
						<FormControl className="form-input">
							<InputLabel htmlFor="email">Email address</InputLabel>
							<Input
								className="form-input"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
								id="email"
								aria-describedby="my-helper-text"
							/>
							<FormHelperText id="my-helper-text">
								Enter your email here
							</FormHelperText>
						</FormControl>

						<FormControl className="form-input">
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								className="form-input"
								name="password"
								type="password"
								required
								value={this.state.password}
								onChange={this.handleChange}
								id="my-input"
								aria-describedby="my-helper-text"
							/>
							<FormHelperText id="my-helper-text">
								Please enter your password
							</FormHelperText>
						</FormControl>
					</div>
					<div className="buttons">
						<button className="signin" signin type="submit" value="Submit Form">
							SIGN IN
						</button>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
*/
}
