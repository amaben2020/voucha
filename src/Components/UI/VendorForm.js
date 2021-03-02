import React from "react";
import FormikControl from "../../Formik/FormikControl";
import { Form, Formik } from "formik";
import * as yup from "yup";
function EnrollmentForm() {
	function myFunction() {
		document.getElementById("form-control").style.overflow = "scroll";
	}
	const organizationOptions = [
		{ key: "Select your organisation category", value: "" },
		{ key: "Aviation", value: "react" },
		{ key: "Banking", value: "angular" },
		{ key: "Philanthropy", value: "vue" },
	];

	const dropDownOptions = [
		{ key: "Select your organisation category", value: "" },
		{ key: "Aviation", value: "react" },
		{ key: "Banking", value: "angular" },
		{ key: "Philanthropy", value: "vue" },
	];

	const bankOptions = [
		{ key: "Access", value: "Acc" },
		{ key: "Boi", value: "Boi" },
		{ key: "Polaris", value: "Pol" },
		{ key: "Zenith", value: "Zen" },
		{ key: "Sterling", value: "Ster" },
	];
	const individualOptions = [
		{ key: "Organisation", value: "org" },
		{ key: "Individual", value: "ind" },
	];

	const organizationCategory = [
		{ key: "Philanthropy", value: "a" },
		{ key: "Faith-based organisation", value: "b" },
		{ key: "Government/ Public sector", value: "c" },
		{ key: "International development", value: "d" },
		{ key: "Social enterprise", value: "e" },
		{ key: "Community-based organisation", value: "f" },
		{ key: "Others", value: "g" },
	];

	const checkboxOptions = [
		{
			key: "I agree to the Terms of Service",
			value:
				"I totally agree to the Terms and conditions of this service. My intention is to touch lives and empower communities",
		},
	];

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
								label="Account Number"
								name="number"
							/>
							<FormikControl
								control="select"
								options={bankOptions}
								label="Bank"
								name="course"
							/>
							<FormikControl
								control="input"
								type="text"
								placeholder="Please enter your phone number"
								label="Account Name"
								name="name"
							/>
							<button
								style={{
									background: "#8f076c",
									marginLeft: "1em",
									fontWeight: "3rem",
									fontSize: "0.9rem",
									marginTop: "0.5em",
									borderRadius: "1.5em",
									color: "#fff",
								}}
								type="submit"
								disabled={!formik.isValid}
							>
								Submit
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default EnrollmentForm;
