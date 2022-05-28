import React, { useState } from "react";

const NewTrail = () => {
	const [formData, setFormData] = useState({
		image: "",
		trailName: "",
		location: "",
		difficulty: "",
		description: "",
	});

	const [trailName, setTrailName] = useState("");

	function handleChange(e) {
		const subject = e.target.subject;
		const value = e.target.value;

		setFormData({
			...formData,
			[subject]: value,
		});
	}

	// console.log(formData);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(e.target.value);
	}

	function handleChangeTwo(e) {
		setTrailName(e.target.value);
		// console.log(e.target.value);
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<label className="create">Image</label>
			<input
				className="create"
				subject="image"
				type="text"
				onChange={handleChange}
				value={formData.image}
			/>
			<label className="create">Trail Name</label>
			<input
				id="test"
				className="create"
				subject="trailName"
				type="text"
				onChange={handleChangeTwo}
				value={trailName}
			/>
			<label className="create">Location</label>
			<input
				className="create"
				subject="location"
				type="text"
				onChange={(e) => handleChange(e)}
				value={formData.location}
			/>
			<label className="create">Difficulty</label>
			<input
				className="create"
				subject="difficulty"
				type="text"
				onChange={handleChange}
				value={formData.difficulty}
			/>
			<label className="create">Description</label>
			<input
				className="create"
				subject="description"
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
