import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
function LoginForm() {
	const initialValues = {
		email: "",
		password: "",
	};

	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid Email Format")
			.required("Pls enter your email address"),
		password: Yup.string().required("Enter a valid password"),
	});

	//where you submit to the backend
	const onSubmit = (values) => {
		console.log("Form Data", values);
	};
	return (
		<div
			style={{
				margin: "2em",
				marginTop: "10em",
				marginLeft: "4em",
				height: "32em",
			}}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							//control='input'
							control="chakrainput"
							type="email"
							label="Email"
							name="email"
						/>

						<FormikControl
							control="chakrainput"
							type="password"
							label="Password"
							name="password"
						/>

						<Button
							type="submit"
							style={{
								backgroundColor: "orange",
								padding: "0.5em",
								margin: "1em",
								borderRadius: "1.5em",
								color: "#fff",
								width: "13em",
								boxShadow: "1px soid black",
								fontSize: "1.2rem",
							}}
							disabled={!formik.isValid}
						>
							LOG IN
						</Button>
					</Form>
				)}
			</Formik>
			<Grid style={{ marginTop: "5em", marginLeft: "5em" }}>
				<Typography variant="h6">
					{" "}
					Don't have an account?{" "}
					<span style={{ fontSize: "1.5rem", fontWeight: 900 }}>
						{" "}
						Sign up{" "}
					</span>{" "}
				</Typography>
			</Grid>
		</div>
	);
}

export default LoginForm;
