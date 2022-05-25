import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
	const [trails, setTrails] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3004/trails")
			.then((r) => r.json())
			.then((data) => setTrails(data));
	}, []);

	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/">
					<Home trails={trails} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
