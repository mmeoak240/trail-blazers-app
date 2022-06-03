import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TrailsContainer from "./TrailsContainer";
import NewTrail from "./NewTrail";

function App() {
	const [trails, setTrails] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:3004/trails")
			.then((r) => r.json())
			.then((data) => setTrails(data));
	}, []);

	function handleSubmit(e, newTrail, setFormData) {
		e.preventDefault();

		fetch("http://localhost:3004/trails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTrail),
		})
			.then((res) => res.json())
			.then((newTrail) => setTrails([newTrail, ...trails]));
		e.target.reset();
		setFormData("");
	}

	return (
		<div id="trailWrap">
			<NavBar />
			<Switch>
				<Route path="/traillist">
					<TrailsContainer
						trails={trails}
						setTrails={setTrails}
						search={search}
						setSearch={setSearch}
					/>
				</Route>
				<Route path="/newtrail">
					<NewTrail handleSubmit={handleSubmit} />
				</Route>
				<Route exact path="/">
					<Home trails={trails} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
