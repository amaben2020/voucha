import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
function RegistrationForm() {
	const options = [
		{ key: "Email", value: "emailmoc" },
		{ key: "Telephone", value: "telephonemoc" },
	];

	const initialValues = {
		email: "",
		password: "",
		confirmPassword: "",
		modeOfContact: "",
		phone: "",
	};
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid Email Format").required("Required"),
		password: Yup.string().required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), ""], "Passwords must match")
			.required("Required"),
		modeOfContact: Yup.string().required("Required"),
		phone: Yup.string().when("modeOfContact", {
			is: "telephonemoc",
			then: Yup.string().required("Required"),
		}),
	});

	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="form-control">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
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
							/>
							<FormikControl
								control="input"
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control="input"
								type="password"
								label="Confirm Passoword"
								name="confirmPassword"
							/>
							<FormikControl
								control="radio"
								options={options}
								label="Mode of Contact"
								name="modeOfContact"
							/>
							<FormikControl
								control="input"
								type="text"
								label="Phone number"
								name="phone"
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

export default RegistrationForm;
