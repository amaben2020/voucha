import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
function MainSignupForm() {
	const initialValues = {
		email: "",
		course: "",
		TermsOfService: [],
		courseDate: null,
	};
	const onSubmit = async (values) => {
		console.log("FORM DATA", values);
	};

	return (
		<div className="form-control">
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control="input"
								type="email"
								label="Email"
								name="email"
							/>
							<FormikControl
								control="input"
								type="text"
								placeholder="Please enter your phone number"
								label="Phone Number"
								name="number"
							/>

							<FormikControl
								control="select"
								label="Choose your country"
								name="course"
							/>
							<FormikControl
								control="chakrainput"
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control="checkbox"
								label=""
								name="TermsOfService"
							/>

							<Button
								style={{
									borderRadius: 50,
									height: 50,
									width: 205,
									backgroundColor: "#3E3B6B",
									fontSize: "1.5rem",
									color: "#fff",
									"&:hover": {
										backgroundColor: "#F8E7EE",
									},
								}}
								type="submit"
								disabled={!formik.isValid}
							>
								SUBMIT
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default MainSignupForm;
