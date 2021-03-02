import React from "react";
import FormikControl from "../../Formik/FormikControl";
import { Form, Formik } from "formik";
import * as yup from "yup";
function DonorProfileForm2() {
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

	const countryOptions = [
		{ key: "Individual", value: "Ind" },
		{ key: "Company", value: "Com" },
	];
	const individualOptions = [
		{ key: "Organisation", value: "org" },
		{ key: "Individual", value: "ind" },
	];

	const bankOptions = [
		{ key: "Access Bank", value: "a" },
		{ key: "Fidelity Bank", value: "b" },
		{ key: "UBA ", value: "c" },
		{ key: "Zenith Bank", value: "d" },
		{ key: "Polaris Bank", value: "e" },
		{ key: "First Bank", value: "f" },
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
		email: yup.string().email("invalid email format"),
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
								name="name"
							/>
							<FormikControl
								control="select"
								options={bankOptions}
								label="Bank"
								name="course"
								placeholder="Select Bank"
							/>
							<FormikControl
								control="input"
								type="text"
								placeholder="Account Name as it appears in Bank"
								label="Account Name"
								name="number"
							/>
							<button type="submit" disabled={!formik.isValid}>
								Submit
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default DonorProfileForm2;
