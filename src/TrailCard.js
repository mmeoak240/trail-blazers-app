import { NavLink } from "react-router-dom";

const TrailCard = ({ trail, trails }) => {
	// const [id, image, name, location, difficulty] = trail;
const renderDescription = Object.keys(trails).map((trailId) =>)
	return (
		<NavLink>
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
	);
};

export default TrailCard;
