import { NavLink } from "react-router-dom";

const TrailCard = ({ trail, trails }) => {
	const renderDescription = Object.keys(trails).map((trailId) => (
		<NavLink to={`/trails/${trailId}`}>
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
	));

	return <ul>{renderDescription}</ul>;
};

export default TrailCard;
