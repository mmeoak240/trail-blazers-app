import { NavLink } from "react-router-dom";

const TrailCard = ({ trail, trails }) => {
	const renderDescription = Object.keys(trails).map((trailId) => (
		<div>
			<NavLink to={`/traillist/${trailId}`}>
				<li key={trail.id} className="card">
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
