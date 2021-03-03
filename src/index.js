import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import { store } from "./redux/User/store/store";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
	<Auth0Provider
		domain="dev-n34rdis4.us.auth0.com"
		clientId="uW2cOWbWgM6mFLgIEFkEm6Z0VOYPUeXy"
		redirectUri={window.location.origin}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>,
	document.getElementById("root")
);
