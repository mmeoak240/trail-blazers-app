import { NavLink } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom";
import TrailDescription from "./TrailDescription";

const TrailCard = ({ trail, trails }) => {
	const match = useRouteMatch();

	console.log(Object.keys(trails));
	const renderDescription = Object.keys(trails).map((trailId) => (
		<div key={trail.id}>
			<NavLink to={`/traillist/${trailId}`}>
				<li className="card">
					<img src={trail.image} alt={trail.name} />
					<h4>{trail.name}</h4>
					<p>
						<strong>Location:</strong> {trail.location}
					</p>
					<p>
						<strong>Difficulty:</strong> {trail.difficulty}
					</p>
				</li>
			</NavLink>
			<Route path={`${match.url}/:trailId`}>
				<TrailDescription trails={trails} />
			</Route>
		</div>
	));

	return <ul>{renderDescription}</ul>;
};

export default TrailCard;
