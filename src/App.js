import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
