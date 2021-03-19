import React, { useState, useEffect } from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import { useAuth0 } from "@auth0/auth0-react";
function DonorSigninForm({ props, setName, history }) {
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

	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const handleChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		props.history.push("/donordashboard");
	// 	}
	// }, [isAuthenticated]);

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
								padding: "1em",
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
								// onChange={handleChange}
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
							<Button
								type="submit"
								onClick={() => loginWithRedirect()}
								// onClick={() => props.history.push("/donordashboard")}
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
