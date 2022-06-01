import React from "react";
import { NavLink } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom";
import TrailDescription from "./TrailDescription";

const TrailCard = ({ trail, trails }) => {
	const match = useRouteMatch();
	console.log(trails.id);

	const renderDescription = (
		<div key={trail.id} className="ui grid">
			<div className="sixteen wide column">
				<li className="card">
					<NavLink to={`/traillist/${trail.id}`}>
						<img src={trail.image} alt={trail.name} />

						<h5>{trail.trailName}</h5>
						<p>
							<strong>Location:</strong> {trail.location}
						</p>
						<p>
							<strong>Difficulty:</strong> {trail.difficulty}
						</p>
					</NavLink>
					<Route path={`${match.url}/:trailId`}>
						<TrailDescription trails={trails} />
					</Route>
				</li>
			</div>
		</div>
	);
	return <ul>{renderDescription}</ul>;
};

export default TrailCard;
