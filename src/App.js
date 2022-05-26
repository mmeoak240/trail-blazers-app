import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TrailsContainer from "./TrailsContainer";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
	const [trails, setTrails] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3004/trails")
			.then((r) => r.json())
			.then((data) => setTrails(data));
	}, []);

	return (
		<div id="trailWrap">
			<NavBar />
			<Switch>
				<Route path="/traillist">
					<TrailsContainer trails={trails} />
				</Route>
				<Route exact path="/">
					<Home trails={trails} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
