import React from "react";
import TrailCard from "./TrailCard";
import Search from "./Search";

const TrailsContainer = ({ trails, setTrails, search, setSearch }) => {
	const displayTrails = trails.filter((trail) =>
		trail.trailName.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="trailsBg">
			<div>
				<h1 id="headingStyle" className="center">
					Blaze These Trails
				</h1>
			</div>
			<Search search={search} setSearch={setSearch} />

			<div id="trailContainer">
				{displayTrails.map((trail) => (
					<TrailCard trail={trail} trails={trails} key={trail.id} />
				))}
			</div>
		</div>
	);
};

export default TrailsContainer;
