import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TrailsContainer from "./TrailsContainer";
import NewTrail from "./NewTrail";

function App() {
	const [search, setSearch] = useState("");
	function handleSort() {}

	const [trails, setTrails] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3004/trails")
			.then((r) => r.json())
			.then((data) => setTrails(data));
	}, []);

	return (
		<div id="trailWrap" className="backgroundImg">
			<NavBar />
			<Switch>
				<Route path="/traillist">
					<TrailsContainer
						trails={trails}
						search={search}
						setSearch={setSearch}
					/>
				</Route>
				<Route path="/newtrail">
					<NewTrail />
				</Route>
				<Route exact path="/">
					<Home trails={trails} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
