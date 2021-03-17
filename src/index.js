import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";

import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
	<Auth0Provider
		domain="dev-yt09r8-f.us.auth0.com"
		clientId="dy6JqOIJM2BeA4IYfWPUvlJLY3GfP9Zu"
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);
