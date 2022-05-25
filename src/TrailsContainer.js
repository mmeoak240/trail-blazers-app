import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";

const TrailsContainer = ({ trails }) => {
	const match = useRouteMatch();
	const displayTrails = trails.map((trail) => (
		<TrailCard trail={trail} trails={trails} />
	));
	console.log(match.url);
	return (
		<div className="container">
			<h1 style={{ color: "sienna" }} className="center">
				Trail Blazers
			</h1>
			<Route exact path={match.url}>
				<ul className="cards">{displayTrails}</ul>;
			</Route>

			<Route path={`${match.url}/:trailId`}>
				<TrailDescription trails={trails} />
			</Route>
		</div>
	);
};

export default TrailsContainer;
