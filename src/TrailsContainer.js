import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";

const TrailsContainer = ({ trails }) => {
	const displayTrails = trails.map((trail) => (
		<TrailCard trail={trail} trails={trails} />
	));
	return (
		<div className="container">
			<h1 style={{ color: "sienna" }} className="center">
				Blaze These Trails
			</h1>
			<ul className="cards">{displayTrails}</ul>;
		</div>
	);
};

export default TrailsContainer;
