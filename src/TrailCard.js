const TrailCard = ({ trail }) => {
	// const [id, image, name, location, difficulty] = trail;

	return (
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
	);
};

export default TrailCard;
