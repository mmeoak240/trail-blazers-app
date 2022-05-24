import { useParams } from "react-router-dom";

const TrailDescription = () => {
	const params = useParams();
	return (
		<div>
			<p>{trails[params.trailId].description}</p>
		</div>
	);
};

export default TrailDescription;
