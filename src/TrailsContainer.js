import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";
import SortSearch from "./SortSearch";

const TrailsContainer = ({ trails, setTrails, search, setSearch }) => {
	const displayTrails = trails.filter((trail) =>
		trail.trailName.toLowerCase().includes(search.toLowerCase())
	);

	function sortDifficulty() {
		setTrails(
			trails.sort(function (a, b) {
				return a - b;
			})
		);
	}

	return (
		<div style={{ backgroundColor: "white" }}>
			<h1 style={{ color: "sienna" }} className="center">
				Blaze These Trails
			</h1>
			<SortSearch
				search={search}
				setSearch={setSearch}
				sortDifficulty={sortDifficulty}
			/>

			<div id="trailContainer">
				{displayTrails.map((trail) => (
					<TrailCard trail={trail} trails={trails} />
				))}
			</div>
		</div>
	);
};

export default TrailsContainer;
