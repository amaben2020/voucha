import React from "react";
import Input from "./../UI/Input";
// import TextArea from "../Formik/TextArea";
import Select from "./../UI/Select";
import RadioButtons from "./../UI/RadioButtons";
import CheckboxGroup from "./CheckboxGroup";

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		// case "textarea":
		// 	return <TextArea {...rest} />;
		case "select":
			return <Select {...rest} />;
		case "radio":
			return <RadioButtons {...rest} />;
		case "checkbox":
			return <CheckboxGroup {...rest} />;

		default:
			return null;
	}
	return <div></div>;
}

export default FormikControl;
