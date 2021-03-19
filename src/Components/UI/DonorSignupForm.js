import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import FormInput from "./../FormControl/FormControl";
import { useAuth0 } from "@auth0/auth0-react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export const EnrollmentForm = ({ props, setNamee }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const { loginWithRedirect } = useAuth0();

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="form-control">
			<form className="sign-up-form">
				<div className="group">
					<FormInput
						className="form-input"
						name="name"
						type="text"
						label="Name"
						value={name}
						onChange={handleName}
						required
					/>
					<FormInput
						className="form-input"
						name="email"
						label="Email"
						type="email"
						value={email}
						onChange={handleEmail}
						required
					/>

					<FormInput
						className="form-input"
						name="password"
						label="Password (min: 6 chars)"
						type="password"
						value={password}
						onChange={handlePassword}
						required
					/>
					<FormInput
						className="form-input"
						name="password"
						label="Confirm Password  "
						type="password"
						value={password}
						onChange={handlePassword}
						required
					/>
				</div>
				<div className="buttons">
					<button
						style={{
							marginTop: "0.7em",
							marginLeft: matchesXS ? "5em" : "2em",
							background: matchesXS ? "#3E3B6B" : "#3E3B6B",
							fontSize: "1rem",
							fontWeight: 700,
							cursor: "pointer",
							boxShadow: "1px 1px 5px rgba(0,0,0, 0.75)",
							border: "1px solid #fff",
							padding: "1em",
							borderRadius: "1.5em",
							width: "10em",
							color: matchesXS ? "#3E3B6B" : "#fff",
						}}
						className="signup"
						type="submit"
						onClick={() => loginWithRedirect()}
					>
						SIGN UP
					</button>
				</div>
			</form>
		</div>
	);
};

export default EnrollmentForm;
