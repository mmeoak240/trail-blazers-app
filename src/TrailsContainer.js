import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";
import SortSearch from "./SortSearch";

const TrailsContainer = ({ trails, search, setSearch }) => {
	const displayTrails = trails.filter((trail) =>
		trail.trailName.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<h1 style={{ color: "sienna" }} className="center">
				Blaze These Trails
			</h1>
			<SortSearch search={search} setSearch={setSearch} />
			<div id="trailContainer">
				{displayTrails.map((trail) => (
					<TrailCard trail={trail} />
				))}
			</div>
		</div>
	);
};

export default TrailsContainer;
