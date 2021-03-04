import React from "react";
import { ErrorMessage } from "formik";
import TextError from "./TextError";

function Select(props) {
	const { label, name } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}> {label} </label>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Select;
