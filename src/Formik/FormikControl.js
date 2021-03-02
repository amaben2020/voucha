import React from "react";
import Input from "../Formik/Input";
import TextArea from "../Formik/TextArea";
import Select from "../Formik/Select";
import RadioButtons from "../Formik/RadioButtons";
import CheckboxGroup from "../Formik/CheckboxGroup";
import DatePicker from "../Formik/DatePicker";
import Chakra_Login from "./CHAKRA_LOGIN/Chakra_Login";

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		case "textarea":
			return <TextArea {...rest} />;
		case "select":
			return <Select {...rest} />;
		case "radio":
			return <RadioButtons {...rest} />;
		case "checkbox":
			return <CheckboxGroup {...rest} />;
		case "date":
			return <DatePicker {...rest} />;
		case "chakrainput":
			return <Chakra_Login {...rest} />;
		default:
			return null;
	}
	return <div></div>;
}

export default FormikControl;
