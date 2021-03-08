import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useAuth0 } from "@auth0/auth0-react";
// import * as yup from "yup";
function VendorSigninForm() {
	const { loginWithRedirect } = useAuth0();
	const initialValues = {
		email: "",
		password: "",
		errors: {},
	};

	const onSubmit = (values) => {
		console.log("FORM DATA", values);
	};

	// const validationSchema = yup.object({
	// 	email: yup.string().email("invalid email format"),
	// });

	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

	return (
		<div className="form-control" style={{ height: "41.4em" }}>
			<Formik
				// validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control="input"
								type="email"
								label="Email"
								name="email"
								style={{
									borderRadius: "1rem",
									width: matchesXS ? "22.5em" : undefined,
								}}
							/>

							<FormikControl
								control="input"
								type="password"
								label="Password"
								name="password"
								style={{
									borderRadius: "1rem",
									width: matchesXS ? "22.5em" : undefined,
								}}
							/>

							<Button
								type="submit"
								onClick={() => loginWithRedirect()}
								style={{
									marginTop: "2em",
									background: "#8f076c",
									padding: "1em",
									borderRadius: "1.5em",
									width: "10em",
									cursor: "pointer",
									boxShadow: "1px 1px 5px rgba(0,0,0, 0.75)",
									border: "1px solid #fff",
									color: "#fff",
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

export default VendorSigninForm;
