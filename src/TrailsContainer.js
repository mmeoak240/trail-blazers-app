import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";

const TrailsContainer = ({ trails }) => {
	const match = useRouteMatch();
	const displayTrails = trails.map((trail) => (
		<TrailCard trail={trail} trails={trails} />
	));
	return (
		<div>
			<h1 style={{ color: "sienna" }} className="center">
				Blaze These Trails
			</h1>

			<div>
				{displayTrails}
				<Route path={`${match.url}/:trailId`}>
					<TrailDescription trails={trails} />
				</Route>
			</div>
		</div>
	);
};

export default TrailsContainer;
