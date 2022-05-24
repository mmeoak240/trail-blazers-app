import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";

const TrailsContainer = ({ trails }) => {
	const match = useRouteMatch();
	const displayTrails = trails.map((trail) => <TrailCard trail={trail} />);

	return (
		<div class="container">
			<h1 style={{ color: "sienna" }} className="center">
				Trail Blazers
			</h1>
			<ul className="cards">{displayTrails}</ul>;
			<Route path={`${match.url}/:trailId`}>
				<TrailDescription trails={trails} />
			</Route>
		</div>
	);
};

export default TrailsContainer;
