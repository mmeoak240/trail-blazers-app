import React, { useState, useEffect } from "react";
import TrailCard from "./TrailCard";

const TrailsContainer = ({ trails }) => {
	const displayTrails = trails.map((trail) => <TrailCard trail={trail} />);
 
	return (<div class="container">
    <ul className="cards">{displayTrails}</ul>
    </div>
};

export default TrailsContainer;
