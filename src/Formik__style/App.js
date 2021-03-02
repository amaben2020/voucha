import React, { Component } from "react";
import "../../index.css";
import FormikContainer from "../../Component/FormikContainer";
import LoginForm from "../../Component/LoginForm";
import RegistrationForm from "../../Component/RegistrationForm";
import EnrollmentForm from "../../Component/EnrollmentForm";
import Chakra_Login from "../../Component/CHAKRA_LOGIN/Chakra_Login";
import { ThemeProvider, theme } from "@chakra-ui/core";
class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					{/*** <FormikContainer />  */}
					<LoginForm />
					{/*** <RegistrationForm /> */}
					{/***	<EnrollmentForm /> */}
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
