import React, { useState } from "react";

const NewTrail = () => {
	const [formData, setFormData] = useState({
		image: "",
		trailName: "",
		location: "",
		difficulty: "",
		description: "",
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});

		// console.log(formData);
	}

	function handleSubmit(e) {
		e.preventDefault();
		addTrail(formData);
	}

	function addTrail(newTrail) {
		fetch("http://localhost:3004/trails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTrail),
		})
			.then((res) => res.json)
			.then((trail) => console.log(trail));
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<label className="create">Image</label>
			<input
				className="create"
				id="image"
				type="text"
				onChange={handleChange}
				value={formData.image}
			/>
			<label className="create">Trail Name</label>
			<input
				className="create"
				id="trailName"
				type="text"
				onChange={handleChange}
				value={formData.trailName}
			/>
			<label className="create">Location</label>
			<input
				className="create"
				id="location"
				type="text"
				onChange={handleChange}
				value={formData.location}
			/>
			<label className="create">Difficulty</label>
			<input
				className="create"
				id="difficulty"
				type="text"
				onChange={handleChange}
				value={formData.difficulty}
			/>
			<label className="create">Description</label>
			<input
				className="create"
				id="description"
				type="text"
				onChange={handleChange}
				value={formData.description}
			/>
			<button className="create-button" type="submit">
				Submit
			</button>
		</form>
	);
};

export default NewTrail;

// const [formData, setFormData] = useState({
// 	image: "",
// 	trailName: "",
// 	location: "",
// 	difficulty: "",
// 	description: "",
// });

// function handleChange(e) {
// 	const subject = e.target.subject;
// 	const value = e.target.value;

// 	console.log(value);

// 	setFormData({
// 		...formData,
// 		[subject]: value,
// 	});
// }

// const [image, setimage] = useState("");
// const [trailName, setTrailName] = useState("");
// const [location, setLocation] = useState("");
// const [difficulty, setDifficulty] = useState("");
// const [description, setDescription] = useState("");
