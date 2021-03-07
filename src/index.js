import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import { store } from "./redux/User/store/store";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
	<Auth0Provider
		domain="dev-yt09r8-f.us.auth0.com"
		clientId="Lg8czs3VU1MXqwzDxpOdTN6kaE6uTyYT"
		redirectUri={window.location.origin}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>,
	document.getElementById("root")
);
