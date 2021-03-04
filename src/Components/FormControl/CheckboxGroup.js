import React from "react";
import { ErrorMessage } from "formik";
import TextError from "./../UI/TextError";

function CheckboxGroup(props) {
	const { label, name } = props;

	return (
		<div className="form-control">
			<label> {label} </label>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default CheckboxGroup;
