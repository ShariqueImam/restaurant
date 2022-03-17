import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { Provider } from 'react-redux'
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
