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
		{ key: "    VIA BANK TRANSFER", value: "transfer" },
		{ key: "VIA CARD PAYMENT", value: "card" },
		{ key: "VIA USSD", value: "ussd" },
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
								label="Amount"
								name="number"
							/>
							<FormikControl
								control="select"
								options={bankOptions}
								label="Mode of Transfer"
								name="course"
							/>
							<button
								style={{
									background: "#1e4187",
									marginLeft: "1em",
									fontWeight: "3rem",
									height: 40,
									fontSize: "1.1rem",
									marginTop: "4.8em",
									borderRadius: "1.5em",
									color: "#fff",
								}}
								type="submit"
								disabled={!formik.isValid}
							>
								MAKE PAYMENT
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default EnrollmentForm;
