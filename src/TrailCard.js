import React from "react";
import { NavLink } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom";
import TrailDescription from "./TrailDescription";

const TrailCard = ({ trail, trails }) => {
	const match = useRouteMatch();

	const renderDescription = (
		<div className="ui grid">
			<div className="sixteen wide column">
				<li className="card" id="trailCard">
					<NavLink to={`/traillist/${trail.id}`}>
						<img src={trail.image} alt={trail.name} id="trailCard" />

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
