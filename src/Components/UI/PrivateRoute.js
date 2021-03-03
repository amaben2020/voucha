const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/donorsignup" />
			)
		}
	/>
);
