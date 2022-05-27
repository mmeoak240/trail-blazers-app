import React, { useState } from "react";

const NewTrail = () => {
	const [formData, setFormData] = useState({
		image: "",
		trailName: "",
		location: "",
		difficulty: "",
		description: "",
	});

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleFirstNameChange}
				value={formData.trailName}
			/>
			<input
				type="text"
				onChange={handleLastNameChange}
				value={formData.location}
			/>
			<input
				type="text"
				onChange={handleLastNameChange}
				value={formData.difficulty}
			/>
			<input
				type="text"
				onChange={handleLastNameChange}
				value={formData.description}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default NewTrail;
