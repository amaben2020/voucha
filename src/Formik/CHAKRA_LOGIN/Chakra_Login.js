import React from "react";
import {
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/core";
import { Field } from "formik";

function Chakra_Login(props) {
	const { label, name, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<FormControl isInvalid={form.errors[name] && form.touched[name]}>
						<FormLabel htmlFor={name}> {label}</FormLabel>
						<input id={name} {...rest} {...field} />
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
}

export default Chakra_Login;
