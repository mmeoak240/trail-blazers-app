import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailDescription from "./TrailDescription";

const TrailCard = ({ trail, trails }) => {
	const [descriptionFlag, setDescriptionFlag] = useState(false);
	const match = useRouteMatch();

	const handleClick = () => {
		setDescriptionFlag((descriptionFlag) => !descriptionFlag);
	};

	const renderDescription = (
		<div className="ui grid">
			<div className="sixteen wide column">
				<li className="card" id="trailCard">
					<img src={trail.image} alt={trail.name} id="trailCard" />

					<h5>{trail.trailName}</h5>
					<p>
						<strong>Location:</strong> {trail.location}
					</p>
					<p>
						<strong>Difficulty:</strong> {trail.difficulty}
					</p>
					{descriptionFlag ? <TrailDescription trail={trail} /> : null}
					<button onClick={handleClick}>
						{descriptionFlag ? "Hide Description" : "Description"}
					</button>
				</li>
			</div>
		</div>
	);
	return <ul>{renderDescription}</ul>;
};

export default TrailCard;

