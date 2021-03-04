import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckboxGroup(props) {
	const { label, name, options, ...rest } = props;

	return (
		<div className="form-control">
			<label> {label} </label>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default CheckboxGroup;
