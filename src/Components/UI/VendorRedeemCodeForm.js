import React from "react";
import FormikControl from "../../Formik/FormikControl";
import { Form, Formik } from "formik";
import * as yup from "yup";
function EnrollmentForm() {
	function myFunction() {
		document.getElementById("form-control").style.overflow = "scroll";
	}

	const initialValues = {
		email: "",

		course: "",
		TermsOfService: [],
		courseDate: null,
	};

	const onSubmit = (values) => {
		console.log("FORM DATA", values);
	};

	const validationSchema = yup.object({
		name: yup.string(),
		number: yup.string(),
		course: yup.string().required("Required"),
	});

	return (
		<div className="form-control">
			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							{" "}
							<FormikControl
								control="input"
								type="text"
								label=" VENDOR CODE"
								name="number"
							/>{" "}
							<button
								style={{
									background: "#8f076c",
									marginLeft: "1em",
									fontWeight: "3rem",
									fontSize: "0.9rem",
									marginTop: "0.5em",
									borderRadius: "1.5em",
									color: "#fff",
									height: 40,
								}}
								type="submit"
								disabled={!formik.isValid}
							>
								REDEEM
							</button>{" "}
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default EnrollmentForm;
