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
		const subject = e.target.subject;
		value = e.target.value;

		setFormData({
			...formData,
			[subject]: value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				subject="trailName"
				type="text"
				onChange={handleChange}
				value={formData.trailName}
			/>
			<input
				subject="location"
				type="text"
				onChange={handleChange}
				value={formData.location}
			/>
			<input
				subject="difficulty"
				type="text"
				onChange={handleChange}
				value={formData.difficulty}
			/>
			<input
				subject="description"
				type="text"
				onChange={handleChange}
				value={formData.description}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default NewTrail;
