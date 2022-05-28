import React, { useState } from "react";

const NewTrail = () => {
	const [image, setimage] = useState("");
	const [trailName, setTrailName] = useState("");
	const [location, setLocation] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [description, setDescription] = useState("");

	// console.log(formData);

	function handleSubmit(e) {
		e.preventDefault();
		// console.log(e.target.value);
	}

	function handleChange(e) {
		setTrailName(e.target.value);
		console.log(e.target.value);
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<label className="create">Image</label>
			<input
				className="create"
				subject="image"
				type="text"
				onChange={handleChange}
				value={image}
			/>
			<label className="create">Trail Name</label>
			<input
				id="test"
				className="create"
				subject="trailName"
				type="text"
				onChange={handleChange}
				value={trailName}
			/>
			<label className="create">Location</label>
			<input
				className="create"
				subject="location"
				type="text"
				onChange={handleChange}
				value={location}
			/>
			<label className="create">Difficulty</label>
			<input
				className="create"
				subject="difficulty"
				type="text"
				onChange={handleChange}
				value={difficulty}
			/>
			<label className="create">Description</label>
			<input
				className="create"
				subject="description"
				type="text"
				onChange={handleChange}
				value={description}
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
