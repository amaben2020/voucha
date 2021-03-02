import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropDownOptions = [
	{ key: "Select an option", value: "" },
	{ key: "Option 1", value: "Donation" },
	{ key: "Option 2", value: "Option 2" },
	{ key: "Option 3", value: "Option 3" },
];

const radioOptions = [
	{ key: "Select an option", value: "" },
	{ key: "Option 1", value: "rOptions1" },
	{ key: "Option 2", value: "rOption 2" },
	{ key: "Option 3", value: "rOption 3" },
];

const checkboxOption = [
	{ key: "Select an option", value: "" },
	{ key: "Option 1", value: "cOptions1" },
	{ key: "Option 2", value: "cOption 2" },
	{ key: "Option 3", value: "cOption 3" },
];

const initialValues = {
	email: "",
	description: "",
	selectOption: "",
	checkboxOption: [],
	birthDate: null,
};

const validationSchema = Yup.object({
	email: Yup.string().required("Kindly input your email"),
	description: Yup.string().required("Required"),
	selectOption: Yup.string().required("Required"),
	radioOptions: Yup.string().required("Required"),
	checkboxOption: Yup.array().required("Required"),
	birthDate: Yup.date().required("Required").nullable(),
});

const onSubmit = (values) => console.log(JSON.parse(JSON.stringify(values)));

function FormikContainer() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					<FormikControl
						control="textarea"
						label="Description"
						name="description"
					/>
					<FormikControl
						control="select"
						label="Select a topic"
						name="selectOption"
						options={dropDownOptions}
					/>
					<FormikControl
						control="radio"
						label="Radio Topic"
						name="radioOptions"
						options={radioOptions}
					/>
					<FormikControl
						control="checkbox"
						label="Checkbox Topic"
						name="checkboxOption"
						options={checkboxOption}
					/>
					<FormikControl control="date" label="Pick a date" name="birthDate" />
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
